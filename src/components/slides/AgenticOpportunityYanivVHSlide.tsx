"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

type MiddleTier = { agents: string; seats: string; pct: string };

type Segment = {
  value: string;
  flex: number;
  label: string;
  sublabel?: string;
  /** Second line under `sublabel` (e.g. employee scale). */
  sublabelExtra?: string;
  middleTiers?: MiddleTier[];
  tag?: string;
  bg: string;
  tagColor?: string;
  muted: boolean;
};

const MIDDLE_TIERS: MiddleTier[] = [
  { agents: "1–10 agents", seats: "~2.7M seats", pct: "~15%" },
  { agents: "11–50 agents", seats: "~3.6M seats", pct: "~20%" },
  { agents: "50–250 agents", seats: "~5.4M seats", pct: "~30%" },
];

function getSegments(slideId?: string): Segment[] {
  const showMiddleTiers = slideId === "agentic-opp-yaniv-vh-end";
  return [
    {
      value: "6M",
      flex: 6,
      label: "Enterprise",
      sublabel: ">250 agents",
      tag: "Where competitors focus",
      bg: "rgba(255,255,255,0.03)",
      tagColor: "#E07E7E",
      muted: true,
    },
    {
      value: "12M",
      flex: 12,
      label: "The Massive Middle",
      ...(showMiddleTiers
        ? { middleTiers: MIDDLE_TIERS }
        : { sublabel: "<250 agents" }),
      bg: "rgba(40,96,178,0.15)",
      muted: false,
    },
    {
      value: "7M",
      flex: 7,
      label: "Beyond Contact Centers",
      sublabel: "Businesses doing CX",
      sublabelExtra: "~30M Employees",
      bg: "rgba(40,96,178,0.10)",
      muted: false,
    },
  ];
}

export default function AgenticOpportunityYanivVHSlide({
  slideNumber = 12,
  slideId,
}: {
  slideNumber?: number;
  slideId?: string;
}) {
  const segments = getSegments(slideId);
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "64px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 14px",
          }}
        >
          THE AGENTIC AI OPPORTUNITY
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 72,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Built for the market others can&apos;t serve.
        </h1>
        <p
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.55)",
            margin: "18px 0 0",
            lineHeight: 1.5,
          }}
        >
          Most competitors chase 6M enterprise seats. We see 19M.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 100px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            alignItems: "stretch",
            width: "100%",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {segments.map((seg, i) => (
            <motion.div
              key={seg.value}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
              style={{
                flex: seg.flex,
                background: seg.bg,
                padding: "60px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                textAlign: "center",
                borderRight:
                  i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <p
                className="font-heading"
                style={{
                  fontSize: 104,
                  fontWeight: 700,
                  color: seg.muted ? "rgba(255,255,255,0.4)" : "#FFFFFF",
                  margin: 0,
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {seg.value}
              </p>
              <p
                style={{
                  fontSize: 26,
                  fontWeight: 600,
                  color: seg.muted
                    ? "rgba(255,255,255,0.28)"
                    : "rgba(255,255,255,0.78)",
                  margin: "20px 0 4px",
                  lineHeight: 1.3,
                }}
              >
                {seg.label}
              </p>
              {seg.middleTiers ? (
                <div
                  style={{
                    marginTop: 22,
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "stretch",
                    gap: 0,
                  }}
                >
                  {seg.middleTiers.map((tier, ti) => (
                    <div
                      key={tier.agents}
                      style={{
                        flex: 1,
                        minWidth: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        textAlign: "center",
                        padding: "12px 12px 6px",
                        borderLeft:
                          ti === 0 ? "none" : "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          color: "rgba(255,255,255,0.85)",
                          margin: 0,
                          lineHeight: 1.35,
                        }}
                      >
                        {tier.agents}
                      </p>
                      <p
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: "rgba(255,255,255,0.55)",
                          margin: "8px 0 0",
                          lineHeight: 1.35,
                        }}
                      >
                        {tier.seats}
                        <span style={{ opacity: 0.85 }}> · </span>
                        {tier.pct}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <p
                    style={{
                      fontSize: 20,
                      color: seg.muted
                        ? "rgba(255,255,255,0.22)"
                        : "rgba(255,255,255,0.5)",
                      margin: "14px 0 0",
                      lineHeight: 1.3,
                    }}
                  >
                    {seg.sublabel}
                  </p>
                  {seg.sublabelExtra ? (
                    <p
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        color: seg.muted
                          ? "rgba(255,255,255,0.18)"
                          : "rgba(255,255,255,0.5)",
                        margin: "8px 0 0",
                        lineHeight: 1.3,
                      }}
                    >
                      {seg.sublabelExtra}
                    </p>
                  ) : null}
                </>
              )}
              {seg.tag && (
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: seg.tagColor,
                    margin: "22px 0 0",
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                  }}
                >
                  {seg.tag}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "24%",
            width: "76%",
            marginTop: 28,
          }}
        >
          <div style={{ width: "80%", height: 3, background: "#7EB3E8", borderRadius: 1.5 }} />
          <div style={{ width: 3, height: 14, background: "#7EB3E8", borderRadius: 1.5 }} />
          <p className="font-heading" style={{ fontSize: 30, fontWeight: 600, color: "#7EB3E8", margin: "12px 0 0", letterSpacing: "0.02em" }}>
            Nextiva&apos;s opportunity
          </p>
        </motion.div>

      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
