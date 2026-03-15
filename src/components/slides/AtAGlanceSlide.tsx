"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { PNL, RETENTION } from "../financialData";

const metrics = [
  { stat: "$353M", label: "FY26 Revenue", desc: "Full year recognized revenue" },
  { stat: `${PNL.grossMarginPct.FY26}%`, label: "Q4 FY26 Gross Margin", desc: `Up ~${PNL.grossMarginPct.FY26 - PNL.grossMarginPct.FY25}00bps y/y` },
  { stat: "$44M", label: "Adj EBITDA", desc: "FY26 projected" },
  { stat: "$99M", label: "Adj EBITDA", desc: "FY27 projected" },
  { stat: `~${RETENTION.mrrChurn.FY26}%`, label: "MRR churn", desc: "Durable SMB retention" },
  { stat: "92K+", label: "Customers", desc: "All US, all industries" },
  { stat: "$15M", label: "FY26 FCF", desc: "FY26 projected" },
  { stat: "$83M", label: "FY27 FCF", desc: "FY27 projected" },
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
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px" }}>At a glance</p>
        <h1 className="font-heading" style={{ fontSize: 80, fontWeight: 700, color: "#FFFFFF", margin: "12px 0 0", lineHeight: 1.15 }}>
          Nextiva at a glance.
        </h1>
        <p style={{ fontSize: 28, color: "rgba(255,255,255,0.45)", margin: "12px 0 0", lineHeight: 1.4 }}>
          A durable, profitable, founder-led software business.
        </p>
      </motion.header>

      <main style={{ flex: 1, padding: "32px 100px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gap: 24, alignContent: "center" }}>
        {metrics.map((m, i) => (
          <motion.article
            key={m.label + m.desc}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: 16,
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 style={{ fontSize: m.stat.length > 6 ? 48 : 72, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.1 }}>
              {m.stat}
            </h2>
            <p style={{ fontSize: 22, fontWeight: 700, color: "#7EB3E8", margin: "8px 0 0", lineHeight: 1.3 }}>
              {m.label}
            </p>
            <p style={{ fontSize: 18, fontWeight: 400, color: "rgba(255,255,255,0.45)", margin: "4px 0 0", lineHeight: 1.3 }}>
              {m.desc}
            </p>
          </motion.article>
        ))}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
