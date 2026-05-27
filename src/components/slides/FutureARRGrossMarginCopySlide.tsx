"use client";

import React from "react";
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

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_FORECAST = "#6B9BD2";
const GOLD = "#B8860B";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";
const GROWTH = "#1E7E5E";
const GRID = "rgba(6,26,55,0.08)";
const TICK = "rgba(6,26,55,0.55)";

const F = {
  heading: "Georgia, serif",
  body: "'Space Grotesk', 'Work Sans', Arial, sans-serif",
} as const;

const FORECAST_START = 6;

const quarters = [
  "Q1'25", "Q2'25", "Q3'25", "Q4'25",
  "Q1'26", "Q2'26", "Q3'26", "Q4'26",
  "Q1'27", "Q2'27", "Q3'27", "Q4'27",
];
const revenues = [87, 88, 87, 87, 88, 88, 88, 88, 89, 91, 91, 92];
const grossMargins = [67, 66, 67, 67, 69, 69, 72, 73, 73, 74, 74, 74];

const data = quarters.map((name, i) => ({
  name,
  revenue: revenues[i],
  gm: grossMargins[i],
  isForecast: i >= FORECAST_START,
  fyLabel: name.startsWith("Q2") ? `FY${name.split("'")[1]}` : "",
}));

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
        fill={BLUE_FORECAST}
        fillOpacity={0.35}
        stroke={BLUE_FORECAST}
        strokeWidth={1.5}
        strokeDasharray="6 3"
      />
    );
  }
  return <rect x={x} y={y} width={width} height={height} rx={4} ry={4} fill={BLUE} />;
}

function CustomDot(props: Record<string, unknown>) {
  const { cx, cy, payload } = props as {
    cx: number;
    cy: number;
    payload: { isForecast: boolean };
  };
  if (payload.isForecast) {
    return (
      <circle cx={cx} cy={cy} r={4} fill="none" stroke={GOLD} strokeWidth={2} strokeDasharray="3 2" />
    );
  }
  return <circle cx={cx} cy={cy} r={4} fill={GOLD} />;
}

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
        stroke="rgba(6,26,55,0.35)"
        strokeWidth={1.5}
        strokeDasharray="6 4"
      />
      <text
        x={lineX + 8}
        y={top + 16}
        fill={MUTED}
        fontSize={13}
        fontFamily={F.body}
        fontWeight={600}
      >
        Forecast →
      </text>
    </g>
  );
}

function renderLegend() {
  const items = [
    { label: "Revenue (Actual)", color: BLUE },
    { label: "Revenue (Forecast)", color: BLUE_FORECAST },
    { label: "Gross Margin %", color: GOLD },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 32, paddingTop: 8 }}>
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
          <span style={{ fontSize: 14, fontFamily: F.body, color: BODY, fontWeight: 500 }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

const cards = [
  {
    label: "GROSS MARGIN (FY27 Q4)",
    value: "74%",
    detail: "Up ~700 bps from FY25 entry.",
    highlighted: true,
  },
  {
    label: "SUBSCRIPTION MARGIN (FY27)",
    value: "80%",
    detail: "Grows to 82% by FY30.",
    highlighted: false,
  },
  {
    label: "FY27 Q4 REVENUE (ANN.)",
    value: "$369M",
    detail: "$92M quarterly × 4",
    highlighted: false,
  },
];

export default function FutureARRGrossMarginCopySlide({
  slideNumber: _sn,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background: "#FFFFFF",
        color: NAVY_DARK,
        display: "flex",
        flexDirection: "column",
        fontFamily: F.body,
        overflow: "hidden",
      }}
    >
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <header style={{ padding: "36px 100px 0", textAlign: "center", flexShrink: 0 }}>
        <p
          style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: BLUE,
            margin: "0 0 8px",
            fontFamily: F.body,
          }}
        >
          Long-term model
        </p>
        <h1
          style={{
            fontFamily: F.heading,
            fontSize: 52,
            fontWeight: 700,
            color: NAVY,
            margin: 0,
            lineHeight: 1.12,
          }}
        >
          Durable top-line momentum.
        </h1>
        <p
          style={{
            fontSize: 18,
            color: BODY,
            margin: "10px 0 0",
            lineHeight: 1.5,
            fontFamily: F.body,
          }}
        >
          Revenue compounds steadily while gross margins expand toward best-in-class levels.
        </p>
      </header>

      <div style={{ display: "flex", gap: 32, padding: "20px 100px 0", flex: 1, minHeight: 0 }}>
        <div style={{ flex: 58, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <ResponsiveContainer width="100%" height="90%">
            <ComposedChart data={data} margin={{ top: 24, right: 24, bottom: 8, left: 8 }}>
              <CartesianGrid horizontal vertical={false} stroke={GRID} strokeDasharray="3 3" />

              <XAxis
                dataKey="name"
                tickFormatter={(v: string) => v.split("'")[0]}
                tick={{ fontSize: 14, fill: TICK, fontFamily: F.body }}
                axisLine={false}
                tickLine={false}
              />

              <XAxis
                xAxisId="fy"
                dataKey="fyLabel"
                tick={{ fontSize: 18, fill: NAVY, fontWeight: 700, fontFamily: F.body }}
                axisLine={false}
                tickLine={false}
                height={26}
              />

              <YAxis
                yAxisId="left"
                domain={[0, 120]}
                ticks={[0, 20, 40, 60, 80, 100, 120]}
                tickFormatter={(v: number) => `$${v}M`}
                tick={{ fontSize: 14, fill: TICK, fontFamily: F.body }}
                axisLine={false}
                tickLine={false}
                width={56}
              />

              <YAxis
                yAxisId="right"
                orientation="right"
                domain={[50, 90]}
                tickFormatter={(v: number) => `${v}%`}
                tick={{ fontSize: 14, fill: TICK, fontFamily: F.body }}
                axisLine={false}
                tickLine={false}
                width={48}
              />

              <Customized component={ForecastDivider} />

              <Bar
                dataKey="revenue"
                yAxisId="left"
                shape={<CustomBarShape />}
                maxBarSize={56}
                isAnimationActive={false}
              >
                <LabelList
                  dataKey="revenue"
                  position="top"
                  formatter={(label) => {
                    const n = typeof label === "number" ? label : Number(label);
                    return Number.isFinite(n) ? `$${n}M` : "";
                  }}
                  style={{ fontSize: 12, fontWeight: 700, fill: NAVY_DARK, fontFamily: F.body }}
                />
              </Bar>

              <Line
                dataKey="gm"
                yAxisId="right"
                type="monotone"
                stroke={GOLD}
                strokeWidth={3}
                dot={<CustomDot />}
                activeDot={false}
                isAnimationActive={false}
              >
                <LabelList
                  dataKey="gm"
                  position="top"
                  formatter={(label) => {
                    const n = typeof label === "number" ? label : Number(label);
                    return Number.isFinite(n) ? `${n}%` : "";
                  }}
                  style={{ fontSize: 12, fontWeight: 700, fill: GOLD, fontFamily: F.body }}
                  offset={10}
                />
              </Line>

              <Legend content={renderLegend} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div
          style={{
            flex: 42,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 14,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.label}
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderLeft: `3px solid ${BLUE}`,
                borderRadius: 10,
                padding: "18px 26px",
                textAlign: "center",
                boxShadow: card.highlighted ? "0 4px 14px rgba(40,96,178,0.10)" : "none",
              }}
            >
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: MUTED,
                  margin: "0 0 6px",
                  fontFamily: F.body,
                }}
              >
                {card.label}
              </p>
              <p
                style={{
                  fontFamily: F.heading,
                  fontSize: 40,
                  fontWeight: 700,
                  color: card.highlighted ? GROWTH : NAVY,
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                {card.value}
              </p>
              <p style={{ fontSize: 14, color: BODY, margin: "6px 0 0", fontFamily: F.body }}>
                {card.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p
        style={{
          fontSize: 12,
          color: MUTED,
          fontFamily: F.body,
          padding: "0 100px 4px",
          margin: 0,
          flexShrink: 0,
        }}
      >
        Nextiva fiscal year ends June 30. Forward looking projections do not include pro forma
        financing costs or assumptions, potential acquisitions, expected tax payments not covered by NOLs.
      </p>
      <p
        style={{
          fontSize: 12,
          color: MUTED,
          fontFamily: F.body,
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
          padding: "6px 100px 18px",
          fontFamily: F.body,
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        ARR &amp; Gross Margin · $87M → $92M / Q · 67% → 74%
      </footer>
    </div>
  );
}
