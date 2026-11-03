import { GitHubIcon, MailIcon } from "./icons";
import { WhatsAppButton } from "./site-chrome";
import { email, github, mailtoHref } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="on-dark bg-ink text-paper">
      <div className="mx-auto grid max-w-[84rem] gap-12 px-4 py-24 sm:px-8 sm:py-32 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 id="contact-title" className="display text-[2.75rem] sm:text-[4.25rem]">
            Tell me what is taking up your time.
          </h2>
          <p className="mt-6 max-w-[52ch] text-paper/80">
            A sentence or two about the business and the work you want gone is enough to start. I
            reply personally.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-stretch lg:self-end">
          <WhatsAppButton label="Message me on WhatsApp" size="lg" tone="paper" />
          <a
            href={mailtoHref("A project")}
            className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border border-paper/40 px-7 text-lg transition-colors hover:border-paper hover:bg-paper/10"
          >
            <MailIcon />
            {email}
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2.5 text-paper/80 underline hover:text-paper lg:justify-center"
          >
            <GitHubIcon />
            github.com/anselmlong
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
