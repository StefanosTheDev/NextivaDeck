"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Target, Zap, Rocket } from "lucide-react";

const ACCENT = "#7EB3E8";
const GLASS = "rgba(255,255,255,0.04)";
const BORDER = "rgba(255,255,255,0.1)";

const steps = [
  {
    num: "01",
    Icon: Target,
    label: "Understand",
    detail: "Context instantly",
    sub: "Tone · Intent · History",
  },
  {
    num: "02",
    Icon: Zap,
    label: "Decide",
    detail: "In real time",
    sub: "Not after the fact",
  },
  {
    num: "03",
    Icon: Rocket,
    label: "Act",
    detail: "During the interaction",
    sub: "Resolve · Route · Complete",
  },
];

const shifts = [
  { from: "Dashboards", to: "Decisions" },
  { from: "Analysis", to: "Execution" },
  { from: "Insights", to: "Outcomes" },
];

export default function SystemOfActionVisualCopySlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        display: "flex", flexDirection: "column",
        overflow: "hidden", position: "relative",
      }}
      data-speaker-notes="System of Action — focused visual. Three-step flow: Understand → Decide → Act. By unifying live conversations with business context, our AI delivers real-time outcomes — not retrospective reports."
    >
      <div style={{
        position: "absolute", bottom: -300, left: "50%", transform: "translateX(-50%)",
        width: 1200, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(40,96,178,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <p style={{
          fontWeight: 700, fontSize: 18, letterSpacing: "0.05em",
          textTransform: "uppercase", color: "#CCC7C3", margin: 0,
        }}>
          THE STRATEGIC ADVANTAGE
        </p>
        <h1 className="font-heading" style={{
          fontSize: 54, fontWeight: 500,
          color: "#FFFFFF", margin: "12px 0 0", lineHeight: 1.15,
        }}>
          Data + AI with communication<br />
          <span style={{ color: ACCENT }}>as a superpower.</span>
        </h1>
        <p style={{
          fontSize: 22, fontWeight: 400, color: "rgba(255,255,255,0.5)",
          margin: "10px auto 0", lineHeight: 1.5, maxWidth: 1100, textAlign: "center",
        }}>
          By unifying live conversations with business context,<br />
          our AI delivers real-time outcomes — not retrospective reports.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: "0 100px", position: "relative", zIndex: 1, gap: 48,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 0, width: "100%", maxWidth: 1500 }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div style={{
                flex: 1,
                background: GLASS, border: `1px solid ${BORDER}`, borderRadius: 14,
                padding: "40px 36px", textAlign: "center",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
              }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 14,
                  background: "rgba(40,96,178,0.15)", border: "1px solid rgba(40,96,178,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <step.Icon size={32} color={ACCENT} strokeWidth={1.75} />
                </div>
                <p style={{
                  fontSize: 14, fontWeight: 700, letterSpacing: "0.08em",
                  color: ACCENT, margin: 0, textTransform: "uppercase",
                }}>
                  {step.num}
                </p>
                <h2 className="font-heading" style={{
                  fontSize: 36, fontWeight: 600,
                  color: "#FFFFFF", margin: 0, lineHeight: 1.2,
                }}>
                  {step.label}
                </h2>
                <p style={{ fontSize: 22, color: "rgba(255,255,255,0.7)", margin: 0, fontWeight: 500 }}>
                  {step.detail}
                </p>
                <p style={{ fontSize: 17, color: "rgba(255,255,255,0.4)", margin: 0 }}>
                  {step.sub}
                </p>
              </div>
              {i < 2 && (
                <div style={{
                  padding: "0 20px", display: "flex", alignItems: "center", flexShrink: 0,
                }}>
                  <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                    <path d="M0 12h40m0 0l-8-8m8 8l-8 8" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 0, width: "100%", maxWidth: 1500 }}>
          {shifts.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div style={{
                flex: 1,
                background: GLASS, border: `1px solid ${BORDER}`, borderRadius: 14,
                padding: "22px 28px",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 16,
              }}>
                <span style={{
                  fontSize: 22, color: "rgba(255,255,255,0.3)", fontWeight: 500,
                  textDecoration: "line-through",
                }}>
                  {s.from}
                </span>
                <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
                  <path d="M0 7h22m0 0l-5-5m5 5l-5 5" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF" }}>
                  {s.to}
                </span>
              </div>
              {i < 2 && <div style={{ width: 88, flexShrink: 0 }} />}
            </div>
          ))}
        </div>
      </motion.main>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{ padding: "0 100px 8px", position: "relative", zIndex: 1 }}
      >
        <div style={{
          background: "rgba(40,96,178,0.12)", border: "1px solid rgba(40,96,178,0.2)",
          borderRadius: 14, padding: "22px 40px", textAlign: "center",
        }}>
          <p style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.4 }}>
            We are not a system of record.
            <span style={{ color: ACCENT, marginLeft: 10 }}>We are a system of action.</span>
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
