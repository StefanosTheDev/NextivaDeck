"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Server, Radio, DollarSign } from "lucide-react";

const ACCENT = "#7EB3E8";

const advantages = [
  {
    icon: Server,
    num: "01",
    title: "Infrastructure",
    statement: "We own the layer AI runs on",
    implication: "High switching costs",
  },
  {
    icon: Radio,
    num: "02",
    title: "Proprietary real-time data",
    statement: "We see interactions live",
    implication: "Ground truth for AI",
  },
  {
    icon: DollarSign,
    num: "03",
    title: "Monetization at the point of action",
    statement: "We capture value per interaction",
    implication: "Direct alignment with outcomes",
  },
];

export default function DefensibilityStructuralSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          DEFENSIBILITY
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "10px 0 0",
            lineHeight: 1.15,
          }}
        >
          Three structural advantages
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "40px 100px 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          alignContent: "center",
        }}
      >
        {advantages.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: "3px solid #2860B2",
                borderRadius: 14,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(40,96,178,0.15)",
                    border: "1px solid rgba(40,96,178,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} color={ACCENT} strokeWidth={1.75} />
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    color: ACCENT,
                  }}
                >
                  {a.num}
                </span>
              </div>

              <h2
                className="font-heading"
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: "0 0 20px",
                  lineHeight: 1.25,
                }}
              >
                {a.title}
              </h2>

              <p
                style={{
                  fontSize: 18,
                  color: "rgba(255,255,255,0.6)",
                  margin: "0 0 16px",
                  lineHeight: 1.5,
                  flex: 1,
                }}
              >
                {a.statement}
              </p>

              <div
                style={{
                  borderTop: "1px solid rgba(40,96,178,0.2)",
                  paddingTop: 16,
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: ACCENT,
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  &rarr; {a.implication}
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ padding: "0 100px 12px", flexShrink: 0 }}
      >
        <div
          style={{
            background: "rgba(40,96,178,0.12)",
            border: "1px solid rgba(40,96,178,0.2)",
            borderRadius: 14,
            padding: "20px 40px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 20, color: "#FFFFFF", margin: 0, lineHeight: 1.5 }}>
            We are where AI meets the customer &mdash;{" "}
            <span style={{ fontWeight: 700, color: ACCENT }}>in real time.</span>
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
