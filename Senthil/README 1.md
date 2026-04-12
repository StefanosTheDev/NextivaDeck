# Seksom's Slide Deck Prompt Pack

## What This Is

This is a step-by-step guide for how slides from external PowerPoint files get rebuilt into the NextivaDeck investor deck system. It covers the full workflow Stefanos used to bring in Seksom's slides. Follow these exact steps to add new slides in the future.

---

## The System Overview

The NextivaDeck is a React-based slide deck built with Next.js. Each slide is a standalone React component (`.tsx` file). There are three places that need to be updated when adding a new slide:

1. **The component file** — `src/components/slides/YourNewSlide.tsx`
2. **The slide registry** — `src/components/slideRegistry.ts` (imports the component + registers it with an ID)
3. **The slide order** — `slide-order.json` (controls the order, categories, and visibility)

---

## Step-by-Step: How Slides Were Added

### Step 1: Analyze the PPTX

We used a Python script to extract all text content from each slide in the PowerPoint file. This gives us the raw data — titles, bullet points, categories, metrics — without needing to manually copy from PowerPoint.

**Prompt used:**
```
Analyze SEKSOM/Nextiva Products Roadmap - April 2026.pptx
I need to rebuild the slides into my design system.
Get the content right — analyze each slide step by step.
```

Cursor ran a Python script using `python-pptx` to extract:
- Slide titles and subtitles
- Text boxes with their font sizes and formatting
- Bullet point content organized by category
- Layout structure (grid, columns, cards, etc.)

### Step 2: Study the Existing Design System

Before building anything, we analyzed the existing slides to understand the exact patterns:
- Background gradients (radial-gradient with specific RGBA values)
- Typography (Georgia serif for headings, Space Grotesk for body)
- Card styles (rgba backgrounds, border colors, border-radius)
- Spacing (padding values like `48px 80px 0` for headers)
- Color tokens (#FFFFFF, #CCC7C3, #7EB3E8, #2860B2, etc.)
- Footer component (SlideFooter with "dark" variant)

This was codified into a reusable Cursor Skill at:
`~/.cursor/skills/rebuild-senthil-pptx-slides/SKILL.md`

### Step 3: Build Each Slide Component

For each slide from the PPTX, a new `.tsx` file was created in `src/components/slides/`.

**Naming convention:** `Senthil{DescriptiveName}Slide.tsx`

**Examples:**
- `SenthilRoadmapCoverSlide.tsx` — Cover/title slide
- `SenthilNextAgenticCXRoadmapSlide.tsx` — Roadmap matrix
- `SenthilNCCRoadmapSlide.tsx` — NCC roadmap matrix

**Every slide follows this template:**
```tsx
"use client";
import SlideFooter from "../SlideFooter";

export default function MyNewSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      {/* Header */}
      <header style={{ padding: "48px 80px 0", flexShrink: 0, textAlign: "center" }}>
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          EYEBROW LABEL
        </p>
        <h1 className="font-heading" style={{ fontSize: 44, fontWeight: 500, color: "#FFFFFF", margin: "8px 0 0", lineHeight: 1.15 }}>
          Slide Title
        </h1>
      </header>

      {/* Main content */}
      <main style={{ flex: 1, padding: "24px 80px 0" }}>
        {/* Your content here */}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
```

### Step 4: Register the Slide

**In `src/components/slideRegistry.ts`:**

1. Add the import at the top:
```ts
import SenthilRoadmapCoverSlide from "./slides/SenthilRoadmapCoverSlide";
```

2. Add the entry in the `SLIDE_COMPONENTS` object:
```ts
"senthil-roadmap-cover": {
  id: "senthil-roadmap-cover",
  label: "Senthil: Products Roadmap Cover",
  component: SenthilRoadmapCoverSlide,
  theme: "dark",
  isNew: true,
},
```

### Step 5: Add to Slide Order + Category

**In `slide-order.json`:**

1. Add the slide ID to the `"order"` array (at the end for appending to the published deck):
```json
"order": [
  ...existing slides...,
  "senthil-roadmap-cover"
]
```

2. Add the category mapping:
```json
"categories": {
  ...existing...,
  "senthil-roadmap-cover": "SENTHIL PPTX Slides"
}
```

3. Add the category name (if it's new):
```json
"categoryNames": [
  ...existing...,
  "SENTHIL PPTX Slides"
]
```

4. Do NOT add to `"hiddenSlides"` if you want it visible in the published deck.

### Step 6: Build and Verify

```bash
npm run build
```

This catches TypeScript errors, missing imports, and compilation issues before pushing.

### Step 7: Push

```bash
git add -A
git commit -m "Add Senthil roadmap slides to published deck"
git push origin Demo-BranchV3
```

---

## What Was Built (April 9, 2026)

### Batch 1: Senthil Product Roadmap Slides (7 slides)

Source: `SEKSOM/Nextiva Products Roadmap - April 2026.pptx`
Category: `SENTHIL PPTX Slides`

| # | Slide ID | File | Description |
|---|----------|------|-------------|
| 1 | senthil-roadmap-cover | SenthilRoadmapCoverSlide.tsx | Cover — "Nextiva Products Roadmap, April 2026" |
| 2 | senthil-roadmap-divider | SenthilRoadmapDividerSlide.tsx | Section divider — "Roadmap." |
| 3 | senthil-next-agentic-cx-roadmap | SenthilNextAgenticCXRoadmapSlide.tsx | Roadmap matrix — 5 rows x 2 time columns |
| 4 | senthil-next-agentic-cx-delivered | SenthilNextAgenticCXDeliveredSlide.tsx | Delivered timeline — Jan/Feb/Mar '26 columns |
| 5 | senthil-ncc-roadmap | SenthilNCCRoadmapSlide.tsx | NCC roadmap — 4 rows x 2 columns |
| 6 | senthil-nextos-roadmap | SenthilNextOSRoadmapSlide.tsx | NextOS roadmap — 3 rows x 2 columns |
| 7 | senthil-technology-divider | SenthilTechnologyDividerSlide.tsx | Section divider — "Technology." |

### Batch 2: Customer Use Cases V2 (1 slide)

Source: `Downloads/Nextiva deck 3/SEKSOMPPT2/Seksom Slides.pptx` (slides 4, 7, 9, 11)
Category: `Seksom-Branch-040926`

| # | Slide ID | File | Description |
|---|----------|------|-------------|
| 1 | customer-use-cases-v2 | CustomerUseCasesV2Slide.tsx | 4-card layout — Suzuki, Tata Play, Shasta, AEG Vision |

This slide uses the exact same design as `CustomerUseCasesDarkV2Slide.tsx` but with updated customer data extracted from Seksom's PPTX.

---

## Quick Reference: Future Prompts

### Adding slides from a new PPTX:
```
Analyze [path/to/file.pptx]
I need to rebuild slides X, Y, Z into our design system.
Tag them with category "[Category Name]".
Append them to the end of the published slide deck.
Check for ID conflicts in slideRegistry.ts and slide-order.json.
Run npm run build to verify, then push to Demo-BranchV3.
```

### Updating an existing slide with new data:
```
Look at the existing slide [slide-id].
Create a V2 copy with the exact same design but updated content from [source].
Tag it "[Category Name]" and append to the end of the published deck.
Preserve the original slide.
```

### Bringing a slide from another branch:
```
Go to the [Branch-Name] branch and find their published slide [number].
Bring that slide into Demo-BranchV3.
Check for ID conflicts — if the ID already exists, create a new unique one.
Register it and add it to slide-order.json as the last published slide.
Tag it "[Category Name]".
Run npm run build, then push.
```

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/components/slides/*.tsx` | Individual slide components |
| `src/components/slideRegistry.ts` | Imports + registers all slides with IDs |
| `slide-order.json` | Controls order, categories, visibility |
| `src/components/SlideFooter.tsx` | Shared footer component |
| `src/app/globals.css` | Global styles and CSS variables |
| `src/app/catalog/page.tsx` | Catalog UI for managing slides |
| `src/lib/clientExport.ts` | PDF/PPTX export functions |

---

## Design System Cheat Sheet

| Element | Value |
|---------|-------|
| Dark background | `radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)` |
| Heading font | `className="font-heading"` (Georgia serif) |
| Body font | Space Grotesk (default, no class needed) |
| Eyebrow label | 18px, bold, uppercase, `#CCC7C3` |
| Title | 40-56px, `font-heading`, `#FFFFFF` |
| Card background | `rgba(255,255,255,0.04)` |
| Card border | `1px solid rgba(255,255,255,0.1)` |
| Card border-radius | 12-14px |
| Accent blue | `#2860B2` |
| Accent light blue | `#7EB3E8` |
| Header padding | `48px 80px 0` |
| Content padding | `24px 80px 0` |
| Horizontal padding | Always `80px` or `100px` |
| Footer | `<SlideFooter slideNumber={slideNumber} variant="dark" />` |
