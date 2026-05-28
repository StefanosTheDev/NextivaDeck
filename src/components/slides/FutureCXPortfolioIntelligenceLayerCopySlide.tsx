"use client";

import { motion } from "framer-motion";
import { CircleDot, Orbit, Square } from "lucide-react";
import SlideFooter from "../SlideFooter";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const CORAL = "#C56644";
const CORAL_BG = "rgba(197, 102, 68, 0.10)";
const BLUE_BG = "rgba(40, 96, 178, 0.10)";

const dataChips = [
  "Customer + Business Data",
  "Nextiva Customer Journal",
  "Agentic + Deterministic Flows",
];

const pillars = [
  {
    icon: CircleDot,
    name: "NextOS",
    badge: "AI ENABLED BUSINESS COMMUNICATIONS",
    badgeColor: BLUE,
    badgeBg: BLUE_BG,
    subtitle: "Core Communication Platform.",
    bullets: [
      "AI-powered voice, video & messaging",
      "Workflow automation across products",
      "Built-in xBERT and NEXT AI",
    ],
  },
  {
    icon: Orbit,
    name: "Experience Cloud",
    badge: "ENTERPRISE & BPO",
    badgeColor: BLUE,
    badgeBg: BLUE_BG,
    subtitle: "Programmable CX Platform.",
    bullets: [
      "Omnichannel voice, chat & email",
      "AI-assisted interactions at scale",
      "Open APIs and integrations",
    ],
  },
  {
    icon: Square,
    name: "NEXT",
    badge: "SMB & MID-MARKET",
    badgeColor: CORAL,
    badgeBg: CORAL_BG,
    subtitle: "Unified Front & Back Office.",
    bullets: [
      "One data model across all products",
      "AI and human working in tandem",
      "Single source of customer truth",
    ],
  },
];

export default function FutureCXPortfolioIntelligenceLayerCopySlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background: "#FFFFFF",
        color: NAVY_DARK,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -160,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1400,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(40,96,178,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        style={{
          padding: "40px 72px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: MUTED,
            margin: "0 0 10px",
          }}
        >
          OUR SOLUTION
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 600,
            color: NAVY_DARK,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Nextiva&apos;s CX Platform Portfolio.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: "18px 72px 6px",
          minHeight: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Data + Intelligence platform band */}
        <div
          style={{
            borderRadius: 18,
            padding: "20px 24px 18px",
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}33`,
            boxShadow: "0 6px 24px rgba(40,96,178,0.08)",
          }}
        >
          <p
            style={{
              fontSize: 24,
              fontStyle: "italic",
              fontWeight: 600,
              color: NAVY_DARK,
              margin: "0 0 6px",
              letterSpacing: "0.01em",
              textAlign: "center",
            }}
          >
            Data + Intelligence Platform
          </p>
          <p
            style={{
              fontSize: 15,
              color: BODY,
              margin: "0 0 16px",
              lineHeight: 1.4,
              textAlign: "center",
            }}
          >
            The foundational intelligence layer that powers the full CX
            portfolio.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
              marginBottom: 12,
            }}
          >
            {dataChips.map((t) => (
              <span
                key={t}
                style={{
                  padding: "11px 16px",
                  borderRadius: 999,
                  background: "#FFFFFF",
                  border: `1px solid ${CARD_BORDER}`,
                  fontSize: 15,
                  fontWeight: 600,
                  color: NAVY_DARK,
                  textAlign: "center",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              padding: "10px 18px",
              borderRadius: 10,
              background: "#FFFFFF",
              border: `1px solid ${BLUE}44`,
            }}
          >
            <span
              style={{
                fontSize: 28,
                fontWeight: 800,
                letterSpacing: "0.02em",
                color: NAVY_DARK,
                display: "flex",
                alignItems: "baseline",
                gap: 10,
              }}
            >
              <span style={{ color: MUTED, fontWeight: 500 }}>+</span>
              xBERT
            </span>
            <span
              style={{
                padding: "6px 14px",
                borderRadius: 6,
                background: BLUE_BG,
                color: BLUE,
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.1em",
              }}
            >
              AGENTIC AI PLATFORM
            </span>
          </div>
        </div>

        {/* Three pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            flex: 1,
            minHeight: 0,
          }}
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const isCoral = p.badgeColor === CORAL;
            const accent = isCoral ? CORAL : BLUE;
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 + i * 0.06 }}
                style={{
                  minWidth: 0,
                  borderRadius: 16,
                  padding: "18px 20px 16px",
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderTop: `4px solid ${accent}`,
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 6px 18px rgba(6,26,55,0.05)",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: isCoral ? CORAL_BG : BLUE_BG,
                    border: `1px solid ${accent}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <Icon size={20} color={accent} strokeWidth={2} />
                </div>
                <h2
                  className="font-heading"
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: NAVY_DARK,
                    margin: 0,
                    lineHeight: 1.15,
                  }}
                >
                  {p.name}
                </h2>
                <span
                  style={{
                    alignSelf: "flex-start",
                    marginTop: 8,
                    padding: "5px 12px",
                    borderRadius: 6,
                    background: p.badgeBg,
                    color: p.badgeColor,
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    lineHeight: 1.25,
                  }}
                >
                  {p.badge}
                </span>
                <p
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: NAVY_DARK,
                    margin: "14px 0 12px",
                    lineHeight: 1.3,
                  }}
                >
                  {p.subtitle}
                </p>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    flex: 1,
                  }}
                >
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: 15,
                        color: BODY,
                        lineHeight: 1.5,
                        marginBottom: 8,
                        paddingLeft: 14,
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 9,
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: accent,
                        }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </motion.main>

      <div
        style={{
          padding: "14px 72px 18px",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 17,
            color: NAVY,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Our innovation leading with AI are built once and delivered across the
          entire product portfolio.
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
