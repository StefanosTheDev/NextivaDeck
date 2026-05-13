"use client";

import CompetitiveTable, {
  type CompetitiveRow,
  type CompetitiveColumn,
} from "./_competitiveTable";

const columns: CompetitiveColumn[] = [
  { name: "Nextiva", highlight: true },
  { name: "Legal-vertical AI players" },
  { name: "RingCentral / 8x8" },
  { name: "Zoom / Webex" },
];

const rows: CompetitiveRow[] = [
  {
    label: "Full UC + CCaaS Platform",
    cells: [
      { verdict: "yes", note: "Native, single platform" },
      { verdict: "no", note: "No UC; CC-only" },
      { verdict: "yes", note: "UC + CC, no legal depth" },
      { verdict: "yes", note: "UC + CC, AI add-on" },
    ],
  },
  {
    label: "Agentic CX / 3-mode AI",
    cells: [
      { verdict: "yes", note: "Embedded across platform" },
      { verdict: "yes", note: "Legal-specific AI only" },
      { verdict: "partial", note: "Limited, not workflow-native" },
      { verdict: "partial", note: "Copilot layer, not CX-native" },
    ],
  },
  {
    label: "Practice Mgmt. Integrations",
    cells: [
      { verdict: "partial", note: "Clio, MyCase — in progress" },
      { verdict: "yes", note: "Deep native integrations" },
      { verdict: "no", note: "None" },
      { verdict: "no", note: "None" },
    ],
  },
  {
    label: "Legal Compliance Posture",
    cells: [
      { verdict: "yes", note: "SOC 2, call-recording guardrails" },
      { verdict: "yes", note: "SOC 2, legal-native" },
      { verdict: "yes", note: "SOC 2, general compliance" },
      { verdict: "yes", note: "SOC 2, general compliance" },
    ],
  },
  {
    label: "Market Coverage",
    cells: [
      { verdict: "yes", note: "SMB → mid-market + enterprise" },
      { verdict: "partial", note: "SMB-focused, no CC" },
      { verdict: "partial", note: "Mostly enterprise" },
      { verdict: "partial", note: "Mostly enterprise" },
    ],
  },
];

export default function VerticalLegalCompetitiveSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <CompetitiveTable
      slideNumber={slideNumber}
      eyebrow="Vertical · Legal — Competitive positioning"
      title="Legal CX is fragmented. Nextiva is the only platform built to close the gap."
      subtitle="Unified UC + CX + AI with practice management integration and legal compliance — suitable for solo practices to multi-site law firms."
      columns={columns}
      rows={rows}
      footnote="Legal CX sits at the intersection of three vendor types — UCaaS scale, legal-vertical depth, and agentic AI. Nextiva is the only player credibly positioned at all three. The market is early — an opportunity to establish market leadership."
    />
  );
}
