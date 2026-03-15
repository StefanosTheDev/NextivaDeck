"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const industries = [
  { name: "Business, Professional & Legal Services", pct: 22 },
  { name: "Healthcare & Life Sciences", pct: 16 },
  { name: "Construction & Real Estate", pct: 14 },
  { name: "Financial Services & Insurance", pct: 12 },
  { name: "Retail & Consumer Goods", pct: 10 },
  { name: "Manufacturing & Industrial", pct: 9 },
  { name: "Other industries", pct: 17 },
];

export default function ScaleSlide({ slideNumber = 6 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "72px 100px 0", flexShrink: 0 }}
      >
        <p style={{ fontWeight: 700, fontSize: 20, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          OUR CUSTOMERS
        </p>
        <h1 className="font-heading" style={{ fontSize: 60, fontWeight: 500, color: "#FFFFFF", margin: "12px 0 0", lineHeight: 1.15 }}>
          A diversified, sticky customer base.
        </h1>
      </motion.header>

      <main style={{ flex: 1, padding: "36px 100px 0", display: "flex", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ width: "100%", maxWidth: 900 }}
        >
          <p style={{ fontSize: 18, fontWeight: 700, color: "#CCC7C3", margin: "0 0 24px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            INDUSTRY DISTRIBUTION
          </p>
          {industries.map((ind) => (
            <div key={ind.name} style={{ marginBottom: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 22, color: "rgba(255,255,255,0.7)" }}>{ind.name}</span>
                <span style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF" }}>{ind.pct}%</span>
              </div>
              <div style={{ width: "100%", height: 12, background: "rgba(255,255,255,0.08)", borderRadius: 6 }}>
                <div style={{ width: `${ind.pct * 3}%`, height: "100%", background: "#2860B2", borderRadius: 6 }} />
              </div>
            </div>
          ))}
        </motion.div>
      </main>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
        style={{ padding: "0 100px" }}
      >
        <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: "22px 36px", width: "100%" }}>
          <p style={{ fontSize: 26, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.5, textAlign: "center" }}>
            <span style={{ color: "#CCC7C3", fontWeight: 700 }}>Market-agnostic.</span>{" "}
            Customer diversity by size, industry, and tenure reinforces credit durability.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
