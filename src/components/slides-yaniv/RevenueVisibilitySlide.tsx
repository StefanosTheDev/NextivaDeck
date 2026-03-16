"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { REVENUE_VISIBILITY } from "../financialData";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, LabelList, ReferenceLine, Cell, Customized,
} from "recharts";

const RV = REVENUE_VISIBILITY;

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

const POS_COLORS = ["#4D9AE8", "#5BA0E8", "#7FC7A0", "#2860B2", "#82C882", "#7EB3E8"];

export default function RevenueVisibilitySlide({ slideNumber = 31 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)", justifyContent: "space-between" }}>
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#CCC7C3", margin: "0 0 10px" }}>Revenue visibility</p>
        <h1 className="font-heading" style={{ fontSize: 60, fontWeight: 700, color: "#FFFFFF", marginTop: 10, lineHeight: 1.15 }}>
          Majority of FY27 revenue already locked in.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.45)", marginTop: 10, lineHeight: 1.5, maxWidth: 1200, marginLeft: "auto", marginRight: "auto" }}>
          ~{RV.gapPct}% of FY27 subscription revenue remains at risk — the foundation is already in place today.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "20px 100px 0", display: "flex", gap: 36 }}
      >
        {/* Waterfall Chart */}
        <div style={{ flex: 65, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <ResponsiveContainer width="100%" height="92%">
            <BarChart
              data={WATERFALL_DATA}
              margin={{ top: 40, right: 20, left: 20, bottom: 24 }}
              barCategoryGap="18%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
              <XAxis
                dataKey="name"
                tick={({ x, y, payload }: any) => {
                  const lines = (payload.value as string).split("\n");
                  return (
                    <text x={x} y={y + 14} textAnchor="middle" fontSize={14} fill="rgba(255,255,255,0.5)" fontFamily="'Space Grotesk', sans-serif">
                      {lines.map((line: string, i: number) => (
                        <tspan x={x} dy={i === 0 ? 0 : 16} key={i}>{line}</tspan>
                      ))}
                    </text>
                  );
                }}
                axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                tickLine={false}
                interval={0}
                height={56}
              />
              <YAxis
                domain={[0, 400]}
                tick={{ fontSize: 16, fill: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v: number) => `$${v}M`}
              />
              <ReferenceLine
                y={RV.subscriptionTarget}
                stroke="rgba(255,255,255,0.3)"
                strokeDasharray="6 4"
                strokeWidth={2}
                label={{
                  value: `$${RV.subscriptionTarget}M target`,
                  position: "insideTopLeft",
                  fill: "rgba(255,255,255,0.4)",
                  fontSize: 15,
                  fontFamily: "'Space Grotesk', sans-serif",
                  dy: -28,
                }}
              />
              <Bar dataKey="base" stackId="a" fill="transparent" isAnimationActive={false} />
              <Bar dataKey="absValue" stackId="a" radius={[5, 5, 0, 0]} isAnimationActive={false}>
                <LabelList
                  dataKey="absValue"
                  position="top"
                  formatter={(v: any) => {
                    const entry = WATERFALL_DATA.find((d) => d.absValue === v);
                    const sign = entry?.isNeg ? "\u2013" : "";
                    return `${sign}$${v}M`;
                  }}
                  style={{ fontSize: 18, fontWeight: 700, fill: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif" }}
                />
                {WATERFALL_DATA.map((_, i) => (
                  <Cell key={i} fill={POS_COLORS[i]} />
                ))}
              </Bar>
              <Customized
                component={({ xAxisMap, yAxisMap }: any) => {
                  const xAxis = xAxisMap && Object.values(xAxisMap)[0] as any;
                  const yAxis = yAxisMap && Object.values(yAxisMap)[0] as any;
                  if (!xAxis || !yAxis) return null;
                  const bandWidth = xAxis.bandSize || (xAxis.width / WATERFALL_DATA.length);
                  const x = xAxis.x + bandWidth * 3 + bandWidth;
                  const yTop = yAxis.y;
                  const yBottom = yAxis.y + yAxis.height;
                  return (
                    <g>
                      <line
                        x1={x} y1={yTop} x2={x} y2={yBottom + 58}
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth={1.5}
                        strokeDasharray="5 4"
                        opacity={0.5}
                      />
                      <text
                        x={x + 10} y={yBottom + 72}
                        fontSize={12} fill="rgba(255,255,255,0.3)" fontFamily="'Space Grotesk', sans-serif"
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
        <div style={{ flex: 35, display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              padding: "24px 28px",
              textAlign: "center",
              background: "rgba(40,96,178,0.12)",
              border: "2px solid rgba(40,96,178,0.4)",
              borderRadius: 16,
              boxShadow: "0 4px 16px rgba(40,96,178,0.15)",
            }}
          >
            <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#7EB3E8", margin: 0 }}>
              FY27 Subscription Revenue at Risk
            </p>
            <p className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: "6px 0 0", lineHeight: 1 }}>
              Only {RV.gapPct}%
            </p>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.4)", margin: "6px 0 0" }}>
              ${RV.gap}M gap to plan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            style={{ padding: "24px 28px", textAlign: "center", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16 }}
          >
            <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: 0 }}>
              FY27 Subscription Revenue Target
            </p>
            <p className="font-heading" style={{ fontSize: 44, fontWeight: 700, color: "#FFFFFF", margin: "6px 0 0", lineHeight: 1 }}>
              ${RV.subscriptionTarget}M
            </p>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.4)", margin: "6px 0 0" }}>
              vs ${RV.buildUp}M visibility build-up
            </p>
          </motion.div>

          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", lineHeight: 1.5, margin: "4px 0 0" }}>
            Contracted = under term through FY27. Monthly renewals net of churn. Expansion bookings per model. Contract net renewals net of attrition.
          </p>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
