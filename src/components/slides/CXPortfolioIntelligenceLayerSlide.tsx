"use client";

import { motion } from "framer-motion";
import { CircleDot, Orbit, Square } from "lucide-react";
import SlideFooter from "../SlideFooter";

const TEAL = "#7EB3E8";
const TEAL_BG = "rgba(40, 96, 178, 0.35)";
const CORAL = "#E88A6B";
const CORAL_BG = "rgba(232, 138, 107, 0.18)";

const dataChips = ["Customer + Business Data", "Nextiva Customer Journal", "Agentic + Deterministic Flows"];

const pillars = [
  {
    icon: CircleDot,
    name: "NextOS",
    badge: "AI ENABLED BUSINESS COMMUNICATIONS",
    badgeColor: TEAL,
    badgeBg: TEAL_BG,
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
    badgeColor: TEAL,
    badgeBg: TEAL_BG,
    subtitle: "Programmable CX Platform.",
    bullets: ["Omnichannel voice, chat & email", "AI-assisted interactions at scale", "Open APIs and integrations"],
  },
  {
    icon: Square,
    name: "NEXT",
    badge: "SMB & MID-MARKET",
    badgeColor: CORAL,
    badgeBg: CORAL_BG,
    subtitle: "Unified Front & Back Office.",
    bullets: ["One data model across all products", "AI and human working in tandem", "Single source of customer truth"],
  },
];

export default function CXPortfolioIntelligenceLayerSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 18%, rgba(15,44,89,0.5) 0%, rgba(6,26,55,0.8) 48%, #000208 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}
      data-speaker-notes="Data + Intelligence Platform powers the portfolio: NextOS, Experience Cloud, and NEXT — innovation led by AI is built once and delivered across products."
    >
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 24,
          zIndex: 2,
          padding: "6px 14px",
          borderRadius: 999,
          border: "1px solid rgba(255,255,255,0.2)",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.12em",
          color: "rgba(255,255,255,0.75)",
        }}
      >
        CONFIDENTIAL
      </div>

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        style={{ padding: "44px 72px 0", flexShrink: 0, textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          OUR SOLUTION
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.1 }}>
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
            background:
              "linear-gradient(180deg, rgba(24,52,100,0.55) 0%, rgba(10,26,56,0.75) 100%)",
            border: "1px solid rgba(126,179,232,0.22)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <p
            style={{
              fontSize: 20,
              fontStyle: "italic",
              fontWeight: 600,
              color: "#FFFFFF",
              margin: "0 0 4px",
              letterSpacing: "0.01em",
              textAlign: "center",
            }}
          >
            Data + Intelligence Platform
          </p>
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.55)",
              margin: "0 0 14px",
              lineHeight: 1.4,
              textAlign: "center",
            }}
          >
            The foundational intelligence layer that powers the full CX portfolio.
          </p>

          {/* Chip row — equal width */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 12 }}>
            {dataChips.map((t) => (
              <span
                key={t}
                style={{
                  padding: "10px 14px",
                  borderRadius: 999,
                  background: "rgba(0,0,0,0.42)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.9)",
                  textAlign: "center",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* xBERT bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              padding: "10px 18px",
              borderRadius: 10,
              background: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(126,179,232,0.28)",
            }}
          >
            <span
              style={{
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: "0.02em",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "baseline",
                gap: 8,
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>+</span>
              xBERT
            </span>
            <span
              style={{
                padding: "5px 12px",
                borderRadius: 6,
                background: TEAL_BG,
                color: TEAL,
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.1em",
              }}
            >
              AGENTIC AI PLATFORM
            </span>
          </div>
        </div>

        {/* Three pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, flex: 1, minHeight: 0 }}>
          {pillars.map((p, i) => {
            const Icon = p.icon;
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
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.28)",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(126,179,232,0.1)",
                    border: "1px solid rgba(126,179,232,0.28)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <Icon size={20} color={TEAL} strokeWidth={2} />
                </div>
                <h2
                  className="font-heading"
                  style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}
                >
                  {p.name}
                </h2>
                <span
                  style={{
                    alignSelf: "flex-start",
                    marginTop: 6,
                    padding: "4px 10px",
                    borderRadius: 6,
                    background: p.badgeBg,
                    color: p.badgeColor,
                    fontSize: 9,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    lineHeight: 1.25,
                  }}
                >
                  {p.badge}
                </span>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.94)",
                    margin: "12px 0 10px",
                    lineHeight: 1.3,
                  }}
                >
                  {p.subtitle}
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", flex: 1 }}>
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.68)",
                        lineHeight: 1.45,
                        marginBottom: 6,
                        paddingLeft: 12,
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 7,
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: TEAL,
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

      <div style={{ padding: "14px 72px 18px", position: "relative", zIndex: 1, textAlign: "center" }}>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.72)", margin: 0, lineHeight: 1.45 }}>
          Our innovation leading with AI are built once and delivered across the entire product portfolio.
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
