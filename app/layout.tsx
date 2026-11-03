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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-SG" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-dvh bg-paper text-ink antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
