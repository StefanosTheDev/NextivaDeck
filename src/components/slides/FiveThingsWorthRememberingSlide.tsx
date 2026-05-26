"use client";

import type { CSSProperties } from "react";
import SlideFooter from "../SlideFooter";

const S = 1.12;
const s = (n: number) => Math.round(n * S);

const SIDE_PAD = 72;

const F = {
  heading: "Georgia, serif",
  body: "'Space Grotesk', 'Work Sans', Arial, sans-serif",
} as const;

type RememberItem = {
  num: string;
  color: string;
  title: string;
  body: string;
};

const ITEMS: RememberItem[] = [
  {
    num: "01",
    color: "#9BB5CC",
    title: "The foundation is real.",
    body: "$350M revenue, 73% gross margin, EBITDA doubling year-over-year. This is a profitable, scaled business — not a story.",
  },
  {
    num: "02",
    color: "#4A9EF2",
    title: "92,000 customers are an AI upsell surface just beginning to be monetized.",
    body: "XBert is early in its attach rate. Every existing customer is a growth opportunity that requires no new acquisition.",
  },
  {
    num: "03",
    color: "#34D399",
    title: "NEXT opens a market beyond the contact center.",
    body: "Front and back office operators — Main Street America — represent an incremental TAM on the same platform with the same motion.",
  },
  {
    num: "04",
    color: "#FBBF24",
    title: "No competitor can replicate this position.",
    body: "Infrastructure owned. Data unified in real time. Agentic AI embedded — not bolted on. The moat compounds with every interaction.",
  },
  {
    num: "05",
    color: "#4A9EF2",
    title: "The timing is now.",
    body: "45% CAGR in AI agents. The mid-market has no AI-native CX platform built for it. Nextiva is already there — with the only complete solution.",
  },
];

function RememberRow({ item, isLast }: { item: RememberItem; isLast: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        gap: s(24),
        alignItems: "center",
        padding: `0 ${s(4)}px`,
        borderBottom: isLast ? undefined : "1px solid rgba(255,255,255,0.1)",
        flex: 1,
        minHeight: 0,
      }}
    >
      <span
        style={{
          flexShrink: 0,
          width: s(48),
          fontSize: s(38),
          fontWeight: 700,
          color: item.color,
          lineHeight: 1,
          fontFamily: F.body,
        }}
      >
        {item.num}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            margin: 0,
            fontSize: s(21),
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.26,
            fontFamily: F.body,
          }}
        >
          {item.title}
        </p>
        <p
          style={{
            margin: `${s(5)}px 0 0`,
            fontSize: s(16),
            color: "rgba(126,179,232,0.75)",
            lineHeight: 1.36,
            fontFamily: F.body,
          }}
        >
          {item.body}
        </p>
      </div>
    </div>
  );
}

export default function FiveThingsWorthRememberingSlide({
  slideNumber = 1,
  slideId,
}: {
  slideNumber?: number;
  slideId?: string;
}) {
  const slideStyle: CSSProperties = {
    background:
      "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
    display: "flex",
    flexDirection: "column",
    fontFamily: F.body,
    overflow: "hidden",
  };

  return (
    <div className="slide" data-slide-id={slideId} style={slideStyle}>
      <header style={{ padding: `${s(26)}px ${SIDE_PAD}px 0`, flexShrink: 0, textAlign: "left" }}>
        <p
          style={{
            fontSize: s(14),
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#7EB3E8",
            margin: `0 0 ${s(8)}px`,
          }}
        >
          THE OPPORTUNITY AHEAD
        </p>
        <h1
          className="font-heading"
          style={{
            fontFamily: F.heading,
            fontSize: s(44),
            fontWeight: 400,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.12,
            whiteSpace: "nowrap",
          }}
        >
          Five things worth remembering.
        </h1>
      </header>

      <main
        style={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
          padding: `${s(12)}px ${SIDE_PAD}px ${s(8)}px`,
        }}
      >
        <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              height: "67%",
              maxHeight: "67%",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {ITEMS.map((item, i) => (
              <RememberRow key={item.num} item={item} isLast={i === ITEMS.length - 1} />
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexShrink: 0,
            paddingTop: s(12),
            gap: s(24),
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: F.heading,
              fontSize: s(18),
              fontStyle: "italic",
              color: "#7EB3E8",
              lineHeight: 1.35,
            }}
          >
            We&apos;d welcome the chance to go deeper.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: s(12),
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.04em",
              flexShrink: 0,
            }}
          >
            Confidential
          </p>
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
