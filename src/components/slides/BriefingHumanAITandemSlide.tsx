"use client";
import { motion } from "framer-motion";
import { Bot, Users, UserCog } from "lucide-react";
import SlideFooter from "../SlideFooter";

const stages = [
  {
    icon: Bot,
    label: "Autonomous",
    eyebrow: "AI First",
    headline: "AI Agents trained on business + customer data",
    desc: "Self-serving AI employees handle contained tasks end-to-end without human touch.",
    autonomy: 100,
    accent: "#7EB3E8",
  },
  {
    icon: UserCog,
    label: "Autopilot",
    eyebrow: "AI Led, Human Oversight",
    headline: "AI Agents with human oversight to escalate",
    desc: "AI leads the interaction; humans supervise, nudge, and step in when risk or context demands.",
    autonomy: 65,
    accent: "#4A8BC8",
  },
  {
    icon: Users,
    label: "Copilot",
    eyebrow: "Human First",
    headline: "Humans with AI assistance & oversight",
    desc: "Humans lead, AI augments — suggestions, summarization, next-best-action, compliance guardrails.",
    autonomy: 30,
    accent: "#2860B2",
  },
];

export default function BriefingHumanAITandemSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "40px 80px 0", textAlign: "center", flexShrink: 0 }}
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
          The Autonomy Spectrum
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "10px 0 0",
            lineHeight: 1.15,
          }}
        >
          Powered by Humans + AI in tandem.
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            margin: "14px auto 0",
            maxWidth: 780,
            lineHeight: 1.5,
          }}
        >
          Every interaction lands at the right mix of automation and human
          judgment &mdash; a balance of maturity, business risk/reward, customer
          preference, and intent.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "40px 80px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 28,
        }}
      >
        {/* Spectrum labels row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#7EB3E8",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7EB3E8",
              }}
            >
              More AI Autonomy
            </span>
          </div>
          <div
            style={{
              flex: 1,
              height: 1,
              margin: "0 24px",
              background:
                "linear-gradient(90deg, rgba(126,179,232,0.6), rgba(40,96,178,0.3))",
            }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#2860B2",
              }}
            >
              More Human Oversight
            </span>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#2860B2",
              }}
            />
          </div>
        </div>

        {/* Three stage cards */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <motion.article
                key={stage.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderTop: `3px solid ${stage.accent}`,
                  borderRadius: 14,
                  padding: "26px 26px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: `${stage.accent}1A`,
                      border: `1px solid ${stage.accent}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color={stage.accent} strokeWidth={2} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: stage.accent,
                        margin: 0,
                      }}
                    >
                      {stage.eyebrow}
                    </p>
                    <h2
                      className="font-heading"
                      style={{
                        fontSize: 28,
                        fontWeight: 700,
                        color: "#FFFFFF",
                        margin: "2px 0 0",
                        lineHeight: 1.1,
                      }}
                    >
                      {stage.label}
                    </h2>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.85)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {stage.headline}
                </p>

                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.55)",
                    margin: 0,
                    lineHeight: 1.55,
                    flex: 1,
                  }}
                >
                  {stage.desc}
                </p>

                {/* Autonomy bar */}
                <div
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    paddingTop: 12,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      AI Autonomy
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: stage.accent,
                      }}
                    >
                      {stage.autonomy}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: 4,
                      borderRadius: 2,
                      background: "rgba(255,255,255,0.08)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${stage.autonomy}%`,
                        height: "100%",
                        background: stage.accent,
                        borderRadius: 2,
                      }}
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Footer note */}
        <div
          style={{
            textAlign: "center",
            padding: "0 40px",
          }}
        >
          <p
            style={{
              fontSize: 14,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.4)",
              margin: 0,
            }}
          >
            Customers and operators choose the blend &mdash; and can shift it
            per journey, per channel, per moment.
          </p>
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
