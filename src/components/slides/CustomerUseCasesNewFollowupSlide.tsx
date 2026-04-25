"use client";

import SlideFooter from "../SlideFooter";

const stages = [
  {
    stage: "Stage 1",
    title: "Land",
    body: "Single high-friction use case. AI deployed on existing phone stack. Low integration risk, fast time-to-value.",
    example: "e.g. inbound call routing, after-hours lead capture",
    highlight: true,
  },
  {
    stage: "Stage 2",
    title: "Integrate",
    body: "Connect to customer's core system - CRM, EMR, or ERP. Unlocks data-driven automation and reduces manual steps.",
    example: "e.g. EMR-linked scheduling, CRM auto logging",
  },
  {
    stage: "Stage 3",
    title: "Expand",
    body: "Adjacent use cases activated. Each new workflow adds seats, channels, or interaction volume - all on the same contract vehicle.",
    example: "e.g. Rx refill, insurance eligibility, outbound campaigns",
  },
  {
    stage: "Stage 4",
    title: "Embed",
    body: "Platform becomes the operational backbone. Switching cost is high. Revenue is sticky and multi-year by design.",
    example: "e.g. compliance QA, sentiment-driven routing, KPI reporting",
  },
];

const summaryCards = [
  {
    label: "Revenue Per Customer",
    value: "6x",
    text: "Expansion potential from entry ACV to full use case deployment across existing accounts",
  },
  {
    label: "Expansion Trigger",
    value: "Pre-mapped",
    text: "Each deployment to include sequence expansion roadmap - ideally steps defined at signing over discovery later.",
  },
  {
    label: "Churn Dynamic",
    value: "Embeds deep",
    text: "By Stage 3, AI touches compliance (where relevant), scheduling, and routing - displacement requires rebuilding core operations",
  },
];

export default function CustomerUseCasesNewFollowupSlide({ slideNumber = 1 }: { slideNumber?: number }) {
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
          padding: "28px 44px 10px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
          }}
        >
          Customer Use Cases - Business Model
        </p>
        <h1
          className="font-heading"
          style={{
            margin: "8px 0 0",
            fontSize: 52,
            lineHeight: 1.12,
            fontWeight: 500,
            color: "#FFFFFF",
            maxWidth: 1180,
          }}
        >
          Every customer is a platform, not a point sale
        </h1>
        <p
          style={{
            margin: "6px 0 0",
            fontSize: 18,
            lineHeight: 1.25,
            color: "rgba(255,255,255,0.72)",
            maxWidth: 980,
          }}
        >
          A defined four-stage expansion sequence converts each entry deployment into growing recurring revenue
        </p>

        <div style={{ marginTop: 16, borderTop: "1px solid rgba(255,255,255,0.12)" }} />

        <div
          style={{
            marginTop: 18,
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 12,
          }}
        >
          {stages.map((item, idx) => (
            <article
              key={item.stage}
              style={{
                borderRadius: 12,
                border: item.highlight ? "2px solid #2DD4BF" : "1px solid rgba(255,255,255,0.14)",
                background: item.highlight ? "rgba(45,212,191,0.08)" : "rgba(255,255,255,0.04)",
                padding: "10px 12px 11px",
                minHeight: 286,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ marginBottom: 4 }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 9px",
                    borderRadius: 999,
                    background: item.highlight ? "#059669" : "transparent",
                    color: item.highlight ? "#FFFFFF" : "transparent",
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: 1,
                    visibility: item.highlight ? "visible" : "hidden",
                  }}
                >
                  Entry point today
                </span>
                <p style={{ margin: "6px 0 0", fontSize: 13, color: "rgba(255,255,255,0.68)" }}>{item.stage}</p>
              </div>
              <h3 className="font-heading" style={{ margin: "2px 0 0", fontSize: 37, color: "#FFFFFF", fontWeight: 600 }}>
                {item.title}
              </h3>
              <p style={{ margin: "8px 0 0", fontSize: 18, lineHeight: 1.3, color: "rgba(255,255,255,0.9)" }}>{item.body}</p>
              <p style={{ margin: "8px 0 0", fontSize: 15, fontStyle: "italic", lineHeight: 1.25, color: "#2DD4BF" }}>{item.example}</p>
              {idx < stages.length - 1 ? (
                <div style={{ position: "absolute" }} />
              ) : null}
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: 8,
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 14,
          }}
        >
          {summaryCards.map((card) => (
            <article
              key={card.label}
              style={{
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.06)",
                padding: "10px 14px 12px",
                minHeight: 136,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 700,
                }}
              >
                {card.label}
              </p>
              <p className="font-heading" style={{ margin: "4px 0 0", fontSize: 48, lineHeight: 1.02, fontWeight: 700, color: "#2DD4BF" }}>
                {card.value}
              </p>
              <p style={{ margin: "5px 0 0", fontSize: 16, lineHeight: 1.24, color: "rgba(255,255,255,0.86)" }}>{card.text}</p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 8, borderTop: "1px solid rgba(255,255,255,0.12)" }} />

        <p
          style={{
            margin: "8px 0 0",
            fontSize: 14,
            lineHeight: 1.24,
            color: "rgba(255,255,255,0.64)",
          }}
        >
          Expected stage progression for current customer base. 6x expansion estimate based on entry ACV vs. full deployment ACV across documented use case sequences.
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
