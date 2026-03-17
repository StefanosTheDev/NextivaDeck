"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const columns = [
  { label: "Metric" },
  { label: "FY26" },
  { label: "FY27" },
  { label: "FY30 Target", highlight: true },
];

const rows = [
  { cells: ["Revenue", "$353M", "$373M", "$454\u2013$472M"] },
  { cells: ["Gross Margin", "70%", "73%", "75\u201379%"] },
  { cells: ["S&M", "27%", "23%", "14\u201318%"] },
  { cells: ["R&D", "12%", "9%", "8\u201312%"] },
  { cells: ["G&A", "13%", "10%", "5\u20139%"] },
  { cells: ["Adj EBITDA Margin", "13%", "25%", "38\u201342%"], bold: true },
];

export default function TargetModelSlide({ slideNumber = 28 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)" }}>
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#CCC7C3", margin: "0 0 10px" }}>Target model</p>
        <h1 className="font-heading" style={{ fontSize: 64, fontWeight: 700, color: "#FFFFFF", marginTop: 10, lineHeight: 1.15 }}>
          Near-term trajectory, long-term target.
        </h1>
      </motion.header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 100px", gap: 24 }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, overflow: "hidden" }}
        >
          <div style={{ display: "flex", padding: "20px 40px", background: "rgba(10,35,70,0.5)", color: "#FFFFFF" }}>
            {columns.map((col, i) => (
              <div
                key={i}
                style={{
                  flex: i === 0 ? 2 : 1,
                  fontSize: 17,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: i === 0 ? "rgba(184,168,107,0.95)" : col.highlight ? "#7EB3E8" : "rgba(255,255,255,0.85)",
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
                background: r.bold ? "rgba(232,184,77,0.06)" : i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
              }}
            >
              {r.cells.map((cell, ci) => (
                <div
                  key={ci}
                  style={{
                    flex: ci === 0 ? 2 : 1,
                    fontSize: 20,
                    fontWeight: ci === 0 && r.bold ? 600 : ci === 0 ? 500 : 400,
                    color: ci === 0
                      ? r.bold
                        ? "rgba(232,184,77,0.9)"
                        : "rgba(255,255,255,0.55)"
                      : "rgba(255,255,255,0.6)",
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
