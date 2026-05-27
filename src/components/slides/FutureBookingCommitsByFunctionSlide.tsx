"use client";

import { motion } from "framer-motion";
import {
  Users,
  Building2,
  TrendingUp,
  ArrowUpRight,
  LifeBuoy,
  Wrench,
  Handshake,
  Target,
  Sparkles,
} from "lucide-react";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";

type Commit = {
  key: string;
  name: string;
  icon: typeof Users;
  owner: string;
  note?: string;
};

const COMMITS: Commit[] = [
  {
    key: "sb-new-sales",
    name: "SB New Sales Team",
    icon: Users,
    owner: "Josh",
    note: "Scaling plan by sales reps · supported by leads (Sales Rep / Booking Ratio).",
  },
  {
    key: "platform-new-sales",
    name: "Platform New Sales Team",
    icon: Building2,
    owner: "Chris",
    note: "Establishing a predictable and sustainable growth model.",
  },
  {
    key: "sb-expansion",
    name: "SB Expansion",
    icon: TrendingUp,
    owner: "Josh / Lukas",
    note: "Scaling plan by sales reps",
  },
  {
    key: "platform-expansion",
    name: "Platform Expansion",
    icon: ArrowUpRight,
    owner: "Chris / Mike",
    note: "Establishing a baseline and scaling (Sales Rep / Booking Ratio).",
  },
  {
    key: "sb-support-impl",
    name: "SB Support & Implementation",
    icon: LifeBuoy,
    owner: "Josh / Lukas",
    note: "Turning every conversation into a sales opportunity through AI and human.",
  },
  {
    key: "platform-support-impl",
    name: "Platform Support & Implementation",
    icon: Wrench,
    owner: "Ken",
    note: "Turning every interaction and project into value-added services.",
  },
  {
    key: "channel",
    name: "Channel",
    icon: Handshake,
    owner: "Tracy",
    note: "Booking growth as a percentage of overall booking revenue.",
  },
  {
    key: "strategic-growth",
    name: "Strategic Growth",
    icon: Target,
    owner: "Mitch",
    note: "Directly attributed booking growth from strategic relationships.",
  },
  {
    key: "ai-verticals",
    name: "AI Verticals",
    icon: Sparkles,
    owner: "Sasha",
    note: "Directly attributed booking growth from AI Verticals-driven initiatives.",
  },
];

function CommitCard({ commit, delay }: { commit: Commit; delay: number }) {
  const Icon = commit.icon;
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
        padding: "20px 22px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        minHeight: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={20} color={BLUE} strokeWidth={2} />
        </span>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 18,
            fontWeight: 700,
            color: NAVY_DARK,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          {commit.name}
        </h3>
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 36,
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
            fontSize: 11,
            fontWeight: 700,
            color: BODY,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Bookings commit
        </span>
      </div>

      <div
        style={{
          marginTop: "auto",
          paddingTop: 10,
          borderTop: `1px dashed ${CARD_BORDER}`,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              color: MUTED,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              flexShrink: 0,
            }}
          >
            Responsible
          </span>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              color: NAVY_DARK,
              lineHeight: 1.3,
            }}
          >
            {commit.owner}
          </span>
        </div>
        {commit.note && (
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 400,
              color: BODY,
              lineHeight: 1.4,
            }}
          >
            {commit.note}
          </span>
        )}
      </div>
    </motion.article>
  );
}

export default function FutureBookingCommitsByFunctionSlide({
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
        style={{ padding: "40px 100px 0", flexShrink: 0 }}
      >
        <p className="eyebrow" style={{ color: BLUE, margin: 0 }}>
          Acceleration of Growth · Commercial Plan
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: NAVY,
            lineHeight: 1.1,
            marginTop: 12,
          }}
        >
          Booking commits by function
        </h1>
        <p
          style={{
            marginTop: 10,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 20,
            fontWeight: 400,
            color: BODY,
            lineHeight: 1.4,
            maxWidth: 1280,
          }}
        >
          Distributed accountability across the commercial organization —{" "}
          <strong style={{ color: NAVY_DARK, fontWeight: 700 }}>
            every function owns a number
          </strong>
          .
        </p>
        <div
          style={{
            width: 88,
            height: 4,
            background: BLUE,
            marginTop: 18,
            borderRadius: 2,
          }}
        />
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "24px 100px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: 18,
          minHeight: 0,
        }}
      >
        {COMMITS.map((c, idx) => (
          <CommitCard key={c.key} commit={c} delay={0.15 + idx * 0.05} />
        ))}
      </main>

      <footer
        style={{
          padding: "10px 100px 22px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        Booking Commits · By Function
      </footer>
    </div>
  );
}
