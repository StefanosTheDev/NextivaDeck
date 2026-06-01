"use client";

import { motion } from "framer-motion";
import { Layers, Target, Cpu } from "lucide-react";
import SlideFooter from "../SlideFooter";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const GROWTH = "#1E7E5E";
const GROWTH_SOFT = "#E5F4EE";
const PURPLE = "#6849A8";
const PURPLE_SOFT = "#EFEAF7";

type RefComp = {
  name: string;
  sector: string;
  evRev: string;
  metrics: string[];
  status: string;
  statusTone: "good" | "warn";
};

const TARGET_PROFILE: RefComp[] = [
  {
    name: "Zoom",
    sector: "Video / comms \u00B7 CX AI",
    evRev: "~3\u00D7",
    metrics: ["Growth ~4%", "NRR 99%", "EV/EBITDA ~7\u00D7"],
    status: "Profitable",
    statusTone: "good",
  },
  {
    name: "Five9",
    sector: "AI contact center",
    evRev: "~2.3\u00D7",
    metrics: ["Growth ~10%", "NRR ~105%", "EV/EBITDA ~10\u00D7"],
    status: "Profitable",
    statusTone: "good",
  },
  {
    name: "DocuSign",
    sector: "Agreements \u00B7 IAM AI",
    evRev: "~2.7\u00D7",
    metrics: ["Growth ~8%", "NRR ~102%", "EV/EBITDA ~8\u00D7"],
    status: "Profitable",
    statusTone: "good",
  },
  {
    name: "Box",
    sector: "Content mgmt \u00B7 Box AI",
    evRev: "~3\u00D7",
    metrics: ["Growth ~10%", "NRR ~105%", "EV/EBITDA ~10\u00D7"],
    status: "Profitable",
    statusTone: "good",
  },
];

const AI_NAMES: RefComp[] = [
  {
    name: "SoundHound",
    sector: "Voice & agentic AI",
    evRev: "~18\u00D7",
    metrics: ["Growth ~50\u201390%"],
    status: "Loss-making",
    statusTone: "warn",
  },
  {
    name: "BigBear.ai",
    sector: "Defense / security AI",
    evRev: "~16\u00D7",
    metrics: ["Growth ~17%"],
    status: "Loss-making",
    statusTone: "warn",
  },
  {
    name: "Klaviyo",
    sector: "Autonomous B2C CRM \u00B7 SMB",
    evRev: "~2.6\u00D7",
    metrics: ["Growth ~28%", "NRR 110%"],
    status: "Profitable",
    statusTone: "good",
  },
  {
    name: "C3.ai",
    sector: "Enterprise AI apps",
    evRev: "~4\u00D7",
    metrics: ["Growth \u221226%"],
    status: "Shrinking",
    statusTone: "warn",
  },
];

function RefCard({
  comp,
  accent,
  accentSoft,
}: {
  comp: RefComp;
  accent: string;
  accentSoft: string;
}) {
  const statusColor = comp.statusTone === "good" ? GROWTH : MUTED;
  return (
    <div
      style={{
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderTop: `4px solid ${accent}`,
        borderRadius: 11,
        padding: "12px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        boxShadow: "0 4px 12px rgba(6,26,55,0.05)",
        height: "100%",
      }}
    >
      <div>
        <div
          className="font-heading"
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: NAVY_DARK,
            lineHeight: 1.1,
            letterSpacing: "-0.005em",
          }}
        >
          {comp.name}
        </div>
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 10.5,
            fontWeight: 500,
            color: BODY,
            marginTop: 2,
            fontStyle: "italic",
            lineHeight: 1.25,
          }}
        >
          {comp.sector}
        </div>
      </div>

      <div
        style={{
          background: accentSoft,
          border: `1px solid ${accent}33`,
          borderRadius: 7,
          padding: "5px 8px",
          textAlign: "center",
        }}
      >
        <div
          className="font-heading"
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: accent,
            lineHeight: 1,
            letterSpacing: "-0.01em",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {comp.evRev}
        </div>
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 8.5,
            fontWeight: 700,
            color: accent,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginTop: 2,
          }}
        >
          EV / Rev
        </div>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {comp.metrics.map((m) => (
          <li
            key={m}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              color: BODY,
              lineHeight: 1.35,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {m}
          </li>
        ))}
      </ul>

      <div
        style={{
          marginTop: "auto",
          paddingTop: 5,
          borderTop: `1px dashed ${CARD_BORDER}`,
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 10.5,
          fontWeight: 700,
          color: statusColor,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        {comp.status}
      </div>
    </div>
  );
}

export default function FutureCorporateReferenceSetsSlide({
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

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "20px 60px 0",
          textAlign: "center",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 14px",
            borderRadius: 999,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}55`,
            marginBottom: 8,
          }}
        >
          <Layers size={12} color={BLUE} strokeWidth={2.4} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
            }}
          >
            Reference Sets · 2026 Public Comparables
          </span>
        </div>
        <h1
          className="font-heading"
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: NAVY_DARK,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          The profile, and the premium.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 14,
            color: BODY,
            margin: "5px auto 0",
            maxWidth: 1140,
            lineHeight: 1.45,
          }}
        >
          Top row — companies already living Nextiva&apos;s target profile
          (≈100% NRR, ~10% growth, profitable). Bottom row — public AI names.
          What the market pays for each shows where the re-rating comes from.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        style={{
          flex: 1,
          padding: "14px 60px 8px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          minHeight: 0,
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            flex: 1,
            minHeight: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 12px",
              borderRadius: 8,
              background: GROWTH_SOFT,
              border: `1px solid ${GROWTH}55`,
            }}
          >
            <Target size={13} color={GROWTH} strokeWidth={2.4} />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: GROWTH,
                lineHeight: 1.15,
              }}
            >
              Living the target profile · ≈ 100% NRR, ~10% growth, profitable
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 10,
              flex: 1,
              minHeight: 0,
            }}
          >
            {TARGET_PROFILE.map((c) => (
              <RefCard
                key={c.name}
                comp={c}
                accent={GROWTH}
                accentSoft={GROWTH_SOFT}
              />
            ))}
          </div>
        </section>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            flex: 1,
            minHeight: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 12px",
              borderRadius: 8,
              background: PURPLE_SOFT,
              border: `1px solid ${PURPLE}55`,
            }}
          >
            <Cpu size={13} color={PURPLE} strokeWidth={2.4} />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: PURPLE,
                lineHeight: 1.15,
              }}
            >
              Public AI names · the market is highly selective
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 10,
              flex: 1,
              minHeight: 0,
            }}
          >
            {AI_NAMES.map((c) => (
              <RefCard
                key={c.name}
                comp={c}
                accent={PURPLE}
                accentSoft={PURPLE_SOFT}
              />
            ))}
          </div>
        </section>
      </motion.main>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.35 }}
        style={{
          margin: "0 60px 8px",
          padding: "9px 18px",
          borderRadius: 10,
          background: BLUE_SOFT,
          border: `1px solid ${BLUE}33`,
          flexShrink: 0,
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12,
            color: NAVY_DARK,
            lineHeight: 1.45,
          }}
        >
          <strong style={{ color: BLUE, letterSpacing: "0.06em" }}>
            BOTTOM LINE.
          </strong>{" "}
          Even fast-growing, profitable AI-enabled SaaS stays cheap — Klaviyo
          grows ~28% at 110% NRR yet trades ~2.6×. Big premiums flow to AI-native
          demand (SoundHound ~18×, BigBear ~16×); being seen as an AI{" "}
          <strong>disruptor</strong>, not disrupted, is the whole re-rating.
        </p>
      </motion.div>

      <footer
        style={{
          padding: "0 60px 12px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 10,
          fontWeight: 500,
          color: MUTED,
          letterSpacing: "0.02em",
          flexShrink: 0,
          textAlign: "center",
          fontStyle: "italic",
          lineHeight: 1.4,
        }}
      >
        Public data, latest reported / Q1 2026. EV/revenue & EV/EBITDA
        approximate, rounded, adjusted (non-GAAP) basis; AI-name EBITDA mostly
        n/m (pre-profit). Growth = latest YoY. Illustrative, not forecasts.
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
