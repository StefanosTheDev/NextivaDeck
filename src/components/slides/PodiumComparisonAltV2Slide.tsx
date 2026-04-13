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

const PODIUM: CompetitorAltData = {
  competitorName: "Podium",
  competitorLogo: "/logos/competitors/agentic/BR__podium.png",
  quadrant: "System of Engagement",
  textRows: [
    {
      dimension: "Scale & Customer Fit",
      icon: Building2,
      competitor: "~6,500 SMB accounts; 84% under 50 employees",
      nextiva: "Scales from SMB to enterprise without replatforming",
    },
    {
      dimension: "Platform & Scope",
      icon: Layers,
      competitor: "Lead-conversion point tool: messaging, reviews, payments",
      nextiva: "System of Action connecting conversations, workflows, outcomes",
    },
    {
      dimension: "Channels",
      icon: Radio,
      competitor: "Text-first; Podium Phones added as VoIP bolt-on",
      nextiva: "Voice, messaging, video, chat, social, reviews — unified",
    },
    {
      dimension: "Deployment",
      icon: Rocket,
      competitor: "SMB self-serve only; no enterprise deployment motion",
      nextiva: "Self-serve and PLG through hybrid and white-glove enterprise",
    },
  ],
  ratedRows: [
    {
      dimension: "Data",
      icon: Database,
      competitorFill: 1,
      competitor: "Per-merchant AI tuning; no cross-enterprise data layer",
      nextivaFill: 4,
      nextiva: "Unifies unstructured interactions with CRM, ERP, ticketing",
    },
    {
      dimension: "AI",
      icon: Sparkles,
      competitorFill: 2,
      competitor: "AI Employee suite built on third-party GPT models",
      nextivaFill: 4,
      nextiva: "Agent Assist, Autopilot, and Autonomous AI employees",
    },
    {
      dimension: "Integrations",
      icon: Plug,
      competitorFill: 2,
      competitor: "~180 app marketplace; shallow system-of-record depth",
      nextivaFill: 4,
      nextiva: "Open API-first microservices, SDKs, and marketplace",
    },
  ],
  winLine:
    "the buyer needs voice, digital, and AI agents on one enterprise platform — not a text-first point tool built for a 10-seat local storefront.",
};

export default function PodiumComparisonAltV2Slide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return <CompetitorComparisonAltV2Slide slideNumber={slideNumber} {...PODIUM} />;
}
