---
name: Anselm Long
description: A light editorial page set like a consultant's quotation, for Singapore owners buying software and AI work.
colors:
  paper: "#f5f1e8"
  paper-deep: "#ece6d9"
  sheet: "#fbf9f4"
  ink: "#191714"
  ink-soft: "#58524a"
  rule: "#d9d1c1"
  cobalt: "#2437b8"
  cobalt-deep: "#1a2a94"
  cobalt-wash: "#c9cff3"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontWeight: 560
    lineHeight: 1.02
    letterSpacing: "-0.022em"
    sizes: ["1.6rem", "1.75rem", "1.9rem", "2rem", "2.25rem", "2.4rem", "2.5rem", "2.75rem", "3.1rem", "3.25rem", "3.5rem", "4rem", "4.25rem", "4.75rem", "5rem", "6rem"]
  body:
    fontFamily: "Geist, ui-sans-serif, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
    sizes: ["0.95rem", "0.98rem", "1rem", "1.05rem", "1.1875rem", "1.2rem", "1.25rem", "1.3rem", "1.45rem"]
rounded:
  focus: "2px"
  thumb: "6px"
  shot: "8px"
  frame: "12px"
  sheet: "16px"
  pill: "9999px"
spacing:
  gutter-mobile: "16px"
  gutter-desktop: "32px"
  section-mobile: "96px"
  section-desktop: "128px"
  max-width: "84rem"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    minHeight: "44px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-deep}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
  sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
---

## Overview

The page reads like a well-made quotation from a consultant: a letterhead, line items with prices, terms at the foot, and real exhibits. Warm paper is the ground, ink carries the words, and one cobalt ink colour marks every action and the AI demo. The tone is calm and capable, for owners in their 40s and 50s reading on a laptop or a phone.

## Colors

Paper (#f5f1e8) is the page. Paper-deep (#ece6d9) is the quiet band behind How I work and the tags. Sheet (#fbf9f4) is anything that sits on the page like a printed document: the pricing quotation and the demo's idea sheets. Ink (#191714) is all primary text and the contact band. Ink-soft (#58524a) is secondary text and clears AA on paper, paper-deep and sheet. Rule (#d9d1c1) is hairlines between rows; a full-ink 1px rule opens each list.

Cobalt (#2437b8) is the one accent: WhatsApp and primary buttons, links, step numbers, the size meter, and the whole demo section, where it becomes the field and paper becomes the text (8:1). Cobalt-wash (#c9cff3) is text selection only. There is no second accent.

## Typography

Source Serif 4 with optical sizing does every heading, project name, price and the about statement, at weight 560 with tight tracking and balanced wrapping. Geist does everything you read at 19px base with 1.6 line height, because the readers are older. Prices and counters use tabular lining numerals. No eyebrow labels above headings; a heading carries its section.

## Layout

A 12-column grid inside 84rem with 16px mobile and 32px desktop gutters. Section headings take the left four to six columns with a short lede across from them; content runs below or to the right. Sections are separated by large vertical space (96 to 128px) and the occasional hairline, not by boxes. The page pace is: typographic hero with three flagship exhibits, priced service lines, the cobalt demo field, alternating work spreads and a compact list, a tinted How I work band, the pricing sheet, about, questions, and an ink contact band.

## Elevation & Depth

Screenshots and sheets carry one soft shadow, a 1px contact line plus a long low blur (0 18px 40px -18px at 35% ink). The demo's sheets use a cobalt-tinted version on the blue field. No hard offset shadows, no glass beyond the header's light backdrop blur.

## Shapes

Buttons and chips are pills. Screenshots have 8 to 12px corners, sheets 16px, list thumbnails 6px. Focus rings are 2px cobalt with a 3px offset, paper on the cobalt and ink sections.

## Components

The primary action is a cobalt pill with the WhatsApp glyph, in the header on every page and again in the hero and contact. Secondary actions are ink pills (Read the case study, Visit site) or underlined cobalt links. Service lanes are ruled line items with the price set right in serif. The rate card is a definition list split from the exact rate strings, so the wording never changes. Questions use native disclosures with a drawn plus that turns into a minus. The demo is a sheet-like input with a character count, example chips, shimmer placeholders while loading, and three idea sheets with a three-step size meter.

## Motion

One authored moment: the hero lines and exhibits rise in with a short blur-to-sharp stagger on load, and idea sheets settle in one after another when the demo answers. Easing is cubic-bezier(0.16, 1, 0.3, 1). Under prefers-reduced-motion nothing animates and smooth scrolling is off.

## Do's and Don'ts

Do keep the rate card strings exact and show real screenshots only. Do keep one accent. Do not add eyebrows, icon-tile cards, gradient text, stats or testimonials. Do not print the WhatsApp number as text. Do not use em dashes anywhere, including model output, which the server rewrites.
