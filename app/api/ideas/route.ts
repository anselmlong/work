import { parseDescription, parseIdeas, systemPrompt, type IdeasResponse } from "@/lib/ideas";

const windowMs = 60_000;
const maxRequests = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string, now: number): boolean {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= maxRequests) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5_000) {
    for (const [key, times] of hits) {
      if (hits.size <= 4_000) break;
      if (times.every((t) => now - t >= windowMs) || hits.size > 5_000) hits.delete(key);
    }
  }
  return false;
}

function clientIp(request: Request): string {
  const forwarded =
    request.headers.get("x-vercel-forwarded-for") ?? request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function reply(body: IdeasResponse, status: number, headers?: HeadersInit) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

export async function POST(request: Request) {
  if (rateLimited(clientIp(request), Date.now())) {
    return reply(
      {
        ok: false,
        reason: "rate_limited",
        message: "That is a lot of ideas in a minute. Wait a moment and try again.",
      },
      429,
      { "Retry-After": "60" },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    body = null;
  }
  const parsed = parseDescription((body as { description?: unknown } | null)?.description);
  if (!parsed.ok) {
    return reply({ ok: false, reason: "invalid", message: parsed.error }, 400);
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return reply(
      {
        ok: false,
        reason: "unavailable",
        message: "The live demo is switched off right now.",
      },
      503,
    );
  }

  const failed = () =>
    reply(
      {
        ok: false,
        reason: "failed",
        message: "The ideas did not come through this time. Try again in a moment.",
      },
      502,
    );

  let upstream: Response;
  try {
    upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://work.anselmlong.com",
        "X-Title": "Anselm Long",
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || "anthropic/claude-haiku-4.5",
        max_tokens: 700,
        temperature: 0.7,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: parsed.description },
        ],
      }),
      signal: AbortSignal.timeout(15_000),
    });
  } catch {
    console.error("ideas: upstream request did not complete");
    return failed();
  }

  if (!upstream.ok) {
    console.error(`ideas: upstream returned ${upstream.status}`);
    return failed();
  }

  const data = (await upstream.json().catch(() => null)) as {
    choices?: { message?: { content?: unknown }; finish_reason?: string }[];
  } | null;
  const choice = data?.choices?.[0];
  const content = choice?.message?.content;
  const ideas =
    choice?.finish_reason !== "length" && typeof content === "string" ? parseIdeas(content) : null;
  if (!ideas) {
    console.error("ideas: upstream reply did not match the expected shape");
    return failed();
  }

  return reply({ ok: true, ideas }, 200);
}
