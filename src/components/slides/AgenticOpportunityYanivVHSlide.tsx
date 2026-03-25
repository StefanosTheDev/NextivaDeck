"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const segments = [
  {
    value: "6M",
    flex: 6,
    label: "Enterprise",
    sublabel: ">250 agents",
    tag: "Where competitors focus",
    bg: "rgba(255,255,255,0.03)",
    tagColor: "#E07E7E",
    muted: true,
  },
  {
    value: "12M",
    flex: 12,
    label: "The Massive Middle",
    sublabel: "<250 agents",
    bg: "rgba(40,96,178,0.15)",
    muted: false,
  },
  {
    value: "7M",
    flex: 7,
    label: "Beyond Contact Centers",
    sublabel: "Businesses doing CX",
    bg: "rgba(40,96,178,0.10)",
    muted: false,
  },
];

export default function AgenticOpportunityYanivVHSlide({ slideNumber = 12 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
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
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          THE AGENTIC AI OPPORTUNITY
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          The white space is wide open.
        </h1>
        <p
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
            margin: "14px 0 0",
            lineHeight: 1.5,
          }}
        >
          Most competitors chase 6M enterprise seats. We see 19M.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 100px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            width: "100%",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {segments.map((seg, i) => (
            <motion.div
              key={seg.value}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
              style={{
                flex: seg.flex,
                background: seg.bg,
                padding: "36px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                borderRight:
                  i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <p
                className="font-heading"
                style={{
                  fontSize: 60,
                  fontWeight: 700,
                  color: seg.muted ? "rgba(255,255,255,0.4)" : "#FFFFFF",
                  margin: 0,
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {seg.value}
              </p>
              <p
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: seg.muted
                    ? "rgba(255,255,255,0.28)"
                    : "rgba(255,255,255,0.7)",
                  margin: "12px 0 3px",
                  lineHeight: 1.3,
                }}
              >
                {seg.label}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: seg.muted
                    ? "rgba(255,255,255,0.18)"
                    : "rgba(255,255,255,0.4)",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {seg.sublabel}
              </p>
              {seg.tag && (
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: seg.tagColor,
                    margin: "14px 0 0",
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                  }}
                >
                  {seg.tag}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "24%",
            width: "76%",
            marginTop: 20,
          }}
        >
          <div
            style={{
              width: "80%",
              height: 2,
              background: "#7EB3E8",
              borderRadius: 1,
            }}
          />
          <div
            style={{
              width: 2,
              height: 14,
              background: "#7EB3E8",
              borderRadius: 1,
            }}
          />
          <p
            className="font-heading"
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#7EB3E8",
              margin: "8px 0 0",
              letterSpacing: "0.02em",
            }}
          >
            Nextiva&apos;s opportunity
          </p>
        </motion.div>
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        style={{
          padding: "0 100px 20px",
          textAlign: "center",
          flexShrink: 0,
        }}
      >
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.35)",
            margin: 0,
            fontStyle: "italic",
          }}
        >
          Millions of growing businesses are underserved by platforms built for
          the enterprise.
        </p>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
