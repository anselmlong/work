import Link from "next/link";
import { WhatsAppIcon } from "./icons";
import { email, github, mailtoHref, whatsappHref } from "@/lib/site";

const nav = [
  ["Services", "/#services"],
  ["AI demo", "/#demo"],
  ["Work", "/#work"],
  ["Pricing", "/#pricing"],
  ["About", "/#about"],
  ["FAQ", "/#faq"],
] as const;

export function WhatsAppButton({
  label = "WhatsApp me",
  text,
  size = "md",
  tone = "cobalt",
}: {
  label?: string;
  text?: string;
  size?: "md" | "lg";
  tone?: "cobalt" | "paper";
}) {
  const sizing = size === "lg" ? "min-h-14 px-7 text-lg" : "min-h-11 px-4 text-base";
  const colors =
    tone === "paper"
      ? "bg-paper text-cobalt-deep hover:bg-sheet"
      : "bg-cobalt text-paper hover:bg-cobalt-deep";
  return (
    <a
      href={whatsappHref(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-colors duration-200 ${sizing} ${colors}`}
    >
      <WhatsAppIcon />
      {label}
      <span className="sr-only"> (opens WhatsApp in a new tab)</span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-rule/80 bg-paper/95 supports-[backdrop-filter]:bg-paper/85 supports-[backdrop-filter]:backdrop-blur-md">
        <div className="mx-auto flex h-[4.5rem] max-w-[84rem] items-center justify-between gap-6 px-4 sm:px-8">
          <Link href="/" className="display inline-flex min-h-11 items-center text-[1.45rem] tracking-tight">
            Anselm Long
          </Link>
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex min-h-11 items-center rounded-full px-3.5 text-[0.98rem] text-ink-soft transition-colors hover:bg-paper-deep hover:text-ink"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <WhatsAppButton />
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-[84rem] flex-col gap-4 px-4 py-10 text-base text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Anselm Long, independent software engineer in Singapore.</p>
        <ul className="flex flex-wrap gap-x-5">
          <li>
            <a href={mailtoHref("A project")} className="inline-flex min-h-11 items-center underline hover:text-ink">
              {email}
            </a>
          </li>
          <li>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center underline hover:text-ink"
            >
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
