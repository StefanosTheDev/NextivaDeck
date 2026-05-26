"use client";

import SlideFooter from "../SlideFooter";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const S = 1.12;
const s = (n: number) => Math.round(n * S);

const MRR_DATA = [
  { month: "Aug-25", mrr: 0.1, label: "$0.1K", projected: false },
  { month: "Sep-25", mrr: 3.4, label: "$3.4K", projected: false },
  { month: "Oct-25", mrr: 46, label: "$46K", projected: false },
  { month: "Nov-25", mrr: 73, label: "$73K", projected: false },
  { month: "Dec-25", mrr: 115, label: "$115K", projected: false },
  { month: "Jan-26", mrr: 154, label: "$154K", projected: false },
  { month: "Feb-26", mrr: 196, label: "$196K", projected: false },
  { month: "Mar-26", mrr: 243, label: "$243K", projected: true },
  { month: "Apr-26", mrr: 246, label: "$246K", projected: true },
];

const BAR_COLOR = "#3D6FA8";
const BAR_COLOR_PROJECTED = "#6BA3D6";

const KPI_CARDS = [
  {
    value: "$2.95M",
    title: "ARR run rate",
    sub: "April 2026",
    accent: "#5BA0E8",
    border: "rgba(91,160,224,0.45)",
    bg: "rgba(40,96,178,0.1)",
  },
  {
    value: "1,801",
    title: "Active accounts",
    sub: "Up from 1 at launch",
    accent: "#5BA0E8",
    border: "rgba(91,160,224,0.45)",
    bg: "rgba(40,96,178,0.1)",
  },
  {
    value: "81%",
    title: "ARPA uplift (VSB tier)",
    sub: "$104 → $189/mo with XBert",
    accent: "#34D399",
    border: "rgba(52,211,153,0.4)",
    bg: "rgba(28,72,48,0.12)",
    leftRule: true,
  },
  {
    value: "2.09%",
    title: "Overall attach rate",
    sub: "91K+ accounts still untapped",
    accent: "#FBBF24",
    border: "rgba(251,191,36,0.35)",
    bg: "rgba(80,60,20,0.12)",
    leftRule: true,
  },
] as const;

const ARPA_ROWS = [
  { tier: "VSB (0–10 lines)", without: "$104", with: "$189", uplift: "+81%" },
  { tier: "SMB (11–50 lines)", without: "$528", with: "$771", uplift: "+46%" },
  { tier: "Mid-Market (51–250)", without: "$2,216", with: "$3,049", uplift: "+38%" },
];

const FOOTNOTE =
  "Sources: XBert actuals, FY2026 Q4 (Apr 2026) · Nextiva · Confidential";

function KpiCard({
  value,
  title,
  sub,
  accent,
  border,
  bg,
  leftRule,
}: (typeof KPI_CARDS)[number]) {
  return (
    <div
      style={{
        border: `1px solid ${border}`,
        borderLeft: leftRule ? `3px solid ${accent}` : `1px solid ${border}`,
        borderRadius: 10,
        background: bg,
        padding: `${s(14)}px ${s(16)}px`,
        flex: "1 1 0",
        minHeight: 0,
        boxSizing: "border-box",
      }}
    >
      <p
        className="font-heading"
        style={{
          fontSize: s(36),
          fontWeight: 700,
          color: accent,
          margin: 0,
          lineHeight: 1,
        }}
      >
        {value}
      </p>
      <p
        style={{
          fontSize: s(14),
          fontWeight: 600,
          color: "rgba(255,255,255,0.88)",
          margin: `${s(6)}px 0 ${s(2)}px`,
          lineHeight: 1.3,
        }}
      >
        {title}
      </p>
      <p style={{ fontSize: s(12), color: "rgba(126,179,232,0.75)", margin: 0, lineHeight: 1.35 }}>{sub}</p>
    </div>
  );
}

export default function XbertTractionProofPointsSlide({
  slideNumber = 1,
  slideId,
}: {
  slideNumber?: number;
  slideId?: string;
}) {
  return (
    <div
      className="slide"
      data-slide-id={slideId}
      style={{
        background:
          "radial-gradient(ellipse 85% 75% at 50% 25%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.75) 50%, #000208 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header style={{ padding: `${s(22)}px 72px 0`, flexShrink: 0 }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: s(13),
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#9BB5CC",
            margin: `0 0 ${s(8)}px`,
          }}
        >
          XBERT · GROWTH SIGNAL
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: s(44),
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.12,
          }}
        >
          XBert AI Launch Traction — $0 to $3M ARR within three quarters.
        </h1>
        <p
          style={{
            fontSize: s(18),
            color: "rgba(126,179,232,0.8)",
            margin: `${s(6)}px 0 0`,
            lineHeight: 1.4,
            fontStyle: "italic",
          }}
        >
          Opportunity to penetrate 91,000+ additional accounts.
        </p>
      </header>

      <main
        style={{
          flex: 1,
          minHeight: 0,
          padding: `${s(10)}px 72px ${s(8)}px`,
          display: "flex",
          flexDirection: "column",
          gap: s(10),
        }}
      >
        <div style={{ flex: "1 1 58%", minHeight: 0, display: "flex", gap: s(14) }}>
          <div
            style={{
              flex: "1 1 68%",
              minWidth: 0,
              border: "1px solid rgba(91,160,224,0.35)",
              borderRadius: 10,
              background: "rgba(255,255,255,0.02)",
              padding: `${s(12)}px ${s(14)}px ${s(8)}px`,
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontSize: s(12),
                color: "rgba(255,255,255,0.45)",
                margin: `0 0 ${s(6)}px`,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Monthly MRR Growth — Aug 2025 to Apr 2026
            </p>
            <div style={{ flex: 1, minHeight: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MRR_DATA} margin={{ top: 28, right: 12, left: 4, bottom: 4 }} barCategoryGap="18%">
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: s(11), fill: "rgba(255,255,255,0.55)", fontFamily: "'Space Grotesk', sans-serif" }}
                    axisLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 260]}
                    ticks={[0, 50, 100, 150, 200, 250]}
                    tick={{ fontSize: s(11), fill: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif" }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v: number) => `$${v}K`}
                  />
                  <Bar dataKey="mrr" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                    <LabelList
                      dataKey="label"
                      position="top"
                      style={{
                        fontSize: s(11),
                        fontWeight: 600,
                        fill: "rgba(255,255,255,0.9)",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    />
                    {MRR_DATA.map((entry, i) => (
                      <Cell key={entry.month} fill={entry.projected ? BAR_COLOR_PROJECTED : BAR_COLOR} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p
              style={{
                fontSize: s(12),
                fontWeight: 600,
                color: "#FBBF24",
                margin: `${s(4)}px 0 0`,
                textAlign: "right",
                paddingRight: s(8),
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              $2.95M ARR
            </p>
          </div>

          <div
            style={{
              flex: "0 0 32%",
              display: "flex",
              flexDirection: "column",
              gap: s(8),
              minWidth: 0,
            }}
          >
            {KPI_CARDS.map((card) => (
              <KpiCard key={card.title} {...card} />
            ))}
          </div>
        </div>

        <div
          style={{
            flexShrink: 0,
            border: "1px solid rgba(91,160,224,0.3)",
            borderRadius: 10,
            overflow: "hidden",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr 1fr 0.7fr",
              gap: s(12),
              padding: `${s(10)}px ${s(16)}px`,
              borderBottom: "1px solid rgba(91,160,224,0.2)",
              fontSize: s(11),
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            <span />
            <span style={{ color: "rgba(255,255,255,0.55)" }}>ARPA: Without XBert</span>
            <span style={{ color: "#34D399" }}>ARPA: With XBert</span>
            <span style={{ color: "#FBBF24", textAlign: "right" }}>Uplift</span>
          </div>
          {ARPA_ROWS.map((row, i) => (
            <div
              key={row.tier}
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 1fr 1fr 0.7fr",
                gap: s(12),
                padding: `${s(9)}px ${s(16)}px`,
                borderTop: i > 0 ? "1px solid rgba(91,160,224,0.15)" : undefined,
                alignItems: "center",
                fontSize: s(13),
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.55)" }}>{row.tier}</span>
              <span style={{ color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{row.without}</span>
              <span style={{ color: "#34D399", fontWeight: 600 }}>{row.with}</span>
              <span style={{ color: "#FBBF24", fontWeight: 700, textAlign: "right" }}>{row.uplift}</span>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: s(10),
            color: "rgba(255,255,255,0.28)",
            margin: 0,
            lineHeight: 1.4,
            textAlign: "center",
            flexShrink: 0,
          }}
        >
          {FOOTNOTE}
        </p>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
