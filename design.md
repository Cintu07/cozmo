---
version: alpha
name: "Warm Serif × Mono Precision"
description: "Cozmo AI uses a warm off-white parchment base (#f5f1ea) paired with a deep near-black ink (#14120e) and a burnt-orange accent (#d96a2c). Display headings are set in Hedvig Letters Serif at light weight with tight negative tracking, while body copy and UI chrome use Inter. JetBrains Mono handles labels, tags, and metadata. The hero overlays frosted-glass chat bubbles with a rich three-layer shadow system. The overall tone is editorial-warm yet technically precise — a deliberate contrast between humanistic serif display and monospaced data labels."
colors:
  background-base: "#f5f1ea"
  background-muted: "#ede7dc"
  background-subtle: "#faf7f1"
  dark-surface: "#1a1a1a"
  white: "#ffffff"
  accent: "#d96a2c"
  ink: "#14120e"
  ink-dim: "#5b564c"
  ink-mute: "#847e71"
  border-line: "#e0d9cb"
typography:
  display-heading: { fontFamily: "Hedvig Letters Serif", fontSize: "60px", fontWeight: "300", lineHeight: "61.2px", letterSpacing: "-1.68px" }
  section-heading: { fontFamily: "Hedvig Letters Serif", fontSize: "26px", fontWeight: "400", lineHeight: "32.5px", letterSpacing: "-0.26px" }
  body:           { fontFamily: "Inter", fontSize: "16px", fontWeight: "400", lineHeight: "24.8px" }
  body-medium:    { fontFamily: "Inter", fontSize: "15px", fontWeight: "500", lineHeight: "23.25px" }
  label-semibold: { fontFamily: "Inter", fontSize: "14.5px", fontWeight: "600" }
  caption-bold:   { fontFamily: "Inter", fontSize: "12.5px", fontWeight: "700", lineHeight: "19.375px", letterSpacing: "-0.125px" }
  mono-label:     { fontFamily: "JetBrains Mono", fontSize: "13px", fontWeight: "500", lineHeight: "20.15px", letterSpacing: "0.52px" }
  mono-small:     { fontFamily: "JetBrains Mono", fontSize: "11px", fontWeight: "500", lineHeight: "17.05px", letterSpacing: "0.99px" }
  mono-code:      { fontFamily: "JetBrains Mono", fontSize: "16px", fontWeight: "400", lineHeight: "24.8px" }
  serif-body:     { fontFamily: "Hedvig Letters Serif", fontSize: "17px", fontWeight: "400", lineHeight: "19.55px", letterSpacing: "-0.17px" }
rounded:
  sm: "5px"
  md: "6px"
  lg: "10px"
  xl: "12px"
  2xl: "14px"
  3xl: "16px"
  bubble: "22px"
  pill: "999px"
shadows:
  bubble-elevation: "0px 12px 32px 0px rgba(0,0,0,0.45)"
  accent-focus-ring: "0px 0px 0px 4px rgba(217,106,44,0.14)"
  card-elevation: "0px -1px 0px 0px rgba(255,255,255,0.04)"
  soft-drop: "0px 6px 24px 0px rgba(0,0,0,0.18)"
---

## Overview

Warm off-white parchment base (#f5f1ea) + deep near-black ink (#14120e) + burnt-orange
accent (#d96a2c). Hedvig Letters Serif (light, tight tracking) for display; Inter for body
and UI chrome; JetBrains Mono for labels, tags, and metadata. Editorial-warm yet technically
precise.

**Signature traits**
- Dual+mono typeface system: Hedvig Letters Serif × Inter × JetBrains Mono.
- Soft, rounded geometry: corner rounding up to 999px.
- Layered elevation: depth from 4 validated shadow tokens.

## Color roles
- accent `#d96a2c` — primary CTA, icon fills, active states, badge backgrounds.
- ink `#14120e` — primary text, nav links, headings on light.
- ink-dim `#5b564c` — secondary body, captions.
- ink-mute `#847e71` — tertiary text, placeholders, metadata.
- border-line `#e0d9cb` — dividers, card outlines, hairlines.
- background-base `#f5f1ea` — primary page/section background.
- background-muted `#ede7dc` — hover states, secondary panels.
- background-subtle `#faf7f1` — cards, inset sections.
- dark-surface `#1a1a1a` — footer + dark overlay sections.
- white `#ffffff` — chat-bubble text, mark, icon fills on dark.

## Do's / Don'ts
- Do keep spacing on the 4px base grid; maintain WCAG AA (4.5:1).
- Do use accent for the single most important action per screen.
- Don't mix rounded and sharp corners in one view; don't invent shadows/colors beyond the tokens above.

> Implemented in `app/globals.css` (CSS variables) + `tailwind.config.ts` (token mapping)
> + `lib/fonts.ts` (Hedvig local, Inter + JetBrains Mono via next/font).
