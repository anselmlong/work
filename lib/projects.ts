import type { LaneId } from "./site";

export type CaseStudy = {
  problem: string;
  built: readonly string[];
  howItWorks: readonly string[];
  enables: string;
};

export type Project = {
  slug: string;
  name: string;
  href: string;
  host: string;
  image: string;
  alt: string;
  summary: string;
  lane: LaneId;
  caseStudy?: CaseStudy;
};

export type Flagship = Project & { caseStudy: CaseStudy };

export const projects: readonly Project[] = [
  {
    slug: "photos",
    name: "Photos booking site",
    href: "https://photos.anselmlong.com",
    host: "photos.anselmlong.com",
    image: "/work/photos.webp",
    alt: "Booking form on the photos site, asking for contact and event details before a quote",
    summary:
      "A photography site where a booking enquiry turns into an editable quote and a client-ready PDF.",
    lane: "websites",
    caseStudy: {
      problem:
        "A photography enquiry usually starts a long message thread: the date, the venue, the hours, then a quote typed out by hand. I wanted the site to collect everything in one sitting and hand me a quote I only need to check.",
      built: [
        "A gallery with category filters and a full-screen lightbox that works with the keyboard.",
        "A booking form with labelled fields and clear errors, built for a phone.",
        "A quote builder. Each enquiry sends me a private link to an editable quote that downloads as a client-ready PDF.",
        "A live chat on the site that relays to Telegram, so I can answer from my phone.",
        "A feedback form for past clients, where nothing is published until I approve it.",
      ],
      howItWorks: [
        "The form posts to a server route that checks where the request came from and limits how often it can be sent.",
        "Enquiry details are held in Redis with a short expiry, not kept forever.",
        "The notification goes out by email through Resend. If email fails, the same quote link arrives on Telegram instead.",
        "The quote link carries a random key in the part of the URL that is never sent to a server, and the page clears it from the browser history.",
        "New photos go into a shared Google Drive folder. A scheduled job pulls them in, makes web-sized versions and redeploys the site.",
      ],
      enables:
        "A client can book on their phone without waiting for a reply to get started. I answer with a proper quote and a PDF instead of a paragraph of prices, and updating the gallery is as simple as dropping photos into a folder.",
    },
  },
  {
    slug: "scallion",
    name: "Scallion",
    href: "https://scallion.io",
    host: "scallion.io",
    image: "/work/scallion.webp",
    alt: "Scallion start screen, a pixel-art city at dusk with a button to begin the climb",
    summary:
      "A daily word game people come back to, with group rooms and an admin side.",
    lane: "software",
    caseStudy: {
      problem:
        "A daily game has to be fair and worth coming back to. Everyone needs the same prompts, the scoring has to reward thinking differently, and it has to feel at home in Singapore.",
      built: [
        "A daily climb of short prompts against a timer, the same set for everybody.",
        "Scoring where common answers barely move and rare answers lift your lantern higher, with one hidden best answer per prompt.",
        "A pixel-art Asian skyline to climb, from HDB rooftops to the clouds.",
        "Party rooms for playing with a group.",
        "An admin side for running the game day to day.",
      ],
      howItWorks: [
        "Each day's prompts are fixed for every player, and each player gets one climb a day.",
        "An answer scores by how rare it is among everyone's answers, so the result depends on the whole crowd.",
        "The look switches itself for Lunar New Year, Hari Raya, Mid-Autumn and Deepavali, keyed to the date in Singapore.",
        "It is a Next.js app, built to be played on a phone.",
      ],
      enables:
        "A complete product, not a brochure: people play it daily and play it together. The same pieces (accounts, shared rooms, an admin view) are what most custom software needs.",
    },
  },
  {
    slug: "massgowhere",
    name: "MassGoWhere",
    href: "https://massgowhere.com",
    host: "massgowhere.com",
    image: "/work/massgowhere.webp",
    alt: "MassGoWhere home screen with choices for a Mass, an Adoration room, or Confession",
    summary:
      "Finds a Mass in Singapore you can still make, by public transport, car or on foot, and tells you when to leave.",
    lane: "software",
    caseStudy: {
      problem:
        "Mass times in Singapore are spread across parish sites and weekly bulletins. The question people actually have is simpler: from where I am now, which Mass can I still make, and when do I leave?",
      built: [
        "A site that answers with the Mass you can still make, when to leave and how long the trip takes, with a map of the churches around you.",
        "Planning ahead, filtered by day, time of day or language.",
        "Catch a Mass on the way: going from A to B, which Mass adds the least to the trip.",
        "Adoration rooms and Confession, and a page for every church with this week's Masses and changes.",
        "A Telegram bot that gives the same answer from a shared location or a postal code.",
      ],
      howItWorks: [
        "Regular Mass times are imported every day from myCatholicSG.",
        "Each week, parish bulletins are read by a language model to pick up one-off changes, alongside details checked by hand.",
        "Everything is compiled into a static schedule. Only the travel time is live, from OneMap.",
        "One ranking module runs in the browser and behind the API, so the site and the bots always agree.",
        "The page shows a quick estimate first and lets live travel times settle in place. If the API fails, the browser ranks on its own.",
      ],
      enables:
        "Someone can go from opening the site to knowing when to leave in a few taps, on the web or in Telegram. It is also a working example of pulling messy public information into one reliable answer.",
    },
  },
  {
    slug: "kopitype",
    name: "Kopitype",
    href: "https://kopitype.com",
    host: "kopitype.com",
    image: "/work/kopitype.webp",
    alt: "Kopitype in the middle of a Singlish typing test",
    summary:
      "A typing test built around Singapore English, stations and local phrases, with a public leaderboard.",
    lane: "software",
  },
  {
    slug: "computah",
    name: "Computah",
    href: "https://computah.anselmlong.com",
    host: "computah.anselmlong.com",
    image: "/work/computah.webp",
    alt: "Computah site, a Mac companion with a live conversation panel",
    summary:
      "A Mac app that can see the screen and help with the next step, inside limits you set.",
    lane: "ai",
  },
  {
    slug: "optifiner",
    name: "Optifiner",
    href: "https://optifiner.dev",
    host: "optifiner.dev",
    image: "/work/optifiner.webp",
    alt: "Optifiner homepage with a button to launch the dashboard",
    summary:
      "Tries many code changes at once and keeps the ones that measure better, with a dashboard for each run.",
    lane: "ai",
  },
  {
    slug: "canvas-scraper",
    name: "Canvas scraper",
    href: "https://canvas-scraper.vercel.app",
    host: "canvas-scraper.vercel.app",
    image: "/work/canvas.webp",
    alt: "Canvas scraper page explaining a daily file sync that skips large recordings",
    summary:
      "Pulls new course files to a laptop every day, skips the huge recordings and emails what changed.",
    lane: "ai",
  },
  {
    slug: "telegram-bots",
    name: "Telegram bots",
    href: "https://bot.anselmlong.com",
    host: "bot.anselmlong.com",
    image: "/work/bots.webp",
    alt: "A page of Telegram bots for daily readings, aircon credits, and a group counter",
    summary:
      "Bots I run: daily readings at an hour you choose, a warning before aircon credits run out, a counter for group chats.",
    lane: "software",
  },
  {
    slug: "anselmlong",
    name: "anselmlong.com",
    href: "https://anselmlong.com",
    host: "anselmlong.com",
    image: "/work/personal.webp",
    alt: "Anselm Long's own site, with his name set over a photograph of the Golden Gate Bridge",
    summary: "My own site: the work, the writing, and a way to ask a question.",
    lane: "websites",
  },
];

function isFlagship(project: Project): project is Flagship {
  return project.caseStudy !== undefined;
}

export const flagships: readonly Flagship[] = projects.filter(isFlagship);

export const otherWork: readonly Project[] = projects.filter((project) => !isFlagship(project));

export function findFlagship(slug: string): Flagship | undefined {
  return flagships.find((project) => project.slug === slug);
}
