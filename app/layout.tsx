import type { Metadata, Viewport } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans-face",
  display: "swap",
});

const display = Source_Serif_4({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-display-face",
  display: "swap",
});

const title = "Anselm Long, software and AI for your business";
const description =
  "Independent software engineer in Singapore. Websites, custom software and AI automation that take work off your plate, at a fixed price.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Anselm Long",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_SG",
    url: siteUrl,
    siteName: "Anselm Long",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f5f1e8",
};

const directionContract = `<!--
THESIS: A Singapore consultant's quotation, set as a light editorial page: the offer, the proof and the price read like a document you could sign, not a template of icon cards.
OWN-WORLD: Warm paper (#f5f1e8), ink (#191714), one cobalt ink accent (#2437b8) for actions and the demo field. Source Serif 4 display, Geist body at 19px. Hairline rules, tabular prices, framed real screenshots with soft shadow.
STORY: An owner reads the outcome, sees real shipped work, tries the AI demo on their own business, checks the fixed prices, and messages on WhatsApp.
FIRST VIEWPORT: Serif headline across two thirds, intro and WhatsApp action on the right, three flagship screenshots rising below.
FORM: Quotation and letterhead, fifth on the grounded list, inside the brief-pinned light editorial world. seed:90afc338
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-SG" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-dvh bg-paper text-ink antialiased">
        <div hidden dangerouslySetInnerHTML={{ __html: directionContract }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
