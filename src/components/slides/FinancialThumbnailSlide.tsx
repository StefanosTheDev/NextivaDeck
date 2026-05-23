"use client";

import type { CSSProperties } from "react";
import SlideFooter from "../SlideFooter";

/* ── Design system (from SlideTargetModelDark) ── */
const C = {
  accentBlue: "#4A9EF2",
  mintGreen: "#34D399",
  pureWhite: "#FFFFFF",
  muted: "rgba(255,255,255,0.45)",
  subtext: "rgba(255,255,255,0.42)",
} as const;

const F = {
  heading: "Georgia, serif",
  body: "'Space Grotesk', 'Work Sans', Arial, sans-serif",
} as const;

type ColKey = "fy26" | "fy27" | "fy30";

type CellData = { value: string; detail: string };

type MetricRow = {
  metric: string;
  fy26: CellData;
  fy27: CellData;
  fy30: CellData;
};

const METRICS: MetricRow[] = [
  {
    metric: "Revenue",
    fy26: { value: "$350M", detail: "Full year recognized" },
    fy27: { value: "$363M", detail: "Stable base, AI mix expanding" },
    fy30: { value: "$454–$472M", detail: "Usage-based expansion driver" },
  },
  {
    metric: "Gross Margin",
    fy26: { value: "71%", detail: "Up ~300bps year-on-year" },
    fy27: { value: "74%", detail: "Expanding with AI mix shift" },
    fy30: { value: "75–79%", detail: "Best-in-class SaaS target" },
  },
  {
    metric: "Adj. EBITDA",
    fy26: { value: "$47M", detail: "13% margin" },
    fy27: { value: "$94M", detail: "26% margin — doubles year-on-year" },
    fy30: { value: "$181–$189M", detail: "38–42% margin at scale" },
  },
  {
    metric: "Exit EBITDA Run Rate",
    fy26: { value: "$72–$75M", detail: "Q4 FY26 annualized" },
    fy27: { value: "$100M", detail: "Q4 FY27 annualized" },
    fy30: { value: "—", detail: "" },
  },
  {
    metric: "Net Revenue Retention",
    fy26: { value: "93%", detail: "FY26 Q3" },
    fy27: { value: "94%", detail: "Expanding via XBert upsell" },
    fy30: { value: "95%+", detail: "AI attach drives expansion" },
  },
];

const BOTTOM_STATS = [
  { value: "92K+", label: "customers · all US · all industries" },
  { value: "86%", label: "in multi-year contracts" },
  { value: "96%", label: "subscription recurring revenue" },
] as const;

const COL_STYLES: Record<
  ColKey,
  { accent: string; valueColor: string; borderTop: string }
> = {
  fy26: {
    accent: C.pureWhite,
    valueColor: C.pureWhite,
    borderTop: "2px solid rgba(255,255,255,0.55)",
  },
  fy27: {
    accent: C.accentBlue,
    valueColor: C.accentBlue,
    borderTop: `2px solid ${C.accentBlue}`,
  },
  fy30: {
    accent: C.mintGreen,
    valueColor: C.mintGreen,
    borderTop: `2px solid ${C.mintGreen}`,
  },
};

const FOOTNOTE =
  "Nextiva fiscal year ends June 30. Forward-looking projections do not include pro forma financing costs or assumptions, potential acquisitions, expected tax payments not covered by NOLs. · Sources: Nextiva internal financials, FY2026 Q4 actuals · Nextiva · Confidential";

function ColumnHeader({
  title,
  subtitle,
  col,
  flex = 1,
}: {
  title: string;
  subtitle: string;
  col: ColKey;
  flex?: number;
}) {
  const style = COL_STYLES[col];
  return (
    <div style={{ flex, paddingTop: 14, borderTop: style.borderTop, textAlign: "right" }}>
      <p
        style={{
          margin: 0,
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: style.accent,
          lineHeight: 1.2,
        }}
      >
        {title}
      </p>
      <p style={{ margin: "4px 0 0", fontSize: 13, color: C.subtext, lineHeight: 1.25 }}>{subtitle}</p>
    </div>
  );
}

function DataCell({ cell, col, flex = 1 }: { cell: CellData; col: ColKey; flex?: number }) {
  const style = COL_STYLES[col];
  return (
    <div style={{ flex, textAlign: "right", padding: "18px 0" }}>
      <p
        style={{
          margin: 0,
          fontSize: 28,
          fontWeight: 700,
          color: style.valueColor,
          lineHeight: 1.1,
          fontFamily: F.body,
        }}
      >
        {cell.value}
      </p>
      {cell.detail ? (
        <p style={{ margin: "6px 0 0", fontSize: 13, color: C.subtext, lineHeight: 1.3 }}>{cell.detail}</p>
      ) : null}
    </div>
  );
}

function StatsBar() {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid rgba(91,160,224,0.4)",
        borderRadius: 10,
        background: "rgba(40,96,178,0.1)",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      {BOTTOM_STATS.map((stat, i) => (
        <div
          key={stat.value}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px 20px",
            borderLeft: i > 0 ? "1px solid rgba(91,160,224,0.35)" : undefined,
            textAlign: "center",
            gap: 4,
          }}
        >
          <span style={{ fontSize: 32, fontWeight: 700, color: C.accentBlue, lineHeight: 1 }}>{stat.value}</span>
          <span style={{ fontSize: 14, color: C.subtext, lineHeight: 1.3 }}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function FinancialThumbnailSlide({
  slideNumber = 1,
  slideId,
}: {
  slideNumber?: number;
  slideId?: string;
}) {
  const slideStyle: CSSProperties = {
    background:
      "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
    display: "flex",
    flexDirection: "column",
    fontFamily: F.body,
    overflow: "hidden",
  };

  const mainPad = "0 72px";

  return (
    <div className="slide" data-slide-id={slideId} style={slideStyle}>
      <header style={{ padding: "28px 72px 0", flexShrink: 0, textAlign: "left" }}>
        <p
          style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#7EB3E8",
            margin: "0 0 8px",
          }}
        >
          FINANCIAL OVERVIEW
        </p>
        <h1
          className="font-heading"
          style={{
            fontFamily: F.heading,
            fontSize: 40,
            fontWeight: 400,
            color: C.pureWhite,
            margin: 0,
            lineHeight: 1.15,
            whiteSpace: "nowrap",
          }}
        >
          Profitable and scaled — with a clear path to compounding growth.
        </h1>
      </header>

      <main
        style={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
          padding: `${mainPad}`,
          gap: 20,
          paddingTop: 20,
          paddingBottom: 8,
        }}
      >
        <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ width: "100%" }}>
            {/* Column headers */}
            <div style={{ display: "flex", gap: 32, paddingBottom: 4 }}>
              <div style={{ flex: 1.35 }} />
              <ColumnHeader title="FY26" subtitle="Full year · ends June 30" col="fy26" />
              <ColumnHeader title="FY27" subtitle="Projected" col="fy27" />
              <ColumnHeader title="FY30 Target" subtitle="Long-term model" col="fy30" />
            </div>

            {/* Metric rows */}
            {METRICS.map((row, i) => (
              <div
                key={row.metric}
                style={{
                  display: "flex",
                  gap: 32,
                  alignItems: "flex-start",
                  borderTop: i === 0 ? "1px solid rgba(255,255,255,0.08)" : undefined,
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    flex: 1.35,
                    padding: "18px 0",
                    fontSize: 20,
                    fontWeight: 400,
                    color: C.pureWhite,
                    lineHeight: 1.25,
                  }}
                >
                  {row.metric}
                </div>
                <DataCell cell={row.fy26} col="fy26" />
                <DataCell cell={row.fy27} col="fy27" />
                <DataCell cell={row.fy30} col="fy30" />
              </div>
            ))}
          </div>
        </div>

        <StatsBar />
      </main>

      <p
        style={{
          fontSize: 11,
          color: "rgba(255,255,255,0.28)",
          margin: 0,
          padding: "0 72px 4px",
          lineHeight: 1.35,
          textAlign: "center",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}
      >
        {FOOTNOTE}
      </p>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
