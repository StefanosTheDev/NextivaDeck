"use client";

import SlideFooter from "../SlideFooter";

const accent = "#2DD4BF";
const muted = "rgba(255,255,255,0.68)";
const body = "rgba(255,255,255,0.88)";

const statCards = [
  { value: "14", text: "Verticals with mapped friction clusters and defined AI use cases" },
  { value: "3+", text: "High-impact anchor use cases identified per vertical — each a standalone entry point" },
  { value: "7", text: "AI-based expansion use cases sequenced per vertical — revenue roadmap for every account" },
];

type SectorStatus = "live" | "playbook";

type SectorCard = {
  name: string;
  useCases: string;
  status: SectorStatus;
  subtext: string;
};

const sectors: SectorCard[] = [
  {
    name: "Healthcare",
    useCases: "7 use cases",
    status: "live",
    subtext: "Patient triage, prior auth, Rx refill, billing disputes",
  },
  {
    name: "Home services",
    useCases: "6 use cases",
    status: "live",
    subtext: "Lead capture, booking automation, after-hours coverage",
  },
  {
    name: "Manufacturing",
    useCases: "7 use cases",
    status: "live",
    subtext: "Multi-location routing, inquiry deflection, dealer support",
  },
  {
    name: "Hospitality & lodging",
    useCases: "6 use cases",
    status: "live",
    subtext: "Guest routing, reservation management, multi-property ops",
  },
  {
    name: "Financial services",
    useCases: "7 use cases",
    status: "playbook",
    subtext: "Fraud detection, loan origination, dispute resolution",
  },
  {
    name: "Insurance",
    useCases: "7 use cases",
    status: "playbook",
    subtext: "FNOL intake, billing hardship, adverse action compliance",
  },
  {
    name: "Retail / e-commerce",
    useCases: "7 use cases",
    status: "playbook",
    subtext: "Order exceptions, returns, loyalty dispute resolution",
  },
  {
    name: "Telecom & utilities",
    useCases: "7 use cases",
    status: "playbook",
    subtext: "Billing disputes, outage response, fraud / SIM swap",
  },
];

function SectorCardView({ card }: { card: SectorCard }) {
  const isLive = card.status === "live";
  return (
    <article
      style={{
        position: "relative",
        borderRadius: 10,
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.05)",
        padding: "10px 12px 10px 14px",
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        borderLeft: `4px solid ${isLive ? "#059669" : "rgba(255,255,255,0.28)"}`,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
        <h3
          className="font-heading"
          style={{
            margin: 0,
            fontSize: 17,
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.2,
          }}
        >
          {card.name}
        </h3>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, flexShrink: 0 }}>
          <span style={{ fontSize: 11, color: muted, fontWeight: 600 }}>{card.useCases}</span>
          <span
            style={{
              display: "inline-block",
              padding: "2px 8px",
              borderRadius: 999,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              background: isLive ? "rgba(5,150,105,0.35)" : "rgba(255,255,255,0.1)",
              color: isLive ? "#A7F3D0" : "rgba(255,255,255,0.55)",
              border: `1px solid ${isLive ? "rgba(16,185,129,0.5)" : "rgba(255,255,255,0.18)"}`,
            }}
          >
            {isLive ? "Live" : "Playbook ready"}
          </span>
        </div>
      </div>
      <p style={{ margin: "6px 0 0", fontSize: 12, lineHeight: 1.35, color: body }}>{card.subtext}</p>
    </article>
  );
}

export default function CustomerUseCasesNextPlaceholderSlide({ slideNumber = 1 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "22px 40px 6px",
          overflow: "hidden",
          minHeight: 0,
        }}
      >
        <div style={{ flexShrink: 0 }}>
        <p
          style={{
            margin: 0,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
          }}
        >
          Customer Use Cases/Vertical Market Opportunities
        </p>
        <h1
          className="font-heading"
          style={{
            margin: "6px 0 0",
            fontSize: 40,
            lineHeight: 1.1,
            fontWeight: 500,
            color: "#FFFFFF",
            maxWidth: 1200,
          }}
        >
          A repeatable playbook across 14 verticals
        </h1>
        <p
          style={{
            margin: "6px 0 0",
            fontSize: 17,
            lineHeight: 1.3,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 1100,
          }}
        >
          Friction clusters and AI entry points are pre-mapped — enables a more systematic sales motion
        </p>
        </div>

        <div
          style={{
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
        <div
          style={{
            marginTop: 22,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 8,
            }}
          >
            {statCards.map((c) => (
              <div
                key={c.value}
                style={{
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.06)",
                  padding: "8px 10px",
                }}
              >
                <p className="font-heading" style={{ margin: 0, fontSize: 36, fontWeight: 700, color: accent, lineHeight: 1 }}>
                  {c.value}
                </p>
                <p style={{ margin: "6px 0 0", fontSize: 13, lineHeight: 1.3, color: body }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, minHeight: 8 }} aria-hidden />

        <div style={{ display: "flex", flexDirection: "column", flexShrink: 0, gap: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 2,
                  border: "2px solid #10B981",
                  background: "rgba(16,185,129,0.2)",
                }}
              />
              <span style={{ fontSize: 12, fontWeight: 600, color: muted }}>Live deployments</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 2,
                  border: "2px solid rgba(255,255,255,0.35)",
                  background: "transparent",
                }}
              />
              <span style={{ fontSize: 12, fontWeight: 600, color: muted }}>Playbook ready — pipeline target</span>
            </div>
          </div>

          <div
            style={{
              marginTop: 8,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 6,
              alignContent: "start",
            }}
          >
            {sectors.map((s) => (
              <SectorCardView key={s.name} card={s} />
            ))}
          </div>
        </div>

        <div style={{ flex: 1, minHeight: 8 }} aria-hidden />

        <div style={{ flexShrink: 0, marginTop: 6, borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 6 }}>
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.35, color: "rgba(255,255,255,0.62)" }}>
            Six additional sectors with high potential: Auto Retail, BPO/GigCX, Education, Government, Nonprofit,
            Transportation.
          </p>
        </div>
        </div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
