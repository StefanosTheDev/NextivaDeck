"use client";

import VerticalPillarsBoard, {
  type PillarContent,
} from "./_verticalPillarsBoard";

const pillars: PillarContent[] = [
  {
    key: "cx",
    bullets: [
      "Patient access is the core CX issue.",
      "Front desk, scheduling, after-hours, and billing are one journey.",
      "Those workflows should live on one platform.",
    ],
  },
  {
    key: "human",
    bullets: [
      "Autonomous handles scheduling, Rx refills, and FAQs.",
      "Autopilot manages triage with oversight.",
      "Copilot supports agents with EHR context.",
    ],
  },
  {
    key: "commerce",
    bullets: [
      "Every interaction has business impact.",
      "Scheduling = bookings; cancellations = lost revenue.",
      "Billing drives payment; 24/7 access builds loyalty.",
    ],
  },
  {
    key: "bespoke",
    bullets: [
      "NEXT Studio, APIs, and EHR integrations tailor experiences.",
      "Healthcare AI skills add relevance at scale.",
    ],
  },
  {
    key: "trustworthy",
    bullets: [
      "HIPAA, HITRUST, and 99.9999% uptime.",
      "EHR-grounded guardrails and evals support deterministic flows.",
    ],
  },
  {
    key: "reasoning",
    bullets: [
      "Direct EHR-to-Patient Journal integration.",
      "AI reasons on real patient data.",
      "Grounded in provider best practices.",
    ],
  },
];

export default function VerticalHealthcareSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <VerticalPillarsBoard
      slideNumber={slideNumber}
      eyebrow="Vertical · Healthcare"
      title="Where we're going: AI that earns Healthcare's trust."
      subtitle="Nextiva's platform connects the patient journey and makes AI adoption safe, proven, and viable."
      pillars={pillars}
      integrations="Direct integrations · EHR · Practice systems"
    />
  );
}
