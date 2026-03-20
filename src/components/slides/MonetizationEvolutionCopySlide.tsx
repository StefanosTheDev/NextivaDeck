"use client";
import SlideFooter from "../SlideFooter";

const CORAL = "#F0A88C";
const GLASS = "rgba(255,255,255,0.04)";
const BORDER = "rgba(255,255,255,0.08)";
const MUTED = "rgba(255,255,255,0.45)";

const foundationItems = [
  "Large contracted customer base provides visibility and control",
  "Majority of customers under multi-year agreements",
  "Embedded in daily operations → mission-critical",
  "High retention and predictable revenue base",
  "Creates time and leverage to evolve pricing models",
];

const transitionItems = [
  "Gradual shift aligned with contract cycles",
  "Introduced alongside existing models — not disruptive",
  "Expansion-driven, not replacement-driven",
];

const monetizationItems = [
  { label: "Per-interaction", detail: "Monetizes every customer touchpoint" },
  { label: "Per-resolution", detail: "Aligns revenue with successful outcomes" },
  { label: "Per-outcome", detail: "Captures full value of AI-driven automation" },
  { label: "Platform + usage fees", detail: "Expands beyond seat-based limitations" },
];

export default function MonetizationEvolutionCopySlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "linear-gradient(170deg, #061A37 0%, #0A1E3D 100%)",
        display: "flex", flexDirection: "column",
        overflow: "hidden", position: "relative",
      }}
      data-speaker-notes="Foundation: We operate from a position of strength — large contracted base, multi-year agreements, mission-critical embedding. Transition: We are evolving pricing alongside contract cycles, not disrupting. Monetization: Per-interaction, per-resolution, per-outcome, and platform fees unlock higher-value streams. The same customer base has the potential to double revenue when we shift from subscriptions to interaction and utilization-based models. More usage → more revenue. AI increases throughput → increases monetization."
    >
      {/* Subtle glow */}
      <div style={{
        position: "absolute", bottom: -200, left: "50%", transform: "translateX(-50%)",
        width: 1200, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(240,168,140,0.07) 0%, transparent 70%)",
      }} />

      {/* Header */}
      <header style={{ padding: "44px 80px 0", flexShrink: 0, position: "relative", zIndex: 1 }}>
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.2em", textTransform: "uppercase", color: CORAL, margin: 0 }}>
          MONETIZATION EVOLUTION
        </p>
        <h1 className="font-heading" style={{ fontSize: 48, fontWeight: 600, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}>
          From Subscription to Scalable, Usage-Driven Economics
        </h1>
      </header>

      {/* Main 3-column body */}
      <main style={{ flex: 1, display: "flex", gap: 20, padding: "24px 80px 0", position: "relative", zIndex: 1, minHeight: 0 }}>

        {/* Column 1 — Foundation */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{
            background: GLASS, border: `1px solid ${BORDER}`, borderRadius: 16,
            padding: "22px 24px 20px", flex: 1, display: "flex", flexDirection: "column",
          }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: CORAL, margin: "0 0 4px" }}>01</p>
            <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#FFFFFF", margin: "0 0 14px", lineHeight: 1.2 }}>
              Foundation
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 9, flex: 1 }}>
              {foundationItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: CORAL, marginTop: 8, flexShrink: 0 }} />
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.45 }}>{item}</p>
                </div>
              ))}
            </div>
            {/* Callout */}
            <div style={{
              marginTop: 14, background: "rgba(240,168,140,0.08)", border: "1px solid rgba(240,168,140,0.2)",
              borderRadius: 10, padding: "12px 16px",
            }}>
              <p style={{ fontSize: 16, color: "#FFFFFF", margin: 0, lineHeight: 1.45, fontWeight: 500 }}>
                We are not experimenting — we are transitioning from a position of strength.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2 — Transition + Monetization */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Transition */}
          <div style={{
            background: GLASS, border: `1px solid ${BORDER}`, borderRadius: 16,
            padding: "22px 24px 18px",
          }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: CORAL, margin: "0 0 4px" }}>02</p>
            <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#FFFFFF", margin: "0 0 10px", lineHeight: 1.2 }}>
              The Bridge
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 10px", lineHeight: 1.45 }}>
              Evolving from subscription pricing to platform and usage-based economics.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {transitionItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: CORAL, marginTop: 8, flexShrink: 0 }} />
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", margin: 0, lineHeight: 1.45 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Monetization */}
          <div style={{
            background: GLASS, border: `1px solid ${BORDER}`, borderRadius: 16,
            padding: "22px 24px 18px", flex: 1,
          }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: CORAL, margin: "0 0 4px" }}>03</p>
            <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#FFFFFF", margin: "0 0 12px", lineHeight: 1.2 }}>
              Higher-Value Revenue Streams
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {monetizationItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span className="font-heading" style={{ fontSize: 18, fontWeight: 700, color: CORAL, lineHeight: 1, minWidth: 24 }}>{i + 1}</span>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.3 }}>{item.label}</p>
                    <p style={{ fontSize: 13, color: MUTED, margin: "2px 0 0", lineHeight: 1.4 }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3 — Punchline */}
        <div style={{ flex: 0.85, display: "flex", flexDirection: "column" }}>
          <div style={{
            background: "rgba(240,168,140,0.06)", border: "2px solid rgba(240,168,140,0.25)",
            borderRadius: 16, padding: "24px 26px", flex: 1,
            display: "flex", flexDirection: "column", justifyContent: "flex-start",
            boxShadow: "0 6px 32px rgba(240,168,140,0.08)",
          }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: CORAL, margin: "0 0 6px" }}>
              VALUATION UNLOCK
            </p>
            <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#FFFFFF", margin: "0 0 18px", lineHeight: 1.25 }}>
              The Same Customer Base. <span style={{ color: CORAL }}>2× the Revenue.</span>
            </h2>

            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.70)", margin: "0 0 22px", lineHeight: 1.5 }}>
              Shifting from subscription to interaction and utilization-based pricing unlocks the latent economic potential of our existing customers — without adding a single new logo.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(240,168,140,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 24 }}>📈</span>
                </div>
                <p style={{ fontSize: 18, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.3 }}>
                  More usage → more revenue
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(240,168,140,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 24 }}>🤖</span>
                </div>
                <p style={{ fontSize: 18, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.3 }}>
                  AI → increases throughput
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(240,168,140,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 24 }}>💰</span>
                </div>
                <p style={{ fontSize: 18, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.3 }}>
                  Throughput → doubles monetization potential
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
