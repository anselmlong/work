# Product

Brief agreed with Anselm in a grilling session on 2026-11-04. It replaces the earlier small-business-only brief.

## Platform

web

## Users

Primary: managers, founders and owners of small and mid-sized companies in Singapore, typically in their 40s and 50s. They want custom software, internal tools or AI automation and judge the vendor on whether he looks capable and accountable. They read on a laptop as often as a phone.

Secondary: small-business owners (shops, clinics, tutors, contractors, F&B) who want an affordable website.

## Product Purpose

A freelance portfolio for Anselm Long. A visitor should leave thinking "this person knows what he is doing" and send a message about a real project. Success is a WhatsApp message or email about a paid job.

## Offer

Three service lanes, in this order:

1. **Websites.** Business sites, booking flows, payments. Exact rate card below.
2. **Custom software.** Web apps, internal tools, dashboards, bots. From S$2,500, fixed quote after a call.
3. **AI & automation.** Assistants, document and workflow automation wired into how the business already works. From S$1,500, fixed quote after a call. Proven by the live demo on the site.

Website rate card text stays exact: one-pager s$490; up to 5 pages s$990; monthly s$69/mo and s$129/mo with care and a 12-month minimum; care plan s$39/mo or s$390/yr; edits s$35/hr; add-ons extra page s$120, booking flow s$290, payments from s$350, WhatsApp lead-alert bot s$180. Terms: 50% deposit, 50% before go-live, PayNow. All prices SGD, GST not included.

Website FAQ points stay: the client owns the site; if Anselm disappears, everything is in their name plus a handover doc; copywriting, photos, domain purchase, email, branding and ads are not included. Contact forms come with a privacy notice, PDPA-friendly.

## Signature feature: live AI demo

"What could AI do for your business?" The visitor describes their business in a sentence or two (e.g. "dental clinic, 6 staff, bookings by phone"). The site returns three concrete, plain-language software or automation ideas, each with what it does, what it saves, and a rough size (small / medium / larger). It ends with "Talk to me about this" linking to WhatsApp and email with the context pre-filled.

- Claude Haiku via the Anthropic API, called from a Next.js route handler. Key in `ANTHROPIC_API_KEY`.
- Input capped (about 300 characters), output capped, per-IP rate limit, graceful error and fallback copy. No storage of what visitors type.

## Structure

- Home page: hero, three service lanes, live demo, selected work, how I work, pricing, about, FAQ, contact.
- Case study pages for three flagships: Photos booking site (photos.anselmlong.com), Scallion (scallion.io), MassGoWhere (massgowhere.com). Each: the problem, what was built, how it works, what it enables. Real screenshots only. No invented numbers.
- Other live work as a compact list: Kopitype, Computah, Optifiner, Canvas scraper, Telegram bots, anselmlong.com.

## Contact

- WhatsApp: wa.me/6588536376 button with a pre-filled greeting. The number is not printed as text.
- Email: mailto:anselmpius@gmail.com.
- GitHub https://github.com/anselmlong.
- No Ko-fi link on this site.

## Brand Commitments

Name: Anselm Long. Independent software engineer in Singapore. Voice: plain, confident, professional, sentence case, first person "I". Experience that may be stated: software engineering at Visa and at Open Government Products (GovTech). Do not name SAGE. No photo of Anselm. Headline is outcome-led, e.g. "Software and AI that take work off your plate."

## Hard rules

- Do not say he is a student. Do not invent years, client counts, testimonials, results or stats.
- No em dashes. No hype words.
- Vercel Analytics allowed. One server route for the demo allowed. Everything else static.
- Site URL: https://work.anselmlong.com. Stack: Next.js App Router, Tailwind, TypeScript.

## Design direction

Fresh design, not the old timber/brass look. Light editorial: warm off-white, strong serif display headlines, a clean sans for body, generous whitespace, one confident accent colour. Premium consultancy feel. Restrained motion that never blocks content. Large readable body text for older eyes.

## Accessibility

WCAG AA contrast. Visible focus. Keyboard access. prefers-reduced-motion respected. Touch targets at least 44px. Works at 390px and 1280px.
