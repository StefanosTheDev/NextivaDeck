"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Server, Database, Layers, ShieldCheck, Package, TrendingUp, Shield } from "lucide-react";

const positioningCards: { icon: typeof Layers; title: string; bullets: string[] }[] = [
  {
    icon: Layers,
    title: "AI embedded in all products",
    bullets: [
      "AI ships across entire product portfolio",
      "Smarter tools without switching",
      "Expansion revenue driver",
    ],
  },
  {
    icon: Package,
    title: "New standalone AI offerings",
    bullets: [
      "XBert: agentic AI agent",
      "NEXT: real-time data platform",
      "New entry points expand addressable market",
    ],
  },
  {
    icon: TrendingUp,
    title: "AI bookings acceleration",
    bullets: [
      "22% of bookings AI-attached (FY26)",
      "Projected growth 31%+ by FY28",
      "Additive revenue, not cannibalization",
    ],
  },
  {
    icon: Shield,
    title: "Proprietary data advantage",
    bullets: [
      "Billions of live conversations",
      "Data moat competitors cannot replicate",
      "Trained on real interactions, not synthetic data",
    ],
  },
];

const structuralCards: { icon: typeof Server; title: string; bullets: string[] }[] = [
  {
    icon: Server,
    title: "Communications infrastructure stack",
    bullets: [
      "Telephony, routing, carrier interconnects",
      "Physical network endpoints",
      "LLMs unable to replicate below the app layer",
    ],
  },
  {
    icon: Database,
    title: "Proprietary real-time data on the edge",
    bullets: [
      "Always-fresh conversational data",
      "Static models cannot replicate this data",
      "AI trained on live interactions, not synthetic benchmarks",
    ],
  },
  {
    icon: Layers,
    title: "Native AI approach",
    bullets: [
      "AI ships inside every product",
      "Deepens switching costs per interaction",
      "Smarter tools without changing vendors",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Highly regulated industry",
    bullets: [
      "HIPAA, PCI, TCPA, carrier compliance",
      "Regulation favors certified infrastructure",
      "Barriers no vibe-coded alternative can clear",
    ],
  },
];

const bottomStats = [
  { stat: "Additive", label: "Net new AI revenue — not cannibalization" },
  { stat: "22%", label: "AI-attached bookings (FY26)" },
  { stat: "50%+", label: "AI bookings CAGR" },
  { stat: "92%", label: "Net dollar retention" },
];

const cardStyle = {
  flex: 1,
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderTop: "3px solid #2860B2",
  borderRadius: 14,
  padding: "24px 22px",
  display: "flex" as const,
  flexDirection: "column" as const,
};

const sectionLabelStyle = {
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: "#7EB3E8",
  margin: "0 0 6px",
  padding: "0 80px",
};

export default function AiTailwind4Slide({ slideNumber = 13 }: { slideNumber?: number }) {
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
        style={{ padding: "36px 80px 0", flexShrink: 0 }}
      >
        <p style={{ fontWeight: 700, fontSize: 20, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 8px" }}>
          AI & NEXTIVA
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AI is a tailwind for Nextiva.
        </h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", margin: "8px 0 0", lineHeight: 1.5 }}>
          Embedded AI provides growth potential, while long-term structural advantages promote defensibility.
        </p>
      </motion.header>

      {/* Spacer — 1/3 of available space above first row */}
      <div style={{ flex: 1 }} />

      {/* Strong AI Positioning label */}
      <p style={{ ...sectionLabelStyle }}>
        Strong AI Positioning
      </p>

      {/* Top row — positioning cards from slide 25 */}
      <motion.div
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
        style={{ display: "flex", gap: 14, padding: "0 80px", alignItems: "stretch", flexShrink: 0 }}
      >
        {positioningCards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} style={cardStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: "rgba(40,96,178,0.15)", border: "1px solid rgba(40,96,178,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Icon size={22} color="#7EB3E8" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>
                  {c.title}
                </h3>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {c.bullets.map((b) => (
                  <li key={b} style={{ fontSize: 20, color: "rgba(255,255,255,0.45)", lineHeight: 1.45, marginBottom: 4, paddingLeft: 18, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#7EB3E8", fontSize: 18 }}>•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </motion.div>

      {/* Spacer — push structural advantages halfway to stats bar */}
      <div style={{ flex: 1 }} />

      {/* Structural Advantages label */}
      <p style={{ ...sectionLabelStyle }}>
        Structural Advantages
      </p>

      {/* Bottom row — structural defense cards */}
      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
        style={{ display: "flex", gap: 14, padding: "0 80px", alignItems: "stretch", flexShrink: 0 }}
      >
        {structuralCards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} style={cardStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: "rgba(40,96,178,0.15)", border: "1px solid rgba(40,96,178,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Icon size={22} color="#7EB3E8" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>
                  {c.title}
                </h3>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {c.bullets.map((b) => (
                  <li key={b} style={{ fontSize: 20, color: "rgba(255,255,255,0.45)", lineHeight: 1.45, marginBottom: 4, paddingLeft: 18, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#7EB3E8", fontSize: 18 }}>•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </motion.main>

      {/* Spacer — remaining 2/3 of available space below card rows */}
      <div style={{ flex: 2 }} />

      {/* Nextiva Impact label */}
      <p style={{ ...sectionLabelStyle, marginBottom: 6 }}>
        Nextiva Impact
      </p>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.35 }}
        style={{ padding: "14px 80px 8px", flexShrink: 0 }}
      >
        <div style={{
          display: "flex",
          background: "rgba(40,96,178,0.12)", border: "1px solid rgba(40,96,178,0.2)",
          borderRadius: 14, overflow: "hidden",
        }}>
          {bottomStats.map((s, i) => (
            <div key={s.label} style={{
              flex: 1, padding: "16px 20px", textAlign: "center",
              borderRight: i < bottomStats.length - 1 ? "1px solid rgba(40,96,178,0.2)" : "none",
            }}>
              <p className="font-heading" style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1 }}>{s.stat}</p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", margin: "4px 0 0" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
