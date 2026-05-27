"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Map,
  Sparkles,
  Wrench,
  HeartHandshake,
  Megaphone,
} from "lucide-react";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";

type Lens = {
  key: string;
  title: string;
  icon: typeof Trophy;
  prompt: string;
  examples: string[];
};

const LENSES: Lens[] = [
  {
    key: "winning",
    title: "Where we're winning",
    icon: Trophy,
    prompt: "Which segments deserve more focus and investment?",
    examples: [
      "Main Street America — small and mid-market businesses",
      "Trust-driven industries — healthcare, finance, legal",
      "Multi-location, distributed organizations",
    ],
  },
  {
    key: "can-win",
    title: "Where we can win",
    icon: Map,
    prompt: "What unlocks the next wave of growth?",
    examples: [
      "Adjacent verticals — legal, hospitality, professional services",
      "Underserved use cases in the base — XBert, CX Contact Center, NEXT",
      "XBert as a front door to new acquisition — an agentic AI employee",
    ],
  },
  {
    key: "how-we-win",
    title: "How we win",
    icon: Sparkles,
    prompt: "Which moats deserve more investment?",
    examples: [
      "Trust at scale — incumbent for the long haul",
      "Bespoke at scale — platform power, partner agility",
      "Unified data + AI across UCaaS, CCaaS, and agents",
    ],
  },
];

const FACETS = [
  { icon: Wrench, label: "Build", note: "the products we make for them" },
  { icon: HeartHandshake, label: "Serve", note: "the way we deliver value" },
  { icon: Megaphone, label: "Acquire", note: "the way we go to market" },
];

export default function FutureICPCustomerFirstSlide({
  slideNumber: _sn,
}: {
  slideNumber?: number;
}) {
  return (
    <div className="slide" style={{ background: "#FFFFFF", color: NAVY_DARK }}>
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "48px 100px 0", flexShrink: 0 }}
      >
        <p className="eyebrow" style={{ color: BLUE, margin: 0 }}>
          Strategic Culture · Customer First
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: NAVY,
            lineHeight: 1.1,
            marginTop: 14,
          }}
        >
          Built around the customer
        </h1>
        <p
          style={{
            marginTop: 12,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 22,
            fontWeight: 400,
            color: BODY,
            lineHeight: 1.4,
            maxWidth: 1320,
          }}
        >
          A return to a culture that leads with the customer — in everything we{" "}
          <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>build</strong>,{" "}
          <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>serve</strong>,
          and{" "}
          <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>acquire</strong>.
        </p>
        <div
          style={{
            width: 88,
            height: 4,
            background: BLUE,
            marginTop: 22,
            borderRadius: 2,
          }}
        />
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "32px 100px 20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 24,
        }}
      >
        {LENSES.map((lens, idx) => {
          const Icon = lens.icon;
          return (
            <motion.article
              key={lens.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderTop: `4px solid ${BLUE}`,
                borderRadius: 8,
                padding: "30px 32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: BLUE_SOFT,
                    border: `1px solid ${BLUE}`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={26} color={BLUE} strokeWidth={2} />
                </span>
                <h2
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 26,
                    fontWeight: 700,
                    color: NAVY_DARK,
                    lineHeight: 1.2,
                    letterSpacing: "-0.005em",
                    margin: 0,
                  }}
                >
                  {lens.title}
                </h2>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {lens.examples.map((ex) => (
                  <li
                    key={ex}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 17,
                      color: BODY,
                      lineHeight: 1.45,
                      display: "flex",
                      gap: 12,
                    }}
                  >
                    <span
                      style={{
                        color: BLUE,
                        fontWeight: 700,
                        flexShrink: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      ·
                    </span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 14,
                  borderTop: `1px dashed ${CARD_BORDER}`,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  color: NAVY,
                  fontStyle: "italic",
                  lineHeight: 1.4,
                }}
              >
                {lens.prompt}
              </div>
            </motion.article>
          );
        })}
      </main>

      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          padding: "8px 100px 8px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr 1fr 1fr",
            alignItems: "center",
            gap: 22,
            padding: "18px 28px",
            background: BLUE_SOFT,
            borderRadius: 8,
            borderLeft: `4px solid ${BLUE}`,
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: BLUE,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Customer-first in:
          </span>
          {FACETS.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  minWidth: 0,
                }}
              >
                <Icon size={20} color={BLUE} strokeWidth={2} />
                <div style={{ minWidth: 0 }}>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 17,
                      fontWeight: 700,
                      color: NAVY_DARK,
                    }}
                  >
                    {f.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 13,
                      fontWeight: 400,
                      color: BODY,
                      marginLeft: 8,
                    }}
                  >
                    — {f.note}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      <footer
        style={{
          padding: "8px 100px 22px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        Strategic Culture · Customer First
      </footer>
    </div>
  );
}
