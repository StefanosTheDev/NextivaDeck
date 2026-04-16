"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, HeartHandshake } from "lucide-react";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const points = [
  "Customers are comfortable buying non-critical tools online",
  "Communications and AI directly impact revenue, service quality, and business continuity",
  "Buyers want confidence that the vendor is real, credible, and capable of supporting them",
  "Human interaction increases trust and conversion rates in mission-critical categories",
];

const marketProofPoints: { source: string; body: string }[] = [
  {
    source: "SMB Group, U.S. SMB Technology Buying Journey (2024, n=738)",
    body: "When technology affects operations, mainstream SMBs lean on people first — they validate through experts and conversations with the vendor, not a shopping cart alone.",
  },
  {
    source: "TrustRadius & Pavilion, 2024 B2B Buying Disconnect (n=2,164 buyers)",
    body: "Demos, free trials, and conversations with current users rank among the most influential resources in technology purchases — buyers want to experience the product and talk with people tied to the vendor before they commit when the decision is consequential.",
  },
];

function FrameworkRows({
  items,
  accent,
  grayNumbers,
}: {
  items: string[];
  accent: string;
  grayNumbers?: boolean;
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

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {items.map((t, i) => (
        <motion.div
          key={t}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.22 + i * 0.06 }}
          style={{
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
            padding: "14px 0",
            borderBottom: i < items.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
          }}
        >
          <span
            style={{
              flexShrink: 0,
              width: 36,
              height: 36,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.02em",
              fontFamily: "'Space Grotesk', sans-serif",
              ...badge,
            }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, color: "rgba(255,255,255,0.82)", fontWeight: 400 }}>
            {t}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default function MissionCriticalHumanTrustSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
          Trust
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
            lineHeight: 1.15,
            maxWidth: 1000,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          When technology becomes mission-critical, buyers want people—not just software
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
            SMB Customers prefer to buy simple software online, but when the technology affects mission-critical operations, buyers want reassurance from a trusted advisor.
          </p>
        </motion.div>
      </motion.header>

      <main
        style={{
          flex: 1,
          display: "flex",
          gap: 0,
          padding: "26px 80px 32px",
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
            padding: "24px 26px 26px",
            background: "linear-gradient(165deg, rgba(40, 96, 178, 0.1) 0%, rgba(255,255,255,0.03) 42%, rgba(0,0,0,0.12) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 20 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                background: "rgba(40, 96, 178, 0.14)",
                border: "1px solid rgba(40, 96, 178, 0.35)",
              }}
            >
              <HeartHandshake size={24} color="#7EB3E8" strokeWidth={1.75} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
                Evidence
              </p>
              <h2 className="font-heading" style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", margin: "4px 0 18px", lineHeight: 1.2 }}>
                Supporting points
              </h2>
            </div>
          </div>
          <div style={{ paddingLeft: 10 }}>
            <FrameworkRows items={points} accent="#7EB3E8" grayNumbers />
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
            paddingTop: 40,
          }}
        >
          <div style={{ width: 1, flex: 1, minHeight: 40, background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.12), transparent)" }} />
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
          <div style={{ width: 1, flex: 1, minHeight: 40, background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.12), transparent)" }} />
        </div>

        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          style={{
            flex: 1,
            borderRadius: 18,
            padding: "24px 26px 28px",
            background: "linear-gradient(195deg, rgba(0, 112, 243, 0.1) 0%, rgba(255,255,255,0.03) 45%, rgba(0,0,0,0.1) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 20 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                background: "rgba(0, 112, 243, 0.14)",
                border: "1px solid rgba(0, 112, 243, 0.35)",
              }}
            >
              <BarChart3 size={24} color="#7EB3E8" strokeWidth={1.75} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                Survey snapshot
              </p>
              <h2 className="font-heading" style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", margin: "4px 0 0", lineHeight: 1.2 }}>
                Market Proof Points
              </h2>
              <div
                style={{
                  width: 40,
                  height: 3,
                  borderRadius: 2,
                  marginTop: 12,
                  background: "linear-gradient(90deg, #2860B2, #0070F3)",
                  opacity: 0.85,
                }}
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, minHeight: 0 }}>
            {marketProofPoints.map((row) => (
              <div
                key={row.source}
                style={{
                  padding: "14px 16px 15px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.045)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderLeft: "3px solid rgba(126, 179, 232, 0.65)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#7EB3E8",
                    lineHeight: 1.35,
                  }}
                >
                  {row.source}
                </p>
                <p
                  style={{
                    margin: "10px 0 0",
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "rgba(255,255,255,0.82)",
                    fontWeight: 400,
                  }}
                >
                  {row.body}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
