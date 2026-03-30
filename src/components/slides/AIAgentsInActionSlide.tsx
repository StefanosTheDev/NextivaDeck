"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Headphones, MessageSquare, CalendarCheck, CreditCard } from "lucide-react";

const ACCENT = "#0070F3";

const agents = [
  { icon: Headphones, label: "Support Agent", action: "Resolves issues autonomously" },
  { icon: MessageSquare, label: "Sales Agent", action: "Captures and qualifies leads" },
  { icon: CalendarCheck, label: "Scheduling Agent", action: "Books appointments" },
  { icon: CreditCard, label: "Billing Agent", action: "Handles disputes and payments" },
];

export default function AIAgentsInActionSlide({ slideNumber = 20 }: { slideNumber?: number }) {
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
        position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
        width: 800, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,112,243,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.header
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        style={{ padding: "48px 80px 0", flexShrink: 0, position: "relative", zIndex: 1 }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          AGENTIC AI
        </p>
        <h1 className="font-heading" style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}>
          AI agents handling{" "}
          <span style={{
            background: "linear-gradient(90deg, #0070F3, #00C2FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            end-to-end workflows.
          </span>
        </h1>
        <p style={{ fontSize: 20, color: "rgba(255,255,255,0.5)", margin: "14px 0 0", lineHeight: 1.5 }}>
          Unlimited agents that work independently or together from first contact to resolution — automated and intelligent.
        </p>
      </motion.header>

      {/* Agent cards */}
      <motion.main
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
        style={{
          flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
          gap: 16, padding: "32px 80px 0", position: "relative", zIndex: 1,
        }}
      >
        {agents.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
              style={{
                display: "flex", alignItems: "center", gap: 24,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderLeft: `4px solid ${ACCENT}`,
                borderRadius: 14,
                padding: "24px 32px",
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon size={26} color={ACCENT} strokeWidth={1.75} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1 }}>
                <p className="font-heading" style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", margin: 0, minWidth: 220 }}>
                  {a.label}
                </p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M5 12h14M13 6l6 6-6 6" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p style={{ fontSize: 20, fontWeight: 500, color: "rgba(255,255,255,0.65)", margin: 0 }}>
                  {a.action}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.main>

      <div style={{ height: 24, flexShrink: 0 }} />
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
