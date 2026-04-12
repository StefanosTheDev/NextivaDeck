"use client";
import { motion } from "framer-motion";
import { Bot, ScanEye, UserCheck } from "lucide-react";
import SlideFooter from "../SlideFooter";

const MODES = [
  {
    icon: Bot,
    title: "Autonomous",
    description: "AI Agents trained on business + customer data",
  },
  {
    icon: ScanEye,
    title: "Autopilot",
    description: "AI Agents with Human Oversight to escalate",
  },
  {
    icon: UserCheck,
    title: "Agent Assist",
    description: "Humans with AI Assistance & Oversight",
  },
];

export default function TomasHumanAIHarmonySlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      {/* Header at top */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "72px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 12px" }}>
          AGENTIC CX FRAMEWORK
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 64,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Human + AI <span style={{ color: "#2860B2" }}>in harmony</span>
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.45)", margin: "14px 0 0", lineHeight: 1.4 }}>
          A spectrum of AI autonomy, calibrated to your business.
        </p>
      </motion.header>

      {/* 3 cards + balance bar centered together */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 100px",
          gap: 24,
          marginTop: -40,
        }}
      >
        <div style={{ display: "flex", gap: 24, width: "100%" }}>
        {MODES.map((mode, i) => {
          const Icon = mode.icon;
          return (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "44px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 18,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "rgba(40,96,178,0.15)",
                  border: "1px solid rgba(40,96,178,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={34} color="#7EB3E8" strokeWidth={1.5} />
              </div>
              <h2
                className="font-heading"
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                {mode.title}
              </h2>
              <p
                style={{
                  fontSize: 18,
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                  lineHeight: 1.45,
                }}
              >
                {mode.description}
              </p>
            </motion.div>
          );
        })}
        </div>

        {/* Balance bar right under the cards */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 10,
            padding: "14px 40px",
            textAlign: "center",
            width: "100%",
          }}
        >
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.5)",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            Balance of (Maturity, Business Risk/Reward, Preferences)
          </p>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
