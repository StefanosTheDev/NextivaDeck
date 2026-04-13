"use client";

import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { SB_CUSTOMER_CASES, type SbCustomerCaseSpec } from "./customerUseCasesSbSinglesContent";
import {
  CustomerSlideSbStyleHeroCardsRow,
  SB_CUSTOMER_MAIN_TOP_OFFSET_PX,
  SB_HERO_PROBLEM_SOLUTION_GAP_PX,
  SB_PROBLEM_CARD_WIDTH_PX,
  SB_SOLUTION_CARD_WIDTH_PX,
} from "./CustomerSlideSbStyleHeroCardsRow";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)";

/** Hero photo height; Problem + Solution row matches this so bottoms align. */
const HERO_HEIGHT_PX = 400;

/** Space between Problem/Solution row and metrics row (unchanged cushion). */
const METRICS_TOP_GAP_PX = 16;

function SbSingleCustomerShell({ slideNumber, c }: { slideNumber: number; c: SbCustomerCaseSpec }) {
  const scale = c.layoutScale ?? 1;
  const heroH = Math.round(HERO_HEIGHT_PX * scale);
  const problemW = Math.round(SB_PROBLEM_CARD_WIDTH_PX * scale);
  const solutionW = Math.round(SB_SOLUTION_CARD_WIDTH_PX * scale);
  const gap = Math.round(SB_HERO_PROBLEM_SOLUTION_GAP_PX * scale);
  const metricsTopGap = Math.round(METRICS_TOP_GAP_PX * scale);
  const cardPadY = Math.round(20 * scale);
  const cardPadX = Math.round(22 * scale);
  const cardRadius = Math.round(14 * scale);
  const metricsRadius = Math.round(12 * scale);
  const metricsPadY = Math.round(16 * scale);
  const metricsPadX = Math.round(20 * scale);
  const fsSection = Math.round(14 * scale);
  const fsBody = Math.round(13 * scale);
  const fsStat = Math.round(28 * scale);
  const fsLabel = Math.round(11 * scale);
  const fsHeroBadge = Math.round(11 * scale);
  const fsHeroMeta = Math.round(11 * scale);

  /** Strip under the photo (black) for location / users / term; image height shrinks so total hero column stays `heroH`. */
  const heroMetaCompact = c.heroMetaCompact === true;
  const heroMetaBelowPadTop = heroMetaCompact ? Math.round(6 * scale) : Math.round(10 * scale);
  const heroMetaBelowHeight = heroMetaCompact
    ? Math.round(heroMetaBelowPadTop + fsHeroMeta * 1.35 + Math.round(4 * scale))
    : Math.round(heroMetaBelowPadTop + fsHeroMeta * 1.35 * 2 + Math.round(8 * scale));
  const heroSymmetricBands = c.heroSymmetricMetaBands === true;
  const bandH = heroMetaBelowHeight;
  const heroImageH = Math.max(0, heroSymmetricBands ? heroH - 2 * bandH : heroH - bandH);
  const heroObjectFit = c.heroObjectFit ?? "contain";
  const heroObjectPosition = c.heroObjectPosition ?? "center center";

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
          SMB Customer Use Case
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
          padding: `${SB_CUSTOMER_MAIN_TOP_OFFSET_PX}px 80px 12px`,
          overflow: "hidden",
          minHeight: 0,
          alignItems: "stretch",
        }}
      >
        <CustomerSlideSbStyleHeroCardsRow
          rowGapPx={gap}
          hero={
          <div
            style={{
              width: "100%",
              height: heroH,
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
            }}
          >
            {heroSymmetricBands ? (
              <div
                aria-hidden
                style={{
                  flexShrink: 0,
                  width: "100%",
                  height: bandH,
                  background: "#000000",
                }}
              />
            ) : null}
            <div
              style={{
                width: "100%",
                height: heroImageH,
                flexShrink: 0,
                borderRadius: cardRadius,
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
                  objectFit: heroObjectFit,
                  objectPosition: heroObjectPosition,
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
              <div
                style={{
                  position: "absolute",
                  bottom: Math.round(12 * scale),
                  left: Math.round(12 * scale),
                  right: Math.round(12 * scale),
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: `${Math.round(4 * scale)}px ${Math.round(12 * scale)}px`,
                    borderRadius: Math.round(20 * scale),
                    background: c.accent,
                    fontSize: fsHeroBadge,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                  }}
                >
                  {c.industry}
                </span>
              </div>
            </div>
            <div
              style={{
                flexShrink: 0,
                width: "100%",
                height: heroMetaBelowHeight,
                boxSizing: "border-box",
                paddingTop: heroMetaBelowPadTop,
                background: "#000000",
              }}
            >
              <p style={{ fontSize: fsHeroMeta, color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.35 }}>{c.size}</p>
            </div>
          </div>
          }
          cards={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: metricsTopGap,
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
              gap,
              alignItems: "stretch",
              alignContent: "stretch",
              height: heroH,
              flexShrink: 0,
              minHeight: 0,
            }}
          >
            <div
              style={{
                flex: "0 0 auto",
                flexShrink: 0,
                width: problemW,
                maxWidth: "100%",
                minHeight: 0,
                alignSelf: "stretch",
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
                {c.problems.map((p, i) => (
                  <li
                    key={`p-${i}-${p.slice(0, 24)}`}
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
                flex: "0 0 auto",
                flexShrink: 0,
                width: solutionW,
                maxWidth: "100%",
                minHeight: 0,
                alignSelf: "stretch",
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
                {c.solutions.map((s, i) => (
                  <li
                    key={`s-${i}-${s.slice(0, 24)}`}
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

          <div style={{ display: "flex", gap, flexShrink: 0, width: "100%" }}>
            {c.metrics.map((m) => (
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
                }}
              >
                <p className="font-heading" style={{ fontSize: fsStat, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
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

export function CustomerUseCaseSbCocoaLoftsSlide({ slideNumber }: { slideNumber: number }) {
  return <SbSingleCustomerShell slideNumber={slideNumber} c={SB_CUSTOMER_CASES[4]} />;
}

export function CustomerUseCaseSbKalleyFlooringSlide({ slideNumber }: { slideNumber: number }) {
  return <SbSingleCustomerShell slideNumber={slideNumber} c={SB_CUSTOMER_CASES[5]} />;
}

export function CustomerUseCaseSbSoutheastDiabetesSlide({ slideNumber }: { slideNumber: number }) {
  return <SbSingleCustomerShell slideNumber={slideNumber} c={SB_CUSTOMER_CASES[6]} />;
}

export function CustomerUseCaseSbHandymanHubSlide({ slideNumber }: { slideNumber: number }) {
  return <SbSingleCustomerShell slideNumber={slideNumber} c={SB_CUSTOMER_CASES[7]} />;
}
