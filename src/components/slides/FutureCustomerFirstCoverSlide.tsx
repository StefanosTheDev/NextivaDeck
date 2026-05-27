"use client";

import { motion } from "framer-motion";
import { Wrench, HeartHandshake, Megaphone } from "lucide-react";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";

const FACETS = [
  {
    icon: Wrench,
    label: "Build",
    description: "the product we make for them.",
  },
  {
    icon: HeartHandshake,
    label: "Serve",
    description: "the way we deliver value.",
  },
  {
    icon: Megaphone,
    label: "Acquire",
    description: "the way we go to market.",
  },
];

export default function FutureCustomerFirstCoverSlide({
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
          top: "42%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1400,
          height: 1400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(40,96,178,0.06) 0%, transparent 55%)",
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
          gap: 28,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="eyebrow"
          style={{
            color: BLUE,
            margin: 0,
            fontSize: 22,
            letterSpacing: "0.18em",
          }}
        >
          Strategic Culture
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading"
          style={{
            fontSize: 152,
            fontWeight: 700,
            color: NAVY,
            lineHeight: 1,
            letterSpacing: "-0.025em",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          Customer First.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 32,
            fontWeight: 400,
            color: BODY,
            lineHeight: 1.35,
            maxWidth: 1180,
            margin: 0,
          }}
        >
          Built around the customer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            width: 128,
            height: 5,
            background: BLUE,
            borderRadius: 2,
            marginTop: 4,
          }}
        />
      </main>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        style={{
          padding: "0 100px 18px",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            color: BLUE,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            margin: 0,
            textAlign: "center",
          }}
        >
          Customer First in:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {FACETS.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 + idx * 0.08 }}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderTop: `4px solid ${BLUE}`,
                  borderRadius: 8,
                  padding: "22px 24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
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
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 26,
                      fontWeight: 700,
                      color: NAVY_DARK,
                      lineHeight: 1.2,
                      letterSpacing: "-0.005em",
                      margin: 0,
                    }}
                  >
                    {f.label}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 17,
                    fontWeight: 400,
                    color: BODY,
                    lineHeight: 1.45,
                    margin: 0,
                  }}
                >
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <footer
        style={{
          padding: "6px 100px 22px",
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
        Strategic Culture · Customer First
      </footer>
    </div>
  );
}
