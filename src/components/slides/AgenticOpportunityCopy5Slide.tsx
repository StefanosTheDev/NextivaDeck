"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Target, Zap, Lock, Rocket } from "lucide-react";

const ACCENT = "#0070F3";

const differentiators = [
  { icon: Target, text: "Built for the massive middle — not enterprise overflow" },
  { icon: Zap, text: "AI-native platform, not a bolt-on layer" },
  { icon: Lock, text: "Unified data moat from billions of conversations" },
  { icon: Rocket, text: "Deploy in days, not months — no IT army required" },
];

export default function AgenticOpportunityCopy5Slide({ slideNumber = 12 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow */}
      <div style={{
        position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
        width: 800, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,112,243,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.header
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        style={{ padding: "48px 80px 0", flexShrink: 0, position: "relative", zIndex: 1 }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: ACCENT, margin: "0 0 8px" }}>
          THE OPPORTUNITY
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          A massive market.{" "}
          <span style={{
            background: "linear-gradient(90deg, #0070F3, #00C2FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Most of it underserved.
          </span>
        </h1>
        <p style={{ fontSize: 20, color: "rgba(255,255,255,0.5)", margin: "14px 0 0", lineHeight: 1.5 }}>
          Incumbents fight over enterprise seats. Millions of growing businesses are left behind.
        </p>
      </motion.header>

      {/* Two big stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ display: "flex", gap: 24, padding: "32px 80px 0", position: "relative", zIndex: 1 }}
      >
        <div style={{
          flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16, padding: "36px 40px", textAlign: "center",
        }}>
          <p className="font-heading" style={{
            fontSize: 72, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1,
          }}>
            25M
          </p>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", margin: "12px 0 0", lineHeight: 1.4 }}>
            contact center seats + businesses doing CX
          </p>
        </div>
        <div style={{
          flex: 1, background: `linear-gradient(135deg, ${ACCENT}12, rgba(0,194,255,0.08))`,
          border: `1px solid ${ACCENT}30`,
          borderRadius: 16, padding: "36px 40px", textAlign: "center",
        }}>
          <p className="font-heading" style={{
            fontSize: 72, fontWeight: 700, margin: 0, lineHeight: 1,
            background: "linear-gradient(90deg, #0070F3, #00C2FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            7M+
          </p>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", margin: "12px 0 0", lineHeight: 1.4 }}>
            businesses underserved — Nextiva&apos;s white space
          </p>
        </div>
      </motion.div>

      {/* Why Nextiva wins — horizontal strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
        style={{ padding: "28px 80px 0", position: "relative", zIndex: 1 }}
      >
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 14px" }}>
          WHY NEXTIVA WINS
        </p>
        <div style={{ display: "flex", gap: 14 }}>
          {differentiators.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.text}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 + i * 0.08 }}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "20px 20px",
                  display: "flex", alignItems: "flex-start", gap: 14,
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: `${ACCENT}18`, border: `1px solid ${ACCENT}35`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={20} color={ACCENT} strokeWidth={1.75} />
                </div>
                <p style={{ fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.45 }}>
                  {d.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <div style={{ height: 24, flexShrink: 0 }} />
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
