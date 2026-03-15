import { Database, Users, Layers, Lock } from "lucide-react";
import { COLORS, FONTS } from "../brandConstants";
import SlideFooter from "./SlideFooter";
import { RETENTION, MILESTONES } from "./financialData";

const CORAL = "#F0A88C";

const moats = [
  {
    Icon: Database,
    title: "Conversation data moat",
    body: "Billions of real customer conversations power our AI. Competitors starting from scratch can't replicate years of proprietary interaction data.",
    metric: "10B+",
    metricLabel: "interactions processed",
  },
  {
    Icon: Users,
    title: "Embedded in daily operations",
    body: "Nextiva's Unified Customer Interaction Platform powers mission-critical operations for mainstream businesses, deeply integrated across their ecosystem.",
    metric: `${RETENTION.pctIn12moContracts}%`,
    metricLabel: "in annual contracts",
  },
  {
    Icon: Layers,
    title: "Unified platform economics",
    body: "Competitors offer point solutions. Nextiva brings communications + CX + AI on one data layer. It enables lasting expansion model.",
    metric: `~${RETENTION.mrrChurn.FY26}%`,
    metricLabel: "monthly MRR churn",
  },
  {
    Icon: Lock,
    title: "No concentration risk",
    body: "92K+ accounts, no customer above 0.6% of ARR, across every US industry. This isn't one big contract — it's a diversified annuity stream.",
    metric: MILESTONES.topCustomerPctARR,
    metricLabel: "max customer concentration",
  },
];

const SlideV2Moat = ({ slideNumber = "11" }: { slideNumber?: string }) => (
  <div
    style={{
      width: 1920, height: 1080,
      background: `linear-gradient(170deg, ${COLORS.midnightNavy} 0%, #0A1E3D 100%)`,
      display: "flex", flexDirection: "column", fontFamily: FONTS.body,
      position: "relative", overflow: "hidden",
    }}
    data-speaker-notes="Why can't competitors take this? Four interlocking moats: proprietary conversation data, operational embeddedness, unified platform economics, and zero concentration risk. Each alone is strong; together they make Nextiva irreplaceable."
  >
    {/* Subtle glow */}
    <div style={{
      position: "absolute", top: -200, left: "30%",
      width: 1000, height: 600, borderRadius: "50%",
      background: `radial-gradient(circle, rgba(240,168,140,0.08) 0%, transparent 70%)`,
    }} />

    <header style={{ padding: "72px 120px 0", flexShrink: 0, position: "relative", zIndex: 1 }}>
      <p style={{
        fontWeight: 700, fontSize: 18, letterSpacing: "0.2em",
        textTransform: "uppercase", color: CORAL, margin: 0,
      }}>
        COMPETITIVE MOAT
      </p>
      <h1 style={{
        fontFamily: FONTS.heading, fontSize: 68, fontWeight: 600,
        color: COLORS.pureWhite, margin: "16px 0 0", lineHeight: 1.15,
      }}>
        What makes Nextiva's<br />moat defensible.
      </h1>
      <p style={{
        fontSize: 26, color: "rgba(255,255,255,0.55)", margin: "16px 0 0",
        lineHeight: 1.5,
      }}>
        Four interlocking advantages that compound over time.
      </p>
    </header>

    <main style={{
      flex: 1, padding: "48px 120px 0", display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
      alignContent: "start", position: "relative", zIndex: 1,
    }}>
      {moats.map((m) => (
        <article key={m.title} style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderTop: `3px solid ${CORAL}`,
          borderRadius: 16, padding: "36px 32px",
          display: "flex", flexDirection: "column",
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12,
            background: "rgba(240,168,140,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 16,
          }}>
            <m.Icon size={24} color={CORAL} strokeWidth={1.75} />
          </div>

          <h2 style={{
            fontFamily: FONTS.heading, fontSize: 26, fontWeight: 600,
            color: COLORS.pureWhite, margin: 0, lineHeight: 1.25,
          }}>{m.title}</h2>

          <p style={{
            fontSize: 19, color: "rgba(255,255,255,0.6)",
            margin: "14px 0 0", lineHeight: 1.55, flex: 1,
          }}>{m.body}</p>

          {/* Metric callout */}
          <div style={{
            marginTop: 20, paddingTop: 16,
            borderTop: "1px solid rgba(240,168,140,0.15)",
          }}>
            <p style={{
              fontFamily: FONTS.heading, fontSize: 36, fontWeight: 700,
              color: CORAL, margin: 0, lineHeight: 1,
            }}>{m.metric}</p>
            <p style={{
              fontSize: 15, color: "rgba(255,255,255,0.45)", margin: "4px 0 0",
            }}>{m.metricLabel}</p>
          </div>
        </article>
      ))}
    </main>

    {/* Bottom insight bar */}
    <div style={{ padding: "0 120px", position: "relative", zIndex: 1 }}>
      <div style={{
        background: "rgba(240,168,140,0.1)", border: "1px solid rgba(240,168,140,0.2)",
        borderRadius: 14, padding: "20px 48px", textAlign: "center",
      }}>
        <p style={{ fontSize: 24, color: COLORS.pureWhite, margin: 0, lineHeight: 1.5 }}>
          <span style={{ fontWeight: 700, color: CORAL }}>Switching cost is high.</span> &nbsp;
          Every interaction enriches the data layer, strengthening the moat and expanding product adoption.
        </p>
      </div>
    </div>

    <SlideFooter slideNumber={slideNumber} variant="dark" />
  </div>
);

export default SlideV2Moat;
