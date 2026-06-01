"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  DollarSign,
  Repeat,
  Layers,
  Gauge,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const ACCENT = "#7EB3E8";
const ACCENT_BG = "rgba(0,112,243,0.12)";
const ACCENT_BORDER = "rgba(126,179,232,0.28)";

type RowKey =
  | "revenue"
  | "customers"
  | "arpa"
  | "ndr"
  | "attach"
  | "margin";

interface Cell {
  value: string;
  sub: string;
}

interface Company {
  name: string;
  initial: string;
  tagline: string;
  revenue: Cell;
  customers: Cell;
  arpa: Cell;
  ndr: Cell;
  attach: Cell;
  margin: Cell;
}

const COMPANIES: Company[] = [
  {
    name: "HubSpot",
    initial: "H",
    tagline: "Freemium → inside-sales → multi-hub attach",
    revenue: { value: "$3.1B", sub: "~19% growth · FY25" },
    customers: { value: "~265K", sub: "Q4 FY25" },
    arpa: { value: "~$11.7K", sub: "ARPA · Q4 FY25" },
    ndr: { value: "105%", sub: "NRR · Q4 FY25" },
    attach: { value: "62%", sub: "Multi-hub attach · new Pro+ lands" },
    margin: { value: "~23%", sub: "Non-GAAP operating margin · FY25" },
  },
  {
    name: "ServiceTitan",
    initial: "S",
    tagline: "Vertical SaaS for trades · multi-module land",
    revenue: { value: "~$900M", sub: "ARR · FY26" },
    customers: { value: "~8.5K", sub: "Active customers · FY26" },
    arpa: { value: "~$108K", sub: "ACV / customer · FY26" },
    ndr: { value: "~110%", sub: "Net Dollar Retention · FY26" },
    attach: { value: "~50%", sub: "Pro products attach · multi-module land" },
    margin: { value: "~10%", sub: "Non-GAAP operating margin · FY26" },
  },
  {
    name: "monday.com",
    initial: "M",
    tagline: "PLG → enterprise multi-product expansion",
    revenue: { value: "~$1.04B", sub: "~33% growth · FY25" },
    customers: { value: "~245K", sub: "Paying customers · Q4 FY25" },
    arpa: { value: "~$4.2K", sub: "Blended ARPA · FY25" },
    ndr: { value: "112%", sub: "NDR blended · 119% for $100K+ cohort" },
    attach: { value: "~33%", sub: "New lands with 2+ products · Q4 FY25" },
    margin: { value: "~16%", sub: "Non-GAAP operating margin · FY25" },
  },
];

const ROWS: { key: RowKey; label: string; helper: string; icon: typeof TrendingUp }[] = [
  {
    key: "revenue",
    label: "Revenue",
    helper: "Top-line scale & growth",
    icon: TrendingUp,
  },
  {
    key: "customers",
    label: "Customers",
    helper: "Active paying base",
    icon: Users,
  },
  {
    key: "arpa",
    label: "ARPA / ACV",
    helper: "Average revenue per customer",
    icon: DollarSign,
  },
  {
    key: "ndr",
    label: "Retention",
    helper: "Net Revenue / Dollar Retention",
    icon: Repeat,
  },
  {
    key: "attach",
    label: "Multi-product attach",
    helper: "Cross-sell & expansion velocity",
    icon: Layers,
  },
  {
    key: "margin",
    label: "Profitability",
    helper: "Operating leverage at scale",
    icon: Gauge,
  },
];

export default function InvestorMidMarketPeersComparisonSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background: BG,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1200,
          height: 540,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,112,243,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "32px 56px 0",
          textAlign: "center",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          Proof points · mid-market SaaS peers
        </p>
        <div
          style={{
            width: 48,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #2860B2, #0070F3)",
            margin: "10px auto 14px",
            opacity: 0.9,
          }}
        />
        <h1
          className="font-heading"
          style={{
            fontSize: 38,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.16,
            maxWidth: 1140,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          The mid-market motion is profitable — at scale.
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
            margin: "12px auto 0",
            lineHeight: 1.5,
            maxWidth: 980,
          }}
        >
          Three different playbooks, three different markets — all expanding
          profitably into the same uneasy middle.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "22px 56px 10px",
          position: "relative",
          zIndex: 1,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px repeat(3, 1fr)",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 18,
            overflow: "hidden",
            boxShadow:
              "0 24px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)",
            flex: 1,
            minHeight: 0,
          }}
        >
          {/* Header row */}
          <div
            style={{
              background: "rgba(0,0,0,0.22)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          />
          {COMPANIES.map((c) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                padding: "16px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                borderLeft: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(0,0,0,0.18)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: ACCENT_BG,
                    border: `1px solid ${ACCENT_BORDER}`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: ACCENT,
                    fontWeight: 800,
                    fontSize: 18,
                    fontFamily: "'Space Grotesk', sans-serif",
                    flexShrink: 0,
                  }}
                >
                  {c.initial}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    className="font-heading"
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.05,
                    }}
                  >
                    {c.name}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.5)",
                      margin: "3px 0 0",
                      lineHeight: 1.3,
                    }}
                  >
                    {c.tagline}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Data rows */}
          {ROWS.map((row, rowIdx) => {
            const Icon = row.icon;
            const isLast = rowIdx === ROWS.length - 1;
            return (
              <Fragment key={row.key}>
                <div
                  style={{
                    padding: "14px 20px",
                    background: "rgba(0,0,0,0.22)",
                    borderBottom: isLast
                      ? "none"
                      : "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <Icon size={14} color={ACCENT} strokeWidth={2.25} />
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: ACCENT,
                        margin: 0,
                      }}
                    >
                      {row.label}
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.42)",
                      margin: "4px 0 0",
                      lineHeight: 1.35,
                    }}
                  >
                    {row.helper}
                  </p>
                </div>

                {COMPANIES.map((c) => {
                  const cell = c[row.key];
                  return (
                    <motion.div
                      key={`${row.key}-${c.name}`}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 + rowIdx * 0.06,
                      }}
                      style={{
                        padding: "14px 20px",
                        borderLeft: "1px solid rgba(255,255,255,0.06)",
                        borderBottom: isLast
                          ? "none"
                          : "1px solid rgba(255,255,255,0.06)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <p
                        className="font-heading"
                        style={{
                          fontSize: 26,
                          fontWeight: 700,
                          color: "#FFFFFF",
                          margin: 0,
                          lineHeight: 1.05,
                        }}
                      >
                        {cell.value}
                      </p>
                      <p
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,0.55)",
                          margin: "5px 0 0",
                          lineHeight: 1.35,
                        }}
                      >
                        {cell.sub}
                      </p>
                    </motion.div>
                  );
                })}
              </Fragment>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.45 }}
          style={{
            marginTop: 14,
            borderRadius: 12,
            padding: "12px 22px",
            background: "rgba(0, 112, 243, 0.08)",
            border: "1px solid rgba(0, 112, 243, 0.22)",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: ACCENT,
              flexShrink: 0,
            }}
          >
            Investor takeaway
          </span>
          <span
            style={{ width: 1, height: 18, background: "rgba(126,179,232,0.3)" }}
          />
          <p
            style={{
              margin: 0,
              fontSize: 14,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.45,
              flex: 1,
            }}
          >
            Different products, different motions — same proof: the mid-market
            is durable, profitable, and compounds when productized.
          </p>
        </motion.div>
      </main>

      <div
        style={{
          padding: "0 56px 12px",
          fontSize: 10.5,
          color: "rgba(255,255,255,0.38)",
          lineHeight: 1.5,
          position: "relative",
          zIndex: 1,
        }}
      >
        Sources: HubSpot FY25 Q4 results (revenue, ARPA, NRR, multi-hub attach,
        non-GAAP operating margin); ServiceTitan FY26 disclosures (ARR
        ~$900M, ~8.5K active customers, NDR ~110%); monday.com FY25 Q4 results
        (revenue, paying customers, NDR 112% blended &amp; 119% for $100K+,
        cross-sell mix).
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
