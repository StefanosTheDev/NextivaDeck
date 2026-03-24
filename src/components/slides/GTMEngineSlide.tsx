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
      "30+ years building SMB growth engines across multiple companies",
      "IPOWER & Endurance: scaled to #2 globally, acquiring 100K+ customers/month (99% digital)",
      "SiteLock: 15M paying customers, category creator, ~80% market share",
      "Nextiva: scaled efficiently at materially lower CAC vs. peers",
    ],
  },
  {
    icon: Users,
    number: "02",
    title: "Experienced Leadership",
    subtitle: "Modern Execution",
    points: [
      "Blend of proven operators and next-generation talent",
      "Leadership continuity: Tomas Gorny, Tracy Conrad, Yaniv Masjedi, Mitch Haber",
      "Long tenure of leaders that complement each other's skills",
      "Lean, high-output team attracting top talent",
      "Small team of ~30 street-smart marketers: average team age excluding leadership 33 years",
    ],
    badge: "Experience without stagnation — modern execution grounded in pattern recognition",
  },
  {
    icon: Network,
    number: "03",
    title: "Diversified Distribution",
    subtitle: "Durable Engine",
    points: [
      "Multi-channel GTM: digital, affiliates, partners, strategic alliances",
      "Long-standing affiliate & influencer relationships (hard to replicate)",
      "High-leverage strategic partnerships with minimal overhead",
      "No single channel dependency → risk-balanced demand generation",
    ],
    badge: "No single point of failure — diversified and resilient by design",
  },
  {
    icon: Brain,
    number: "04",
    title: "AI-Native",
    subtitle: "Always Current",
    points: [
      "Early adoption of AI across marketing workflows and growth channels",
      "Leader in AI-driven search and demand capture",
      "Test, learn, scale philosophy embedded in DNA",
    ],
    badge: "Stays ahead of market shifts — not reacting to them",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Capital-Efficient Growth",
    subtitle: "Sustainable Model",
    points: [
      "Scaled to millions of customers with lean teams",
      "Organic-first engine reduces reliance on paid acquisition",
      "Proven ability to drive growth at lower cost and higher ROI",
    ],
    badge: "Efficient, repeatable, and built for sustained performance",
  },
];

export default function GTMEngineSlide({ slideNumber = 47 }: { slideNumber?: number }) {
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
        <p
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          GTM ENGINE
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 48, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}
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
                      fontSize: 13,
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.5,
                      marginBottom: 9,
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
                    fontSize: 11,
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.45,
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
            fontSize: 20,
            color: "rgba(255,255,255,0.55)",
            margin: 0,
            fontWeight: 500,
            lineHeight: 1.5,
          }}
        >
          A proven, diversified GTM engine — combining decades of execution with modern, AI-driven
          growth — built to perform consistently across market cycles.
        </p>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
