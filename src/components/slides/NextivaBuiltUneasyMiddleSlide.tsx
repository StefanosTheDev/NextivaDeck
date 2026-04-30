"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, CircleDot } from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const requirements = [
  "Fast response and human reassurance at the point of decision",
  "Trusted guidance on mission-critical communications",
  "Simplicity and speed without enterprise complexity",
  "A vendor of record customers can bet the business on",
];

const nextivaWins = [
  "Hybrid digital + sales-assisted motion — low CAC, high conversion",
  "Tightly tuned, metrics-driven execution model with SLAs at every step of the sales process",
  "Comms + AI expertise at mid-market price points",
  "Cost structure that supports profitable human engagement",
];

function FrameworkRows({
  items,
  accent,
  grayNumbers,
  density = "compact",
  fillHeight = false,
}: {
  items: string[];
  accent: string;
  grayNumbers?: boolean;
  density?: "compact" | "comfortable";
  fillHeight?: boolean;
}) {
  const badge = grayNumbers
    ? {
        color: "rgba(204, 199, 195, 0.85)",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
      }
    : {
        color: accent,
        background: `${accent}14`,
        border: `1px solid ${accent}44`,
      };

  const sizes =
    density === "comfortable"
      ? { rowPad: "16px 0", lastRowPad: "16px 0 4px", badge: 36, badgeFont: 13, body: 17 }
      : { rowPad: "10px 0", lastRowPad: "10px 0 2px", badge: 30, badgeFont: 11, body: 15 };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        flex: fillHeight ? 1 : undefined,
        justifyContent: fillHeight ? "space-between" : undefined,
      }}
    >
      {items.map((t, i) => (
        <motion.div
          key={t}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.22 + i * 0.06 }}
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            padding: i === items.length - 1 ? sizes.lastRowPad : sizes.rowPad,
            borderBottom: i < items.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
            flex: fillHeight ? 1 : undefined,
          }}
        >
          <span
            style={{
              flexShrink: 0,
              width: sizes.badge,
              height: sizes.badge,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: sizes.badgeFont,
              fontWeight: 700,
              letterSpacing: "0.02em",
              fontFamily: "'Space Grotesk', sans-serif",
              ...badge,
            }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p style={{ margin: 0, fontSize: sizes.body, lineHeight: 1.45, color: "rgba(255,255,255,0.82)", fontWeight: 400 }}>
            {t}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default function NextivaBuiltUneasyMiddleSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: BG, overflow: "hidden", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 440,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,112,243,0.07) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "36px 80px 0", flexShrink: 0, textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          Market position
        </p>
        <div
          style={{
            width: 48,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #2860B2, #0070F3)",
            margin: "0 auto 20px",
            opacity: 0.9,
          }}
        />
        <h1
          className="font-heading"
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.16,
            maxWidth: 1040,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Nextiva is uniquely positioned to win the underserved middle market.
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          style={{
            maxWidth: 920,
            margin: "22px auto 0",
            padding: "18px 24px 18px 22px",
            textAlign: "left",
            borderRadius: 12,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderLeft: "4px solid #0070F3",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
          }}
        >
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.68)", margin: 0, lineHeight: 1.55, fontWeight: 400 }}>
            We pair digital acquisition efficiency with human trust to deliver mid-market unit economics competitors
            can&apos;t structurally match.{" "}
            <strong style={{ fontWeight: 700, color: "#FFFFFF" }}>That is the moat.</strong>
          </p>
        </motion.div>
      </motion.header>

      <main
        style={{
          flex: 1,
          display: "flex",
          gap: 0,
          padding: "20px 80px 6px",
          minHeight: 0,
          alignItems: "stretch",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          style={{
            flex: 1,
            borderRadius: 18,
            padding: "24px 28px 8px",
            background:
              "linear-gradient(165deg, rgba(245, 158, 11, 0.07) 0%, rgba(255,255,255,0.03) 42%, rgba(0,0,0,0.12) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 22 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                background: "rgba(245, 158, 11, 0.12)",
                border: "1px solid rgba(245, 158, 11, 0.35)",
              }}
            >
              <AlertTriangle size={22} color="#FBBF24" strokeWidth={1.75} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                Buyer non-negotiables
              </p>
              <h2
                className="font-heading"
                style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: "3px 0 0", lineHeight: 1.2 }}
              >
                What the middle market demands
              </h2>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                  margin: "6px 0 0",
                  lineHeight: 1.4,
                }}
              >
                Requirements that gate the buying decision
              </p>
            </div>
          </div>
          <div style={{ paddingLeft: 10 }}>
            <FrameworkRows items={requirements} accent="#FBBF24" grayNumbers density="comfortable" />
          </div>
        </motion.section>

        <div
          style={{
            width: 56,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 48,
          }}
        >
          <div
            style={{
              width: 1,
              flex: 1,
              minHeight: 48,
              background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.12), transparent)",
            }}
          />
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0, 112, 243, 0.15)",
              border: "1px solid rgba(0, 112, 243, 0.4)",
              margin: "10px 0",
            }}
          >
            <ArrowRight size={22} color="#7EB3E8" strokeWidth={2} />
          </div>
          <div
            style={{
              width: 1,
              flex: 1,
              minHeight: 48,
              background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.12), transparent)",
            }}
          />
        </div>

        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          style={{
            flex: 1,
            borderRadius: 18,
            padding: "24px 28px 8px",
            background:
              "linear-gradient(195deg, rgba(0, 112, 243, 0.10) 0%, rgba(255,255,255,0.03) 45%, rgba(0,0,0,0.12) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 22 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                background: "rgba(0, 112, 243, 0.14)",
                border: "1px solid rgba(0, 112, 243, 0.35)",
              }}
            >
              <CircleDot size={22} color="#7EB3E8" strokeWidth={1.75} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                Why Nextiva wins
              </p>
              <h2
                className="font-heading"
                style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: "3px 0 0", lineHeight: 1.2 }}
              >
                How that maps to durable economics
              </h2>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                  margin: "6px 0 0",
                  lineHeight: 1.4,
                }}
              >
                Purpose-built motion → profitable mid-market at scale
              </p>
            </div>
          </div>
          <div style={{ paddingLeft: 10 }}>
            <FrameworkRows items={nextivaWins} accent="#7EB3E8" grayNumbers density="comfortable" />
          </div>
        </motion.section>
      </main>

      <div style={{ padding: "0 80px 8px", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
          style={{
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
              color: "#7EB3E8",
              flexShrink: 0,
            }}
          >
            Investor takeaway
          </span>
          <span style={{ width: 1, height: 18, background: "rgba(126,179,232,0.3)" }} />
          <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.82)", lineHeight: 1.45, flex: 1, textAlign: "center" }}>
            Large, underpenetrated SAM · platform attach across voice + digital + AI · NRR tailwinds · operating
            leverage as mix shifts to software.
          </p>
        </motion.div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
