export const sizes = ["small", "medium", "larger"] as const;
export type IdeaSize = (typeof sizes)[number];

export type Idea = {
  title: string;
  does: string;
  saves: string;
  size: IdeaSize;
};

export const minLength = 3;
export const maxLength = 300;

export type DescriptionResult =
  | { ok: true; description: string }
  | { ok: false; error: string };

export function parseDescription(input: unknown): DescriptionResult {
  if (typeof input !== "string") {
    return { ok: false, error: "Describe your business in a sentence or two." };
  }
  const description = input.replace(/\s+/g, " ").trim();
  if (description.length < minLength) {
    return { ok: false, error: "Add a few more words about your business." };
  }
  if (description.length > maxLength) {
    return { ok: false, error: `Keep it under ${maxLength} characters.` };
  }
  return { ok: true, description };
}

export const systemPrompt = `You suggest software and automation ideas for small and mid-sized businesses in Singapore, on behalf of an independent software engineer who builds websites, custom software and AI automation.

The user describes their business. Reply with exactly three ideas that a single engineer could build for them. Each idea must be concrete and specific to that business, in plain language a busy owner understands, with no jargon.

Rules:
- Reply with JSON only, no prose and no code fences, in this shape:
  {"ideas":[{"title":"...","does":"...","saves":"...","size":"small|medium|larger"}]}
- title: at most 8 words, sentence case.
- does: one or two sentences on what it does, at most 35 words.
- saves: one sentence on the time, effort or mistakes it saves, at most 25 words.
- size: "small" (a week or two), "medium" (a few weeks) or "larger" (a bigger project).
- Do not give prices, percentages, hours or any other specific figures.
- Do not use em dashes. Do not use hype words such as revolutionary, seamless, cutting-edge, game-changing, supercharge or unlock.
- If the description is not a business, suggest ideas for the closest reasonable small business.`;

const limits = { title: 80, does: 300, saves: 220 } as const;

function cleanText(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const text = value.replace(/\s*[—–]\s*/g, ", ").replace(/\s+/g, " ").trim();
  if (text.length === 0 || text.length > max) return null;
  return text;
}

function parseIdea(value: unknown): Idea | null {
  if (typeof value !== "object" || value === null) return null;
  const record = value as Record<string, unknown>;
  const title = cleanText(record.title, limits.title);
  const does = cleanText(record.does, limits.does);
  const saves = cleanText(record.saves, limits.saves);
  const size = sizes.find((s) => s === record.size);
  if (!title || !does || !saves || !size) return null;
  return { title, does, saves, size };
}

export function parseIdeas(raw: string): Idea[] | null {
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  if (start === -1 || end <= start) return null;
  let data: unknown;
  try {
    data = JSON.parse(raw.slice(start, end + 1));
  } catch {
    return null;
  }
  if (typeof data !== "object" || data === null) return null;
  const list = (data as { ideas?: unknown }).ideas;
  if (!Array.isArray(list) || list.length !== 3) return null;
  const ideas = list.map(parseIdea);
  return ideas.every((idea): idea is Idea => idea !== null) ? ideas : null;
}

export type IdeasResponse =
  | { ok: true; ideas: Idea[] }
  | { ok: false; reason: "invalid" | "rate_limited" | "unavailable" | "failed"; message: string };
