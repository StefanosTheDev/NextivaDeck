import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";
import { PaintBucket, Cog, ShieldCheck, Layers } from "lucide-react";
import foxyImg from "@/assets/customer-foxy.png";
import visionImg from "@/assets/customer-vision.png";
import renascentImg from "@/assets/customer-renascent.png";
import sageImg from "@/assets/customer-sage.png";

const ACCENT = "#4A9EF2";
const BG = COLORS.midnightNavy;
const CARD_BG = "rgba(255,255,255,0.05)";
const CARD_BORDER = "rgba(255,255,255,0.10)";

interface CustomerCard {
  name: string;
  industry: string;
  badgeColor: string;
  subtitle: string;
  icon: React.ElementType;
  image: string;
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
    image: foxyImg,
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
    image: visionImg,
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
    image: renascentImg,
    problems: [
      "Outdated Altigen — no AI or modern analytics",
      "No bilingual routing for US/Canada claims",
    ],
    solutions: [
      "Expand TAM to Spanish and French speakers, 100K+ minutes served.",
      "Scaled compliance: Automated QA replaces manual call reviews.",
      "Improved KPI visibility: Data-led decision making.",
      "Enhancing AI use cases: Predictive routing and sentiment-driven escalation.",
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
    image: sageImg,
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

const Card = ({ c }: { c: CustomerCard }) => {
  const Icon = c.icon;
  return (
    <div
      style={{
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderRadius: 16,
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

      {/* Top row: Badge+Name (left) | Problem (right) */}
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
            style={{
              fontFamily: FONTS.heading,
              fontSize: 26,
              fontWeight: 400,
              color: COLORS.pureWhite,
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

      {/* Bottom row: Image (left) | Outcomes-Driven Solution (right) */}
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
        >
          <img
            src={c.image}
            alt={c.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
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

      {/* Metrics row */}
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
                color: COLORS.pureWhite,
                fontFamily: FONTS.body,
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
    </div>
  );
};

const SlideCustomerUseCasesDark = ({ slideNumber = "80" }: { slideNumber?: string }) => (
  <div
    style={{
      width: 1920,
      height: 1080,
      background: BG,
      display: "flex",
      flexDirection: "column",
      fontFamily: FONTS.body,
      overflow: "hidden",
    }}
  >
    <header style={{ padding: "32px 100px 0", textAlign: "center", flexShrink: 0 }}>
      <p
        style={{
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: ACCENT,
          margin: 0,
        }}
      >
        Customer Use Cases
      </p>
      <h1
        style={{
          fontFamily: FONTS.heading,
          fontSize: 44,
          fontWeight: 400,
          color: COLORS.pureWhite,
          margin: "6px 0 0",
          lineHeight: 1.15,
        }}
      >
        Nextiva AI delivers measurable outcomes across industries
      </h1>
    </header>

    <div
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
        <Card key={i} c={c} />
      ))}
    </div>

    <SlideFooter slideNumber={slideNumber} variant="dark" />
  </div>
);

export default SlideCustomerUseCasesDark;
