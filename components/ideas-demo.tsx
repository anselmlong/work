"use client";

import { useId, useState, type CSSProperties, type FormEvent } from "react";
import { maxLength, minLength, type Idea, type IdeasResponse } from "@/lib/ideas";
import { mailtoHref, whatsappHref } from "@/lib/site";
import { MailIcon, WhatsAppIcon } from "./icons";

type State =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "ready"; ideas: Idea[]; description: string }
  | { kind: "error"; message: string; description: string };

const examples = [
  "Dental clinic, 6 staff, bookings by phone",
  "Renovation contractor, quotes sent over WhatsApp",
  "Tuition centre, parents keep asking about class schedules",
];

const sizeLabel: Record<Idea["size"], string> = {
  small: "Small build",
  medium: "Medium build",
  larger: "Larger build",
};

const sizeSteps: Record<Idea["size"], number> = { small: 1, medium: 2, larger: 3 };

function enquiry(description: string, ideas?: Idea[]) {
  const lines = [
    "Hi Anselm, I tried the AI ideas demo on your site.",
    `My business: ${description}`,
  ];
  if (ideas) lines.push(`Ideas I would like to talk about: ${ideas.map((idea) => idea.title).join("; ")}`);
  return lines.join("\n");
}

function TalkButtons({ description, ideas }: { description: string; ideas?: Idea[] }) {
  const text = enquiry(description, ideas);
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={whatsappHref(text)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-13 items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-paper px-6 font-medium text-cobalt-deep transition-colors hover:bg-sheet"
      >
        <WhatsAppIcon />
        Talk to me about this
        <span className="sr-only"> (opens WhatsApp in a new tab)</span>
      </a>
      <a
        href={mailtoHref("AI ideas for my business", text)}
        className="inline-flex min-h-13 items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-paper/50 px-6 font-medium text-paper transition-colors hover:border-paper hover:bg-paper/10"
      >
        <MailIcon />
        Or send an email
      </a>
    </div>
  );
}

function SizeMeter({ size }: { size: Idea["size"] }) {
  const steps = sizeSteps[size];
  return (
    <span className="inline-flex items-center gap-2 text-[0.95rem] text-ink-soft">
      <span aria-hidden="true" className="flex gap-1">
        {[1, 2, 3].map((n) => (
          <span key={n} className={`h-2.5 w-5 rounded-full ${n <= steps ? "bg-cobalt" : "bg-rule"}`} />
        ))}
      </span>
      {sizeLabel[size]}
    </span>
  );
}

export function IdeasDemo() {
  const inputId = useId();
  const hintId = useId();
  const [description, setDescription] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });
  const length = description.trim().length;
  const loading = state.kind === "loading";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = description.trim();
    if (text.length < minLength) {
      setState({ kind: "error", message: "Add a few words about your business first.", description: text });
      return;
    }
    setState({ kind: "loading" });
    try {
      const res = await fetch("/api/ideas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: text }),
      });
      const body = (await res.json().catch(() => null)) as IdeasResponse | null;
      if (body?.ok) {
        setState({ kind: "ready", ideas: body.ideas, description: text });
      } else if (body?.reason === "unavailable") {
        setState({
          kind: "error",
          message:
            "The live demo is resting right now. Send me the same description and I will reply with ideas myself.",
          description: text,
        });
      } else {
        setState({
          kind: "error",
          message: body?.message ?? "Something went wrong on my side. Try again in a moment.",
          description: text,
        });
      }
    } catch {
      setState({
        kind: "error",
        message: "The request did not go through. Check your connection and try again.",
        description: text,
      });
    }
  }

  return (
    <section id="demo" aria-labelledby="demo-title" className="on-dark bg-cobalt text-paper">
      <div className="mx-auto max-w-[84rem] px-4 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 id="demo-title" className="display text-[2.75rem] sm:text-[4rem]">
              What could AI do for your business?
            </h2>
            <p className="mt-6 max-w-[44ch] text-paper/85">
              Describe the business in a sentence or two. You get three concrete ideas in plain
              language: what each one does, what it saves you, and roughly how big a job it is.
            </p>
            <p className="mt-4 max-w-[44ch] text-base text-paper/70">
              Written live by an AI model. Nothing you type is stored on this site.
            </p>
          </div>

          <form onSubmit={submit} className="lg:col-span-7" aria-busy={loading}>
            <label htmlFor={inputId} className="block text-lg font-medium">
              Your business
            </label>
            <div className="demo-sheet mt-3 rounded-2xl bg-sheet p-2 text-ink shadow-[0_24px_60px_-30px_rgba(10,14,50,0.7)] has-[textarea:focus]:outline-2 has-[textarea:focus]:outline-offset-4 has-[textarea:focus]:outline-paper">
              <textarea
                id={inputId}
                aria-describedby={hintId}
                value={description}
                onChange={(event) => setDescription(event.target.value.slice(0, maxLength))}
                maxLength={maxLength}
                rows={3}
                placeholder="For example: dental clinic, 6 staff, bookings by phone"
                className="block w-full resize-none rounded-xl bg-transparent px-4 py-3 text-[1.25rem] leading-snug placeholder:text-ink-soft focus:outline-none"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-rule px-3 pt-2">
                <span id={hintId} className="tnum text-[0.95rem] text-ink-soft">
                  {length} / {maxLength} characters
                </span>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-cobalt px-6 font-medium text-paper transition-colors hover:bg-cobalt-deep disabled:cursor-wait disabled:opacity-70"
                >
                  {loading ? "Thinking it through" : "Show me three ideas"}
                </button>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-base text-paper/75">Or try one of these:</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {examples.map((example) => (
                  <li key={example}>
                    <button
                      type="button"
                      onClick={() => setDescription(example)}
                      className="inline-flex min-h-11 items-center rounded-2xl border border-paper/35 px-4 py-2 text-left text-base text-paper/90 transition-colors hover:border-paper hover:bg-paper/10"
                    >
                      {example}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </form>
        </div>

        <div aria-live="polite" className="mt-16">
          {state.kind === "loading" && (
            <div>
              <p className="sr-only">Writing three ideas for your business.</p>
              <ul className="grid gap-5 md:grid-cols-3" aria-hidden="true">
                {[0, 1, 2].map((n) => (
                  <li key={n} className="rounded-2xl bg-sheet p-7">
                    <div className="shimmer h-7 w-3/4 rounded" />
                    <div className="shimmer mt-6 h-4 w-full rounded" />
                    <div className="shimmer mt-3 h-4 w-5/6 rounded" />
                    <div className="shimmer mt-8 h-4 w-2/3 rounded" />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {state.kind === "ready" && (
            <div>
              <h3 className="sr-only">Three ideas for your business</h3>
              <ol className="grid gap-5 md:grid-cols-3">
                {state.ideas.map((idea, index) => (
                  <li
                    key={idea.title}
                    style={{ "--i": index } as CSSProperties}
                    className="sheet-in flex flex-col rounded-2xl bg-sheet p-7 text-ink shadow-[0_24px_60px_-30px_rgba(10,14,50,0.7)]"
                  >
                    <h4 className="display text-[1.75rem] leading-tight">{idea.title}</h4>
                    <dl className="mt-5 space-y-4 text-[1.05rem] leading-relaxed">
                      <div>
                        <dt className="font-medium">What it does</dt>
                        <dd className="mt-1 text-ink-soft">{idea.does}</dd>
                      </div>
                      <div>
                        <dt className="font-medium">What it saves</dt>
                        <dd className="mt-1 text-ink-soft">{idea.saves}</dd>
                      </div>
                    </dl>
                    <div className="mt-auto pt-6">
                      <SizeMeter size={idea.size} />
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-10 flex flex-col gap-5 border-t border-paper/25 pt-8 lg:flex-row lg:items-center lg:justify-between">
                <p className="max-w-[46ch] text-paper/85">
                  These are starting points. On a call we work out which one is worth building first,
                  and you get a fixed quote.
                </p>
                <TalkButtons description={state.description} ideas={state.ideas} />
              </div>
            </div>
          )}

          {state.kind === "error" && (
            <div className="flex flex-col gap-6 rounded-2xl border border-paper/30 p-7 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-[52ch] text-lg">{state.message}</p>
              {state.description.length >= minLength && <TalkButtons description={state.description} />}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
