"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const stats = [
  { stat: "18M", label: "Contact center agents globally" },
  { stat: "30–40%", label: "Of all agent workloads shift to Agentic" },
  { stat: "<30", label: "Agents in most contact centers" },
];

export default function AgenticOpportunity2Slide({ slideNumber = 12 }: { slideNumber?: number }) {
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
        style={{ padding: "56px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px" }}>
          THE AGENTIC AI OPPORTUNITY
        </p>
        <h1 className="font-heading" style={{ fontSize: 44, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          Contact Center Workforces Will Be Agentic.
        </h1>
        <p style={{ fontSize: 20, color: "rgba(255,255,255,0.45)", margin: "14px 0 0", lineHeight: 1.5 }}>
          Generational opportunity to power customer interactions for our market segment
        </p>
      </motion.header>

      {/* Three hero stat cards */}
      <motion.main
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", gap: 24, padding: "0 100px", alignItems: "center" }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.stat}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderTop: "3px solid #2860B2",
              borderRadius: 14,
              padding: "44px 32px",
              display: "flex", flexDirection: "column",
              alignItems: "center", textAlign: "center",
            }}
          >
            <p className="font-heading" style={{ fontSize: 64, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1 }}>
              {s.stat}
            </p>
            <p style={{ fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "16px 0 0", lineHeight: 1.3, whiteSpace: "nowrap" }}>
              {s.label}
            </p>
          </motion.div>
        ))}
      </motion.main>

      {/* Bottom takeaway bar */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
        style={{ padding: "0 100px 12px", flexShrink: 0 }}
      >
        <div style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          padding: "20px 32px", borderRadius: 14,
          background: "rgba(40,96,178,0.12)", border: "1px solid rgba(40,96,178,0.2)",
        }}>
          <p style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: 0, textAlign: "center" }}>
            Enormous underserved market ignored by the enterprise platforms. Limited to no automation for SMB and mid-sized companies.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
