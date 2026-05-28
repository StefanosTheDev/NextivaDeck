"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Building2,
  Brain,
  Target,
  Cpu,
  Package,
  Layers,
  Library,
  Swords,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

const DOCS = [
  {
    n: "01",
    icon: TrendingUp,
    name: "Investor's Deck",
    sub: "The investment narrative we tell the Street.",
  },
  {
    n: "02",
    icon: Building2,
    name: "Company Deck",
    sub: "The Nextiva story — who we are and what we do.",
  },
  {
    n: "03",
    icon: Brain,
    name: "Nextiva AI Thesis",
    sub: "Our point of view on AI and the disruption ahead.",
  },
  {
    n: "04",
    icon: Target,
    name: "ICP",
    sub: "Who we serve — and who we don't.",
  },
  {
    n: "05",
    icon: Cpu,
    name: "Tech Architecture",
    sub: "The platform foundation we've built.",
  },
  {
    n: "06",
    icon: Package,
    name: "Product Strategy",
    sub: "Where we're investing and what we're shipping.",
  },
  {
    n: "07",
    icon: Layers,
    name: "Vertical Strategy",
    sub: "Where we win — and how we go deeper by industry.",
  },
  {
    n: "08",
    icon: Swords,
    name: "Battlecart",
    sub: "Head-to-head positioning and talk tracks vs. key competitors.",
  },
];

export default function FutureAdditionalMaterialsTOCSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background: "#FFFFFF",
        color: NAVY_DARK,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1400,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(40,96,178,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "40px 72px 0",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 18px",
            borderRadius: 999,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}55`,
            marginBottom: 16,
          }}
        >
          <Library size={16} color={BLUE} strokeWidth={2.4} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
            }}
          >
            Appendix · Additional materials
          </span>
        </div>

        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 600,
            color: NAVY_DARK,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          Reading list.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 19,
            color: BODY,
            margin: "10px auto 0",
            maxWidth: 1100,
            lineHeight: 1.5,
          }}
        >
          The documents below complement this deck and provide deeper context
          for the strategic working session.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "26px 72px 14px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridAutoRows: "1fr",
          gap: 14,
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        {DOCS.map((d, i) => {
          const Icon = d.icon;
          return (
            <motion.div
              key={d.n}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                padding: "16px 22px",
                borderRadius: 14,
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderLeft: `4px solid ${BLUE}`,
                boxShadow: "0 4px 14px rgba(6,26,55,0.04)",
                minWidth: 0,
              }}
            >
              <span
                className="font-heading"
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: BLUE,
                  letterSpacing: "-0.02em",
                  fontVariantNumeric: "tabular-nums",
                  flexShrink: 0,
                  width: 44,
                  textAlign: "center",
                }}
              >
                {d.n}
              </span>

              <span
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: BLUE_SOFT,
                  border: `1px solid ${BLUE}33`,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={20} color={BLUE} strokeWidth={2.2} />
              </span>

              <div style={{ minWidth: 0, flex: 1 }}>
                <p
                  className="font-heading"
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: NAVY_DARK,
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {d.name}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: BODY,
                    margin: "3px 0 0",
                    lineHeight: 1.35,
                  }}
                >
                  {d.sub}
                </p>
              </div>
            </motion.div>
          );
        })}
      </main>

      <div
        style={{
          padding: "0 72px 12px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 13,
            color: MUTED,
            margin: 0,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Shared separately · please read ahead of session
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
