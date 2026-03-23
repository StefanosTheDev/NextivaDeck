"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const ACCENT = "#2860B2";

interface Era {
  label: string;
  items: string[];
}

const eras: Era[] = [
  {
    label: "Yesterday",
    items: [
      "Fragmented tools",
      "Reactive workflows",
      "Transactional interactions",
    ],
  },
  {
    label: "Today",
    items: [
      "Unified platforms",
      "Conversational engagement",
      "Data-informed decisions",
    ],
  },
  {
    label: "Next",
    items: [
      "AI agents + humans working together",
      "Autonomous resolution",
      "Every interaction drives real-time outcomes",
    ],
  },
];

const eraStyles: Record<string, { cardBg: string; cardBorder: string; borderTop: string; labelColor: string; textColor: string; pillBg: string }> = {
  Yesterday: {
    cardBg: "rgba(255,255,255,0.02)",
    cardBorder: "1px solid rgba(255,255,255,0.06)",
    borderTop: "3px solid rgba(255,255,255,0.08)",
    labelColor: "rgba(255,255,255,0.35)",
    textColor: "rgba(255,255,255,0.45)",
    pillBg: "rgba(255,255,255,0.03)",
  },
  Today: {
    cardBg: "rgba(255,255,255,0.04)",
    cardBorder: "1px solid rgba(255,255,255,0.1)",
    borderTop: "3px solid rgba(255,255,255,0.15)",
    labelColor: "#CCC7C3",
    textColor: "rgba(255,255,255,0.7)",
    pillBg: "rgba(255,255,255,0.06)",
  },
  Next: {
    cardBg: "rgba(40,96,178,0.08)",
    cardBorder: "1px solid rgba(40,96,178,0.3)",
    borderTop: `3px solid ${ACCENT}`,
    labelColor: "#7EB3E8",
    textColor: "rgba(255,255,255,0.85)",
    pillBg: "rgba(40,96,178,0.12)",
  },
};

export default function TheShiftSlide({ slideNumber = 8 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          THE SHIFT
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "0 auto",
            lineHeight: 1.18,
            maxWidth: 1200,
          }}
        >
          Customer experience is becoming real-time,
          <br />
          AI-driven, and outcome-based
        </h1>
      </motion.header>

      {/* Timeline bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        style={{
          padding: "40px 140px 0",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 140,
            right: 140,
            top: 48,
            height: 2,
            background: `linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.15) 50%, ${ACCENT})`,
            borderRadius: 1,
          }}
        />
        {eras.map((era, i) => (
          <div
            key={era.label}
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  width: i === 2 ? 18 : 12,
                  height: i === 2 ? 18 : 12,
                  borderRadius: "50%",
                  background: i === 2 ? ACCENT : i === 1 ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.12)",
                  border: i === 2 ? `2px solid rgba(126,179,232,0.5)` : "none",
                  boxShadow: i === 2 ? `0 0 12px rgba(40,96,178,0.4)` : "none",
                }}
              />
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: eraStyles[era.label].labelColor,
                  margin: "10px 0 0",
                }}
              >
                {era.label}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Columns */}
      <main
        style={{
          flex: 1,
          padding: "20px 100px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 24,
          alignItems: "start",
        }}
      >
        {eras.map((era, i) => {
          const s = eraStyles[era.label];
          return (
            <motion.div
              key={era.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
              style={{
                background: s.cardBg,
                border: s.cardBorder,
                borderTop: s.borderTop,
                borderRadius: 14,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {era.items.map((item, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.5 + i * 0.12 + j * 0.06 }}
                  style={{
                    background: s.pillBg,
                    borderRadius: 10,
                    padding: "14px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: i === 2 ? ACCENT : i === 1 ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.12)",
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 500,
                      color: s.textColor,
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          );
        })}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
