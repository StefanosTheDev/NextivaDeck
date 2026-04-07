"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { MILESTONES, RETENTION } from "../financialData";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const rightMetrics = [
  { stat: MILESTONES.topCustomerPctARR, label: "Top customer share of ARR — no concentration" },
  { stat: `${Math.round(RETENTION.totalAccounts.FY26 / 1000)}K+`, label: "Accounts, all US" },
  { stat: `${RETENTION.pctIn12moContracts}%`, label: "In multi-year contracts" },
  { stat: `${MILESTONES.pctSeatBased}%`, label: "Subscription Recurring Revenue" },
];

const industries = [
  { name: "Business, Professional & Legal Services", pct: 22 },
  { name: "Healthcare & Life Sciences", pct: 16 },
  { name: "Construction & Real Estate", pct: 14 },
  { name: "Financial Services & Insurance", pct: 12 },
  { name: "Retail & Consumer Goods", pct: 10 },
  { name: "Manufacturing & Industrial", pct: 9 },
  { name: "Other industries", pct: 17 },
];

const SLICE_COLORS = [
  "#2860B2",
  "#4A9EF2",
  "#5FB8D0",
  "#7EB3E8",
  "#3D7AB8",
  "#6B9AC4",
  "#9BB5CC",
];

const pieData = industries.map((ind) => ({ name: ind.name, value: ind.pct }));

export default function CustomerBaseLovablePieSlide({ slideNumber = 50 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          CUSTOMERS
        </p>
        <h1 className="font-heading" style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}>
          A diversified, sticky customer base.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ padding: "0 100px", display: "flex", gap: 48, flex: 1, alignItems: "center", minHeight: 0 }}
      >
        <div style={{ flex: 1, display: "flex", gap: 36, alignItems: "center", minWidth: 0 }}>
          <div style={{ flex: "1 1 52%", minWidth: 280, display: "flex", flexDirection: "column" }}>
            <p
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#9BB5CC",
                margin: "0 0 12px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Industry distribution
            </p>
            <div style={{ width: "100%", height: 360 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius="54%"
                  outerRadius="92%"
                  paddingAngle={2}
                  stroke="#050a12"
                  strokeWidth={2}
                >
                  {industries.map((ind, i) => (
                    <Cell key={ind.name} fill={SLICE_COLORS[i % SLICE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value ?? ""}%`, "Share"]}
                  contentStyle={{
                    background: "rgba(10,14,24,0.94)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 10,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 14,
                  }}
                  labelStyle={{ color: "#fff", fontWeight: 600, marginBottom: 4 }}
                  itemStyle={{ color: "rgba(255,255,255,0.9)" }}
                />
              </PieChart>
            </ResponsiveContainer>
            </div>
          </div>

          <div
            style={{
              flex: "1 1 48%",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              minWidth: 0,
              maxHeight: 400,
              overflowY: "auto",
              paddingRight: 4,
            }}
          >
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 3,
                    flexShrink: 0,
                    marginTop: 5,
                    background: SLICE_COLORS[i % SLICE_COLORS.length],
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.35 }}>{ind.name}</div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", marginTop: 2 }}>{ind.pct}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, minWidth: 0 }}>
          {rightMetrics.map((m, i) => (
            <motion.article
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderLeft: "4px solid #9BB5CC",
                borderRadius: 14,
                padding: "18px 28px",
                display: "flex",
                alignItems: "baseline",
                gap: 18,
              }}
            >
              <span className="font-heading" style={{ fontSize: 46, fontWeight: 700, color: "#FFFFFF", minWidth: 110 }}>
                {m.stat}
              </span>
              <span style={{ fontSize: 20, color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>{m.label}</span>
            </motion.article>
          ))}
        </div>
      </motion.main>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{ padding: "16px 100px 24px" }}
      >
        <div
          style={{
            background: "rgba(40,96,178,0.12)",
            border: "1px solid rgba(40,96,178,0.2)",
            borderRadius: 14,
            padding: "18px 36px",
            width: "100%",
          }}
        >
          <p style={{ fontSize: 20, color: "#FFFFFF", margin: 0, lineHeight: 1.5, textAlign: "center" }}>
            <span style={{ color: "#9BB5CC" }}>Market-agnostic.</span> Customer diversity by size, industry, and tenure reinforces credit durability.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
