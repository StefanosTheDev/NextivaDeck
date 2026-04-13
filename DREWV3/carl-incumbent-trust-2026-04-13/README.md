# CARL Analysis + AI Incumbent Trust — Slide Delivery v2

**For:** Stefanos
**From:** Drew
**Date:** 2026-04-13
**Supersedes:** `carl-incumbent-trust-2026-04-12.zip`

## What this is

A revised version of the `CarlIncumbentTrustSlide` consolidated slide. Drops in over the v1 file from yesterday with **two new asset dependencies** (Thoma Bravo logo SVGs).

If you already integrated v1 yesterday, this is a straight file replacement plus the two SVG assets.

## What's in this package

```
carl-incumbent-trust-2026-04-13/
├── README.md
├── src/components/slides/
│   └── CarlIncumbentTrustSlide.tsx        — the revised component
└── public/logos/
    ├── thoma-bravo.svg                    — original (Wikimedia, public domain)
    └── thoma-bravo-white.svg              — recolored white variant (used by the slide)
```

The slide component is fully self-contained — no new npm dependencies. Same imports as v1: `framer-motion`, `recharts`, `lucide-react`, and the existing `../SlideFooter`.

## What changed since v1 (2026-04-12)

Major narrative + visual rebuild on the left half of the slide. The right half (CARL data — three quote cards) is mostly the same with refreshed quotes.

### Left half — Market View
- **Hero green box copy tightened**: now reads *"AI commercial benefits will accrue to **scaled and embedded incumbents**."* (down from the longer v1 phrasing)
- **Section label expanded**: "Market View" → *"Market perspectives on AI benefits to incumbent software vendors"*
- **Real Thoma Bravo logo + Avenir wordmark** in the chart card top-right corner (replaces the v1 text badges). TB logo is the actual SVG from Wikimedia Commons (public domain) recolored to white. Avenir is rendered as a serif typographic wordmark — matches their actual text-based brand identity (confirmed via avenirgrowth.com).
- **Two new market-research source boxes** added below the Thoma Bravo chart:
  1. **Gartner** mini bar chart — Worldwide AI spending forecast: $1.74T (2025) → $2.5T (2026), +44% YoY
  2. **Goldman Sachs** TAM expansion visualization — Customer Service Software TAM (SaaS + Agents): $30B (2025) → $50B+ (2030), ~11% CAGR. Two big numbers connected by a clean gray arrow with CAGR annotation. Quote: *"Agents layer on top of SaaS — incumbents capture outsized share of the new Agent TAM."*
- **Spacing tightened** — chart card padding/font sizes reduced so the bottom source box stays clear of the source footnote.

### Right half — Validated by internal data
- **Section label inline**: "Validated by internal data · Q3 FY26 sales call transcripts" (single horizontal row, matches left label height for top alignment)
- **Card 1 quote refreshed**: now uses the only quote in the 1,156-call CARL dataset where the customer explicitly says *"we are using Nextiva"* + *"we're customers already"* — cleaned up to: *"Since we're already Nextiva customers, do we get a discount when we add the AI?"* (SMB · Existing Nextiva customer · Score 7/10)
- **Cards 2 + 3 quotes** unchanged from v1
- **Big stat font sizes** unchanged (52px Georgia)

### Layout structure
- **Vertical divider** added between left and right halves (1px gradient line)
- **Two columns** now use flex with `alignItems: stretch` so section labels and content align top-to-bottom across the divider
- **Eyebrow above title** now reads simply: `Appendix`
- **Source footnote** updated to cite all three external sources: Thoma Bravo/Avenir, Gartner, Goldman Sachs

## Asset attribution

- **`thoma-bravo.svg`**: Sourced from Wikimedia Commons file *Thoma_Bravo_logo_2024.svg*. Wikimedia classifies it as public domain ("simple geometric shapes or text"). 512×180 px, ~20KB. https://commons.wikimedia.org/wiki/File:Thoma_Bravo_logo_2024.svg
- **`thoma-bravo-white.svg`**: A direct recolored copy of the above — `#0C284C` and `#17D980` both replaced with `#FFFFFF` for visibility on the dark slide background. Used by the slide via `<img src="/logos/thoma-bravo-white.svg" />`.
- **Avenir**: No logo asset — rendered as a Georgia serif wordmark inline in the component (Avenir Growth Capital uses text-only branding on their corporate site).

## Integration steps

### 1. Drop the component file in place

Replace the existing `src/components/slides/CarlIncumbentTrustSlide.tsx` with the version in this package. (If you didn't integrate v1 yesterday, this is a new file.)

### 2. Drop the logo SVGs into `public/logos/`

```
public/logos/thoma-bravo.svg
public/logos/thoma-bravo-white.svg
```

The slide references `/logos/thoma-bravo-white.svg` via Next.js's standard public folder convention. The original color SVG is included for archival/future use; only the white variant is currently rendered.

### 3. Verify slideRegistry.ts entry exists

If you already integrated v1, you should already have:

```ts
import CarlIncumbentTrustSlide from "./slides/CarlIncumbentTrustSlide";
```

and the registry entry:

```ts
"carl-incumbent-trust": {
  id: "carl-incumbent-trust",
  label: "Drew: CARL Analysis + AI Incumbent Trust",
  component: CarlIncumbentTrustSlide,
  theme: "dark",
  isNew: true,
},
```

If not, see v1 README for full registration instructions.

### 4. Verify slide-order.json placement

The slide should be at the position where `brand-trust-overview` used to be — between `briefing-closing-recap` and `customer-use-cases-dark-v2`. The three old keys (`brand-trust-overview`, `brand-trust-channels`, `three-paths-pre-trust`) should be removed from the ordered deck (file files themselves can stay).

## Verification checklist

- [ ] `npx tsc --noEmit` — no type errors
- [ ] Both SVG assets serve at `http://localhost:3000/logos/thoma-bravo.svg` and `http://localhost:3000/logos/thoma-bravo-white.svg`
- [ ] `/print/raw?slides=carl-incumbent-trust` returns 200 and renders cleanly at 1920×1080
- [ ] Visual check at `/catalog`:
  - [ ] Left side: Market View label → green hero claim → TB chart card with logos in top-right → Gartner mini-bar-chart box → Goldman Sachs TAM expansion box (with `$30B → $50B+` and `~11% CAGR` arrow)
  - [ ] Right side: Validated by internal data label → three quote cards (Existing customers / First-time AI buyers / Active AI shoppers)
  - [ ] Vertical divider line visible between the two halves
  - [ ] No content overflows card borders or runs into the slide footer
- [ ] PDF export via the catalog's export picker renders without layout break
- [ ] TB logo is white and sized comparably to the Avenir wordmark in the chart card header

## Sources referenced in the slide

- **Thoma Bravo / Avenir** — *"We Believe AI Adoption Favors Incumbents"* citing Avenir, *"The Future of SaaS — A Fork in the Road"* (January 2026 survey of enterprise software buyers)
- **Gartner** — *"Worldwide AI Spending Forecast"* (January 2026 press release; $2.5T global AI spending in 2026, +44% YoY)
- **Goldman Sachs Equity Research** — *"Generative AI Part XI: Agentic AI Expands the App Software TAM"* (June 16, 2025, by Borges, Rangan, Sheridan, Valenti, Hager). The $30B → $50B+ Customer Service Software TAM expansion is from Exhibit 7. The "outsized share" quote is verbatim from page 1.
- **Nextiva CARL brand-trust analysis** — internal sales call transcript analysis, Q3 FY26 (1,156 SB calls decoded; quotes pulled from the curated "Top 75 Highest Trust Evidence" sheet)

## Questions

Ping Drew if anything needs tuning — copy, stats, layout, colors are all easy to adjust. The component is self-contained (no external helpers) so it's a safe one-file change. Logo files can be swapped if Thoma Bravo or Avenir provide official brand kits later.
