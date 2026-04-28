"use client";
import SlideFooter from "../SlideFooter";
import { ArrowRight } from "lucide-react";
import { MILESTONES } from "../financialData";

const chapters = [
  {
    number: "01",
    dates: "2008-2021",
    title: "Cloud communications",
    milestone: MILESTONES.ch1Revenue,
    bullets: [
      "Built cloud comms from zero — no outside capital.",
      "Won on simplicity, service, and reliability.",
      "Scaled without sacrificing customer-first culture.",
    ],
    badge: "Self-funded.",
  },
  {
    number: "02",
    dates: "2018–2023",
    title: "Unified customer experience",
    milestone: MILESTONES.ch2Revenue,
    bullets: [
      "One data layer across every conversation.",
      "From tools to platform — single system of record.",
      "Built the foundation AI now runs on.",
    ],
    badge: "Investment.",
  },
  {
    number: "03",
    dates: "2023–Future",
    title: "Agentic AI for CX",
    milestone: MILESTONES.ch3Revenue,
    bullets: [
      "XBert: purpose-built Agentic AI.",
      "Native to our infra and data — not bolted on.",
      "Assist → autopilot → full autonomy.",
    ],
    badge: "Balanced growth.",
  },
];

const ENHANCED_CONNECTOR_W = 108;

export type JourneyCopyConnectorStyle = "simple-bold" | "enhanced";

function ChapterConnector() {
  return (
    <div
      style={{
        flexShrink: 0,
        width: ENHANCED_CONNECTOR_W,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
      aria-hidden
    >
      <div
        style={{
          width: 34,
          height: 4,
          borderRadius: 2,
          background: "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(74,158,242,0.9))",
        }}
      />
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          margin: "0 -4px",
          zIndex: 1,
          background: "linear-gradient(160deg, rgba(126,179,232,0.45), rgba(40,96,178,0.2))",
          border: "2px solid rgba(126,179,232,0.9)",
          boxShadow:
            "0 0 22px rgba(40,96,178,0.55), 0 0 40px rgba(74,158,242,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowRight size={22} color="#F0F7FF" strokeWidth={2.75} />
      </div>
      <div
        style={{
          width: 34,
          height: 4,
          borderRadius: 2,
          background: "linear-gradient(90deg, rgba(74,158,242,0.9), rgba(255,255,255,0.06))",
        }}
      />
    </div>
  );
}

function JourneyCopySlideInner({
  slideNumber = 44,
  connectorStyle,
}: {
  slideNumber?: number;
  connectorStyle: JourneyCopyConnectorStyle;
}) {
  const mainGap = connectorStyle === "enhanced" ? 20 : 16;
  const colGap = connectorStyle === "enhanced" ? 8 : 12;

  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <header
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          OUR JOURNEY
        </p>
        <h1 className="font-heading" style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}>
          Cumulative innovation driving sustained advantage.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", margin: "10px 0 0", lineHeight: 1.5 }}>
          We lead through the technology inflection points that matter, while earning customer trust.
        </p>
      </header>

      <main style={{ padding: "88px 90px 0", display: "flex", gap: mainGap, alignItems: "stretch" }}>
        {chapters.map((ch, i) => (
          <div key={ch.number} style={{ display: "flex", alignItems: "stretch", flex: "1 1 0", minWidth: 0, gap: colGap }}>
            <article
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderTop: "3px solid #2860B2",
                borderRadius: 16,
                padding: "20px 20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3" }}>CHAPTER {ch.number}</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>{ch.dates}</span>
              </div>
              <h2 className="font-heading" style={{ fontSize: 30, fontWeight: 500, color: "#FFFFFF", margin: "0 0 14px", lineHeight: 1.2 }}>{ch.title}</h2>
              <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.15)", marginBottom: 14 }} />
              <p className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#CCC7C3", margin: "0 0 14px" }}>{ch.milestone}</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {ch.bullets.map((b) => (
                  <li key={b} style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginBottom: 6, paddingLeft: 14, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.3)" }}>&rsaquo;</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: 14,
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  padding: "7px 18px",
                  borderRadius: 8,
                  background: ch.number === "03" ? "#2860B2" : "rgba(255,255,255,0.08)",
                  border: ch.number === "03" ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF" }}>{ch.badge}</span>
              </div>
            </article>
            {i < chapters.length - 1 ? (
              connectorStyle === "enhanced" ? (
                <ChapterConnector />
              ) : (
                <ArrowRight
                  size={30}
                  color="rgba(255,255,255,0.82)"
                  strokeWidth={3.25}
                  style={{ flexShrink: 0, alignSelf: "center" }}
                  aria-hidden
                />
              )
            ) : (
              <div
                style={{ width: connectorStyle === "enhanced" ? ENHANCED_CONNECTOR_W : 30, flexShrink: 0 }}
                aria-hidden
              />
            )}
          </div>
        ))}
      </main>

      <div style={{ flex: 1 }} />
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}

export default function JourneyCopySlide(props: { slideNumber?: number }) {
  return <JourneyCopySlideInner {...props} connectorStyle="simple-bold" />;
}

export function JourneyCopySlideEnhanced(props: { slideNumber?: number }) {
  return <JourneyCopySlideInner {...props} connectorStyle="enhanced" />;
}
