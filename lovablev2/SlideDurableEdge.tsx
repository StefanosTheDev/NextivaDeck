import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";
import { Phone, BarChart3, Brain, MessageCircle } from "lucide-react";

const pillars = [
  {
    icon: Phone,
    title: "Communications Foundation",
    body: "Every channel. Always on. We own customer conversations.",
    stat: "96%",
    statLabel: "UPTIME SLA",
    accent: COLORS.brandBlue,
    gradient: `linear-gradient(160deg, ${COLORS.brandBlue}, ${COLORS.steelBlue})`,
  },
  {
    icon: BarChart3,
    title: "Unified Data Platform",
    body: "One source of truth. Every interaction builds compounding intelligence.",
    stat: "B+",
    statLabel: "INTERACTIONS CAPTURED",
    accent: COLORS.duskBlue,
    gradient: `linear-gradient(160deg, ${COLORS.duskBlue}, ${COLORS.steelBlue})`,
  },
  {
    icon: Brain,
    title: "17 Years of Trust and Vertical Expertise",
    body: "On-prem to cloud. Voice to omni. Manual to AI. We led every shift. Our customers came with us.",
    stat: "3",
    statLabel: "MARKET SHIFTS SURVIVED",
    accent: COLORS.steelBlue,
    gradient: `linear-gradient(160deg, ${COLORS.steelBlue}, ${COLORS.duskBlue})`,
  },
  {
    icon: MessageCircle,
    title: "92,000+ Businesses. Millions of Relationships.",
    body: "Trusted. Embedded. In their workflow every day. They give us trust; we give them superpowers.",
    stat: "~1.6%",
    statLabel: "MONTHLY MRR CHURN",
    accent: COLORS.deepNavy,
    gradient: `linear-gradient(160deg, ${COLORS.deepNavy}, ${COLORS.duskBlue})`,
  },
];

const SlideDurableEdge = ({ slideNumber = "" }: { slideNumber?: string }) => (
  <div
    style={{
      width: 1920,
      height: 1080,
      background: COLORS.dawnCream,
      display: "flex",
      flexDirection: "column",
      fontFamily: FONTS.body,
      overflow: "hidden",
    }}
    data-speaker-notes="Our durable edge: four compounding moats — communications foundation, unified data, 17 years of trust, and 92K+ customer relationships. Each layer reinforces the others, making us hard to replace."
  >
    {/* Header */}
    <header style={{ padding: "60px 100px 0", textAlign: "center" }}>
      <p
        style={{
          fontWeight: 700,
          fontSize: 22,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: COLORS.brandBlue,
          margin: 0,
        }}
      >
        Our Durable Edge
      </p>
      <h1
        style={{
          fontFamily: FONTS.heading,
          fontSize: 68,
          fontWeight: 400,
          color: COLORS.navy,
          margin: "12px 0 0",
          lineHeight: 1.15,
        }}
      >
        Massive Moats. Trusted Position. Built to Thrive.
      </h1>
      <p
        style={{
          fontSize: 24,
          color: COLORS.midWarmGray,
          margin: "12px auto 0",
          maxWidth: 960,
          lineHeight: 1.5,
        }}
      >
        Proven ability to innovate ahead of tech change means our customers trust us to bring them along into the future.
      </p>
    </header>

    {/* Staggered cards */}
    <main
      style={{
        flex: 1,
        padding: "36px 100px 0",
        display: "flex",
        alignItems: "flex-end",
        gap: 28,
        overflow: "hidden",
      }}
    >
      {pillars.map((p, i) => {
        const Icon = p.icon;
        // Stagger heights: taller as you go right
        const heights = [380, 440, 500, 560];
        const h = heights[i];
        return (
          <div
            key={p.title}
            style={{
              flex: 1,
              height: h,
              borderRadius: "16px 16px 0 0",
              background: p.gradient,
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              color: COLORS.pureWhite,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              <Icon size={24} color="#fff" strokeWidth={1.8} />
            </div>

            {/* Title + body */}
            <div style={{ flex: 1 }}>
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {p.title}
              </h2>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.5,
                  margin: "12px 0 0",
                  opacity: 0.85,
                }}
              >
                {p.body}
              </p>
            </div>

            {/* Bottom stat */}
            <div style={{ marginTop: 20 }}>
              <p
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                {p.stat}
              </p>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  margin: "4px 0 0",
                  opacity: 0.6,
                }}
              >
                {p.statLabel}
              </p>
            </div>
          </div>
        );
      })}
    </main>

    {/* Bottom connector bar */}
    <div
      style={{
        padding: "20px 100px 0",
        display: "flex",
        alignItems: "center",
        gap: 0,
      }}
    >
      <span
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: COLORS.navy,
          whiteSpace: "nowrap",
        }}
      >
        Foundation
      </span>
      <div
        style={{
          flex: 1,
          height: 3,
          background: COLORS.brandBlue,
          margin: "0 20px",
          borderRadius: 2,
        }}
      />
      <span
        style={{
          fontSize: 20,
          fontWeight: 500,
          color: COLORS.midWarmGray,
          textAlign: "center",
          flex: 2,
        }}
      >
        Each layer makes the others stronger — together, they make us hard to replace.
      </span>
      <div
        style={{
          flex: 1,
          height: 3,
          background: COLORS.brandBlue,
          margin: "0 20px",
          borderRadius: 2,
        }}
      />
      <span
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: COLORS.navy,
          whiteSpace: "nowrap",
        }}
      >
        Durability
      </span>
    </div>

    <SlideFooter slideNumber={slideNumber} variant="light" />
  </div>
);

export default SlideDurableEdge;
