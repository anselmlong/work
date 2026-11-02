import Image from "next/image";

const email = "anselmpius@gmail.com";
const mailto = `mailto:${email}`;
const github = "https://github.com/anselmlong";

const work = [
  {
    name: "scallion",
    href: "https://scallion.io",
    host: "scallion.io",
    image: "/work/scallion.webp",
    alt: "Scallion start screen, a pixel-art city at dusk with a button to begin the climb",
    text: "daily pixel-art word game with an ai judge, stripe payments, party rooms, and an admin panel. a full product, not a landing page.",
  },
  {
    name: "photos",
    href: "https://photos.anselmlong.com",
    host: "photos.anselmlong.com",
    image: "/work/photos.webp",
    alt: "Booking form on the photos site, asking for event details before a quote",
    text: "a small-business site where a booking form turns into a quote builder and a pdf. closest to what clients buy.",
  },
  {
    name: "massgowhere",
    href: "https://massgowhere.com",
    host: "massgowhere.com",
    image: "/work/massgowhere.webp",
    alt: "MassGoWhere home screen with choices for a Mass, adoration, or confession",
    text: "find a reachable mass in singapore by transit, car, or foot, plus a telegram bot.",
  },
  {
    name: "kopitype",
    href: "https://kopitype.com",
    host: "kopitype.com",
    image: "/work/kopitype.webp",
    alt: "Kopitype in the middle of a Singlish typing test, timer at 30 seconds",
    text: "a singlish typing game with a leaderboard.",
  },
] as const;

const steps = [
  "free preview first. you only pay if you like it.",
  "live in about 7 to 10 working days.",
  "domain and accounts in your name from day one, with a written handover list.",
  "contact forms come with a privacy notice. small and pdpa-friendly.",
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
    q: "do i own the site?",
    a: "yes.",
  },
  {
    q: "what if you disappear?",
    a: "everything's in your name plus a handover doc.",
  },
  {
    q: "what's not included?",
    a: "copywriting, photos, domain purchase, email, branding, ads.",
  },
];

const nav = [
  ["work", "#work"],
  ["about", "#about"],
  ["process", "#process"],
  ["pricing", "#pricing"],
  ["faq", "#faq"],
  ["contact", "#contact"],
] as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        skip to content
      </a>
      <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3 sm:px-8">
          <a href="#top" className="font-display text-lg tracking-tight">
            anselm long
          </a>
          <nav aria-label="page">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {nav.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-flex min-h-11 items-center text-sm underline decoration-transparent underline-offset-4 hover:decoration-ink"
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
        <section id="top" className="mx-auto max-w-5xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
          <p className="text-sm tracking-[0.14em] text-muted">singapore</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-none tracking-tight sm:text-7xl">
            anselm long
          </h1>
          <p className="mt-5 text-xl sm:text-2xl">software developer in singapore</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            fast, custom websites for singapore small businesses. you own everything.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3">
            <a
              href={mailto}
              className="inline-flex min-h-12 items-center bg-ink px-5 text-base text-paper hover:bg-[#2c2823]"
            >
              contact
            </a>
            <a href={mailto} className="text-sm text-muted underline underline-offset-4">
              {email}
            </a>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title" className="border-t border-line">
          <div className="mx-auto grid max-w-5xl gap-4 px-5 py-16 sm:grid-cols-[11rem_1fr] sm:px-8 sm:py-20">
            <div>
              <p className="text-sm text-muted">01</p>
              <h2 id="about-title" className="mt-1 font-display text-3xl tracking-tight">
                about
              </h2>
            </div>
            <div className="max-w-prose space-y-4 text-lg leading-relaxed">
              <p>
                i&apos;m a computing student at nus, computer science on the ai track. i interned at
                visa and built sage, an incident assistant. i&apos;m a software engineering intern at
                open government products (govtech).
              </p>
              <p>i build and ship real products end to end, from payments and bots to ai features.</p>
            </div>
          </div>
        </section>

        <section id="work" aria-labelledby="work-title" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-sm text-muted">02</p>
            <h2 id="work-title" className="mt-1 font-display text-3xl tracking-tight">
              selected work
            </h2>
            <p className="mt-4 max-w-prose text-lg leading-relaxed">
              a few things i&apos;ve shipped. each one is live.
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
                        className="h-auto w-full border border-line"
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
                how it works
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
                pricing
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-lg">all prices in sgd. no gst.</p>
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
                questions
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
                contact
              </h2>
            </div>
            <div className="max-w-prose">
              <p className="text-lg leading-relaxed">
                email is the way to reach me. tell me what the business does and what the site
                needs to do.
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
      <footer className="border-t border-line">
        <p className="mx-auto max-w-5xl px-5 py-8 text-sm text-muted sm:px-8">
          anselm long, software developer in singapore.
        </p>
      </footer>
    </>
  );
}
