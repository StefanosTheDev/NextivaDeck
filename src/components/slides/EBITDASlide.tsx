"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList } from "recharts";

const data = [
  { name: "FY25", ebitda: 0 },
  { name: "FY26", ebitda: 44 },
  { name: "FY27", ebitda: 94 },
  { name: "FY28", ebitda: 122 },
  { name: "FY29", ebitda: 151 },
  { name: "FY30", ebitda: 185 },
];

const metrics = [
  { value: "$44M", label: "Adj EBITDA (FY26)", detail: "Up from breakeven in FY25" },
  { value: "$75\u2013$80M", label: "FY26 Exit EBITDA Run Rate", detail: "Range reflects items still to be actioned", highlight: true },
  { value: "40%", label: "Target Margin (FY30)", detail: "$185M Adj EBITDA" },
];

export default function EBITDASlide({ slideNumber = 25 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)", justifyContent: "space-between" }} data-speaker-notes="EBITDA inflection is real. $44M in FY26 at 13% margin, targeting 40% by FY30 with $185M Adj EBITDA. FY27 margin 25%. Exit EBITDA run rate of $75–$80M provides near-term underwriting comfort.">
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#CCC7C3", margin: "0 0 10px" }}>Profitability</p>
        <h1 className="font-heading" style={{ fontSize: 64, fontWeight: 700, color: "#FFFFFF", marginTop: 10, lineHeight: 1.15 }}>
          Margin improves from breakeven to 22% by Q426
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.45)", marginTop: 10, lineHeight: 1.5 }}>
          $75–$80M FY26 exit EBITDA run rate provides near-term underwriting comfort.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "24px 100px 0", display: "flex", gap: 36 }}
      >
        <div style={{ flex: 55, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={data} margin={{ top: 24, right: 20, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 20, fill: "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif" }} axisLine={{ stroke: "rgba(255,255,255,0.1)" }} tickLine={false} />
              <YAxis domain={[0, 200]} tick={{ fontSize: 18, fill: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `$${Math.round(v)}M`} />
              <Bar dataKey="ebitda" fill="#2860B2" radius={[8, 8, 0, 0]} maxBarSize={100}>
                <LabelList dataKey="ebitda" position="top" formatter={(v: any) => `$${Math.round(v)}M`} style={{ fontSize: 18, fontWeight: 700, fill: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif" }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ flex: 45, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              style={
                m.highlight
                  ? { padding: "32px 36px", textAlign: "center" as const, background: "rgba(40,96,178,0.12)", border: "2px solid rgba(40,96,178,0.4)", borderRadius: 16, boxShadow: "0 4px 16px rgba(40,96,178,0.15)" }
                  : { padding: "32px 36px", textAlign: "center" as const, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16 }
              }
            >
              <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: m.highlight ? "#7EB3E8" : "rgba(255,255,255,0.4)", margin: 0 }}>{m.label}</p>
              <p className="font-heading" style={{ fontSize: 56, fontWeight: 700, color: "#FFFFFF", margin: "8px 0 0", lineHeight: 1 }}>{m.value}</p>
              {m.detail && <p style={{ fontSize: 18, color: "rgba(255,255,255,0.4)", margin: "6px 0 0" }}>{m.detail}</p>}
            </motion.div>
          ))}
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
