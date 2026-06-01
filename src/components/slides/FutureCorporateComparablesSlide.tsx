"use client";

import { motion } from "framer-motion";
import { LineChart, AlertTriangle, TrendingUp } from "lucide-react";
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
const RISK = "#C84B3C";
const RISK_SOFT = "#FBEDEA";

type Comp = {
  group: string;
  name: string;
  sector: string;
  evRev: string;
  evEbitda: string;
  notes: string[];
  tag: string;
};

const RISK_COMPS: Comp[] = [
  {
    group: "Legacy comms",
    name: "RingCentral",
    sector: "UCaaS / cloud comms",
    evRev: "~1.4\u00D7",
    evEbitda: "~10\u00D7",
    notes: ["Rev growth ~5%", "Op margin ~23%"],
    tag: "Expansion-light \u00B7 AI add-on",
  },
];

const COMPOUNDER_COMPS: Comp[] = [
  {
    group: "SMB software",
    name: "HubSpot",
    sector: "SMB / mid-market CRM",
    evRev: "~3\u00D7",
    evEbitda: "~13\u00D7",
    notes: ["Rev growth ~20%", "Op margin ~18%"],
    tag: "NRR 103% \u00B7 agentic platform",
  },
  {
    group: "AI demand",
    name: "Twilio",
    sector: "Comms infrastructure",
    evRev: "~3\u00D7",
    evEbitda: "~13\u00D7",
    notes: ["Rev growth ~10% org.", "Op margin ~20%"],
    tag: "NRR 114% \u00B7 voice-AI demand",
  },
  {
    group: "Vertical SaaS",
    name: "ServiceTitan",
    sector: "Software for the trades",
    evRev: "~6\u00D7",
    evEbitda: "~34\u00D7",
    notes: ["Rev growth ~24%", "Op margin ~11%"],
    tag: "NDR >110% \u00B7 AI for the trades",
  },
];

function CompCard({
  comp,
  accent,
  accentSoft,
}: {
  comp: Comp;
  accent: string;
  accentSoft: string;
}) {
  return (
    <div
      style={{
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderTop: `4px solid ${accent}`,
        borderRadius: 12,
        padding: "14px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        boxShadow: "0 4px 14px rgba(6,26,55,0.05)",
        height: "100%",
      }}
    >
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 9.5,
          fontWeight: 800,
          color: accent,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
        }}
      >
        {comp.group}
      </span>
      <div>
        <div
          className="font-heading"
          style={{
            fontSize: 20,
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
            fontSize: 11,
            fontWeight: 500,
            color: BODY,
            marginTop: 2,
            fontStyle: "italic",
          }}
        >
          {comp.sector}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 6,
          marginTop: 2,
        }}
      >
        <div
          style={{
            background: accentSoft,
            border: `1px solid ${accent}33`,
            borderRadius: 8,
            padding: "6px 8px",
            textAlign: "center",
          }}
        >
          <div
            className="font-heading"
            style={{
              fontSize: 18,
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
        <div
          style={{
            background: accentSoft,
            border: `1px solid ${accent}33`,
            borderRadius: 8,
            padding: "6px 8px",
            textAlign: "center",
          }}
        >
          <div
            className="font-heading"
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: accent,
              lineHeight: 1,
              letterSpacing: "-0.01em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {comp.evEbitda}
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
            EV / EBITDA
          </div>
        </div>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "4px 0 0",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {comp.notes.map((n) => (
          <li
            key={n}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11.5,
              color: BODY,
              lineHeight: 1.35,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {n}
          </li>
        ))}
      </ul>

      <div
        style={{
          marginTop: "auto",
          paddingTop: 6,
          borderTop: `1px dashed ${CARD_BORDER}`,
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 11,
          fontWeight: 600,
          color: NAVY_DARK,
          lineHeight: 1.35,
        }}
      >
        {comp.tag}
      </div>
    </div>
  );
}

export default function FutureCorporateComparablesSlide({
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
          padding: "22px 60px 0",
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
            marginBottom: 10,
          }}
        >
          <LineChart size={12} color={BLUE} strokeWidth={2.4} />
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
            Public Comparables · Proof in the tape
          </span>
        </div>
        <h1
          className="font-heading"
          style={{
            fontSize: 40,
            fontWeight: 600,
            color: NAVY_DARK,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          The multiple is the whole game.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 15,
            color: BODY,
            margin: "6px auto 0",
            maxWidth: 1100,
            lineHeight: 1.45,
          }}
        >
          Nextiva is priced today like legacy communications. The objective is
          to earn the re-rating the market already gives expanding, profitable,
          genuinely AI-enabled software — and in our own category, it is
          happening now.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        style={{
          flex: 1,
          padding: "16px 60px 8px",
          display: "grid",
          gridTemplateColumns: "minmax(220px, 1fr) 8px minmax(0, 3fr)",
          gap: 16,
          alignItems: "stretch",
          minHeight: 0,
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            minHeight: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              borderRadius: 8,
              background: RISK_SOFT,
              border: `1px solid ${RISK}55`,
            }}
          >
            <AlertTriangle size={14} color={RISK} strokeWidth={2.4} />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: RISK,
                lineHeight: 1.15,
              }}
            >
              Priced as commoditized / at AI risk
            </span>
          </div>
          {RISK_COMPS.map((c) => (
            <div key={c.name} style={{ flex: 1, minHeight: 0 }}>
              <CompCard comp={c} accent={RISK} accentSoft={RISK_SOFT} />
            </div>
          ))}
        </section>

        <div
          aria-hidden
          style={{
            width: 2,
            background: `linear-gradient(to bottom, transparent, ${MUTED}55, transparent)`,
            borderRadius: 1,
          }}
        />

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            minHeight: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              borderRadius: 8,
              background: GROWTH_SOFT,
              border: `1px solid ${GROWTH}55`,
            }}
          >
            <TrendingUp size={14} color={GROWTH} strokeWidth={2.4} />
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
              Priced as durable AI compounders
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 12,
              flex: 1,
              minHeight: 0,
            }}
          >
            {COMPOUNDER_COMPS.map((c) => (
              <CompCard
                key={c.name}
                comp={c}
                accent={GROWTH}
                accentSoft={GROWTH_SOFT}
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
          margin: "0 60px 10px",
          padding: "10px 18px",
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
            fontSize: 12.5,
            color: NAVY_DARK,
            lineHeight: 1.45,
          }}
        >
          <strong style={{ color: BLUE, letterSpacing: "0.06em" }}>
            BOTTOM LINE.
          </strong>{" "}
          Comparable software trades from <strong>~1.4× revenue</strong> /{" "}
          <strong>~10× EBITDA</strong> (commoditized comms) to{" "}
          <strong>~6×</strong> and far higher for expanding, AI-enabled leaders.
          The gap is durable growth, net expansion and AI credibility — not the
          product. Nextiva sits at the bottom edge today; climbing it is the
          doubling.
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
        approximate, rounded, adjusted (non-GAAP) basis; ServiceTitan EV/EBITDA
        forward (trailing EBITDA negative). Illustrative comparables, not
        forecasts.
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
