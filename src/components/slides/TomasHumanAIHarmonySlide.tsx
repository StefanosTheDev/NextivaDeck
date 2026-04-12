"use client";
import { motion } from "framer-motion";
import { Bot, ScanEye, UserCheck } from "lucide-react";
import SlideFooter from "../SlideFooter";

const MODES = [
  {
    icon: Bot,
    title: "Autonomous",
    description: "AI Agents trained on business + customer data",
    accent: "rgba(40,96,178,0.25)",
    border: "rgba(40,96,178,0.4)",
  },
  {
    icon: ScanEye,
    title: "Autopilot",
    description: "AI Agents with Human Oversight to escalate",
    accent: "rgba(40,96,178,0.18)",
    border: "rgba(40,96,178,0.35)",
  },
  {
    icon: UserCheck,
    title: "Agent Assist",
    description: "Humans with AI Assistance & Oversight",
    accent: "rgba(40,96,178,0.12)",
    border: "rgba(40,96,178,0.3)",
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
          "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 100px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading"
          style={{
            fontSize: 64,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "0 0 48px",
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          Human + AI <span style={{ color: "#7EB3E8" }}>in harmony</span>
        </motion.h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            width: "100%",
            maxWidth: 1100,
          }}
        >
          {MODES.map((mode, i) => (
            <motion.article
              key={mode.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              style={{
                background: mode.accent,
                border: `1px solid ${mode.border}`,
                borderRadius: 14,
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "rgba(126,179,232,0.12)",
                  border: "1px solid rgba(126,179,232,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <mode.icon size={28} color="#7EB3E8" strokeWidth={1.75} />
              </div>
              <h2
                className="font-heading"
                style={{
                  fontSize: 28,
                  fontWeight: 500,
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                {mode.title}
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "rgba(255,255,255,0.65)",
                  margin: 0,
                  lineHeight: 1.45,
                }}
              >
                {mode.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{
            marginTop: 32,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 10,
            padding: "14px 40px",
            textAlign: "center",
            width: "100%",
            maxWidth: 1100,
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
        </motion.div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
