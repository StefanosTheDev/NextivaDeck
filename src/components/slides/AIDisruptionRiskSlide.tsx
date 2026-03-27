"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ShieldCheck } from "lucide-react";

const ACCENT = "#0070F3";

const leftItems = [
  "Generalist Knowledge",
  "Simple, or Low-Stakes Workflows",
  "Point Solutions or Standalone Tools",
  "Higher Tolerance for Mistakes",
  "Low Cost of Failure",
  "Light Regulatory Oversight",
  "Commoditized or Publicly Available Data",
];

const rightItems = [
  "Deep, Specialized Domain Expertise",
  "Complex, Critically Important Workflows",
  "Embedded Platforms",
  "No Room for Mistakes",
  "High Cost of Failure",
  "Stringent Regulation & Compliance Requirements",
  "Proprietary Data or Proprietary Know-How",
];

export default function AIDisruptionRiskSlide({ slideNumber = 50 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "40px 80px 0", flexShrink: 0, textAlign: "center" }}
      >
        <h1 className="font-heading" style={{ fontSize: 44, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AI Disruption Risk Is Not Uniform Across Software
        </h1>
      </motion.header>

      {/* Arrow bar */}
      <div style={{ padding: "20px 80px 0", display: "flex", alignItems: "center" }}>
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none" style={{ flexShrink: 0 }}>
          <polygon points="24,0 24,36 0,18" fill="rgba(255,255,255,0.2)" />
        </svg>
        <div style={{ background: "rgba(255,255,255,0.12)", padding: "8px 28px" }}>
          <span style={{ fontSize: 15, fontWeight: 800, color: "rgba(255,255,255,0.6)", letterSpacing: "0.04em" }}>More at Risk</span>
        </div>
        <div style={{ flex: 1, height: 2, background: "linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.04), rgba(0,112,243,0.4))" }} />
        <div style={{ background: `${ACCENT}25`, padding: "8px 28px" }}>
          <span style={{ fontSize: 15, fontWeight: 800, color: ACCENT, letterSpacing: "0.04em" }}>More Insulated</span>
        </div>
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none" style={{ flexShrink: 0 }}>
          <polygon points="0,0 0,36 24,18" fill={ACCENT} fillOpacity={0.5} />
        </svg>
      </div>

      {/* Two-column table */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          flex: 1,
          padding: "16px 80px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 28,
          alignContent: "start",
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 14,
          padding: "20px 0",
        }}>
          <p style={{
            fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.45)",
            textAlign: "center", margin: "0 0 14px", padding: "0 24px",
          }}>
            Fast, Forgiving, Low-Stakes Environments
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {leftItems.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "13px 28px",
                  borderTop: i === 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", textAlign: "center", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{
          background: `rgba(0,112,243,0.06)`,
          border: `1px solid ${ACCENT}20`,
          borderRadius: 14,
          padding: "20px 0",
        }}>
          <p style={{
            fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.6)",
            textAlign: "center", margin: "0 0 14px", padding: "0 24px",
          }}>
            High-Stakes, Complex, Regulated Systems
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {rightItems.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "13px 28px",
                  borderTop: i === 0 ? `1px solid ${ACCENT}12` : "none",
                  borderBottom: `1px solid ${ACCENT}12`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 17, color: "#FFFFFF", textAlign: "center", fontWeight: 600 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.main>

      {/* Bottom row: Nextiva badge + Thoma Bravo */}
      <div style={{ padding: "12px 80px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: 9, color: "rgba(255,255,255,0.18)", margin: 0, maxWidth: 480, lineHeight: 1.4 }}>
          For illustrative purposes only. Framework developed by Thoma Bravo. The classifications represent generalizations and do not constitute a guarantee of future performance or insulation from AI-related disruption.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: `${ACCENT}12`, border: `1px solid ${ACCENT}30`,
            borderRadius: 10, padding: "10px 24px",
          }}>
            <ShieldCheck size={20} color={ACCENT} strokeWidth={2} />
            <span className="font-heading" style={{ fontSize: 15, fontWeight: 700, color: ACCENT }}>NEXTIVA IS HERE</span>
          </div>
          <span style={{ fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em" }}>THOMA BRAVO</span>
        </div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
