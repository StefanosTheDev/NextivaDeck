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

const DECAGON: CompetitorAltData = {
  competitorName: "Decagon",
  competitorLogo: "/logos/competitors/agentic/TR__decagon.png",
  quadrant: "AI Agents",
  textRows: [
    {
      dimension: "Scale & Customer Fit",
      icon: Building2,
      competitor: "~$481M raised at $4.5B; ~100 digital-native logos",
      nextiva: "Scales from SMB to enterprise without replatforming",
    },
    {
      dimension: "Platform & Scope",
      icon: Layers,
      competitor: "AI agent layer only; no telephony or agent desktop",
      nextiva: "System of Action connecting conversations, workflows, outcomes",
    },
    {
      dimension: "Channels",
      icon: Radio,
      competitor: "Chat, email, SMS, Voice 2.0 — rides customer's telephony",
      nextiva: "Voice, messaging, video, chat, social, reviews — unified",
    },
    {
      dimension: "Deployment",
      icon: Rocket,
      competitor: "3–6 week white-glove per AOP; dedicated engineers per deal",
      nextiva: "Self-serve and PLG through hybrid and white-glove enterprise",
    },
  ],
  ratedRows: [
    {
      dimension: "Data",
      icon: Database,
      competitorFill: 2,
      competitor: "AOPs framework; 80% deflection is one-customer case study",
      nextivaFill: 4,
      nextiva: "Unifies unstructured interactions with CRM, ERP, ticketing",
    },
    {
      dimension: "AI",
      icon: Sparkles,
      competitorFill: 3,
      competitor: "AOP Copilot, Voice 2.0, Watchtower; no agent assist layer",
      nextivaFill: 4,
      nextiva: "Agent Assist, Autopilot, and Autonomous AI employees",
    },
    {
      dimension: "Integrations",
      icon: Plug,
      competitorFill: 1,
      competitor: "Direct API only; zero native CRM marketplace listings",
      nextivaFill: 4,
      nextiva: "Open API-first microservices, SDKs, and marketplace",
    },
  ],
  winLine:
    "the buyer needs AI agents on an existing voice + digital platform — not a VC-backed AI startup that needs engineering weeks and a separate contact center stack.",
};

export default function DecagonComparisonAltV2Slide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <CompetitorComparisonAltV2Slide slideNumber={slideNumber} {...DECAGON} />
  );
}
