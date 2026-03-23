"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { TrendingUp, Radio, DollarSign, Award, Sparkles } from "lucide-react";

const ACCENT = "#7EB3E8";

const points = [
  { icon: TrendingUp, text: "Scaled and profitable" },
  { icon: Radio, text: "Embedded in customer communication" },
  { icon: DollarSign, text: "Expanding monetization model" },
  { icon: Award, text: "Positioned to lead the Agentic CX category" },
  { icon: Sparkles, text: "Every interaction becomes an opportunity to create value" },
];

export default function ThankYouV2Slide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 60%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 1100,
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          THANK YOU
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 500,
            color: "#FFFFFF",
            marginTop: 24,
            lineHeight: 1.2,
          }}
        >
          Nextiva is building the infrastructure
          <br />
          for the{" "}
          <span style={{ color: ACCENT }}>AI-driven customer economy.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{
            width: 56,
            height: 3,
            background: "#2860B2",
            margin: "36px 0 32px",
            borderRadius: 2,
            transformOrigin: "center",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "flex-start",
          }}
        >
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.text}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                style={{ display: "flex", alignItems: "center", gap: 16 }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(40,96,178,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color={ACCENT} strokeWidth={1.75} />
                </div>
                <p
                  style={{
                    fontSize: 22,
                    color: "rgba(255,255,255,0.7)",
                    margin: 0,
                    lineHeight: 1.4,
                    fontWeight: 500,
                    textAlign: "left",
                  }}
                >
                  {p.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
