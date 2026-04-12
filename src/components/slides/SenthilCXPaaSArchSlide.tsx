"use client";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import SlideFooter from "../SlideFooter";

const STUDIO_TOOLS = [
  "Customer Experience Designer",
  "CX Agent Experience Designer",
  "Data + AI Model Manager",
];

const CX_AGENT_APPS = [
  { label: "NEXT", wide: true },
  { label: "NEXT Embedded", accent: true },
  { label: "NEXT Cards + Workflows", accent: true },
];

const CX_CHANNELS_ROW1 = ["Search", "Live Chat", "Voice", "Video"];
const CX_CHANNELS_ROW2 = ["In Person", "FB", "LinkedIn", "X/…"];

const DATA_ROWS = [0, 1];

const cellBase: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 10,
  padding: "10px 14px",
  fontSize: 13,
  fontWeight: 600,
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  lineHeight: 1.25,
};

const accentCell: React.CSSProperties = {
  ...cellBase,
  background: "rgba(40,96,178,0.18)",
  border: "1px solid rgba(40,96,178,0.4)",
  fontWeight: 700,
};

const byoBadge: React.CSSProperties = {
  background: "rgba(40,96,178,0.18)",
  border: "1px solid rgba(40,96,178,0.4)",
  borderRadius: 8,
  padding: "6px 12px",
  fontSize: 12,
  fontWeight: 700,
  color: "#FFFFFF",
  textAlign: "center",
  lineHeight: 1.25,
};

const sectionBorder: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
  padding: "12px",
};

const sectionTitle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  color: "#7EB3E8",
  margin: 0,
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
};

export default function SenthilCXPaaSArchSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "40px 100px 0", flexShrink: 0 }}
      >
        <p style={{
          fontWeight: 700, fontSize: 18, letterSpacing: "0.05em",
          textTransform: "uppercase", color: "#CCC7C3", margin: 0,
        }}>
          PLATFORM ARCHITECTURE
        </p>
        <h1 className="font-heading" style={{
          fontSize: 48, fontWeight: 500, color: "#FFFFFF",
          margin: "10px 0 0", lineHeight: 1.15,
        }}>
          Nextiva CXPaaS Architecture
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1, padding: "16px 80px 12px",
          display: "grid",
          gridTemplateColumns: "220px 1fr 1fr",
          gridTemplateRows: "auto auto auto auto auto",
          gap: 10, alignContent: "center",
        }}
      >
        {/* ── ROW 1: NEXT Studio (col 1) | CX Agent (col 2) | Customer Exp (col 3) ── */}

        {/* NEXT Studio */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            ...sectionBorder, gridColumn: "1", gridRow: "1 / 3",
            display: "flex", flexDirection: "column", gap: 10, alignSelf: "start",
            paddingBottom: 28,
          }}
        >
          <p style={sectionTitle}>
            NEXT Studio
          </p>
          {STUDIO_TOOLS.map((t, i) => (
            <div key={i} style={cellBase}>{t}</div>
          ))}
        </motion.div>

        {/* CX Agent (Human) Experiences */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            ...sectionBorder, gridColumn: "2", gridRow: "1",
            display: "flex", flexDirection: "column", gap: 12,
            padding: "16px 14px",
          }}
        >
          <p style={sectionTitle}>
            CX Agent (Human) Experiences
          </p>
          <div style={{ display: "flex", gap: 8, flex: 1, alignItems: "stretch" }}>
            <div style={{ ...cellBase, flex: 1, padding: "18px 12px", borderRadius: 12 }}>
              NEXT
            </div>
            <div style={{
              flex: 1, display: "flex", gap: 6,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 12, padding: 6,
            }}>
              <div style={{ ...accentCell, flex: 1, padding: "10px 8px", borderRadius: 10, fontSize: 12 }}>
                NEXT Embedded
              </div>
              <div style={{ ...accentCell, flex: 1, padding: "10px 8px", borderRadius: 10, fontSize: 12 }}>
                NEXT Cards + Workflows
              </div>
            </div>
          </div>
        </motion.div>

        {/* Customer Experiences (omnichannel) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            ...sectionBorder, gridColumn: "3", gridRow: "1",
            display: "flex", flexDirection: "column", gap: 8,
            padding: "16px 14px",
          }}
        >
            <p style={sectionTitle}>
              Customer Experiences (omnichannel)
            </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
            {CX_CHANNELS_ROW1.map((ch) => (
              <div key={ch} style={{ ...cellBase, padding: "10px 8px", fontSize: 12, borderRadius: 8 }}>{ch}</div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
            {CX_CHANNELS_ROW2.map((ch) => (
              <div key={ch} style={{
                ...(ch === "In Person" ? cellBase : accentCell),
                padding: "10px 8px", fontSize: 12, borderRadius: 8,
              }}>{ch}</div>
            ))}
          </div>
        </motion.div>

        {/* ── JOURNEYS + DATA PLATFORM: one container, cols 2-3 ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          style={{
            ...sectionBorder, gridColumn: "2 / 4", gridRow: "2 / 4",
            display: "flex", flexDirection: "column", gap: 8,
          }}
        >
          {/* Deterministic + Agentic Journeys */}
          <div style={{ ...cellBase, padding: "14px 18px", minHeight: 56, position: "relative" }}>
            <span style={{ lineHeight: 1.35, textAlign: "center" }}>
              Deterministic + Agentic Journeys<br />
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>(Programmable Flows + AI Agents)</span>
            </span>
            <div style={{ display: "flex", gap: 6, alignItems: "center", position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)" }}>
              <span style={{ ...cellBase, padding: "8px 14px", fontSize: 13, borderRadius: 8 }}>NextIQ</span>
              <span style={{ ...cellBase, padding: "8px 14px", fontSize: 13, borderRadius: 8 }}>XBERT</span>
              <span style={{ ...accentCell, padding: "8px 14px", fontSize: 13, borderRadius: 8 }}>BYO Agents</span>
              <span style={{ ...accentCell, padding: "8px 14px", fontSize: 13, borderRadius: 8 }}>BYO Flows</span>
            </div>
          </div>

          {/* Nextiva Customer Journal */}
          <div style={{ ...cellBase, padding: "18px 18px", minHeight: 56 }}>
            Nextiva Customer Journal
          </div>

          {/* Data platform 2x2 grid */}
          {DATA_ROWS.map((ri) => (
            <div key={ri} style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: 8, position: "relative",
            }}>
              <div style={{ ...cellBase, padding: "16px 16px", lineHeight: 1.35, position: "relative" }}>
                <span>{ri === 0
                  ? <>Cognitive & Assist Models for CX Agents<br /><span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>(AI + Human)</span></>
                  : <>Customer Data Model + Governance<br /><span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>(Data Store, Connectors)</span></>
                }</span>
                {ri === 0 && (
                  <span style={{
                    ...byoBadge, position: "absolute",
                    right: 10, top: "50%", transform: "translateY(-50%)", zIndex: 2,
                    lineHeight: 1.2,
                  }}>BYO<br />Models</span>
                )}
              </div>
              <div style={{ ...cellBase, padding: "16px 16px", lineHeight: 1.35, position: "relative" }}>
                <span>{ri === 0
                  ? "Analytics & Reporting"
                  : <>Business Data Model + Governance<br /><span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>(Data Store, Connectors)</span></>
                }</span>
                {ri === 0 && (
                  <span style={{
                    ...byoBadge, position: "absolute",
                    right: 10, top: "50%", transform: "translateY(-50%)", zIndex: 2,
                    lineHeight: 1.2,
                  }}>BYO<br />Analytics</span>
                )}
              </div>
            </div>
          ))}

          <p style={{ ...sectionTitle, margin: "6px 0 0" }}>
            Nextiva Data & Intelligence Platform
          </p>
        </motion.div>

        {/* ── BOTTOM: Data foundation buttons — cols 2-3 ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.48 }}
          style={{ gridColumn: "2 / 4", gridRow: "4", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
        >
          <div style={{
            background: "rgba(40,96,178,0.18)",
            border: "1px solid rgba(40,96,178,0.4)",
            borderRadius: 12, padding: "12px 24px", textAlign: "center",
          }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF" }}>
              Customer Data (1<sup>st</sup> & 3<sup>rd</sup> Party)
            </span>
          </div>
          <div style={{
            background: "rgba(40,96,178,0.18)",
            border: "1px solid rgba(40,96,178,0.4)",
            borderRadius: 12, padding: "12px 24px", textAlign: "center",
          }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF" }}>
              Business Data
            </span>
          </div>
        </motion.div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
