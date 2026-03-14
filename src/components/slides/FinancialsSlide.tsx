"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { PNL, RETENTION } from "../financialData";

const rows = [
  { label: "Revenue", fy25: `$${PNL.revenue.FY25}M`, fy26: `$${PNL.revenue.FY26}M`, fy27: `$${PNL.revenue.FY27}M` },
  { label: "Gross Margin", fy25: `${PNL.grossMarginPct.FY25}%`, fy26: `${PNL.grossMarginPct.FY26}%`, fy27: `${PNL.grossMarginPct.FY27}%` },
  { label: "Adj EBITDA", fy25: `$${PNL.adjEBITDA.FY25}M`, fy26: `$${PNL.adjEBITDA.FY26}M`, fy27: `$${PNL.adjEBITDA.FY27}M` },
  { label: "EBITDA Margin", fy25: `${PNL.ebitdaMarginPct.FY25}%`, fy26: `${PNL.ebitdaMarginPct.FY26}%`, fy27: `${PNL.ebitdaMarginPct.FY27}%` },
  { label: "Free Cash Flow", fy25: `$${PNL.fcf.FY25}M`, fy26: `$${PNL.fcf.FY26}M`, fy27: `$${PNL.fcf.FY27}M` },
];

const kpis = [
  { stat: "96%", label: "Recurring revenue" },
  { stat: `~${RETENTION.mrrChurn.FY26}%`, label: "MRR churn" },
  { stat: `${PNL.revCAGR_26_30}%`, label: "Revenue CAGR '26–'30" },
];

export default function FinancialsSlide({ slideNumber = 15 }: { slideNumber?: number }) {
  return (
    <div className="slide slide--cream">
      <div style={{ height: 3, background: "#2860B2", flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p className="eyebrow">Financial performance</p>
        <h1 className="font-heading" style={{ fontSize: 64, fontWeight: 700, color: "#1A447C", marginTop: 10, lineHeight: 1.15 }}>
          Disciplined growth. Expanding margins.
        </h1>
      </motion.header>

      <main style={{ flex: 1, padding: "36px 100px 0", display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ background: "#FFFFFF", border: "1px solid #E0DEDA", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "20px 40px", background: "#061A37", color: "#FFFFFF" }}>
            <span style={{ fontSize: 17, fontWeight: 700 }}>Metric</span>
            <span style={{ fontSize: 17, fontWeight: 700, textAlign: "right" }}>FY25</span>
            <span style={{ fontSize: 17, fontWeight: 700, textAlign: "right" }}>FY26</span>
            <span style={{ fontSize: 17, fontWeight: 700, textAlign: "right", color: "#6194B5" }}>FY27E</span>
          </div>
          {rows.map((r, i) => (
            <div key={r.label} style={{
              display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "18px 40px",
              borderBottom: i < rows.length - 1 ? "1px solid #E0DEDA" : "none",
              background: i % 2 === 0 ? "#FFFFFF" : "#FEFAF5",
            }}>
              <span style={{ fontSize: 20, fontWeight: 600, color: "#1A447C" }}>{r.label}</span>
              <span style={{ fontSize: 20, textAlign: "right", color: "#4A4846" }}>{r.fy25}</span>
              <span style={{ fontSize: 20, textAlign: "right", color: "#4A4846" }}>{r.fy26}</span>
              <span style={{ fontSize: 20, fontWeight: 700, textAlign: "right", color: "#1A447C" }}>{r.fy27}</span>
            </div>
          ))}
        </motion.div>

        {/* KPI row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
          style={{ display: "flex", gap: 20 }}
        >
          {kpis.map((k) => (
            <div key={k.label} className="card" style={{ flex: 1, padding: "28px 32px", textAlign: "center" }}>
              <h3 className="font-body" style={{ fontSize: 44, fontWeight: 700, color: "#2860B2", margin: 0 }}>{k.stat}</h3>
              <p style={{ fontSize: 16, color: "#6C6967", marginTop: 6 }}>{k.label}</p>
            </div>
          ))}
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
