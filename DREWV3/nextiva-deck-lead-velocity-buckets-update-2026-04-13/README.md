# Lead Velocity Buckets — Update Package

Branch: `Demo-BranchV3`
Target slide: `lead-velocity-buckets` (slide 33)
Generated: 2026-04-13

## What's in this zip

- `lead-velocity-buckets-preview.pdf` — visual reference of the final slide
- `src/components/slides/LeadVelocityBucketsSlide.tsx` — full replacement
- `src/components/slides/shared/SegmentHeaderBox.tsx` — shared dependency
  (full replacement; gained a new `size` prop since the prior package)

Two source files plus the preview PDF.

## What changed since the prior package

The slide has been rebuilt around three vertical sections:

1. **Top hero callouts** — two full-width cards spanning the slide with a
   lit-up blue gradient + outer glow. Each card calls out the segment's
   "within 7 days" win rate as the slide's biggest takeaway:
   - *For businesses with up to 10 users, **80%** of won deals close within 7 days*
   - *For businesses with 10 to 50 users, **54%** of won deals close within 7 days*

2. **VSB and SMB rows** — segment card on the left (1/3 width) using the
   shared `SegmentHeaderBox`, horizontal stacked bar on the right (2/3 width).
   Six bucket segments (Same day / 1–3 / 4–7 / 8–14 / 15–30 / 31+) with
   labels rendered inline inside each segment. The previous outer chart-card
   border was removed; the bar stands on its own.

3. **Mid-Market row** — segment card on the left (slide-11 data: 1,800
   customers, $104M ARR), three commentary callouts on the right with Lucide
   icons (Network / Workflow / Handshake): "Built for distributed teams",
   "Complex workflows", "Solution selling". A subtle gradient hairline
   divides this section from the velocity bars above.

Header is centered: eyebrow `GTM EFFICIENCY`, title *"Demand lands with
high intent."*, subtitle *"For businesses up to 50 users, we close deals
in hours or days, not weeks or months."*

The footnote sits above the footer, left-aligned with the `nextiva.com`
footer line.

## Files in this zip

```
src/components/slides/
├── LeadVelocityBucketsSlide.tsx       [REPLACE existing]
└── shared/
    └── SegmentHeaderBox.tsx           [REPLACE existing — new `size` prop]
```

## Integration notes

- `LeadVelocityBucketsSlide` accepts an optional `excludeMidMarket?: boolean`
  prop (default `false`). When `true`, the divider + Mid-Market row are
  hidden. Used internally by another local variant; **safe to ignore for
  this delivery** — the default render shows the full slide.

- `SegmentHeaderBox` now exposes a `size?: "compact" | "standard"` prop
  (default `"compact"`). Existing callers don't need any changes — the
  default matches the prior behavior. The buckets slide uses the default
  compact size.

- No new assets, no new package dependencies. `lucide-react` is already in
  the repo (Network / Workflow / Handshake icons).

- No changes to `slide-order.json` or `slideRegistry.ts` — the slide ID
  `lead-velocity-buckets` already exists at position 68 and stays put.

- If `shared/SegmentHeaderBox.tsx` doesn't exist in your branch yet, the
  zip will create the directory on extract.

## Footnote / data source

> *Source: Salesforce opportunity data as of April 2026, direct sales only.
> MQL = reached market. VSB = 1–10 users, SMB = 10–50 users. Mid-Market
> excluded due to sparse lead velocity data.*

Cumulative bucket values were derived from the `CUMULATIVE CONVERSION
CURVES` section of `CloseVelocityData_2026-04-11_VSBandSMB.xlsx` on the
2026 cohort. VSB/SMB "within 7 days" = 80% / 54% respectively.
