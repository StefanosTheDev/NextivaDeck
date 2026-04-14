# Lead Velocity Buckets + Hybrid GTM Excellence — Update Package

**Date:** 2026-04-13 (evening session, fourth iteration)
**Branch target:** `Demo-BranchV3`
**Supersedes:** `nextiva-deck-hybrid-gtm-excellence-2026-04-13-v2.zip` (earlier today) and `nextiva-deck-lead-velocity-buckets-update-2026-04-13.zip` for the buckets slide

## What's in this zip

```
src/components/slides/
├── HybridGtmExcellenceSlide.tsx     ← updated (slide 35)
├── LeadVelocityBucketsSlide.tsx     ← updated (slide 33; also drives slide 34 via NoMM wrapper)
└── shared/
    └── SegmentHeaderBox.tsx         ← updated (NEW optional `conversion` prop — backward-compatible)

pptx/
├── lead-velocity-buckets.pptx       ← single-slide preview
└── hybrid-gtm-excellence.pptx       ← single-slide preview
```

No registry or slide-order changes — both slides already exist in `slideRegistry.ts` and `slide-order.json` from earlier this week.

## Files to drop into the repo

These are straight copies, no merge logic needed:

1. `apps/nextiva-deck/src/components/slides/HybridGtmExcellenceSlide.tsx`
2. `apps/nextiva-deck/src/components/slides/LeadVelocityBucketsSlide.tsx`
3. `apps/nextiva-deck/src/components/slides/shared/SegmentHeaderBox.tsx`

The `LeadVelocityBucketsNoMMSlide.tsx` wrapper does NOT need to change — it still calls `<LeadVelocityBucketsSlide excludeMidMarket={true} />` and inherits all updates automatically.

## What changed and why

This pass folds Tomas's recent meeting themes into both slides, with a focus on the **hybrid GTM motion**, **speed as a competitive moat**, and **best-in-class LTV/CAC**.

### `SegmentHeaderBox.tsx` (shared component)

**New optional prop:** `conversion?: { value: string; label: string; sub?: string }`

- When present, the metrics row expands from a 2-column grid (Customers / ARR) to a 3-column grid (Customers / ARR / Conversion). When absent, the layout is unchanged.
- Backward-compatible: `LeadVelocityCurvesSlide`, `CustomerBaseBroadSlide`, and any other consumer that doesn't pass the new prop will render identically to before.
- Used on the Lead Velocity Buckets slide to surface lead-to-sale conversion stats next to Customers/ARR on each segment card.

### `LeadVelocityBucketsSlide.tsx` (slide 33 + 34 via wrapper)

1. **Conversion stats added to both segment cards** (left side of each velocity row):
   - **VSB**: `~50%` Lead → Sale (next to 80,200 customers / $142M ARR)
   - **SMB**: `~44%` Lead → Sale (next to 11,000 customers / $105M ARR)

2. **SMB hero callout simplified.** The 54% box no longer carries the `<90s lead-to-contact` preamble — it now reads cleanly:
   - *"For businesses with 10 to 50 users, **54%** of deals close within 7 days"*
   - The VSB / 80% box still leads with the speed-moat framing as the primary anchor for that motion.

3. **Cohort band rebranded as the unifying takeaway.** Title and body both retitled and resized so it reads as the slide's bottom-line narrative:
   - **Title** (was "Cohort economics validate the model"): **"Speed Moat & Best-in-Class LTV/CAC"**
   - **Body**: split into two stacked paragraphs (HubSpot framing on line 1, "After month 12, …" on its own line). Both paragraphs bumped from 12.5 → 16pt; title bumped from 14 → 19pt.
   - **Tagline appended** to the second paragraph: ***"Highly efficient, high ROI funnel and leading LTV/CAC."***
   - The card was also slimmed (`width: 92%, alignSelf: center`) so the wider title can breathe.

4. **Removed customer-choice mini band** that briefly carried `~25K self-serve / ~600K choose sales` — that content lives only on the Hybrid GTM slide now (under the CUSTOMER CHOICE bullet) to avoid duplication.

5. **Vertical spacing opened up.** `main` gap bumped from `10` → `18` so all of the rows (hero callouts, VSB bar, SMB bar, cohort band, Mid-Market) breathe more.

### `HybridGtmExcellenceSlide.tsx` (slide 35)

1. **Per-card bullets sharpened**, with Tomas-flavored language on the middle HYBRID pillar:
   - **SELF-SERVE**: *Brand pulls demand · Freemium → paid funnel · Self-checkout, low ACV*
   - **HYBRID**: *Buy online or call sales · Buyers opt into the motion · SMB simplicity, enterprise depth*
   - **SALES-LED**: *Named AEs, long cycles · RFPs, POCs, custom builds · High ACV, channel-driven*

2. **Bottom area cleaned up.** Removed the old `~25K / ~600K` stat band AND the prose takeaway. Replaced with a tight 3-column commentary band carrying Tomas's strongest themes:

   | Position (left → right) | Eyebrow | Body |
   |---|---|---|
   | Under SELF-SERVE | **SPEED MOAT & BEST-IN-CLASS LTV/CAC** | *"<90s lead-to-contact — first to the buyer frames the deal before competitors engage. **Highly efficient, high ROI funnel and leading LTV/CAC.**"* |
   | Under HYBRID | **CUSTOMER CHOICE** | *"E-commerce is open — yet buyers actively **opt into a sales conversation**. Comms is mission-critical."* |
   | Under SALES-LED | **RESILIENT MODEL** | *"Customers naturally moving to **usage- and outcome-based billing** — no forced model transition."* |

3. **Spectrum bar kept** beneath the commentary band (Low-touch → High-touch with the Nextiva marker pinned at 50%).

4. **Vertical spacing opened up.** `main` gap bumped from `22` → `32` so the 3 pillar cards, the bottom commentary band, and the spectrum bar all have more breathing room.

5. **Footnote rewritten** — dropped the now-stale `~25K / ~600K` attribution, added a citation for the speed-moat (`<90s per internal ops dashboard, Q1 FY26`) and the billing-model framing.

## Stat sources (for footnote verification)

These numbers came verbally from Tomas during recent GTM review meetings. The footnotes attribute them generically as "internal GTM review, 2026" — if Drew can surface a written source (ops dashboard export, GTM deck), the citations should be tightened to a specific quarter and dataset:

| Stat | Slide(s) | Current source |
|---|---|---|
| `<90s lead-to-contact` | Buckets (VSB hero), Hybrid GTM (SPEED MOAT bullet), both footnotes | "internal ops dashboard, Q1 FY26" |
| `~50%` Lead → Sale (VSB) | Buckets (VSB segment card) | needs verification — currently no footnote citation |
| `~44%` Lead → Sale (SMB) | Buckets (SMB segment card) | needs verification — currently no footnote citation |
| `80%` close within 7 days (VSB), `54%` (SMB) | Buckets hero callouts | Salesforce opportunity data, April 2026 (already in footnote) |
| HubSpot cohort framing (sub-$500 MRR retention) | Buckets cohort band | "internal BI review; HubSpot framing per their early-stage investor disclosures" (already in footnote) |
| Usage/outcome billing transition | Hybrid GTM (RESILIENT MODEL bullet), footnote | "internal GTM review, 2026" |

**TODO before final investor delivery:** verify the `~50%` and `~44%` Lead → Sale numbers against the source data so the segment cards can drop the `~` and the footnote can cite the exact filter/dataset.

## Verification checklist

After dropping the files into `Demo-BranchV3`:

- [ ] `npx tsc --noEmit` clean (no type errors from the new `conversion` prop)
- [ ] `LeadVelocityCurvesSlide` and `CustomerBaseBroadSlide` still render identically (they don't pass the new `conversion` prop, so the SegmentHeaderBox fallback to 2-column should kick in)
- [ ] `/print/raw?slides=lead-velocity-buckets` renders cleanly inside the slide bounds — no overflow into the `nextiva.com` footer line, especially with the larger cohort card
- [ ] `/print/raw?slides=lead-velocity-buckets-no-mm` also renders cleanly (NoMM wrapper inherits all updates)
- [ ] `/print/raw?slides=hybrid-gtm-excellence` renders cleanly — verify the SPEED MOAT eyebrow doesn't crash into the column boundary (it's noticeably longer than the other two eyebrows after this update)
- [ ] Conversion stat (~50% / ~44%) on the segment cards is legible at the narrower 3-column width

## Known visual risks worth eyeballing

1. **Hybrid GTM SPEED MOAT eyebrow length.** After expanding to "SPEED MOAT & BEST-IN-CLASS LTV/CAC", the leftmost eyebrow is ~3× the length of the other two. It will likely wrap to two lines in its column. If that creates uncomfortable visual asymmetry, the fastest fixes are: shorten to `SPEED MOAT · LTV/CAC`, give the leftmost column a higher flex weight, or stretch the other two eyebrows to match.

2. **Buckets cohort card density.** The cohort body is now larger (16pt) AND split into two paragraphs AND has a tagline appended. Combined with the `main` gap bump and the larger title, vertical density on the slide is significantly higher than before. The full-MM variant (with the Mid-Market row) is the tightest — confirm the Mid-Market segment card + 3 commentary callouts still fit above the footer.

3. **3-column SegmentHeaderBox width.** The segment cards live in a `flex: 1` column at 1/3 of the slide width minus padding. With 3 metric columns instead of 2, each metric block is ~115px wide. `~50%` (4 chars) and `$142M` (5 chars) should fit cleanly but worth a final eyeball.

## What's NOT in this zip

- No registry or order changes (both slides already wired in upstream)
- No new logo assets (all visual assets from the v2 hybrid-gtm zip are already on `Demo-BranchV3`)
- No PDF previews — PPTX exports are included instead (per Drew's request this round)
- No financial-data file changes — the buckets slide still uses the hardcoded 2026 cohort values from `CloseVelocityData_2026-04-11_VSBandSMB.xlsx`

## Questions / open items for Stefanos

- Once integrated, please confirm the cohort card bottom paragraph break renders cleanly (it's two stacked `<p>` elements inside a flex column with `gap: 6`). If your Prettier pass refactors this into a single paragraph, the line-break intent will be lost.
- The `conversion` prop on `SegmentHeaderBox` is opt-in — if you have any other consumers I'm not aware of, they'll keep their existing 2-column layout. No action needed unless you want to surface conversion stats elsewhere.
