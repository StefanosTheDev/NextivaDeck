"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Compass,
  Handshake,
  Layers,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const elements: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
  highlight?: boolean;
}[] = [
  {
    icon: Target,
    eyebrow: "VERTICAL STRATEGY",
    title: "Large TAM verticals prioritized",
    body: "Healthcare, Financial Services, and Legal Services are highlighted priorities — each a large, fragmented, regulated market where unified UC + CCaaS + AI wins.",
  },
  {
    icon: Building2,
    eyebrow: "THE SECRET WEAPON",
    title: "Distributed Organizations our competitors ignore",
    body: "They look like SMBs initially, but act like enterprises soon after. We have optimized for this across all verticals.",
    highlight: true,
  },
  {
    icon: Layers,
    eyebrow: "PRODUCT STRATEGY",
    title: "Unified CX platform · six-pillar approach",
    body: "CX First · Human + AI in Tandem · Conversational Commerce · Bespoke-at-Scale · Trustworthy · Reasoning over Data.",
  },
  {
    icon: Handshake,
    eyebrow: "GO TO MARKET",
    title: "Direct sales combined with channel partner leverage",
    body: "Domain-embedded channel partners — aggregators, VARs, AI consultants — unlock accounts direct cannot reach. Win one vertical with a partner; expand across their entire book.",
  },
  {
    icon: Compass,
    eyebrow: "DOMAIN DEPTH",
    title: "Deep knowledge of customer use cases by vertical",
    body: "Repeatable, scalable, fast deployment playbook. We speak verticals' language — and ship them what they need.",
  },
];

export default function VerticalsStrategyOverviewSlide({
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
          padding: "36px 80px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          Vertical strategy
        </p>
        <div
          style={{
            width: 48,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #2860B2, #0070F3)",
            margin: "0 auto 18px",
            opacity: 0.9,
          }}
        />
        <h1
          className="font-heading"
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
            maxWidth: 1080,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Nextiva&apos;s Agentic CX Strategy
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          style={{
            maxWidth: 1080,
            margin: "18px auto 0",
            padding: "16px 22px",
            textAlign: "left",
            borderRadius: 12,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderLeft: "4px solid #0070F3",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
          }}
        >
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.72)",
              margin: 0,
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            Five elements form the foundation of our verticals approach. Our{" "}
            <strong style={{ color: "#FFFFFF", fontWeight: 700 }}>
              93k+ customers
            </strong>{" "}
            trust Nextiva to be their first AI partner.
          </p>
        </motion.div>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "24px 80px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          minHeight: 0,
          maxWidth: 1640,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        {elements.map((el, i) => {
          const Icon = el.icon;
          return (
            <motion.div
              key={el.title}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              style={{
                display: "flex",
                gap: 18,
                alignItems: "flex-start",
                padding: "16px 22px",
                borderRadius: 14,
                background: el.highlight
                  ? "linear-gradient(135deg, rgba(245,158,11,0.16) 0%, rgba(245,158,11,0.06) 100%)"
                  : "linear-gradient(165deg, rgba(40, 96, 178, 0.06) 0%, rgba(255,255,255,0.025) 100%)",
                border: el.highlight
                  ? "1.5px solid rgba(245,158,11,0.5)"
                  : "1px solid rgba(255,255,255,0.09)",
                boxShadow: el.highlight
                  ? "0 14px 38px rgba(245,158,11,0.14), inset 0 1px 0 rgba(255,255,255,0.06)"
                  : "0 8px 24px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: el.highlight
                    ? "rgba(245,158,11,0.18)"
                    : "rgba(126,179,232,0.16)",
                  border: el.highlight
                    ? "1px solid rgba(245,158,11,0.45)"
                    : "1px solid rgba(126,179,232,0.38)",
                  color: el.highlight ? "#FBBF24" : "#7EB3E8",
                }}
              >
                <Icon size={22} strokeWidth={1.9} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: el.highlight
                      ? "#FBBF24"
                      : "rgba(255,255,255,0.5)",
                  }}
                >
                  {el.eyebrow}
                </p>
                <h2
                  className="font-heading"
                  style={{
                    fontSize: 21,
                    fontWeight: 600,
                    color: "#FFFFFF",
                    margin: "4px 0 6px",
                    lineHeight: 1.25,
                  }}
                >
                  {el.title}
                </h2>
                <p
                  style={{
                    fontSize: 15,
                    color: "rgba(255,255,255,0.78)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {el.body}
                </p>
              </div>
            </motion.div>
          );
        })}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
