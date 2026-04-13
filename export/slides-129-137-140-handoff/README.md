# Export: slides 129–137 & 140 (NextivaDeck handoff)

Zip-friendly bundle for **`slide-order.json` positions 129–137** (nine SMB single-customer slides: Vision Wheel through Walker River Resort) **and position 140** (Tata Play enterprise slide).

| Position | Slide ID | Component |
|----------|----------|-----------|
| 129 | `customer-use-case-sb-vision-wheel` | `CustomerUseCaseSbVisionWheelSlide` |
| 130 | `customer-use-case-sb-renascent` | `CustomerUseCaseSbRenascentSlide` |
| 131 | `customer-use-case-sb-sage` | `CustomerUseCaseSbSageSlide` |
| 132 | `customer-use-case-sb-cocoa-lofts` | `CustomerUseCaseSbCocoaLoftsSlide` |
| 133 | `customer-use-case-sb-kalley-flooring` | `CustomerUseCaseSbKalleyFlooringSlide` |
| 134 | `customer-use-case-sb-southeast-diabetes` | `CustomerUseCaseSbSoutheastDiabetesSlide` |
| 135 | `customer-use-case-sb-handyman-hub` | `CustomerUseCaseSbHandymanHubSlide` |
| 136 | `customer-use-case-sb-renegade-roofing` | `CustomerUseCaseSbRenegadeRoofingSlide` |
| 137 | `customer-use-case-sb-walker-river-resort` | `CustomerUseCaseSbWalkerRiverResortSlide` |
| 140 | `customer-tata-play` | default export `CustomerTataPlaySlide` |

## Layout

```
slides-129-137-140-handoff/
├── README.md
├── manifest.json
├── slide-order-fragment.json
├── deps/slide-minimal.css
├── src/components/
│   ├── SlideFooter.tsx
│   └── slides/
│       ├── CustomerSlideSbStyleHeroCardsRow.tsx
│       ├── CustomerUseCasesSbSingleSlides.tsx
│       ├── customerUseCasesSbSinglesContent.ts
│       └── CustomerTataPlaySlide.tsx
└── public/images/
    ├── customer-*.png|webp|jpeg|svg
    └── pptx-slides/seksom-slide7-tata-play.png
```

## Deploy to another branch / repo

1. **Copy** `src/components/` into your app under the same paths (or adjust imports).
2. **Copy** `public/images/*` into your `public/images/` so `/images/...` URLs work.
3. **CSS:** import `deps/slide-minimal.css` in your app (or merge into globals). Slides target a **1920×1080** `.slide` canvas like NextivaDeck.
4. **Dependencies:** `react`, `react-dom`, **`framer-motion`** (see `manifest.json` for version hint).
5. **Registry:** register the ten slide IDs with the components below. **Categories:** add `slide-order.json` entries using `slide-order-fragment.json` as a guide; merge `categories` for SB slides if your catalog uses them.

### `slideRegistry` imports (snippet)

```tsx
import CustomerTataPlaySlide from "@/components/slides/CustomerTataPlaySlide";
import {
  CustomerUseCaseSbVisionWheelSlide,
  CustomerUseCaseSbRenascentSlide,
  CustomerUseCaseSbSageSlide,
  CustomerUseCaseSbCocoaLoftsSlide,
  CustomerUseCaseSbKalleyFlooringSlide,
  CustomerUseCaseSbSoutheastDiabetesSlide,
  CustomerUseCaseSbHandymanHubSlide,
  CustomerUseCaseSbRenegadeRoofingSlide,
  CustomerUseCaseSbWalkerRiverResortSlide,
} from "@/components/slides/CustomerUseCasesSbSingleSlides";
```

Map each `customer-use-case-sb-*` and `customer-tata-play` id to the matching component (`theme: "dark"` in NextivaDeck).

## Note on Foxy (slide 128)

`customerUseCasesSbSinglesContent.ts` includes **all** SMB cases (Foxy → Walker). **Foxy’s image** is in `public/images/customer-foxy.png` so the module stays valid. If your branch should not expose Foxy, simply **do not register** `customer-use-case-sb-foxy` and **omit it** from `slide-order.json`.

## License / imagery

Confirm rights for customer hero assets and `seksom-slide7-tata-play.png` before external decks.
