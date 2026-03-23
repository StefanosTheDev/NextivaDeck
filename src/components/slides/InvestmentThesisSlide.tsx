"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { DollarSign, Cpu, Users, TrendingUp, Zap } from "lucide-react";

const points = [
  {
    icon: DollarSign,
    text: "$353M revenue, 70%+ margin, 90%+ recurring",
    accent: "#7EB3E8",
  },
  {
    icon: Cpu,
    text: "Positioned at intersection of AI + communications + customer data",
    accent: "#7EB3E8",
  },
  {
    icon: Users,
    text: "Serving underserved massive middle (millions of businesses)",
    accent: "#7EB3E8",
  },
  {
    icon: TrendingUp,
    text: "Transitioning to usage + outcome-based monetization",
    accent: "#7EB3E8",
  },
  {
    icon: Zap,
    text: "AI drives expansion, not disruption",
    accent: "#7EB3E8",
  },
];

export default function InvestmentThesisSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          Investment Thesis
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 60,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Nextiva: The Infrastructure Layer for Agentic CX.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "16px 100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 12,
        }}
      >
        {points.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 14,
                padding: "24px 36px",
                display: "flex",
                alignItems: "center",
                gap: 24,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: "rgba(40,96,178,0.2)",
                  border: "1px solid rgba(40,96,178,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={26} color={p.accent} strokeWidth={1.75} />
              </div>
              <p
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {p.text}
              </p>
            </motion.div>
          );
        })}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
