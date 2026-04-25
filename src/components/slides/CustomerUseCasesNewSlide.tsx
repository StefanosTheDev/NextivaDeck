"use client";

import type { CSSProperties } from "react";
import SlideFooter from "../SlideFooter";

type ProofPointRow = {
  segment: string;
  customer: string;
  meta: string;
  metrics: [string, string];
  nextSteps: [string, string, string];
};

const rows: ProofPointRow[] = [
  {
    segment: "Healthcare",
    customer: "Shasta Community Health",
    meta: "7 locations · 100 providers",
    metrics: ["2 min avg wait time", "10+ workflows improved"],
    nextSteps: [
      "Rx refill automation via EMR",
      "Outbound appointment reminders",
      "Insurance eligibility at booking",
    ],
  },
  {
    segment: "Home services",
    customer: "Foxy Coatings",
    meta: "Reading, PA · $116K TCV",
    metrics: ["1.7x booking rate lift", "5 min speed-to-lead"],
    nextSteps: [
      "After-hours lead capture (24/7)",
      "Estimate confirmation workflow",
      "Post-install review and upsell",
    ],
  },
  {
    segment: "Manufacturing",
    customer: "Suzuki",
    meta: "72K employees · 192 countries",
    metrics: ["1M+ AI interactions/mo", "12% cost reduction"],
    nextSteps: [
      "Product spec and comparison layer",
      "Service appointment scheduling",
      "Safety recall response automation",
    ],
  },
  {
    segment: "Retail optometry",
    customer: "AEG Vision",
    meta: "500 locations · 5,000 employees",
    metrics: ["40K+ AI interactions/mo", "20% sales increase"],
    nextSteps: [
      "Appointment scheduling at 500 sites",
      "Insurance eligibility verification",
      "Vision care upsell post-visit",
    ],
  },
];

export default function CustomerUseCasesNewSlide({ slideNumber = 1 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        color: "#FFFFFF",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "32px 74px 16px",
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
          Customer Use Case Proof Points
        </p>
        <h1
          className="font-heading"
          style={{
            margin: "10px 0 0",
            fontSize: 46,
            lineHeight: 1.12,
            fontWeight: 500,
            maxWidth: 1380,
          }}
        >
          Land and Expand Model Approach for Early Customers
        </h1>
        <p
          style={{
            margin: "8px 0 0",
            maxWidth: 1360,
            fontSize: 24,
            lineHeight: 1.24,
            color: "rgba(255,255,255,0.78)",
          }}
        >
          Each deployment begins with a single AI use case - and maps to a defined expansion sequence
        </p>

        <div
          style={{
            marginTop: 18,
            borderTop: "1px solid rgba(255,255,255,0.14)",
            borderBottom: "1px solid rgba(255,255,255,0.14)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 0.8fr 1.45fr",
              columnGap: 24,
              padding: "12px 0",
              borderBottom: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <p style={headerStyle}>Customer</p>
            <p style={headerStyle}>Entry Metrics</p>
            <p style={headerStyle}>Next Expected Use Cases</p>
          </div>

          {rows.map((row, idx) => (
            <div
              key={row.customer}
              style={{
                display: "grid",
                gridTemplateColumns: "1.05fr 0.8fr 1.45fr",
                columnGap: 24,
                padding: "12px 0 11px",
                borderBottom: idx === rows.length - 1 ? "none" : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div>
                <span style={chipStyle}>{row.segment}</span>
                <p style={{ margin: "8px 0 0", fontSize: 34, lineHeight: 1.06, fontWeight: 500 }} className="font-heading">
                  {row.customer}
                </p>
                <p style={{ margin: "4px 0 0", fontSize: 20, color: "rgba(255,255,255,0.58)", lineHeight: 1.15 }}>{row.meta}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {row.metrics.map((metric) => {
                  const [value, ...labelParts] = metric.split(" ");
                  return (
                    <div key={metric}>
                      <p style={{ margin: 0, color: "#2DD4BF", fontSize: 34, lineHeight: 1, fontWeight: 700 }} className="font-heading">
                        {value}
                      </p>
                      <p style={{ margin: "2px 0 0", fontSize: 20, lineHeight: 1.12, color: "rgba(255,255,255,0.72)" }}>{labelParts.join(" ")}</p>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 2 }}>
                {row.nextSteps.map((step, stepIndex) => (
                  <div key={step} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span style={{ color: "#2DD4BF", fontWeight: 700, fontSize: 19, lineHeight: 1 }}>{stepIndex + 1}</span>
                    <span style={{ color: "#2DD4BF", fontWeight: 700, fontSize: 19, lineHeight: 1 }}>-&gt;</span>
                    <span style={{ fontSize: 21, lineHeight: 1.15, color: "rgba(255,255,255,0.9)" }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            margin: "12px 0 0",
            fontSize: 18,
            color: "rgba(255,255,255,0.62)",
            lineHeight: 1.18,
          }}
        >
          Entry use case deployed in each case. Account teams are expected to map expansion steps, not speculate - each will follow live system integrations already in place.
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}

const headerStyle: CSSProperties = {
  margin: 0,
  fontSize: 13,
  textTransform: "uppercase",
  letterSpacing: "0.09em",
  color: "rgba(255,255,255,0.52)",
  fontWeight: 700,
};

const chipStyle: CSSProperties = {
  display: "inline-block",
  padding: "4px 10px 3px",
  borderRadius: 999,
  background: "rgba(45,212,191,0.18)",
  color: "#99F6E4",
  fontSize: 13,
  fontWeight: 700,
  lineHeight: 1,
};
