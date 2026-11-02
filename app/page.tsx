import Image from "next/image";

const email = "anselmpius@gmail.com";
const mailto = `mailto:${email}`;
const github = "https://github.com/anselmlong";

const outcomes = [
  "More enquiries and bookings",
  "Looks trustworthy on a phone",
  "Fast to load",
  "You own it, with no lock-in",
  "A clear fixed price",
  "One person accountable",
];

const work = [
  {
    name: "anselmlong.com",
    href: "https://anselmlong.com",
    host: "anselmlong.com",
    image: "/work/personal.webp",
    width: 1600,
    height: 1000,
    wide: true,
    alt: "Anselm Long's own site, with his name set over a photograph of the Golden Gate Bridge",
    text: "His own site: the work, the writing, and a way to ask a question. Built as a full site, not a single card.",
  },
  {
    name: "Scallion",
    href: "https://scallion.io",
    host: "scallion.io",
    image: "/work/scallion.webp",
    width: 1600,
    height: 1000,
    wide: false,
    alt: "Scallion start screen, a pixel-art city at dusk with a button to begin the climb",
    text: "A complete product people pay to use, with group rooms and an admin side. More than a brochure.",
  },
  {
    name: "MassGoWhere",
    href: "https://massgowhere.com",
    host: "massgowhere.com",
    image: "/work/massgowhere.webp",
    width: 1600,
    height: 1000,
    wide: false,
    alt: "MassGoWhere home screen with choices for a Mass, adoration, or confession",
    text: "Helps someone find a Mass they can still reach in Singapore, by train, car, or on foot, and when to leave. A Telegram bot sits beside the site.",
  },
  {
    name: "Kopitype",
    href: "https://kopitype.com",
    host: "kopitype.com",
    image: "/work/kopitype.webp",
    width: 1600,
    height: 1000,
    wide: false,
    alt: "Kopitype in the middle of a Singlish typing test, timer at 30 seconds",
    text: "A short site people come back to, with a public leaderboard. Built around Singapore English, stations, and local phrases.",
  },
  {
    name: "Computah",
    href: "https://computah.anselmlong.com",
    host: "computah.anselmlong.com",
    image: "/work/computah.webp",
    width: 1600,
    height: 1000,
    wide: false,
    alt: "Computah site, a Mac companion with a live conversation panel",
    text: "A desktop companion that can see the screen and help with the next step, inside limits you set. It ships as a Mac app.",
  },
  {
    name: "Optifiner",
    href: "https://optifiner.dev",
    host: "optifiner.dev",
    image: "/work/optifiner.webp",
    width: 1600,
    height: 1000,
    wide: false,
    alt: "Optifiner homepage with a button to launch the dashboard",
    text: "Tries many code changes at once and keeps the ones that measure better. A dashboard shows the run.",
  },
  {
    name: "Canvas scraper",
    href: "https://canvas-scraper.vercel.app",
    host: "canvas-scraper.vercel.app",
    image: "/work/canvas.webp",
    width: 1600,
    height: 1000,
    wide: false,
    alt: "Canvas scraper page explaining a daily file sync that skips large recordings",
    text: "Pulls new course files to a laptop, skips the huge recordings, and emails what changed. It runs every day at noon.",
  },
  {
    name: "Telegram bots",
    href: "https://bot.anselmlong.com",
    host: "bot.anselmlong.com",
    image: "/work/bots.webp",
    width: 1600,
    height: 1000,
    wide: true,
    alt: "A page of Telegram bots for daily readings, aircon credits, and a group counter",
    text: "Bots he runs from Singapore. One sends the day's readings at an hour you choose. One warns before aircon credits run out. One counts a number in a group chat.",
  },
] as const;

const steps = [
  "Free preview first. You only pay if you like it.",
  "Live in about 7 to 10 working days.",
  "The domain and accounts are in your name from day one, with a written handover list.",
  "Contact forms come with a privacy notice. Small and PDPA-friendly.",
];

const rates = [
  "one-pager: s$490",
  "up to 5 pages: s$990",
  "monthly, no upfront: s$69/mo one-pager, s$129/mo up to 5 pages, care included, 12-month minimum",
  "care plan for one-off builds: s$39/mo or s$390/yr (hosting, ssl, backups, 30 min of edits a month)",
  "edits outside a plan: s$35/hr",
  "add-ons: extra page s$120, booking flow s$290, payments from s$350, whatsapp lead-alert bot s$180",
];

const terms = "50% deposit, 50% before go-live, paynow.";

const faqs = [
  { q: "Do I own the site?", a: "Yes." },
  {
    q: "What if you disappear?",
    a: "Everything's in your name plus a handover doc.",
  },
  {
    q: "What's not included?",
    a: "Copywriting, photos, domain purchase, email, branding, and ads.",
  },
];

const nav = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Process", "#process"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
] as const;

function Frame({
  href,
  alt,
  src,
  width,
  height,
  priority,
}: {
  href: string;
  alt: string;
  src: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#140f0c] p-1.5 shadow-[0_16px_36px_rgba(8,5,2,0.45)] sm:p-2"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 800px) 46vw, 100vw"
        className="aspect-[16/10] h-auto w-full object-cover object-top"
      />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="sticky top-0 z-20 border-b border-brass/40 bg-timber/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-3 sm:px-8">
          <a href="#top" className="font-display text-xl tracking-tight text-ivory">
            Anselm Long
          </a>
          <nav aria-label="Page">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {nav.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-flex min-h-11 items-center text-sm text-ivory/90 underline decoration-transparent underline-offset-4 hover:text-ivory hover:decoration-brass"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main id="main">
        <section id="top" className="px-4 pt-4 sm:px-8 sm:pt-6">
          <div className="relative mx-auto max-w-6xl bg-[#140f0c] p-2 shadow-[0_22px_50px_rgba(8,5,2,0.5)] sm:p-3">
            <a href="https://photos.anselmlong.com" target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src="/work/photos.webp"
                alt="Booking form on the photos site, asking for event details before a quote"
                width={1600}
                height={1000}
                priority
                sizes="100vw"
                className="hero-shot"
              />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <div className="bg-ivory px-5 py-6 text-ink sm:absolute sm:bottom-6 sm:left-6 sm:w-[min(26rem,42%)] sm:px-6 sm:py-6 sm:shadow-[0_18px_40px_rgba(8,5,2,0.35)]">
              <h1 className="font-display text-[2.6rem] leading-[0.95] tracking-tight sm:text-5xl">
                Websites for small businesses
              </h1>
              <p className="mt-4 text-lg leading-snug">
                Anselm Long, independent web developer in Singapore.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted">
                For shop owners, clinics, tutors, contractors, and F&amp;B businesses.
              </p>
              <div className="mt-5 flex flex-col items-start gap-2">
                <a
                  href={mailto}
                  className="inline-flex min-h-12 items-center bg-brass px-5 font-medium text-timber hover:bg-[#d8b778]"
                >
                  Contact
                </a>
                <a href={mailto} className="text-sm text-muted underline underline-offset-4">
                  {email}
                </a>
              </div>
            </div>
          </div>
          <ul className="mx-auto mt-4 grid max-w-6xl gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item) => (
              <li key={item} className="bg-ivory px-4 py-3 text-base text-ink">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="about" aria-labelledby="about-title" className="px-4 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 bg-ivory px-6 py-10 text-ink sm:px-10 sm:py-14 lg:grid-cols-[16rem_1fr]">
            <h2 id="about-title" className="font-display text-4xl tracking-tight">
              About
            </h2>
            <div className="max-w-[68ch] space-y-4 text-lg leading-relaxed">
              <p>
                I am an independent software developer based in Singapore. I build websites for
                small businesses and stay available after they go live.
              </p>
              <p>
                I have done software engineering work at Visa, where I built SAGE, an incident
                assistant, and at Open Government Products (GovTech). I have built and shipped full
                products with payments, bookings, bots, and AI features.
              </p>
            </div>
          </div>
        </section>

        <section id="work" aria-labelledby="work-title" className="px-4 pb-8 sm:px-8">
          <div className="mx-auto max-w-6xl border-l border-brass/70 pl-5 sm:pl-8">
            <h2 id="work-title" className="font-display text-4xl tracking-tight text-ivory sm:text-5xl">
              Selected work
            </h2>
            <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-ivory/80">
              Live sites. The photograph above is the closest to a typical small-business job: a
              booking form that becomes a quote and a PDF.
            </p>
            <ul className="mt-12 grid gap-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16">
              {work.map((item) => (
                <li key={item.href} className={item.wide ? "sm:col-span-2" : ""}>
                  <article className={item.wide ? "sm:grid sm:grid-cols-[1.35fr_0.8fr] sm:items-end sm:gap-8" : ""}>
                    <Frame
                      href={item.href}
                      alt={item.alt}
                      src={item.image}
                      width={item.width}
                      height={item.height}
                    />
                    <div className="mt-4 sm:mt-0">
                      <h3 className="font-display text-3xl tracking-tight text-ivory">{item.name}</h3>
                      <p className="mt-2 max-w-[48ch] leading-relaxed text-ivory/80">{item.text}</p>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex min-h-11 items-center text-brass underline underline-offset-4"
                      >
                        {item.host}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="process" aria-labelledby="process-title" className="px-4 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 bg-ivory px-6 py-10 text-ink sm:px-10 sm:py-14 lg:grid-cols-[16rem_1fr]">
            <h2 id="process-title" className="font-display text-4xl tracking-tight">
              How it works
            </h2>
            <ol className="max-w-[68ch] list-decimal space-y-4 pl-5 text-lg leading-relaxed">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section id="pricing" aria-labelledby="pricing-title" className="px-4 pb-4 sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 bg-ivory px-6 py-10 text-ink sm:px-10 sm:py-14 lg:grid-cols-[16rem_1fr]">
            <h2 id="pricing-title" className="font-display text-4xl tracking-tight">
              Pricing
            </h2>
            <div className="max-w-3xl">
              <p className="text-lg">All prices are in SGD. GST is not included.</p>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {rates.map((rate) => (
                  <li key={rate} className="py-4 text-lg leading-relaxed">
                    {rate}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-lg">{terms}</p>
            </div>
          </div>
        </section>

        <section id="faq" aria-labelledby="faq-title" className="px-4 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 bg-ivory px-6 py-10 text-ink sm:px-10 sm:py-14 lg:grid-cols-[16rem_1fr]">
            <h2 id="faq-title" className="font-display text-4xl tracking-tight">
              Questions
            </h2>
            <div className="max-w-[68ch] border-t border-line">
              {faqs.map((item) => (
                <details key={item.q} className="group border-b border-line">
                  <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-4 py-3 text-lg">
                    <span>{item.q}</span>
                    <span aria-hidden="true" className="text-ink group-open:hidden">
                      +
                    </span>
                    <span aria-hidden="true" className="hidden text-ink group-open:inline">
                      -
                    </span>
                  </summary>
                  <p className="pb-4 text-lg leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="px-4 pb-16 sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 border border-brass/50 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[16rem_1fr]">
            <h2 id="contact-title" className="font-display text-4xl tracking-tight text-ivory">
              Contact
            </h2>
            <div className="max-w-[62ch]">
              <p className="text-lg leading-relaxed text-ivory/85">
                Email is the direct way to reach me. Tell me what the business does and what you
                need the site to do.
              </p>
              <a
                href={mailto}
                className="mt-6 inline-flex min-h-12 items-center font-display text-3xl text-brass underline underline-offset-4"
              >
                {email}
              </a>
              <p className="mt-6 text-lg">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-ivory underline underline-offset-4"
                >
                  github.com/anselmlong
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-brass/30">
        <p className="mx-auto max-w-6xl px-5 py-8 text-sm text-ivory/70 sm:px-8">
          Anselm Long, independent web developer in Singapore.
        </p>
      </footer>
    </>
  );
}
