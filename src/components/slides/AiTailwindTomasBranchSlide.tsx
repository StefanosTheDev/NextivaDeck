"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Layers, TrendingUp, DollarSign, Shield } from "lucide-react";

const ACCENT = "#0070F3";

const cards = [
  {
    icon: Layers,
    title: "Embedded across the entire platform",
    body: "AI ships inside every product — not bolted on. Customers get smarter without switching tools.",
    accent: "#0070F3",
  },
  {
    icon: TrendingUp,
    title: "More interactions → more usage",
    body: "AI increases throughput per customer, driving higher engagement and expanding revenue per account.",
    accent: "#00C2FF",
  },
  {
    icon: DollarSign,
    title: "New monetization models",
    body: "Per-interaction, per-resolution, per-outcome pricing — unlocking revenue beyond seat-based subscriptions.",
    accent: "#7B61FF",
  },
  {
    icon: Shield,
    title: "Increases switching costs",
    body: "AI learns from every conversation. The longer customers stay, the smarter it gets — deepening the moat over time.",
    accent: "#00D68F",
  },
];

const bottomStats = [
  { stat: "Embedded", label: "Across the full platform" },
  { stat: "Additive", label: "Growth, not cannibalization" },
  { stat: "Usage", label: "Scales with interactions, not seats" },
  { stat: "Durable", label: "Switching costs compound" },
];

export default function AiTailwindTomasBranchSlide({ slideNumber = 13 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow behind cards */}
      <div style={{
        position: "absolute", top: "35%", left: "50%", transform: "translate(-50%, -50%)",
        width: 900, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,112,243,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.header
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        style={{ padding: "48px 80px 0", flexShrink: 0, position: "relative", zIndex: 1 }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          AI + NEXTIVA
        </p>
        <h1 className="font-heading" style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}>
          AI expands Nextiva&apos;s{" "}
          <span style={{
            background: "linear-gradient(90deg, #0070F3, #00C2FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            durability and opportunity.
          </span>
        </h1>
        <p style={{ fontSize: 20, color: "rgba(255,255,255,0.5)", margin: "14px 0 0", lineHeight: 1.5 }}>
          Not disruption — expansion. Every AI feature deepens the platform moat.
        </p>
      </motion.header>

      {/* Four cards — staggered */}
      <motion.main
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
        style={{ flex: 1, display: "flex", gap: 18, padding: "28px 80px 0", alignItems: "stretch", position: "relative", zIndex: 1 }}
      >
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: `3px solid ${c.accent}`,
                borderRadius: 14,
                padding: "28px 24px",
                display: "flex", flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Card corner glow */}
              <div style={{
                position: "absolute", top: -30, right: -30,
                width: 100, height: 100, borderRadius: "50%",
                background: `radial-gradient(circle, ${c.accent}15, transparent 70%)`,
                pointerEvents: "none",
              }} />
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: `${c.accent}18`, border: `1px solid ${c.accent}40`,
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18,
              }}>
                <Icon size={24} color={c.accent} strokeWidth={1.75} />
              </div>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: "0 0 10px", lineHeight: 1.25 }}>
                {c.title}
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>
                {c.body}
              </p>
            </motion.div>
          );
        })}
      </motion.main>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }}
        style={{ padding: "16px 80px 24px", flexShrink: 0, position: "relative", zIndex: 1 }}
      >
        <div style={{
          display: "flex",
          background: "linear-gradient(135deg, rgba(0,112,243,0.1), rgba(0,194,255,0.08))",
          border: "1px solid rgba(0,112,243,0.2)",
          borderRadius: 14, overflow: "hidden",
        }}>
          {bottomStats.map((s, i) => (
            <div key={s.label} style={{
              flex: 1, padding: "20px 24px", textAlign: "center",
              borderRight: i < bottomStats.length - 1 ? "1px solid rgba(0,112,243,0.15)" : "none",
            }}>
              <p className="font-heading" style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1 }}>{s.stat}</p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", margin: "6px 0 0" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
