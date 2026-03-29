"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const metrics = [
  { stat: "$353M", label: "FY26 Revenue", desc: "Full year recognized revenue" },
  { stat: "70%", label: "Q4 FY26 Gross Margin", desc: "Up ~300bps y/y" },
  { stat: "$44M", label: "Adj EBITDA", desc: "FY26 projected" },
  { stat: "$94M", label: "Pro forma Adj EBITDA", desc: "FY27 projected" },
  { stat: "93%", label: "Net Revenue Retention", desc: "FY26 Q3" },
  { stat: "92K+", label: "Customers", desc: "All US, all industries" },
  { stat: "$15M", label: "FY26 FCF", desc: "projected" },
  { stat: "$75M", label: "Pro forma FY27 FCF", desc: "projected" },
];

export default function AtAGlanceSlide({ slideNumber = 3 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "72px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px" }}>AT A GLANCE</p>
        <h1 className="font-heading" style={{ fontSize: 60, fontWeight: 500, color: "#FFFFFF", margin: "12px 0 0", lineHeight: 1.15 }}>
          Nextiva at a glance.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", margin: "12px 0 0", lineHeight: 1.4 }}>
          A durable, profitable and scaled platform with embedded distribution advantage
        </p>
      </motion.header>

      <main style={{ flex: 1, padding: "28px 100px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gap: 18, alignContent: "center" }}>
        {metrics.map((m, i) => (
          <motion.article
            key={m.label + m.desc}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 className="font-heading" style={{ fontSize: m.stat.length > 6 ? 40 : 56, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.1 }}>
              {m.stat}
            </h2>
            <p style={{ fontSize: 18, fontWeight: 600, color: "#7EB3E8", margin: "6px 0 0", lineHeight: 1.3 }}>
              {m.label}
            </p>
            <p style={{ fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.5)", margin: "2px 0 0", lineHeight: 1.3 }}>
              {m.desc}
            </p>
          </motion.article>
        ))}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
