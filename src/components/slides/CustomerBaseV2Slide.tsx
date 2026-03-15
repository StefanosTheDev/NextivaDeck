"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { MILESTONES, RETENTION } from "../financialData";

const rightMetrics = [
  { stat: MILESTONES.topCustomerPctARR, label: "Top customer share of ARR — no concentration" },
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

export default function CustomerBaseV2Slide({ slideNumber = 30 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)" }}>
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0 }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#7EB3E8", margin: "0 0 10px" }}>Our Customers</p>
        <h1 className="font-heading" style={{ fontSize: 64, fontWeight: 700, color: "#FFFFFF", marginTop: 10, lineHeight: 1.15 }}>
          A diversified, sticky<br />customer base.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "28px 100px 0", display: "flex", gap: 56 }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <p className="font-body" style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.5)", margin: "0 0 20px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Industry distribution</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {industries.map((ind) => (
              <div key={ind.name}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                  <span style={{ fontSize: 19, color: "rgba(255,255,255,0.55)" }}>{ind.name}</span>
                  <span style={{ fontSize: 19, fontWeight: 700, color: "#FFFFFF", marginLeft: 12 }}>{ind.pct}%</span>
                </div>
                <div style={{ width: "100%", height: 8, background: "rgba(255,255,255,0.08)", borderRadius: 4 }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${ind.pct * 3.5}%` }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    style={{ height: "100%", background: "#2860B2", borderRadius: 4 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
          {rightMetrics.map((m, i) => (
            <motion.article
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              style={{
                padding: "24px 28px",
                display: "flex",
                alignItems: "baseline",
                gap: 20,
                background: "rgba(12, 30, 62, 0.5)",
                border: "1px solid rgba(40, 96, 178, 0.3)",
                borderRadius: 14,
              }}
            >
              <span className="font-heading" style={{ fontSize: 44, fontWeight: 700, color: "#7EB3E8", minWidth: 110, flexShrink: 0 }}>{m.stat}</span>
              <span style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>{m.label}</span>
            </motion.article>
          ))}
        </div>
      </motion.main>

      <div style={{ padding: "0 100px 0", flexShrink: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
          style={{ background: "rgba(40,96,178,0.10)", border: "1px solid rgba(40,96,178,0.25)", borderRadius: 12, padding: "20px 32px", width: "100%" }}
        >
          <p style={{ fontSize: 22, color: "#FFFFFF", margin: 0, lineHeight: 1.5, textAlign: "center" }}>
            <span style={{ fontWeight: 700, color: "#7EB3E8" }}>Market-agnostic.</span>{" "}
            Customer diversity by size, industry, and tenure reinforces credit durability.
          </p>
        </motion.div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
