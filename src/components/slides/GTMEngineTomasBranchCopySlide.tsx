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
      "30+ yrs scaling SMB engines — IPOWER, Endurance (#2 globally), SiteLock (15M customers, ~80% share)",
      "Nextiva: materially lower CAC vs. peers with consistent organic growth",
    ],
  },
  {
    icon: Users,
    number: "02",
    title: "Operator-Led Team",
    lines: [
      "Stable leadership: Gorny, Conrad, Masjedi, Haber — long tenure, complementary skills",
      "~30-person team, avg age 33 — high-output, low-overhead execution",
    ],
  },
  {
    icon: Network,
    number: "03",
    title: "Diversified Distribution",
    lines: [
      "Digital, affiliate, partner, alliance channels — all actively producing",
      "No single channel >40% of pipeline — resilient by design",
    ],
  },
  {
    icon: Brain,
    number: "04",
    title: "AI-Native GTM",
    lines: [
      "AI embedded across marketing workflows — not bolted on",
      "Leading position in AI-driven search and demand capture",
    ],
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Capital Efficient",
    lines: [
      "Organic-first model — reduces paid acquisition dependency",
      "Proven ability to grow revenue at lower cost vs. category peers",
    ],
  },
];

export default function GTMEngineTomasBranchCopySlide({ slideNumber = 47 }: { slideNumber?: number }) {
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
          gap: 64,
        }}
      >
        {/* Left thesis panel */}
        <div
          style={{
            flex: "0 0 36%",
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
              margin: "36px 0",
              borderRadius: 2,
              transformOrigin: "left",
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.45)",
              margin: 0,
              lineHeight: 1.55,
            }}
          >
            The same operators who scaled customer acquisition across four companies now run
            Nextiva&rsquo;s growth engine &mdash; efficient, diversified, and AI&#8209;native.
          </motion.p>
        </div>

        {/* Right proof stack */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 14,
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
                  gap: 20,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: `4px solid ${ACCENT}`,
                  borderRadius: "0 14px 14px 0",
                  padding: "18px 24px",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
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
                  <Icon size={22} color={ACCENT} strokeWidth={1.75} />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    className="font-heading"
                    style={{
                      fontSize: 22,
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
                        fontSize: 15,
                        color: "rgba(255,255,255,0.6)",
                        margin: j === 0 ? "8px 0 0" : "4px 0 0",
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
