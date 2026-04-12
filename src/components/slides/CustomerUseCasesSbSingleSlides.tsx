"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { SB_CUSTOMER_CASES, type SbCustomerCaseSpec } from "./customerUseCasesSbSinglesContent";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)";

/** Matches CustomerSuzukiSlide — breathing room under title on 1080px canvas. */
const MAIN_TOP_OFFSET_PX = 240;

/** Hero photo height; Problem + Solution row matches this so bottoms align. */
const HERO_HEIGHT_PX = 400;

/** Space between Problem/Solution row and metrics row (unchanged cushion). */
const METRICS_TOP_GAP_PX = 16;

/** Horizontal gap between hero and Problem card — same as between Problem and Solution. */
const SB_HERO_PROBLEM_SOLUTION_GAP_PX = 16;

/** Shifts the hero + cards block right within the slide (beyond main horizontal padding). */
const SB_MAIN_BODY_SHIFT_RIGHT_PX = 80;

/**
 * After the hero, leftover width is split between leading space, the card column, and trailing space.
 * Grow ratio 65 : 35 closes 65% of the former “all on the right” gap (trailing space = 35% of free width).
 */
const SB_CARDS_LEADING_FREE_SPACE_GROW = 65;
const SB_CARDS_TRAILING_FREE_SPACE_GROW = 35;

function SbSingleCustomerShell({ slideNumber, c }: { slideNumber: number; c: SbCustomerCaseSpec }) {
  const isFoxy = c.name === "Foxy Coatings";
  const cardsLeadSpacerRef = useRef<HTMLDivElement>(null);
  const [foxyHeroNudgePx, setFoxyHeroNudgePx] = useState(0);

  useLayoutEffect(() => {
    const el = cardsLeadSpacerRef.current;
    if (!isFoxy || !el) {
      setFoxyHeroNudgePx(0);
      return;
    }
    const sync = () => setFoxyHeroNudgePx(el.offsetWidth);
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    sync();
    return () => ro.disconnect();
  }, [isFoxy]);

  return (
    <div className="slide" style={{ background: BG }}>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "40px 80px 0", flexShrink: 0 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 4px",
          }}
        >
          Nextiva Customer
        </p>
        <h1 className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          {c.name}
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: SB_HERO_PROBLEM_SOLUTION_GAP_PX,
            alignItems: "flex-start",
            marginLeft: SB_MAIN_BODY_SHIFT_RIGHT_PX,
            minWidth: 0,
            width: `calc(100% - ${SB_MAIN_BODY_SHIFT_RIGHT_PX}px)`,
          }}
        >
        <div
          style={{
            width: "26%",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignSelf: "flex-start",
            ...(isFoxy
              ? {
                  position: "relative",
                  zIndex: 2,
                  transform: `translateX(${foxyHeroNudgePx}px)`,
                }
              : {}),
          }}
        >
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
              src={c.photo}
              alt={c.name}
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
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: 20,
                  background: c.accent,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  marginBottom: 8,
                }}
              >
                {c.industry}
              </span>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.3 }}>{c.size}</p>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: "1 1 auto",
            minWidth: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            alignSelf: "stretch",
          }}
        >
          <div
            ref={cardsLeadSpacerRef}
            aria-hidden
            style={{ flex: `${SB_CARDS_LEADING_FREE_SPACE_GROW} 1 0%`, minWidth: 0 }}
          />
          <div style={{ flex: "0 0 auto", minWidth: 0, maxWidth: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: METRICS_TOP_GAP_PX,
              width: "max-content",
              maxWidth: "100%",
              minHeight: 0,
            }}
          >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: SB_HERO_PROBLEM_SOLUTION_GAP_PX,
              alignItems: "stretch",
              alignContent: "stretch",
              height: HERO_HEIGHT_PX,
              flexShrink: 0,
              minHeight: 0,
            }}
          >
            <div
              style={{
                flex: "0 0 auto",
                width: "max-content",
                maxWidth: "100%",
                minHeight: 0,
                alignSelf: "stretch",
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
                {c.problems.map((p, i) => (
                  <li
                    key={`p-${i}-${p.slice(0, 24)}`}
                    style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.5, marginBottom: 8, paddingLeft: 16, position: "relative" }}
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
                width: "max-content",
                maxWidth: "100%",
                minHeight: 0,
                alignSelf: "stretch",
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
                {c.solutions.map((s, i) => (
                  <li
                    key={`s-${i}-${s.slice(0, 24)}`}
                    style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.5, marginBottom: 8, paddingLeft: 16, position: "relative" }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#7EB3E8" }}>✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ display: "flex", gap: 16, flexShrink: 0, width: "100%" }}>
            {c.metrics.map((m) => (
              <div
                key={m.label}
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "16px 20px",
                  textAlign: "center",
                }}
              >
                <p className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
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
                  }}
                >
                  {m.label}
                </p>
              </div>
            ))}
          </div>
          </div>
          </div>
          <div
            aria-hidden
            style={{ flex: `${SB_CARDS_TRAILING_FREE_SPACE_GROW} 1 0%`, minWidth: 0 }}
          />
        </div>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}

export function CustomerUseCaseSbFoxySlide({ slideNumber }: { slideNumber: number }) {
  return <SbSingleCustomerShell slideNumber={slideNumber} c={SB_CUSTOMER_CASES[0]} />;
}

export function CustomerUseCaseSbVisionWheelSlide({ slideNumber }: { slideNumber: number }) {
  return <SbSingleCustomerShell slideNumber={slideNumber} c={SB_CUSTOMER_CASES[1]} />;
}

export function CustomerUseCaseSbRenascentSlide({ slideNumber }: { slideNumber: number }) {
  return <SbSingleCustomerShell slideNumber={slideNumber} c={SB_CUSTOMER_CASES[2]} />;
}

export function CustomerUseCaseSbSageSlide({ slideNumber }: { slideNumber: number }) {
  return <SbSingleCustomerShell slideNumber={slideNumber} c={SB_CUSTOMER_CASES[3]} />;
}
