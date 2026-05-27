"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Building2, Home, Compass } from "lucide-react";

const ACCENT = "#7EB3E8";

const segments = [
  {
    icon: Building2,
    stat: "6M",
    title: "Enterprise",
    desc: "250+ agents. Field sales, six-figure deploys, 12–18 month cycles. Where every competitor focuses.",
    badge: "Where competitors fight",
    badgeBg: "rgba(255,255,255,0.06)",
    badgeBorder: "rgba(255,255,255,0.14)",
    badgeColor: "rgba(255,255,255,0.55)",
    borderColor: "rgba(255,255,255,0.20)",
    highlight: false,
  },
  {
    icon: Home,
    stat: "12M",
    title: "The Massive Middle",
    desc: "1–250 agents. Mission-critical buyers. Enterprise-grade CX without enterprise complexity. Structurally underserved.",
    badge: "Our home",
    badgeBg: "rgba(126,179,232,0.18)",
    badgeBorder: "rgba(126,179,232,0.50)",
    badgeColor: "#7EB3E8",
    borderColor: ACCENT,
    highlight: true,
  },
  {
    icon: Compass,
    stat: "7M",
    title: "Beyond Contact Centers",
    desc: "Main Street operators outside the traditional CX model. Same buyer, same motion. Core growth, not adjacency.",
    badge: "Future growth",
    badgeBg: "rgba(251,191,36,0.12)",
    badgeBorder: "rgba(251,191,36,0.30)",
    badgeColor: "#FBBF24",
    borderColor: "rgba(251,191,36,0.45)",
    highlight: false,
  },
];

export default function VisionMassiveMiddleSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
          Who else can profitably serve these operators?
        </p>
        <h1 className="font-heading" style={{ fontSize: 54, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          12 million operators. No category can profitably serve them.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.55)", margin: "16px auto 0", lineHeight: 1.5, maxWidth: 1320 }}>
          Enterprise can&apos;t reach down. Self-serve can&apos;t reach up. The middle is structurally open — and it&apos;s our home.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "48px 100px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1.15fr 1fr",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        {segments.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              style={{
                background: s.highlight ? "rgba(40,96,178,0.10)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${s.highlight ? s.badgeBorder : "rgba(255,255,255,0.08)"}`,
                borderTop: `3px solid ${s.borderColor}`,
                borderRadius: 16,
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                transform: s.highlight ? "translateY(-8px)" : "none",
                boxShadow: s.highlight ? "0 16px 60px rgba(40,96,178,0.18)" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 13,
                    background: s.badgeBg,
                    border: `1px solid ${s.badgeBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={26} color={s.badgeColor} strokeWidth={1.75} />
                </div>
                <span className="font-heading" style={{ fontSize: 56, fontWeight: 700, color: s.highlight ? "#FFFFFF" : "rgba(255,255,255,0.85)", letterSpacing: "-0.02em", lineHeight: 1 }}>
                  {s.stat}
                </span>
              </div>

              <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF", margin: "0 0 14px", lineHeight: 1.2 }}>
                {s.title}
              </h2>

              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: 0, lineHeight: 1.5, flex: 1 }}>
                {s.desc}
              </p>

              <div
                style={{
                  marginTop: 24,
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: s.badgeBg,
                  border: `1px solid ${s.badgeBorder}`,
                  alignSelf: "flex-start",
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: s.badgeColor }}>
                  {s.badge}
                </span>
              </div>
            </motion.article>
          );
        })}
      </motion.main>

      <div style={{ padding: "32px 100px 16px" }}>
        <p style={{ fontSize: 19, color: "rgba(255,255,255,0.5)", textAlign: "center", margin: 0, fontStyle: "italic" }}>
          Enterprise can&apos;t reach down. Self-serve can&apos;t reach up. We sit exactly in the middle — profitably.
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
