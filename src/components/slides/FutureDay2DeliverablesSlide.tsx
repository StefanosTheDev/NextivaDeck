"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  XCircle,
  Calculator,
  LineChart,
  Lock,
  Scale,
  Flag,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

const DELIVERABLES = [
  {
    icon: ArrowUpRight,
    title: "The Expand list",
    body: "Products, motions, and bets that earn the next dollar of investment — each with a posture (Test, Expand, or Harvest) and a hypothesis.",
  },
  {
    icon: XCircle,
    title: "The Drop list",
    body: "Complexity intentionally left behind. Work, motions, and commitments retired — with timing — to free capital, energy, and focus.",
  },
  {
    icon: Calculator,
    title: "LTV:CAC targets ratified",
    body: "Per segment, per motion — targets, not ranges. ≥3× blended, ≥3.5× VSB, ≥3× Platform. Owned by Anne and Jeff.",
  },
  {
    icon: LineChart,
    title: "Platform & SB GM convergence POV",
    body: "A clear view on how Platform and SB gross margins come together — what's driving it, and what gap still needs to close.",
  },
];

export default function FutureDay2DeliverablesSlide({
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
            padding: "8px 18px",
            borderRadius: 999,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}55`,
            marginBottom: 14,
          }}
        >
          <Scale size={14} color={BLUE} strokeWidth={2.4} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
            }}
          >
            FY27 Strategic Session · Day 02
          </span>
        </div>

        <h1
          className="font-heading"
          style={{
            fontSize: 44,
            fontWeight: 600,
            color: NAVY_DARK,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          Expand and Drop.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 18,
            color: BODY,
            margin: "10px auto 0",
            maxWidth: 1100,
            lineHeight: 1.5,
          }}
        >
          <strong style={{ color: NAVY_DARK }}>Posture —</strong> hard choices.
          The day moves from observation to commitment.{" "}
          <em>Disagreement is the feature; resolution is the work.</em>
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        style={{
          flex: 1,
          padding: "20px 72px 12px",
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
            padding: "18px 24px",
            borderRadius: 14,
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #F1F5FB 100%)",
            border: `1px solid ${BLUE}33`,
            boxShadow: "0 6px 24px rgba(40,96,178,0.08)",
            display: "flex",
            gap: 18,
            alignItems: "flex-start",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: 42,
              height: 42,
              borderRadius: 11,
              background: BLUE,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            <Flag size={20} color="#FFFFFF" strokeWidth={2.2} />
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: BLUE,
                marginBottom: 6,
              }}
            >
              Executive walk-out · Day 2
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 15.5,
                color: NAVY_DARK,
                lineHeight: 1.5,
              }}
            >
              <strong>Where the next dollar goes — and what work earns no
              more.</strong>{" "}
              The Expand and Drop lists are locked, every motion carries a
              posture (Test, Expand, Harvest, or Drop), and{" "}
              <strong>LTV:CAC targets are ratified per segment and motion</strong>{" "}
              — not a range, a number. Platform-to-SB gross-margin convergence
              has a <em>defensible</em> POV — drivers named, residuals named.
            </p>
          </div>
        </motion.div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <Lock size={18} color={BLUE} strokeWidth={2.4} />
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: BLUE,
              margin: 0,
            }}
          >
            By end of Day 2 — locked
          </p>
          <span
            style={{
              flex: 1,
              height: 1,
              background: `linear-gradient(to right, ${CARD_BORDER}, transparent)`,
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 18,
            flex: 1,
            minHeight: 0,
          }}
        >
          {DELIVERABLES.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.article
                key={d.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 + i * 0.06 }}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderTop: `5px solid ${BLUE}`,
                  borderRadius: 14,
                  padding: "18px 22px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  boxShadow: "0 6px 20px rgba(6,26,55,0.05)",
                  position: "relative",
                  minHeight: 0,
                }}
              >
                <span
                  className="font-heading"
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 18,
                    fontSize: 52,
                    fontWeight: 700,
                    color: BLUE,
                    opacity: 0.12,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    pointerEvents: "none",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  style={{
                    width: 46,
                    height: 46,
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

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h2
                    className="font-heading"
                    style={{
                      fontSize: 19,
                      fontWeight: 700,
                      color: NAVY_DARK,
                      margin: 0,
                      lineHeight: 1.2,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {d.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 13.5,
                      color: BODY,
                      margin: "6px 0 0",
                      lineHeight: 1.5,
                    }}
                  >
                    {d.body}
                  </p>
                </div>
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
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}33`,
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
              flexShrink: 0,
            }}
          >
            Why order matters
          </span>
          <span style={{ width: 1, height: 18, background: `${BLUE}55` }} />
          <p
            style={{
              margin: 0,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14,
              color: NAVY_DARK,
              lineHeight: 1.45,
              flex: 1,
            }}
          >
            Day 2 must land Expand and Drop before Day 3 can size headcount and
            commits — otherwise capacity gets allocated against a wishlist, not
            a strategy.
          </p>
        </motion.div>
      </motion.main>

      <footer
        style={{
          padding: "0 72px 14px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 12,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        Three-day session framework · Day 2 of 3
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
