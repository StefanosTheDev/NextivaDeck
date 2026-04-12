"use client";
import { Layers, Database, Globe, Workflow, Building2 } from "lucide-react";
import CompetitorComparisonSlide, {
  type CompetitorComparisonData,
} from "./CompetitorComparisonSlide";

const SIERRA: CompetitorComparisonData = {
  competitorName: "Sierra",
  competitorLogo: "/logos/competitors/agentic/TR__sierra.png",
  quadrant: "AI Agents",
  rows: [
    {
      dimension: "Platform scope",
      icon: Layers,
      competitor: [
        "AI agent layer only — no comms backbone",
        "No native UCaaS, CCaaS, or ticketing",
        "Must pair with separate contact center",
      ],
      nextiva: [
        "Voice + digital + AI on one platform",
        "Full CCaaS + UCaaS backbone built in",
        "No third-party contact center required",
      ],
    },
    {
      dimension: "Data & AI foundation",
      icon: Database,
      competitor: [
        "Strong proprietary models (Agent OS 2.0)",
        "Persistent memory across interactions",
        "Bot data siloed from human agent data",
      ],
      nextiva: [
        "10B+ interaction data moat",
        "AI grounded in unified CRM + ticket state",
        "Single data layer — bot and human together",
      ],
    },
    {
      dimension: "Distribution & install base",
      icon: Globe,
      competitor: [
        "~$150M ARR in 8 quarters — impressive ramp",
        "Concentrated in retail/consumer (Sonos, ADT)",
        "No embedded comms install base to upsell into",
      ],
      nextiva: [
        "92K+ accounts already on the platform",
        "Diversified across every US industry",
        "AI agents deploy into existing customer base",
      ],
    },
    {
      dimension: "Deployment & integration",
      icon: Workflow,
      competitor: [
        "Custom Agent SDK integration per customer",
        "No native CRM/helpdesk marketplace apps",
        "No unified inbox — data lives in Sierra only",
      ],
      nextiva: [
        "Deep CRM, ITSM, helpdesk integrations",
        "Unified inbox across AI + human agents",
        "83% of ARR in annual contracts",
      ],
    },
    {
      dimension: "Scale & customer fit",
      icon: Building2,
      competitor: [
        "$4.5B valuation, $635M raised — VC-funded growth",
        "100+ enterprise customers",
        "No channel switching mid-conversation",
      ],
      nextiva: [
        "Profitable, diversified revenue base",
        "92K+ accounts, <0.6% concentration",
        "Seamless channel handoff — voice to digital",
      ],
    },
  ],
  winLine:
    "the buyer needs AI agents embedded in an existing comms platform — not a standalone AI layer that requires a separate contact center, CRM, and integration budget.",
};

export default function SierraComparisonSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return <CompetitorComparisonSlide slideNumber={slideNumber} {...SIERRA} />;
}
