import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";
import { Headphones, MessageSquare, CalendarCheck, CreditCard, ArrowRight } from "lucide-react";

const CORAL = "#F0A88C";

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

const SlideAIAgentsInAction = ({ slideNumber = "12" }: { slideNumber?: string }) => (
  <div
    style={{
      width: 1920, height: 1080,
      background: `linear-gradient(170deg, ${COLORS.midnightNavy} 0%, #0A1E3D 100%)`,
      display: "flex", flexDirection: "column", fontFamily: FONTS.body,
      overflow: "hidden", position: "relative",
    }}
    data-speaker-notes="AI agents in action — from first contact to resolution. Autonomous agents powering every customer conversation."
  >
    {/* Subtle glow */}
    <div style={{
      position: "absolute", bottom: -200, right: -100,
      width: 1000, height: 600, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(240,168,140,0.08) 0%, transparent 70%)",
    }} />

    <header style={{ padding: "72px 120px 0", position: "relative", zIndex: 1 }}>
      <p style={{
        fontWeight: 700, fontSize: 18, letterSpacing: "0.2em",
        textTransform: "uppercase", color: CORAL, margin: 0,
      }}>
        AGENTIC USE CASES
      </p>
      <h1 style={{
        fontFamily: FONTS.heading, fontSize: 68, fontWeight: 600,
        color: COLORS.pureWhite, margin: "16px 0 0", lineHeight: 1.15,
      }}>
        AI Agents in Action.
      </h1>
      <p style={{
        fontSize: 26, color: "rgba(255,255,255,0.55)", margin: "16px 0 0",
        lineHeight: 1.5, maxWidth: 1000,
      }}>
        From first contact to resolution — autonomous AI agents powering every customer conversation.
      </p>
    </header>

    {/* Agent cards */}
    <section style={{ padding: "36px 120px 0", position: "relative", zIndex: 1 }}>
      <p style={{
        fontSize: 16, fontWeight: 700, letterSpacing: "0.15em",
        textTransform: "uppercase", color: CORAL, margin: "0 0 16px",
      }}>
        Customer-Facing Agents
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
        {agents.map((a) => {
          const Icon = a.icon;
          return (
            <article key={a.title} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderTop: `3px solid ${CORAL}`,
              borderRadius: 16, padding: "32px 28px",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: "rgba(240,168,140,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 12,
              }}>
                <Icon size={24} color={CORAL} strokeWidth={1.75} />
              </div>
              <h3 style={{
                fontFamily: FONTS.heading, fontSize: 24, fontWeight: 600,
                color: COLORS.pureWhite, margin: 0,
              }}>{a.title}</h3>
              <p style={{
                fontSize: 18, color: "rgba(255,255,255,0.55)",
                margin: "10px 0 0", lineHeight: 1.55,
              }}>{a.desc}</p>
            </article>
          );
        })}
      </div>
    </section>

    {/* Journey flow */}
    <section style={{ padding: "28px 120px 0", flex: 1, position: "relative", zIndex: 1 }}>
      <div style={{
        background: "rgba(240,168,140,0.06)", border: "1px solid rgba(240,168,140,0.15)",
        borderRadius: 16, padding: "28px 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {journey.map((j, i) => (
          <div key={j.step} style={{ display: "flex", alignItems: "center", gap: 24, flex: 1 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                border: `2px solid ${CORAL}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 8px", fontSize: 18, fontWeight: 700, color: CORAL,
              }}>{j.step}</div>
              <p style={{ fontSize: 16, fontWeight: 700, color: COLORS.pureWhite, margin: 0, whiteSpace: "nowrap" }}>{j.title}</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", margin: "4px 0 0" }}>{j.sub}</p>
            </div>
            {i < journey.length - 1 && (
              <ArrowRight size={18} color="rgba(240,168,140,0.3)" style={{ flexShrink: 0 }} />
            )}
          </div>
        ))}
      </div>
    </section>

    <SlideFooter slideNumber={slideNumber} variant="dark" />
  </div>
);

export default SlideAIAgentsInAction;
