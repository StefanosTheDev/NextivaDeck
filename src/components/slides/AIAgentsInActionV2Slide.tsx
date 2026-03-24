"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Headphones, MessageSquare, CalendarCheck, CreditCard, ArrowRight } from "lucide-react";

const agents = [
  { icon: Headphones, title: "Support Agent", desc: "Resolves tier-1 inquiries autonomously across voice, chat & email." },
  { icon: MessageSquare, title: "Sales Agent", desc: "Qualifies leads, answers product questions, and books demos 24/7." },
  { icon: CalendarCheck, title: "Scheduling Agent", desc: "Handles booking, rescheduling & reminders with natural conversation." },
  { icon: CreditCard, title: "Billing Agent", desc: "Processes payments, resolves disputes, and manages subscriptions instantly." },
];

const customers = [
  {
    name: "Foxy Coatings",
    photo: "/images/customer-foxy.png",
    industry: "Home Services",
    accent: "#2DD4BF",
    problems: [
      "10–20 lost sales calls/day (static IVR drops live callers)",
      "Reps stuck on admin, not selling (manual call logging)",
    ],
    solutions: [
      "Zero dropped sales opportunities",
      "Booking rate 35% → 60%",
      "40% same-day close rate",
    ],
    metrics: [
      { stat: "35%→60%", label: "Booking" },
      { stat: "$3K", label: "MRR" },
    ],
  },
  {
    name: "Vision Wheel",
    photo: "/images/customer-vision.png",
    industry: "Manufacturing",
    accent: "#6B8FAD",
    problems: [
      "Customers lost between locations (fragmented systems across 10–13 sites)",
      "Zero performance visibility (no centralized reporting)",
    ],
    solutions: [
      "Right office on the first attempt",
      "1K monthly AI interactions",
      "7 locations on one platform",
    ],
    metrics: [
      { stat: "7", label: "Locations" },
      { stat: "1K", label: "AI/Mo" },
    ],
  },
  {
    name: "Renascent Protection",
    photo: "/images/customer-renascent.png",
    industry: "Auto Warranties",
    accent: "#D4A843",
    problems: [
      "No insight into call quality (legacy platform, no AI)",
      "French/Spanish claimants underserved (no bilingual routing)",
    ],
    solutions: [
      "100K+ min/mo in EN, ES, FR",
      "Automated QA — instant compliance",
      "Real-time executive dashboards",
    ],
    metrics: [
      { stat: "100K+", label: "Min/Mo" },
      { stat: "$5.4K", label: "MRR" },
    ],
  },
  {
    name: "Sage Surfaces",
    photo: "/images/customer-sage.png",
    industry: "B2B · Countertops",
    accent: "#8FAD6B",
    problems: [
      "No visibility into agent productivity (12+ years without reporting)",
      "Revenue leaking through cracks (Excel-based CRM tracking)",
    ],
    solutions: [
      "AI deflects top call drivers",
      "Auto coaching lifts close rates",
      "Automated CRM sync",
    ],
    metrics: [
      { stat: "$5.2K", label: "MRR" },
      { stat: "$205K", label: "TCV" },
    ],
  },
];

const journey = [
  { step: 1, title: "Customer contacts", sub: "Any channel" },
  { step: 2, title: "AI Agent engages", sub: "Intent detected" },
  { step: 3, title: "Autonomous resolution", sub: "70% handled" },
  { step: 4, title: "Human escalation", sub: "If needed" },
  { step: 5, title: "Follow-up & learning", sub: "Continuous improvement" },
];

export default function AIAgentsInActionV2Slide({ slideNumber = 20 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
      data-speaker-notes="AI agents in action — from first contact to resolution. Autonomous agents powering every customer conversation. Real customer outcomes prove the model works."
    >
      {/* ── Header ── */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "40px 80px 0", flexShrink: 0 }}
      >
        <p style={{
          fontWeight: 700, fontSize: 16, letterSpacing: "0.05em",
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
          fontSize: 18, color: "rgba(255,255,255,0.5)", margin: "8px 0 0",
          lineHeight: 1.5,
        }}>
          From first contact to resolution — autonomous AI agents powering every customer conversation.
        </p>
      </motion.header>

      {/* ── Agent cards ── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{ padding: "18px 80px 0", flexShrink: 0 }}
      >
        <p style={{
          fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px",
        }}>
          Customer-Facing Agents
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {agents.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: "3px solid #2860B2",
                  borderRadius: 12, padding: "18px 18px",
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "rgba(40,96,178,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 8,
                }}>
                  <Icon size={18} color="#5BA0E0" strokeWidth={1.75} />
                </div>
                <h3
                  className="font-heading"
                  style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: 0 }}
                >
                  {a.title}
                </h3>
                <p style={{
                  fontSize: 13, color: "rgba(255,255,255,0.5)",
                  margin: "6px 0 0", lineHeight: 1.45,
                }}>
                  {a.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      <div style={{ flex: 1 }} />

      {/* ── Customer proof cards ── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ padding: "0 80px", flexShrink: 0 }}
      >
        <p style={{
          fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px",
        }}>
          Proven Customer Outcomes
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {customers.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.06 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: `3px solid ${c.accent}`,
                borderRadius: 12, padding: "14px 16px 12px",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* Company + industry */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, overflow: "hidden", flexShrink: 0,
                  border: `2px solid ${c.accent}40`,
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.photo} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <h3 className="font-heading"
                  style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", margin: 0, flex: 1, minWidth: 0 }}>
                  {c.name}
                </h3>
                <span style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.04em",
                  textTransform: "uppercase", color: "#FFFFFF",
                  background: c.accent, borderRadius: 12,
                  padding: "3px 10px", flexShrink: 0,
                }}>
                  {c.industry}
                </span>
              </div>

              {/* Problems + Solutions side by side */}
              <div style={{ display: "flex", gap: 10, flex: 1 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.06em",
                    textTransform: "uppercase", color: "#E07E7E", margin: "0 0 4px",
                  }}>Problem</p>
                  {c.problems.map((p) => (
                    <p key={p} style={{
                      fontSize: 12, color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.35, margin: "0 0 3px",
                      paddingLeft: 14, position: "relative",
                    }}>
                      <span style={{ position: "absolute", left: 0, color: "#E07E7E", fontWeight: 700, fontSize: 11 }}>✗</span>
                      {p}
                    </p>
                  ))}
                </div>
                <div style={{ width: 1, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.06em",
                    textTransform: "uppercase", color: "#7EB3E8", margin: "0 0 4px",
                  }}>Solution</p>
                  {c.solutions.map((s) => (
                    <p key={s} style={{
                      fontSize: 12, color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.35, margin: "0 0 3px",
                      paddingLeft: 14, position: "relative",
                    }}>
                      <span style={{ position: "absolute", left: 0, color: "#7EB3E8", fontSize: 11 }}>✓</span>
                      {s}
                    </p>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                marginTop: "auto", paddingTop: 6,
                display: "flex", gap: 16,
              }}>
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-heading" style={{
                      fontSize: 18, fontWeight: 700, color: "#FFFFFF",
                      margin: 0, lineHeight: 1.1,
                    }}>{m.stat}</p>
                    <p style={{
                      fontSize: 9, fontWeight: 600, textTransform: "uppercase",
                      letterSpacing: "0.04em", color: "rgba(255,255,255,0.35)",
                      margin: "2px 0 0",
                    }}>{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <div style={{ flex: 1 }} />

      {/* ── Journey ribbon ── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ padding: "14px 80px 0", flexShrink: 0 }}
      >
        <p style={{
          fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px",
        }}>
          Illustrative Customer Journey
        </p>
        <div style={{
          background: "rgba(40,96,178,0.08)", border: "1px solid rgba(40,96,178,0.2)",
          borderRadius: 12, padding: "16px 32px", width: "100%",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {journey.map((j, i) => (
            <div key={j.step} style={{ display: "flex", alignItems: "center", gap: 16, flex: 1 }}>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  border: "2px solid #2860B2",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 4px", fontSize: 14, fontWeight: 700, color: "#5BA0E0",
                }}>
                  {j.step}
                </div>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#FFFFFF", margin: 0, whiteSpace: "nowrap" }}>{j.title}</p>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", margin: "2px 0 0" }}>{j.sub}</p>
              </div>
              {i < journey.length - 1 && (
                <ArrowRight size={14} color="rgba(40,96,178,0.4)" style={{ flexShrink: 0 }} />
              )}
            </div>
          ))}
        </div>
      </motion.section>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
