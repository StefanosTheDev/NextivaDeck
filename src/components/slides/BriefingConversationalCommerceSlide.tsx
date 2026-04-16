"use client";
import { motion } from "framer-motion";
import { MessageCircle, Workflow, TrendingUp, ArrowRight } from "lucide-react";
import SlideFooter from "../SlideFooter";

const stages = [
  {
    icon: MessageCircle,
    step: "01",
    eyebrow: "It Starts With Intent",
    title: "Conversations begin with why.",
    lead: "Every journey starts with an intent — to learn, to search, or to resolve.",
    items: [
      "Learn about a product, offer, or option",
      "Search for the right solution",
      "Resolve an open issue or question",
    ],
    accent: "#7EB3E8",
  },
  {
    icon: Workflow,
    step: "02",
    eyebrow: "Human + AI Agentic Flows",
    title: "Any channel. Any moment.",
    lead: "Personalized journeys blending human agents and AI — initiated by the customer or the business.",
    items: [
      "Customer or business initiated",
      "Sync or async, single or multi-engagement",
      "In the channel and at the time of their choice",
    ],
    accent: "#4A8BC8",
  },
  {
    icon: TrendingUp,
    step: "03",
    eyebrow: "Commercial Outcomes",
    title: "Friction out. Revenue in.",
    lead: "Reduce friction to engage and transact, and every conversation becomes commercial.",
    items: [
      "Problem resolution → CSAT",
      "Engagement lift → reduced churn",
      "Upsell opportunity → transaction",
    ],
    accent: "#2860B2",
  },
];

export default function BriefingConversationalCommerceSlide({
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
        style={{ padding: "32px 80px 0", textAlign: "center", flexShrink: 0 }}
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
          Why Conversation Matters
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
          Enabling conversational commerce.
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            margin: "14px auto 0",
            maxWidth: 800,
            lineHeight: 1.5,
          }}
        >
          Every interaction is a chance to resolve, retain, or grow the
          relationship. Our job is to make the path from intent to outcome
          shorter, smarter, and more trustworthy.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "32px 80px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        {stages.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.step}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "stretch",
                gap: 16,
              }}
            >
              <motion.article
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderTop: `3px solid ${s.accent}`,
                  borderRadius: 14,
                  padding: "24px 24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  position: "relative",
                }}
              >
                {/* Step number watermark */}
                <p
                  className="font-heading"
                  style={{
                    position: "absolute",
                    top: 14,
                    right: 18,
                    fontSize: 40,
                    fontWeight: 700,
                    color: `${s.accent}22`,
                    margin: 0,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.step}
                </p>

                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: `${s.accent}1A`,
                    border: `1px solid ${s.accent}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={22} color={s.accent} strokeWidth={2} />
                </div>

                <div>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: s.accent,
                      margin: 0,
                    }}
                  >
                    {s.eyebrow}
                  </p>
                  <h2
                    className="font-heading"
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: "4px 0 0",
                      lineHeight: 1.2,
                    }}
                  >
                    {s.title}
                  </h2>
                </div>

                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.65)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {s.lead}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "4px 0 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    paddingTop: 12,
                  }}
                >
                  {s.items.map((it) => (
                    <li
                      key={it}
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.6)",
                        lineHeight: 1.4,
                        paddingLeft: 14,
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: s.accent,
                        }}
                      >
                        ›
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.article>

              {/* Arrow between cards */}
              {i < stages.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <ArrowRight
                    size={28}
                    color="rgba(126,179,232,0.5)"
                    strokeWidth={1.5}
                  />
                </motion.div>
              )}
            </div>
          );
        })}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
