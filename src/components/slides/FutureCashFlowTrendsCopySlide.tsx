"use client";

import React from "react";
import {
  ComposedChart,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  Customized,
  type LabelProps,
} from "recharts";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";
const GROWTH = "#1E7E5E";
const GRID = "rgba(6,26,55,0.08)";
const TICK = "rgba(6,26,55,0.55)";

const BAR_BLUE = "#2860B2";
const BAR_TEAL = "#1E7E5E";
const BAR_GOLD = "#B8860B";
const NEG_BAR = "#9A9A9A";
const FORECAST_START = 6;

const F = {
  heading: "Georgia, serif",
  body: "'Space Grotesk', 'Work Sans', Arial, sans-serif",
} as const;

const QUARTERS = [
  "Q1'25","Q2'25","Q3'25","Q4'25",
  "Q1'26","Q2'26","Q3'26","Q4'26",
  "Q1'27","Q2'27","Q3'27","Q4'27",
];
const ADJ_EBITDA =     [1, -1, 1, 0, 4, 10, 14, 18, 22, 24, 24, 25];
const EBITDA_MARGIN =  [1, -1, 1, -1, 5, 11, 16, 21, 24, 26, 26, 27];
const FCF =            [-3, -3, -1, 3, 1, -2, 2, 9, 14, 22, 22, 18];
const FCF_CONVERSION: (number | null)[] = [null, null, null, null, null, 20, 45, 47, 64, 72, 80, 88];
const CASH =           [24, 21, 20, 29, 30, 27, 29, 37, 51, 71, 92, 109];

const ebitdaData = QUARTERS.map((name, i) => ({
  name,
  ebitda: ADJ_EBITDA[i],
  margin: EBITDA_MARGIN[i],
  isForecast: i >= FORECAST_START,
  fyLabel: name.startsWith("Q2") ? `FY${name.split("'")[1]}` : "",
}));

const fcfData = QUARTERS.map((name, i) => ({
  name,
  fcf: FCF[i],
  conversion: FCF_CONVERSION[i],
  isForecast: i >= FORECAST_START,
  fyLabel: name.startsWith("Q2") ? `FY${name.split("'")[1]}` : "",
}));

const cashData = QUARTERS.map((name, i) => ({
  name,
  cash: CASH[i],
  isForecast: i >= FORECAST_START,
  fyLabel: name.startsWith("Q2") ? `FY${name.split("'")[1]}` : "",
}));

function makeBarShape(baseColor: string) {
  return function ForecastBarShape(props: Record<string, unknown>) {
    const { x, y, width, height, payload } = props as {
      x: number; y: number; width: number; height: number;
      payload: { isForecast: boolean; ebitda?: number; fcf?: number; cash?: number };
    };
    const val = payload.ebitda ?? payload.fcf ?? payload.cash ?? 0;
    const isNeg = val < 0;
    const color = isNeg ? NEG_BAR : baseColor;
    const renderHeight = Math.max(Math.abs(height), 10);
    const renderY = isNeg ? y : y + (Math.abs(height) - renderHeight);

    if (payload.isForecast) {
      return (
        <rect
          x={x}
          y={renderY}
          width={width}
          height={renderHeight}
          rx={4}
          ry={4}
          fill={color}
          fillOpacity={0.35}
          stroke={color}
          strokeWidth={1.5}
          strokeDasharray="5 3"
        />
      );
    }
    return <rect x={x} y={renderY} width={width} height={renderHeight} rx={4} ry={4} fill={color} />;
  };
}

const EbitdaBarShape = makeBarShape(BAR_BLUE);
const FcfBarShape = makeBarShape(BAR_TEAL);
const CashBarShape = makeBarShape(BAR_GOLD);

function ForecastDivider(props: Record<string, unknown>) {
  const { xAxisMap, offset } = props as {
    xAxisMap: Record<string, { scale: (v: number) => number; bandSize?: number }>;
    offset: { top: number; height: number };
  };
  const xAxis = xAxisMap?.[0];
  if (!xAxis?.scale) return null;
  const band = xAxis.bandSize ?? 0;
  const lineX = (xAxis.scale(5) + band / 2 + xAxis.scale(6) - band / 2) / 2;
  const top = offset?.top ?? 10;
  const bottom = top + (offset?.height ?? 160);
  return (
    <g>
      <line
        x1={lineX}
        y1={top}
        x2={lineX}
        y2={bottom}
        stroke="rgba(6,26,55,0.3)"
        strokeWidth={1}
        strokeDasharray="5 3"
      />
      <text x={lineX + 5} y={top + 12} fill={MUTED} fontSize={10} fontFamily={F.body} fontWeight={600}>
        Forecast →
      </text>
    </g>
  );
}

function ebitdaLabel(props: LabelProps) {
  const { x, y, width, height, value: raw } = props;
  const value = typeof raw === "number" ? raw : Number(raw);
  const isNeg = value < 0;
  const ly = isNeg ? Number(y) + Math.abs(Number(height)) + 14 : Number(y) - 6;
  return (
    <text
      x={Number(x) + Number(width) / 2}
      y={ly}
      textAnchor="middle"
      fill={isNeg ? NEG_BAR : NAVY_DARK}
      fontSize={11}
      fontWeight={700}
      fontFamily={F.body}
    >
      {isNeg ? `-$${Math.abs(value)}` : `$${value}`}
    </text>
  );
}

function fcfLabel(props: LabelProps) {
  const { x, y, width, height, value: raw } = props;
  const value = typeof raw === "number" ? raw : Number(raw);
  const isNeg = value < 0;
  const ly = isNeg ? Number(y) + Math.abs(Number(height)) + 14 : Number(y) - 6;
  return (
    <text
      x={Number(x) + Number(width) / 2}
      y={ly}
      textAnchor="middle"
      fill={isNeg ? NEG_BAR : NAVY_DARK}
      fontSize={11}
      fontWeight={700}
      fontFamily={F.body}
    >
      {isNeg ? `($${Math.abs(value)})` : `$${value}`}
    </text>
  );
}

function cashLabel(props: LabelProps) {
  const { x, y, width, value: raw } = props;
  const value = typeof raw === "number" ? raw : Number(raw);
  return (
    <text
      x={Number(x) + Number(width) / 2}
      y={Number(y) - 6}
      textAnchor="middle"
      fill={BAR_GOLD}
      fontSize={11}
      fontWeight={700}
      fontFamily={F.body}
    >
      ${value}
    </text>
  );
}

const xAxisProps = {
  dataKey: "name" as const,
  tickFormatter: (v: string) => v.split("'")[0],
  tick: { fontSize: 11, fill: TICK, fontFamily: F.body },
  axisLine: false as const,
  tickLine: false as const,
};

const fyAxisProps = {
  xAxisId: "fy" as const,
  dataKey: "fyLabel" as const,
  tick: { fontSize: 13, fill: NAVY, fontWeight: 700, fontFamily: F.body },
  axisLine: false as const,
  tickLine: false as const,
  height: 20,
};

const gridProps = {
  vertical: false as const,
  stroke: GRID,
};

const leftTickStyle = { fontSize: 11, fill: TICK, fontFamily: F.body };

function MetricCard({ title, value, desc }: { title: string; value: string; desc: string }) {
  return (
    <div
      style={{
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderLeft: `3px solid ${BLUE}`,
        borderRadius: 12,
        padding: "18px 26px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: 14,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: BLUE,
          margin: "0 0 8px",
          fontFamily: F.body,
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontFamily: F.heading,
          fontSize: 34,
          fontWeight: 700,
          color: GROWTH,
          margin: 0,
          lineHeight: 1.1,
        }}
      >
        {value}
      </p>
      <p
        style={{
          fontSize: 14,
          color: BODY,
          margin: "8px 0 0",
          lineHeight: 1.4,
          fontFamily: F.body,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

function ChartRow({ chart, card }: { chart: React.ReactNode; card: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
      <div style={{ flex: 55, minWidth: 0 }}>{chart}</div>
      <div style={{ flex: 45 }}>{card}</div>
    </div>
  );
}

function marginLineLabel(props: LabelProps) {
  const { x, y, value: raw } = props;
  const value = typeof raw === "number" ? raw : Number(raw);
  return (
    <text
      x={Number(x)}
      y={Number(y) + 16}
      textAnchor="middle"
      fill={MUTED}
      fontSize={10}
      fontFamily={F.body}
    >
      {value}%
    </text>
  );
}

function conversionLineLabel(props: LabelProps) {
  const { x, y, value } = props;
  if (value == null || value === "") return null;
  const num = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(num)) return null;
  return (
    <text
      x={Number(x)}
      y={Number(y) + 16}
      textAnchor="middle"
      fill={MUTED}
      fontSize={10}
      fontFamily={F.body}
    >
      {num}%
    </text>
  );
}

export default function FutureCashFlowTrendsCopySlide({
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

      <header style={{ padding: "32px 100px 0", textAlign: "center", flexShrink: 0 }}>
        <p
          style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: BLUE,
            margin: "0 0 6px",
            fontFamily: F.body,
          }}
        >
          Cash Flow Trends — Quarterly
        </p>
        <h1
          style={{
            fontFamily: F.heading,
            fontSize: 46,
            fontWeight: 700,
            color: NAVY,
            margin: 0,
            lineHeight: 1.12,
          }}
        >
          Adjusted EBITDA, Free Cash Flow, and Cash projections.
        </h1>
      </header>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          padding: "16px 100px 0",
          flex: 1,
          minHeight: 0,
          justifyContent: "center",
        }}
      >
        <ChartRow
          chart={
            <ResponsiveContainer width="100%" height={220}>
              <ComposedChart data={ebitdaData} margin={{ top: 24, right: 16, bottom: 0, left: 4 }}>
                <CartesianGrid {...gridProps} />
                <XAxis {...xAxisProps} />
                <XAxis {...fyAxisProps} />
                <YAxis
                  yAxisId="left"
                  domain={[-5, 30]}
                  tickFormatter={(v: number) => `$${v}`}
                  tick={leftTickStyle}
                  axisLine={false}
                  tickLine={false}
                  width={48}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  domain={[-10, 40]}
                  tickFormatter={(v: number) => `${v}%`}
                  tick={leftTickStyle}
                  axisLine={false}
                  tickLine={false}
                  width={40}
                />
                <Customized component={ForecastDivider} />
                <Bar
                  dataKey="ebitda"
                  yAxisId="left"
                  shape={<EbitdaBarShape />}
                  barSize={36}
                  isAnimationActive={false}
                >
                  <LabelList dataKey="ebitda" content={ebitdaLabel} />
                </Bar>
                <Line
                  dataKey="margin"
                  yAxisId="right"
                  type="monotone"
                  stroke="rgba(6,26,55,0.35)"
                  strokeWidth={2}
                  strokeDasharray="8 4"
                  dot={{ r: 4, fill: "rgba(6,26,55,0.35)", stroke: "none" }}
                  activeDot={false}
                  isAnimationActive={false}
                >
                  <LabelList dataKey="margin" content={marginLineLabel} />
                </Line>
              </ComposedChart>
            </ResponsiveContainer>
          }
          card={
            <MetricCard
              title="FY27 Q4 Exit (Annualized)"
              value="$100M"
              desc="26% Adj. EBITDA margin at Q4'27 exit. Margins expand from ~0% to 26% via cost discipline and AI-driven leverage."
            />
          }
        />

        <ChartRow
          chart={
            <ResponsiveContainer width="100%" height={220}>
              <ComposedChart data={fcfData} margin={{ top: 24, right: 16, bottom: 0, left: 4 }}>
                <CartesianGrid {...gridProps} />
                <XAxis {...xAxisProps} />
                <XAxis {...fyAxisProps} />
                <YAxis
                  yAxisId="left"
                  domain={[-10, 30]}
                  tickFormatter={(v: number) => `$${v}`}
                  tick={leftTickStyle}
                  axisLine={false}
                  tickLine={false}
                  width={48}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  domain={[-20, 100]}
                  tickFormatter={(v: number) => `${v}%`}
                  tick={leftTickStyle}
                  axisLine={false}
                  tickLine={false}
                  width={40}
                />
                <Customized component={ForecastDivider} />
                <Bar
                  dataKey="fcf"
                  yAxisId="left"
                  shape={<FcfBarShape />}
                  barSize={36}
                  isAnimationActive={false}
                >
                  <LabelList dataKey="fcf" content={fcfLabel} />
                </Bar>
                <Line
                  dataKey="conversion"
                  yAxisId="right"
                  type="monotone"
                  stroke="rgba(6,26,55,0.35)"
                  strokeWidth={2}
                  strokeDasharray="8 4"
                  dot={{ r: 4, fill: "rgba(6,26,55,0.35)", stroke: "none" }}
                  activeDot={false}
                  isAnimationActive={false}
                  connectNulls={false}
                >
                  <LabelList dataKey="conversion" content={conversionLineLabel} />
                </Line>
              </ComposedChart>
            </ResponsiveContainer>
          }
          card={
            <MetricCard
              title="FY27 Q4 Exit FCF Conversion"
              value="88%"
              desc="Low capex and working-capital needs convert nearly all Adj. EBITDA to cash. Q4'27 annualized FCF of $72M."
            />
          }
        />

        <ChartRow
          chart={
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={cashData} margin={{ top: 24, right: 16, bottom: 0, left: 4 }}>
                <CartesianGrid {...gridProps} />
                <XAxis {...xAxisProps} />
                <XAxis {...fyAxisProps} />
                <YAxis
                  domain={[0, 140]}
                  ticks={[0, 35, 70, 105, 140]}
                  tickFormatter={(v: number) => `$${v}`}
                  tick={leftTickStyle}
                  axisLine={false}
                  tickLine={false}
                  width={48}
                />
                <YAxis
                  yAxisId="spacer"
                  orientation="right"
                  tick={false}
                  axisLine={false}
                  tickLine={false}
                  width={40}
                />
                <Customized component={ForecastDivider} />
                <Bar dataKey="cash" shape={<CashBarShape />} barSize={36} isAnimationActive={false}>
                  <LabelList dataKey="cash" content={cashLabel} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          }
          card={
            <MetricCard
              title="Cash at Q4'27"
              value="$109M"
              desc="Cash builds steadily as FCF inflects, providing liquidity for debt service and investment."
            />
          }
        />
      </div>

      <p
        style={{
          fontSize: 11,
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
          fontSize: 11,
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
          padding: "4px 100px 16px",
          fontFamily: F.body,
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        Cash Flow · EBITDA 1% → 26% · $100M annualized · FCF conv. 88%
      </footer>
    </div>
  );
}
