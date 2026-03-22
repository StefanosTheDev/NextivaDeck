"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { PaintBucket, Cog, ShieldCheck, Layers } from "lucide-react";

const ACCENT = "#7EB3E8";

interface CustomerCard {
  name: string;
  industry: string;
  badgeColor: string;
  subtitle: string;
  icon: React.ElementType;
  problems: string[];
  solutions: string[];
  metrics: { value: string; label: string }[];
}

const CUSTOMERS: CustomerCard[] = [
  {
    name: "Foxy Coatings",
    industry: "Home Services",
    badgeColor: "#2DD4BF",
    subtitle: "Reading, PA · 38 Users · $116K TCV",
    icon: PaintBucket,
    problems: [
      "Static IVR dropping 10–20 sales calls/day",
      "Manual call logging consuming rep capacity",
    ],
    solutions: [
      "XBert AI IVA scrapes site + PDF knowledge base to route callers by intent — replacing static IVR entirely",
      "Predictive Dialer + OutboundANI achieves speed-to-lead under 5 min; booking rate lifted from 35% → 60%",
      "Auto transcription + Service Titan API integration eliminates manual call logging across 38 users",
      "Sticky agent routing auto-matches returning callers to previous rep — driving 40% same-day close rate",
    ],
    metrics: [
      { value: "35%→60%", label: "Booking Rate" },
      { value: "$3K", label: "MRR" },
      { value: "5 min", label: "Speed-to-Lead" },
    ],
  },
  {
    name: "Vision Wheel",
    industry: "Manufacturing",
    badgeColor: "#6B8FAD",
    subtitle: "Decatur, AL · 7 Locations · 73 Users",
    icon: Cog,
    problems: [
      "Fragmented comms across 10–13 locations",
      "No centralized analytics or reporting",
    ],
    solutions: [
      "Geo + time-of-day routing across 3 regions ensures every call reaches the correct office automatically",
      "XBert AI with 1K sessions/mo handles intelligent call routing and resolution without human intervention",
      "Unified platform replacing Momentum + WebEx — single pane of glass for analytics across all 7 locations",
      "Omnichannel expansion adds SMS, web chat, and callback request options they never had before",
    ],
    metrics: [
      { value: "7", label: "Locations" },
      { value: "73", label: "Users" },
      { value: "1K", label: "AI Sessions/Mo" },
    ],
  },
  {
    name: "Renascent Protection",
    industry: "Auto Warranties",
    badgeColor: "#D4A843",
    subtitle: "Dublin, OH · 60 CC Users · US & Canada",
    icon: ShieldCheck,
    problems: [
      "Outdated Altigen — no AI or modern analytics",
      "No bilingual routing for US/Canada claims",
    ],
    solutions: [
      "Skill-based bilingual routing (EN/ES/FR) handles 100K+ inbound minutes/mo across US and Canada warranty claims",
      "AI Scorecarding with 10 scorecards and 50 keywords automates QA and agent performance monitoring",
      "Power BI integration via BigQuery API bridges contact center analytics with enterprise BI dashboards",
      "Phase 2 AI expansion: sentiment analysis, predictive routing, and NextIQ for full autonomous claims handling",
    ],
    metrics: [
      { value: "100K+", label: "Min/Mo" },
      { value: "$5.4K", label: "MRR" },
      { value: "50", label: "AI Keywords" },
    ],
  },
  {
    name: "Sage Surfaces",
    industry: "B2B · Countertops",
    badgeColor: "#8FAD6B",
    subtitle: "Spring, TX · 115 Users · 42-Month Term",
    icon: Layers,
    problems: [
      "12+ years on 8×8 with no per-agent reporting",
      "Excel-based CRM tracking across teams",
    ],
    solutions: [
      "AI handles top 3 call reasons (install dates, availability, order status) — freeing staff from repetitive calls automatically",
      "AI script analysis detects conversation hotspots and flags underperformers for targeted training",
      "Tiered supervisor dashboards with per-agent stats give team leads and leadership differentiated visibility",
      "CRM integration via Dialogflow replaces Excel-based tracking — positioning for future D2C brand expansion",
    ],
    metrics: [
      { value: "$5.2K", label: "MRR" },
      { value: "$205K", label: "TCV" },
      { value: "12 yr", label: "Displacement" },
    ],
  },
];

const Bullet = ({ type, text }: { type: "problem" | "solution"; text: string }) => (
  <div style={{ display: "flex", gap: 7, alignItems: "flex-start", marginBottom: 3 }}>
    <span
      style={{
        fontSize: 16,
        fontWeight: 700,
        color: type === "problem" ? "#E05252" : ACCENT,
        flexShrink: 0,
        marginTop: 1,
      }}
    >
      {type === "problem" ? "✗" : "✓"}
    </span>
    <span style={{ fontSize: 16, lineHeight: 1.3, color: "rgba(255,255,255,0.85)" }}>{text}</span>
  </div>
);

const Card = ({ c, delay }: { c: CustomerCard; delay: number }) => {
  const Icon = c.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 14,
        padding: "18px 22px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Icon
        size={32}
        color={ACCENT}
        style={{ position: "absolute", top: 18, right: 20, opacity: 0.35 }}
      />

      <div style={{ display: "flex", gap: 14 }}>
        <div style={{ width: "30%", flexShrink: 0 }}>
          <span
            style={{
              display: "inline-block",
              background: c.badgeColor,
              color: "#000",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              padding: "2px 10px",
              borderRadius: 6,
              marginBottom: 4,
            }}
          >
            {c.industry}
          </span>
          <h3
            className="font-heading"
            style={{
              fontSize: 26,
              fontWeight: 500,
              color: "#FFFFFF",
              margin: "2px 0 0",
              lineHeight: 1.1,
            }}
          >
            {c.name}
          </h3>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", margin: "1px 0 0" }}>
            {c.subtitle}
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              color: "#E05252",
              margin: "0 0 4px",
            }}
          >
            Problem
          </p>
          {c.problems.map((p, i) => (
            <Bullet key={i} type="problem" text={p} />
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 14, flex: 1, minHeight: 0 }}>
        <div
          style={{
            width: "30%",
            flexShrink: 0,
            borderRadius: 10,
            background: "rgba(255,255,255,0.08)",
            overflow: "hidden",
            minHeight: 0,
          }}
        />
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              color: ACCENT,
              margin: "0 0 4px",
            }}
          >
            Outcomes-Driven Solution
          </p>
          {c.solutions.map((s, i) => (
            <Bullet key={i} type="solution" text={s} />
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 16,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 8,
          marginTop: "auto",
        }}
      >
        {c.metrics.map((m, i) => (
          <div key={i} style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              {m.value}
            </div>
            <div
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: 0.8,
                color: "rgba(255,255,255,0.45)",
                fontWeight: 500,
              }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function CustomerUseCasesDarkSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "32px 100px 0", textAlign: "center", flexShrink: 0 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          Customer Use Cases
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 44,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "6px 0 0",
            lineHeight: 1.15,
          }}
        >
          Nextiva AI delivers measurable outcomes across industries
        </h1>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 18,
          padding: "16px 80px 10px",
          minHeight: 0,
        }}
      >
        {CUSTOMERS.map((c, i) => (
          <Card key={i} c={c} delay={0.2 + i * 0.08} />
        ))}
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
