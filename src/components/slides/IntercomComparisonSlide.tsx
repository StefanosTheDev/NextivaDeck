"use client";
import { Layers, Database, Radio, Workflow, Building2 } from "lucide-react";
import CompetitorComparisonSlide, {
  type CompetitorComparisonData,
} from "./CompetitorComparisonSlide";

const INTERCOM: CompetitorComparisonData = {
  competitorName: "Intercom",
  competitorLogo: "/logos/competitors/agentic/BR__intercom.png",
  quadrant: "System of Engagement",
  rows: [
    {
      dimension: "Platform scope",
      icon: Layers,
      competitor: [
        "Messaging + ticketing + Fin AI bot",
        "No native UCaaS or CCaaS",
        "Built for support deflection, not full CX",
      ],
      nextiva: [
        "Voice + digital + AI on one platform",
        "Full CCaaS + UCaaS backbone",
        "Support, sales, and operations unified",
      ],
    },
    {
      dimension: "Data & AI foundation",
      icon: Database,
      competitor: [
        "Fin trained on your help center content only",
        "No cross-customer data moat",
        "$0.99 per resolution — cost scales with volume",
      ],
      nextiva: [
        "10B+ interaction data moat",
        "AI grounded in CRM + live conversation state",
        "Flat-rate AI — no per-resolution surcharge",
      ],
    },
    {
      dimension: "Voice + digital together",
      icon: Radio,
      competitor: [
        "Chat and email only — no native voice",
        "No omnichannel routing engine",
        "No channel switching mid-conversation",
      ],
      nextiva: [
        "One routing engine across all channels",
        "Single customer record, voice through digital",
        "AI agent follows the customer across channels",
      ],
    },
    {
      dimension: "Deployment & integration",
      icon: Workflow,
      competitor: [
        "Fast self-serve for SMB/mid-market",
        "No multi-agent orchestration",
        "Assumed resolutions charge even on abandons",
      ],
      nextiva: [
        "Deep CRM, ITSM, helpdesk integrations",
        "Multi-agent orchestration built in",
        "83% of ARR in annual contracts",
      ],
    },
    {
      dimension: "Scale & customer fit",
      icon: Building2,
      competitor: [
        "Strong in tech/SaaS mid-market",
        "Fin resolution costs balloon at enterprise scale",
        "No contact-center-grade reliability",
      ],
      nextiva: [
        "92K+ mainstream accounts across all industries",
        "<0.6% max customer concentration",
        "Enterprise-grade, carrier-class infrastructure",
      ],
    },
  ],
  winLine:
    "the buyer needs a full CX platform — voice, digital, and AI — not a chat widget with per-resolution billing that stops at the help center.",
};

export default function IntercomComparisonSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return <CompetitorComparisonSlide slideNumber={slideNumber} {...INTERCOM} />;
}
