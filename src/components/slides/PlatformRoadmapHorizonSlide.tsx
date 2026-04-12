"use client";

import React from "react";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const COL_HEADERS = [
  {
    title: "Available & in use today",
    investorNote: "In production — revenue & adoption",
  },
  {
    title: "Coming soon",
    investorNote: "Near-term roadmap — visible pipeline",
  },
  {
    title: "Coming after",
    investorNote: "Strategic optionality — TAM & moat",
  },
] as const;

const INVESTOR_LENS: Record<string, string> = {
  "CX first, conversational commerce": "Deeper engagement → retention & ARPU",
  "Human + AI": "Software intensity & AI leverage on ops",
  "Bespoke, at scale": "Attach, marketplace & vertical TAM",
  Trustworthy: "Enterprise-grade trust & compliance depth",
  "Growth with PLG": "Efficient land, expand, and migration paths",
  "Customer segment": "Geography & segment expansion",
};

type RoadmapRow = {
  title: string;
  subtitle?: string;
  available: string[];
  soon: string[];
  after: string[];
};

const ALL_ROWS: RoadmapRow[] = [
  {
    title: "CX first, conversational commerce",
    available: [
      "Omnichannel platform with emphasis on voice",
      "NEXT v1 canvas with customer + ticket journals",
      "Inbound + limited outbound campaigns",
      "B2C video engagements",
      "Desktop + mobile + deskphone experiences",
    ],
    soon: [
      "Adding channels every month",
      "NEXAR v2 canvas",
    ],
    after: [
      "Expanded outbound campaigns for humans and AI employees — appointments, collections, status, reviews",
    ],
  },
  {
    title: "Human + AI",
    subtitle: "Customer + business insights",
    available: [
      "Customer + business insights live for AI and humans",
      "Rich data + insights from every interaction",
      "Autonomous AI agents across channels with supervisor oversight",
      "Workflow engine powering SB to BPOs",
      "Interleaved agentic with deterministic flows",
      "Rich handovers AI ↔ human and human ↔ human",
      "NextIQ — conversational and reactive assistance, agentic search",
    ],
    soon: [
      "NextIQ — proactive insights with learning from every interaction + outcome",
      "NextIQ-powered journey designer",
      "xBERT simulated mode for testing",
      "SB industry skills — hospitality, healthcare, home services",
    ],
    after: [
      "NextIQ — realtime adherence support",
      "Autopilot for every agent",
      "Choice of AI employee for autopilot",
      "AI agents for human-employee tasks",
      "Nudge and barge-in on live AI employee conversations",
    ],
  },
  {
    title: "Bespoke, at scale",
    available: [
      "Integrations — CRM (Salesforce, HubSpot, Zoho), M365/Google, ERP, payments, KB sources",
      "Marketplace for integrations",
      "Multi-location + franchise support",
      "NEXT Studio for CX design — workflows, AI employees",
      "BYO analytics tools",
    ],
    soon: [
      "eCommerce integrations — Shopify, ServiceTitan, QuickBooks",
      "Verticals — healthcare; EHRs — Epic, ModMed, eCW, Planet DDS, NextGen",
      "Financial services — Jack Henry",
    ],
    after: [
      "Multi-tenant management for partners",
      "Marketplace for AI employees",
      "Vertical enhancements — Oracle Health, Dentrix, DentiCon; FIS, Fiserv",
      "BYO data lake and AI models",
      "New verticals — public sector, education",
      "Fine-grained roles-based admin and governance",
    ],
  },
  {
    title: "Trustworthy",
    available: [
      "Mission-critical for BPOs",
      "Geo-redundant cloud architecture",
      "AI test mode, business-grade guardrails, 10DLC compliance",
      "Audited — HIPAA, HITRUST, GDPR, TCPA, DNC, PCI",
    ],
    soon: [
      "Healthcare-grade guardrails",
      "Canada CASL",
      "Canada region (NCC → NEXT)",
    ],
    after: [
      "SOC 2 Type II",
      "Other regional compliance",
      "Regional clouds (NCC → NEXT)",
    ],
  },
  {
    title: "Growth with PLG",
    available: [
      "xBERT AI overlay with existing UC/CC/CX platforms",
      "Self-serve onboarding — xBERT < 1 min, NEXT < 3 min",
    ],
    soon: ["xBERT → NEXT PLG", "eCommerce signup"],
    after: ["NextOS / N1 → NEXT upgrades", "Third-party UC/CC → NEXT migration"],
  },
  {
    title: "Customer segment",
    available: ["Small business", "US", "English, Spanish, French — AI and human"],
    soon: ["Lower mid-market, SB — US + Canada", "Self-serve eCommerce"],
    after: [
      "Mid-market to BPO — US/Canada, select Europe and APAC",
      "Additional languages",
    ],
  },
];

const COLUMN_ACCENT: [string, string, string] = [
  "rgba(126, 179, 232, 0.95)",
  "rgba(255, 255, 255, 0.55)",
  "rgba(110, 231, 183, 0.9)",
];

function BulletList({
  items,
  columnIndex,
  size = "default",
}: {
  items: string[];
  columnIndex: 0 | 1 | 2;
  size?: "default" | "large";
}) {
  const marker = COLUMN_ACCENT[columnIndex];
  const lg = size === "large";
  const fontSize = lg ? 14 : 12;
  const lineHeight = lg ? 1.55 : 1.52;
  const itemGap = lg ? 9 : 7;
  const textPadL = lg ? 18 : 14;
  const dot = lg ? 6 : 5;
  return (
    <ul
      style={{
        margin: 0,
        paddingLeft: 0,
        listStyle: "none",
        fontSize,
        lineHeight,
        color: "rgba(255,255,255,0.93)",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {items.map((text, i) => (
        <li
          key={i}
          style={{
            marginBottom: i < items.length - 1 ? itemGap : 0,
            paddingLeft: textPadL,
            position: "relative",
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          <span
            aria-hidden
            style={{
              position: "absolute",
              left: 0,
              top: lg ? "0.52em" : "0.55em",
              width: dot,
              height: dot,
              borderRadius: "50%",
              background: marker,
              boxShadow: `0 0 0 1px rgba(0,0,0,0.2)`,
              opacity: columnIndex === 1 ? 0.85 : 1,
            }}
          />
          {text}
        </li>
      ))}
    </ul>
  );
}

function PlatformRoadmapHorizonSlideInner({
  slideNumber,
  rows,
  partIndex,
}: {
  slideNumber: number;
  rows: RoadmapRow[];
  partIndex: 1 | 2;
}) {
  const partHint =
    partIndex === 1
      ? "Part 1 of 2 — experience, AI, and ecosystem pillars. Scroll the table if your display is shorter than the full grid."
      : "Part 2 of 2 — trust, PLG motion, and customer segments (continued). Scroll if needed.";

  const lg = partIndex === 2;
  const typo = lg
    ? {
        eyebrow: 15,
        badge: 12,
        badgePad: "4px 12px",
        h1: 38,
        hint: 16,
        hintLh: 1.5,
        headerPad: "24px 48px 8px",
        gridCols: "minmax(212px, 21%) 1fr 1fr 1fr",
        cornerPad: "14px 18px",
        colPad: "14px 16px",
        colGap: 6,
        colTitle: 12,
        colNote: 12,
        colTitleLh: 1.3,
        colNoteLh: 1.42,
        pillarLbl: 12,
        rowPad: "14px 18px",
        rowTitle: 16,
        rowSub: 12,
        lens: 13,
        lensLh: 1.45,
        lensMt: 10,
        lensPt: 10,
        cellPad: "14px 16px 14px 18px",
      }
    : {
        eyebrow: 14,
        badge: 11,
        badgePad: "3px 10px",
        h1: 32,
        hint: 14,
        hintLh: 1.45,
        headerPad: "22px 48px 6px",
        gridCols: "minmax(196px, 20%) 1fr 1fr 1fr",
        cornerPad: "12px 16px",
        colPad: "12px 14px",
        colGap: 5,
        colTitle: 11,
        colNote: 11,
        colTitleLh: 1.28,
        colNoteLh: 1.38,
        pillarLbl: 11,
        rowPad: "12px 16px",
        rowTitle: 14,
        rowSub: 11,
        lens: 11,
        lensLh: 1.42,
        lensMt: 8,
        lensPt: 8,
        cellPad: "12px 14px 12px 16px",
      };

  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 18%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "flex-start",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: typo.headerPad, flexShrink: 0 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: typo.eyebrow,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 6px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <span>Product roadmap</span>
          <span
            style={{
              fontSize: typo.badge,
              letterSpacing: "0.12em",
              color: "#7EB3E8",
              border: "1px solid rgba(126,179,232,0.35)",
              padding: typo.badgePad,
              borderRadius: 999,
            }}
          >
            {partIndex} / 2
          </span>
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: typo.h1,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.12,
          }}
        >
          Platform horizons
        </h1>
        <p
          style={{
            fontSize: typo.hint,
            color: "rgba(255,255,255,0.55)",
            margin: "6px 0 0",
            maxWidth: 880,
            lineHeight: typo.hintLh,
          }}
        >
          {partHint}
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.12 }}
        style={{
          flex: 1,
          minHeight: 0,
          padding: "0 40px 4px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(0,8,24,0.4)",
            overflow: "hidden",
          }}
        >
          <div
            className="platform-roadmap-scroll"
            style={{
              flex: 1,
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div
              style={{
                flex: 1,
                minHeight: 0,
                width: "100%",
                display: "grid",
                gridTemplateColumns: typo.gridCols,
                gridTemplateRows: `auto repeat(${rows.length}, minmax(min-content, 1fr))`,
                gap: 0,
              }}
            >
            <div
              style={{
                position: "sticky",
                top: 0,
                zIndex: 4,
                padding: typo.cornerPad,
                background: "rgba(0,2,8,0.98)",
                borderBottom: "1px solid rgba(255,255,255,0.16)",
                borderRight: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: typo.pillarLbl,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Pillar
              </span>
            </div>
            {COL_HEADERS.map((col) => (
              <div
                key={col.title}
                style={{
                  position: "sticky",
                  top: 0,
                  zIndex: 3,
                  padding: typo.colPad,
                  background: "linear-gradient(180deg, rgba(30,78,140,0.55) 0%, rgba(0,8,24,0.98) 100%)",
                  borderBottom: "1px solid rgba(255,255,255,0.16)",
                  borderLeft: "1px solid rgba(255,255,255,0.08)",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: typo.colGap,
                }}
              >
                <span
                  style={{
                    fontSize: typo.colTitle,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#9EC5EB",
                    lineHeight: typo.colTitleLh,
                  }}
                >
                  {col.title}
                </span>
                <span
                  style={{
                    fontSize: typo.colNote,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.52)",
                    lineHeight: typo.colNoteLh,
                    textTransform: "none",
                    letterSpacing: "0.01em",
                  }}
                >
                  {col.investorNote}
                </span>
              </div>
            ))}

            {rows.map((row, ri) => {
              const zebra = ri % 2 === 0 ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.055)";
              const lens = INVESTOR_LENS[row.title];
              return (
                <React.Fragment key={row.title}>
                  <div
                    style={{
                      padding: typo.rowPad,
                      borderTop: ri === 0 ? undefined : "1px solid rgba(255,255,255,0.12)",
                      borderRight: "1px solid rgba(255,255,255,0.12)",
                      background: zebra,
                      alignSelf: "stretch",
                      minHeight: 0,
                      height: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        fontSize: typo.rowTitle,
                        fontWeight: 700,
                        color: "#FFFFFF",
                        lineHeight: 1.28,
                        textWrap: "balance",
                      }}
                    >
                      {row.title}
                    </div>
                    {row.subtitle ? (
                      <div
                        style={{
                          fontSize: typo.rowSub,
                          fontWeight: 600,
                          color: "rgba(255,255,255,0.55)",
                          marginTop: 5,
                          letterSpacing: "0.02em",
                          lineHeight: 1.35,
                        }}
                      >
                        {row.subtitle}
                      </div>
                    ) : null}
                    {lens ? (
                      <div
                        style={{
                          fontSize: typo.lens,
                          fontWeight: 600,
                          color: "#B8D4F0",
                          marginTop: typo.lensMt,
                          lineHeight: typo.lensLh,
                          paddingTop: typo.lensPt,
                          borderTop: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {lens}
                      </div>
                    ) : null}
                  </div>
                  {(
                    [
                      row.available,
                      row.soon,
                      row.after,
                    ] as const
                  ).map((items, ci) => {
                    const alt = ri % 2 === 0;
                    const cellBg =
                      ci === 0
                        ? alt
                          ? "rgba(126,179,232,0.1)"
                          : "rgba(126,179,232,0.14)"
                        : ci === 1
                          ? alt
                            ? "rgba(255,255,255,0.04)"
                            : "rgba(255,255,255,0.07)"
                          : alt
                            ? "rgba(110,231,183,0.08)"
                            : "rgba(110,231,183,0.11)";
                    const accentBar =
                      ci === 0 ? "rgba(126,179,232,0.85)" : ci === 1 ? "rgba(200,210,230,0.5)" : "rgba(110,231,183,0.85)";
                    return (
                      <div
                        key={ci}
                        style={{
                          padding: typo.cellPad,
                          borderTop: ri === 0 ? undefined : "1px solid rgba(255,255,255,0.12)",
                          borderLeft: "1px solid rgba(255,255,255,0.06)",
                          background: cellBg,
                          boxShadow: `inset 3px 0 0 0 ${accentBar}`,
                          minHeight: 0,
                          height: "100%",
                          boxSizing: "border-box",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <BulletList
                          items={items}
                          columnIndex={ci as 0 | 1 | 2}
                          size={lg ? "large" : "default"}
                        />
                      </div>
                    );
                  })}
                </React.Fragment>
              );
            })}
            </div>
          </div>
        </div>
      </motion.div>

      <div style={{ flexShrink: 0 }}>
        <SlideFooter slideNumber={slideNumber} variant="dark" />
      </div>
    </div>
  );
}

const ROWS_PART1 = ALL_ROWS.slice(0, 3);
const ROWS_PART2 = ALL_ROWS.slice(3, 6);

/** Slide 62a — CX, Human+AI, Bespoke */
export default function PlatformRoadmapHorizonSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <PlatformRoadmapHorizonSlideInner slideNumber={slideNumber} rows={ROWS_PART1} partIndex={1} />
  );
}

/** Slide 63 — Trust, PLG, Customer segment (larger type than slide 62) */
export function PlatformRoadmapHorizonSlidePart2({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <PlatformRoadmapHorizonSlideInner slideNumber={slideNumber} rows={ROWS_PART2} partIndex={2} />
  );
}
