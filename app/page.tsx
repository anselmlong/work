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
    name: "Scallion",
    href: "https://scallion.io",
    host: "scallion.io",
    image: "/work/scallion.webp",
    alt: "Scallion start screen, a pixel-art city at dusk with a button to begin the climb",
    text: "A complete product people can pay to use, with group rooms and an admin panel. More than a single landing page.",
  },
  {
    name: "Photos",
    href: "https://photos.anselmlong.com",
    host: "photos.anselmlong.com",
    image: "/work/photos.webp",
    alt: "Booking form on the photos site, asking for event details before a quote",
    text: "A small-business site where a booking form becomes a quote and a PDF. The closest match to what most owners need.",
  },
  {
    name: "MassGoWhere",
    href: "https://massgowhere.com",
    host: "massgowhere.com",
    image: "/work/massgowhere.webp",
    alt: "MassGoWhere home screen with choices for a Mass, adoration, or confession",
    text: "Helps people find a Mass they can still reach in Singapore, by train, car, or on foot, with a Telegram bot alongside the site.",
  },
  {
    name: "Kopitype",
    href: "https://kopitype.com",
    host: "kopitype.com",
    image: "/work/kopitype.webp",
    alt: "Kopitype in the middle of a Singlish typing test, timer at 30 seconds",
    text: "A short site people come back to, with a public leaderboard.",
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
  {
    q: "Do I own the site?",
    a: "Yes.",
  },
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

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header sticky top-0 z-20 border-b border-white/10 bg-ink text-paper">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3 sm:px-8">
          <a href="#top" className="font-display text-lg tracking-tight">
            Anselm Long
          </a>
          <nav aria-label="Page">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {nav.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-flex min-h-11 items-center text-sm text-paper/90 underline decoration-transparent underline-offset-4 hover:text-paper hover:decoration-paper"
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
        <section id="top" className="border-b border-line bg-white">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="text-sm font-medium text-muted">Based in Singapore</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-6xl">
              Websites for small businesses
            </h1>
            <p className="mt-5 text-xl sm:text-2xl">Anselm Long, independent web developer</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed">
              For shop owners, clinics, tutors, contractors, and F&amp;B businesses.
            </p>
            <ul className="mt-8 grid max-w-2xl gap-x-10 gap-y-2 sm:grid-cols-2">
              {outcomes.map((item) => (
                <li key={item} className="border-t border-line py-3 text-base">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-start gap-3">
              <a
                href={mailto}
                className="inline-flex min-h-12 items-center bg-ink px-5 text-base text-paper hover:bg-[#243044]"
              >
                Contact
              </a>
              <a href={mailto} className="text-sm text-muted underline underline-offset-4">
                {email}
              </a>
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title">
          <div className="mx-auto grid max-w-5xl gap-4 px-5 py-16 sm:grid-cols-[11rem_1fr] sm:px-8 sm:py-20">
            <div>
              <p className="text-sm text-muted">01</p>
              <h2 id="about-title" className="mt-1 font-display text-3xl tracking-tight">
                About
              </h2>
            </div>
            <div className="max-w-prose space-y-4 text-lg leading-relaxed">
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

        <section id="work" aria-labelledby="work-title" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-sm text-muted">02</p>
            <h2 id="work-title" className="mt-1 font-display text-3xl tracking-tight">
              Selected work
            </h2>
            <p className="mt-4 max-w-prose text-lg leading-relaxed">
              Live products. The photography site is the closest to a typical small-business job.
            </p>
            <ul className="mt-10 grid gap-12 sm:grid-cols-2">
              {work.map((item, index) => (
                <li key={item.href}>
                  <article>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={1600}
                        height={1000}
                        priority={index === 0}
                        sizes="(min-width: 640px) 480px, 100vw"
                        className="h-auto w-full border border-line bg-white"
                      />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    <h3 className="mt-4 font-display text-2xl tracking-tight">{item.name}</h3>
                    <p className="mt-2 leading-relaxed">{item.text}</p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-11 items-center underline underline-offset-4"
                    >
                      {item.host}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="process" aria-labelledby="process-title" className="border-t border-line">
          <div className="mx-auto grid max-w-5xl gap-4 px-5 py-16 sm:grid-cols-[11rem_1fr] sm:px-8 sm:py-20">
            <div>
              <p className="text-sm text-muted">03</p>
              <h2 id="process-title" className="mt-1 font-display text-3xl tracking-tight">
                How it works
              </h2>
            </div>
            <ol className="max-w-prose list-decimal space-y-4 pl-5 text-lg leading-relaxed">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section id="pricing" aria-labelledby="pricing-title" className="border-t border-line">
          <div className="mx-auto grid max-w-5xl gap-4 px-5 py-16 sm:grid-cols-[11rem_1fr] sm:px-8 sm:py-20">
            <div>
              <p className="text-sm text-muted">04</p>
              <h2 id="pricing-title" className="mt-1 font-display text-3xl tracking-tight">
                Pricing
              </h2>
            </div>
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

        <section id="faq" aria-labelledby="faq-title" className="border-t border-line">
          <div className="mx-auto grid max-w-5xl gap-4 px-5 py-16 sm:grid-cols-[11rem_1fr] sm:px-8 sm:py-20">
            <div>
              <p className="text-sm text-muted">05</p>
              <h2 id="faq-title" className="mt-1 font-display text-3xl tracking-tight">
                Questions
              </h2>
            </div>
            <div className="max-w-prose border-t border-line">
              {faqs.map((item) => (
                <details key={item.q} className="group border-b border-line">
                  <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-4 py-3 text-lg">
                    <span>{item.q}</span>
                    <span aria-hidden="true" className="text-muted group-open:hidden">
                      +
                    </span>
                    <span aria-hidden="true" className="hidden text-muted group-open:inline">
                      -
                    </span>
                  </summary>
                  <p className="pb-4 text-lg leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="border-t border-line">
          <div className="mx-auto grid max-w-5xl gap-4 px-5 py-16 sm:grid-cols-[11rem_1fr] sm:px-8 sm:py-20">
            <div>
              <p className="text-sm text-muted">06</p>
              <h2 id="contact-title" className="mt-1 font-display text-3xl tracking-tight">
                Contact
              </h2>
            </div>
            <div className="max-w-prose">
              <p className="text-lg leading-relaxed">
                Email is the direct way to reach me. Tell me what the business does and what you
                need the site to do.
              </p>
              <a
                href={mailto}
                className="mt-6 inline-flex min-h-12 items-center text-2xl underline underline-offset-4"
              >
                {email}
              </a>
              <p className="mt-6 text-lg">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center underline underline-offset-4"
                >
                  github.com/anselmlong
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-line bg-white">
        <p className="mx-auto max-w-5xl px-5 py-8 text-sm text-muted sm:px-8">
          Anselm Long, independent web developer in Singapore.
        </p>
      </footer>
    </>
  );
}
