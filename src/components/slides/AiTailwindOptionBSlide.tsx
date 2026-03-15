"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Layers, Package, TrendingUp, Shield } from "lucide-react";

const segments = [
  { icon: Layers, phrase: "Ship across products", stat: "Expansion" },
  { icon: Package, phrase: "New entry points", stat: "XBert + NEXT" },
  { icon: TrendingUp, phrase: "22%→31%+", stat: "AI bookings" },
  { icon: Shield, phrase: "Real data moat", stat: "Billions" },
];

export default function AiTailwindOptionBSlide({ slideNumber = 51 }: { slideNumber?: number }) {
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
        style={{ padding: "48px 80px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 8px" }}>
          AI TAILWIND — OPTION B
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AI is the tailwind — not the thesis.
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: "10px 0 0", lineHeight: 1.5 }}>
          Radial layout — minimal copy.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 80px" }}
      >
        <div style={{ position: "relative", width: 520, height: 320 }}>
          {/* Center hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
              width: 120, height: 120, borderRadius: "50%",
              background: "radial-gradient(circle at 50% 50%, rgba(40,96,178,0.4) 0%, rgba(40,96,178,0.15) 100%)",
              border: "2px solid rgba(126,179,232,0.4)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF" }}>AI</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>tailwind</span>
          </motion.div>

          {/* Four segments in diamond / cross */}
          {segments.map((s, i) => {
            const Icon = s.icon;
            const positions = [
              { top: 0, left: "50%", transform: "translateX(-50%)" },
              { bottom: 0, left: "50%", transform: "translateX(-50%)" },
              { left: 0, top: "50%", transform: "translateY(-50%)" },
              { right: 0, top: "50%", transform: "translateY(-50%)" },
            ];
            return (
              <motion.div
                key={s.phrase}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                style={{
                  position: "absolute", ...positions[i],
                  width: 160, padding: "20px 16px",
                  background: "rgba(40,96,178,0.12)", border: "1px solid rgba(40,96,178,0.25)",
                  borderRadius: 14, textAlign: "center",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                }}
              >
                <Icon size={24} color="#7EB3E8" strokeWidth={1.75} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>{s.phrase}</span>
                <span style={{ fontSize: 12, color: "#7EB3E8" }}>{s.stat}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
