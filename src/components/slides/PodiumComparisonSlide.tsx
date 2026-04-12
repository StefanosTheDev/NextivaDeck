"use client";
import { Layers, Database, Radio, Workflow, Building2 } from "lucide-react";
import CompetitorComparisonSlide, {
  type CompetitorComparisonData,
} from "./CompetitorComparisonSlide";

const PODIUM: CompetitorComparisonData = {
  competitorName: "Podium",
  competitorLogo: "/logos/competitors/agentic/BR__podium.png",
  quadrant: "System of Engagement",
  rows: [
    {
      dimension: "Platform scope",
      icon: Layers,
      competitor: [
        "Text-first inbox",
        "No native UCaaS or CCaaS",
        "SMB-shaped feature set",
      ],
      nextiva: [
        "Voice + digital + AI on one platform",
        "Full CCaaS + UCaaS backbone",
        "Enterprise scope, day one",
      ],
    },
    {
      dimension: "Data & AI foundation",
      icon: Database,
      competitor: [
        "Third-party foundation models",
        "Per-merchant training only",
        "No cross-enterprise data moat",
      ],
      nextiva: [
        "10B+ interaction data moat",
        "Grounded in live CRM + ticket state",
        "Trained on mainstream enterprise data",
      ],
    },
    {
      dimension: "Voice + digital together",
      icon: Radio,
      competitor: [
        "Voice is a receptionist bolt-on",
        "No omnichannel routing",
        "Separate record per channel",
      ],
      nextiva: [
        "One routing engine across channels",
        "Single customer record",
        "AI agent follows the conversation",
      ],
    },
    {
      dimension: "Deployment & integration",
      icon: Workflow,
      competitor: [
        "SMB self-serve onboarding",
        "Shallow systems-of-record integration",
        "No CCaaS backbone to plug into",
      ],
      nextiva: [
        "Deep CRM, ITSM, helpdesk integrations",
        "83% of ARR in annual contracts",
        "Embedded in daily operations",
      ],
    },
    {
      dimension: "Scale & customer fit",
      icon: Building2,
      competitor: [
        "~74% of customers are 2–50 employees",
        "Built for local storefronts",
        "Narrow vertical AI playbooks",
      ],
      nextiva: [
        "92K+ mainstream accounts",
        "<0.6% max customer concentration",
        "~1.6% monthly MRR churn",
      ],
    },
  ],
  winLine:
    "the buyer needs voice, digital, and AI agents on one platform — at enterprise scale — not a text-first tool built for a 10-seat local business.",
};

export default function PodiumComparisonSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return <CompetitorComparisonSlide slideNumber={slideNumber} {...PODIUM} />;
}
