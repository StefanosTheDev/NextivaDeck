"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Cpu,
  Rocket,
  Plus,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const GROWTH = "#1E7E5E";
const GROWTH_SOFT = "#E5F4EE";

const FORMULA = [
  {
    eyebrow: "Activate the base",
    body: "NRR \u2192 100%",
    sub: "",
  },
  {
    eyebrow: "New vectors",
    body: "+10% growth",
    sub: "",
  },
  {
    eyebrow: "Modern operation",
    body: "AI-native",
    sub: "\u2248 $3.5M rev / employee",
  },
];

const PRIORITIES = [
  {
    num: "01",
    label: "Priority #1",
    icon: TrendingUp,
    title: "Expand the base",
    body: "AI-enable and agentify the majority of existing customers. Move NRR from the low 90s to 100% \u2014 the engine of the year.",
  },
  {
    num: "02",
    label: "By mid-year",
    icon: Cpu,
    title: "Modernize the company",
    body: "By mid-year, an 18-year-old company that runs like a modern AI-native startup \u2014 18 years of trust, none of the legacy drag.",
  },
  {
    num: "03",
    label: "New surfaces",
    icon: Rocket,
    title: "Accelerate new growth",
    body: "Prove new partnership channels and the products we\u2019re building can add ~10% growth on top of the core.",
  },
];

export default function FutureCorporateObjectiveEVSlide({
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
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1400,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(40,96,178,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "26px 72px 0",
          textAlign: "center",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 14px",
            borderRadius: 999,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}55`,
            marginBottom: 12,
          }}
        >
          <Sparkles size={12} color={BLUE} strokeWidth={2.4} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
            }}
          >
            FY26 · The Objective
          </span>
        </div>
        <h1
          className="font-heading"
          style={{
            fontSize: 46,
            fontWeight: 600,
            color: NAVY_DARK,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          Double Nextiva&apos;s enterprise value.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 17,
            color: BODY,
            margin: "8px auto 0",
            maxWidth: 1100,
            lineHeight: 1.5,
          }}
        >
          Prove that our existing customer base — made AI-enabled and agentic —
          can compound: lifting NRR from the low 90s to{" "}
          <strong style={{ color: NAVY_DARK }}>100%</strong>, while new products
          and partnerships add another{" "}
          <strong style={{ color: NAVY_DARK }}>~10% growth</strong> on top.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        style={{
          flex: 1,
          padding: "18px 72px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: 10,
            padding: "16px 22px",
            borderRadius: 14,
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #F1F5FB 100%)",
            border: `1px solid ${BLUE}33`,
            boxShadow: "0 6px 24px rgba(40,96,178,0.08)",
            flexShrink: 0,
          }}
        >
          {FORMULA.map((f, i) => (
            <div
              key={f.eyebrow}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flex: 1,
                minWidth: 0,
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: BLUE,
                    marginBottom: 4,
                  }}
                >
                  {f.eyebrow}
                </div>
                <div
                  className="font-heading"
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: NAVY_DARK,
                    lineHeight: 1.15,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {f.body}
                </div>
                {f.sub && (
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      color: GROWTH,
                      marginTop: 4,
                      letterSpacing: "0.01em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {f.sub}
                  </div>
                )}
              </div>
              {i < FORMULA.length - 1 && (
                <Plus
                  size={20}
                  color={BLUE}
                  strokeWidth={2.5}
                  style={{ flexShrink: 0 }}
                />
              )}
            </div>
          ))}
          <ArrowRight
            size={24}
            color={GROWTH}
            strokeWidth={2.5}
            style={{ flexShrink: 0, alignSelf: "center" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 18px",
              borderRadius: 10,
              background: GROWTH_SOFT,
              border: `1px solid ${GROWTH}55`,
              flexShrink: 0,
              minWidth: 130,
            }}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: GROWTH,
                marginBottom: 2,
              }}
            >
              Result
            </div>
            <div
              className="font-heading"
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: GROWTH,
                lineHeight: 1,
                letterSpacing: "-0.01em",
              }}
            >
              ≈ 2× EV
            </div>
          </div>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 18,
            flex: 1,
            minHeight: 0,
          }}
        >
          {PRIORITIES.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.num}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderTop: `5px solid ${BLUE}`,
                  borderRadius: 14,
                  padding: "22px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  boxShadow: "0 6px 20px rgba(6,26,55,0.05)",
                  position: "relative",
                  minHeight: 0,
                }}
              >
                <span
                  className="font-heading"
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 18,
                    fontSize: 56,
                    fontWeight: 700,
                    color: BLUE,
                    opacity: 0.12,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    pointerEvents: "none",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {p.num}
                </span>

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 11,
                      background: BLUE_SOFT,
                      border: `1px solid ${BLUE}`,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color={BLUE} strokeWidth={2} />
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      color: BLUE,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.label}
                  </span>
                </div>
                <h3
                  className="font-heading"
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: NAVY_DARK,
                    lineHeight: 1.2,
                    letterSpacing: "-0.005em",
                    margin: 0,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 14.5,
                    color: BODY,
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 22px",
            borderRadius: 12,
            background: GROWTH_SOFT,
            border: `1px solid ${GROWTH}33`,
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: GROWTH,
              flexShrink: 0,
            }}
          >
            Why it doubles
          </span>
          <span style={{ width: 1, height: 18, background: `${GROWTH}55` }} />
          <p
            style={{
              margin: 0,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13.5,
              color: NAVY_DARK,
              lineHeight: 1.45,
              flex: 1,
            }}
          >
            Sub-100% NRR trades ~3.1× revenue; crossing into the 100%+ band
            lifts you to the ~5.7× median — roughly an{" "}
            <strong>80% re-rate</strong>. Each <strong>10-pt NRR gain</strong>{" "}
            ≈ <strong>+20–30% in value</strong>. Profitable, AI-native, lean
            compounds on top of that.
          </p>
        </motion.div>
      </motion.main>

      <footer
        style={{
          padding: "0 72px 14px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 11,
          fontWeight: 500,
          color: MUTED,
          letterSpacing: "0.04em",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        Sources: Software Equity Group · m3ter, 2026 · Aventis Advisors ·
        QuantPillar, 2026 · Lean AI Native Index · High Alpha
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
