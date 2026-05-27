"use client";

import { motion } from "framer-motion";
import { TrendingUp, Gauge, Rocket } from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

type Pillar = {
  number: string;
  icon: typeof TrendingUp;
  title: string;
  description: React.ReactNode;
  /** Bright accent (icons, eyebrow, top stripe glow). */
  accent: string;
  /** Deeper accent for the top border stripe. */
  accentDeep: string;
  /** Translucent fill for the card background. */
  soft: string;
  /** Translucent stroke for the card border. */
  border: string;
  /** Glow color behind the icon. */
  glow: string;
};

const pillars: Pillar[] = [
  {
    number: "1",
    icon: TrendingUp,
    title: "Grow the Base",
    description: (
      <>
        Shifting from{" "}
        <span style={{ color: "#FFFFFF", fontWeight: 600 }}>
          &ldquo;Protect the Base&rdquo;
        </span>{" "}
        to an expansion mindset.
      </>
    ),
    accent: "#34D399",
    accentDeep: "#059669",
    soft: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.32)",
    glow: "rgba(52,211,153,0.22)",
  },
  {
    number: "2",
    icon: Gauge,
    title: "More Productive Organization",
    description: (
      <>
        Focusing on efficiency and key metrics like{" "}
        <span style={{ color: "#FFFFFF", fontWeight: 600 }}>LTV:CAC</span> and{" "}
        <span style={{ color: "#FFFFFF", fontWeight: 600 }}>gross margin</span>.
      </>
    ),
    accent: "#7EB3E8",
    accentDeep: "#2860B2",
    soft: "rgba(40,96,178,0.14)",
    border: "rgba(40,96,178,0.34)",
    glow: "rgba(0,112,243,0.22)",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Acceleration of Growth",
    description: <>Driving new bookings through various initiatives.</>,
    accent: "#FFFFFF",
    accentDeep: "#CCC7C3",
    soft: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.22)",
    glow: "rgba(255,255,255,0.18)",
  },
];

export default function FutureReframingPillarsSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{ background: BG, position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 75%, rgba(52,211,153,0.10) 0%, transparent 38%), radial-gradient(circle at 50% 78%, rgba(0,112,243,0.12) 0%, transparent 42%), radial-gradient(circle at 82% 75%, rgba(255,255,255,0.08) 0%, transparent 40%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        style={{
          padding: "64px 100px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            background:
              "linear-gradient(90deg, #34D399 0%, #7EB3E8 50%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            margin: "0 0 14px",
          }}
        >
          Strategic Reframe
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 64,
            fontWeight: 600,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            background:
              "linear-gradient(90deg, #34D399 0%, #7EB3E8 50%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Reframing Strategic Pillars
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 32,
          alignItems: "stretch",
          padding: "56px 100px 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              style={{
                position: "relative",
                background: p.soft,
                border: `1px solid ${p.border}`,
                borderTop: `3px solid ${p.accentDeep}`,
                borderRadius: 16,
                padding: "36px 36px 40px",
                display: "flex",
                flexDirection: "column",
                gap: 22,
                boxShadow: `0 18px 50px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)`,
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: -80,
                  right: -60,
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${p.glow} 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: p.soft,
                    border: `1px solid ${p.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 24px ${p.glow}`,
                  }}
                >
                  <Icon size={28} color={p.accent} strokeWidth={1.75} />
                </div>
                <span
                  className="font-heading"
                  style={{
                    fontSize: 64,
                    fontWeight: 700,
                    background: `linear-gradient(180deg, ${p.accent} 0%, ${p.accentDeep} 100%)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                    opacity: 0.9,
                  }}
                >
                  {p.number}
                </span>
              </div>

              <h2
                className="font-heading"
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {p.title}
              </h2>

              <p
                style={{
                  fontSize: 18,
                  color: "rgba(255,255,255,0.78)",
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                {p.description}
              </p>
            </motion.article>
          );
        })}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
