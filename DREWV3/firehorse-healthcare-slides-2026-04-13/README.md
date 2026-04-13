# Healthcare Vertical Slides — Export for Stefanos

**Date**: 2026-04-13
**From**: Drew (Project Firehorse)
**Contains**: 2 slides ready to ingest into the NextivaDeck fork

---

## What's in this ZIP

A self-contained bundle of the 2 healthcare vertical slides for the investor
deck. Includes the rendered PPTX (for preview / pasting into PowerPoint decks)
and the full source so the slides can be integrated into the NextivaDeck
Next.js codebase on `Demo-BranchV3`.

### The 2 slides (in the order Drew wants them in the deck)

1. **Healthcare Vertical: At a Glance** (`healthcare-vertical-glance`)
   — Hero metric cards (~8,000 healthcare customers, ~$58M run-rate ARR as of
   FY26, ~$8T US healthcare spend), key customers row with logos / initials
   (Acuity Eyecare, VieMed / Sleep Mgmt, Northeast Health Services, HealthPoint,
   Senior Living Communities, PSG / HCA), <1% MRR churn and 39% on 36+ month
   contracts insight pills, and a right-side "What Healthcare Demands" callout
   (Reliable / HIPAA Compliance, Security & Privacy / Zero Touch Install).
2. **Healthcare Vertical: Strategy & Capabilities** (`healthcare-vertical-strategy`)
   — Hero banner asserting the UC + CX + AI differentiation, then a
   Challenge → Response mapping: 4 paired rows of Provider Challenges
   (red) matched to the Nextiva for Healthcare Solution (blue) with arrow
   connectors.

---

## File layout

```
firehorse-healthcare-slides-2026-04-13/
├── README.md                             ← you are here
├── pptx/
│   └── healthcare-vertical.pptx          ← 2 slides rendered at 1920×1080
├── slides/
│   ├── HealthcareVerticalGlanceSlide.tsx
│   ├── HealthcareVerticalStrategySlide.tsx
│   └── shared/
│       └── SlideFooter.tsx               ← already in your fork; included for diffing
├── logos/
│   └── acuity-eye.png                    ← referenced by the Glance slide
├── images/
│   └── industries/
│       └── logo-hca-healthcare.png       ← referenced by the Glance slide
├── slideRegistry-snippet.ts              ← copy-paste block for slideRegistry.ts
└── slide-order-snippet.json              ← copy-paste block for slide-order.json
```

---

## How to integrate into the fork

All paths below are relative to `apps/nextiva-deck/` in the NextivaDeck repo
(branch: `Demo-BranchV3`).

### 1. Drop in the slide components

Copy the 2 top-level `.tsx` files from `slides/` into:
```
src/components/slides/
```

The `SlideFooter.tsx` in `slides/shared/` should already match your existing
`src/components/SlideFooter.tsx` — included only for diffing. Do **not** copy
it over unless there's a diff you want to pick up.

### 2. Drop in the image assets

Both image assets should already exist in your fork, but included here to
keep the bundle self-contained. If any are missing, copy:

- `logos/acuity-eye.png` → `public/logos/acuity-eye.png`
- `images/industries/logo-hca-healthcare.png` → `public/images/industries/logo-hca-healthcare.png`

This is additive — existing assets are untouched.

### 3. Register the slides

Open `src/components/slideRegistry.ts` and add the 2 entries from
`slideRegistry-snippet.ts`. The imports go at the top of the file; the 2
registry-object entries go inside the slide map.

### 4. Add them to the slide order

Open `slide-order.json` and:
- Insert the 2 IDs from `slide-order-snippet.json` as a **contiguous block**
  in the `order` array. Drew wants them in the Healthcare Vertical section,
  right after the Customer Use Cases block.
- Add both entries to the `categories` map with value `"Healthcare Vertical"`.
- If `"Healthcare Vertical"` isn't already in `categoryNames`, add it.

### 5. Dependencies

Everything uses packages already in the NextivaDeck `package.json`:
- `framer-motion` (for entrance animations)
- `lucide-react` (for icons — `ShieldCheck`, `Zap`, `Activity`, `UserMinus`,
  `FileText`, `Cable`, `ClipboardList`, `Bot`, `Mic`, `Layers`, `Megaphone`,
  `ArrowRight`)

No new dependencies to install.

### 6. Verify

Run the dev server and open each slide:
- http://localhost:3000/?slide=healthcare-vertical-glance
- http://localhost:3000/?slide=healthcare-vertical-strategy

Both should compile cleanly and match the PPTX rendering.

---

## Notes on the slides

- **Healthcare customer count is rounded** — the exact figure is 7,971. Drew
  chose to display `~8,000` since it reads cleaner and we're close enough to
  claim it.
- **`~$58M` is healthcare run-rate ARR as of FY26** — the description copy
  on the card says so explicitly.
- **`~$8T` US healthcare spend** is a directional TAM claim, not a Nextiva
  figure.
- **`<1% MRR churn`** and **`39% on 36+ month contracts`** are the two retention
  insight pills under the Key Customers row. These are deliberate retention
  signals for investors evaluating stickiness of the healthcare book.
- The Strategy slide's "50% lower SMS costs at Ontrak" callout (inside the
  "One unified platform" solution card) is drawn from the OnTrak Health
  customer case study — ensure it stays attributed that way if you re-use
  the copy elsewhere.

---

## Questions

Ping Drew. Do not push to upstream — Drew will coordinate the merge with
Stefanos.
