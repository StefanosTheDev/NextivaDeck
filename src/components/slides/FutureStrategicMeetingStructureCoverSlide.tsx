"use client";

import { motion } from "framer-motion";
import { CalendarRange, Target, Scale, Rocket } from "lucide-react";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

type Day = {
  num: string;
  label: string;
  title: string;
  posture: string;
  icon: typeof Target;
};

const DAYS: Day[] = [
  {
    num: "01",
    label: "Day 1",
    title: "Who we serve, what's working.",
    posture: "Ground truth before commitments.",
    icon: Target,
  },
  {
    num: "02",
    label: "Day 2",
    title: "Expand and Drop.",
    posture: "Hard choices.",
    icon: Scale,
  },
  {
    num: "03",
    label: "Day 3",
    title: "How we ship.",
    posture: "Operating model — strategy becomes the how.",
    icon: Rocket,
  },
];

export default function FutureStrategicMeetingStructureCoverSlide({
  slideNumber: _sn,
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
      }}
    >
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1400,
          height: 1400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(40,96,178,0.07) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 100px 0",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          gap: 26,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            background: BLUE_SOFT,
            border: `2px solid ${BLUE}`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 12px 36px rgba(40,96,178,0.20)",
          }}
        >
          <CalendarRange size={42} color={BLUE} strokeWidth={2} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="eyebrow"
          style={{
            color: BLUE,
            margin: 0,
            fontSize: 20,
            letterSpacing: "0.22em",
          }}
        >
          FY27 · Three-day session
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-heading"
          style={{
            fontSize: 116,
            fontWeight: 700,
            color: NAVY,
            lineHeight: 0.98,
            letterSpacing: "-0.03em",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          Strategic Meeting Structure.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 22,
            fontWeight: 400,
            color: BODY,
            lineHeight: 1.4,
            maxWidth: 1180,
            margin: 0,
          }}
        >
          Three days — ground truth, hard choices, operating model.
          <br />
          <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>
            How the room moves from observation to commitment.
          </strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{
            width: 128,
            height: 5,
            background: BLUE,
            borderRadius: 2,
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 22,
            width: "100%",
            maxWidth: 1280,
            marginTop: 8,
          }}
        >
          {DAYS.map((d, idx) => {
            const Icon = d.icon;
            return (
              <motion.article
                key={d.num}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 + idx * 0.1 }}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderTop: `4px solid ${BLUE}`,
                  borderRadius: 10,
                  padding: "22px 22px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  textAlign: "left",
                  position: "relative",
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
                  {d.num}
                </span>

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      width: 42,
                      height: 42,
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
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: BLUE,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                    }}
                  >
                    {d.label}
                  </span>
                </div>
                <h3
                  className="font-heading"
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: NAVY_DARK,
                    lineHeight: 1.2,
                    letterSpacing: "-0.005em",
                    margin: 0,
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 14.5,
                    fontWeight: 400,
                    color: BODY,
                    lineHeight: 1.45,
                    margin: 0,
                  }}
                >
                  {d.posture}
                </p>
              </motion.article>
            );
          })}
        </div>
      </main>

      <footer
        style={{
          padding: "16px 100px 24px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        Strategic Meeting Structure · Nextiva FY27
      </footer>
    </div>
  );
}
