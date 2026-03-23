"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ChevronRight } from "lucide-react";

const ACCENT = "#7EB3E8";
const GLASS = "rgba(255,255,255,0.04)";
const BORDER = "rgba(255,255,255,0.08)";

const competitors = [
  {
    segment: "Enterprise CCaaS",
    players: "NICE, Genesys",
    weakness: "Too complex, too expensive",
  },
  {
    segment: "UCaaS players",
    players: "RingCentral, Zoom",
    weakness: "Not AI-native, limited CX depth",
  },
  {
    segment: "Point solutions",
    players: "Fragmented vendors",
    weakness: "Fragmented, not unified",
  },
];

export default function CompetitionCategorySlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1200,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(40,96,178,0.07) 0%, transparent 70%)",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "48px 100px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          COMPETITION
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 60,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          No one owns this category
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px 80px 0",
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: 24,
            width: "100%",
          }}
        >
          {/* Left: stacked competitor cards */}
          <div
            style={{
              flex: 5,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {competitors.map((c, i) => (
              <motion.div
                key={c.segment}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                style={{
                  flex: 1,
                  background: GLASS,
                  border: `1px solid ${BORDER}`,
                  borderTop: "3px solid rgba(224,100,100,0.35)",
                  borderRadius: 14,
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#E06464",
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                >
                  ✕
                </span>
                <div style={{ minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.25,
                    }}
                  >
                    {c.segment}
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.35)",
                      margin: "2px 0 0",
                    }}
                  >
                    {c.players}
                  </p>
                  <p
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      color: "#E06464",
                      margin: "8px 0 0",
                      lineHeight: 1.4,
                    }}
                  >
                    {c.weakness}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Arrow connector */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "rgba(40,96,178,0.15)",
                border: "1px solid rgba(40,96,178,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 24px rgba(40,96,178,0.12)",
              }}
            >
              <ChevronRight size={28} color={ACCENT} strokeWidth={2} />
            </motion.div>
          </div>

          {/* Right: Nextiva hero card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              flex: 4,
              background:
                "linear-gradient(135deg, rgba(40,96,178,0.1) 0%, rgba(40,96,178,0.04) 100%)",
              border: "2px solid rgba(40,96,178,0.35)",
              borderRadius: 16,
              padding: "36px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow:
                "0 8px 48px rgba(40,96,178,0.18), inset 0 1px 0 rgba(255,255,255,0.04)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 300,
                height: 200,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(126,179,232,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <p
              style={{
                fontSize: 30,
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.5,
                fontWeight: 500,
                position: "relative",
              }}
            >
              Nextiva is the only{" "}
              <span style={{ fontWeight: 700, color: ACCENT }}>
                unified platform for the massive middle.
              </span>
            </p>
          </motion.div>
        </div>
      </motion.main>

      <div style={{ height: 16, flexShrink: 0 }} />
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
