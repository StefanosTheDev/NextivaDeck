"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { PNL, OPEX_PCT } from "../financialData";

const columns = [
  { label: "Metric" },
  { label: "FY26" },
  { label: "FY27" },
  { label: "FY30 Target", highlight: true },
];

const rows = [
  { cells: ["Revenue", `$${PNL.revenue.FY26}M`, `$${PNL.revenue.FY27}M`, `$${PNL.revenue.FY30 - 9}\u2013${PNL.revenue.FY30 + 9}M`] },
  { cells: ["Gross Margin", `${PNL.grossMarginPct.FY26}%`, `${PNL.grossMarginPct.FY27}%`, `${PNL.grossMarginPct.FY30 - 2}\u2013${PNL.grossMarginPct.FY30 + 2}%`] },
  { cells: ["S&M", `${OPEX_PCT.sm.FY26}%`, `${OPEX_PCT.sm.FY27}%`, `${OPEX_PCT.sm.FY30 - 2}\u2013${OPEX_PCT.sm.FY30 + 2}%`] },
  { cells: ["R&D", `${OPEX_PCT.rd.FY26}%`, `${OPEX_PCT.rd.FY27}%`, `${OPEX_PCT.rd.FY30 - 2}\u2013${OPEX_PCT.rd.FY30 + 2}%`] },
  { cells: ["G&A", `${OPEX_PCT.ga.FY26}%`, `${OPEX_PCT.ga.FY27}%`, `${OPEX_PCT.ga.FY30 - 2}\u2013${OPEX_PCT.ga.FY30 + 2}%`] },
  { cells: ["Adj EBITDA Margin", `${PNL.ebitdaMarginPct.FY26}%`, `${PNL.ebitdaMarginPct.FY27}%`, `${PNL.ebitdaMarginPct.FY30 - 2}\u2013${PNL.ebitdaMarginPct.FY30 + 2}%`], bold: true },
];

export default function TargetModelSlide({ slideNumber = 28 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)" }}>
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#CCC7C3", margin: "0 0 10px" }}>Target model</p>
        <h1 className="font-heading" style={{ fontSize: 60, fontWeight: 500, color: "#FFFFFF", marginTop: 10, lineHeight: 1.15 }}>
          Near-term trajectory, long-term target.
        </h1>
      </motion.header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 100px", gap: 24 }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, overflow: "hidden" }}
        >
          <div style={{ display: "flex", padding: "20px 40px", background: "#061A37", color: "#FFFFFF" }}>
            {columns.map((col, i) => (
              <div
                key={i}
                style={{
                  flex: i === 0 ? 2 : 1,
                  fontSize: 17,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: col.highlight ? "#6194B5" : "#FFFFFF",
                  textAlign: i === 0 ? "left" : "right",
                }}
              >
                {col.label}
              </div>
            ))}
          </div>

          {rows.map((r, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                padding: "18px 40px",
                borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                background: r.bold ? "rgba(40,96,178,0.08)" : i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
              }}
            >
              {r.cells.map((cell, ci) => (
                <div
                  key={ci}
                  style={{
                    flex: ci === 0 ? 2 : 1,
                    fontSize: 20,
                    fontWeight: ci === 0 && r.bold ? 700 : ci === 0 ? 600 : 400,
                    color: ci === 0 ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                    textAlign: ci === 0 ? "left" : "right",
                  }}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
