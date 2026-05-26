"use client";

import type { ReactNode } from "react";
import SlideFooter from "../SlideFooter";

const S = 1.12;
const s = (n: number) => Math.round(n * S);

/** Bottom band — larger type; wins stay single-line via nowrap + width bias to right panel */
const BOT_SCALE = 1.24;
const botSize = (n: number) => s(Math.round(n * BOT_SCALE));
/** Reserved height for open-market band — keeps copy off the footer */
const BOTTOM_BAND_MIN_H = botSize(212);
/** Slight cushion between category cards and open-market band */
const MAIN_GAP = s(8);
const BOT_LABEL = botSize(12);
const BOT_METRIC = botSize(68);
const BOT_DESC = botSize(15);
const BOT_WIN = botSize(14);
const BOT_WIN_GAP_ROW = botSize(11);
const BOT_WIN_GAP_COL = botSize(20);
const BOT_WIN_ICON = botSize(22);
const BOT_WIN_CHECK = botSize(12);
const BOT_PAD_V = botSize(22);
const BOT_PAD_H = botSize(24);
/** One-line cushion between wins label and checklist (matches BOT_WIN line height) */
const BOT_WINS_LABEL_GAP = Math.ceil(BOT_WIN * 1.35);
/** Category cards — slightly reduced from 1.68 so wrapped copy stays inside fixed slots */
const CAT_SCALE = 1.52;
const catSize = (n: number) => s(Math.round(n * CAT_SCALE));
const CAT_LABEL = catSize(11);
const CAT_TITLE = catSize(17);
const CAT_COMPANIES = catSize(12);
/** Shared size for green (+) and red (−) bullets */
const CAT_BULLET_BODY = catSize(11);
const CAT_BULLET_LINE_H = Math.ceil(CAT_BULLET_BODY * 1.38);
const CAT_STRENGTH_ICON = catSize(18);
const CAT_STRENGTH_CHECK = catSize(10);
const CAT_STRENGTH_ITEM_GAP = catSize(7);
const CAT_RIBBON = catSize(11);
const CAT_PAD = catSize(11);
const CAT_PAD_INNER = catSize(9);
const CAT_RULE = "1px solid rgba(91,160,224,0.2)";
/** Fixed slots — aligned across columns; sized to real copy, not extra whitespace */
const CAT_TITLE_SLOT_H = Math.ceil(CAT_TITLE * 1.28 * 2);
const CAT_COMPANIES_LINES = 2;
const CAT_COMPANIES_SLOT_H = CAT_COMPANIES_LINES * Math.ceil(CAT_COMPANIES * 1.38);
const CAT_STRENGTH_LINES_PER_ITEM = 2;
const CAT_STRENGTH_BODY_SLOT_H =
  2 * CAT_STRENGTH_LINES_PER_ITEM * CAT_BULLET_LINE_H + CAT_STRENGTH_ITEM_GAP;
/** Weakness block — 3 lines/bullet (tight but fits longest column-03 copy) */
const CAT_WEAKNESS_LINES = 3;
const CAT_BLIND_BLOCK_H =
  CAT_PAD_INNER * 2 +
  2 * CAT_WEAKNESS_LINES * CAT_BULLET_LINE_H +
  CAT_STRENGTH_ITEM_GAP;
/** Call-out ribbon */
const CAT_RIBBON_PAD_V = catSize(4);
const CAT_RIBBON_PAD_H = catSize(10);
const CAT_RIBBON_INSET_X = catSize(16);
const CAT_RIBBON_MIN_H = CAT_RIBBON_PAD_V * 2 + Math.ceil(CAT_RIBBON * 1.35);
/** Gap strength block → red ribbon, and ribbon → weakness block */
const CAT_RIBBON_GAP_ABOVE = catSize(10);
const CAT_RIBBON_GAP_BELOW = catSize(8);

type Category = {
  num: string;
  title: string;
  companies: string;
  strengths: string[];
  ribbon: string;
  weaknesses: string[];
};

const CATEGORIES: Category[] = [
  {
    num: "01",
    title: "UCaaS + CCaaS incumbents",
    companies: "RingCentral · 8x8 · NICE · Genesys · Five9 · Talkdesk",
    strengths: [
      "Carrier-grade comms infrastructure.",
      "Mature routing and workforce management at scale.",
    ],
    ribbon: "BUILT IN SILOS, STUCK IN SILOS",
    weaknesses: [
      "UC, CC, and CRM were never designed to share data — unifying them isn't an integration project, it's a rebuild.",
      "Without a real-time customer view, AI can inform but never act — the moment passes before context arrives.",
    ],
  },
  {
    num: "02",
    title: "Pure agentic startups",
    companies: "Sierra.ai · Decagon · AI-native autonomous players",
    strengths: [
      "Sophisticated autonomous AI for digital-first use cases.",
      "Strong product vision for full AI resolution.",
    ],
    ribbon: "F100 ONLY · ALL-IN AI",
    weaknesses: [
      "Forward-deployed engineering means every deployment requires F100 budgets to justify.",
      "Customers must go all-in on AI with no human fallback — a commitment most mid-market operators won't make.",
    ],
  },
  {
    num: "03",
    title: "Digital engagement platforms",
    companies: "Sprinklr · Generic CRMs · Lifecycle management tools",
    strengths: ["Strong digital-first engagement and lifecycle management across channels."],
    ribbon: "DOWNSTREAM · ALWAYS STALE",
    weaknesses: [
      "Building the infrastructure layer takes years — carrier relationships, regulatory approvals, and customer trust can't be shortcut.",
      "Buying it means paying a premium for exactly what Nextiva has already built.",
    ],
  },
  {
    num: "04",
    title: "Agentic receptionist wrappers",
    companies: "Synthflow · Bland.AI · Air.ai · Goodcall · Vapi",
    strengths: [
      "Fast to deploy, light footprint.",
      "Strong fit for very small businesses with simple call deflection.",
    ],
    ribbon: "NO INFRASTRUCTURE",
    weaknesses: [
      "Simple call deflection works until it doesn't — the moment a customer needs workflow integration, compliance, or human handoff.",
      "There's nothing underneath to build on.",
    ],
  },
];

const NEXTIVA_WINS = [
  "Owns the comms layer and the data — no stitching required",
  "XBert AI embedded in the stack, not bolted on top",
  "Human + AI in tandem — operators adopt at their own pace",
  "Self-serve deployment — no forward-deployed engineering required",
  "One cost structure that runs both motions profitably at mid-market ACV",
];

function CatWeaknessBulletItem({ children }: { children: ReactNode }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: CAT_STRENGTH_ITEM_GAP,
        fontSize: CAT_BULLET_BODY,
        color: "rgba(255,255,255,0.55)",
        lineHeight: 1.38,
      }}
    >
      <span
        style={{
          width: CAT_STRENGTH_ICON,
          height: CAT_STRENGTH_ICON,
          borderRadius: "50%",
          background: "rgba(180,50,45,0.35)",
          border: "1px solid rgba(248,113,113,0.65)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontSize: CAT_STRENGTH_CHECK,
          color: "#F87171",
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        −
      </span>
      <span>{children}</span>
    </li>
  );
}

function CatStrengthCheckItem({ children }: { children: ReactNode }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: CAT_STRENGTH_ITEM_GAP,
        fontSize: CAT_BULLET_BODY,
        color: "rgba(255,255,255,0.55)",
        lineHeight: 1.38,
      }}
    >
      <span
        style={{
          width: CAT_STRENGTH_ICON,
          height: CAT_STRENGTH_ICON,
          borderRadius: "50%",
          background: "rgba(52,211,153,0.25)",
          border: "1px solid rgba(52,211,153,0.55)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontSize: CAT_STRENGTH_CHECK,
          color: "#34D399",
          fontWeight: 700,
        }}
      >
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function BlindSpotRibbon({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background: "rgba(120,35,35,0.88)",
        padding: `${CAT_RIBBON_PAD_V}px ${CAT_RIBBON_PAD_H}px`,
        textAlign: "center",
        flexShrink: 0,
        minHeight: CAT_RIBBON_MIN_H,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "max-content",
        maxWidth: `calc(100% - ${CAT_RIBBON_INSET_X * 2}px)`,
        margin: `0 ${CAT_RIBBON_INSET_X}px 0`,
      }}
    >
      <span
        style={{
          fontSize: CAT_RIBBON,
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "rgba(255,220,200,0.95)",
          fontFamily: "'Space Grotesk', sans-serif",
          lineHeight: 1.35,
        }}
      >
        {children}
      </span>
    </div>
  );
}

function CategoryColumn({
  cat,
  titleBottomRule = false,
}: {
  cat: Category;
  /** Card 02: rule at bottom of 2-line title slot (aligns companies + strength bullets) */
  titleBottomRule?: boolean;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(91,160,224,0.4)",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: 0,
        overflow: "hidden",
        background: "rgba(255,255,255,0.02)",
      }}
    >
        {/* Top — category, title, companies, strength */}
        <div
          style={{
            padding: `${CAT_PAD}px ${CAT_PAD}px 0`,
            flexShrink: 0,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          }}
        >
        <p
          style={{
            fontSize: CAT_LABEL,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#7EB3E8",
            margin: `0 0 ${catSize(6)}px`,
          }}
        >
          CATEGORY {cat.num}
        </p>
        <div
          style={{
            minHeight: CAT_TITLE_SLOT_H,
            marginBottom: catSize(8),
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontSize: CAT_TITLE,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.28,
            }}
          >
            {cat.title}
          </p>
          {titleBottomRule ? (
            <div style={{ borderTop: CAT_RULE, marginTop: "auto", flexShrink: 0 }} />
          ) : null}
        </div>
        <div
          style={{
            minHeight: CAT_COMPANIES_SLOT_H,
            maxHeight: CAT_COMPANIES_SLOT_H,
            marginBottom: catSize(10),
            overflow: "hidden",
          }}
        >
          <p
            style={{
              fontSize: CAT_COMPANIES,
              color: "rgba(126,179,232,0.85)",
              margin: 0,
              lineHeight: 1.42,
            }}
          >
            {cat.companies}
          </p>
        </div>
        <div style={{ borderTop: CAT_RULE, marginBottom: catSize(10) }} />
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            minHeight: CAT_STRENGTH_BODY_SLOT_H,
            maxHeight: CAT_STRENGTH_BODY_SLOT_H,
            display: "flex",
            flexDirection: "column",
            gap: CAT_STRENGTH_ITEM_GAP,
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          {cat.strengths.map((item) => (
            <CatStrengthCheckItem key={item}>{item}</CatStrengthCheckItem>
          ))}
        </ul>
        </div>

        {/* Ribbon + weakness — weakness block grows to card bottom */}
        <div
          style={{
            flex: "1 1 0",
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            paddingTop: CAT_RIBBON_GAP_ABOVE,
          }}
        >
          <BlindSpotRibbon>{cat.ribbon}</BlindSpotRibbon>
          <div
            style={{
              flex: "1 1 0",
              minHeight: CAT_BLIND_BLOCK_H,
              marginTop: CAT_RIBBON_GAP_BELOW,
              padding: `${CAT_PAD_INNER}px ${CAT_PAD}px ${CAT_PAD_INNER}px`,
              background: "rgba(0,0,0,0.12)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: CAT_STRENGTH_ITEM_GAP,
                flexShrink: 0,
                width: "100%",
              }}
            >
              {cat.weaknesses.map((item) => (
                <CatWeaknessBulletItem key={item}>{item}</CatWeaknessBulletItem>
              ))}
            </ul>
          </div>
        </div>
    </div>
  );
}

export default function NewCompetitionSlide({
  slideNumber = 13,
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
      <header style={{ padding: `${s(24)}px 72px 0`, flexShrink: 0 }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: s(14),
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#9BB5CC",
            margin: `0 0 ${s(6)}px`,
          }}
        >
          COMPETITIVE LANDSCAPE
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: s(40),
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
            maxWidth: 1100,
          }}
        >
          Four categories. Four structural blind spots.
        </h1>
        <p
          style={{
            fontSize: s(18),
            color: "rgba(126,179,232,0.75)",
            margin: `${s(6)}px 0 0`,
            lineHeight: 1.4,
          }}
        >
          None of them can profitably serve the middle.
        </p>
      </header>

      <main
        style={{
          flex: 1,
          minHeight: 0,
          padding: `${s(12)}px 72px ${s(10)}px`,
          display: "flex",
          flexDirection: "column",
          gap: MAIN_GAP,
          overflow: "hidden",
        }}
      >
        {/* Category row — stretches to just above open-market band */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: s(10),
            flex: "1 1 0",
            minHeight: 0,
            maxHeight: `calc(100% - ${BOTTOM_BAND_MIN_H + MAIN_GAP}px)`,
            alignItems: "stretch",
            overflow: "hidden",
          }}
        >
          {CATEGORIES.map((cat) => (
            <CategoryColumn
              key={cat.num}
              cat={cat}
              titleBottomRule={cat.num === "02"}
            />
          ))}
        </div>

        {/* Bottom band — fixed slice of main so open-market copy stays above footer */}
        <div
          style={{
            flex: `0 0 ${BOTTOM_BAND_MIN_H}px`,
            minHeight: BOTTOM_BAND_MIN_H,
            maxHeight: BOTTOM_BAND_MIN_H,
            flexShrink: 0,
            border: "1px solid rgba(91,160,224,0.45)",
            borderRadius: 10,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "minmax(240px, 22%) 1fr",
            background: "rgba(40,96,178,0.05)",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              borderRight: "1px solid rgba(91,160,224,0.25)",
              padding: `${BOT_PAD_V}px ${BOT_PAD_H}px`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            <p
              style={{
                fontSize: BOT_LABEL,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#7EB3E8",
                margin: `0 0 ${botSize(8)}px`,
              }}
            >
              THE OPEN MARKET
            </p>
            <p
              className="font-heading"
              style={{
                fontSize: BOT_METRIC,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: `0 0 ${botSize(8)}px`,
                lineHeight: 1,
              }}
            >
              19M
            </p>
            <p
              style={{
                fontSize: BOT_DESC,
                color: "rgba(200,220,255,0.75)",
                margin: 0,
                lineHeight: 1.38,
              }}
            >
              Mid-market seats left behind by every category above — the largest untapped opportunity in CX.
            </p>
          </div>

          <div
            style={{
              padding: `${BOT_PAD_V}px ${BOT_PAD_H}px`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: 0,
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            <p
              style={{
                fontSize: BOT_LABEL,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#7EB3E8",
                margin: 0,
                flexShrink: 0,
              }}
            >
              WHY NEXTIVA STRUCTURALLY WINS
            </p>
            <ul
              style={{
                margin: `${BOT_WINS_LABEL_GAP}px 0 0`,
                padding: 0,
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: `${BOT_WIN_GAP_ROW}px ${BOT_WIN_GAP_COL}px`,
                flex: 1,
                minHeight: 0,
                alignContent: "center",
              }}
            >
              {NEXTIVA_WINS.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: botSize(8),
                    fontSize: BOT_WIN,
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.35,
                    minWidth: 0,
                  }}
                >
                  <span
                    style={{
                      width: BOT_WIN_ICON,
                      height: BOT_WIN_ICON,
                      borderRadius: "50%",
                      background: "rgba(52,211,153,0.25)",
                      border: "1px solid rgba(52,211,153,0.55)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: BOT_WIN_CHECK,
                      color: "#34D399",
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ whiteSpace: "nowrap" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
