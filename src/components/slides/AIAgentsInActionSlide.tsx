"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Headphones, MessageSquare, CalendarCheck, CreditCard, ArrowRight } from "lucide-react";

const agents = [
  { icon: Headphones, title: "Support Agent", desc: "Resolves tier-1 inquiries autonomously across voice, chat & email — escalating only when needed." },
  { icon: MessageSquare, title: "Sales Agent", desc: "Qualifies leads, answers product questions, and books demos — 24/7 without human intervention." },
  { icon: CalendarCheck, title: "Scheduling Agent", desc: "Handles appointment booking, rescheduling & reminders with natural conversation." },
  { icon: CreditCard, title: "Billing Agent", desc: "Processes payments, resolves billing disputes, and manages subscription changes instantly." },
];

const journey = [
  { step: 1, title: "Customer contacts", sub: "Any channel" },
  { step: 2, title: "AI Agent engages", sub: "Intent detected" },
  { step: 3, title: "Autonomous resolution", sub: "70% handled" },
  { step: 4, title: "Human escalation", sub: "If needed" },
  { step: 5, title: "Follow-up & learning", sub: "Continuous improvement" },
];

export default function AIAgentsInActionSlide({ slideNumber = 20 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
      data-speaker-notes="AI agents in action — from first contact to resolution. Autonomous agents powering every customer conversation."
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{
          fontWeight: 700, fontSize: 18, letterSpacing: "0.05em",
          textTransform: "uppercase", color: "#CCC7C3", margin: 0,
        }}>
          AGENTIC USE CASES
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 60, fontWeight: 500,
            color: "#FFFFFF", margin: "12px 0 0", lineHeight: 1.15,
          }}
        >
          AI Agents in Action.
        </h1>
        <p style={{
          fontSize: 22, color: "rgba(255,255,255,0.5)", margin: "12px 0 0",
          lineHeight: 1.5, maxWidth: 900,
        }}>
          From first contact to resolution — autonomous AI agents powering every customer conversation.
        </p>
      </motion.header>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{ padding: "28px 80px 0", flexShrink: 0 }}
      >
        <p style={{
          fontSize: 13, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 14px",
        }}>
          Customer-Facing Agents
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {agents.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: "3px solid #2860B2",
                  borderRadius: 14, padding: "26px 24px",
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: "rgba(40,96,178,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 10,
                }}>
                  <Icon size={22} color="#5BA0E0" strokeWidth={1.75} />
                </div>
                <h3
                  className="font-heading"
                  style={{
                    fontSize: 22, fontWeight: 700,
                    color: "#FFFFFF", margin: 0,
                  }}
                >
                  {a.title}
                </h3>
                <p style={{
                  fontSize: 15, color: "rgba(255,255,255,0.5)",
                  margin: "8px 0 0", lineHeight: 1.5,
                }}>
                  {a.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ padding: "24px 80px 0", flex: 1 }}
      >
        <div style={{
          background: "rgba(40,96,178,0.08)", border: "1px solid rgba(40,96,178,0.2)",
          borderRadius: 14, padding: "24px 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {journey.map((j, i) => (
            <div key={j.step} style={{ display: "flex", alignItems: "center", gap: 20, flex: 1 }}>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  border: "2px solid #2860B2",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 6px", fontSize: 16, fontWeight: 700, color: "#5BA0E0",
                }}>
                  {j.step}
                </div>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF", margin: 0, whiteSpace: "nowrap" }}>{j.title}</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", margin: "4px 0 0" }}>{j.sub}</p>
              </div>
              {i < journey.length - 1 && (
                <ArrowRight size={16} color="rgba(40,96,178,0.4)" style={{ flexShrink: 0 }} />
              )}
            </div>
          ))}
        </div>
      </motion.section>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
