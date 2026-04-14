"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const columns = [
  {
    title: "Predictable",
    stats: ["$353M revenue", "96% recurring", "86% on 12mo+ contracts"],
  },
  {
    title: "Sticky",
    stats: ["93K+ customers", "~1.6% MRR churn", "0.6% max concentration"],
  },
  {
    title: "Expanding",
    stats: ["70% gross margin", "$45M adj EBITDA", "27% EBITDA margin by FY27"],
  },
  {
    title: "Disciplined",
    stats: ["Deep Bench since 2006", "$250M bootstrapped", "Goldman Sachs invested"],
  },
];

export default function SummarySlide({ slideNumber = 17 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 60%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ position: "relative", zIndex: 1, padding: "56px 100px", width: "100%" }}>
        <header style={{ textAlign: "center", marginBottom: 48 }}>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ fontWeight: 700, fontSize: 20, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
            Investment thesis
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading"
            style={{ fontSize: 68, fontWeight: 500, color: "#FFFFFF", marginTop: 12, lineHeight: 1.15 }}>
            Why Nextiva.
          </motion.h1>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                borderTop: "3px solid #2860B2",
                borderRadius: 16, padding: "36px 28px",
              }}
            >
              <h3 className="font-heading" style={{ fontSize: 32, fontWeight: 700, color: "#FFFFFF", marginBottom: 20 }}>
                {col.title}
              </h3>
              <div style={{ width: 32, height: 2, background: "#2860B2", borderRadius: 1, marginBottom: 20 }} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.stats.map((s) => (
                  <li key={s} style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 8, paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#2860B2" }}>•</span>
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
