# Published slides 128–135 — developer handoff

This folder is **separate** from `export/slides-128-135/`. It contains the React components, shared layout helper, footer, content data, and **binary images** referenced by those slides so another repo can drop them in without hunting assets.

## What is inside

| Path | Purpose |
|------|--------|
| `src/components/SlideFooter.tsx` | Footer used by every slide here (`variant="dark"`). |
| `src/components/slides/CustomerUseCasesSbSingleSlides.tsx` | Slides **128–131** (named exports: Foxy, Vision Wheel, Renascent, Sage). |
| `src/components/slides/customerUseCasesSbSinglesContent.ts` | Copy + metrics + hero options for SMB singles. |
| `src/components/slides/CustomerSlideSbStyleHeroCardsRow.tsx` | Hero/cards row layout + `CustomerEnterpriseHeroColumn`. |
| `src/components/slides/CustomerSuzukiSlide.tsx` | Slide **132**. |
| `src/components/slides/CustomerTataPlaySlide.tsx` | Slide **133**. |
| `src/components/slides/CustomerShastaSlide.tsx` | Slide **134**. |
| `src/components/slides/CustomerAEGVisionSlide.tsx` | Slide **135**. |
| `public/images/…` | All `/images/…` URLs referenced by the components above. |

See `manifest.json` for machine-readable lists and registry IDs.

## Integrating into another Next.js (or React) app

1. **Dependencies**  
   Install `framer-motion` (source project uses `^12.36.0`). Components are client modules (`"use client"`).

2. **Copy TypeScript**  
   Merge `src/components/` into your app so you keep this structure:

   ```text
   your-app/src/components/SlideFooter.tsx
   your-app/src/components/slides/CustomerUseCasesSbSingleSlides.tsx
   … (same filenames as here)
   ```

3. **Copy static files**  
   Merge `public/images/` from this bundle into your app’s `public/images/` (paths in code are absolute from site root, e.g. `/images/customer-foxy.png`).

4. **Slide shell**  
   These components expect a parent with flex layout and a `.slide` class (full viewport height) like the source deck. If your app uses different layout, wrap each slide or adjust the outer `div` styles.

5. **Fonts**  
   `SlideFooter` uses `'Space Grotesk', sans-serif`. Load that font in the consuming app or change the footer styles.

6. **Register slides**  
   Wire exports to your router/registry:

   - From `CustomerUseCasesSbSingleSlides.tsx`:  
     `CustomerUseCaseSbFoxySlide`, `CustomerUseCaseSbVisionWheelSlide`, `CustomerUseCaseSbRenascentSlide`, `CustomerUseCaseSbSageSlide`
   - Default exports: `CustomerSuzukiSlide`, `CustomerTataPlaySlide`, `CustomerShastaSlide`, `CustomerAEGVisionSlide`

## Verifying assets

All image paths used by these eight positions are included under `public/images/` in this bundle. If you add or rename files in the consuming app, update the strings in `customerUseCasesSbSinglesContent.ts` and the enterprise slide files accordingly.
