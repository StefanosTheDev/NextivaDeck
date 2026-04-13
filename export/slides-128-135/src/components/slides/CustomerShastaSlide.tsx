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
  "Poor customer experience: Chaotic inbound communications management, with many queues, long hold times, significant misrouting.",
  "Staffing inefficiencies: Highly manual repetitive tasks, such as appointment scheduling and prescription refills.",
  "Siloed customer information: Fragmented communications with patients across departments, no holistic visibility.",
];

const solutions = [
  "Improved initial customer experience: Automated to more than 10 care practices; AI addresses routine inquiries.",
  "Staffing efficiencies gained: AI drives routine tasks via EMR integration, hands off to humans for the complex.",
  "Overall improved customer sat: Seamless patient transition across practices and departments.",
];

const metrics = [
  { stat: "2 min", label: "Average wait time (reduced)" },
  { stat: "20%", label: "AI-Enabled Deflections" },
];

/** Same vertical rhythm as Customer: Suzuki / Tata Play. */
const MAIN_TOP_OFFSET_PX = 240;

const HERO_HEIGHT_PX = 400;
const METRICS_TOP_GAP_PX = 16;

/**
 * Hero is portrait (~1055×1122). We use a short frame + contain so nothing is clipped.
 * Bias toward the upper band where façade / building signage usually sits so the
 * Shasta Community Health logo on the building stays prominent in the frame.
 */
const HERO_OBJECT_POSITION = "center 22%";

export default function CustomerShastaSlide({ slideNumber = 12 }: { slideNumber?: number }) {
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
          Shasta Community Health
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
                src="/images/pptx-slides/slide9-img0.png"
                alt="Shasta Community Health"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: HERO_OBJECT_POSITION,
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
                  Community Healthcare
                </p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", margin: "4px 0 0", lineHeight: 1.3 }}>
                  7 Clinical Locations · 100 Providers across 10+ practices
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
                    padding: "16px 18px",
                    overflow: "auto",
                  }}
                >
                  <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#E07E7E", margin: "0 0 10px" }}>
                    Problem
                  </p>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {problems.map((p) => (
                      <li
                        key={p}
                        style={{
                          fontSize: 13,
                          color: "rgba(255,255,255,0.55)",
                          lineHeight: 1.45,
                          marginBottom: 6,
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
                    padding: "16px 18px",
                    overflow: "auto",
                  }}
                >
                  <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#7EB3E8", margin: "0 0 10px" }}>
                    Solution
                  </p>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {solutions.map((s) => (
                      <li
                        key={s}
                        style={{
                          fontSize: 13,
                          color: "rgba(255,255,255,0.55)",
                          lineHeight: 1.45,
                          marginBottom: 6,
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

              <div
                style={{
                  display: "flex",
                  gap: SB_HERO_PROBLEM_SOLUTION_GAP_PX,
                  flexShrink: 0,
                  minHeight: 0,
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      flex: "1 1 0",
                      minWidth: 0,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 12,
                      padding: "16px 12px",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
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
