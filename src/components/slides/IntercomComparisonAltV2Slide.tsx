"use client";
import {
  Building2,
  Layers,
  Radio,
  Rocket,
  Database,
  Sparkles,
  Plug,
} from "lucide-react";
import CompetitorComparisonAltV2Slide, {
  type CompetitorAltData,
} from "./CompetitorComparisonAltV2Slide";

const INTERCOM: CompetitorAltData = {
  competitorName: "Intercom",
  competitorLogo: "/logos/competitors/agentic/BR__intercom.png",
  quadrant: "System of Engagement",
  textRows: [
    {
      dimension: "Scale & Customer Fit",
      icon: Building2,
      competitor: "~25K tech/SaaS accounts; ~$343M revenue, SMB-skewed",
      nextiva: "Scales from SMB to enterprise without replatforming",
    },
    {
      dimension: "Platform & Scope",
      icon: Layers,
      competitor: "Support desk + Fin AI agent; not a full CX platform",
      nextiva: "System of Action connecting conversations, workflows, outcomes",
    },
    {
      dimension: "Channels",
      icon: Radio,
      competitor: "Chat, email, SMS; voice is a pay-as-you-go add-on",
      nextiva: "Voice, messaging, video, chat, social, reviews — unified",
    },
    {
      dimension: "Deployment",
      icon: Rocket,
      competitor: "Fast SMB self-serve; mid-market onboarding extends TTV",
      nextiva: "Self-serve and PLG through hybrid and white-glove enterprise",
    },
  ],
  ratedRows: [
    {
      dimension: "Data",
      icon: Database,
      competitorFill: 2,
      competitor: "Help-center RAG per tenant; no pooled cross-customer moat",
      nextivaFill: 4,
      nextiva: "Unifies unstructured interactions with CRM, ERP, ticketing",
    },
    {
      dimension: "AI",
      icon: Sparkles,
      competitorFill: 3,
      competitor: "Fin 3 at $0.99 per resolution; single-product AI layer",
      nextivaFill: 4,
      nextiva: "Agent Assist, Autopilot, and Autonomous AI employees",
    },
    {
      dimension: "Integrations",
      icon: Plug,
      competitorFill: 3,
      competitor: "Strong marketplace; shallow on enterprise systems of record",
      nextivaFill: 4,
      nextiva: "Open API-first microservices, SDKs, and marketplace",
    },
  ],
  winLine:
    "the buyer needs voice, digital, and AI on one platform — not a $0.99-per-resolution chat widget bolted onto a helpdesk.",
};

export default function IntercomComparisonAltV2Slide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <CompetitorComparisonAltV2Slide slideNumber={slideNumber} {...INTERCOM} />
  );
}
