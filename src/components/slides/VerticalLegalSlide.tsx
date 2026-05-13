"use client";

import VerticalPillarsBoard, {
  type PillarContent,
} from "./_verticalPillarsBoard";

const pillars: PillarContent[] = [
  {
    key: "cx",
    bullets: [
      "Clients expect immediate answers on intake, billing, and case status.",
      "Reception, scheduling, and after-hours coverage are one client journey.",
      "Those workflows belong on one governed platform.",
    ],
    outcome:
      "Intake consolidation onto one platform is the entry point; matter management integration follows.",
  },
  {
    key: "human",
    bullets: [
      "Autonomous handles intake FAQs, appointment scheduling, and status updates.",
      "Autopilot manages triage and escalation with full context.",
      "Copilot surfaces matter and client data for attorneys and staff.",
    ],
    outcome:
      "Automating intake and scheduling frees attorneys for billable work — the most direct ROI argument in legal.",
  },
  {
    key: "commerce",
    bullets: [
      "Every interaction affects retention and referrals.",
      "A missed intake call is a lost matter; a resolved billing dispute builds loyalty.",
      "Faster intake-to-engagement translates directly to firm revenue.",
    ],
    outcome:
      "AI-driven intake recovery and scheduling fill the gap between marketing spend and signed retainers.",
  },
  {
    key: "bespoke",
    bullets: [
      "NEXT Studio, APIs, and practice management integrations tailor client journeys.",
      "Legal AI skills deployable without custom code — intake, conflict checks, billing FAQs.",
      "Platform scales from solo practice to multi-location firm.",
    ],
    outcome:
      "Legal AI skills compress implementation from months to weeks. Partners deliver fast time-to-value.",
  },
  {
    key: "trustworthy",
    bullets: [
      "Attorney-client privilege and confidentiality requirements met by design.",
      "SOC 2, call-recording compliance, and 99.9999% uptime.",
      "Guardrails enforce disclosure and recording rules automatically.",
    ],
    outcome:
      "Compliance is table stakes — but creates meaningful barriers to competitive displacement.",
  },
  {
    key: "reasoning",
    bullets: [
      "Direct integration with practice management and matter data.",
      "AI reasons over case history, client relationships, and billing context.",
      "Grounded in firm workflows and jurisdiction-specific practices.",
    ],
    outcome:
      "Practice management integration deepens the data moat over time — the longer a firm runs on Nextiva, the harder it is to replace.",
  },
];

export default function VerticalLegalSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <VerticalPillarsBoard
      slideNumber={slideNumber}
      eyebrow="Vertical · Legal"
      title="One Agentic CX platform built for legal."
      subtitle="Compliance-aware CX for high-stakes client conversations — from intake to resolution."
      pillars={pillars}
      integrations="Direct integrations · Clio · MyCase · Practice management"
    />
  );
}
