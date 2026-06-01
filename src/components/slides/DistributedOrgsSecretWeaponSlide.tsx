"use client";

import { motion } from "framer-motion";
import { Layers, TrendingUp, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const verticals = [
  "Healthcare",
  "Legal",
  "Financial Services",
  "Retail",
  "Construction",
  "Manufacturing",
];

const columns: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  bullets: string[];
  closer: string;
  highlight?: boolean;
}[] = [
  {
    icon: Layers,
    eyebrow: "THE ONLY FULL-STACK PLATFORM",
    title: "UCaaS + CCaaS + AI on one platform",
    bullets: [
      "Single contract, single data layer — no stitching, no seams.",
      "Some competitors provide good contact center. Others multi-location telephony. AI-only point solutions exist. None unify all three.",
      "Competitors can only win part of a stack. Nextiva wins the whole conversation.",
    ],
    closer:
      "Customers who consolidate onto Nextiva eliminate vendor sprawl — fewer contracts, longer terms, higher switching cost.",
  },
  {
    icon: Network,
    eyebrow: "A STRUCTURAL ADVANTAGE THEY OVERLOOK",
    title: "Distributed orgs aggregate to mid-market",
    bullets: [
      "They present as initially SMB — no incumbent, fast sales cycles, high willingness to standardize. We grow as they grow, organically or by acquisition.",
      "We have built fast, repeatable deployment infrastructure — templated per vertical, scalable from one location to hundreds. Years to develop, hard to replicate.",
      "The result: we win accounts competitors don't initially see, then grow and retain them at enterprise NRR.",
    ],
    closer:
      "Low acquisition friction. High displacement cost. Customer growth scales success. That combination is rare.",
  },
  {
    icon: TrendingUp,
    eyebrow: "204% NRR AT 36 MONTHS",
    title: "Each new location is expansion revenue",
    bullets: [
      "1,425 distributed accounts · 9,835 locations · $69M ARR — each new location is expansion revenue, not a new sale.",
      "Expansion is structural: as customers grow by acquisition or organic rollout, Nextiva grows with them automatically.",
      "Trusted AI upgrade path: customers who came for UCaaS are returning to begin their AI journey — and they prefer to work with their incumbent provider.",
    ],
    closer:
      "Each new location deepens the data moat. Displacement cost rises with every integration. We become part of their operational fabric.",
    highlight: true,
  },
];

export default function DistributedOrgsSecretWeaponSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{ background: BG, overflow: "hidden", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "30px 80px 0",
          flexShrink: 0,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 12px",
          }}
        >
          Distributed franchise &amp; organizations — cross-vertical lens
        </p>
        <div
          style={{
            width: 52,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #FBBF24, #F59E0B)",
            margin: "0 auto 16px",
            opacity: 0.9,
          }}
        />
        <h1
          className="font-heading"
          style={{
            fontSize: 44,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
            maxWidth: 1280,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          A compounding market our competitors don&apos;t see.
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          style={{
            maxWidth: 1280,
            margin: "16px auto 0",
            padding: "14px 22px",
            textAlign: "left",
            borderRadius: 12,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderLeft: "4px solid #FBBF24",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
          }}
        >
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.75)",
              margin: 0,
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            A hybrid GTM motion that recognizes SMB attributes that aggregate
            into enterprise behavior. Our service delivery playbook and
            relationship management drive{" "}
            <strong style={{ color: "#FBBF24", fontWeight: 700 }}>
              204% NRR by month 36
            </strong>
            . Spans all key verticals — same platform, same playbook.
          </p>
        </motion.div>

        {/* Vertical chips */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            margin: "14px auto 0",
            maxWidth: 1280,
          }}
        >
          {verticals.map((v) => (
            <span
              key={v}
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.06em",
                padding: "6px 14px",
                borderRadius: 999,
                background: "rgba(126,179,232,0.1)",
                border: "1px solid rgba(126,179,232,0.35)",
                color: "rgba(255,255,255,0.82)",
              }}
            >
              {v}
            </span>
          ))}
        </div>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "22px 70px 26px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          minHeight: 0,
          maxWidth: 1720,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        {columns.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.section
              key={c.eyebrow}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.06 }}
              style={{
                padding: "20px 20px",
                borderRadius: 16,
                background: c.highlight
                  ? "linear-gradient(165deg, rgba(245,158,11,0.16) 0%, rgba(245,158,11,0.05) 100%)"
                  : "linear-gradient(165deg, rgba(40, 96, 178, 0.07) 0%, rgba(255,255,255,0.025) 100%)",
                border: c.highlight
                  ? "1.5px solid rgba(245,158,11,0.5)"
                  : "1px solid rgba(255,255,255,0.09)",
                boxShadow: c.highlight
                  ? "0 18px 44px rgba(245,158,11,0.16), inset 0 1px 0 rgba(255,255,255,0.06)"
                  : "0 14px 36px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.04)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 13,
                  marginBottom: 2,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: c.highlight
                      ? "rgba(245,158,11,0.2)"
                      : "rgba(126,179,232,0.16)",
                    border: c.highlight
                      ? "1px solid rgba(245,158,11,0.45)"
                      : "1px solid rgba(126,179,232,0.38)",
                    color: c.highlight ? "#FBBF24" : "#7EB3E8",
                  }}
                >
                  <Icon size={21} strokeWidth={2} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 11.5,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: c.highlight
                        ? "#FBBF24"
                        : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {c.eyebrow}
                  </p>
                  <h2
                    className="font-heading"
                    style={{
                      fontSize: 21,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: "4px 0 0",
                      lineHeight: 1.2,
                    }}
                  >
                    {c.title}
                  </h2>
                </div>
              </div>

              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 9,
                  flex: 1,
                }}
              >
                {c.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    style={{
                      display: "flex",
                      gap: 9,
                      alignItems: "flex-start",
                      fontSize: 14.5,
                      lineHeight: 1.45,
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: c.highlight ? "#FBBF24" : "#7EB3E8",
                        marginTop: 8,
                      }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  marginTop: 4,
                  padding: "11px 14px",
                  borderRadius: 10,
                  background: "rgba(0,0,0,0.22)",
                  border: c.highlight
                    ? "1px solid rgba(245,158,11,0.3)"
                    : "1px solid rgba(126,179,232,0.22)",
                  fontSize: 13.5,
                  lineHeight: 1.42,
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 500,
                }}
              >
                {c.closer}
              </div>
            </motion.section>
          );
        })}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
