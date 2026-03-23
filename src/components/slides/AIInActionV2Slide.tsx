"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Headphones, MessageSquare, CalendarCheck, CreditCard, ArrowRight } from "lucide-react";

const ACCENT = "#7EB3E8";

const agents = [
  {
    icon: Headphones,
    label: "Support agent",
    action: "resolves issues autonomously",
  },
  {
    icon: MessageSquare,
    label: "Sales agent",
    action: "captures and qualifies leads",
  },
  {
    icon: CalendarCheck,
    label: "Scheduling agent",
    action: "books appointments",
  },
  {
    icon: CreditCard,
    label: "Billing agent",
    action: "handles disputes and payments",
  },
];

export default function AIInActionV2Slide({ slideNumber = 0 }: { slideNumber?: number }) {
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
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          AI IN ACTION
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 60,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "12px 0 0",
            lineHeight: 1.15,
          }}
        >
          AI agents handling end-to-end workflows
        </h1>
      </motion.header>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          flex: 1,
          padding: "48px 100px 0",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          alignContent: "center",
        }}
      >
        {agents.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.article
              key={a.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: "3px solid #2860B2",
                borderRadius: 14,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "rgba(40,96,178,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={26} color="#5BA0E0" strokeWidth={1.75} />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <h3
                  className="font-heading"
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {a.label}
                </h3>
                <ArrowRight size={18} color={ACCENT} strokeWidth={2} style={{ flexShrink: 0 }} />
              </div>

              <p
                style={{
                  fontSize: 18,
                  color: "rgba(255,255,255,0.55)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {a.action}
              </p>
            </motion.article>
          );
        })}
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ padding: "0 100px 12px", flexShrink: 0 }}
      >
        <div
          style={{
            background: "rgba(40,96,178,0.08)",
            border: "1px solid rgba(40,96,178,0.2)",
            borderRadius: 14,
            padding: "20px 40px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 20, color: "#FFFFFF", margin: 0, lineHeight: 1.5 }}>
            From first contact to resolution &mdash;{" "}
            <span style={{ fontWeight: 700, color: ACCENT }}>automated and intelligent.</span>
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
