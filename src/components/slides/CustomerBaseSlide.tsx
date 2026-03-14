"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { MILESTONES, RETENTION } from "../financialData";

const rightMetrics = [
  { stat: MILESTONES.topCustomerPctARR, label: "Top customer share of ARR \u2014 no concentration" },
  { stat: `${Math.round(RETENTION.totalAccounts.FY26 / 1000)}K+`, label: "Accounts, all US" },
  { stat: `${RETENTION.pctIn12moContracts}%`, label: "In 12mo+ contracts" },
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

export default function CustomerBaseSlide({ slideNumber = 30 }: { slideNumber?: number }) {
  return (
    <div className="slide slide--cream">
      <div style={{ height: 3, background: "#2860B2", flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "64px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p className="eyebrow">Customers</p>
        <h1 className="font-heading" style={{ fontSize: 64, fontWeight: 700, color: "#1A447C", marginTop: 10, lineHeight: 1.15 }}>
          A diversified, sticky customer base.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ padding: "28px 100px 0", display: "flex", gap: 48 }}
      >
        <div style={{ flex: 1 }}>
          <p className="font-body" style={{ fontSize: 18, fontWeight: 600, color: "#2E2D2C", margin: "0 0 18px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Industry distribution</p>
          {industries.map((ind) => (
            <div key={ind.name} style={{ marginBottom: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 20, color: "#4A4846" }}>{ind.name}</span>
                <span style={{ fontSize: 20, fontWeight: 600, color: "#1A447C" }}>{ind.pct}%</span>
              </div>
              <div style={{ width: "100%", height: 12, background: "#E0DEDA", borderRadius: 6 }}>
                <div style={{ width: `${ind.pct * 3}%`, height: "100%", background: "#2860B2", borderRadius: 6 }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          {rightMetrics.map((m, i) => (
            <motion.article
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="card"
              style={{ padding: "22px 28px", display: "flex", alignItems: "baseline", gap: 18 }}
            >
              <span className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#1A447C", minWidth: 100 }}>{m.stat}</span>
              <span style={{ fontSize: 20, color: "#4A4846", lineHeight: 1.4 }}>{m.label}</span>
            </motion.article>
          ))}
        </div>
      </motion.main>

      <div style={{ flex: 1, padding: "0 100px", display: "flex", alignItems: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
          style={{ background: "#E0DEDA", borderRadius: 12, padding: "22px 32px", width: "100%" }}
        >
          <p style={{ fontSize: 24, color: "#4A4846", margin: 0, lineHeight: 1.5, textAlign: "center" }}>
            Market-agnostic. Customer diversity by size, industry, and tenure reinforces credit durability.
          </p>
        </motion.div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
