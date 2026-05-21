"use client";

import type { ReactNode } from "react";
import SlideFooter from "../SlideFooter";

function StatusRibbon({
  children,
  bg,
  color,
  border,
}: {
  children: ReactNode;
  bg: string;
  color: string;
  border?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        marginLeft: 0,
        marginRight: 0,
        padding: "10px 16px",
        textAlign: "center",
        background: bg,
        border: border ?? "none",
        boxSizing: "border-box",
      }}
    >
      <span
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color,
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {children}
      </span>
    </div>
  );
}

const topMetrics = [
  {
    value: (
      <>
        <span style={{ color: "#7EB3E8" }}>$176B</span>
        <span style={{ color: "rgba(255,255,255,0.35)", margin: "0 10px", fontSize: 40 }}>→</span>
        <span style={{ color: "#FFFFFF" }}>$262B</span>
      </>
    ),
    label: "Total CX market",
    foot: "CY26 to CY29 · 14% CAGR",
    border: "rgba(126,179,232,0.45)",
  },
  {
    value: (
      <>
        <span style={{ color: "#5BA0E0" }}>45%</span>
        <span style={{ color: "#FFFFFF", fontSize: 36, marginLeft: 8 }}>CAGR</span>
      </>
    ),
    label: "AI agents market growth",
    foot: "Over the next five years",
    border: "rgba(91,160,224,0.55)",
  },
  {
    value: (
      <>
        <span style={{ color: "#34D399" }}>80%</span>
        <span style={{ color: "#FFFFFF", fontSize: 32, marginLeft: 10 }}>by 2029</span>
      </>
    ),
    label: "Customer issues resolved autonomously by AI",
    foot: "Industry consensus projection",
    border: "rgba(52,211,153,0.45)",
    footColor: "#34D399",
  },
];

const FOOTNOTE =
  "Note: CX Market data — Grand View Research, MarketsandMarkets, Statista, IBISWorld. AI Agent Market — BCG. AI issue resolution — Gartner. CC seats — Industry estimates.";

export default function NewTamSlide({
  slideNumber = 12,
  slideId,
}: {
  slideNumber?: number;
  slideId?: string;
}) {
  return (
    <div
      className="slide"
      data-slide-id={slideId}
      style={{
        background:
          "radial-gradient(ellipse 85% 75% at 50% 25%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.75) 50%, #000208 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header style={{ padding: "40px 72px 0", flexShrink: 0, textAlign: "center" }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#9BB5CC",
            margin: "0 0 10px",
          }}
        >
          MARKET OPPORTUNITY
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 48,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.18,
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          A massive market at the moment of its fastest acceleration.
        </h1>
        <p
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.5)",
            margin: "12px auto 0",
            lineHeight: 1.45,
            maxWidth: 1100,
          }}
        >
          The convergence of AI and CX is creating the largest platform consolidation opportunity in a
          decade — and the mid-market is where it plays out first.
        </p>
      </header>

      <main
        style={{
          flex: 1,
          padding: "24px 72px 8px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          minHeight: 0,
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          {topMetrics.map((m) => (
            <div
              key={m.label}
              style={{
                border: `1px solid ${m.border}`,
                borderRadius: 12,
                padding: "22px 24px",
                background: "rgba(255,255,255,0.03)",
                textAlign: "center",
              }}
            >
              <p className="font-heading" style={{ fontSize: 52, fontWeight: 700, margin: 0, lineHeight: 1.1 }}>
                {m.value}
              </p>
              <p style={{ fontSize: 17, fontWeight: 600, color: "#FFFFFF", margin: "12px 0 6px" }}>{m.label}</p>
              <p
                style={{
                  fontSize: 13,
                  color: m.footColor ?? "rgba(126,179,232,0.85)",
                  margin: 0,
                }}
              >
                {m.foot}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(280px, 0.85fr) 1.15fr",
            gap: 16,
            flex: 1,
            minHeight: 0,
          }}
        >
          {/* Crowded market */}
          <div
            style={{
              border: "1px solid rgba(160,55,55,0.55)",
              borderRadius: 12,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <StatusRibbon bg="rgba(120,35,35,0.92)" color="#FFFFFF">
              CROWDED MARKET
            </StatusRibbon>
            <div style={{ padding: "20px 22px 0", flex: 1, display: "flex", flexDirection: "column" }}>
              <p
                className="font-heading"
                style={{ fontSize: 56, fontWeight: 700, color: "rgba(255,255,255,0.38)", margin: 0 }}
              >
                6M
              </p>
              <p style={{ fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.55)", margin: "6px 0 2px" }}>
                Enterprise
              </p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.38)", margin: "0 0 16px" }}>250+ agents</p>
            </div>
            <StatusRibbon
              bg="rgba(52,58,38,0.95)"
              color="#D4A574"
              border="1px solid rgba(90,80,50,0.4)"
            >
              WHERE COMPETITORS FOCUS
            </StatusRibbon>
            <div style={{ padding: "14px 22px 18px" }}>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", margin: 0, lineHeight: 1.5 }}>
                Crowded. Field sales, six-figure deploys, 12–18 month cycles. Every major competitor is fighting
                here.
              </p>
            </div>
          </div>

          {/* Nextiva opportunity */}
          <div
            style={{
              border: "1px solid rgba(91,160,224,0.55)",
              borderRadius: 12,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              background: "rgba(40,96,178,0.05)",
            }}
          >
            <StatusRibbon bg="transparent" color="#7EB3E8">
              NEXTIVA&apos;S OPPORTUNITY
            </StatusRibbon>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 0,
                flex: 1,
                borderTop: "1px solid rgba(91,160,224,0.25)",
              }}
            >
              {/* The Massive Middle */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRight: "1px solid rgba(91,160,224,0.2)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div style={{ padding: "18px 20px 0", flex: 1 }}>
                  <p className="font-heading" style={{ fontSize: 56, fontWeight: 700, color: "#7EB3E8", margin: 0 }}>
                    12M
                  </p>
                  <p style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: "8px 0 2px" }}>
                    The Massive Middle
                  </p>
                  <p style={{ fontSize: 13, color: "rgba(126,179,232,0.75)", margin: "0 0 16px" }}>1–250 agents</p>
                </div>
                <StatusRibbon bg="#2860B2" color="#B8D4F0">
                  PRIMARY OPPORTUNITY
                </StatusRibbon>
                <div style={{ padding: "14px 20px 18px" }}>
                  <p style={{ fontSize: 13, color: "rgba(200,220,255,0.7)", margin: 0, lineHeight: 1.5 }}>
                    Enterprise-grade CX without enterprise complexity. Left behind by every competitor category.
                    The largest untapped surface in CX.
                  </p>
                </div>
              </div>

              {/* Beyond Contact Centers */}
              <div style={{ display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ padding: "18px 20px 0", flex: 1 }}>
                  <p className="font-heading" style={{ fontSize: 56, fontWeight: 700, color: "#34D399", margin: 0 }}>
                    7M
                  </p>
                  <p style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: "8px 0 2px" }}>
                    Beyond Contact Centers
                  </p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: "0 0 16px" }}>Main Street operators</p>
                </div>
                <StatusRibbon
                  bg="rgba(28,72,48,0.92)"
                  color="#5EEAD4"
                  border="1px solid rgba(52,211,153,0.35)"
                >
                  CORE &amp; FUTURE GROWTH
                </StatusRibbon>
                <div style={{ padding: "14px 20px 18px" }}>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.5 }}>
                    Front and back office CX outside the contact center model. Same operator buyer, same GTM
                    motion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", margin: 0, lineHeight: 1.4, textAlign: "center" }}>
          {FOOTNOTE}
        </p>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
