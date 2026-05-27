"use client";

import { motion } from "framer-motion";
import {
  Bot,
  FileText,
  BarChart3,
  PhoneForwarded,
  Send,
  ArrowRight,
} from "lucide-react";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";

type Opportunity = {
  key: string;
  name: string;
  icon: typeof Bot;
  motion: string;
  outcomeUpsell: string;
};

const HIGHLIGHTS: Opportunity[] = [
  {
    key: "xbert",
    name: "XBert",
    icon: Bot,
    motion: "Set up XBert for free to replace legacy IVR.",
    outcomeUpsell: "upsell",
  },
  {
    key: "summarization",
    name: "Summarization & Transcription",
    icon: FileText,
    motion: "Free summarization and transcription for a limited time.",
    outcomeUpsell: "upsell",
  },
  {
    key: "nextiq",
    name: "NextIQ & Insight",
    icon: BarChart3,
    motion:
      "Deliver templated experiences for a limited time directly to the customer.",
    outcomeUpsell: "upsell",
  },
];

const SUGGESTIONS: Opportunity[] = [
  {
    key: "ivr-to-xbert-conversion",
    name: "IVR to XBert conversion",
    icon: PhoneForwarded,
    motion:
      "White-glove migration from legacy IVR to XBert at no cost.",
    outcomeUpsell: "upsell to full XBert tier",
  },
  {
    key: "proactive-outreach",
    name: "Proactive Outreach",
    icon: Send,
    motion:
      "Free 60-day proactive-engagement campaign builder for service & retention.",
    outcomeUpsell: "upsell to full outbound suite",
  },
];

function OpportunityCard({
  opp,
  delay,
  gridColumn,
}: {
  opp: Opportunity;
  delay: number;
  gridColumn?: string;
}) {
  const Icon = opp.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      style={{
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderTop: `4px solid ${BLUE}`,
        borderRadius: 8,
        padding: "26px 28px 26px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        gridColumn,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span
          style={{
            width: 46,
            height: 46,
            borderRadius: 10,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={22} color={BLUE} strokeWidth={2} />
        </span>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 24,
            fontWeight: 700,
            color: NAVY_DARK,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          {opp.name}
        </h3>
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 44,
            fontWeight: 700,
            color: BLUE,
            lineHeight: 1,
            letterSpacing: "-0.025em",
          }}
        >
          XX
        </span>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            color: BODY,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          addressable accounts
        </span>
      </div>

      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 16,
          fontWeight: 400,
          color: BODY,
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>
          Disruptive motion:
        </strong>{" "}
        {opp.motion}
      </p>

      <div
        style={{
          marginTop: "auto",
          paddingTop: 12,
          borderTop: `1px dashed ${CARD_BORDER}`,
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 15,
          fontWeight: 600,
          color: NAVY_DARK,
          lineHeight: 1.4,
          flexWrap: "wrap",
        }}
      >
        <ArrowRight size={16} color={BLUE} strokeWidth={2.5} />
        <span>
          <strong style={{ color: BLUE }}>XX% penetration</strong>
        </span>
        <ArrowRight size={16} color={BLUE} strokeWidth={2.5} />
        <span>{opp.outcomeUpsell}</span>
      </div>
    </motion.article>
  );
}

export default function FutureGrowBaseProductBetsSlide({
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
          Strategic Pillar 01 · Grow the Base
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 62,
            fontWeight: 700,
            color: NAVY,
            lineHeight: 1.1,
            marginTop: 14,
          }}
        >
          Key product levers
        </h1>
        <p
          style={{
            marginTop: 12,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 22,
            fontWeight: 400,
            color: BODY,
            lineHeight: 1.4,
            maxWidth: 1280,
          }}
        >
          Free or low-friction entry across the portfolio →{" "}
          <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>
            broad penetration
          </strong>{" "}
          → upsell.
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
          padding: "32px 100px 28px",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "1fr 1fr",
          gap: 22,
        }}
      >
        {HIGHLIGHTS.map((opp, idx) => (
          <OpportunityCard
            key={opp.key}
            opp={opp}
            delay={0.15 + idx * 0.07}
            gridColumn="span 2"
          />
        ))}
        {SUGGESTIONS.map((opp, idx) => (
          <OpportunityCard
            key={opp.key}
            opp={opp}
            delay={0.4 + idx * 0.07}
            gridColumn={idx === 0 ? "1 / span 2" : "3 / span 2"}
          />
        ))}
      </main>

      <footer
        style={{
          padding: "10px 100px 24px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        Strategic Pillar 01 · Key product levers
      </footer>
    </div>
  );
}
