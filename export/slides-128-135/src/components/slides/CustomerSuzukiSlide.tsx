"use client";
import React from "react";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import {
  CustomerSlideSbStyleHeroCardsRow,
  SB_CARDS_STACK_WIDTH_PX,
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
  { stat: "1M+/ Month", label: "Customers supported with AI" },
  { stat: "12%", label: "Reduction in employee costs" },
  { stat: "60%+", label: "Reduction in time to follow up on standard requests" },
];

/** ~⅓ of vertical band from below header to footer on 1080px canvas (breathing room under title). */
const MAIN_TOP_OFFSET_PX = 240;

/** Hero height; Problem + Solution row matches so bottoms align with photo. */
const HERO_HEIGHT_PX = 400;

const METRICS_TOP_GAP_PX = 16;

export default function CustomerSuzukiSlide({ slideNumber = 12 }: { slideNumber?: number }) {
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
        style={{ padding: "40px 80px 0", flexShrink: 0 }}
      >
        <p style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 4px" }}>
          SMB Customer Use Case
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
          padding: `${MAIN_TOP_OFFSET_PX}px 80px 12px`,
          overflow: "hidden",
          minHeight: 0,
          alignItems: "stretch",
        }}
      >
        <CustomerSlideSbStyleHeroCardsRow
          hero={
            <div
              style={{
                width: "100%",
                height: HERO_HEIGHT_PX,
                flexShrink: 0,
                borderRadius: 14,
                overflow: "hidden",
                position: "relative",
                background: "rgba(0,0,0,0.35)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/pptx-slides/slide4-img0.png"
                alt="Suzuki"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center center",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "42%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "absolute", bottom: 14, left: 16, right: 16 }}>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#7BB3E0",
                    margin: 0,
                  }}
                >
                  Industrial Manufacturing
                </p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", margin: "4px 0 0", lineHeight: 1.3 }}>
                  72K Employees · 192 Countries
                </p>
              </div>
            </div>
          }
          cards={
            <div
              style={{
                width: SB_CARDS_STACK_WIDTH_PX,
                maxWidth: "100%",
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                gap: METRICS_TOP_GAP_PX,
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: SB_HERO_PROBLEM_SOLUTION_GAP_PX,
                  height: HERO_HEIGHT_PX,
                  flexShrink: 0,
                  minHeight: 0,
                }}
              >
                <div
                  style={{
                    flex: "0 0 auto",
                    width: SB_PROBLEM_CARD_WIDTH_PX,
                    maxWidth: "100%",
                    minHeight: 0,
                    boxSizing: "border-box",
                    background: "rgba(220,70,70,0.07)",
                    border: "1px solid rgba(220,70,70,0.18)",
                    borderRadius: 14,
                    padding: "20px 22px",
                    overflow: "auto",
                  }}
                >
                  <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#E07E7E", margin: "0 0 14px" }}>
                    Problem
                  </p>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {problems.map((p) => (
                      <li
                        key={p}
                        style={{
                          fontSize: 13,
                          color: "rgba(255,255,255,0.55)",
                          lineHeight: 1.5,
                          marginBottom: 8,
                          paddingLeft: 16,
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
                    flex: "0 0 auto",
                    width: SB_SOLUTION_CARD_WIDTH_PX,
                    maxWidth: "100%",
                    minHeight: 0,
                    boxSizing: "border-box",
                    background: "rgba(40,96,178,0.08)",
                    border: "1px solid rgba(40,96,178,0.2)",
                    borderRadius: 14,
                    padding: "20px 22px",
                    overflow: "auto",
                  }}
                >
                  <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#7EB3E8", margin: "0 0 14px" }}>
                    Solution
                  </p>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {solutions.map((s) => (
                      <li
                        key={s}
                        style={{
                          fontSize: 13,
                          color: "rgba(255,255,255,0.55)",
                          lineHeight: 1.5,
                          marginBottom: 8,
                          paddingLeft: 16,
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

              <div style={{ display: "flex", gap: SB_HERO_PROBLEM_SOLUTION_GAP_PX, flexShrink: 0, width: "100%" }}>
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 12,
                      padding: "16px 12px",
                      textAlign: "center",
                      boxSizing: "border-box",
                    }}
                  >
                    <p className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.05 }}>
                      {m.stat}
                    </p>
                    <p
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        color: "rgba(255,255,255,0.4)",
                        margin: "4px 0 0",
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
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
