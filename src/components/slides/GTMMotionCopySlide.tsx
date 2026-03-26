"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Repeat, Users, Network, Brain, TrendingUp } from "lucide-react";

const ACCENT = "#7EB3E8";

const pillars = [
  {
    icon: Repeat,
    number: "01",
    title: "Proven at Scale",
    lines: [
      "IPOWER & Endurance: scaled to #2 globally, 100K+ customers/month",
      "SiteLock: 15M paying customers, category creator, ~80% market share",
      "Nextiva: materially lower CAC vs. peers with consistent organic growth",
    ],
  },
  {
    icon: Users,
    number: "02",
    title: "Operator-Led Team",
    lines: [
      "Stable leadership: Gorny, Conrad, Masjedi, Haber \u2014 long tenure, complementary skills",
      "~30-person team, avg age 33 \u2014 high-output, low-overhead execution",
    ],
  },
  {
    icon: Network,
    number: "03",
    title: "Diversified Distribution",
    lines: [
      "Digital, affiliate, partner, alliance channels \u2014 all actively producing",
      "Long-standing relationships difficult for competitors to replicate",
      "No single channel >40% of pipeline \u2014 resilient by design",
    ],
  },
  {
    icon: Brain,
    number: "04",
    title: "AI-Native GTM",
    lines: [
      "AI embedded across marketing workflows \u2014 not bolted on",
      "Leading position in AI-driven search and demand capture",
      "Test, learn, scale philosophy embedded in DNA",
    ],
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Capital Efficient",
    lines: [
      "Scaled to millions of customers without proportional headcount growth",
      "Organic-first model reduces paid acquisition dependency",
      "Proven ability to grow at lower cost vs. category peers",
    ],
  },
];

const heroStats = [
  { value: "30+", label: "years" },
  { value: "4", label: "companies" },
  { value: "15M+", label: "customers scaled" },
];

export default function GTMMotionCopySlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: "0 80px 0 100px",
          gap: 56,
        }}
      >
        {/* Left thesis panel */}
        <div
          style={{
            flex: "0 0 34%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#CCC7C3",
              margin: 0,
            }}
          >
            GTM ENGINE
          </motion.p>

          <motion.h1
            className="font-heading"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: 48,
              fontWeight: 500,
              color: "#FFFFFF",
              margin: "24px 0 0",
              lineHeight: 1.15,
            }}
          >
            Proven, modern,
            <br />
            and resilient.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              width: 48,
              height: 3,
              background: "#2860B2",
              margin: "32px 0",
              borderRadius: 2,
              transformOrigin: "left",
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontSize: 19,
              color: "rgba(255,255,255,0.45)",
              margin: 0,
              lineHeight: 1.55,
            }}
          >
            The same operators who scaled customer acquisition across four
            companies now run Nextiva&rsquo;s growth engine &mdash; efficient,
            diversified, and AI&#8209;native.
          </motion.p>

          {/* Hero stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            style={{
              display: "flex",
              gap: 28,
              marginTop: 36,
            }}
          >
            {heroStats.map((s, i) => (
              <div
                key={i}
                style={{
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  paddingLeft: i > 0 ? 28 : 0,
                }}
              >
                <p
                  className="font-heading"
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: ACCENT,
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.4)",
                    margin: "6px 0 0",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    fontWeight: 600,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right proof stack */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 18,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: `4px solid ${ACCENT}`,
                  borderRadius: "0 14px 14px 0",
                  padding: "16px 22px",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(40,96,178,0.15)",
                    border: "1px solid rgba(40,96,178,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <Icon size={20} color={ACCENT} strokeWidth={1.75} />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    className="font-heading"
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: ACCENT,
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </p>
                  {p.lines.map((line, j) => (
                    <p
                      key={j}
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.6)",
                        margin: j === 0 ? "6px 0 0" : "3px 0 0",
                        lineHeight: 1.45,
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
