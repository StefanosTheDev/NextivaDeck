"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { MessageSquare, Database, Brain } from "lucide-react";

const pillars = [
  {
    Icon: MessageSquare,
    title: "Communications",
    description: "Voice, messaging, chat, video",
  },
  {
    Icon: Database,
    title: "Customer Data",
    description: "Structured + unstructured, unified in real time",
  },
  {
    Icon: Brain,
    title: "AI Orchestration",
    description: "Real-time decisioning and workflow automation",
  },
];

const ACCENT = "#7EB3E8";
const BLUE = "#2860B2";

export default function AgenticCXPlatformSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Ambient glow behind pillars */}
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(40,96,178,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "56px 100px 0",
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
            margin: "0 0 12px",
          }}
        >
          THE SOLUTION
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "0 auto",
            lineHeight: 1.15,
          }}
        >
          Nextiva&apos;s Agentic CX Platform
        </h1>
        <p
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "rgba(255,255,255,0.5)",
            margin: "14px auto 0",
            lineHeight: 1.5,
          }}
        >
          A unified architecture that combines:
        </p>
      </motion.header>

      {/* Three pillar cards */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 100px",
          position: "relative",
          zIndex: 1,
          gap: 0,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1440,
            background: "rgba(40,96,178,0.04)",
            border: "1px solid rgba(40,96,178,0.12)",
            borderRadius: 20,
            padding: "28px 28px 32px",
          }}
        >
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: ACCENT,
              textAlign: "center",
              margin: "0 0 24px",
            }}
          >
            UNIFIED PLATFORM
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              gap: 28,
            }}
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.25 + i * 0.12 }}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderTop: `3px solid ${BLUE}`,
                  borderRadius: 16,
                  padding: "44px 36px 40px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: 88,
                    height: 88,
                    borderRadius: "50%",
                    background: "rgba(40,96,178,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle at 50% 40%, #4D9AE8 0%, #2860B2 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <pillar.Icon
                      size={28}
                      color="#FFFFFF"
                      strokeWidth={1.75}
                    />
                  </div>
                </div>

                <h2
                  className="font-heading"
                  style={{
                    fontSize: 32,
                    fontWeight: 600,
                    color: "#FFFFFF",
                    margin: "16px 0 0",
                    lineHeight: 1.2,
                  }}
                >
                  {pillar.title}
                </h2>

                <div
                  style={{
                    width: 36,
                    height: 2,
                    background: BLUE,
                    borderRadius: 1,
                    margin: "16px 0",
                  }}
                />

                <p
                  style={{
                    fontSize: 19,
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.main>

      {/* Closing callout */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={{
          padding: "16px 100px 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            background: "rgba(40,96,178,0.12)",
            border: "1px solid rgba(40,96,178,0.2)",
            borderRadius: 14,
            padding: "18px 40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 21,
              fontWeight: 600,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Turning every conversation into{" "}
            <span style={{ color: ACCENT }}>
              an action
            </span>{" "}
            and{" "}
            <span style={{ color: ACCENT }}>
              an outcome.
            </span>
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
