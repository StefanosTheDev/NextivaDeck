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

const SIERRA: CompetitorAltData = {
  competitorName: "Sierra",
  competitorLogo: "/logos/competitors/agentic/TR__sierra.png",
  quadrant: "AI Agents",
  textRows: [
    {
      dimension: "Scale & Customer Fit",
      icon: Building2,
      competitor: "~$100M ARR at $10B valuation; retail/consumer concentration",
      nextiva: "Scales from SMB to enterprise without replatforming",
    },
    {
      dimension: "Platform & Scope",
      icon: Layers,
      competitor: "AI agent layer above your stack; no comms backbone",
      nextiva: "System of Action connecting conversations, workflows, outcomes",
    },
    {
      dimension: "Channels",
      icon: Radio,
      competitor: "Chat-native; voice launched late 2024, still maturing",
      nextiva: "Voice, messaging, video, chat, social, reviews — unified",
    },
    {
      dimension: "Deployment",
      icon: Rocket,
      competitor: "White-glove Agent SDK builds; bring-your-own contact center",
      nextiva: "Self-serve and PLG through hybrid and white-glove enterprise",
    },
  ],
  ratedRows: [
    {
      dimension: "Data",
      icon: Database,
      competitorFill: 2,
      competitor: "Agent OS 2.0 memory; per-tenant, siloed from human agents",
      nextivaFill: 4,
      nextiva: "Unifies unstructured interactions with CRM, ERP, ticketing",
    },
    {
      dimension: "AI",
      icon: Sparkles,
      competitorFill: 3,
      competitor: "Autonomous agents, outcomes-priced; no Agent Assist tier",
      nextivaFill: 4,
      nextiva: "Agent Assist, Autopilot, and Autonomous AI employees",
    },
    {
      dimension: "Integrations",
      icon: Plug,
      competitorFill: 1,
      competitor: "API-first custom builds; no CRM marketplace presence",
      nextivaFill: 4,
      nextiva: "Open API-first microservices, SDKs, and marketplace",
    },
  ],
  winLine:
    "the buyer needs AI agents inside a voice + digital platform they already run — not a $10B AI layer sitting on top of a contact center they still have to buy.",
};

export default function SierraComparisonAltV2Slide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return <CompetitorComparisonAltV2Slide slideNumber={slideNumber} {...SIERRA} />;
}
