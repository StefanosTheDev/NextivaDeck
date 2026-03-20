"use client";
import SlideFooter from "../SlideFooter";
import { Shield, Radio, Zap } from "lucide-react";

const CORAL = "#F0A88C";

const pillars = [
  {
    number: "01",
    icon: Shield,
    headline: "Infrastructure is the moat.",
    subheadline: "We are not a feature — we are the foundation.",
    title: "Deep Infrastructure",
    subtitle: "We own the layer AI runs on",
    points: [
      "Voice, messaging, video — unified in one network and CPaaS Platform",
      "Not an app on top of someone else's stack",
      "Regulated environment — hard to replicate",
      "Switching costs increase over time",
    ],
  },
  {
    number: "02",
    icon: Radio,
    headline: "AI without real-time data is guessing.",
    subheadline: "We give it ground truth.",
    title: "Proprietary Real-Time Data",
    subtitle: "We see it first, live, continuously",
    points: [
      "Live interaction signals — tone, intent, sentiment, context",
      "Customer context pulled in the moment",
      "Data collected continuously, not stored and retrieved",
      "Unique to each interaction — not replicable",
    ],
  },
  {
    number: "03",
    icon: Zap,
    headline: "We capture value as it happens.",
    subheadline: "Growth scales with interactions & outcomes.",
    title: "Monetization at the Point of Action",
    subtitle: "From subscriptions to outcomes",
    points: [
      "Every conversation is a revenue event",
      "Every resolution is measurable value",
      "Every outcome is monetizable",
      "AI increases throughput → directly increases revenue",
    ],
    callout: "Growth is no longer tied to seats — it scales with interactions and outcomes",
  },
];

export default function AIDefensibilityV2Copy2Slide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "linear-gradient(170deg, #061A37 0%, #0A1E3D 100%)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
      data-speaker-notes="Infrastructure is the moat. We are not a feature — we are the foundation. AI without real-time data is guessing. We give it ground truth. And we don't charge for access — we capture value as it happens. Every conversation, resolution, and outcome is monetizable. Growth is no longer tied to seats — it scales with interactions and outcomes."
    >
      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: "8%",
          width: 800,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,168,140,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <header style={{ padding: "44px 80px 0", flexShrink: 0, position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: CORAL,
            margin: 0,
          }}
        >
          AI DEFENSIBILITY
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 48,
            fontWeight: 600,
            color: "#FFFFFF",
            margin: "10px 0 0",
            lineHeight: 1.15,
          }}
        >
          Three Structural Advantages That Make Nextiva{" "}
          <span style={{ color: CORAL }}>AI-Proof</span>
        </h1>
      </header>

      {/* Three columns */}
      <main
        style={{
          flex: 1,
          padding: "28px 80px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20,
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        {pillars.map((col) => (
          <div
            key={col.number}
            style={{
              background: "rgba(240,168,140,0.04)",
              border: "1.5px solid rgba(240,168,140,0.12)",
              borderRadius: 16,
              padding: "24px 24px 20px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Number + Icon */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <span
                className="font-heading"
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: "rgba(240,168,140,0.22)",
                  lineHeight: 1,
                }}
              >
                {col.number}
              </span>
              <col.icon size={22} color={CORAL} style={{ opacity: 0.7 }} />
            </div>

            {/* Title + subtitle */}
            <h2
              className="font-heading"
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: CORAL,
                margin: "0 0 3px",
                lineHeight: 1.25,
              }}
            >
              {col.title}
            </h2>
            <p
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: "rgba(255,255,255,0.70)",
                margin: "0 0 14px",
                lineHeight: 1.35,
              }}
            >
              {col.subtitle}
            </p>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(240,168,140,0.12)", marginBottom: 14 }} />

            {/* Supporting claim box */}
            <div
              style={{
                padding: "14px 16px",
                background: "rgba(240,168,140,0.08)",
                borderRadius: 10,
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
              }}
            >
              <col.icon
                size={22}
                color={CORAL}
                style={{ flexShrink: 0, marginTop: 2 }}
              />
              <div>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: "0 0 2px",
                    lineHeight: 1.4,
                  }}
                >
                  {col.headline}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.55)",
                    margin: 0,
                    lineHeight: 1.35,
                    fontStyle: "italic",
                  }}
                >
                  {col.subheadline}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(240,168,140,0.12)", margin: "14px 0" }} />

            {/* Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
              {col.points.map((pt, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: CORAL,
                      flexShrink: 0,
                      marginTop: 8,
                      opacity: 0.7,
                    }}
                  />
                  <p
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.65)",
                      margin: 0,
                      lineHeight: 1.45,
                    }}
                  >
                    {pt}
                  </p>
                </div>
              ))}
            </div>

            {/* Callout for column 3 */}
            {"callout" in col && col.callout && (
              <div
                style={{
                  marginTop: 12,
                  padding: "10px 14px",
                  background: "rgba(240,168,140,0.12)",
                  border: "1px solid rgba(240,168,140,0.25)",
                  borderRadius: 10,
                }}
              >
                <p style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: CORAL,
                  margin: 0,
                  lineHeight: 1.45,
                }}>
                  {col.callout}
                </p>
              </div>
            )}
          </div>
        ))}
      </main>

      {/* Bottom bar */}
      <div style={{ padding: "12px 80px 0", position: "relative", zIndex: 1, flexShrink: 0 }}>
        <div
          style={{
            background: "rgba(240,168,140,0.10)",
            border: "1px solid rgba(240,168,140,0.20)",
            borderRadius: 14,
            padding: "14px 40px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 19, color: "#FFFFFF", margin: 0, lineHeight: 1.5 }}>
            <span style={{ fontWeight: 700, color: CORAL }}>Nextiva is not a tool.</span>{" "}
            It is the infrastructure layer where AI executes — a system of action, not a system of record.
          </p>
        </div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
