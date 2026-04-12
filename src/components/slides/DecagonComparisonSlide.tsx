"use client";
import { Layers, Database, Globe, Workflow, Building2 } from "lucide-react";
import CompetitorComparisonSlide, {
  type CompetitorComparisonData,
} from "./CompetitorComparisonSlide";

const DECAGON: CompetitorComparisonData = {
  competitorName: "Decagon",
  competitorLogo: "/logos/competitors/agentic/TR__decagon.png",
  quadrant: "AI Agents",
  rows: [
    {
      dimension: "Platform scope",
      icon: Layers,
      competitor: [
        "AI agent layer — chat, email, voice, SMS",
        "No native UCaaS or CCaaS backbone",
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
        "Agent Operating Procedures (AOPs) framework",
        "80%+ deflection rates on trained domains",
        "Bot data separate from human agent systems",
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
        "$4.5B valuation — VC-funded hypergrowth",
        "100+ enterprise customers (Avis, Block, DT)",
        "No embedded comms install base to expand into",
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
        "Spring 2026: added outbound voice + callbacks",
        "Handles refunds, ID verification, escalations",
        "Requires integration budget per deployment",
      ],
      nextiva: [
        "Deep CRM, ITSM, helpdesk integrations native",
        "Unified inbox across AI + human agents",
        "83% of ARR in annual contracts",
      ],
    },
    {
      dimension: "Scale & customer fit",
      icon: Building2,
      competitor: [
        "300+ employees; SF, NYC, London",
        "$481M total raised — not yet profitable",
        "Emerging voice channel, maturing fast",
      ],
      nextiva: [
        "Profitable, diversified revenue base",
        "92K+ accounts, <0.6% concentration",
        "Carrier-class voice infrastructure since day one",
      ],
    },
  ],
  winLine:
    "the buyer needs AI agents on an existing voice + digital platform — not a VC-funded point solution that requires a separate contact center stack and custom integration work.",
};

export default function DecagonComparisonSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return <CompetitorComparisonSlide slideNumber={slideNumber} {...DECAGON} />;
}
