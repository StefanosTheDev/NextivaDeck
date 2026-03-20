"use client";
import SlideFooter from "../SlideFooter";

const CORAL = "#F0A88C";
const GLASS = "rgba(255,255,255,0.05)";
const BORDER = "rgba(255,255,255,0.10)";

const positioning = [
  {
    icon: "📦",
    title: "AI in every product",
    bullets: ["Ships across the full portfolio", "Smarter tools, no vendor switch", "Drives expansion revenue"],
  },
  {
    icon: "🤖",
    title: "New standalone AI products",
    bullets: ["XBert: agentic AI agent", "NEXT: real-time data platform", "New entry points, bigger TAM"],
  },
  {
    icon: "📈",
    title: "AI bookings accelerating",
    bullets: ["22% AI-attached bookings (FY26)", "31%+ growth projected by FY28", "Additive — not cannibalization"],
  },
  {
    icon: "🔒",
    title: "Proprietary data advantage",
    bullets: ["Billions of live conversations", "A moat competitors can't copy", "Real interactions, not synthetic"],
  },
];

const structural = [
  {
    icon: "🏗️",
    title: "Own the infrastructure",
    bullets: ["Telephony, routing, carrier interconnects", "Physical network endpoints", "Below the app layer — LLMs can't replicate"],
  },
  {
    icon: "📡",
    title: "Real-time data on the edge",
    bullets: ["Always-fresh conversation data", "Static models can't replicate it", "Trained on live interactions"],
  },
  {
    icon: "⚡",
    title: "AI ships natively",
    bullets: ["Inside every product", "Deepens switching costs", "Smarter tools, same vendor"],
  },
  {
    icon: "🛡️",
    title: "Regulated industry",
    bullets: ["HIPAA, PCI, TCPA, carrier compliance", "Regulation favors certified infra", "A barrier AI startups can't clear"],
  },
];

function CardRow({ items }: { items: typeof positioning }) {
  return (
    <div style={{ display: "flex", gap: 16, width: "100%" }}>
      {items.map((item, i) => (
        <div key={i} style={{
          flex: 1,
          background: GLASS, border: `1px solid ${BORDER}`, borderRadius: 14,
          padding: "20px 20px",
          display: "flex", flexDirection: "column", gap: 10,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: "rgba(240,168,140,0.10)", border: "1px solid rgba(240,168,140,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <span style={{ fontSize: 20 }}>{item.icon}</span>
            </div>
            <h3 className="font-heading" style={{
              fontSize: 19, fontWeight: 600,
              color: "#FFFFFF", margin: 0, lineHeight: 1.2,
            }}>
              {item.title}
            </h3>
          </div>
          <ul style={{ margin: 0, padding: "0 0 0 18px", listStyle: "disc" }}>
            {item.bullets.map((b, j) => (
              <li key={j} style={{
                fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.55,
              }}>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function AITailwindVisualSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "linear-gradient(170deg, #061A37 0%, #0A1E3D 100%)",
        display: "flex", flexDirection: "column",
        overflow: "hidden", position: "relative",
      }}
      data-speaker-notes="AI is a tailwind for Nextiva. Strong AI positioning: embedded AI, standalone products, accelerating bookings, proprietary data. Structural advantages: own infrastructure, real-time edge data, native AI, regulated industry barriers."
    >
      {/* Header */}
      <header style={{ padding: "40px 80px 0", position: "relative", zIndex: 1, flexShrink: 0 }}>
        <p style={{
          fontWeight: 700, fontSize: 15, letterSpacing: "0.2em",
          textTransform: "uppercase", color: CORAL, margin: 0,
        }}>
          AI &amp; NEXTIVA
        </p>
        <h1 className="font-heading" style={{
          fontSize: 46, fontWeight: 400,
          color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15,
        }}>
          AI is a tailwind for Nextiva.
        </h1>
        <p style={{
          fontSize: 17, color: "rgba(255,255,255,0.5)", margin: "8px 0 0", lineHeight: 1.5,
        }}>
          Embedded AI drives growth. Structural advantages make it defensible.
        </p>
      </header>

      {/* Content */}
      <main style={{
        flex: 1, display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "0 80px", gap: 20,
        position: "relative", zIndex: 1,
      }}>
        {/* Row 1: Strong AI Positioning */}
        <div>
          <p style={{
            fontWeight: 700, fontSize: 13, letterSpacing: "0.18em",
            textTransform: "uppercase", color: CORAL, margin: "0 0 10px",
          }}>
            STRONG AI POSITIONING
          </p>
          <CardRow items={positioning} />
        </div>

        {/* Row 2: Structural Advantages */}
        <div>
          <p style={{
            fontWeight: 700, fontSize: 13, letterSpacing: "0.18em",
            textTransform: "uppercase", color: CORAL, margin: "0 0 10px",
          }}>
            STRUCTURAL ADVANTAGES
          </p>
          <CardRow items={structural} />
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
