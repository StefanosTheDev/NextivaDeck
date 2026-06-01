"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Handshake,
  Users,
  Layers,
  CalendarClock,
  Network,
  Lock,
  Rocket,
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
    icon: BookOpen,
    title: "The four strategic definitions",
    body: "ICP · Expand list · Drop list · operating principles — locked and ready to govern FY27.",
  },
  {
    icon: Handshake,
    title: "Booking commits owned by name",
    body: "Every function owns a number. Revenue is the operating model — not a sales line. Mandates and basis on the page.",
  },
  {
    icon: Users,
    title: "SB New & SB Expansion capacity plan",
    body: "Directional headcount build for SB New and SB Expansion — signed off by finance with dollar implications.",
  },
  {
    icon: Layers,
    title: "Platform-U & Platform Extension capacity plan",
    body: "Directional headcount build for Platform-U and Platform Extension — signed off by finance with dollar implications.",
  },
  {
    icon: CalendarClock,
    title: "Quarterly review cadence",
    body: "Named owners per metric — what gets reviewed, escalated, and reallocated. No dashboards, only decisions.",
  },
  {
    icon: Network,
    title: "Org design follow-up scoped",
    body: "Where responsibility and influence are conflated — named owners, timeline, and criteria for the structural follow-up.",
  },
];

export default function FutureDay3DeliverablesSlide({
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
          padding: "22px 72px 0",
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
            marginBottom: 12,
          }}
        >
          <Rocket size={14} color={BLUE} strokeWidth={2.4} />
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
            FY27 Strategic Session · Day 03
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
          How we ship.
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
          <strong style={{ color: NAVY_DARK }}>Posture —</strong> operating
          model. The day moves from <em>what</em> to <em>how</em>.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        style={{
          flex: 1,
          padding: "16px 72px 10px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
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
            padding: "16px 22px",
            borderRadius: 14,
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #F1F5FB 100%)",
            border: `1px solid ${BLUE}33`,
            boxShadow: "0 6px 24px rgba(40,96,178,0.08)",
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: BLUE,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            <Flag size={18} color="#FFFFFF" strokeWidth={2.2} />
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
                marginBottom: 4,
              }}
            >
              Executive walk-out · Day 3
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 14.5,
                color: NAVY_DARK,
                lineHeight: 1.5,
              }}
            >
              <strong>The strategy becomes the operating model.</strong> Four
              strategic definitions locked, booking commits owned by name, SB
              and Platform capacity plans signed off by finance, a quarterly
              cadence set — and the org-design follow-up honestly scoped.{" "}
              <em>Revenue is the operating model of the company — not a sales
              line.</em>
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
            By end of Day 3 — locked
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
            gridTemplateColumns: "1fr 1fr 1fr",
            gridAutoRows: "1fr",
            gap: 14,
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
                  borderTop: `4px solid ${BLUE}`,
                  borderRadius: 12,
                  padding: "14px 18px",
                  display: "flex",
                  gap: 12,
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
                    top: 6,
                    right: 12,
                    fontSize: 32,
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
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: BLUE_SOFT,
                    border: `1px solid ${BLUE}`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color={BLUE} strokeWidth={2} />
                </span>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h2
                    className="font-heading"
                    style={{
                      fontSize: 15.5,
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
                      fontSize: 12.5,
                      color: BODY,
                      margin: "5px 0 0",
                      lineHeight: 1.45,
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
            The test
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
            Did the three days work? Every leader can defensibly answer four
            questions in front of the board:{" "}
            <strong>who we serve</strong> · <strong>what we double down on</strong>{" "}
            · <strong>what we walk away from</strong> · <strong>how we operate</strong>.
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
        Three-day session framework · Day 3 of 3
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
