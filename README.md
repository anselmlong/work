# Anselm Long

Freelance site for Anselm Long, an independent software engineer in Singapore. It sells three kinds of work (websites, custom software, and AI and automation) and proves the AI lane with a live demo. Live at https://work.anselmlong.com.

## Run it

```
npm install
cp .env.example .env.local   # add an OpenRouter key to enable the demo
npm run dev
```

```
npm run build
npm run lint
```

## Where things live

- `PRODUCT.md` is the brief. Its rules on copy (exact rate card, no em dashes, no invented numbers) are binding.
- `DESIGN.md` records the visual system.
- `lib/projects.ts` is the one list of work. Projects with a `caseStudy` get a page at `/work/<slug>`; the rest appear in the compact list on the home page.
- `lib/site.ts` holds contact links, the service lanes and the website rate card.
- `app/api/ideas/route.ts` is the only server route. It powers the AI demo.

## The AI demo

`POST /api/ideas` takes `{ "description": "..." }` (3 to 300 characters after trimming) and returns three ideas, each with a title, what it does, what it saves and a size of `small`, `medium` or `larger`.

- It calls OpenRouter with `OPENROUTER_API_KEY`. The model comes from `OPENROUTER_MODEL` and defaults to `anthropic/claude-haiku-4.5`.
- Without a key it returns `503` and the page shows a fallback with WhatsApp and email links.
- Bad input returns `400`. More than five requests a minute from one IP returns `429`. The limit is in memory, so it is per server instance.
- The model's reply is parsed and checked before it reaches the page. Visitor input is never logged or stored by the site.

## Images

Screenshots of live work are in `public/work/`. The OG and Twitter images in `app/` are rendered from `.impeccable/og-source.html` with Playwright at 1200x630.
