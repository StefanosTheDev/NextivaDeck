"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Gauge, MessageCircle, Layers } from "lucide-react";

const ACCENT = "#7EB3E8";
const ACCENT_STRONG = "#2860B2";

const actions = [
  {
    num: "01",
    icon: Gauge,
    title: "Move faster.",
    desc: "Quarterly decisions become weekly. Weekly decisions become daily. Velocity is the only thing that closes a window.",
  },
  {
    num: "02",
    icon: MessageCircle,
    title: "Stay close to the operator.",
    desc: "The customer empathy moat is not abstract. It\u2019s a weekly habit. Talk to them. Bring what you hear back into the building.",
  },
  {
    num: "03",
    icon: Layers,
    title: "Compound.",
    desc: "Every feature, every deal, every renewed customer compounds the trust moat that defines the next decade.",
  },
];

export default function VisionWhatNextSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
          What we do next
        </p>
        <h1 className="font-heading" style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          We are the guide. The clock is ticking. Let&apos;s go.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "56px 100px 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
          alignItems: "stretch",
        }}
      >
        {actions.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.article
              key={a.num}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: `3px solid ${ACCENT_STRONG}`,
                borderRadius: 16,
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 22 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: "rgba(40,96,178,0.15)",
                    border: "1px solid rgba(40,96,178,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={26} color={ACCENT} strokeWidth={1.75} />
                </div>
                <span style={{ fontSize: 40, fontWeight: 700, color: "rgba(255,255,255,0.18)", letterSpacing: "-0.02em", lineHeight: 1 }}>
                  {a.num}
                </span>
              </div>

              <h2 className="font-heading" style={{ fontSize: 30, fontWeight: 700, color: "#FFFFFF", margin: "0 0 18px", lineHeight: 1.2 }}>
                {a.title}
              </h2>

              <p style={{ fontSize: 19, color: "rgba(255,255,255,0.65)", margin: 0, lineHeight: 1.55, flex: 1 }}>
                {a.desc}
              </p>
            </motion.article>
          );
        })}
      </motion.main>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{ padding: "40px 100px 6px", textAlign: "center" }}
      >
        <p style={{ fontSize: 19, color: "rgba(255,255,255,0.55)", margin: "0 0 18px", lineHeight: 1.5, fontStyle: "italic" }}>
          We&apos;ve been the guide through four prior transitions. We are built to be the guide through this one too.
        </p>
        <p
          className="font-heading"
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Let&apos;s go.
        </p>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
