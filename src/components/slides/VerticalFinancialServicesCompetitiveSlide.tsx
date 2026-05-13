"use client";

import CompetitiveTable, {
  type CompetitiveRow,
  type CompetitiveColumn,
} from "./_competitiveTable";

const columns: CompetitiveColumn[] = [
  { name: "Nextiva", highlight: true },
  { name: "RingCentral" },
  { name: "NICE" },
  { name: "Genesys" },
  { name: "Talkdesk" },
];

const rows: CompetitiveRow[] = [
  {
    label: "UC Depth",
    cells: [
      { verdict: "yes", note: "Native UCaaS" },
      { verdict: "yes", note: "Strong UC" },
      { verdict: "no", note: "No UC" },
      { verdict: "no", note: "No UC" },
      { verdict: "no", note: "No UC" },
    ],
  },
  {
    label: "CCaaS Depth",
    cells: [
      { verdict: "yes", note: "Native CCaaS" },
      { verdict: "partial", note: "Partial, growing" },
      { verdict: "yes", note: "Enterprise CCaaS" },
      { verdict: "yes", note: "Enterprise CCaaS" },
      { verdict: "yes", note: "FS-focused CCaaS" },
    ],
  },
  {
    label: "AI-Native CX",
    cells: [
      { verdict: "yes", note: "Embedded platform-wide" },
      { verdict: "partial", note: "Partial, not CX-native" },
      { verdict: "yes", note: "CX-embedded" },
      { verdict: "yes", note: "CX-embedded" },
      { verdict: "yes", note: "CX-embedded" },
    ],
  },
  {
    label: "Financial Services GTM",
    cells: [
      { verdict: "yes", note: "Named vertical motion" },
      { verdict: "partial", note: "Partial vertical focus" },
      { verdict: "partial", note: "Partial, enterprise-led" },
      { verdict: "partial", note: "Partial, enterprise-led" },
      { verdict: "yes", note: "Named FS motion" },
    ],
  },
  {
    label: "SMB → MM Coverage",
    cells: [
      { verdict: "yes", note: "Full spectrum" },
      { verdict: "no", note: "Enterprise-skewed" },
      { verdict: "no", note: "Enterprise-only" },
      { verdict: "no", note: "Enterprise-only" },
      { verdict: "partial", note: "Mid-market focus" },
    ],
  },
  {
    label: "FS-Specific AI Guardrails",
    cells: [
      { verdict: "partial", note: "In active build" },
      { verdict: "partial", note: "General compliance only" },
      { verdict: "yes", note: "MiFID II, Dodd-Frank native" },
      { verdict: "partial", note: "Strong general, no FS AI layer" },
      { verdict: "yes", note: "Purpose-built FS AI agents" },
    ],
  },
];

export default function VerticalFinancialServicesCompetitiveSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <CompetitiveTable
      slideNumber={slideNumber}
      eyebrow="Vertical · Financial Services — Competitive positioning"
      title="Financial Services CX is contested. Nextiva is the only platform that spans the full stack."
      subtitle="Unified UC + CCaaS + AI with financial-grade compliance — from SMB advisory firms to multi-site financial institutions."
      columns={columns}
      rows={rows}
      footnote="Financial Services CX sits at the intersection of UC depth, CCaaS scale, and AI-native workflows. Nextiva enters with UC, SMB-to-MM pricing, and an 8,500+ account base already in market. FS-specific AI guardrails are the priority build — the compliance infrastructure and platform foundation are already in place."
    />
  );
}
