"use client";
import SlideFooter from "../SlideFooter";

const CORAL = "#F0A88C";
const GLASS = "rgba(255,255,255,0.05)";
const BORDER = "rgba(255,255,255,0.10)";

const steps = [
  {
    num: "01",
    icon: "🎯",
    label: "Understand",
    detail: "Context instantly",
    sub: "Tone · Intent · History",
  },
  {
    num: "02",
    icon: "⚡",
    label: "Decide",
    detail: "In real time",
    sub: "Not after the fact",
  },
  {
    num: "03",
    icon: "🚀",
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
        background: "linear-gradient(170deg, #0B1A2F 0%, #0A1E3D 100%)",
        display: "flex", flexDirection: "column",
        overflow: "hidden", position: "relative",
      }}
      data-speaker-notes="System of Action — focused visual. Three-step flow: Understand → Decide → Act. By unifying live conversations with business context, our AI delivers real-time outcomes — not retrospective reports."
    >
      {/* Subtle glow */}
      <div style={{
        position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
        width: 1400, height: 800, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(240,168,140,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <header style={{ padding: "56px 100px 0", position: "relative", zIndex: 1, textAlign: "center" }}>
        <p style={{
          fontWeight: 700, fontSize: 18, letterSpacing: "0.2em",
          textTransform: "uppercase", color: CORAL, margin: 0,
        }}>
          THE STRATEGIC ADVANTAGE
        </p>
        <h1 className="font-heading" style={{
          fontSize: 64, fontWeight: 400,
          color: "#FFFFFF", margin: "16px 0 0", lineHeight: 1.15,
        }}>
          Data + AI with communication<br />
          <span style={{ color: CORAL }}>as a superpower.</span>
        </h1>
        <p style={{
          fontSize: 24, fontWeight: 400, color: "rgba(255,255,255,0.6)",
          margin: "20px auto 0", lineHeight: 1.5, maxWidth: 1100, textAlign: "center",
        }}>
          By unifying live conversations with business context,<br />
          our AI delivers real-time outcomes — not retrospective reports.
        </p>
      </header>

      <main style={{
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "0 100px", position: "relative", zIndex: 1, gap: 48,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 0, width: "100%", maxWidth: 1500 }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div style={{
                flex: 1,
                background: GLASS, border: `1px solid ${BORDER}`, borderRadius: 20,
                padding: "40px 36px", textAlign: "center",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
              }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 20,
                  background: "rgba(240,168,140,0.10)", border: "1px solid rgba(240,168,140,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontSize: 36 }}>{step.icon}</span>
                </div>
                <p style={{
                  fontSize: 14, fontWeight: 700, letterSpacing: "0.15em",
                  color: CORAL, margin: 0, textTransform: "uppercase",
                }}>
                  {step.num}
                </p>
                <h2 className="font-heading" style={{
                  fontSize: 36, fontWeight: 600,
                  color: "#FFFFFF", margin: 0, lineHeight: 1.2,
                }}>
                  {step.label}
                </h2>
                <p style={{ fontSize: 22, color: "rgba(255,255,255,0.8)", margin: 0, fontWeight: 500 }}>
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
                    <path d="M0 12h40m0 0l-8-8m8 8l-8 8" stroke={CORAL} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
                  <path d="M0 7h22m0 0l-5-5m5 5l-5 5" stroke={CORAL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF" }}>
                  {s.to}
                </span>
              </div>
              {i < 2 && <div style={{ width: 88, flexShrink: 0 }} />}
            </div>
          ))}
        </div>
      </main>

      <div style={{
        padding: "0 100px 0", position: "relative", zIndex: 1,
      }}>
        <div style={{
          background: "rgba(240,168,140,0.08)", border: "1px solid rgba(240,168,140,0.2)",
          borderRadius: 14, padding: "22px 40px", textAlign: "center",
          marginBottom: 8,
        }}>
          <p style={{ fontSize: 26, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.4 }}>
            We are not a system of record.
            <span style={{ color: CORAL, marginLeft: 10 }}>We are a system of action.</span>
          </p>
        </div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
