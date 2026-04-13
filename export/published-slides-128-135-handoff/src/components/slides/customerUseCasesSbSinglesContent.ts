/**
 * Copy source: CustomerUseCasesDarkV2Slide — split into single-customer slides (Suzuki-style layout).
 */

export type SbCustomerCaseMetric = { stat: string; label: string };

export type SbCustomerCaseSpec = {
  name: string;
  industry: string;
  size: string;
  photo: string;
  accent: string;
  problems: string[];
  solutions: string[];
  metrics: SbCustomerCaseMetric[];
  /** Multiplier for hero frame height + Problem/Solution/metrics sizing (slides 128–131: larger footprint). */
  layoutScale?: number;
  /** Shorter black strip under the photo (single-line meta). */
  heroMetaCompact?: boolean;
  /** Black band above the photo same height as the meta strip below (photo sits between). */
  heroSymmetricMetaBands?: boolean;
  /** Hero `<img>` object-fit; default `contain`. */
  heroObjectFit?: "contain" | "cover";
  /** `object-position` for the hero image (e.g. focal point when using `cover`). */
  heroObjectPosition?: string;
};

export const SB_CUSTOMER_CASES: SbCustomerCaseSpec[] = [
  {
    name: "Foxy Coatings",
    industry: "Home Services",
    size: "Reading, PA · 38 Users · $116K TCV",
    photo: "/images/customer-foxy.png",
    accent: "#2DD4BF",
    problems: [
      "Lost sales: high volume of live callers dropped by static IVR",
      "Diminished sales productivity: Reps perform manual call logging",
    ],
    solutions: [
      "No lost sales leads: all inbound calls fielded",
      "Booking rate increased 1.7x: 35% → 60%",
      "Sales capacity increase secured",
      "Material sales velocity increase via intelligent agent matching",
    ],
    metrics: [
      { stat: "35%→60%", label: "Booking Rate" },
      { stat: "$3K", label: "MRR" },
      { stat: "5 min", label: "Speed-to-Lead" },
    ],
    layoutScale: 1.33,
    heroMetaCompact: true,
    heroSymmetricMetaBands: true,
    heroObjectFit: "cover",
    heroObjectPosition: "center 38%",
  },
  {
    name: "Vision Wheel",
    industry: "Manufacturing",
    size: "Decatur, AL · 7 Locations · 73 Users",
    photo: "/images/customer-vision.png",
    accent: "#6B8FAD",
    problems: [
      "Poor customer sat: fragmented systems prevent contact with preferred location",
      "Lost CX performance visibility: No reporting",
    ],
    solutions: [
      "Improved customer sat: Multichannel engagement, connect immediately to desired office.",
      "Scale with no additional staff: 1K customer-AI interactions.",
      "Limit vendor sprawl: Consolidate on Nextiva across locations.",
    ],
    metrics: [
      { stat: "7", label: "Locations" },
      { stat: "73", label: "Users" },
      { stat: "1K", label: "AI Sessions/Mo" },
    ],
    layoutScale: 1.33,
    heroMetaCompact: true,
    heroSymmetricMetaBands: true,
    heroObjectFit: "cover",
    heroObjectPosition: "center 36%",
  },
  {
    name: "Renascent Protection",
    industry: "Auto Warranties",
    size: "Dublin, OH · 60 CC Users · US & Canada",
    photo: "/images/customer-renascent.png",
    accent: "#D4A843",
    problems: [
      "Call quality compliance doesn't scale: legacy platform drives manual QA reviews",
      "Lost market opportunity: multi-lingual call routing/agent matching absent",
    ],
    solutions: [
      "Expand TAM to Spanish and French speakers, 100K+ minutes served.",
      "Scaled compliance: Automated QA replaces manual call reviews.",
      "Improved KPI visibility: Data-led decision making.",
      "Enhancing AI use cases: Predictive routing and sentiment-driven escalation.",
    ],
    metrics: [
      { stat: "100K+", label: "Min/Mo" },
      { stat: "$5.4K", label: "MRR" },
      { stat: "50", label: "AI Keywords" },
    ],
    layoutScale: 1.33,
    heroMetaCompact: true,
    heroSymmetricMetaBands: true,
    heroObjectFit: "cover",
    heroObjectPosition: "center 36%",
  },
  {
    name: "Sage Surfaces",
    industry: "B2B · Countertops",
    size: "Spring, TX · 115 Users · 42-Month Term",
    photo: "/images/customer-sage.png",
    accent: "#8FAD6B",
    problems: [
      "Lost revenues: excel-based customer tracking",
      "No agent KPI tracking: over a decade without reporting",
    ],
    solutions: [
      "Revenue enhanced: AI deflection drives revenue generation capacity",
      "Improved agent management: visible performance KPIs and mandated coaching for underperformers",
      "Customer data improved: spreadsheet errors and data loss eliminated through CRM automation",
    ],
    metrics: [
      { stat: "$5.2K", label: "MRR" },
      { stat: "$205K", label: "TCV" },
      { stat: "12 yr", label: "Displacement" },
    ],
    layoutScale: 1.33,
    heroMetaCompact: true,
    heroSymmetricMetaBands: true,
    heroObjectFit: "cover",
    heroObjectPosition: "center 38%",
  },
];
