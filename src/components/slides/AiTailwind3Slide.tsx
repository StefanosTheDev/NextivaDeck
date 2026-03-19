"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Server, Database, Layers, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

const cards: { icon: typeof Server; title: string; body: ReactNode }[] = [
  {
    icon: Server,
    title: "Deep communications infrastructure stack",
    body: "Telephony, real-time routing, carrier interconnects, and physical network endpoints. LLMs operate above the app layer — they cannot replicate what lives below it.",
  },
  {
    icon: Database,
    title: "Proprietary real-time data on the edge",
    body: "Billions of always-fresh conversations generate a data moat that static models cannot reproduce. Our AI is trained on live interaction data, not synthetic benchmarks.",
  },
  {
    icon: Layers,
    title: "AI embedded, not bolted on",
    body: "AI ships inside the platform across every product. It deepens switching costs with every interaction — customers get smarter tools without changing vendors.",
  },
  {
    icon: ShieldCheck,
    title: "Highly regulated industry",
    body: (<>HIPAA, PCI, TCPA, and carrier compliance create barriers no vibe-coded alternative can clear. Regulation protects incumbents with certified infrastructure.<br /><span style={{ visibility: "hidden" }}>.</span></>),
  },
];

const bottomStats = [
  { stat: "Additive", label: "Net new AI revenue — not cannibalization" },
  { stat: "22%", label: "AI-attached bookings (FY26)" },
  { stat: "50%+", label: "AI bookings CAGR" },
  { stat: "92%", label: "Net dollar retention" },
];

export default function AiTailwind3Slide({ slideNumber = 13 }: { slideNumber?: number }) {
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
        style={{ padding: "48px 80px 0", flexShrink: 0 }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 8px" }}>
          AI & NEXTIVA
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          Why AI Strengthens — Not Threatens — Our Business.
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: "10px 0 0", lineHeight: 1.5 }}>
          Four structural defenses that put us on the right side of the AI divide.
        </p>
      </motion.header>

      {/* Four cards */}
      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ display: "flex", gap: 16, padding: "28px 80px 0", alignItems: "stretch" }}
      >
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} style={{
              flex: 1,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderTop: "3px solid #2860B2",
              borderRadius: 14,
              padding: "28px 24px",
              display: "flex", flexDirection: "column",
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "rgba(40,96,178,0.15)", border: "1px solid rgba(40,96,178,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18,
              }}>
                <Icon size={22} color="#7EB3E8" strokeWidth={1.75} />
              </div>
              <h3 className="font-heading" style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", margin: "0 0 12px", lineHeight: 1.25 }}>
                {c.title}
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.55, margin: 0 }}>
                {c.body}
              </p>
            </div>
          );
        })}
      </motion.main>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.35 }}
        style={{ padding: "16px 80px 8px", flexShrink: 0 }}
      >
        <div style={{
          display: "flex",
          background: "rgba(40,96,178,0.12)", border: "1px solid rgba(40,96,178,0.2)",
          borderRadius: 14, overflow: "hidden",
        }}>
          {bottomStats.map((s, i) => (
            <div key={s.label} style={{
              flex: 1, padding: "20px 24px", textAlign: "center",
              borderRight: i < bottomStats.length - 1 ? "1px solid rgba(40,96,178,0.2)" : "none",
            }}>
              <p className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1 }}>{s.stat}</p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", margin: "6px 0 0" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
