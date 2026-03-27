"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const ACCENT = "#0070F3";

export default function BetterOutcomesCopySlide({ slideNumber = 4 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 40%, rgba(15,44,89,0.5) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: "35%", left: "50%", transform: "translate(-50%, -50%)",
        width: 700, height: 350, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,112,243,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 100px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: "rgba(0,112,243,0.12)",
            border: "1px solid rgba(0,112,243,0.25)",
            borderRadius: 8,
            padding: "8px 20px",
            marginBottom: 36,
          }}
        >
          <span style={{
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: ACCENT,
          }}>
            Our Purpose
          </span>
        </motion.div>

        {/* Primary headline — the purpose */}
        <motion.h1
          className="font-heading"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            fontSize: 64,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
            textAlign: "center",
          }}
        >
          Helping businesses build
          <br />
            deeper customer relationships.
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            width: 80,
            height: 3,
            background: `linear-gradient(90deg, ${ACCENT}, #00C2FF)`,
            marginTop: 36,
            borderRadius: 2,
          }}
        />

        {/* How — secondary statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.5)",
            margin: "28px 0 0",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        >
          By turning every customer interaction into real-time outcomes.
        </motion.p>

        {/* Three pillars */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ display: "flex", gap: 16, marginTop: 40 }}
        >
          {["Every conversation matters", "Every interaction counts", "Every outcome is measurable"].map((label) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10,
                padding: "14px 24px",
              }}
            >
              <span style={{ fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.55)" }}>
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
