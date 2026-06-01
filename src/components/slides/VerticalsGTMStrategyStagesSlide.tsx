"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Plug,
  TrendingUp,
  Anchor,
  ChevronsRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const stages: {
  icon: LucideIcon;
  stage: string;
  name: string;
  bullets: string[];
  example: string;
  intensity: number;
}[] = [
  {
    icon: MapPin,
    stage: "STAGE 1",
    name: "Land",
    bullets: [
      "Single high-friction use case",
      "AI deployed on existing phone stack",
      "Low integration risk, fast time-to-value",
    ],
    example: "Inbound call routing · After-hours lead capture",
    intensity: 0.35,
  },
  {
    icon: Plug,
    stage: "STAGE 2",
    name: "Integrate",
    bullets: [
      "Connect to customer's core system — CRM, EMR, or ERP",
      "Unlocks data-driven automation and reduces manual steps",
      "Channel partners compress transition timeline",
    ],
    example: "EMR-linked scheduling · CRM auto-logging",
    intensity: 0.55,
  },
  {
    icon: TrendingUp,
    stage: "STAGE 3",
    name: "Expand",
    bullets: [
      "Adjacent use cases activated",
      "Each new workflow adds seats, channels, or interaction volume",
      "All on the same contract vehicle",
    ],
    example: "Rx refill · Insurance eligibility · Outbound campaigns",
    intensity: 0.78,
  },
  {
    icon: Anchor,
    stage: "STAGE 4",
    name: "Embed",
    bullets: [
      "Platform becomes the operational backbone",
      "Switching cost is high",
      "Revenue is sticky and multi-year by design",
    ],
    example: "Compliance QA · Sentiment-driven routing · KPI reporting",
    intensity: 1.0,
  },
];

const themes = [
  {
    label: "HIGH REVENUE EXPANSION POTENTIAL",
    body: "Expansion potential from entry ACV to full use case deployment across existing accounts.",
  },
  {
    label: "PRE-MAPPED EXPANSION TRIGGERS",
    body: "Sequence expansion roadmap — define expansion phases early as credibility grows.",
  },
  {
    label: "EMBEDDED APPROACH MITIGATES CHURN",
    body: "By stage 3, AI touches compliance, scheduling, and routing — displacement requires rebuilding core operations.",
  },
];

export default function VerticalsGTMStrategyStagesSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{ background: BG, overflow: "hidden", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,112,243,0.08) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "40px 80px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 14px",
          }}
        >
          GTM motion · Healthcare illustration
        </p>
        <div
          style={{
            width: 64,
            height: 4,
            borderRadius: 2,
            background: "linear-gradient(90deg, #2860B2, #0070F3)",
            margin: "0 auto 18px",
            opacity: 0.9,
          }}
        />
        <h1
          className="font-heading"
          style={{
            fontSize: 50,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.14,
            maxWidth: 1400,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Vertical GTM strategy: expand from an initial AI beachhead.
        </h1>
        <p
          style={{
            margin: "16px auto 0",
            fontSize: 22,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 1240,
            lineHeight: 1.45,
            fontWeight: 400,
          }}
        >
          Methodology: penetrate narrowly now, gain customer confidence, and
          deeply embed for long-term sustainable growth.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "28px 70px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 18,
          minHeight: 0,
          maxWidth: 1820,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Themes row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
          }}
        >
          {themes.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
              style={{
                padding: "16px 18px",
                borderRadius: 12,
                background: "rgba(126,179,232,0.06)",
                border: "1px solid rgba(126,179,232,0.22)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#7EB3E8",
                }}
              >
                {t.label}
              </p>
              <p
                style={{
                  margin: "8px 0 0",
                  fontSize: 17,
                  lineHeight: 1.45,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                {t.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Four stages */}
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 18,
            flex: 1,
            minHeight: 0,
            alignItems: "stretch",
          }}
        >
          {stages.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18 + i * 0.07 }}
                style={{
                  position: "relative",
                  padding: "22px 22px",
                  borderRadius: 16,
                  background: `linear-gradient(165deg, rgba(0,112,243,${
                    0.05 + s.intensity * 0.12
                  }) 0%, rgba(255,255,255,${
                    0.02 + s.intensity * 0.02
                  }) 100%)`,
                  border: `1px solid rgba(126,179,232,${
                    0.22 + s.intensity * 0.28
                  })`,
                  boxShadow: `0 12px 30px rgba(0,112,243,${
                    0.08 + s.intensity * 0.12
                  }), inset 0 1px 0 rgba(255,255,255,0.04)`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  minHeight: 0,
                }}
              >
                {/* Connector chevron between stages */}
                {i < stages.length - 1 ? (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: -22,
                      transform: "translateY(-50%)",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "rgba(0,112,243,0.2)",
                      border: "1px solid rgba(0,112,243,0.55)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 3,
                    }}
                  >
                    <ChevronsRight
                      size={18}
                      color="#7EB3E8"
                      strokeWidth={2.4}
                    />
                  </div>
                ) : null}

                <div
                  style={{ display: "flex", alignItems: "center", gap: 14 }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `rgba(126,179,232,${
                        0.14 + s.intensity * 0.14
                      })`,
                      border: `1px solid rgba(126,179,232,${
                        0.38 + s.intensity * 0.3
                      })`,
                      color: "#7EB3E8",
                    }}
                  >
                    <Icon size={26} strokeWidth={2} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      {s.stage}
                    </p>
                    <h2
                      className="font-heading"
                      style={{
                        margin: "4px 0 0",
                        fontSize: 28,
                        fontWeight: 700,
                        color: "#FFFFFF",
                        lineHeight: 1.1,
                      }}
                    >
                      {s.name}
                    </h2>
                  </div>
                </div>

                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    flex: 1,
                  }}
                >
                  {s.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                        fontSize: 17,
                        lineHeight: 1.45,
                        color: "rgba(255,255,255,0.82)",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#7EB3E8",
                          marginTop: 9,
                        }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    marginTop: 4,
                    padding: "12px 14px",
                    borderRadius: 10,
                    background: "rgba(0,0,0,0.25)",
                    border: "1px solid rgba(126,179,232,0.25)",
                    fontSize: 15,
                    lineHeight: 1.42,
                    color: "rgba(255,255,255,0.88)",
                    fontWeight: 500,
                  }}
                >
                  {s.example}
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
