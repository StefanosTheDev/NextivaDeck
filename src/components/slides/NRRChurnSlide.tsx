"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { RETENTION } from "../financialData";

const cards = [
  {
    label: "Net revenue retention",
    from: `${RETENTION.nrr.FY25}%`,
    to: `${RETENTION.nrr.FY27}%`,
    direction: "up" as const,
    detail: "Expanding through upsell and cross-sell",
  },
  {
    label: "MRR Churn",
    from: `${RETENTION.mrrChurn.FY25}%`,
    to: `${RETENTION.mrrChurn.FY27}%`,
    direction: "down" as const,
    detail: "Revenue churn declining",
  },
];

export default function NRRChurnSlide({ slideNumber = 26 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)" }}>
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#CCC7C3", margin: "0 0 10px" }}>Retention trends</p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 400, color: "#FFFFFF", marginTop: 10, lineHeight: 1.15 }}>
          Churn and Retention both improving across segments.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", gap: 32, padding: "48px 100px", alignItems: "center" }}
      >
        {cards.map((c, i) => (
          <motion.article
            key={c.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            style={{ flex: 1, padding: "72px 48px", textAlign: "center" as const, display: "flex", flexDirection: "column" as const, justifyContent: "center", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderTop: "3px solid #2860B2", borderRadius: 16 }}
          >
            <p style={{ fontSize: 20, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#7EB3E8", margin: 0 }}>{c.label}</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, margin: "24px 0" }}>
              <span className="font-heading" style={{ fontSize: 56, fontWeight: 700, color: "rgba(255,255,255,0.35)" }}>{c.from}</span>
              <span style={{ fontSize: 40, color: c.direction === "up" ? "#4CAF50" : "#7EB3E8" }}>
                {c.direction === "up" ? "\u2191" : "\u2193"}
              </span>
              <span className="font-heading" style={{ fontSize: 56, fontWeight: 700, color: "#FFFFFF" }}>{c.to}</span>
            </div>
            <p style={{ fontSize: 16, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: 0 }}>FY25 → FY27</p>
            <p style={{ fontSize: 20, color: "rgba(255,255,255,0.5)", margin: "14px 0 0", lineHeight: 1.5 }}>{c.detail}</p>
          </motion.article>
        ))}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
