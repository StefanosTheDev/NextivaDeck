"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { MessageCircle, Route, Users, DollarSign } from "lucide-react";

const ACCENT = "#0070F3";

const steps = [
  {
    icon: MessageCircle,
    label: "Intent",
    detail: "Customer reaches out to learn, solve, or buy.",
  },
  {
    icon: Route,
    label: "Channel",
    detail: "Any channel, any time — sync or async.",
  },
  {
    icon: Users,
    label: "Journey",
    detail: "Human + AI working together in real time.",
  },
  {
    icon: DollarSign,
    label: "Outcome",
    detail: "Resolution, engagement, or upsell — every time.",
  },
];

export default function ConversationalCommerceCopySlide({ slideNumber = 40 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: "35%", left: "50%", transform: "translate(-50%, -50%)",
        width: 900, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,112,243,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.header
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        style={{ padding: "48px 80px 0", flexShrink: 0, textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: ACCENT, margin: "0 0 8px" }}>
          THE STRATEGIC ADVANTAGE
        </p>
        <h1 className="font-heading" style={{ fontSize: 56, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          Data + AI with communication{" "}
          <span style={{
            background: "linear-gradient(90deg, #0070F3, #00C2FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            as a superpower.
          </span>
        </h1>
        <p style={{ fontSize: 20, color: "rgba(255,255,255,0.5)", margin: "14px 0 0", lineHeight: 1.5 }}>
          Every conversation starts with intent and ends with a commercial outcome.
        </p>
      </motion.header>

      {/* Four-step flow */}
      <motion.main
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1, display: "flex", alignItems: "center", gap: 0,
          padding: "32px 80px 0", marginTop: -40, position: "relative", zIndex: 1,
        }}
      >
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.label} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.12 }}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: `3px solid ${ACCENT}`,
                  borderRadius: 16,
                  padding: "40px 28px",
                  textAlign: "center",
                  display: "flex", flexDirection: "column", alignItems: "center",
                }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20,
                }}>
                  <Icon size={28} color={ACCENT} strokeWidth={1.75} />
                </div>
                <p className="font-heading" style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                  {s.label}
                </p>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", margin: "12px 0 0", lineHeight: 1.5 }}>
                  {s.detail}
                </p>
              </motion.div>
              {i < steps.length - 1 && (
                <div style={{ flexShrink: 0, padding: "0 12px", display: "flex", alignItems: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </motion.main>

      {/* Bottom tagline */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
        style={{ padding: "16px 80px 24px", flexShrink: 0, position: "relative", zIndex: 1 }}
      >
        <div style={{
          background: "linear-gradient(135deg, rgba(0,112,243,0.1), rgba(0,194,255,0.06))",
          border: `1px solid ${ACCENT}20`,
          borderRadius: 14, padding: "20px 40px", textAlign: "center",
        }}>
          <p style={{ fontSize: 18, fontWeight: 600, color: "rgba(255,255,255,0.7)", margin: 0 }}>
            Reduce friction to engage and transact — turning every interaction into commerce.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
