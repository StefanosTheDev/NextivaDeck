"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { MessageSquare, Database, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: MessageSquare,
    label: "Communications",
    line: "Every channel, one conversation.",
  },
  {
    icon: Database,
    label: "Data",
    line: "Every interaction, one context.",
  },
  {
    icon: Sparkles,
    label: "AI",
    line: "Every outcome, one system to act.",
  },
];

export default function VisionUnifiedPlatformSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 25%, rgba(15,44,89,0.50) 0%, rgba(6,26,55,0.78) 48%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "72px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: "rgba(147,197,253,0.85)",
            margin: 0,
          }}
        >
          The Path Forward
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 64, fontWeight: 500, color: "#FFFFFF", margin: "16px 0 0", lineHeight: 1.12 }}
        >
          The next era of CX belongs to one platform.
        </h1>
        <p style={{ fontSize: 24, color: "rgba(255,255,255,0.55)", margin: "14px 0 0", lineHeight: 1.45 }}>
          Communications, data, and AI &mdash; unified.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        style={{
          flex: 1,
          padding: "60px 120px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 28,
          alignItems: "stretch",
        }}
      >
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.article
              key={p.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
              style={{
                background: "rgba(40,96,178,0.10)",
                border: "1px solid rgba(40,96,178,0.28)",
                borderTop: "3px solid #7EB3E8",
                borderRadius: 18,
                padding: "44px 36px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 18,
              }}
            >
              <div
                style={{
                  width: 76,
                  height: 76,
                  borderRadius: "50%",
                  background: "rgba(40,96,178,0.18)",
                  border: "1px solid rgba(40,96,178,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 28px rgba(126,179,232,0.25)",
                }}
              >
                <Icon size={36} color="#7EB3E8" strokeWidth={1.6} />
              </div>
              <h2
                className="font-heading"
                style={{ fontSize: 38, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}
              >
                {p.label}
              </h2>
              <p
                style={{
                  fontSize: 20,
                  color: "rgba(255,255,255,0.65)",
                  margin: 0,
                  lineHeight: 1.5,
                  maxWidth: 320,
                }}
              >
                {p.line}
              </p>
            </motion.article>
          );
        })}
      </motion.main>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.85 }}
        style={{
          margin: "44px 100px 20px",
          padding: "20px 32px",
          background: "rgba(40,96,178,0.14)",
          border: "1px solid rgba(40,96,178,0.32)",
          borderRadius: 14,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.02em",
          }}
        >
          That&rsquo;s
        </span>
        <span
          className="font-heading"
          style={{
            fontSize: 30,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "0.04em",
            textShadow: "0 0 24px rgba(126,179,232,0.45)",
          }}
        >
          Nextiva.
        </span>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
