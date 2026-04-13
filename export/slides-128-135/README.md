# Export: slides 128–135 (NextivaDeck)

This folder is a **self-contained handoff** of **eight** slides from `slide-order.json` **full order** (positions **128–135**, 1-based):

| # | Slide ID | React export |
|---|----------|----------------|
| 128 | `customer-use-case-sb-foxy` | `CustomerUseCaseSbFoxySlide` |
| 129 | `customer-use-case-sb-vision-wheel` | `CustomerUseCaseSbVisionWheelSlide` |
| 130 | `customer-use-case-sb-renascent` | `CustomerUseCaseSbRenascentSlide` |
| 131 | `customer-use-case-sb-sage` | `CustomerUseCaseSbSageSlide` |
| 132 | `customer-suzuki` | default export `CustomerSuzukiSlide` |
| 133 | `customer-tata-play` | default export `CustomerTataPlaySlide` |
| 134 | `customer-shasta` | default export `CustomerShastaSlide` |
| 135 | `customer-aeg-vision` | default export `CustomerAEGVisionSlide` |

## Layout

```
export/slides-128-135/
├── README.md                 ← this file
├── manifest.json             ← machine-readable index + asset list
├── deps/slide-minimal.css    ← `.slide` + `.font-heading` + Space Grotesk
├── src/components/
│   ├── SlideFooter.tsx
│   └── slides/
│       ├── CustomerSlideSbStyleHeroCardsRow.tsx
│       ├── CustomerUseCasesSbSingleSlides.tsx   ← exports Foxy + Vision + Renascent + Sage
│       ├── customerUseCasesSbSinglesContent.ts
│       ├── CustomerSuzukiSlide.tsx
│       ├── CustomerTataPlaySlide.tsx
│       ├── CustomerShastaSlide.tsx
│       └── CustomerAEGVisionSlide.tsx
└── public/images/
    ├── customer-foxy.png
    ├── customer-vision.png
    ├── customer-renascent.png
    ├── customer-sage.png
    └── pptx-slides/*.png
```

## Integrating in another Next.js repo

1. **Copy** `src/components/` paths into the same locations under your `src/` (or update imports).
2. **Copy** `public/images/*` into your `public/images/` so URLs like `/images/customer-foxy.png` and `/images/pptx-slides/slide4-img0.png` work.
3. **CSS:** import `deps/slide-minimal.css` (or merge rules into your globals). Slides assume a **1920×1080** `.slide` canvas if you use the same scaling pattern as NextivaDeck.
4. **Dependencies:** `react`, `react-dom`, **`framer-motion`** (see parent repo `package.json` for version).
5. **Registry:** add the eight slide IDs to your slide map; see snippet below.

### `slideRegistry`-style imports (snippet)

```tsx
import CustomerSuzukiSlide from "@/components/slides/CustomerSuzukiSlide";
import CustomerTataPlaySlide from "@/components/slides/CustomerTataPlaySlide";
import CustomerShastaSlide from "@/components/slides/CustomerShastaSlide";
import CustomerAEGVisionSlide from "@/components/slides/CustomerAEGVisionSlide";
import {
  CustomerUseCaseSbFoxySlide,
  CustomerUseCaseSbVisionWheelSlide,
  CustomerUseCaseSbRenascentSlide,
  CustomerUseCaseSbSageSlide,
} from "@/components/slides/CustomerUseCasesSbSingleSlides";

// Add to SLIDE_COMPONENTS (shape may differ in your app):
// "customer-use-case-sb-foxy"         → CustomerUseCaseSbFoxySlide
// "customer-use-case-sb-vision-wheel" → CustomerUseCaseSbVisionWheelSlide
// "customer-use-case-sb-renascent"   → CustomerUseCaseSbRenascentSlide
// "customer-use-case-sb-sage"        → CustomerUseCaseSbSageSlide
// "customer-suzuki"                  → CustomerSuzukiSlide
// "customer-tata-play"               → CustomerTataPlaySlide
// "customer-shasta"                  → CustomerShastaSlide
// "customer-aeg-vision"              → CustomerAEGVisionSlide
```

## Notes

- **Slide 128 (Foxy)** uses the same bundle as 129–131: `CustomerUseCaseSbFoxySlide` in `CustomerUseCasesSbSingleSlides.tsx` and `/images/customer-foxy.png`.
- **Relative imports** in copied files match NextivaDeck: slides use `../SlideFooter` and `./CustomerSlideSbStyleHeroCardsRow`.
- **`hiddenSlides` in `slide-order.json` does not affect** which index is “128” here — this export uses the **raw `order` array** positions.
