"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ArrowRight } from "lucide-react";

const ACCENT = "#7EB3E8";
const ACCENT_STRONG = "#2860B2";

const transitions = [
  { era: "2000s", from: "On-prem PBX", to: "Cloud Voice" },
  { era: "2010s", from: "Single-channel", to: "Unified Comms" },
  { era: "Mid-2010s", from: "Voice-only", to: "Omnichannel" },
  { era: "2020s", from: "Reactive systems", to: "Conversational AI" },
  { era: "Now", from: "Human-operated", to: "AI-driven ops", current: true },
];

export default function VisionGuideTransitionsSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 12px" }}>
          The moat AI can&apos;t replicate
        </p>
        <h1 className="font-heading" style={{ fontSize: 54, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          We&apos;ve been the guide through every prior transition.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.55)", margin: "16px auto 0", lineHeight: 1.5, maxWidth: 1320 }}>
          Carrier-grade infrastructure can be matched on a long enough timeline. Data architecture can be engineered. A decade of operator trust cannot be reverse-engineered.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "56px 80px 0",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 18,
          alignItems: "stretch",
        }}
      >
        {transitions.map((t, i) => (
          <motion.article
            key={t.era}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            style={{
              background: t.current ? "rgba(40,96,178,0.12)" : "rgba(255,255,255,0.04)",
              border: t.current
                ? `1px solid rgba(126,179,232,0.40)`
                : "1px solid rgba(255,255,255,0.08)",
              borderTop: t.current ? `3px solid ${ACCENT}` : `3px solid ${ACCENT_STRONG}`,
              borderRadius: 14,
              padding: "26px 22px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: t.current ? ACCENT : "rgba(255,255,255,0.4)",
                marginBottom: 18,
              }}
            >
              {t.era}
            </span>

            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.4, fontStyle: "italic" }}>
              From {t.from}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "12px 0" }}>
              <ArrowRight size={16} color={t.current ? ACCENT : "rgba(255,255,255,0.35)"} strokeWidth={2} />
            </div>

            <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.25 }}>
              {t.to}
            </h3>
          </motion.article>
        ))}
      </motion.main>

      <div style={{ padding: "36px 100px 18px", textAlign: "center" }}>
        <p style={{ fontSize: 22, color: "#FFFFFF", margin: "0 0 6px", fontWeight: 500, lineHeight: 1.3 }}>
          The technology changed every cycle. The relationship didn&apos;t.
        </p>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", margin: 0, fontStyle: "italic" }}>
          Same operators. Same trust. New transition.
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
