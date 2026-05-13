"use client";

import VerticalPillarsBoard, {
  type PillarContent,
} from "./_verticalPillarsBoard";

const pillars: PillarContent[] = [
  {
    key: "cx",
    bullets: [
      "Policyholders, account holders, and prospects demand immediate answers across every channel.",
      "Claims, account inquiries, and advisor routing are one customer journey.",
      "Compliance requirements make platform consolidation a business necessity, not a preference.",
    ],
    outcome:
      "Consolidation across claim servicing and advisor routing reduces compliance risk and operational overhead simultaneously.",
  },
  {
    key: "human",
    bullets: [
      "Autonomous handles policy FAQs, account status, and claim intake without agent involvement.",
      "Autopilot escalates sensitive or complex matters with full context.",
      "Every human interaction is auditable — reducing liability and satisfying regulatory requirements automatically.",
    ],
    outcome:
      "Auditable AI interactions satisfy regulatory requirements by design — not as an afterthought.",
  },
  {
    key: "commerce",
    bullets: [
      "Every interaction is a retention or attrition moment.",
      "A mishandled claim can lose a policy; resolved issues build multi-product potential.",
      "High potential for measurable revenue impact — humans focus on relationship building.",
    ],
    outcome:
      "Service quality is retention — Nextiva turns every resolved interaction into a defense of AUM or policy value.",
  },
  {
    key: "bespoke",
    bullets: [
      "NEXT Studio, APIs, and integrations with ServiceNow, Salesforce, and core banking systems.",
      "Compliance-aware AI skills adapt flows to regulations, product lines, customer segments.",
      "Disclosure and call-recording rules enforced by guardrails — not human memory.",
    ],
    outcome:
      "Guardrails that enforce rules automatically reduce compliance burden requiring oversight staff.",
  },
  {
    key: "trustworthy",
    bullets: [
      "PII, payment data, and financial data handled to SOC 2 and applicable regulatory standards.",
      "99.9999% uptime ensures availability for time-sensitive financial transactions.",
      "Interaction journals create compliant, complete records for dispute resolution and audit.",
    ],
    outcome:
      "SOC 2 + six-nines meets procurement thresholds in regulated institutions — contractual stickiness.",
  },
  {
    key: "reasoning",
    bullets: [
      "Customer Journal + CRM + policy data create rich context across every relationship.",
      "AI reasons over account history, claims, and advisor relationships.",
      "Grounded responses enhance confidence.",
    ],
    outcome:
      "A context layer that deepens with every integration — making displacement increasingly costly.",
  },
];

export default function VerticalFinancialServicesSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <VerticalPillarsBoard
      slideNumber={slideNumber}
      eyebrow="Vertical · Financial Services"
      title="One Agentic CX platform delivers depth in financial services."
      subtitle="Compliance-grade CX for high-stakes financial conversations."
      pillars={pillars}
      integrations="Direct integrations · ServiceNow · Salesforce · Core banking"
    />
  );
}
