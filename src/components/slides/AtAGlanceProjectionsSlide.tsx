"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { PNL } from "../financialData";

const projectionYears = ["FY26", "FY27", "FY28", "FY30"] as const;

const metrics = [
  { stat: "$353M", label: "FY26 Revenue", desc: "Full year recognized revenue" },
  { stat: "70%", label: "Q4 FY26 Gross Margin", desc: "Up ~300bps y/y" },
  { stat: "$44M", label: "Adj EBITDA", desc: "FY26 projected" },
  { stat: "$99M", label: "Adj EBITDA", desc: "FY27 projected" },
  { stat: "~1.6%", label: "MRR churn", desc: "Durable SMB retention" },
  { stat: "92K+", label: "Customers", desc: "All US, all industries" },
  { stat: "$15M", label: "FY26 FCF", desc: "FY26 projected" },
  { stat: "$83M", label: "FY27 FCF", desc: "FY27 projected" },
];

export default function AtAGlanceProjectionsSlide({ slideNumber = 4 }: { slideNumber?: number }) {
  return (
    <div className="slide slide--dark">
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "44px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p className="eyebrow eyebrow--light">At a glance</p>
        <h1 className="font-heading" style={{ fontSize: 60, fontWeight: 500, color: "#FFFFFF", margin: "8px 0 0", lineHeight: 1.15 }}>
          Nextiva at a glance.
        </h1>
        <p style={{ fontSize: 24, color: "rgba(255,255,255,0.55)", margin: "8px 0 0", lineHeight: 1.4 }}>
          A durable, profitable, founder-led software business.
        </p>
      </motion.header>

      <main style={{ flex: 1, padding: "16px 100px 8px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gap: 16, alignContent: "center" }}>
        {metrics.map((m, i) => (
          <motion.article
            key={`${m.label}-${m.desc}`}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
            style={{
              background: "rgba(12, 30, 62, 0.6)",
              border: "1px solid rgba(40, 96, 178, 0.35)",
              borderRadius: 16,
              padding: "24px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 style={{ fontSize: m.stat.length > 6 ? 38 : 54, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.1 }}>
              {m.stat}
            </h2>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#7EB4E8", margin: "5px 0 0", lineHeight: 1.3 }}>
              {m.label}
            </p>
            <p style={{ fontSize: 15, fontWeight: 400, color: "rgba(255,255,255,0.45)", margin: "3px 0 0", lineHeight: 1.3 }}>
              {m.desc}
            </p>
          </motion.article>
        ))}
      </main>

      <motion.section
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{ flexShrink: 0, padding: "0 100px 10px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}
      >
        {projectionYears.map((fy) => {
          const rev = PNL.revenue[fy];
          const ebitda = PNL.adjEBITDA[fy];
          const margin = PNL.ebitdaMarginPct[fy];
          return (
            <div
              key={fy}
              style={{
                border: "1px solid rgba(40, 96, 178, 0.35)",
                borderRadius: 10,
                padding: "10px 20px",
              }}
            >
              <p style={{ fontSize: 13, fontWeight: 700, color: "#7EB4E8", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0, lineHeight: 1.3 }}>
                {fy}
              </p>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: "3px 0 0", lineHeight: 1.3 }}>
                ${rev}M &rarr; ${ebitda}M
              </p>
              <p style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.4)", margin: "2px 0 0", lineHeight: 1.3 }}>
                {margin}% EBITDA margin
              </p>
            </div>
          );
        })}
      </motion.section>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
