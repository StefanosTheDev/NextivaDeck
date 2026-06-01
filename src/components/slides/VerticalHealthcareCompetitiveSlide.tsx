"use client";

import CompetitiveTable, {
  type CompetitiveRow,
  type CompetitiveColumn,
} from "./_competitiveTable";

const columns: CompetitiveColumn[] = [
  { name: "Nextiva", highlight: true },
  { name: "NICE / Genesys" },
  { name: "Zoom / Webex" },
  { name: "AI Point Solutions" },
];

const rows: CompetitiveRow[] = [
  {
    label: "Unified UC + CX + AI",
    cells: [
      { verdict: "yes", note: "Native, single platform" },
      { verdict: "no", note: "No UC; AI added on" },
      { verdict: "yes", note: "Meeting solution, evolving to add UC + AI" },
      { verdict: "no", note: "No phone or CC; dependent on others" },
    ],
  },
  {
    label: "Healthcare Integration",
    cells: [
      { verdict: "yes", note: "Direct EHR + HIPAA-ready, SOC 2" },
      { verdict: "yes", note: "Direct EHR + HIPAA-ready, SOC 2" },
      { verdict: "partial", note: "Not direct; integrations through partners" },
      { verdict: "yes", note: "Direct EHR + HIPAA-ready, SOC 2" },
    ],
  },
  {
    label: "AI Architecture",
    cells: [
      { verdict: "yes", note: "Embedded across entire platform" },
      { verdict: "partial", note: "Embedded in CC only" },
      { verdict: "yes", note: "Horizontal / assistant layer, not workflow-native" },
      { verdict: "yes", note: "Point solution, not platform" },
    ],
  },
  {
    label: "Market Coverage",
    cells: [
      { verdict: "yes", note: "SMB → mid-market + enterprise" },
      { verdict: "no", note: "Enterprise-only" },
      { verdict: "partial", note: "Mostly enterprise, limited SMB" },
      { verdict: "no", note: "AI layer only — not full CX platform" },
    ],
  },
  {
    label: "Deployment",
    cells: [
      { verdict: "yes", note: "Single platform, single provider" },
      { verdict: "partial", note: "Requires external UC" },
      { verdict: "partial", note: "Reliance on partner integrations" },
      { verdict: "partial", note: "Stitched into separate UC + CX infra" },
    ],
  },
];

export default function VerticalHealthcareCompetitiveSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <CompetitiveTable
      slideNumber={slideNumber}
      eyebrow="Vertical · Healthcare — Competitive positioning"
      title="The full-spectrum Healthcare CX platform."
      subtitle="Nextiva uniquely delivers unified UC + CX + AI with direct EHR integration and HIPAA compliance — suitable for solo practices to a 500-site health system."
      columns={columns}
      rows={rows}
      compact
    />
  );
}
