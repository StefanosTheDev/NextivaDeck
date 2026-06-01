"use client";

import { motion } from "framer-motion";
import { Globe, Sparkles, Briefcase, Compass } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const motions: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  bullets: string[];
  tagline: string;
  highlight?: boolean;
}[] = [
  {
    icon: Globe,
    eyebrow: "SELF-SERVE",
    title: "eCommerce-led motion",
    bullets: [
      "Brand pulls demand",
      "Freemium → paid funnel",
      "Self-checkout, low ACV",
      "Fast deploy, out-of-the-box value",
    ],
    tagline: "Low-touch",
  },
  {
    icon: Sparkles,
    eyebrow: "HYBRID",
    title: "Nextiva's center of gravity",
    bullets: [
      "SMB simplicity, enterprise depth",
      "Website-led conversion",
      "Self-serve to assisted close",
      "Channel partners with vertical depth & customer trust",
    ],
    tagline: "Nextiva flexes across the spectrum",
    highlight: true,
  },
  {
    icon: Briefcase,
    eyebrow: "SALES-LED",
    title: "Enterprise-led motion",
    bullets: [
      "Named AEs, long cycles",
      "RFPs, POCs, custom builds",
      "High ACV, channel partners",
      "Compliance out-of-the-box",
    ],
    tagline: "High-touch",
  },
];

const winFactors: { eyebrow: string; body: string; icon: LucideIcon }[] = [
  {
    icon: Compass,
    eyebrow: "HIDDEN MARKET",
    body: "Distributed franchises look like SMBs and aggregate to mid-market. One deployment pattern serves them all — 204% MRR retention at 36 months is the financial proof.",
  },
  {
    icon: Sparkles,
    eyebrow: "VERTICAL-SPECIALIST SIGNAL",
    body: "Lead with vertical-specific credibility — thousands of accounts, compliance, proven use cases — to earn channel-partner trust. Partners won in a vertical want Nextiva across their full book.",
  },
  {
    icon: Globe,
    eyebrow: "PLATFORM SCALES ACROSS VERTICALS",
    body: "Same AI platform. Every vertical addressable with our domain knowledge and fast time-to-value approach. Lead with priority verticals; leverage the distributed-org secret sauce.",
  },
  {
    icon: Briefcase,
    eyebrow: "CHANNEL LEVERAGE",
    body: "Positioned to work closely with aggregators, VARs, and AI consultants into accounts direct cannot reach efficiently. Focus on trusted partners to vertical accounts.",
  },
];

export default function VerticalsGTMExcellenceSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{ background: BG, overflow: "hidden", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,112,243,0.08) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "40px 80px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 14px",
          }}
        >
          GTM motion — vertical excellence
        </p>
        <div
          style={{
            width: 64,
            height: 4,
            borderRadius: 2,
            background: "linear-gradient(90deg, #2860B2, #0070F3)",
            margin: "0 auto 18px",
            opacity: 0.9,
          }}
        />
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.14,
            maxWidth: 1400,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Vertical GTM excellence: where we play and how we win.
        </h1>
        <p
          style={{
            margin: "16px auto 0",
            fontSize: 22,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 1240,
            lineHeight: 1.45,
            fontWeight: 400,
          }}
        >
          From self-serve simplicity to vertical-specialist depth.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "30px 70px 26px",
          display: "flex",
          flexDirection: "column",
          gap: 22,
          minHeight: 0,
          maxWidth: 1820,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Three GTM motions */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.94fr 1.18fr 0.94fr",
            gap: 14,
            alignItems: "stretch",
          }}
        >
          {motions.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.article
                key={m.eyebrow}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.14 + i * 0.06 }}
                style={{
                  padding: m.highlight ? "22px 24px" : "20px 22px",
                  borderRadius: 16,
                  background: m.highlight
                    ? "linear-gradient(165deg, rgba(245,158,11,0.16) 0%, rgba(245,158,11,0.05) 100%)"
                    : "linear-gradient(165deg, rgba(40,96,178,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  border: m.highlight
                    ? "1.5px solid rgba(245,158,11,0.5)"
                    : "1px solid rgba(255,255,255,0.09)",
                  boxShadow: m.highlight
                    ? "0 18px 44px rgba(245,158,11,0.16), inset 0 1px 0 rgba(255,255,255,0.06)"
                    : "0 10px 28px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  transform: m.highlight ? "translateY(-6px)" : undefined,
                  opacity: m.highlight ? 1 : 0.92,
                  zIndex: m.highlight ? 2 : 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: m.highlight
                        ? "rgba(245,158,11,0.2)"
                        : "rgba(126,179,232,0.16)",
                      border: m.highlight
                        ? "1px solid rgba(245,158,11,0.45)"
                        : "1px solid rgba(126,179,232,0.4)",
                      color: m.highlight ? "#FBBF24" : "#7EB3E8",
                    }}
                  >
                    <Icon size={26} strokeWidth={2} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: m.highlight ? "#FBBF24" : "rgba(255,255,255,0.55)",
                      }}
                    >
                      {m.eyebrow}
                    </p>
                    <h2
                      className="font-heading"
                      style={{
                        margin: "4px 0 0",
                        fontSize: m.highlight ? 26 : 23,
                        fontWeight: 700,
                        color: "#FFFFFF",
                        lineHeight: 1.18,
                      }}
                    >
                      {m.title}
                    </h2>
                  </div>
                </div>

                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    flex: 1,
                  }}
                >
                  {m.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                        fontSize: 18,
                        lineHeight: 1.45,
                        color: "rgba(255,255,255,0.82)",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background: m.highlight ? "#FBBF24" : "#7EB3E8",
                          marginTop: 10,
                        }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    marginTop: 6,
                    padding: "12px 14px",
                    borderRadius: 10,
                    background: m.highlight
                      ? "rgba(245,158,11,0.15)"
                      : "rgba(0,0,0,0.22)",
                    border: m.highlight
                      ? "1px solid rgba(245,158,11,0.4)"
                      : "1px solid rgba(126,179,232,0.22)",
                    fontSize: 16,
                    fontWeight: 600,
                    color: m.highlight ? "#FBBF24" : "#7EB3E8",
                    textAlign: "center",
                  }}
                >
                  {m.tagline}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Four win-factors */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
          }}
        >
          {winFactors.map((w, i) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={w.eyebrow}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.04 }}
                style={{
                  padding: "18px 20px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Icon size={20} color="#7EB3E8" strokeWidth={2} />
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#7EB3E8",
                    }}
                  >
                    {w.eyebrow}
                  </p>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 16,
                    lineHeight: 1.45,
                    color: "rgba(255,255,255,0.82)",
                  }}
                >
                  {w.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
