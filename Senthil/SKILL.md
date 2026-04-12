# Rebuild SENTHIL PPTX Slides

Build new slide components from external PPTX content into the NextivaDeck design system.
Use when rebuilding slides from Senthil's (or any external) PPTX into the investor deck,
or when creating any new slide component that must match existing patterns exactly.

## Trigger

- User mentions "Senthil slides", "SENTHIL PPTX", "rebuild slides", "product roadmap slides"
- User asks to build a slide from PPTX content or external source material
- User says "build slide" or "create slide" for the NextivaDeck project

## Important: Category Tag

Slides built from Senthil's PPTX use one of two categories in `slide-order.json`:
- Original batch (April 9): `"SENTHIL PPTX Slides"`
- April 11 batch: `"TOMAS / SENTHIL PPT SLIDES 041126"`

---

## 1. Design System Reference — Exact Specifications

### 1.1 Project Paths

| Item | Path |
|------|------|
| Slide components | `src/components/slides/*.tsx` |
| Slide registry | `src/components/slideRegistry.ts` |
| Shared footer | `src/components/SlideFooter.tsx` |
| Global styles | `src/app/globals.css` |
| Slide order + categories | `slide-order.json` (project root) |
| Slide API | `src/app/api/slides/route.ts` |
| Financial data | `src/components/financialData.ts` |

### 1.2 CSS Variables (from globals.css)

```css
--cream: #FEFAF5;
--navy: #1A447C;
--navy-dark: #061A37;
--navy-deep: #0F2C59;
--blue: #2860B2;
--blue-dusk: #235289;
--blue-steel: #31659A;
--charcoal: #2E2D2C;
--gray-dark: #4A4846;
--gray-mid: #6C6967;
--gray-warm: #A29E9B;
--gray-light: #CCC7C3;
--gray-pale: #E0DEDA;
--white: #FFFFFF;
--near-black: #000208;
```

### 1.3 Typography

| Class | Font | Weight | Tracking | Line Height | Usage |
|-------|------|--------|----------|-------------|-------|
| `.font-heading` | Georgia, 'Times New Roman', serif | varies | -0.02em | 1.15 | Slide titles, big numbers, card headers |
| `.font-body` | 'Space Grotesk', sans-serif | varies | -0.01em | 1.5 | Body text, bullets, labels |
| (base) | 'Space Grotesk', sans-serif | — | — | — | Everything else (default on `.slide`) |

### 1.4 Slide Base Classes

Every slide component uses `className="slide"` on the outer `<div>`. Theme is applied via inline `style` (not CSS classes in practice):

```
DARK SLIDE (most common):
background: radial-gradient(ellipse 80% 70% at 50% 50%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)
color: #FFFFFF

DARK SLIDE (header-lifted variant — for content slides):
background: radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)

DARK SLIDE (divider variant — center-weighted):
background: radial-gradient(ellipse 80% 70% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)
```

**CRITICAL:** Always use inline `style` for the background gradient. Do NOT rely on `className="slide--dark"` alone — existing slides specify the gradient inline for control over the ellipse position.

### 1.5 Card Styles (Inline — Not CSS Classes)

Dark card (used inside dark slides):
```js
{
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 14,        // sometimes 12
  padding: "28px 32px",    // varies by density
}
```

Dark card with accent left border:
```js
{
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderLeft: "4px solid #7EB3E8",
  borderRadius: 14,
  padding: "24px 32px",
}
```

Blue-tinted card (for architectural/platform slides):
```js
{
  background: "rgba(40,96,178,0.1)",
  border: "1px solid rgba(40,96,178,0.25)",
  borderRadius: 10,
  padding: "14px 16px",
}
```

### 1.6 Color Tokens (Inline Values)

| Token | Value | Usage |
|-------|-------|-------|
| White text | `#FFFFFF` | Headings, primary text |
| Subdued text | `rgba(255,255,255,0.7)` | Body, bullets |
| Muted text | `rgba(255,255,255,0.5)` | Descriptions, subtitles |
| Very muted | `rgba(255,255,255,0.45)` | Fine print, secondary labels |
| Footer text | `rgba(255,255,255,0.3)` | Footer elements |
| Accent blue | `#2860B2` | Bullet dots, accent borders |
| Accent light blue | `#7EB3E8` | Stat labels, highlighted text |
| Eyebrow gray | `#CCC7C3` | Eyebrow labels |
| Card bg | `rgba(255,255,255,0.04)` | Card background |
| Card border | `rgba(255,255,255,0.1)` | Card border |
| Near black bg | `#000208` | Slide base background |

### 1.7 Bullet List Pattern

```tsx
<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
  {items.map((item, i) => (
    <li key={i} style={{
      fontSize: 18,
      color: "rgba(255,255,255,0.7)",
      marginBottom: i < items.length - 1 ? 10 : 0,
      lineHeight: 1.5,
      paddingLeft: 20,
      position: "relative",
    }}>
      <span style={{ position: "absolute", left: 0, color: "#2860B2" }}>•</span>
      {item}
    </li>
  ))}
</ul>
```

---

## 2. Component Architecture — Exact Patterns

### 2.1 File Template (Every Slide)

```tsx
"use client";
import { motion } from "framer-motion";
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
      {/* Header section */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0 }}
      >
        {/* eyebrow + title + subtitle here */}
      </motion.header>

      {/* Main content */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "28px 100px" }}
      >
        {/* content here */}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
```

### 2.2 Header Pattern

**Eyebrow + Title (standard):**
```tsx
<p style={{
  fontWeight: 700,
  fontSize: 18,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  color: "#CCC7C3",
  margin: 0,
}}>
  EYEBROW LABEL
</p>
<h1 className="font-heading" style={{
  fontSize: 56,
  fontWeight: 500,
  color: "#FFFFFF",
  margin: "10px 0 0",
  lineHeight: 1.15,
}}>
  Slide Title Here.
</h1>
```

**Subtitle (optional, under title):**
```tsx
<p style={{
  fontSize: 22,
  color: "rgba(255,255,255,0.5)",
  margin: "12px 0 0",
  lineHeight: 1.4,
}}>
  Supporting description text
</p>
```

### 2.3 Divider/Section Slide Pattern

```tsx
"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

export default function MyDividerSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading"
          style={{
            fontSize: 72,
            fontWeight: 400,
            color: "#FFFFFF",
            margin: 0,
            textAlign: "center",
          }}
        >
          Section Title.
        </motion.h1>
      </div>
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
```

### 2.4 Statement/Quote Slide Pattern (Centered Big Text)

```tsx
"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

export default function MyStatementSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 100px",
        textAlign: "center",
      }}>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          EYEBROW
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading"
          style={{
            fontSize: 64,
            fontWeight: 500,
            color: "#FFFFFF",
            marginTop: 32,
            lineHeight: 1.2,
            maxWidth: 1100,
          }}
        >
          Big statement text goes here.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            width: 100,
            height: 1,
            background: "rgba(255,255,255,0.15)",
            marginTop: 44,
          }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
            marginTop: 24,
          }}
        >
          Supporting subtitle
        </motion.p>
      </div>
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
```

### 2.5 Grid Card Slide Pattern (Metrics / At-a-Glance)

```tsx
<main style={{
  flex: 1,
  padding: "28px 100px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gap: 18,
  alignContent: "center",
}}>
  {items.map((item, i) => (
    <motion.article
      key={i}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 12,
        padding: "28px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* content */}
    </motion.article>
  ))}
</main>
```

### 2.6 Stacked Card List Pattern (Why Nextiva / Investor Summary)

Uses `flexDirection: "column"` with `gap: 20`, each card has icon + text with accent left border.

### 2.7 Multi-Column Content Pattern (3 columns with categorized bullets)

```tsx
<main style={{
  flex: 1,
  padding: "24px 100px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 20,
  alignContent: "start",
}}>
  {columns.map((col, i) => (
    <motion.article
      key={i}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 14,
        padding: "28px 32px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Column title + categorized bullet lists */}
    </motion.article>
  ))}
</main>
```

---

## 3. Framer Motion — Standard Animations

### 3.1 Animation Constants

| Element | initial | animate | transition |
|---------|---------|---------|------------|
| Header | `{ opacity: 0, y: -10 }` | `{ opacity: 1, y: 0 }` | `{ duration: 0.6 }` |
| Main content | `{ opacity: 0, y: 12 }` | `{ opacity: 1, y: 0 }` | `{ duration: 0.6, delay: 0.2 }` |
| Cards (staggered) | `{ opacity: 0, y: 14 }` | `{ opacity: 1, y: 0 }` | `{ duration: 0.5, delay: 0.15 + i * 0.06 }` |
| Cards (side entry) | `{ opacity: 0, x: -20 }` | `{ opacity: 1, x: 0 }` | `{ duration: 0.5, delay: 0.3 + i * 0.08 }` |
| Divider title | `{ opacity: 0, y: 12 }` | `{ opacity: 1, y: 0 }` | `{ duration: 0.6 }` |
| Statement text | `{ opacity: 0, y: 12 }` | `{ opacity: 1, y: 0 }` | `{ duration: 0.8, delay: 0.2 }` |
| Divider line | `{ opacity: 0 }` | `{ opacity: 1 }` | `{ duration: 0.8, delay: 0.5 }` |

### 3.2 Rules

- ALWAYS use `framer-motion` for entry animations
- Use `motion.div`, `motion.header`, `motion.main`, `motion.article`, `motion.h1`, `motion.p`
- Stagger delay formula: `baseDelay + index * step` (step is typically 0.06–0.08)
- Never use CSS transitions or keyframe animations for slide entry

---

## 4. SlideFooter — Usage

```tsx
import SlideFooter from "../SlideFooter";

// At the bottom of every slide, just before closing </div>:
<SlideFooter slideNumber={slideNumber} variant="dark" />
```

- `variant="dark"` for dark slides (most slides)
- `variant="light"` for cream/light slides
- Footer renders: `nextiva.com | a new dawn in customer experience.` | `confidential` | `{slideNumber}`
- Footer has `borderTop: 1px solid`, `padding: 12px 80px`, `fontSize: 20`

---

## 5. Registration — Step-by-Step

### 5.1 Add Import to slideRegistry.ts

Add at the end of the import block (maintain alphabetical grouping by category):

```ts
import SenthilRoadmapCoverSlide from "./slides/SenthilRoadmapCoverSlide";
```

### 5.2 Add Entry to SLIDE_COMPONENTS

Add inside the `SLIDE_COMPONENTS` object. Pattern:

```ts
"senthil-roadmap-cover": {
  id: "senthil-roadmap-cover",
  label: "Senthil: Products Roadmap Cover",
  component: SenthilRoadmapCoverSlide,
  theme: "dark",
  isNew: true,
},
```

### 5.3 ID Naming Convention

Format: `senthil-{descriptive-slug}`

Examples:
- `senthil-roadmap-cover`
- `senthil-roadmap-divider`
- `senthil-next-agentic-cx-roadmap`
- `senthil-next-agentic-cx-delivered`
- `senthil-ncc-roadmap`
- `senthil-nextos-roadmap`
- `senthil-technology-divider`

### 5.4 Update slide-order.json

After registration, update `slide-order.json`:

1. Add slide id to `"order"` array (at desired position)
2. Add category mapping: `"senthil-roadmap-cover": "SENTHIL PPTX Slides"`
3. Add `"SENTHIL PPTX Slides"` to `"categoryNames"` array (if not already present)
4. Optionally add to `"hiddenSlides"` if not ready for the main deck

### 5.5 File Naming Convention

Slide component files: `Senthil{DescriptiveName}Slide.tsx`

Examples:
- `SenthilRoadmapCoverSlide.tsx`
- `SenthilRoadmapDividerSlide.tsx`
- `SenthilNextAgenticCXRoadmapSlide.tsx`
- `SenthilNextAgenticCXDeliveredSlide.tsx`
- `SenthilNCCRoadmapSlide.tsx`
- `SenthilNextOSRoadmapSlide.tsx`
- `SenthilTechnologyDividerSlide.tsx`

---

## 6. Padding & Spacing — Critical Values

| Location | Value |
|----------|-------|
| Header padding | `padding: "48px 100px 0"` or `padding: "56px 100px 0"` or `padding: "72px 100px 0"` |
| Main content padding | `padding: "28px 100px"` or `padding: "24px 100px"` |
| Horizontal padding (universal) | `100px` left/right (NEVER less) |
| Grid gap | `18px` (metrics grid) or `20px` (card grid) |
| Card internal padding | `"28px 32px"` (standard) or `"24px 32px"` (compact) or `"28px 24px"` (metrics) |
| Card border radius | `12px` (compact) or `14px` (standard) |
| Footer padding | `"12px 80px"` |

---

## 7. Roadmap-Specific Patterns (for Senthil slides)

The Senthil PPTX introduces roadmap-matrix and timeline layouts not yet in the design system. Build them using existing primitives:

### 7.1 Roadmap Matrix Layout (Slides 3, 5, 6)

Structure: Category rows x Time columns (2Q 2026 | 2H 2026+)

```tsx
const COLUMN_HEADERS = ["2Q 2026", "2H 2026+"];

// Row categories with items per column
const rows = [
  {
    category: "Human + AI",
    q2Items: ["Item 1", "Item 2"],
    h2Items: ["Item 3", "Item 4"],
  },
  // ...
];
```

Layout approach:
- Use CSS grid: `gridTemplateColumns: "180px 1fr 1fr"` (category label + 2 time columns)
- Category labels: bold, 14pt, white, inside a narrow left column
- Time column headers: sticky top row, 18pt
- Each cell: dark card with bullet list, 10pt body text scaled to ~16px in our system
- Scale PPTX 10pt to 15–16px in the web slide (PPTX renders at lower density)

### 7.2 Timeline / Phased Delivery Layout (Slides 4, 10, 12)

Structure: 3 columns, each a tall card representing a month/quarter

```tsx
const months = [
  {
    header: "Jan '26 (Delivered)",
    sections: [
      { title: "Omni-Channel CX", items: ["Item 1", "Item 2"] },
      { title: "AI Powered", items: ["Item 3", "Item 4"] },
    ],
  },
  // ...
];
```

Layout approach:
- 3-column grid: `gridTemplateColumns: "repeat(3, 1fr)"`
- Each column: single tall card with internal section headers
- Month header: bold, 20px, white, at card top
- Section headers: bold, 15px, `#7EB3E8` accent color
- Bullet items: 14–15px, `rgba(255,255,255,0.7)`
- Cards may need internal scrolling for dense content; use `overflow: hidden` with careful sizing

### 7.3 Font Size Scaling (PPTX → Web)

| PPTX Size | Web Size | Usage |
|-----------|----------|-------|
| 44pt | 56–64px | Slide titles |
| 28pt | 36–42px | Section headers |
| 24pt | 28–32px | Card headers |
| 18pt | 22–24px | Subtitles |
| 16pt | 20px | Month headers in timeline |
| 14pt | 18px | Category labels |
| 10pt | 15–16px | Bullet items in roadmap cards |

---

## 8. Component Props Interface

Every slide component MUST follow this exact interface:

```ts
{ slideNumber?: number }
```

With default value: `{ slideNumber = 0 }`

The `slideNumber` is passed by `InvestorDeck.tsx` and used only by `SlideFooter`.

---

## 9. Checklist — Before Marking a Slide Complete

- [ ] File is `"use client";` at top
- [ ] Uses `framer-motion` for all entry animations
- [ ] Outer div has `className="slide"` with inline background gradient
- [ ] Uses `SlideFooter` with correct variant
- [ ] Component exported as default
- [ ] Props interface is `{ slideNumber?: number }` with default
- [ ] Horizontal padding is `100px`
- [ ] Headings use `className="font-heading"` (Georgia serif)
- [ ] Body text uses Space Grotesk (default, no class needed)
- [ ] Colors use exact inline values (not CSS variables)
- [ ] Cards use `rgba(255,255,255,0.04)` bg + `rgba(255,255,255,0.1)` border
- [ ] Added import to `slideRegistry.ts`
- [ ] Added entry to `SLIDE_COMPONENTS` with `isNew: true`
- [ ] ID follows `senthil-{slug}` convention
- [ ] File follows `Senthil{Name}Slide.tsx` convention
- [ ] Category set to `"SENTHIL PPTX Slides"` in `slide-order.json`
- [ ] Added to `"order"` array in `slide-order.json`
- [ ] `"SENTHIL PPTX Slides"` exists in `"categoryNames"` array

---

## 10. Source Content Reference — Senthil PPTX (7 Slides)

### Slide 1 — Title/Cover
- **Title:** "Nextiva Products Roadmap"
- **Date:** "April 2026"
- **Footer:** "Proprietary & Highly Confidential – Covered by NDA"
- **Pattern:** Statement/Cover slide, centered

### Slide 2 — Roadmap Divider
- **Title:** "Roadmap"
- **Pattern:** Divider slide with Nextiva logo

### Slide 3 — the NEXT Agentic CX Platform (High-Level Roadmap)
- **Title:** "the NEXT Agentic CX Platform"
- **Layout:** Roadmap matrix — 5 category rows × 2 time columns
- **Categories:** Human + AI, Agentic CX for MM, Agentic CX for SB, Agentic CX for Verticals, Bespoke At Scale
- **Columns:** 2Q 2026, 2H 2026+
- **Pattern:** Roadmap Matrix

### Slide 4 — Delivered Features (Monthly Timeline)
- **Title:** "the NEXT Agentic CX Platform (delivered in Q3)"
- **Layout:** 3 columns — Jan/Feb/Mar '26
- **Pattern:** Timeline / Phased Delivery

### Slide 5 — Nextiva Contact Center Roadmap
- **Title:** "Nextiva Contact Center"
- **Layout:** Roadmap matrix — 4 category rows × 2 time columns
- **Categories:** Agentic NCC, AI Employees, Integrations, Other
- **Pattern:** Roadmap Matrix

### Slide 6 — NextOS + Nextiva One Roadmap
- **Title:** "NextOS + Nextiva One"
- **Layout:** Roadmap matrix — 3 category rows × 2 time columns
- **Categories:** AI Enabled Business Communications, Usability Improvements, Manageability Improvements
- **Pattern:** Roadmap Matrix

### Slide 7 — Technology Divider
- **Title:** (minimal — branding section break)
- **Pattern:** Divider slide with Nextiva logo

---

## 11. Source Content Reference — Senthil PPTX Batch 2 (April 11, 2026)

Source: `Senthil/the Nextiva Platform - Product Briefing Jan 2026.pptx`
Category: `"TOMAS / SENTHIL PPT SLIDES 041126"`

### Slide 6 — Model Agnostic Platform
- **Title:** "Model Agnostic Platform"
- **Layout:** Split — left text column + right 5 AI capability cards
- **File:** `SenthilModelAgnosticPlatformSlide.tsx`
- **ID:** `senthil-model-agnostic-platform-041126`

### Slide 8 — Data & Intelligence Platform
- **Title:** "Reasoning across customer & business data"
- **Layout:** Two-column — left architecture diagram, right bullet list
- **File:** `SenthilDataIntelligencePlatformSlide.tsx`
- **ID:** `senthil-data-intelligence-platform-041126`

### Slide 9 — Nextiva CXPaaS Architecture
- **Title:** "Nextiva CXPaaS Architecture"
- **Layout:** 5-layer stacked horizontal architecture diagram
- **File:** `SenthilCXPaaSArchSlide.tsx`
- **ID:** `senthil-cxpaas-arch-041126`

### Slide 13 — Built to be bespoke, at scale
- **Title:** "Built to be bespoke, at scale"
- **Layout:** 3-column tall cards with internal section dividers (6 sections)
- **File:** `SenthilBespokeAtScaleSlide.tsx`
- **ID:** `senthil-bespoke-at-scale-041126`
