"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Repeat, Users, Network, Brain, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Repeat,
    number: "01",
    title: "Proven at Scale",
    subtitle: "Repeated Execution",
    points: [
      "30+ yrs scaling SMB growth engines — IPOWER, Endurance (#2 globally), SiteLock (15M customers, ~80% share)",
      "Nextiva: materially lower CAC vs. peers with consistent organic growth",
      "Playbook refined across four companies — pattern recognition, not guesswork",
    ],
  },
  {
    icon: Users,
    number: "02",
    title: "Operator-Led Team",
    subtitle: "Continuity + Fresh Talent",
    points: [
      "Stable leadership: Gorny, Conrad, Masjedi, Haber — long tenure, complementary skills",
      "~30-person team, avg age 33 — high-output, low-overhead execution",
      "Attracting top-tier talent while retaining institutional knowledge",
    ],
    badge: "Pattern recognition without stagnation",
  },
  {
    icon: Network,
    number: "03",
    title: "Diversified Distribution",
    subtitle: "No Single Point of Failure",
    points: [
      "Digital, affiliate, partner, and alliance channels — all actively producing",
      "Long-standing relationships that are difficult for competitors to replicate",
      "No single channel >40% of pipeline — resilient by design",
    ],
    badge: "Risk-balanced demand generation",
  },
  {
    icon: Brain,
    number: "04",
    title: "AI-Native GTM",
    subtitle: "First Mover in AI-Driven Demand",
    points: [
      "AI embedded across marketing workflows — not bolted on",
      "Leading position in AI-driven search and demand capture",
      "Continuous experimentation culture — test, learn, scale",
    ],
    badge: "Ahead of market shifts, not reacting to them",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Capital Efficient",
    subtitle: "High ROI, Low Dependency",
    points: [
      "Scaled to millions of customers without proportional headcount growth",
      "Organic-first model — reduces paid acquisition dependency",
      "Proven ability to grow revenue at lower cost vs. category peers",
    ],
    badge: "Repeatable, efficient, built for sustained performance",
  },
];

export default function GTMEngineCopySlide({ slideNumber = 48 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "40px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          GTM ENGINE
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}
        >
          Proven, modern, and resilient.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "24px 60px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gap: 14,
          alignItems: "stretch",
        }}
      >
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.article
              key={p.number}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: "22px 18px 18px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Icon + number */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(40,96,178,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color="#5B9CF5" strokeWidth={1.75} />
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  {p.number}
                </span>
              </div>

              {/* Title */}
              <h2
                className="font-heading"
                style={{ fontSize: 20, fontWeight: 700, color: "#FFFFFF", margin: "0 0 2px", lineHeight: 1.2 }}
              >
                {p.title}
              </h2>
              <p style={{ fontSize: 14, color: "#5B9CF5", margin: "0 0 14px", fontWeight: 500 }}>
                {p.subtitle}
              </p>

              {/* Points */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }}>
                {p.points.map((pt, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.55,
                      marginBottom: 10,
                      paddingLeft: 14,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#2860B2",
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      &rsaquo;
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Badge */}
              {p.badge && (
                <div
                  style={{
                    marginTop: 12,
                    padding: "10px 12px",
                    background: "rgba(40,96,178,0.12)",
                    borderRadius: 8,
                    fontSize: 13,
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.5,
                    fontWeight: 500,
                    fontStyle: "italic",
                  }}
                >
                  {p.badge}
                </div>
              )}
            </motion.article>
          );
        })}
      </motion.main>

      {/* Bottom tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          padding: "18px 100px",
          textAlign: "center",
          flexShrink: 0,
        }}
      >
        <p
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.6)",
            margin: 0,
            fontWeight: 500,
            lineHeight: 1.5,
          }}
        >
          Decades of execution. Modern, AI-native distribution. Capital-efficient growth built to compound across market cycles.
        </p>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
