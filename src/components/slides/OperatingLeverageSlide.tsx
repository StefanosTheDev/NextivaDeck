"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { HEADCOUNT, FISCAL_YEARS, RD_REV_PER_HEAD } from "../financialData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const revPerHeadData = FISCAL_YEARS.map((fy) => ({
  name: fy,
  value: HEADCOUNT.revPerHead[fy],
  rdValue: RD_REV_PER_HEAD[fy],
}));

const formatK = (v: number) => v >= 1000 ? `$${(v / 1000).toFixed(1)}M` : `$${v}K`;

const topCards = [
  {
    label: "Revenue per Head",
    from: `$${HEADCOUNT.revPerHead.FY25}K`,
    to: `$${HEADCOUNT.revPerHead.FY30}K`,
    direction: "up" as const,
    detail: "2.2\u00d7 improvement driven by AI-powered productivity.",
  },
  {
    label: "Revenue per R&D Head",
    from: formatK(RD_REV_PER_HEAD.FY25),
    to: formatK(RD_REV_PER_HEAD.FY30),
    direction: "up" as const,
    detail: "2.8\u00d7 improvement \u2014 AI-driven productivity.",
  },
];

export default function OperatingLeverageSlide({ slideNumber = 29 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)", display: "flex", flexDirection: "column", justifyContent: "space-between" }} data-speaker-notes="Revenue per head at $255K today, growing to $570K by FY30 — a 2.2× improvement driven by AI-powered productivity. Revenue per R&D head shows even stronger leverage, from $230K to $688K.">
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#CCC7C3", margin: "0 0 10px" }}>Operating leverage</p>
        <h1 className="font-heading" style={{ fontSize: 64, fontWeight: 700, color: "#FFFFFF", marginTop: 10, lineHeight: 1.15 }}>
          Realizing permanent operational efficiencies.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", flexDirection: "column", padding: "14px 100px 0", gap: 8, minHeight: 0 }}
      >
        <div style={{ flex: 1, display: "flex", gap: 28, minHeight: 0 }}>
          <div style={{ flex: "0 0 62%", display: "flex", flexDirection: "column", minHeight: 0 }}>
            <p style={{ fontWeight: 700, fontSize: 20, color: "#7EB3E8", margin: "0 0 2px", letterSpacing: "0.02em" }}>Headcount Efficiency</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: "0 0 4px", lineHeight: 1.4 }}>Revenue per full-time equivalent</p>
            <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
              <div style={{ position: "absolute", bottom: 52, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 18, zIndex: 1, fontSize: 16, color: "rgba(255,255,255,0.88)" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ width: 18, height: 3, background: "#2860B2", display: "inline-block", borderRadius: 2 }} />
                  Rev / Head
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <svg width="18" height="3" style={{ display: "inline-block" }}>
                    <line x1="0" y1="1.5" x2="18" y2="1.5" stroke="#7EB3E8" strokeWidth="3" strokeDasharray="4 3" />
                  </svg>
                  Rev / R&D Head
                </span>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revPerHeadData} margin={{ top: 12, right: 24, left: 36, bottom: 12 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 20, fill: "rgba(255,255,255,0.88)", fontFamily: "'Space Grotesk', sans-serif" }} axisLine={{ stroke: "rgba(255,255,255,0.1)" }} tickLine={false} />
                  <YAxis
                    domain={[0, 800]}
                    ticks={[200, 400, 600, 800]}
                    tick={{ fontSize: 18, fill: "rgba(255,255,255,0.78)", fontFamily: "'Space Grotesk', sans-serif" }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v: number) => v >= 1000 ? `$${(v / 1000).toFixed(1)}M` : `$${v}K`}
                  />
                  <Line type="monotone" dataKey="value" stroke="#2860B2" strokeWidth={4} dot={{ r: 6, fill: "#2860B2" }} name="Rev / Head" />
                  <Line type="monotone" dataKey="rdValue" stroke="#7EB3E8" strokeWidth={4} dot={{ r: 6, fill: "#7EB3E8" }} strokeDasharray="6 4" name="Rev / R&D Head" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div style={{ flex: "0 0 38%", display: "flex", flexDirection: "column", gap: 12, justifyContent: "center" }}>
            {topCards.map((c, i) => (
              <motion.div key={c.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }} style={{ padding: "14px 18px", textAlign: "center", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16 }}>
                <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#7EB3E8", margin: 0 }}>{c.label}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, margin: "8px 0" }}>
                  <span className="font-heading" style={{ fontSize: 30, fontWeight: 700, color: "rgba(255,255,255,0.35)" }}>{c.from}</span>
                  <span style={{ fontSize: 22, color: c.direction === "up" ? "#4CAF50" : "#2860B2" }}>
                    {c.direction === "up" ? "\u2191" : "\u2193"}
                  </span>
                  <span className="font-heading" style={{ fontSize: 30, fontWeight: 700, color: "#FFFFFF" }}>{c.to}</span>
                </div>
                <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: 0 }}>
                  FY25 → FY30
                </p>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", margin: "6px 0 0", lineHeight: 1.4 }}>{c.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.main>

      <div style={{ padding: "0 100px 4px", textAlign: "center" }}>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", margin: 0 }}>All figures presented on a non-GAAP basis unless otherwise noted.</p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
