"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { PNL, FISCAL_YEARS } from "../financialData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList } from "recharts";

const fmt = (v: number) => `${Math.round(v)}`;

const data = FISCAL_YEARS.map((fy) => ({ name: fy, ebitda: PNL.adjEBITDA[fy] }));

const metrics = [
  { value: `$${fmt(PNL.adjEBITDA.FY26)}M`, label: "Adj EBITDA (FY26)", detail: "Up from breakeven in FY25" },
  { value: "$75\u2013$80M", label: "FY26 Exit EBITDA Run Rate", detail: "Range reflects items still to be actioned", highlight: true },
  { value: `${PNL.ebitdaMarginPct.FY30}%`, label: "Target Margin (FY30)", detail: `$${fmt(PNL.adjEBITDA.FY30)}M Adj EBITDA` },
];

export default function EBITDASlide({ slideNumber = 25 }: { slideNumber?: number }) {
  return (
    <div className="slide slide--cream">
      <div style={{ height: 3, background: "#2860B2", flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p className="eyebrow">Profitability</p>
        <h1 className="font-heading" style={{ fontSize: 64, fontWeight: 700, color: "#1A447C", marginTop: 10, lineHeight: 1.15 }}>
          Margin improves from breakeven to 22% by Q4
        </h1>
        <p className="font-body" style={{ fontSize: 22, color: "#4A4846", marginTop: 10, lineHeight: 1.5 }}>
          $75–$80M FY26 exit run rate provides near-term underwriting comfort.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "24px 100px 0", display: "flex", gap: 36 }}
      >
        <div style={{ flex: 55, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={data} margin={{ top: 24, right: 20, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0DEDA" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 20, fill: "#4A4846", fontFamily: "'Space Grotesk', sans-serif" }} axisLine={{ stroke: "#E0DEDA" }} tickLine={false} />
              <YAxis domain={[0, 200]} tick={{ fontSize: 18, fill: "#A29E9B", fontFamily: "'Space Grotesk', sans-serif" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `$${fmt(v)}M`} />
              <Bar dataKey="ebitda" fill="#2860B2" radius={[8, 8, 0, 0]} maxBarSize={100}>
                <LabelList dataKey="ebitda" position="top" formatter={(v: any) => `$${fmt(v)}M`} style={{ fontSize: 18, fontWeight: 700, fill: "#1A447C", fontFamily: "'Space Grotesk', sans-serif" }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ flex: 45, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
          {metrics.map((m) => (
            <div
              key={m.label}
              className="card"
              style={{
                padding: "32px 36px",
                textAlign: "center",
                border: m.highlight ? "2px solid #2860B2" : undefined,
                boxShadow: m.highlight ? "0 4px 16px rgba(40,96,178,0.1)" : undefined,
              }}
            >
              <p className="font-body" style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: m.highlight ? "#2860B2" : "#A29E9B", margin: 0 }}>{m.label}</p>
              <p className="font-heading" style={{ fontSize: 56, fontWeight: 700, color: "#1A447C", margin: "8px 0 0", lineHeight: 1 }}>{m.value}</p>
              {m.detail && <p style={{ fontSize: 18, color: "#6C6967", margin: "6px 0 0" }}>{m.detail}</p>}
            </div>
          ))}
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
