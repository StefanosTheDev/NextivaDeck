"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ShieldCheck } from "lucide-react";

const ACCENT = "#0070F3";
const RED = "#DC2626";
const GREEN = "#16A34A";

const atRiskRows = [
  "Generalist Knowledge",
  "Simple, Low-Stakes Workflows",
  "Point Solutions or Standalone Tools",
  "Higher Tolerance for Mistakes",
  "Low Cost of Failure",
  "Light Regulatory Oversight",
  "Commoditized or Publicly Available Data",
];

const insulatedRows = [
  "Deep, Specialized Domain Expertise",
  "Complex, Critically Important Workflows",
  "Embedded Platforms",
  "No Room for Mistakes",
  "High Cost of Failure",
  "Stringent Regulation & Compliance",
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
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "44px 80px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", color: ACCENT, margin: "0 0 10px" }}>
          AI DISRUPTION RISK
        </p>
        <h1 className="font-heading" style={{ fontSize: 46, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AI disruption risk is not uniform across software.
        </h1>
        <p style={{ fontSize: 20, color: "rgba(255,255,255,0.45)", margin: "10px 0 0" }}>
          Nextiva operates on the &ldquo;more insulated&rdquo; side &mdash; and AI expands our advantage.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "28px 100px 0", display: "flex", flexDirection: "column" }}
      >
        {/* Arrow bar */}
        <div style={{ display: "flex", gap: 0, marginBottom: 16 }}>
          <div style={{
            flex: 1, background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.2)",
            borderRadius: "10px 0 0 10px", padding: "12px 20px",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          }}>
            <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: RED, margin: 0 }}>
              &larr; More at Risk
            </p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", margin: "4px 0 0", fontWeight: 500 }}>
              Fast, Forgiving, Low-Stakes Environments
            </p>
          </div>
          <div style={{ width: 2, background: "rgba(255,255,255,0.1)" }} />
          <div style={{
            flex: 1, background: "rgba(22,163,74,0.1)", border: "1px solid rgba(22,163,74,0.2)",
            borderRadius: "0 10px 10px 0", padding: "12px 20px",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          }}>
            <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: GREEN, margin: 0 }}>
              More Insulated &rarr;
            </p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", margin: "4px 0 0", fontWeight: 500 }}>
              High-Stakes, Complex, Regulated Systems
            </p>
          </div>
        </div>

        {/* Comparison rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {atRiskRows.map((left, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 + i * 0.06 }}
              style={{ display: "flex", gap: 12 }}
            >
              <div style={{
                flex: 1, background: "rgba(220,38,38,0.05)", border: "1px solid rgba(220,38,38,0.1)",
                borderRadius: 8, padding: "11px 18px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", textAlign: "center", fontWeight: 500 }}>{left}</span>
              </div>
              <div style={{
                flex: 1, background: "rgba(22,163,74,0.05)", border: "1px solid rgba(22,163,74,0.12)",
                borderRadius: 8, padding: "11px 18px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", textAlign: "center", fontWeight: 600 }}>{insulatedRows[i]}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nextiva indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 16, paddingRight: 40 }}
        >
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "rgba(0,112,243,0.12)", border: `1px solid rgba(0,112,243,0.3)`,
            borderRadius: 10, padding: "10px 24px",
          }}>
            <ShieldCheck size={20} color={ACCENT} strokeWidth={2} />
            <span className="font-heading" style={{ fontSize: 16, fontWeight: 700, color: ACCENT }}>NEXTIVA IS HERE</span>
          </div>
        </motion.div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
