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
    label: "Logo Churn",
    from: `${RETENTION.logoChurn.FY25}%`,
    to: `${RETENTION.logoChurn.FY27}%`,
    direction: "down" as const,
    detail: "Improving customer retention",
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
    <div className="slide slide--cream">
      <div style={{ height: 3, background: "#2860B2", flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "64px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p className="eyebrow">Retention trends</p>
        <h1 className="font-heading" style={{ fontSize: 64, fontWeight: 700, color: "#1A447C", marginTop: 10, lineHeight: 1.15 }}>
          Retention improving across every metric.
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
            className="card card--accent"
            style={{
              flex: 1,
              padding: "72px 48px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p className="font-body" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#2860B2", margin: 0 }}>{c.label}</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, margin: "24px 0" }}>
              <span className="font-heading" style={{ fontSize: 56, fontWeight: 700, color: "#A29E9B" }}>{c.from}</span>
              <span style={{ fontSize: 40, color: c.direction === "up" ? "#2E7D32" : "#2860B2" }}>
                {c.direction === "up" ? "\u2191" : "\u2193"}
              </span>
              <span className="font-heading" style={{ fontSize: 56, fontWeight: 700, color: "#1A447C" }}>{c.to}</span>
            </div>
            <p className="font-body" style={{ fontSize: 16, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "#A29E9B", margin: 0 }}>FY25 → FY27</p>
            <p style={{ fontSize: 20, color: "#4A4846", margin: "14px 0 0", lineHeight: 1.5 }}>{c.detail}</p>
          </motion.article>
        ))}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
