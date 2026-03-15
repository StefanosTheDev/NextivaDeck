import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";
import { REVENUE_VISIBILITY } from "./financialData";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, LabelList, ReferenceLine, Cell, Customized,
} from "recharts";

const RV = REVENUE_VISIBILITY;

// Build waterfall data: each entry has a transparent `base` spacer and a visible `value`.
// For negative items the base is the running total AFTER subtracting, so the bar hangs down.
const waterfallRaw = [
  { name: "Contracted\nThrough FY27",      value: RV.contracted },
  { name: "Monthly\nRenewals",             value: RV.monthlyRenewals },
  { name: "Expansion\nBookings",           value: RV.expansionBookings },
  { name: "Contract Net\nRenewals",        value: RV.contractNetRenewals },
  { name: "New\nBookings",                 value: RV.newBookings },
];

let running = 0;
const WATERFALL_DATA = [
  ...waterfallRaw.map((d) => {
    const isNeg = d.value < 0;
    const base = isNeg ? running + d.value : running;
    running += d.value;
    return { ...d, base, absValue: Math.abs(d.value), isNeg, isTotal: false };
  }),
  { name: "FY27\nRevenue\nVisible", value: RV.buildUp, base: 0, absValue: RV.buildUp, isNeg: false, isTotal: true },
];

const POS_COLORS = [COLORS.brandBlue, COLORS.steelBlue, COLORS.desertSage, COLORS.navy, "#5B8C5A", COLORS.deepNavy];

const SPEAKER_NOTES =
  `FY27 revenue visibility waterfall: $${RV.contracted}M contracted through FY27, $${RV.monthlyRenewals}M monthly renewals (net of churn), $${RV.expansionBookings}M expansion bookings, $${RV.contractNetRenewals}M contract net renewals, $${RV.newBookings}M new bookings. Total build-up is $${RV.buildUp}M against a $${RV.subscriptionTarget}M target — a $${RV.gap}M or ~${RV.gapPct}% gap.`;

const SlideRevenueVisibility = ({ slideNumber = "31" }: { slideNumber?: string }) => (
  <div
    style={{
      width: 1920, height: 1080, background: COLORS.dawnCream,
      display: "flex", flexDirection: "column", fontFamily: FONTS.body, overflow: "hidden",
    }}
    data-speaker-notes={SPEAKER_NOTES}
  >
    {/* Header */}
    <header style={{ padding: "60px 100px 0", flexShrink: 0, textAlign: "center" }}>
      <p style={{ fontWeight: 700, fontSize: 22, letterSpacing: "0.05em", textTransform: "uppercase", color: COLORS.brandBlue, margin: 0 }}>
        Revenue visibility
      </p>
      <h1 style={{ fontFamily: FONTS.heading, fontSize: 68, fontWeight: 400, color: COLORS.navy, margin: "12px 0 0", lineHeight: 1.15 }}>
        Majority of FY27 revenue already locked in.
      </h1>
      <p style={{ fontSize: 24, color: COLORS.darkWarmGray, margin: "12px auto 0", lineHeight: 1.5, maxWidth: 1200 }}>
        ~{RV.gapPct}% of FY27 subscription revenue remains at risk — the foundation is already in place today.
      </p>
    </header>

    {/* Body: Chart (2/3) + Cards (1/3) */}
    <main style={{ flex: 1, padding: "24px 100px 0", display: "flex", gap: 40 }}>
      {/* Waterfall Chart */}
      <div style={{ flex: 65, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <ResponsiveContainer width="100%" height="92%">
          <BarChart
            data={WATERFALL_DATA}
            margin={{ top: 40, right: 20, left: 20, bottom: 24 }}
            barCategoryGap="18%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.paleWarm} vertical={false} />
            <XAxis
              dataKey="name"
              tick={({ x, y, payload }: any) => {
                const lines = (payload.value as string).split("\n");
                return (
                  <text x={x} y={y + 14} textAnchor="middle" fontSize={16} fill={COLORS.darkWarmGray} fontFamily={FONTS.body}>
                    {lines.map((line: string, i: number) => (
                      <tspan x={x} dy={i === 0 ? 0 : 18} key={i}>{line}</tspan>
                    ))}
                  </text>
                );
              }}
              axisLine={{ stroke: COLORS.paleWarm }}
              tickLine={false}
              interval={0}
              height={60}
            />
            <YAxis
              domain={[0, 400]}
              tick={{ fontSize: 18, fill: COLORS.warmGray, fontFamily: FONTS.body }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `$${v}M`}
            />
            <ReferenceLine
              y={RV.subscriptionTarget}
              stroke={COLORS.midWarmGray}
              strokeDasharray="6 4"
              strokeWidth={2}
              label={{
                value: `$${RV.subscriptionTarget}M target`,
                position: "insideTopLeft",
                fill: COLORS.midWarmGray,
                fontSize: 17,
                fontFamily: FONTS.body,
                dy: -28,
              }}
            />
            {/* Invisible base spacer */}
            <Bar dataKey="base" stackId="a" fill="transparent" isAnimationActive={false} />
            {/* Visible value bar */}
            <Bar dataKey="absValue" stackId="a" radius={[5, 5, 0, 0]} isAnimationActive={false}>
              <LabelList
                dataKey="absValue"
                position="top"
                formatter={(v: number) => {
                  const entry = WATERFALL_DATA.find((d) => d.absValue === v);
                  const sign = entry?.isNeg ? "–" : "";
                  return `${sign}$${v}M`;
                }}
                style={{ fontSize: 20, fontWeight: 700, fill: COLORS.navy, fontFamily: FONTS.body }}
              />
              {WATERFALL_DATA.map((entry, i) => (
                <Cell key={i} fill={POS_COLORS[i]} />
              ))}
            </Bar>
            {/* Vertical dotted divider between Contract Net Renewals and New Bookings */}
            <Customized
              component={({ xAxisMap, yAxisMap }: any) => {
                const xAxis = xAxisMap && Object.values(xAxisMap)[0] as any;
                const yAxis = yAxisMap && Object.values(yAxisMap)[0] as any;
                if (!xAxis || !yAxis) return null;
                // Calculate x position between index 3 (Contract Net Renewals) and 4 (New Bookings)
                const bandWidth = xAxis.bandSize || (xAxis.width / WATERFALL_DATA.length);
                const x = xAxis.x + bandWidth * 3 + bandWidth;
                const yTop = yAxis.y;
                const yBottom = yAxis.y + yAxis.height;
                return (
                  <g>
                    <line
                      x1={x} y1={yTop} x2={x} y2={yBottom + 62}
                      stroke={COLORS.warmGray}
                      strokeWidth={1.5}
                      strokeDasharray="5 4"
                      opacity={0.5}
                    />
                    <text
                      x={x + 10} y={yBottom + 76}
                      fontSize={13} fill={COLORS.warmGray} fontFamily={FONTS.body}
                      textAnchor="start"
                    >
                      Projections at expected attainment →
                    </text>
                  </g>
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* KPI Cards */}
      <div style={{ flex: 35, display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
        {/* Card 1 — Revenue at Risk */}
        <div style={{
          background: COLORS.pureWhite,
          border: `2px solid ${COLORS.brandBlue}`,
          borderRadius: 14,
          padding: "28px 32px",
          boxShadow: "0 4px 16px rgba(40,96,178,0.1)",
          textAlign: "center",
        }}>
          <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: COLORS.brandBlue, margin: 0 }}>
            FY27 Subscription Revenue at Risk
          </p>
          <p style={{ fontFamily: FONTS.heading, fontSize: 60, fontWeight: 700, color: COLORS.navy, margin: "6px 0 0", lineHeight: 1 }}>
            Only {RV.gapPct}%
          </p>
          <p style={{ fontSize: 20, color: COLORS.midWarmGray, margin: "6px 0 0" }}>
            ${RV.gap}M gap to plan
          </p>
        </div>

        {/* Card 2 — Subscription Target */}
        <div style={{
          background: COLORS.pureWhite,
          border: `1px solid ${COLORS.paleWarm}`,
          borderRadius: 14,
          padding: "28px 32px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          textAlign: "center",
        }}>
          <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: COLORS.warmGray, margin: 0 }}>
            FY27 Subscription Revenue Target
          </p>
          <p style={{ fontFamily: FONTS.heading, fontSize: 48, fontWeight: 700, color: COLORS.navy, margin: "6px 0 0", lineHeight: 1 }}>
            ${RV.subscriptionTarget}M
          </p>
          <p style={{ fontSize: 20, color: COLORS.midWarmGray, margin: "6px 0 0" }}>
            vs ${RV.buildUp}M visibility build-up
          </p>
        </div>

        {/* Footnote */}
        <p style={{ fontSize: 15, color: COLORS.warmGray, lineHeight: 1.5, margin: "4px 0 0" }}>
          Contracted = under term through FY27. Monthly renewals net of churn. Expansion bookings per model. Contract net renewals net of attrition.
        </p>
      </div>
    </main>

    <SlideFooter slideNumber={slideNumber} variant="light" />
  </div>
);

export default SlideRevenueVisibility;
