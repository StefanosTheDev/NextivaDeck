"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { DollarSign, TrendingUp, Bot, Users } from "lucide-react";

const ACCENT = "#7EB3E8";
const ACCENT_STRONG = "#2860B2";

const stats = [
  {
    icon: DollarSign,
    stat: "$262B",
    label: "Total CX market by CY29",
    desc: "$176B → $262B · 14% CAGR",
  },
  {
    icon: TrendingUp,
    stat: "44.5%",
    label: "Agentic AI CAGR in contact centers",
    desc: "$4.8B today → $190B by 2034",
  },
  {
    icon: Bot,
    stat: "80%",
    label: "Issues resolved autonomously by 2029",
    desc: "Industry consensus, not forecast",
  },
  {
    icon: Users,
    stat: "12M",
    label: "Mid-market operators waiting",
    desc: "The largest underserved CX segment",
  },
];

export default function VisionClockStatsSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
          These aren&apos;t projections. They&apos;re a clock.
        </p>
        <h1 className="font-heading" style={{ fontSize: 54, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          The math is settled. The question is who shows up.
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
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 22,
          alignItems: "stretch",
        }}
      >
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.article
              key={s.stat}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: `3px solid ${ACCENT_STRONG}`,
                borderRadius: 16,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(40,96,178,0.15)",
                  border: "1px solid rgba(40,96,178,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <Icon size={22} color={ACCENT} strokeWidth={1.75} />
              </div>

              <h2 className="font-heading" style={{ fontSize: 64, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
                {s.stat}
              </h2>

              <p style={{ fontSize: 17, fontWeight: 700, color: ACCENT, margin: "16px 0 8px", lineHeight: 1.3 }}>
                {s.label}
              </p>

              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.5, flex: 1 }}>
                {s.desc}
              </p>
            </motion.article>
          );
        })}
      </motion.main>

      <div style={{ padding: "36px 100px 18px" }}>
        <p style={{ fontSize: 19, color: "rgba(255,255,255,0.5)", textAlign: "center", margin: 0, fontStyle: "italic" }}>
          Every day the gap widens. Every day we move, our moat deepens. The clock runs either way.
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
