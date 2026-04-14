"use client";
import React from "react";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import {
  CustomerSlideSbStyleHeroCardsRow,
  SB_CUSTOMER_BODY_TO_FOOTER_GAP_PX,
  SB_CUSTOMER_HEADER_PADDING_LEFT_PX,
  SB_CUSTOMER_HEADER_TO_BODY_GAP_PX,
  SB_HERO_PROBLEM_SOLUTION_GAP_PX,
  SB_PROBLEM_CARD_WIDTH_PX,
  SB_SOLUTION_CARD_WIDTH_PX,
} from "./CustomerSlideSbStyleHeroCardsRow";

const problems = [
  "Staffing inefficiencies: High call volume for standard information inquiries on models, locations and customer service issues.",
  "Poor customer experiences: Slow response and resolution times due to reliance on phone or e-mail, limited engagement on other channels.",
  "Limited customer insight: No holistic customer information.",
];

const solutions = [
  "Improved CX: AI-driven instant responses to standard inquiries; seamless transfers to human agents for complex ones.",
  "Automated KPI visibility: KPIs across multiple dimensions and channels.",
  "Continuous improvement: Customer feedback & sentiment captured.",
];

const metrics = [
  { stat: "1M+/Mo", label: "Customers supported with AI" },
  { stat: "12%", label: "Reduction in employee costs" },
  { stat: "60%+", label: "Reduction in follow-up time" },
];

/** Match SB singles slides 128–131: larger hero + cards footprint. */
const LAYOUT_SCALE = 1.33;

const HERO_HEIGHT_BASE_PX = 400;
const METRICS_TOP_GAP_BASE_PX = 16;

export default function CustomerSuzukiSlide({ slideNumber = 12 }: { slideNumber?: number }) {
  const scale = LAYOUT_SCALE;
  const heroH = Math.round(HERO_HEIGHT_BASE_PX * scale);
  const problemW = Math.round(SB_PROBLEM_CARD_WIDTH_PX * scale);
  const solutionW = Math.round(SB_SOLUTION_CARD_WIDTH_PX * scale);
  const gap = Math.round(SB_HERO_PROBLEM_SOLUTION_GAP_PX * scale);
  const metricsTopGap = Math.round(METRICS_TOP_GAP_BASE_PX * scale);
  const cardsStackW = problemW + gap + solutionW;
  const cardPadY = Math.round(20 * scale);
  const cardPadX = Math.round(22 * scale);
  const cardRadius = Math.round(14 * scale);
  const metricsRadius = Math.round(12 * scale);
  const metricsPadY = Math.round(16 * scale);
  const metricsPadX = Math.round(12 * scale);
  const fsSection = Math.round(14 * scale);
  const fsBody = Math.round(13 * scale);
  const fsStat = Math.round(28 * scale);
  const fsLabel = Math.round(11 * scale);
  const fsHeroIndustry = Math.round(12 * scale);
  const fsHeroMeta = Math.round(11 * scale);

  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "40px 80px 0",
          paddingLeft: SB_CUSTOMER_HEADER_PADDING_LEFT_PX,
          flexShrink: 0,
        }}
      >
        <p style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 4px" }}>
          Enterprise Customer Use Case
        </p>
        <h1 className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          Suzuki
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: `${SB_CUSTOMER_HEADER_TO_BODY_GAP_PX}px 80px ${SB_CUSTOMER_BODY_TO_FOOTER_GAP_PX}px`,
          overflow: "hidden",
          minHeight: 0,
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
            minHeight: 0,
            marginBottom: "auto",
          }}
        >
        <CustomerSlideSbStyleHeroCardsRow
          rowGapPx={gap}
          hero={
            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: Math.round(8 * scale), minHeight: 0 }}>
              <div
                style={{
                  width: "100%",
                  height: heroH,
                  flexShrink: 0,
                  borderRadius: cardRadius,
                  overflow: "hidden",
                  position: "relative",
                  background: "rgba(0,0,0,0.35)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/pptx-slides/slide4-img0.png"
                  alt="Suzuki"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "42%", background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: Math.round(12 * scale), left: Math.round(12 * scale), right: Math.round(12 * scale), display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <span style={{ display: "inline-block", padding: `${Math.round(4 * scale)}px ${Math.round(12 * scale)}px`, borderRadius: Math.round(20 * scale), background: "#7BB3E0", fontSize: fsHeroIndustry, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#FFFFFF" }}>
                    Industrial Manufacturing
                  </span>
                </div>
              </div>
              <p style={{ fontSize: fsHeroMeta, color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.35 }}>
                72K Employees · 192 Countries
              </p>
            </div>
          }
          cards={
            <div
              style={{
                width: "100%",
                maxWidth: "100%",
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                gap: metricsTopGap,
                flex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  gap,
                  flex: 1,
                  minHeight: 0,
                }}
              >
                <div
                  style={{
                    flex: `0 1 ${problemW}px`,
                    minWidth: 0,
                    minHeight: 0,
                    boxSizing: "border-box",
                    background: "rgba(220,70,70,0.07)",
                    border: "1px solid rgba(220,70,70,0.18)",
                    borderRadius: cardRadius,
                    padding: `${cardPadY}px ${cardPadX}px`,
                    overflow: "auto",
                  }}
                >
                  <p
                    style={{
                      fontSize: fsSection,
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#E07E7E",
                      margin: `0 0 ${Math.round(14 * scale)}px`,
                    }}
                  >
                    Problem
                  </p>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {problems.map((p) => (
                      <li
                        key={p}
                        style={{
                          fontSize: fsBody,
                          color: "rgba(255,255,255,0.55)",
                          lineHeight: 1.5,
                          marginBottom: Math.round(8 * scale),
                          paddingLeft: Math.round(16 * scale),
                          position: "relative",
                          overflowWrap: "break-word",
                        }}
                      >
                        <span style={{ position: "absolute", left: 0, color: "#E07E7E", fontWeight: 700 }}>✗</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    flex: `0 1 ${solutionW}px`,
                    minWidth: 0,
                    minHeight: 0,
                    boxSizing: "border-box",
                    background: "rgba(40,96,178,0.08)",
                    border: "1px solid rgba(40,96,178,0.2)",
                    borderRadius: cardRadius,
                    padding: `${cardPadY}px ${cardPadX}px`,
                    overflow: "auto",
                  }}
                >
                  <p
                    style={{
                      fontSize: fsSection,
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#7EB3E8",
                      margin: `0 0 ${Math.round(14 * scale)}px`,
                    }}
                  >
                    Solution
                  </p>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {solutions.map((s) => (
                      <li
                        key={s}
                        style={{
                          fontSize: fsBody,
                          color: "rgba(255,255,255,0.55)",
                          lineHeight: 1.5,
                          marginBottom: Math.round(8 * scale),
                          paddingLeft: Math.round(16 * scale),
                          position: "relative",
                          overflowWrap: "break-word",
                        }}
                      >
                        <span style={{ position: "absolute", left: 0, color: "#7EB3E8" }}>✓</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ display: "flex", gap, flexShrink: 0, maxWidth: problemW + gap + solutionW }}>
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: metricsRadius,
                      padding: `${metricsPadY}px ${metricsPadX}px`,
                      textAlign: "center",
                      boxSizing: "border-box",
                    }}
                  >
                    <p className="font-heading" style={{ fontSize: fsStat, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.05 }}>
                      {m.stat}
                    </p>
                    <p
                      style={{
                        fontSize: fsLabel,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        color: "rgba(255,255,255,0.4)",
                        margin: `${Math.round(4 * scale)}px 0 0`,
                        lineHeight: 1.2,
                        overflowWrap: "break-word",
                      }}
                    >
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          }
        />
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
