"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import SlideFooter from "../../SlideFooter";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";

export type DividerTopic = {
  areaNum: string;
  title: string;
  subtitle: string;
  eyebrow?: string;
};

export default function DecisionAreaDividerTemplate({
  topic,
  slideNumber = 0,
}: {
  topic: DividerTopic;
  slideNumber?: number;
}) {
  const eyebrow = topic.eyebrow ?? `Decision Area ${topic.areaNum}`;

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
          top: "50%",
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

      <span
        aria-hidden
        className="font-heading"
        style={{
          position: "absolute",
          top: "50%",
          right: 80,
          transform: "translateY(-50%)",
          fontSize: 340,
          fontWeight: 700,
          color: BLUE,
          opacity: 0.07,
          lineHeight: 1,
          letterSpacing: "-0.05em",
          fontVariantNumeric: "tabular-nums",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {topic.areaNum}
      </span>

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 100px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          gap: 28,
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
          <Compass size={42} color={BLUE} strokeWidth={2} />
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
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-heading"
          style={{
            fontSize: 132,
            fontWeight: 700,
            color: NAVY,
            lineHeight: 0.98,
            letterSpacing: "-0.03em",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          {topic.title}.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 24,
            fontWeight: 400,
            color: BODY,
            lineHeight: 1.4,
            maxWidth: 1100,
            margin: 0,
          }}
        >
          {topic.subtitle}
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
      </main>

      <footer
        style={{
          padding: "10px 100px 24px",
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
        FY27 Strategic Planning · {topic.title}
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
