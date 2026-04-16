"use client";
import { motion } from "framer-motion";
import { MessageCircle, Workflow, TrendingUp, ArrowRight } from "lucide-react";
import SlideFooter from "../SlideFooter";

const stages = [
  {
    icon: MessageCircle,
    step: "01",
    eyebrow: "Demand capture",
    title: "Intent becomes measurable pipeline.",
    lead: "Every conversation and signal is first-party data: easier attribution, better conversion math, and less spend leaking to disconnected tools.",
    items: [
      "Omni-channel capture (voice, digital, social, reviews)",
      "Clear path from interest to qualified opportunity",
      "Fewer blind spots for RevOps and finance",
    ],
    accent: "#7EB3E8",
  },
  {
    icon: Workflow,
    step: "02",
    eyebrow: "Operating leverage",
    title: "Scale service without scaling cost linearly.",
    lead: "AI handles volume; humans own risk, exceptions, and high-stakes moments — the mix public markets reward in CX platforms.",
    items: [
      "Automation on repeatable workstreams",
      "Human escalation where revenue or trust is on the line",
      "One platform layer vs. parallel vendor stacks",
    ],
    accent: "#4A8BC8",
  },
  {
    icon: TrendingUp,
    step: "03",
    eyebrow: "Unit economics",
    title: "NRR, attach, and wallet share.",
    lead: "Better resolution and engagement compound into upsell, cross-sell, and churn reduction — the same drivers investors use to value CX leaders.",
    items: [
      "Healthier net revenue retention over time",
      "Attach across voice, AI, analytics, and workflow",
      "Commerce and expansion inside existing usage",
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
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "36%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,112,243,0.07) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "40px 80px 0", textAlign: "center", flexShrink: 0, position: "relative", zIndex: 1 }}
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
          Investment angle
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
          Conversations that compound revenue.
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            margin: "14px auto 0",
            maxWidth: 860,
            lineHeight: 1.5,
          }}
        >
          Investors should see the same story public CX platforms tell: more retained and expanded ARR per account when
          engagement is unified, measurable, and increasingly automated — without trading away trust on mission-critical
          decisions.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          style={{
            maxWidth: 920,
            margin: "22px auto 0",
            padding: "18px 24px 18px 22px",
            textAlign: "left",
            borderRadius: 12,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderLeft: "4px solid #0070F3",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
          }}
        >
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.68)", margin: 0, lineHeight: 1.55, fontWeight: 400 }}>
            The thesis is simple: own the interaction layer, improve yield on pipeline, widen attach, and raise LTV —
            with a path to margin expansion as AI absorbs more of the repetitive load.
          </p>
        </motion.div>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "28px 80px 36px",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "center",
          gap: 22,
          minHeight: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
            gap: 16,
            flex: 1,
            minHeight: 0,
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
                  minWidth: 0,
                }}
              >
                <motion.article
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    background:
                      "linear-gradient(165deg, rgba(40, 96, 178, 0.1) 0%, rgba(255,255,255,0.03) 42%, rgba(0,0,0,0.12) 100%)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderTop: `3px solid ${s.accent}`,
                    borderRadius: 16,
                    padding: "26px 24px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    position: "relative",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
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
                      width: 48,
                      height: 48,
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
                        fontSize: 24,
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
                      fontSize: 15,
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.82)",
                      margin: 0,
                      lineHeight: 1.45,
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
                          fontSize: 14,
                          color: "rgba(255,255,255,0.72)",
                          lineHeight: 1.45,
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

                {i < stages.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0,
                      alignSelf: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                      }}
                    >
                      <ArrowRight size={24} color="rgba(126,179,232,0.85)" strokeWidth={2} />
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{ textAlign: "center", padding: "0 48px" }}
        >
          <p
            style={{
              fontSize: 14,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.42)",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Positioning: conversational commerce is how Nextiva translates daily usage into ARR quality investors can
            underwrite.
          </p>
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
