"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Sparkles, AlertTriangle } from "lucide-react";

const sides = [
  {
    icon: Sparkles,
    label: "For the customer",
    statement: "Never been a better time.",
    bullets: [
      "Reach any business, any channel, in seconds",
      "Expect answers immediately, in context, in their language",
      "Want every touch to feel personal and effortless",
      "Compare every brand to the best experience they've ever had",
    ],
    accent: "#7EB3E8",
    accentBg: "rgba(40,96,178,0.12)",
    accentBorder: "rgba(40,96,178,0.30)",
    bullet: "#7EB3E8",
  },
  {
    icon: AlertTriangle,
    label: "For the business",
    statement: "Never been a harder time.",
    bullets: [
      "Drowning in fragmented tools and disconnected channels",
      "Customer context trapped behind siloed data",
      "Labor costs rising while patience keeps falling",
      "Expectations moving faster than the stack can keep up",
    ],
    accent: "#F0A88C",
    accentBg: "rgba(240,168,140,0.10)",
    accentBorder: "rgba(240,168,140,0.30)",
    bullet: "#F0A88C",
  },
];

export default function VisionTwoRealitiesSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
        style={{ padding: "64px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
            margin: 0,
          }}
        >
          The world of customers today
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 58, fontWeight: 500, color: "#FFFFFF", margin: "14px 0 0", lineHeight: 1.15 }}
        >
          Two realities.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.55)", margin: "12px 0 0", lineHeight: 1.5, maxWidth: 1400, marginLeft: "auto", marginRight: "auto" }}>
          The bar customers set keeps rising. The systems built to meet it haven&rsquo;t.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "80px 100px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 28,
          alignItems: "start",
        }}
      >
        {sides.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.article
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              style={{
                background: s.accentBg,
                border: `1px solid ${s.accentBorder}`,
                borderTop: `3px solid ${s.accent}`,
                borderRadius: 16,
                padding: "32px 48px 40px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: s.accentBg,
                    border: `1px solid ${s.accentBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={30} color={s.accent} strokeWidth={1.75} />
                </div>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: s.accent,
                  }}
                >
                  {s.label}
                </span>
              </div>

              <h2
                className="font-heading"
                style={{ fontSize: 36, fontWeight: 700, color: "#FFFFFF", margin: "0 0 28px", lineHeight: 1.2 }}
              >
                {s.statement}
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {s.bullets.map((b) => (
                  <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: s.bullet,
                        marginTop: 10,
                        flexShrink: 0,
                        boxShadow: `0 0 12px ${s.bullet}`,
                      }}
                    />
                    <span style={{ fontSize: 20, color: "rgba(255,255,255,0.85)", fontWeight: 500, lineHeight: 1.4 }}>
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.main>

      <div style={{ flex: 1 }} />

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
