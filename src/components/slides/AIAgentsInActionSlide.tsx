"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Headphones, MessageSquare, CalendarCheck, CreditCard, ArrowRight, BrainCog, Plane, Briefcase } from "lucide-react";

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

const modes = [
  { icon: BrainCog, title: "Agent Assist", line: "AI supports. Humans lead." },
  { icon: Plane, title: "Autopilot", line: "AI drives. Humans oversee." },
  { icon: Briefcase, title: "Autonomous", line: "AI handles end-to-end." },
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
        style={{ padding: "48px 80px 0", flexShrink: 0 }}
      >
        <p style={{
          fontWeight: 700, fontSize: 15, letterSpacing: "0.05em",
          textTransform: "uppercase", color: "#CCC7C3", margin: 0,
        }}>
          AGENTIC USE CASES
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 48, fontWeight: 500,
            color: "#FFFFFF", margin: "8px 0 0", lineHeight: 1.15,
          }}
        >
          AI Agents in Action.
        </h1>
        <p style={{
          fontSize: 18, color: "rgba(255,255,255,0.5)", margin: "6px 0 0",
          lineHeight: 1.4,
        }}>
          From first contact to resolution — autonomous AI agents powering every customer conversation.
        </p>
      </motion.header>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{ padding: "16px 80px 0", flexShrink: 0 }}
      >
        <p style={{
          fontSize: 13, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px",
        }}>
          Customer-Facing Agents
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
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
                  borderRadius: 14, padding: "20px 20px",
                }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: "rgba(40,96,178,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 8,
                }}>
                  <Icon size={20} color="#5BA0E0" strokeWidth={1.75} />
                </div>
                <h3
                  className="font-heading"
                  style={{
                    fontSize: 20, fontWeight: 700,
                    color: "#FFFFFF", margin: 0,
                  }}
                >
                  {a.title}
                </h3>
                <p style={{
                  fontSize: 14, color: "rgba(255,255,255,0.5)",
                  margin: "6px 0 0", lineHeight: 1.45,
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
        style={{ padding: "14px 80px 0", flexShrink: 0 }}
      >
        <div style={{
          background: "rgba(40,96,178,0.08)", border: "1px solid rgba(40,96,178,0.2)",
          borderRadius: 14, padding: "16px 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {journey.map((j, i) => (
            <div key={j.step} style={{ display: "flex", alignItems: "center", gap: 18, flex: 1 }}>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  width: 34, height: 34, borderRadius: "50%",
                  border: "2px solid #2860B2",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 4px", fontSize: 14, fontWeight: 700, color: "#5BA0E0",
                }}>
                  {j.step}
                </div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF", margin: 0, whiteSpace: "nowrap" }}>{j.title}</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", margin: "2px 0 0" }}>{j.sub}</p>
              </div>
              {i < journey.length - 1 && (
                <ArrowRight size={14} color="rgba(40,96,178,0.4)" style={{ flexShrink: 0 }} />
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* AI Flexibility — Agent Assist / Autopilot / Autonomous */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        style={{ padding: "14px 80px 0", flexShrink: 0 }}
      >
        <p style={{
          fontSize: 13, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 8px",
        }}>
          AI Flexibility
        </p>
        <div style={{ display: "flex", gap: 14 }}>
          {modes.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.title} style={{
                flex: 1, background: "rgba(255,255,255,0.04)", borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "18px 20px",
                display: "flex", alignItems: "center", gap: 14,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                  background: "rgba(40,96,178,0.15)",
                  border: "1px solid rgba(40,96,178,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={22} color="#7EB3E8" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", margin: "4px 0 0", lineHeight: 1.3 }}>
                    {m.line}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Spectrum bar */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.65 }}
        style={{ padding: "10px 80px 0", flexShrink: 0 }}
      >
        <div style={{
          display: "flex", alignItems: "center",
          height: 34, borderRadius: 17,
          background: "linear-gradient(90deg, #1A447C 0%, #2860B2 100%)",
          overflow: "hidden",
        }}>
          <div style={{
            flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            paddingLeft: 12,
          }}>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>←</span>
            <span style={{
              fontSize: 11, fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.1em",
              textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif",
            }}>
              More Human
            </span>
          </div>
          <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.25)", flexShrink: 0 }} />
          <div style={{
            flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            paddingRight: 12,
          }}>
            <span style={{
              fontSize: 11, fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.1em",
              textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif",
            }}>
              More AI
            </span>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>→</span>
          </div>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
