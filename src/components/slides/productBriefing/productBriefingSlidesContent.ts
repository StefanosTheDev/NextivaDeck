/** Source: Nextiva Platform – Product Briefing Jan 2026 (PPTX/PDF). */

export type ProductBriefingSlideSpec = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  pillars?: { title: string; subtitle?: string }[];
  sections?: { heading: string; bullets: string[] }[];
  bullets?: string[];
  metrics?: { label: string; value: string }[];
  /** Dense roadmap / delivery text (scrollable in UI) */
  denseBlocks?: { heading: string; lines: string[] }[];
  variant?: "center" | "nda" | "cxpaas-architecture" | "unified-cxm-platform" | "roadmap-human-ai";
  /** Raster from PDF (see scripts/extract_pdf_page.py) */
  referenceImage?: { src: string; alt: string };
};

export const PRODUCT_BRIEFING_SPECS: ProductBriefingSlideSpec[] = [
  {
    eyebrow: "Product briefing · Jan 2026",
    title: "the NEXT Agentic CX Platform",
    subtitle: "Senthil Velayutham — Chief Product & Technology Officer",
  },
  {
    eyebrow: "North star",
    title: "Nextiva empowers businesses",
    subtitle: "The best possible outcome at the moment of interaction",
    pillars: [
      { title: "Human + AI in tandem" },
      { title: "Conversational commerce" },
      { title: "Trustworthy" },
      { title: "CX-first system of action" },
      { title: "Reasoning over customer & business data" },
      { title: "Bespoke, at scale" },
    ],
  },
  {
    eyebrow: "CX-first system of action",
    title: "Delivering an integrated experience",
    subtitle: "Approachable CX-first experiences for personalized journeys with AI and human agents",
    sections: [
      {
        heading: "Learn & understand intent",
        bullets: ["Unstructured + structured data", "Customer intent across the lifecycle"],
      },
      {
        heading: "Be where customers are",
        bullets: ["All channels · pre / during / post", "Unified canvas for CX + teamwork (native & embedded)"],
      },
      {
        heading: "Governance · automation · workflow",
        bullets: ["Personalized journeys for customers, agents, supervisors, back office"],
      },
      {
        heading: "Outcomes",
        bullets: ["LTV, ROI, NPS, CSAT", "Data + insights in context · reports & analytics"],
      },
    ],
  },
  {
    eyebrow: "Conversational commerce",
    title: "From intent to commercial outcomes",
    bullets: [
      "Conversations start with intent: learn, search, or resolve — with personalized journeys.",
      "Human + AI agentic flows, initiated by customer or business.",
      "Research, collaboration & solutioning in the channel and time of their choice (sync/async).",
      "Reduce friction to engage and transact → engagement, retention, upsell, and transactions.",
    ],
  },
  {
    eyebrow: "Human + AI",
    title: "Powered in tandem",
    subtitle: "Balance maturity, business risk–reward, preferences, and intent",
    pillars: [
      { title: "Copilot", subtitle: "AI assists; humans lead" },
      { title: "Autopilot", subtitle: "AI drives; humans oversee" },
      { title: "Autonomous", subtitle: "End-to-end where appropriate" },
    ],
  },
  {
    eyebrow: "Model-agnostic platform",
    title: "Best-of-breed AI without lock-in",
    bullets: [
      "Curated blend: Nextiva IP, open-source, open-weight, and hyperscaler models.",
      "Swap models without breaking workflows or compliance posture.",
      "Customer data partitioning + governance; outcomes over model novelty.",
      "Examples: agent assist & RAG, DLP, transcription, chat/voice bots, summarization & sentiment — Gemini, Azure OpenAI, Llama, Deepgram, and more.",
    ],
  },
  {
    variant: "center",
    eyebrow: "Architecture",
    title: "Platform architecture",
  },
  {
    eyebrow: "Data & intelligence",
    title: "Reasoning across customer & business data",
    sections: [
      {
        heading: "Coherent view",
        bullets: ["Critical for every interaction", "Role-based access & business confidentiality"],
      },
      {
        heading: "Sources",
        bullets: [
          "CRM, ITSM, ERP, CDP, portals, Nextiva Pixel / Connect, enrichments (e.g. Experian, ZoomInfo)",
          "Product catalog, KMS, web, geolocation, public records, data lakes & best practices",
        ],
      },
      {
        heading: "Nextiva data & intelligence",
        bullets: ["Open data platform with customer key", "Recommendation & ranking (NBA, NBR, relevant articles, tickets for you)"],
      },
    ],
  },
  {
    eyebrow: "CXPaaS",
    title: "Nextiva CXPaaS Architecture",
    variant: "cxpaas-architecture",
  },
  {
    eyebrow: "Trustworthy",
    title: "Enterprise-grade reliability & compliance",
    metrics: [
      { label: "Platform uptime", value: "99.9999%" },
      { label: "Maintenance windows", value: "Zero" },
      { label: "DR / recovery", value: "< 2 min · regional DR" },
      { label: "Certifications", value: "HITRUST · PCI · GDPR · TCPA · DNC · HIPAA" },
    ],
  },
  {
    eyebrow: "Global offering",
    title: "Nextiva global footprint",
    subtitle: "Cloud in-region · edge · on-prem where required",
    bullets: [
      "Nodes & edge: Montreal, Madrid, Tokyo, São Paulo, London, Ashburn, The Dalles, Council Bluffs, Moncks Corner, and more.",
      "Local agents, carriers, and redundant connectivity.",
    ],
  },
  {
    eyebrow: "Reference",
    title: "Architecture visuals",
    subtitle: "Diagrams and maps in the source Product Briefing PDF/PPTX.",
  },
  {
    eyebrow: "Scale & extensibility",
    title: "Built to be bespoke, at scale",
    sections: [
      {
        heading: "Partners & platform",
        bullets: ["Multi-tenant management · onboarding · migration · sandboxes · marketplaces · regional clouds · data localization · edge & on-prem containers"],
      },
      {
        heading: "Verticals & developers",
        bullets: ["Healthcare & FinServ at launch; eCommerce, retail, education, government to follow", "Developer platform: widgets, cards, programmable + AI workflows, APIs (REST, GraphQL), CX Studio"],
      },
      {
        heading: "Configure & customize",
        bullets: ["Extend · DIY / white-label · network BYOC"],
      },
    ],
  },
  {
    variant: "nda",
    eyebrow: "Appendix",
    title: "Nextiva UCXM — Healthcare",
    subtitle: "Proprietary & highly confidential — covered by NDA",
  },
  {
    variant: "nda",
    eyebrow: "Appendix",
    title: "Nextiva UCXM — Fintech",
    subtitle: "Proprietary & highly confidential — covered by NDA",
  },
  {
    eyebrow: "Themes",
    title: "Nextiva empowers businesses",
    subtitle: "Reprise — best outcome at the moment of interaction",
    pillars: [
      { title: "Human + AI in tandem" },
      { title: "Conversational commerce" },
      { title: "Trustworthy" },
      { title: "CX-first system of action" },
      { title: "Reasoning over data" },
      { title: "Bespoke, at scale" },
    ],
  },
  {
    variant: "nda",
    eyebrow: "Demo",
    title: "Platform demo",
    subtitle: "Proprietary & highly confidential — covered by NDA",
  },
  {
    variant: "nda",
    eyebrow: "Planning",
    title: "Roadmap",
    subtitle: "Proprietary & highly confidential — covered by NDA",
  },
  {
    variant: "unified-cxm-platform",
    eyebrow: "Unified CXM",
    title: "The Nextiva Unified-CXM platform (Q4 CY24)",
    subtitle:
      "Empower businesses to transform every customer interaction for the best possible outcome. Productive Relationships, for life.",
  },
  {
    variant: "roadmap-human-ai",
    eyebrow: "Human + AI roadmap",
    title: "the NEXT Agentic CX platform",
    subtitle: "1Q / 2Q / 2H+ 2026 themes",
  },
  {
    eyebrow: "Phased delivery",
    title: "Jan ’26 · Feb ’26 · Mar ’26",
    subtitle: "Omni-channel, AI, NEXT Studio",
    referenceImage: {
      src: "/product-briefing/phased-delivery-jan-feb-mar.png",
      alt:
        "Phased product delivery: January and February delivered capabilities, March plan — omni-channel CX, AI, NEXT Studio — PDF page 18.",
    },
  },
  {
    eyebrow: "Phased delivery",
    title: "Apr — Jun ’26",
    subtitle: "Omni-channel, devices, campaigns, AI",
    referenceImage: {
      src: "/product-briefing/phased-delivery-apr-jun-omni.png",
      alt:
        "Phased delivery April through June: omni-channel CX, voice and devices, SMS, campaigns, AI employees, admin — PDF page 19.",
    },
  },
  {
    eyebrow: "NEXT Studio",
    title: "Studio, billing & roadmap",
    subtitle: "Apr — Jun ’26",
    referenceImage: {
      src: "/product-briefing/phased-delivery-next-studio-billing.png",
      alt:
        "NEXT Studio queue management, workflow builder, surveys, billing, flow builders, BigQuery usage — PDF page 20.",
    },
  },
  {
    eyebrow: "Confidential",
    title: "Product briefing materials",
    subtitle: "Proprietary & highly confidential — covered by NDA",
    referenceImage: {
      src: "/product-briefing/confidential-nda-divider.png",
      alt: "Confidentiality notice from Product Briefing — PDF page 21.",
    },
  },
  {
    eyebrow: "Strategic framing",
    title: "Why AI does not reduce the value of Nextiva",
    subtitle: "Models, orchestration, context, trust",
    referenceImage: {
      src: "/product-briefing/why-ai-nextiva-value.png",
      alt:
        "Four pillars: models generate content but do not own the relationship; work must be orchestrated; context creates relevance; outcomes require trust — PDF page 22.",
    },
  },
];
