"use client";
import React from "react";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const vulnerableItems = [
  "Knowledge management",
  "Simple CRM",
  "Reporting / BI tools",
  "Helpdesk ticketing",
];

const dataNoInfraItems = [
  "Conversational AI point solutions",
  "Chat-only platforms",
  "Analytics SaaS",
];

const infraNoDataItems = [
  "Legacy on-prem PBX",
  "Traditional telecom carriers",
];

const dotStyle = (color: string): React.CSSProperties => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  background: color,
  flexShrink: 0,
  opacity: 0.7,
});

export default function AiDefensibilityMatrixSlide({ slideNumber = 12 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "40px 80px 0", flexShrink: 0 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 8px",
          }}
        >
          AI DEFENSIBILITY
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Where We Sit When AI Reshapes SaaS
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.45)",
            margin: "10px 0 0",
            lineHeight: 1.5,
            maxWidth: 820,
          }}
        >
          Companies with deep infrastructure and proprietary real-time data are
          insulated. Those with thin application layers and static data are not.
        </p>
      </motion.header>

      {/* Matrix */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 80px 0",
        }}
      >
        <div style={{ flex: 0.75, position: "relative", width: "75%" }}>
          {/* Axis labels positioned on grid divider lines */}

          {/* "Thin Application Layer" — centered between two bottom boxes */}
          <span
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translate(-50%, 50%)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#7EB3E8",
              whiteSpace: "nowrap",
              zIndex: 2,
              background: "rgba(0,2,8,0.9)",
              padding: "3px 12px",
            }}
          >
            Thin Application Layer
          </span>

          {/* "Deep Infrastructure Stack" — centered between two top boxes */}
          <span
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#7EB3E8",
              whiteSpace: "nowrap",
              zIndex: 2,
              background: "rgba(0,2,8,0.9)",
              padding: "3px 12px",
            }}
          >
            Deep Infrastructure Stack
          </span>

          {/* "Static / Replicable Data" — on horizontal divider, straddling left edge */}
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translate(-40%, -50%)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#7EB3E8",
              whiteSpace: "nowrap",
              zIndex: 2,
              background: "rgba(0,2,8,0.9)",
              padding: "3px 12px",
            }}
          >
            Static / Replicable Data
          </span>

          {/* "Proprietary Real-Time Data" — on horizontal divider, straddling right edge */}
          <span
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translate(40%, -50%)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#7EB3E8",
              whiteSpace: "nowrap",
              zIndex: 2,
              background: "rgba(0,2,8,0.9)",
              padding: "3px 12px",
            }}
          >
            Proprietary Real-Time Data
          </span>

          {/* 2×2 grid */}
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: 3,
              position: "relative",
            }}
          >
            {/* ── Top-left: Data Without Infrastructure ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                background: "rgba(220,180,60,0.05)",
                border: "1px solid rgba(220,180,60,0.12)",
                borderRadius: "14px 4px 4px 4px",
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#E0B87E",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  margin: "0 0 4px",
                  textAlign: "center",
                }}
              >
                Partially Exposed
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.3)",
                  margin: "0 0 14px",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Data Without Infrastructure
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {dataNoInfraItems.map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div style={dotStyle("#E0B87E")} />
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Top-right: Defensible — Nextiva ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              style={{
                background: "rgba(40,96,178,0.10)",
                border: "1px solid rgba(40,96,178,0.3)",
                borderRadius: "4px 14px 4px 4px",
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                position: "relative",
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#7EB3E8",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  margin: 0,
                  position: "absolute",
                  top: 20,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                }}
              >
                AI-Proof
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 14,
                  marginTop: "15%",
                  marginRight: "12%",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/nextiva-logo-white.svg"
                  alt="Nextiva"
                  style={{
                    width: 160,
                    height: "auto",
                    filter: "drop-shadow(0 0 24px rgba(126,179,232,0.35))",
                  }}
                />

                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.55)",
                    textAlign: "center",
                    maxWidth: 280,
                    lineHeight: 1.45,
                    margin: 0,
                  }}
                >
                  Real-time conversational data
                  <br />+ regulated telecom infrastructure
                </p>
              </div>
            </motion.div>

            {/* ── Bottom-left: Vulnerable ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{
                background: "rgba(220,70,70,0.07)",
                border: "1px solid rgba(220,70,70,0.18)",
                borderRadius: "4px 4px 4px 14px",
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#E07E7E",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  margin: "0 0 4px",
                  textAlign: "center",
                }}
              >
                Easily Replaced by AI
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.3)",
                  margin: "0 0 14px",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Thin Apps + Static Data
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {vulnerableItems.map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div style={dotStyle("#E07E7E")} />
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Bottom-right: Infrastructure Without Data ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                background: "rgba(220,180,60,0.05)",
                border: "1px solid rgba(220,180,60,0.12)",
                borderRadius: "4px 4px 14px 4px",
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#E0B87E",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  margin: "0 0 4px",
                  textAlign: "center",
                }}
              >
                Partially Exposed
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.3)",
                  margin: "0 0 14px",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Infrastructure Without Data
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {infraNoDataItems.map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div style={dotStyle("#E0B87E")} />
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.main>

      {/* Bottom ribbon */}
      <div style={{ padding: "14px 80px 0", textAlign: "center" }}>
        <p
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#7EB3E8",
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          The further top-right, the harder to displace. Nextiva sits where AI
          cannot reach.
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
