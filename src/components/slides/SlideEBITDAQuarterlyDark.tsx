"use client";
import React from "react";
import SlideFooter from "../SlideFooter";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  Customized,
  type LabelProps,
} from "recharts";

/* ── Color constants ── */
const C = {
  midnightNavy: "#061A37",
  deepNavy: "#0F2C59",
  brandBlue: "#2860B2",
  accent: "#4A9EF2",
  pureWhite: "#FFFFFF",
  negBarColor: "#6B6B6B",
} as const;

/* ── Font constants ── */
const F = {
  heading: "Georgia, serif",
  body: "'Space Grotesk', 'Work Sans', Arial, sans-serif",
} as const;

/* ── Quarterly data ── */
const FORECAST_START = 6;

const quarters = [
  "Q1'25", "Q2'25", "Q3'25", "Q4'25",
  "Q1'26", "Q2'26", "Q3'26", "Q4'26",
  "Q1'27", "Q2'27", "Q3'27", "Q4'27",
];
const ebitdaValues = [1, -1, 1, 0, 4, 10, 11, 19, 22, 25, 25, 26];

const data = quarters.map((name, i) => ({
  name,
  ebitda: ebitdaValues[i],
  isForecast: i >= FORECAST_START,
  fyLabel: name.startsWith("Q2") ? `FY${name.split("'")[1]}` : "",
}));

/* ── Custom bar shape with minimum height for near-zero values ── */
function ForecastBarShape(props: Record<string, unknown>) {
  const { x, y, width, height, payload } = props as {
    x: number;
    y: number;
    width: number;
    height: number;
    payload: { isForecast: boolean; ebitda: number };
  };

  const isNegative = payload.ebitda < 0;
  const barColor = isNegative ? C.negBarColor : C.brandBlue;
  const renderHeight = Math.max(Math.abs(height), 12);

  let renderY: number;
  if (isNegative) {
    renderY = y;
  } else {
    renderY = y + (Math.abs(height) - renderHeight);
  }

  if (payload.isForecast) {
    return (
      <rect
        x={x}
        y={renderY}
        width={width}
        height={renderHeight}
        rx={6}
        ry={6}
        fill={barColor}
        fillOpacity={0.35}
        stroke={barColor}
        strokeWidth={1.5}
        strokeDasharray="6 3"
      />
    );
  }
  return (
    <rect
      x={x}
      y={renderY}
      width={width}
      height={renderHeight}
      rx={6}
      ry={6}
      fill={barColor}
    />
  );
}

/* ── Custom label renderer ── */
function renderCustomLabel(props: LabelProps) {
  const { x, y, width, height, value: raw } = props;
  const value = typeof raw === "number" ? raw : Number(raw);
  const isNeg = value < 0;
  const labelY = isNeg ? Number(y) + Math.abs(Number(height)) + 18 : Number(y) - 8;
  const text = isNeg ? `-$${Math.abs(value)}M` : `$${value}M`;
  return (
    <text
      x={Number(x) + Number(width) / 2}
      y={labelY}
      textAnchor="middle"
      fill={isNeg ? C.negBarColor : C.pureWhite}
      fontSize={16}
      fontWeight={700}
      fontFamily={F.body}
    >
      {text}
    </text>
  );
}

/* ── Forecast divider ── */
function ForecastDivider(props: Record<string, unknown>) {
  const { xAxisMap, offset } = props as {
    xAxisMap: Record<string, { scale: (v: number) => number; bandSize?: number }>;
    offset: { top: number };
  };
  const xAxis = xAxisMap?.[0];
  if (!xAxis?.scale) return null;

  const bandSize = xAxis.bandSize ?? 0;
  const x5 = xAxis.scale(5) + bandSize / 2;
  const x6 = xAxis.scale(6) - bandSize / 2;
  const lineX = (x5 + x6) / 2;
  const top = offset?.top ?? 40;
  const bottom = 460;

  return (
    <g>
      <line
        x1={lineX}
        y1={top}
        x2={lineX}
        y2={bottom}
        stroke="rgba(255,255,255,0.35)"
        strokeWidth={1.5}
        strokeDasharray="6 4"
      />
      <text
        x={lineX + 8}
        y={top + 16}
        fill="rgba(255,255,255,0.4)"
        fontSize={14}
        fontFamily={F.body}
        fontWeight={600}
      >
        Forecast →
      </text>
    </g>
  );
}

/* ── Metric cards ── */
const cards = [
  {
    label: "ADJ EBITDA (FY27)",
    value: "$98M",
    detail: "Up from breakeven in FY25",
    highlighted: false,
  },
  {
    label: "FY26 EXIT EBITDA RUN RATE",
    value: "$75–$80M",
    detail: "Range reflects items still to be actioned",
    highlighted: true,
  },
  {
    label: "TARGET EBITDA (FY27 Q4 ANNUALIZED)",
    value: "$104M",
    detail: "28% Adjusted EBITDA margin",
    highlighted: false,
  },
];

/* ── Slide component ── */
export default function SlideEBITDAQuarterlyDark({
  slideNumber = 23,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        display: "flex",
        flexDirection: "column",
        fontFamily: F.body,
        overflow: "hidden",
      }}
      data-speaker-notes="Adj. EBITDA ramps from breakeven in FY25 to 28% margin by FY27 Q4. FY27 Q4 annualized = $104M at 28% margin. FY26 exit run rate of $75–$80M provides near-term underwriting comfort."
    >
      {/* ── Header ── */}
      <header style={{ padding: "40px 100px 0", textAlign: "center", flexShrink: 0 }}>
        <p
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 8px",
            fontFamily: F.body,
          }}
        >
          PROFITABILITY
        </p>
        <h1
          style={{
            fontFamily: F.heading,
            fontSize: 58,
            fontWeight: 400,
            color: C.pureWhite,
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Adj. EBITDA ramps from breakeven to 28%.
        </h1>
        <p
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.7)",
            margin: "10px 0 0",
            lineHeight: 1.5,
            fontFamily: F.body,
            whiteSpace: "nowrap",
          }}
        >
          Q4&apos;27 exit rate of 28% margin demonstrates the trajectory.
        </p>
      </header>

      {/* ── Main content ── */}
      <div
        style={{
          display: "flex",
          gap: 48,
          padding: "24px 100px 0",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Left: Chart */}
        <div style={{ flex: 55, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart
              data={data}
              margin={{ top: 32, right: 24, bottom: 8, left: 8 }}
            >
              <CartesianGrid
                horizontal
                vertical={false}
                stroke="rgba(255,255,255,0.08)"
                strokeDasharray="4 4"
              />

              <XAxis
                dataKey="name"
                tickFormatter={(v: string) => v.split("'")[0]}
                tick={{ fontSize: 16, fill: "rgba(255,255,255,0.4)", fontFamily: F.body }}
                axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                tickLine={false}
              />

              <XAxis
                xAxisId="fy"
                dataKey="fyLabel"
                tick={{
                  fontSize: 20,
                  fill: C.pureWhite,
                  fontWeight: 700,
                  fontFamily: F.body,
                }}
                axisLine={false}
                tickLine={false}
                height={28}
              />

              <YAxis
                domain={[-5, 30]}
                ticks={[-5, 0, 5, 10, 15, 20, 25, 30]}
                tickFormatter={(v: number) => `$${v}M`}
                tick={{ fontSize: 18, fill: "rgba(255,255,255,0.4)", fontFamily: F.body }}
                axisLine={false}
                tickLine={false}
                width={70}
              />

              <Customized component={ForecastDivider} />

              <Bar
                dataKey="ebitda"
                shape={<ForecastBarShape />}
                maxBarSize={60}
              >
                <LabelList
                  dataKey="ebitda"
                  content={renderCustomLabel}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Right: Metric cards */}
        <div
          style={{
            flex: 45,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingTop: 24,
            gap: 16,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.label}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: card.highlighted
                  ? `2px solid ${C.accent}`
                  : "1px solid rgba(255,255,255,0.10)",
                borderRadius: 12,
                padding: "18px 28px",
                textAlign: "center",
                boxShadow: card.highlighted
                  ? "0 4px 16px rgba(74,158,242,0.15)"
                  : "none",
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: C.pureWhite,
                  margin: "0 0 8px",
                  fontFamily: F.body,
                }}
              >
                {card.label}
              </p>
              <p
                style={{
                  fontFamily: F.heading,
                  fontSize: 42,
                  fontWeight: 700,
                  color: C.pureWhite,
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                {card.value}
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.5)",
                  margin: "8px 0 0",
                  fontFamily: F.body,
                }}
              >
                {card.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footnote ── */}
      <p
        style={{
          fontSize: 14,
          color: "rgba(255,255,255,0.35)",
          fontFamily: F.body,
          padding: "0 80px 6px",
          margin: 0,
          flexShrink: 0,
        }}
      >
        Nextiva fiscal year ends June 30. Forward looking projections do not include pro forma
        financing costs or assumptions, potential acquisitions, expected tax payments not covered
        by NOLs.
      </p>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
