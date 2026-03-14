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

const POS_COLORS = ["#2860B2", "#31659A", "#7FA07E", "#1A447C", "#5B8C5A", "#061A37"];

export default function RevenueVisibilitySlide({ slideNumber = 31 }: { slideNumber?: number }) {
  return (
    <div className="slide slide--cream">
      <div style={{ height: 3, background: "#2860B2", flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "52px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p className="eyebrow">Revenue visibility</p>
        <h1 className="font-heading" style={{ fontSize: 60, fontWeight: 700, color: "#1A447C", marginTop: 10, lineHeight: 1.15 }}>
          Majority of FY27 revenue already locked in.
        </h1>
        <p className="font-body" style={{ fontSize: 22, color: "#4A4846", marginTop: 10, lineHeight: 1.5, maxWidth: 1200, marginLeft: "auto", marginRight: "auto" }}>
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
              <CartesianGrid strokeDasharray="3 3" stroke="#E0DEDA" vertical={false} />
              <XAxis
                dataKey="name"
                tick={({ x, y, payload }: any) => {
                  const lines = (payload.value as string).split("\n");
                  return (
                    <text x={x} y={y + 14} textAnchor="middle" fontSize={14} fill="#4A4846" fontFamily="'Space Grotesk', sans-serif">
                      {lines.map((line: string, i: number) => (
                        <tspan x={x} dy={i === 0 ? 0 : 16} key={i}>{line}</tspan>
                      ))}
                    </text>
                  );
                }}
                axisLine={{ stroke: "#E0DEDA" }}
                tickLine={false}
                interval={0}
                height={56}
              />
              <YAxis
                domain={[0, 400]}
                tick={{ fontSize: 16, fill: "#A29E9B", fontFamily: "'Space Grotesk', sans-serif" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v: number) => `$${v}M`}
              />
              <ReferenceLine
                y={RV.subscriptionTarget}
                stroke="#6C6967"
                strokeDasharray="6 4"
                strokeWidth={2}
                label={{
                  value: `$${RV.subscriptionTarget}M target`,
                  position: "insideTopLeft",
                  fill: "#6C6967",
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
                  style={{ fontSize: 18, fontWeight: 700, fill: "#1A447C", fontFamily: "'Space Grotesk', sans-serif" }}
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
                        stroke="#A29E9B"
                        strokeWidth={1.5}
                        strokeDasharray="5 4"
                        opacity={0.5}
                      />
                      <text
                        x={x + 10} y={yBottom + 72}
                        fontSize={12} fill="#A29E9B" fontFamily="'Space Grotesk', sans-serif"
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
            className="card"
            style={{
              padding: "24px 28px",
              textAlign: "center",
              border: "2px solid #2860B2",
              boxShadow: "0 4px 16px rgba(40,96,178,0.1)",
            }}
          >
            <p className="font-body" style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#2860B2", margin: 0 }}>
              FY27 Subscription Revenue at Risk
            </p>
            <p className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#1A447C", margin: "6px 0 0", lineHeight: 1 }}>
              Only {RV.gapPct}%
            </p>
            <p style={{ fontSize: 18, color: "#6C6967", margin: "6px 0 0" }}>
              ${RV.gap}M gap to plan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="card"
            style={{ padding: "24px 28px", textAlign: "center" }}
          >
            <p className="font-body" style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#A29E9B", margin: 0 }}>
              FY27 Subscription Revenue Target
            </p>
            <p className="font-heading" style={{ fontSize: 44, fontWeight: 700, color: "#1A447C", margin: "6px 0 0", lineHeight: 1 }}>
              ${RV.subscriptionTarget}M
            </p>
            <p style={{ fontSize: 18, color: "#6C6967", margin: "6px 0 0" }}>
              vs ${RV.buildUp}M visibility build-up
            </p>
          </motion.div>

          <p style={{ fontSize: 13, color: "#A29E9B", lineHeight: 1.5, margin: "4px 0 0" }}>
            Contracted = under term through FY27. Monthly renewals net of churn. Expansion bookings per model. Contract net renewals net of attrition.
          </p>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
