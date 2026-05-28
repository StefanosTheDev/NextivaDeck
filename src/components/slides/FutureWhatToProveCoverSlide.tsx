"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";

export default function FutureWhatToProveCoverSlide({
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
          gap: 32,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          style={{
            width: 104,
            height: 104,
            borderRadius: "50%",
            background: BLUE_SOFT,
            border: `2px solid ${BLUE}`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 14px 44px rgba(40,96,178,0.22)",
          }}
        >
          <Target size={52} color={BLUE} strokeWidth={2} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="eyebrow"
          style={{
            color: BLUE,
            margin: 0,
            fontSize: 22,
            letterSpacing: "0.18em",
          }}
        >
          Proof Points
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
            lineHeight: 1,
            letterSpacing: "-0.025em",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          What we need to prove out.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 28,
            fontWeight: 400,
            color: BODY,
            lineHeight: 1.35,
            maxWidth: 1180,
            margin: 0,
          }}
        >
          The hypotheses, milestones and metrics we&apos;ll measure ourselves against.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{
            width: 128,
            height: 5,
            background: BLUE,
            borderRadius: 2,
            marginTop: 4,
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
        Proof Points · What we need to prove out
      </footer>
    </div>
  );
}
