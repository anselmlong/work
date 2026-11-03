import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ContactSection } from "@/components/contact-section";
import { ArrowIcon, OutIcon } from "@/components/icons";
import { IdeasDemo } from "@/components/ideas-demo";
import { SiteFooter, SiteHeader, WhatsAppButton } from "@/components/site-chrome";
import { flagships, otherWork } from "@/lib/projects";
import { lanes, rates, terms, type LaneId } from "@/lib/site";

const laneLabel: Record<LaneId, string> = {
  websites: "Website",
  software: "Custom software",
  ai: "AI & automation",
};

const steps = [
  {
    title: "A call first",
    text: "We talk through how the work gets done today and where the time goes. You do not need a spec.",
  },
  {
    title: "A fixed quote",
    text: "You get a written scope and a fixed price before anything is built. Websites follow the rate card below.",
  },
  {
    title: "Working versions early",
    text: "You see the real thing as it comes together and steer it, instead of waiting for a reveal at the end.",
  },
  {
    title: "Yours to keep",
    text: "The domain, the accounts and the code are in your name, with a written handover.",
  },
];

const faqs = [
  { q: "Do I own the site?", a: "Yes." },
  { q: "What if you disappear?", a: "Everything's in your name plus a handover doc." },
  { q: "What's not included?", a: "Copywriting, photos, domain purchase, email, branding, and ads." },
  {
    q: "Do contact forms handle personal data properly?",
    a: "Contact forms come with a privacy notice. Small and PDPA-friendly.",
  },
  {
    q: "How are custom software and AI projects priced?",
    a: "After a call I send a fixed quote. Custom software starts from S$2,500, and AI and automation from S$1,500.",
  },
  {
    q: "What happens to what I type into the AI demo?",
    a: "It is sent to an AI model through OpenRouter to write the ideas. This site does not store or log it.",
  },
];

function splitRate(rate: string) {
  const at = rate.indexOf(": ");
  return { label: rate.slice(0, at), value: rate.slice(at + 2) };
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden">
      <div className="mx-auto max-w-[84rem] px-4 pt-14 sm:px-8 sm:pt-20 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-8">
          <h1
            id="hero-title"
            className="display text-[3.1rem] sm:text-[4.75rem] lg:col-span-8 lg:text-[6rem]"
          >
            {["Software and AI", "that take work", "off your plate."].map((line, i) => (
              <span key={line} className="rise block" style={{ "--i": i } as CSSProperties}>
                {line}
              </span>
            ))}
          </h1>
          <div className="rise lg:col-span-4 lg:pt-5" style={{ "--i": 3 } as CSSProperties}>
            <p className="max-w-[40ch] text-[1.25rem] leading-relaxed">
              I&apos;m Anselm Long, an independent software engineer in Singapore. I build websites,
              custom software and AI automation for companies that would rather spend their time on
              the business.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <WhatsAppButton label="Message me on WhatsApp" size="lg" />
              <Link
                href="#demo"
                className="inline-flex min-h-11 items-center gap-2 font-medium text-cobalt underline decoration-cobalt/40 hover:decoration-cobalt"
              >
                Try the AI demo
                <ArrowIcon />
              </Link>
            </div>
            <p className="mt-8 max-w-[40ch] border-t border-rule pt-5 text-base text-ink-soft">
              Software engineering experience at Visa and at Open Government Products (GovTech).
            </p>
          </div>
        </div>
      </div>

      <ul
        aria-label="Recent work"
        className="mx-auto mt-16 flex max-w-[84rem] snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-6 sm:mt-20 sm:px-8 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible"
      >
        {flagships.map((project, i) => (
          <li
            key={project.slug}
            className="rise w-[82%] shrink-0 snap-start md:w-auto"
            style={{ "--i": 4 + i } as CSSProperties}
          >
            <Link href={`/work/${project.slug}`} className="group block">
              <span className="shot block overflow-hidden rounded-lg bg-paper-deep">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={1600}
                  height={1000}
                  priority
                  sizes="(min-width: 768px) 30vw, 82vw"
                  className="aspect-[16/10] h-auto w-full object-cover object-top transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.02]"
                />
              </span>
              <span className="mt-4 flex items-baseline justify-between gap-4">
                <span className="text-lg font-medium">{project.name}</span>
                <span className="inline-flex items-center gap-1.5 text-base text-ink-soft group-hover:text-cobalt">
                  Case study
                  <ArrowIcon />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto max-w-[84rem] px-4 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <h2 id="services-title" className="display text-[2.5rem] sm:text-[3.5rem] lg:col-span-5">
          Three kinds of work, one person accountable.
        </h2>
        <p className="max-w-[48ch] text-ink-soft lg:col-span-6 lg:col-start-7 lg:self-end">
          Start with a website, or go straight to the part of the business that eats the most hours.
          Each job is quoted at a fixed price before it begins.
        </p>
      </div>
      <ol className="mt-14 border-t border-ink">
        {lanes.map((lane) => (
          <li key={lane.id} className="grid gap-4 border-b border-rule py-9 md:grid-cols-12 md:gap-8">
            <h3 className="display text-[2rem] sm:text-[2.4rem] md:col-span-4">{lane.name}</h3>
            <div className="md:col-span-5">
              <p className="max-w-[44ch]">{lane.pitch}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {lane.items.map((item) => (
                  <li key={item} className="rounded-full bg-paper-deep px-3 py-1 text-[0.95rem] text-ink-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="tnum display text-[1.6rem] md:col-span-3 md:text-right">{lane.price}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-[84rem] px-4 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <h2 id="work-title" className="display text-[2.5rem] sm:text-[3.5rem] lg:col-span-6">
          Selected work
        </h2>
        <p className="max-w-[48ch] text-ink-soft lg:col-span-6 lg:col-start-7 lg:self-end">
          Everything here is live and in use. Open the site and try it, or read how it was built.
        </p>
      </div>

      <ul className="mt-16 space-y-24 sm:space-y-32">
        {flagships.map((project, i) => (
          <li key={project.slug}>
            <article className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
              <Link
                href={`/work/${project.slug}`}
                className={`shot block overflow-hidden rounded-xl bg-paper-deep lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={1600}
                  height={1000}
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="aspect-[16/10] h-auto w-full object-cover object-top"
                />
                <span className="sr-only">Read the {project.name} case study</span>
              </Link>
              <div className="lg:col-span-5">
                <p className="text-base text-ink-soft">{laneLabel[project.lane]}</p>
                <h3 className="display mt-2 text-[2.25rem] sm:text-[2.75rem]">{project.name}</h3>
                <p className="mt-4 max-w-[42ch]">{project.summary}</p>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-5 font-medium text-paper transition-colors hover:bg-cobalt"
                  >
                    Read the case study
                    <ArrowIcon />
                  </Link>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 text-ink-soft underline hover:text-ink"
                  >
                    {project.host}
                    <OutIcon />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-28 grid gap-8 lg:grid-cols-12 lg:gap-8">
        <h3 className="display text-[2rem] sm:text-[2.4rem] lg:col-span-4">More live work</h3>
        <ul className="border-t border-ink lg:col-span-8">
          {otherWork.map((project) => (
            <li key={project.slug} className="border-b border-rule">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[5.5rem_1fr] items-center gap-5 py-5 sm:grid-cols-[8rem_1fr_auto] sm:gap-7"
              >
                <Image
                  src={project.image}
                  alt=""
                  width={1600}
                  height={1000}
                  sizes="8rem"
                  className="aspect-[16/10] h-auto w-full rounded-md object-cover object-top ring-1 ring-rule"
                />
                <span>
                  <span className="flex flex-wrap items-baseline gap-x-3">
                    <span className="text-[1.2rem] font-medium group-hover:text-cobalt">{project.name}</span>
                    <span className="text-[0.95rem] text-ink-soft">{laneLabel[project.lane]}</span>
                  </span>
                  <span className="mt-1 block text-[1.05rem] leading-relaxed text-ink-soft">{project.summary}</span>
                </span>
                <span className="col-start-2 inline-flex items-center gap-1.5 text-[0.95rem] text-ink-soft underline group-hover:text-ink sm:col-start-auto">
                  {project.host}
                  <OutIcon />
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="bg-paper-deep">
      <div className="mx-auto max-w-[84rem] px-4 py-24 sm:px-8 sm:py-32">
        <h2 id="process-title" className="display text-[2.5rem] sm:text-[3.5rem]">
          How I work
        </h2>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-ink pt-6">
              <span className="tnum display text-[1.5rem] text-cobalt" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-3 text-[1.3rem] font-medium">{step.title}</h3>
              <p className="mt-3 text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Pricing() {
  const fromPrices = lanes.filter((lane) => lane.id !== "websites");
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="mx-auto max-w-[84rem] px-4 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <h2 id="pricing-title" className="display text-[2.5rem] sm:text-[3.5rem] lg:col-span-6">
          Pricing
        </h2>
        <p className="max-w-[48ch] text-ink-soft lg:col-span-6 lg:col-start-7 lg:self-end">
          Websites have a fixed rate card. Software and AI work starts from a set price and gets a
          fixed quote once we have talked it through.
        </p>
      </div>

      <div className="shot mt-14 rounded-2xl bg-sheet px-5 py-8 sm:px-10 sm:py-12 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <h3 className="display text-[1.9rem]">Websites</h3>
            <dl className="tnum mt-6 border-t border-ink">
              {rates.map((rate) => {
                const { label, value } = splitRate(rate);
                return (
                  <div key={rate} className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[13rem_1fr] sm:gap-6">
                    <dt className="font-medium">{label}:</dt>
                    <dd className="text-ink-soft sm:text-ink">{value}</dd>
                  </div>
                );
              })}
            </dl>
            <p className="tnum mt-6">{terms}</p>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-rule lg:pl-12">
            <h3 className="display text-[1.9rem]">Software and AI</h3>
            <dl className="mt-6 border-t border-ink">
              {fromPrices.map((lane) => (
                <div key={lane.id} className="border-b border-rule py-5">
                  <dt className="font-medium">{lane.name}</dt>
                  <dd className="tnum display mt-1 text-[2rem] text-cobalt">{lane.price}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-ink-soft">Fixed quote after a call.</p>
          </div>
        </div>
        <p className="mt-12 border-t border-rule pt-6 text-base text-ink-soft">
          All prices are in SGD. GST is not included.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-rule">
      <div className="mx-auto grid max-w-[84rem] gap-10 px-4 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:gap-8">
        <h2 id="about-title" className="display text-[2.5rem] sm:text-[3.5rem] lg:col-span-5">
          About
        </h2>
        <div className="lg:col-span-7">
          <p className="display text-[1.75rem] leading-snug sm:text-[2.1rem]">
            I build software for businesses directly, from the first call to the handover. You deal
            with one person, who writes the code and answers the messages.
          </p>
          <p className="mt-8 max-w-[60ch] text-ink-soft">
            I have done software engineering at Visa and at Open Government Products (GovTech).
            The work on this page, from booking flows to a daily game people pay to play, is what I
            build now.
          </p>
          <dl className="mt-10 grid gap-6 border-t border-ink pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-base text-ink-soft">Software engineering</dt>
              <dd className="mt-1 text-[1.3rem] font-medium">Visa</dd>
            </div>
            <div>
              <dt className="text-base text-ink-soft">Software engineering</dt>
              <dd className="mt-1 text-[1.3rem] font-medium">Open Government Products (GovTech)</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-rule">
      <div className="mx-auto grid max-w-[84rem] gap-10 px-4 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:gap-8">
        <h2 id="faq-title" className="display text-[2.5rem] sm:text-[3.5rem] lg:col-span-5">
          Questions
        </h2>
        <div className="border-t border-ink lg:col-span-7">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-rule">
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 py-4 text-[1.2rem] font-medium hover:text-cobalt">
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="relative size-4 shrink-0 before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-current after:absolute after:inset-y-0 after:left-1/2 after:w-px after:bg-current after:transition-transform group-open:after:scale-y-0"
                />
              </summary>
              <p className="max-w-[60ch] pb-6 text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Services />
        <IdeasDemo />
        <Work />
        <Process />
        <Pricing />
        <About />
        <Faq />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
