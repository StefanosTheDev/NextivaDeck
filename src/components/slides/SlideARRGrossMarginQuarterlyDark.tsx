"use client";
import React from "react";
import SlideFooter from "../SlideFooter";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  Legend,
  Customized,
} from "recharts";

/* ── Color constants ── */
const C = {
  dawnCream: "#FEFAF5",
  midnightNavy: "#061A37",
  deepNavy: "#0F2C59",
  navy: "#1A447C",
  brandBlue: "#2860B2",
  warmGray: "#A29E9B",
  darkWarmGray: "#4A4846",
  paleWarm: "#E0DEDA",
  pureWhite: "#FFFFFF",
  accent: "#4A9EF2",
  forecastBlue: "#6B9BD2",
  goldLine: "#B8860B",
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
const revenues = [87, 88, 87, 87, 88, 88, 89, 89, 91, 93, 94, 95];
const grossMargins = [67, 66, 67, 67, 69, 69, 70, 72, 73, 73, 74, 74];

const data = quarters.map((name, i) => ({
  name,
  revenue: revenues[i],
  gm: grossMargins[i],
  isForecast: i >= FORECAST_START,
  fyLabel: name.startsWith("Q2") ? `FY${name.split("'")[1]}` : "",
}));

/* ── Custom bar shape ── */
function CustomBarShape(props: Record<string, unknown>) {
  const { x, y, width, height, payload } = props as {
    x: number;
    y: number;
    width: number;
    height: number;
    payload: { isForecast: boolean };
  };
  if (payload.isForecast) {
    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={4}
        ry={4}
        fill={C.forecastBlue}
        fillOpacity={0.45}
        stroke={C.forecastBlue}
        strokeWidth={1.5}
        strokeDasharray="6 3"
      />
    );
  }
  return (
    <rect x={x} y={y} width={width} height={height} rx={4} ry={4} fill={C.brandBlue} />
  );
}

/* ── Custom dot for GM line ── */
function CustomDot(props: Record<string, unknown>) {
  const { cx, cy, payload } = props as {
    cx: number;
    cy: number;
    payload: { isForecast: boolean };
  };
  if (payload.isForecast) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={4}
        fill="none"
        stroke={C.goldLine}
        strokeWidth={2}
        strokeDasharray="3 2"
      />
    );
  }
  return <circle cx={cx} cy={cy} r={4} fill={C.goldLine} />;
}

/* ── Forecast divider (Customized component) ── */
function ForecastDivider(props: Record<string, unknown>) {
  const { xAxisMap, offset } = props as {
    xAxisMap: Record<string, { scale: (v: number) => number; bandSize?: number }>;
    offset: { top: number; bottom: number };
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
        fontSize={13}
        fontFamily={F.body}
        fontWeight={600}
      >
        Forecast →
      </text>
    </g>
  );
}

/* ── Custom legend ── */
function renderLegend() {
  const items = [
    { label: "Revenue (Actual)", color: C.brandBlue },
    { label: "Revenue (Forecast)", color: C.forecastBlue },
    { label: "Gross Margin %", color: C.goldLine },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 32,
        paddingTop: 8,
      }}
    >
      {items.map((item) => (
        <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: item.label.includes("Margin") ? "50%" : 3,
              background: item.color,
              opacity: item.label.includes("Forecast") ? 0.55 : 1,
              border: item.label.includes("Forecast")
                ? `1.5px dashed ${item.color}`
                : "none",
            }}
          />
          <span
            style={{
              fontSize: 16,
              fontFamily: F.body,
              color: C.pureWhite,
              fontWeight: 500,
            }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Metric cards ── */
const cards = [
  {
    label: "GROSS MARGIN (FY27 Q4)",
    value: "74%",
    detail: "Up ~700bps from FY25 entry.",
    highlighted: true,
  },
  {
    label: "SUBSCRIPTION MARGIN (FY27)",
    value: "79%",
    detail: "Grows to 81% by FY30.",
    highlighted: false,
  },
  {
    label: "FY27 Q4 REVENUE (ANN.)",
    value: "$380M",
    detail: "$95M quarterly × 4",
    highlighted: false,
  },
];

/* ── Slide component ── */
export default function SlideARRGrossMarginQuarterlyDark({
  slideNumber = 21,
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
      data-speaker-notes="Quarterly revenue and gross margin trajectory from FY25 through FY27. Q3'26 onward is forecast. FY27 Q4 revenue of $95M annualizes to $380M. Gross margin expands from 67% to 74%."
    >
      {/* ── Header ── */}
      <header style={{ padding: "40px 100px 0", textAlign: "center", flexShrink: 0 }}>
        <p
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: C.accent,
            margin: "0 0 8px",
            fontFamily: F.body,
          }}
        >
          LONG-TERM MODEL
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
          Durable Top Line Momentum.
        </h1>
        <p
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.7)",
            margin: "10px 0 0",
            lineHeight: 1.5,
            fontFamily: F.body,
          }}
        >
          Revenue compounds steadily while gross margins expand toward best-in-class levels.
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
            <ComposedChart
              data={data}
              margin={{ top: 24, right: 24, bottom: 8, left: 8 }}
            >
              <CartesianGrid
                horizontal
                vertical={false}
                stroke="rgba(255,255,255,0.08)"
                strokeDasharray="3 3"
              />

              {/* Primary X-axis: quarter labels */}
              <XAxis
                dataKey="name"
                tickFormatter={(v: string) => v.split("'")[0]}
                tick={{ fontSize: 16, fill: "rgba(255,255,255,0.4)", fontFamily: F.body }}
                axisLine={false}
                tickLine={false}
              />

              {/* Secondary X-axis: fiscal year labels */}
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

              {/* Left Y-axis: Revenue */}
              <YAxis
                yAxisId="left"
                domain={[0, 120]}
                ticks={[0, 20, 40, 60, 80, 100, 120]}
                tickFormatter={(v: number) => `$${v}M`}
                tick={{ fontSize: 18, fill: "rgba(255,255,255,0.4)", fontFamily: F.body }}
                axisLine={false}
                tickLine={false}
                width={70}
              />

              {/* Right Y-axis: Gross Margin % */}
              <YAxis
                yAxisId="right"
                orientation="right"
                domain={[50, 90]}
                tickFormatter={(v: number) => `${v}%`}
                tick={{ fontSize: 18, fill: "rgba(255,255,255,0.4)", fontFamily: F.body }}
                axisLine={false}
                tickLine={false}
                width={55}
              />

              <Customized component={ForecastDivider} />

              <Bar
                dataKey="revenue"
                yAxisId="left"
                shape={<CustomBarShape />}
                maxBarSize={60}
              >
                <LabelList
                  dataKey="revenue"
                  position="top"
                  formatter={(label) => {
                    const n = typeof label === "number" ? label : Number(label);
                    return Number.isFinite(n) ? `$${n}M` : "";
                  }}
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    fill: C.pureWhite,
                    fontFamily: F.body,
                  }}
                />
              </Bar>

              <Line
                dataKey="gm"
                yAxisId="right"
                type="monotone"
                stroke={C.goldLine}
                strokeWidth={3}
                dot={<CustomDot />}
                activeDot={false}
              >
                <LabelList
                  dataKey="gm"
                  position="top"
                  formatter={(label) => {
                    const n = typeof label === "number" ? label : Number(label);
                    return Number.isFinite(n) ? `${n}%` : "";
                  }}
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    fill: C.goldLine,
                    fontFamily: F.body,
                  }}
                  offset={10}
                />
              </Line>

              <Legend content={renderLegend} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Right: Metric cards */}
        <div
          style={{
            flex: 45,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
