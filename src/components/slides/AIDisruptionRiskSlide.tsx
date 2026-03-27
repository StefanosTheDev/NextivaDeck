"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ShieldCheck, ArrowRight } from "lucide-react";

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
      {/* Top bar: Thoma Bravo attribution */}
      <div style={{
        padding: "16px 80px",
        display: "flex", justifyContent: "flex-end", alignItems: "center",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", gap: 2 }}>
            <div style={{ width: 4, height: 16, background: "rgba(255,255,255,0.3)", borderRadius: 1 }} />
            <div style={{ width: 4, height: 16, background: "rgba(255,255,255,0.2)", borderRadius: 1 }} />
          </div>
          <span style={{ fontSize: 13, fontWeight: 800, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>THOMA BRAVO</span>
        </div>
      </div>

      {/* Title + Arrow bar */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "28px 80px 0", flexShrink: 0, textAlign: "center" }}
      >
        <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AI Disruption Risk Is Not Uniform Across Software
        </h1>

        {/* Arrow spectrum */}
        <div style={{ display: "flex", alignItems: "center", marginTop: 24 }}>
          <svg width="22" height="34" viewBox="0 0 22 34" fill="none" style={{ flexShrink: 0 }}>
            <polygon points="22,0 22,34 0,17" fill="rgba(255,255,255,0.15)" />
          </svg>
          <div style={{ background: "rgba(255,255,255,0.08)", padding: "7px 24px" }}>
            <span style={{ fontSize: 14, fontWeight: 800, color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em" }}>More at Risk</span>
          </div>
          <div style={{ flex: 1, height: 2, background: "linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03), rgba(0,112,243,0.35))" }} />
          <div style={{ background: `${ACCENT}20`, padding: "7px 24px" }}>
            <span style={{ fontSize: 14, fontWeight: 800, color: ACCENT, letterSpacing: "0.04em" }}>More Insulated</span>
          </div>
          <svg width="22" height="34" viewBox="0 0 22 34" fill="none" style={{ flexShrink: 0 }}>
            <polygon points="0,0 0,34 22,17" fill={ACCENT} fillOpacity={0.45} />
          </svg>
        </div>
      </motion.header>

      {/* Column titles above tables */}
      <div style={{ padding: "20px 80px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
        <p className="font-heading" style={{
          fontSize: 18, fontWeight: 700, color: "rgba(255,255,255,0.5)",
          margin: 0, textAlign: "center",
        }}>
          Fast, Forgiving, Low-Stakes Environments
        </p>
        <p className="font-heading" style={{
          fontSize: 18, fontWeight: 700, color: "#FFFFFF",
          margin: 0, textAlign: "center",
        }}>
          High-Stakes, Complex, Regulated Systems
        </p>
      </div>

      {/* Two-column tables */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          flex: 1,
          padding: "10px 80px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 28,
          alignContent: "start",
        }}
      >
        {/* LEFT TABLE */}
        <div style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 12,
          overflow: "hidden",
        }}>
          {leftItems.map((item, i) => (
            <div
              key={i}
              style={{
                padding: "14px 24px",
                borderBottom: i < leftItems.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 17, color: "rgba(255,255,255,0.4)", textAlign: "center", fontWeight: 500 }}>{item}</span>
            </div>
          ))}
        </div>

        {/* RIGHT TABLE */}
        <div style={{
          background: `rgba(0,112,243,0.06)`,
          border: `1px solid rgba(0,112,243,0.15)`,
          borderRadius: 12,
          overflow: "hidden",
        }}>
          {rightItems.map((item, i) => (
            <div
              key={i}
              style={{
                padding: "14px 24px",
                borderBottom: i < rightItems.length - 1 ? `1px solid rgba(0,112,243,0.08)` : "none",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 17, color: "#FFFFFF", textAlign: "center", fontWeight: 600 }}>{item}</span>
            </div>
          ))}
        </div>
      </motion.main>

      {/* Nextiva badge — centered under right column */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{
          padding: "14px 80px 0",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28,
        }}
      >
        <div />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: `${ACCENT}12`, border: `1px solid ${ACCENT}30`,
            borderRadius: 10, padding: "10px 28px",
          }}>
            <ShieldCheck size={20} color={ACCENT} strokeWidth={2} />
            <span className="font-heading" style={{ fontSize: 15, fontWeight: 700, color: ACCENT }}>NEXTIVA IS HERE</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontWeight: 600 }}>See why</span>
            <ArrowRight size={14} color="rgba(255,255,255,0.3)" strokeWidth={2} />
          </div>
        </div>
      </motion.div>

      {/* Disclaimer */}
      <div style={{ padding: "8px 80px 6px" }}>
        <p style={{ fontSize: 9, color: "rgba(255,255,255,0.15)", margin: 0, lineHeight: 1.4 }}>
          For illustrative purposes only. Framework developed by Thoma Bravo. The classifications represent generalizations and do not constitute a guarantee of future performance or insulation from AI-related disruption.
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
