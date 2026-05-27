"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { FileText, Zap, Check } from "lucide-react";

const sides = [
  {
    icon: FileText,
    label: "System of Record",
    statement: "Tells you what happened.",
    bullets: [
      "Stores the data",
      "Shows it in a UI",
      "Waits for a human to act",
      "Charges per seat",
    ],
    accent: "rgba(255,255,255,0.35)",
    accentBg: "rgba(255,255,255,0.06)",
    accentBorder: "rgba(255,255,255,0.10)",
    muted: true,
  },
  {
    icon: Zap,
    label: "System of Action",
    statement: "Does something about it.",
    bullets: [
      "Captures the interaction live",
      "Decides in real time",
      "Executes the workflow",
      "Charges for outcomes",
    ],
    accent: "#7EB3E8",
    accentBg: "rgba(40,96,178,0.12)",
    accentBorder: "rgba(40,96,178,0.30)",
    muted: false,
  },
];

export default function VisionSystemOfActionSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
        style={{ padding: "72px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <h1 className="font-heading" style={{ fontSize: 60, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          We don&apos;t store data. We act on it.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "80px 120px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
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
                background: s.muted ? "rgba(255,255,255,0.03)" : "rgba(40,96,178,0.08)",
                border: `1px solid ${s.accentBorder}`,
                borderTop: `3px solid ${s.accent}`,
                borderRadius: 16,
                padding: "40px 96px 80px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 22 }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: s.accentBg,
                    border: `1px solid ${s.accentBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={34} color={s.accent} strokeWidth={1.75} />
                </div>
                <div>
                  <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: s.accent }}>
                    {s.label}
                  </span>
                </div>
                {!s.muted && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src="/images/nextiva-logo-white.svg"
                    alt="Nextiva"
                    style={{
                      marginLeft: "auto",
                      height: 32,
                      width: "auto",
                      filter: "drop-shadow(0 0 18px rgba(126,179,232,0.35))",
                    }}
                  />
                )}
              </div>

              <h2 className="font-heading" style={{ fontSize: 38, fontWeight: 700, color: s.muted ? "rgba(255,255,255,0.65)" : "#FFFFFF", margin: "0 0 56px", lineHeight: 1.2, whiteSpace: "nowrap" }}>
                {s.statement}
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                {s.bullets.map((b) => (
                  <div key={b} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <Check size={24} color={s.muted ? "rgba(255,255,255,0.35)" : "#4ADE80"} strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: 26, color: s.muted ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.92)", fontWeight: 500, lineHeight: 1.3 }}>{b}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
