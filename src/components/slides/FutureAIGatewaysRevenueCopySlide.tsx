"use client";

import { motion } from "framer-motion";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Customized,
} from "recharts";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";
const GROWTH = "#1E7E5E";
const GRID = "rgba(6,26,55,0.08)";
const TICK = "rgba(6,26,55,0.55)";

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
  gateways: "#2860B2",
  outcomes: "#1A447C",
  embeddedActive: "#7EB3E8",
};

const ProjectionDivider = (props: Record<string, unknown>) => {
  const { xAxisMap, yAxisMap } = props as Record<string, unknown>;
  if (!xAxisMap || !yAxisMap) return null;
  const xAxis = Object.values(xAxisMap as Record<string, unknown>)[0] as {
    scale: (v: string) => number;
    bandSize?: number;
  } | undefined;
  const yAxis = Object.values(yAxisMap as Record<string, unknown>)[0] as {
    y: number;
    height: number;
  } | undefined;
  if (!xAxis || !yAxis) return null;

  const bandWidth = xAxis.bandSize || 0;
  const x2 = xAxis.scale(withActivation[2].quarter) + bandWidth / 2;
  const x3 = xAxis.scale(withActivation[3].quarter) + bandWidth / 2;
  const midX = (x2 + x3) / 2;

  return (
    <g>
      <line
        x1={midX}
        y1={yAxis.y}
        x2={midX}
        y2={yAxis.y + yAxis.height}
        stroke="rgba(6,26,55,0.3)"
        strokeDasharray="6 4"
        strokeWidth={1.5}
      />
      <text
        x={midX}
        y={yAxis.y + yAxis.height + 48}
        textAnchor="middle"
        fontSize={12}
        fill={MUTED}
        fontFamily="'Space Grotesk', sans-serif"
        fontStyle="italic"
      >
        Projected →
      </text>
    </g>
  );
};

const targetCards = [
  {
    label: "AI Embedded Customer Activation",
    range: ["93%", "98%"],
    badge: "% of Users\nAI Activated",
    desc: "AI is embedded across all surfaces — NEXT IQ, Transcription, GenAI summarization, NextIQ Analytics. Adoption projected to grow nearly 5×.",
  },
  {
    label: "AI Outcomes Revenue Target",
    range: ["29%", "33%"],
    badge: "% of Revenue\nAI Outcomes",
    desc: "Tokenized AI outcomes and usage-based revenue projected to reach ~30% of revenue. Agentic AI outcomes compound across the platform.",
  },
  {
    label: "AI Gateways Revenue Target",
    range: ["22%", "28%"],
    badge: "% of Revenue\nAI Gateways",
    desc: "XBert AI is the lead-edge product for platform-agnostic AI gateway attach. New signup ARPA up 2× with XBert AI in Q2 FY26.",
  },
];

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 14, height: 14, borderRadius: 3, background: color, flexShrink: 0 }} />
      <span style={{ fontSize: 13, fontWeight: 500, color: BODY }}>{label}</span>
    </div>
  );
}

function LegendHatched({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <svg width={14} height={14}>
        <defs>
          <pattern
            id="legendHatchLight"
            patternUnits="userSpaceOnUse"
            width={6}
            height={6}
            patternTransform="rotate(45)"
          >
            <rect width={6} height={6} fill="rgba(6,26,55,0.08)" />
            <line x1={0} y1={0} x2={0} y2={6} stroke="rgba(6,26,55,0.45)" strokeWidth={2} />
          </pattern>
        </defs>
        <rect width={14} height={14} rx={3} fill="url(#legendHatchLight)" />
      </svg>
      <span style={{ fontSize: 13, fontWeight: 500, color: BODY }}>{label}</span>
    </div>
  );
}

export default function FutureAIGatewaysRevenueCopySlide({
  slideNumber: _sn,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{ background: "#FFFFFF", color: NAVY_DARK, justifyContent: "space-between" }}
    >
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "36px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: BLUE,
            margin: 0,
          }}
        >
          AI Revenue Mix
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 52, fontWeight: 700, color: NAVY, marginTop: 10, lineHeight: 1.12 }}
        >
          Projecting roughly 90%+ activation on AI by FY28.
        </h1>
        <div
          style={{
            width: 88,
            height: 4,
            background: BLUE,
            margin: "14px auto 0",
            borderRadius: 2,
          }}
        />
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "16px 100px 0", display: "flex", gap: 40 }}
      >
        <div style={{ flex: 55, display: "flex", flexDirection: "column" }}>
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: NAVY_DARK,
              margin: "10px 0 6px",
              lineHeight: 1.3,
            }}
          >
            24-month AI revenue mix evolution
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4px 24px",
              margin: "6px 0 10px",
            }}
          >
            <LegendItem color={COLORS.gateways} label="AI Gateways Revenue" />
            <LegendItem color={COLORS.embeddedActive} label="AI Embedded (Activated on AI)" />
            <LegendItem color={COLORS.outcomes} label="AI Outcomes Revenue" />
            <LegendHatched label="AI Embedded (Not Utilizing AI)" />
          </div>

          <div style={{ flex: 1 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={withActivation}
                margin={{ top: 16, right: 16, left: 8, bottom: 16 }}
                barCategoryGap="14%"
              >
                <defs>
                  <pattern
                    id="hatchEmbeddedLight"
                    patternUnits="userSpaceOnUse"
                    width={8}
                    height={8}
                    patternTransform="rotate(45)"
                  >
                    <rect width={8} height={8} fill="rgba(6,26,55,0.06)" />
                    <line x1={0} y1={0} x2={0} y2={8} stroke="rgba(6,26,55,0.4)" strokeWidth={3} />
                  </pattern>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke={GRID} vertical={false} />
                <Customized component={ProjectionDivider} />

                <XAxis
                  dataKey="quarter"
                  tick={(props: Record<string, unknown>) => {
                    const { x, y, payload } = props as {
                      x: number;
                      y: number;
                      payload: { value: string };
                    };
                    const lines = payload.value.split("\n");
                    return (
                      <text
                        x={x}
                        y={y + 12}
                        textAnchor="middle"
                        fontSize={12}
                        fill={TICK}
                        fontFamily="'Space Grotesk', sans-serif"
                      >
                        {lines.map((line: string, i: number) => (
                          <tspan x={x} dy={i === 0 ? 0 : 14} key={i}>
                            {line}
                          </tspan>
                        ))}
                      </text>
                    );
                  }}
                  axisLine={{ stroke: "rgba(6,26,55,0.12)" }}
                  tickLine={false}
                  interval={0}
                  height={44}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fontSize: 12, fill: TICK, fontFamily: "'Space Grotesk', sans-serif" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v: number) => `${v}%`}
                />

                <Bar dataKey="gateways" stackId="a" fill={COLORS.gateways} radius={[0, 0, 0, 0]} isAnimationActive={false} />
                <Bar dataKey="outcomes" stackId="a" fill={COLORS.outcomes} radius={[0, 0, 0, 0]} isAnimationActive={false} />
                <Bar dataKey="embeddedActive" stackId="a" fill={COLORS.embeddedActive} radius={[0, 0, 0, 0]} isAnimationActive={false} />
                <Bar dataKey="embeddedInactive" stackId="a" fill="url(#hatchEmbeddedLight)" radius={[4, 4, 0, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ flex: 45, display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
          {targetCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderLeft: `3px solid ${BLUE}`,
                borderRadius: 10,
                padding: "16px 24px",
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: BLUE,
                  margin: 0,
                }}
              >
                {card.label}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 10 }}>
                <p
                  className="font-heading"
                  style={{ fontSize: 30, fontWeight: 700, color: NAVY, margin: 0, lineHeight: 1 }}
                >
                  {card.range[0]} <span style={{ fontSize: 22, fontWeight: 500, color: MUTED }}>to</span> {card.range[1]}
                </p>
                <span
                  style={{
                    background: BLUE_SOFT,
                    color: BLUE,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: 6,
                    lineHeight: 1.3,
                    whiteSpace: "pre-line",
                    border: `1px solid ${BLUE}`,
                  }}
                >
                  {card.badge}
                </span>
              </div>
              <p style={{ fontSize: 14, color: BODY, margin: "10px 0 0", lineHeight: 1.3 }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.main>

      <p
        style={{
          fontSize: 12,
          color: MUTED,
          fontFamily: "'Space Grotesk', sans-serif",
          padding: "0 100px 4px",
          margin: 0,
          flexShrink: 0,
          fontStyle: "italic",
        }}
      >
        FY26 is pro forma for efficiency actions taken at the end of Q3, applied retroactively to the beginning of the quarter.
      </p>

      <footer
        style={{
          padding: "4px 100px 18px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        AI Revenue Mix · Activation 17% → 62% · Gateways → 22–28% of revenue
      </footer>
    </div>
  );
}
