# Tomas's Keynote Slide Deck — Prompt Pack

## What This Is

Step-by-step guide for rebuilding slides from Tomas's Keynote (Nextiva Pitch Deck) into the NextivaDeck investor deck system.

---

## The System Overview

Each slide is a standalone React component (`.tsx` file). Three places need updating:

1. **The component file** — `src/components/slides/YourNewSlide.tsx`
2. **The slide registry** — `src/components/slideRegistry.ts`
3. **The slide order** — `slide-order.json`

---

## Step-by-Step: How Keynote Slides Were Added

### Step 1: Extract Content from Keynote

Keynote `.key` files use protobuf — not directly readable. Export to PDF first, then extract:

```bash
pdftotext -layout "Tomas-Slide-PDF/Nextiva Pitch Deck.key/Nextiva Pitch Deck (1).pdf" -
```

Split output on form-feed (`\f`) characters. Each page = one slide.

### Step 2: Study the Existing Design System

Reference `Senthil/SKILL.md` and `Tomas-Slide-PDF/SKILL.md` for exact patterns:
- Background gradients, typography, card styles, spacing, color tokens
- Footer component, animation constants, component architecture

### Step 3: Build Each Slide Component

**Naming convention:** `Tomas{DescriptiveName}Slide.tsx`

**Every slide follows this template:**
```tsx
"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

export default function MyNewSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 20%, ...)" }}>
      <motion.header ...>
        {/* title */}
      </motion.header>
      <motion.main ...>
        {/* content */}
      </motion.main>
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
```

### Step 4: Register the Slide

Add import + entry in `slideRegistry.ts`, then update `slide-order.json`.

### Step 5: Build and Verify

```bash
npx tsc --noEmit
```

---

## What Was Built (April 11, 2026)

### Batch: Tomas Keynote Slides (5 slides)

Source: `Tomas-Slide-PDF/Nextiva Pitch Deck.key`
Category: `TOMAS / SENTHIL PPT SLIDES 041126`

| # | Slide ID | File | Description |
|---|----------|------|-------------|
| 1 | tomas-democratized-platform-041126 | TomasDemocratizedPlatformSlide.tsx | 2x3 pillar grid — democratized platform |
| 2 | tomas-cx-first-system-041126 | TomasCXFirstSystemSlide.tsx | 4-column flow — CX-First System |
| 3 | tomas-human-ai-harmony-041126 | TomasHumanAIHarmonySlide.tsx | 3-card — Autonomous / Autopilot / Agent Assist |
| 4 | tomas-trustworthy-041126 | TomasTrustworthySlide.tsx | Stacked metrics — Secure, Compliant, Uptime |
| 5 | tomas-global-footprint-041126 | TomasGlobalFootprintSlide.tsx | World map — 6 nodes + 9 locations |

---

## Quick Reference: Future Prompts

### Adding slides from this Keynote:
```
Extract slide [N] from Tomas-Slide-PDF/Nextiva Pitch Deck.key/Nextiva Pitch Deck (1).pdf
Rebuild it into our design system.
Tag it "TOMAS / SENTHIL PPT SLIDES 041126".
Append to the end of the published deck.
Run tsc to verify, then push.
```

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `Tomas-Slide-PDF/Nextiva Pitch Deck.key` | Source Keynote |
| `Tomas-Slide-PDF/Nextiva Pitch Deck.key/Nextiva Pitch Deck (1).pdf` | PDF export for text extraction |
| `Tomas-Slide-PDF/SKILL.md` | Design system + content reference |
| `src/components/slides/Tomas*.tsx` | Built slide components |
| `src/components/slideRegistry.ts` | Slide registration |
| `slide-order.json` | Order, categories, visibility |
