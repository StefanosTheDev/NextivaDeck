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
  /** Multiplier for hero frame height + Problem/Solution/metrics sizing (SB singles: larger footprint). */
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
  {
    name: "Cocoa Lofts LLC",
    industry: "Hospitality · Lodging",
    size: "Cocoa, FL · Pilot property · $99 MRR · XBert AI Pro",
    /** Property photo (WebP) from deck discussion transcripts / client materials. */
    photo: "/images/customer-cocoa-lofts.webp",
    accent: "#B8956A",
    problems: [
      "Call routing gap: needed AI on an existing business number with correct handoff to the right live agent.",
      "Scheduling friction: wanted AI-assisted meeting booking through Outlook, not manual-only workflows.",
      "Rollout risk: first-property pilot before committing to a broader multi-property footprint.",
    ],
    solutions: [
      "XBert AI Pro answers inbound on the existing number and routes callers to the appropriate agent.",
      "Outlook scheduling integrated into the AI workflow with guided setup support.",
      "Pilot live on property one with a clear expansion path as performance proves out.",
      "Usage snapshot: ~476 interactions with ~434 resolved by AI (~91% containment).",
    ],
    metrics: [
      { stat: "~91%", label: "AI containment" },
      { stat: "476", label: "Interactions (snapshot)" },
      { stat: "$99", label: "MRR" },
    ],
    layoutScale: 1.33,
    heroMetaCompact: true,
    heroSymmetricMetaBands: true,
    heroObjectFit: "cover",
    heroObjectPosition: "center 35%",
  },
  {
    name: "Kalley Flooring",
    industry: "Hardwood · Refinishing",
    size: "Los Angeles, CA · 4 team members · $99 MRR · XBert AI Pro",
    /** Hero sourced from public marketing imagery on kalleyflooring.com (Webflow CDN). */
    photo: "/images/customer-kalley-flooring.jpeg",
    accent: "#C17000",
    problems: [
      "Inbound overload: ~20 calls and texts per day exceeded what a 4-person team could answer consistently.",
      "Manual handling risk: delayed or missed follow-ups on high-value flooring inquiries.",
      "Omnichannel gap: needed AI on voice and SMS—not voice alone—within a budget-sensitive starter package.",
    ],
    solutions: [
      "XBert AI Pro fields inbound calls and texts so every lead gets an immediate, professional response.",
      "Information capture and routing: AI gathers details and routes messages to the right contact (e.g. David).",
      "Scaled on a smaller interaction package first, with room to grow as volume and budget allow.",
      "Usage snapshot: ~1,308 interactions with ~1,307 resolved by AI (~100% containment, 1 escalation).",
    ],
    metrics: [
      { stat: "~100%", label: "AI containment" },
      { stat: "1,308", label: "Interactions (2 mo.)" },
      { stat: "$99", label: "MRR" },
    ],
    layoutScale: 1.33,
    heroMetaCompact: true,
    heroSymmetricMetaBands: true,
    heroObjectFit: "cover",
    heroObjectPosition: "center 45%",
  },
  {
    name: "Southeast Diabetes Inc",
    industry: "Diabetes supplies · Healthcare services",
    size:
      "Birmingham, AL · 40 employees (34 agents, 6 supervisors) · ~$2.5K MRR · NEXT Scale + XBERT AI",
    /** Typographic placeholder — swap for licensed brand or facility imagery when available. */
    photo: "/images/customer-southeast-diabetes.svg",
    accent: "#5EC4D4",
    problems: [
      "High inbound volume: ~175 calls/day with pressure to reach the correct department without live triage on every interaction.",
      "SMS in scope from day one: text was already operationally critical and had to be in phase 1, not deferred.",
      "Fragmented stack + competitive eval: multiple tools and vendors vs. RingCentral/Dialpad; needed one platform to consolidate.",
      "Healthcare-grade needs: HIPAA, billing lookups, equipment reorder, fax/vFax, and department-specific escalation paths.",
    ],
    solutions: [
      "Phased contact-center transformation: phase 1—AI voice + SMS with transfers; phase 2—Brightree EMR/EHR, web chat, and email.",
      "NEXT Scale plus XBERT AI Employee Add-on, committed XBert usage, fax/vFax, and call center implementation services.",
      "Consolidates communications workflows onto Nextiva instead of parallel point solutions.",
      "Early snapshot: ~417 interactions with ~412 resolved by AI (~99% effective containment), 5 escalated.",
    ],
    metrics: [
      { stat: "~99%", label: "AI containment" },
      { stat: "417", label: "Interactions (snapshot)" },
      { stat: "$2.5K", label: "MRR" },
    ],
    layoutScale: 1.33,
    heroMetaCompact: true,
    heroSymmetricMetaBands: true,
    heroObjectFit: "cover",
    heroObjectPosition: "center 40%",
  },
  {
    name: "Handyman Hub",
    industry: "Handyman · Home repair & remodeling",
    size:
      "Broomfield, CO · 4 employees · multi-state (Denver hub) · $287 MRR · XBert AI Pro + 500 sessions",
    /** Logo PNG from deck discussion transcripts (sheilapaxton form asset). */
    photo: "/images/customer-handyman-hub.png",
    accent: "#D4A03A",
    problems: [
      "Incumbent AI ceiling: prior solution was too limited on customization and tuning for their workflows.",
      "Coverage strategy: needed reliable after-hours answering first, with a path to expand into daytime coverage.",
      "Growth roadmap: interest in Salesforce appointment booking and AI-powered chat on the website.",
      "Multi-state ops: centralized communications through one HQ without adding manual load on a small team.",
    ],
    solutions: [
      "XBert AI Pro improves after-hours call handling while keeping room to grow into broader coverage.",
      "Roadmap alignment: daytime expansion, Salesforce booking, and web chat as the program matures.",
      "Replacement story: upgraded from a weaker incumbent AI to a more capable, tunable experience.",
      "Early snapshot: ~72 interactions with 72 resolved by AI (100% containment, 0 escalations).",
    ],
    metrics: [
      { stat: "100%", label: "AI containment" },
      { stat: "72", label: "Interactions (early)" },
      { stat: "$287", label: "MRR" },
    ],
    layoutScale: 1.33,
    heroMetaCompact: true,
    heroSymmetricMetaBands: true,
    heroObjectFit: "contain",
    heroObjectPosition: "center center",
  },
];
