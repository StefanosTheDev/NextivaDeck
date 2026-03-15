"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Layers, Package, TrendingUp, Shield } from "lucide-react";

const pairs = [
  { icon: Layers, phrase: "AI in every product", metric: "Expansion revenue" },
  { icon: Package, phrase: "XBert + NEXT", metric: "New entry points" },
  { icon: TrendingUp, phrase: "AI bookings", metric: "22% → 31%+ (FY28)" },
  { icon: Shield, phrase: "Billions of conversations", metric: "Unreplicable" },
];

export default function AiTailwindOptionASlide({ slideNumber = 50 }: { slideNumber?: number }) {
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
          AI TAILWIND — OPTION A
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AI is the tailwind — not the thesis.
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: "10px 0 0", lineHeight: 1.5 }}>
          Headline + number pairs.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, padding: "24px 80px", alignContent: "center" }}
      >
        {pairs.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.phrase}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16, padding: "36px 28px", gap: 16,
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: "rgba(40,96,178,0.15)", border: "1px solid rgba(40,96,178,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon size={24} color="#7EB3E8" strokeWidth={1.75} />
              </div>
              <p style={{ fontSize: 18, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.3 }}>
                {p.phrase}
              </p>
              <p style={{ fontSize: 24, fontWeight: 700, color: "#7EB3E8", margin: 0, lineHeight: 1.2 }}>
                {p.metric}
              </p>
            </motion.div>
          );
        })}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
