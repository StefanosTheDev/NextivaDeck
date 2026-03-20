"use client";
import SlideFooter from "../SlideFooter";

const CORAL = "#F0A88C";

const flowSteps = [
  { num: "01", label: "Understand", detail: "Context instantly — tone, intent, history" },
  { num: "02", label: "Decide", detail: "In real time — not after the fact" },
  { num: "03", label: "Act", detail: "During the interaction — resolve, route, complete" },
];

const valueShifts = [
  { from: "Dashboards", to: "Decisions" },
  { from: "Insights", to: "Outcomes" },
  { from: "Analysis", to: "Execution" },
];

const investorPoints = [
  "We sit at the point of interaction",
  "Real-time + historical data advantage",
  "Signal → action → outcome in one loop",
];

export default function SystemOfActionSlide({ slideNumber = 35 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "linear-gradient(170deg, #0a1628 0%, #0f1f3a 100%)",
        display: "flex", flexDirection: "column",
        overflow: "hidden", color: "#fff",
        position: "relative",
      }}
      data-speaker-notes="AI becomes valuable when it turns real-time interactions into immediate outcomes. We don't just analyze — we act. By unifying live conversations with business data, our AI delivers real-time outcomes. We are not a system of record. We are a system of action."
    >
      {/* Subtle glow */}
      <div style={{
        position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
        width: 1400, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(240,168,140,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <header style={{ padding: "48px 80px 0", position: "relative", zIndex: 1, flexShrink: 0 }}>
        <p style={{
          fontWeight: 700, fontSize: 15, letterSpacing: "0.12em",
          textTransform: "uppercase", color: CORAL, margin: 0,
        }}>
          THE STRATEGIC ADVANTAGE
        </p>
        <h1 className="font-heading" style={{
          fontSize: 48, fontWeight: 400,
          color: "#fff", margin: "12px 0 0", lineHeight: 1.15,
        }}>
          Data + AI with communication
          <br />
          <span style={{ color: CORAL }}>as a superpower.</span>
        </h1>
        <p style={{
          fontSize: 17, color: "rgba(255,255,255,0.5)", margin: "10px 0 0",
          maxWidth: 800, lineHeight: 1.5,
        }}>
          By unifying live conversations with business context, our AI delivers real-time outcomes — not retrospective reports.
        </p>
      </header>

      {/* Main content — two columns */}
      <main style={{
        flex: 1, display: "flex", gap: 32,
        padding: "24px 80px 0", position: "relative", zIndex: 1,
        minHeight: 0,
      }}>
        {/* Left — Flow + Example */}
        <div style={{ flex: 1.15, display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Three-step flow */}
          <div style={{ display: "flex", gap: 12 }}>
            {flowSteps.map((step, i) => (
              <div key={i} style={{
                flex: 1,
                background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14, padding: "18px 18px",
                display: "flex", flexDirection: "column", gap: 6,
              }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: CORAL, letterSpacing: "0.05em" }}>{step.num}</span>
                <span style={{ fontSize: 22, fontWeight: 600, color: "#fff" }}>{step.label}</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.4 }}>{step.detail}</span>
              </div>
            ))}
          </div>

          {/* Example card */}
          <div style={{
            background: "rgba(240,168,140,0.08)",
            border: "1px solid rgba(240,168,140,0.18)",
            borderRadius: 14, padding: "20px 24px",
          }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", color: CORAL, margin: 0, textTransform: "uppercase" }}>
              REAL-TIME IN ACTION
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12 }}>
              {["Customer calls", "AI reads tone + intent", "Pulls account history", "Resolves automatically"].map((step, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{
                    background: "rgba(255,255,255,0.08)", borderRadius: 8,
                    padding: "8px 14px", fontSize: 14, color: "rgba(255,255,255,0.8)",
                    whiteSpace: "nowrap",
                  }}>
                    {step}
                  </span>
                  {i < 3 && <span style={{ color: CORAL, fontSize: 18, fontWeight: 700 }}>→</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Closing claim */}
          <div style={{
            background: "linear-gradient(135deg, rgba(40,96,178,0.2) 0%, rgba(40,96,178,0.08) 100%)",
            border: "1px solid rgba(40,96,178,0.25)",
            borderRadius: 14, padding: "18px 24px",
          }}>
            <p style={{ fontSize: 20, fontWeight: 600, color: "#fff", margin: 0, lineHeight: 1.4 }}>
              We are not a system of record.
              <span style={{ color: CORAL, marginLeft: 8 }}>We are a system of action.</span>
            </p>
          </div>
        </div>

        {/* Right — Value shift + Investor takeaway */}
        <div style={{ flex: 0.85, display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Value shift */}
          <div style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 14, padding: "20px 24px",
          }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.45)", margin: 0, textTransform: "uppercase" }}>
              THE VALUE SHIFT
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 16 }}>
              {valueShifts.map((v, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span style={{
                    fontSize: 18, color: "rgba(255,255,255,0.35)", fontWeight: 500,
                    textDecoration: "line-through", minWidth: 110,
                  }}>
                    {v.from}
                  </span>
                  <span style={{ color: CORAL, fontSize: 16, fontWeight: 700 }}>→</span>
                  <span style={{ fontSize: 20, color: "#fff", fontWeight: 600 }}>{v.to}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Investor takeaway */}
          <div style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 14, padding: "20px 24px", flex: 1,
          }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.45)", margin: 0, textTransform: "uppercase" }}>
              WHAT THIS ENABLES
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
              {investorPoints.map((pt, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: CORAL, marginTop: 7, flexShrink: 0 }} />
                  <span style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>{pt}</span>
                </div>
              ))}
            </div>
            {/* Monetization */}
            <div style={{
              marginTop: 18, paddingTop: 16,
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)", margin: "0 0 10px", textTransform: "uppercase" }}>
                NEW MONETIZATION MODELS
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {["Per interaction", "Per resolution", "Per outcome"].map((m, i) => (
                  <span key={i} style={{
                    background: "rgba(240,168,140,0.12)", border: "1px solid rgba(240,168,140,0.2)",
                    borderRadius: 8, padding: "7px 14px",
                    fontSize: 14, color: CORAL, fontWeight: 600,
                  }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
