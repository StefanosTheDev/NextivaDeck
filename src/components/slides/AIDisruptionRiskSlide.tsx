"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ShieldCheck, Check } from "lucide-react";

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
  "Commoditized or Public Data",
];

const insulatedRows = [
  "Deep, Specialized Domain Expertise",
  "Complex, Mission-Critical Workflows",
  "Embedded Platforms",
  "No Room for Mistakes",
  "High Cost of Failure",
  "Stringent Regulation & Compliance",
  "Proprietary Data & Know-How",
];

const nextivaAdvantages = [
  { label: "Infrastructure + Platform", desc: "Every interaction flows through Nextiva \u2014 voice, SMS, chat, email. Not a tool, the operating layer." },
  { label: "Proprietary Real-Time Data", desc: "First-party, live interaction data. Ground truth others can\u2019t access. Continuous learning flywheel." },
  { label: "Agentic AI on Owned Stack", desc: "AI built on our infra + data layer. Better performance, lower risk, direct monetization path." },
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
        style={{ padding: "40px 80px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", color: ACCENT, margin: "0 0 10px" }}>
          AI DISRUPTION RISK
        </p>
        <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AI risk is not uniform across software.
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: "8px 0 0" }}>
          Nextiva sits firmly on the insulated side \u2014 and AI expands our advantage.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "20px 60px 0", display: "flex", gap: 20 }}
      >
        {/* LEFT: Framework comparison */}
        <div style={{ flex: 5, display: "flex", flexDirection: "column", gap: 0 }}>
          {/* Column headers with arrow bar */}
          <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
            <div style={{
              flex: 1, background: "rgba(220,38,38,0.12)", border: "1px solid rgba(220,38,38,0.25)",
              borderRadius: 10, padding: "10px 16px", textAlign: "center",
            }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: RED, margin: 0 }}>
                \u2190 MORE AT RISK
              </p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: "4px 0 0", fontWeight: 500 }}>
                Fast, Forgiving, Low-Stakes
              </p>
            </div>
            <div style={{
              flex: 1, background: "rgba(22,163,74,0.12)", border: "1px solid rgba(22,163,74,0.25)",
              borderRadius: 10, padding: "10px 16px", textAlign: "center",
            }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: GREEN, margin: 0 }}>
                MORE INSULATED \u2192
              </p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: "4px 0 0", fontWeight: 500 }}>
                High-Stakes, Complex, Regulated
              </p>
            </div>
          </div>

          {/* Rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {atRiskRows.map((left, i) => (
              <div key={i} style={{ display: "flex", gap: 12 }}>
                <div style={{
                  flex: 1, background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.12)",
                  borderRadius: 8, padding: "8px 14px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", textAlign: "center", fontWeight: 500 }}>{left}</span>
                </div>
                <div style={{
                  flex: 1, background: "rgba(22,163,74,0.06)", border: "1px solid rgba(22,163,74,0.12)",
                  borderRadius: 8, padding: "8px 14px",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", textAlign: "center", fontWeight: 600 }}>{insulatedRows[i]}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Nextiva indicator */}
          <div style={{
            marginTop: 10, display: "flex", justifyContent: "flex-end", paddingRight: 20,
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "rgba(0,112,243,0.12)", border: `1px solid ${ACCENT}40`,
              borderRadius: 8, padding: "6px 16px",
            }}>
              <ShieldCheck size={16} color={ACCENT} strokeWidth={2} />
              <span style={{ fontSize: 13, fontWeight: 700, color: ACCENT }}>NEXTIVA IS HERE</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Nextiva strategic advantage */}
        <div style={{ flex: 3, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{
            background: "rgba(0,112,243,0.08)", border: `1px solid ${ACCENT}25`,
            borderRadius: 12, padding: "14px 18px",
          }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: ACCENT, margin: "0 0 4px" }}>
              WHY NEXTIVA IS INSULATED
            </p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", margin: 0 }}>
              Three structural layers that compound over time
            </p>
          </div>

          {nextivaAdvantages.map((adv, i) => (
            <motion.div
              key={adv.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.12 }}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderLeft: `3px solid ${ACCENT}`,
                borderRadius: 10,
                padding: "14px 18px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 6,
                  background: `${ACCENT}20`, border: `1px solid ${ACCENT}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Check size={13} color={ACCENT} strokeWidth={2.5} />
                </div>
                <span className="font-heading" style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF" }}>
                  {adv.label}
                </span>
              </div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.5 }}>
                {adv.desc}
              </p>
            </motion.div>
          ))}

          {/* Bottom badge */}
          <div style={{
            background: "rgba(22,163,74,0.1)", border: "1px solid rgba(22,163,74,0.25)",
            borderRadius: 8, padding: "10px 16px", textAlign: "center",
          }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: GREEN, margin: 0 }}>
              AI doesn&apos;t disrupt Nextiva &mdash; it deepens the moat.
            </p>
          </div>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
