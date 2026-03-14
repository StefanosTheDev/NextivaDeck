"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ARR, PNL, RETENTION, BALANCE_SHEET, MILESTONES } from "../financialData";

const metrics = [
  { stat: `$${ARR.FY26}M`, label: "ARR", desc: "Annual recurring revenue" },
  { stat: `${PNL.grossMarginPct.FY26}%`, label: "Gross margin", desc: `Up ~${PNL.grossMarginPct.FY26 - PNL.grossMarginPct.FY25}00bps y/y` },
  { stat: `$${PNL.adjEBITDA.FY26}M`, label: "Adj EBITDA", desc: "FY26 projected" },
  { stat: `${Math.round(RETENTION.totalAccounts.FY26 / 1000)}K+`, label: "Customers", desc: "All US, all industries" },
  { stat: `~${RETENTION.mrrChurn.FY26}%`, label: "MRR churn", desc: "Durable SMB retention" },
  { stat: `${RETENTION.pctIn12moContracts}%`, label: "In 12mo+ contracts", desc: "High revenue visibility" },
  { stat: `${MILESTONES.pctSeatBased}%`, label: "Seat-based subscriptions", desc: "Before any usage billing" },
  { stat: `$${BALANCE_SHEET.cash}M`, label: "Cash", desc: `Net debt $${BALANCE_SHEET.netDebt}M` },
];

export default function AtAGlanceSlide({ slideNumber = 3 }: { slideNumber?: number }) {
  return (
    <div className="slide slide--cream">
      <div style={{ height: 3, background: "#2860B2", flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "72px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p className="eyebrow">At a glance</p>
        <h1 className="font-heading" style={{ fontSize: 80, fontWeight: 700, color: "#1A447C", margin: "12px 0 0", lineHeight: 1.15 }}>
          Nextiva at a glance.
        </h1>
        <p style={{ fontSize: 28, color: "#4A4846", margin: "12px 0 0", lineHeight: 1.4 }}>
          A durable, profitable, founder-led software business.
        </p>
      </motion.header>

      <main style={{ flex: 1, padding: "32px 100px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gap: 24, alignContent: "center" }}>
        {metrics.map((m, i) => (
          <motion.article
            key={m.label}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E0DEDA",
              borderRadius: 16,
              padding: "40px 32px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 style={{ fontSize: m.stat.length > 6 ? 48 : 72, fontWeight: 700, color: "#1A447C", margin: 0, lineHeight: 1.1 }}>
              {m.stat}
            </h2>
            <p style={{ fontSize: 22, fontWeight: 700, color: "#1A447C", margin: "8px 0 0", lineHeight: 1.3 }}>
              {m.label}
            </p>
            <p style={{ fontSize: 18, fontWeight: 400, color: "#4A4846", margin: "4px 0 0", lineHeight: 1.3 }}>
              {m.desc}
            </p>
          </motion.article>
        ))}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
