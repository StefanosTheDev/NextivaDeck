"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import {
  Bar, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, BarChart, Customized,
} from "recharts";

const CHART_DATA = [
  { quarter: "FY25\nQ4", gateways: 7,  outcomes: 0,  embeddedActive: 17, embeddedInactive: 76, projected: false },
  { quarter: "FY26\nQ1", gateways: 9,  outcomes: 0,  embeddedActive: 30, embeddedInactive: 61, projected: false },
  { quarter: "FY26\nQ2", gateways: 10, outcomes: 0,  embeddedActive: 35, embeddedInactive: 55, projected: false },
  { quarter: "FY26\nQ3", gateways: 12, outcomes: 0,  embeddedActive: 45, embeddedInactive: 43, projected: true },
  { quarter: "FY26\nQ4", gateways: 15, outcomes: 0,  embeddedActive: 53, embeddedInactive: 32, projected: true },
  { quarter: "FY27\nQ1", gateways: 17, outcomes: 3,  embeddedActive: 60, embeddedInactive: 20, projected: true },
  { quarter: "FY27\nQ2", gateways: 19, outcomes: 12, embeddedActive: 62, embeddedInactive: 8,  projected: true },
  { quarter: "FY27\nQ3", gateways: 22, outcomes: 21, embeddedActive: 54, embeddedInactive: 4,  projected: true },
  { quarter: "FY27\nQ4", gateways: 25, outcomes: 31, embeddedActive: 42, embeddedInactive: 2,  projected: true },
];

const withActivation = CHART_DATA.map((d) => ({
  ...d,
  activationPct: d.gateways + d.outcomes + d.embeddedActive,
}));

const COLORS = {
  gateways: "#061A37",
  outcomes: "#2860B2",
  embeddedActive: "#C8D3DF",
};

const ProjectionDivider = (props: any) => {
  const { xAxisMap, yAxisMap } = props;
  if (!xAxisMap || !yAxisMap) return null;
  const xAxis = Object.values(xAxisMap)[0] as any;
  const yAxis = Object.values(yAxisMap)[0] as any;
  if (!xAxis || !yAxis) return null;

  const bandWidth = xAxis.bandSize || 0;
  const x2 = xAxis.scale(withActivation[2].quarter) + bandWidth / 2;
  const x3 = xAxis.scale(withActivation[3].quarter) + bandWidth / 2;
  const midX = (x2 + x3) / 2;

  return (
    <g>
      <line
        x1={midX} y1={yAxis.y} x2={midX} y2={yAxis.y + yAxis.height}
        stroke="#CCC7C3" strokeDasharray="6 4" strokeWidth={1.5}
      />
      <text
        x={midX} y={yAxis.y + yAxis.height + 48}
        textAnchor="middle" fontSize={12} fill="#A29E9B"
        fontFamily="'Space Grotesk', sans-serif" fontStyle="italic"
      >
        Projected →
      </text>
    </g>
  );
};

const targetCards = [
  {
    label: "AI Embedded Customer AI Activation Target Range",
    range: ["93%", "98%"],
    badge: "% of Users\nAI Activated",
    desc: "AI is embedded across all surfaces — NEXT IQ, Transcription, GenAI summarization, NextIQ Analytics. Adoption projected to grow nearly 5×.",
    borderColor: "#C8D3DF",
    shadowColor: "rgba(0,0,0,0.06)",
    labelColor: "#A29E9B",
  },
  {
    label: "AI Outcomes Revenue Target Range",
    range: ["29%", "33%"],
    badge: "% of Revenue\nAI Outcomes",
    desc: "Tokenized AI Outcomes and usage-based revenue projected to reach ~30% of revenue. Agentic AI outcomes compound across the platform.",
    borderColor: "#2860B2",
    shadowColor: "rgba(40,96,178,0.1)",
    labelColor: "#2860B2",
  },
  {
    label: "AI Gateways Revenue Target Range",
    range: ["22%", "28%"],
    badge: "% of Revenue\nAI Gateways",
    desc: "XBert AI is the lead edge product for platform-agnostic AI gateway attach. New signup ARPA up 2× with XBert AI in Q2 FY26.",
    borderColor: "#061A37",
    shadowColor: "rgba(15,44,89,0.1)",
    labelColor: "#061A37",
  },
];

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 14, height: 14, borderRadius: 3, background: color, flexShrink: 0 }} />
      <span style={{ fontSize: 13, color: "#6C6967" }}>{label}</span>
    </div>
  );
}

function LegendHatched({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <svg width={14} height={14}>
        <defs>
          <pattern id="legendHatch" patternUnits="userSpaceOnUse" width={6} height={6} patternTransform="rotate(45)">
            <rect width={6} height={6} fill="#E4E9EF" />
            <line x1={0} y1={0} x2={0} y2={6} stroke="#C8D3DF" strokeWidth={2} />
          </pattern>
        </defs>
        <rect width={14} height={14} rx={3} fill="url(#legendHatch)" />
      </svg>
      <span style={{ fontSize: 13, color: "#6C6967" }}>{label}</span>
    </div>
  );
}

export default function AIGatewaysRevenueSlide({ slideNumber = 20 }: { slideNumber?: number }) {
  return (
    <div className="slide slide--cream">
      <div style={{ height: 3, background: "#2860B2", flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p className="eyebrow" style={{ color: "#2860B2" }}>AI Revenue Mix</p>
        <h1 className="font-heading" style={{ fontSize: 56, fontWeight: 700, color: "#1A447C", marginTop: 10, lineHeight: 1.15 }}>
          Projecting roughly 95%+ activation on AI by FY28.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "12px 100px 0", display: "flex", gap: 36 }}
      >
        {/* Chart area — 60% */}
        <div style={{ flex: 60, display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: 20, fontWeight: 700, color: "#1A447C", margin: "12px 0 2px", lineHeight: 1.3 }}>
            24-Month AI Revenue Mix Evolution
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 24px", margin: "6px 0 10px" }}>
            <LegendItem color={COLORS.gateways} label="AI Gateways Revenue" />
            <LegendItem color={COLORS.embeddedActive} label="AI Embedded Revenue (Activated on AI)" />
            <LegendItem color={COLORS.outcomes} label="AI Outcomes Revenue" />
            <LegendHatched label="AI Embedded (Not Utilizing AI)" />
          </div>

          <div style={{ flex: 1 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={withActivation} margin={{ top: 16, right: 16, left: 8, bottom: 16 }} barCategoryGap="14%">
                <defs>
                  <pattern id="hatchEmbedded" patternUnits="userSpaceOnUse" width={8} height={8} patternTransform="rotate(45)">
                    <rect width={8} height={8} fill="#E4E9EF" />
                    <line x1={0} y1={0} x2={0} y2={8} stroke="#C8D3DF" strokeWidth={3} />
                  </pattern>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#E0DEDA" vertical={false} />
                <Customized component={ProjectionDivider} />

                <XAxis
                  dataKey="quarter"
                  tick={({ x, y, payload }: any) => {
                    const lines = (payload.value as string).split("\n");
                    return (
                      <text x={x} y={y + 12} textAnchor="middle" fontSize={12} fill="#4A4846" fontFamily="'Space Grotesk', sans-serif">
                        {lines.map((line: string, i: number) => (
                          <tspan x={x} dy={i === 0 ? 0 : 14} key={i}>{line}</tspan>
                        ))}
                      </text>
                    );
                  }}
                  axisLine={{ stroke: "#E0DEDA" }}
                  tickLine={false}
                  interval={0}
                  height={44}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fontSize: 13, fill: "#A29E9B", fontFamily: "'Space Grotesk', sans-serif" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v: number) => `${v}%`}
                />

                <Bar dataKey="gateways" stackId="a" fill={COLORS.gateways} radius={[0, 0, 0, 0]} isAnimationActive={false} />
                <Bar dataKey="outcomes" stackId="a" fill={COLORS.outcomes} radius={[0, 0, 0, 0]} isAnimationActive={false} />
                <Bar dataKey="embeddedActive" stackId="a" fill={COLORS.embeddedActive} radius={[0, 0, 0, 0]} isAnimationActive={false} />
                <Bar dataKey="embeddedInactive" stackId="a" fill="url(#hatchEmbedded)" radius={[4, 4, 0, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right column — 3 target cards — 40% */}
        <div style={{ flex: 40, display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
          {targetCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              style={{
                background: "#FFFFFF",
                border: `2px solid ${card.borderColor}`,
                borderRadius: 16,
                padding: "20px 28px",
                boxShadow: `0 2px 12px ${card.shadowColor}`,
              }}
            >
              <p style={{
                fontSize: 12, fontWeight: 700, letterSpacing: "0.05em",
                textTransform: "uppercase", color: card.labelColor, margin: 0,
              }}>
                {card.label}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 4 }}>
                <p className="font-heading" style={{
                  fontSize: 40, fontWeight: 700, color: "#1A447C", margin: 0, lineHeight: 1,
                }}>
                  {card.range[0]} <span style={{ fontSize: 32 }}>to</span> {card.range[1]}
                </p>
                <span style={{
                  background: "#2860B2", color: "#FFFFFF",
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.04em",
                  textTransform: "uppercase", padding: "4px 10px",
                  borderRadius: 6, lineHeight: 1.3, whiteSpace: "pre-line",
                }}>
                  {card.badge}
                </span>
              </div>
              <p style={{ fontSize: 14, color: "#4A4846", margin: "8px 0 0", lineHeight: 1.5 }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
