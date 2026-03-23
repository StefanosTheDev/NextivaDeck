"use client";
import React from "react";
import { motion } from "framer-motion";
import { Layers, Users, Zap, ShoppingCart, Timer } from "lucide-react";
import SlideFooter from "../SlideFooter";

const whyNextiva = [
  { icon: Layers, label: "Unified Interactions & Data" },
  { icon: Users, label: "Agentic & Human in Tandem" },
  { icon: ShoppingCart, label: "Go-to-Market Moat" },
  { icon: Zap, label: "Product-Led Motion" },
  { icon: Timer, label: "Quick Time to Value" },
];

export default function AgenticOpportunityAltDSlide({ slideNumber = 12 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      {/* ── Header ── */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 8px",
          }}
        >
          THE AGENTIC AI OPPORTUNITY
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 60, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}
        >
          The next workforce is Agentic
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", margin: "10px 0 0", lineHeight: 1.5 }}>
          Customer interactions handled by 25M CX workers today will ultimately be handled by AI employees.
        </p>
      </motion.header>

      {/* ── Two cards ── */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        style={{
          display: "flex",
          gap: 24,
          padding: "28px 100px 0",
          alignItems: "stretch",
          flex: 1,
        }}
      >
        {/* Left: The Crowded Space (smaller weight) */}
        <div
          style={{
            flex: "0 0 30%",
            background: "rgba(180,60,60,0.06)",
            border: "1px solid rgba(200,80,80,0.18)",
            borderRadius: 14,
            padding: "32px 28px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            opacity: 0.75,
          }}
        >
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#E07E7E",
              margin: "0 0 12px",
            }}
          >
            Enterprise CX
          </p>
          <p
            className="font-heading"
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1,
            }}
          >
            6M
          </p>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.5)",
              margin: "8px 0 0",
              lineHeight: 1.4,
            }}
          >
            seats in 250+ agent contact centers
          </p>

          <div style={{ flex: 1, minHeight: 16 }} />

          <h3
            className="font-heading"
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: "0 0 14px",
              lineHeight: 1.25,
            }}
          >
            The Crowded Space
          </h3>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>
            Fierce battle among incumbents for one-third of available contact center seats and less than 10% of
            global contact centers.
          </p>
          <ul style={{ margin: "14px 0 0", padding: 0, listStyle: "none" }}>
            {[
              "Large IT teams required",
              "6-figure budgets to deploy",
              "12–18 month timelines",
            ].map((g) => (
              <li
                key={g}
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.5,
                  marginBottom: 4,
                  paddingLeft: 18,
                  position: "relative",
                }}
              >
                <span style={{ position: "absolute", left: 0, color: "#E07E7E", fontWeight: 700 }}>
                  ✗
                </span>
                {g}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Nextiva's White Space (larger weight) */}
        <div
          style={{
            flex: 1,
            background: "rgba(40,96,178,0.08)",
            border: "1.5px solid rgba(126,179,232,0.25)",
            borderRadius: 14,
            padding: "32px 32px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {/* Gold badge */}
          <div
            style={{
              position: "absolute",
              top: -14,
              left: "50%",
              transform: "translateX(-50%)",
              background: "linear-gradient(135deg, #FFB800 0%, #E5A200 100%)",
              borderRadius: 20,
              padding: "6px 20px",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: "#000",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Nextiva&apos;s White Space
            </span>
          </div>

          {/* 19M hero number */}
          <div style={{ textAlign: "center", margin: "12px 0 4px" }}>
            <span
              className="font-heading"
              style={{
                fontSize: 80,
                fontWeight: 700,
                color: "#7EB3E8",
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              19M
            </span>
            <p
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "rgba(255,255,255,0.6)",
                margin: "4px 0 0",
              }}
            >
              existing CX agents —{" "}
              <span style={{ color: "#FFB800", fontWeight: 800, letterSpacing: "0.02em" }}>
                the massive underserved market
              </span>
            </p>
          </div>

          {/* Two sub-segments */}
          <div
            style={{
              display: "flex",
              gap: 16,
              margin: "20px 0 0",
              flex: 1,
            }}
          >
            {/* 12M card */}
            <div
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <p
                className="font-heading"
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                12M
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.6)",
                  margin: "8px 0 0",
                  lineHeight: 1.3,
                }}
              >
                contact center seats
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  margin: "4px 0 0",
                  lineHeight: 1.3,
                }}
              >
                in centers with &lt;250 agents
              </p>

              <div style={{ flex: 1, minHeight: 12 }} />

              <ul style={{ margin: 0, padding: 0, listStyle: "none", alignSelf: "stretch" }}>
                {[
                  "Most CX platforms ignore this segment",
                  "Solutions too expensive and complex",
                ].map((b) => (
                  <li
                    key={b}
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.5,
                      marginBottom: 4,
                      paddingLeft: 18,
                      position: "relative",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#34D399", fontWeight: 700 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Plus sign */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                className="font-heading"
                style={{ fontSize: 36, fontWeight: 700, color: "rgba(255,255,255,0.3)" }}
              >
                +
              </span>
            </div>

            {/* 7M card */}
            <div
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <p
                className="font-heading"
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                7M
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.6)",
                  margin: "8px 0 0",
                  lineHeight: 1.3,
                }}
              >
                businesses doing CX
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  margin: "4px 0 0",
                  lineHeight: 1.3,
                }}
              >
                without calling it a contact center
              </p>

              <div style={{ flex: 1, minHeight: 12 }} />

              <ul style={{ margin: 0, padding: 0, listStyle: "none", alignSelf: "stretch" }}>
                {[
                  "Invisible to legacy CX vendors",
                  "No platform built for their needs",
                ].map((b) => (
                  <li
                    key={b}
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.5,
                      marginBottom: 4,
                      paddingLeft: 18,
                      position: "relative",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#34D399", fontWeight: 700 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.main>

      {/* ── Why Nextiva Wins box — aligned under right card only ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          display: "flex",
          gap: 24,
          padding: "12px 100px 0",
          flexShrink: 0,
        }}
      >
        <div style={{ flex: "0 0 30%" }} />
        <div
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14,
            padding: "14px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#CCC7C3",
            }}
          >
            WHY NEXTIVA WINS
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {whyNextiva.map(({ icon: Icon, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "rgba(40,96,178,0.2)",
                    border: "1px solid rgba(40,96,178,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={14} color="#7EB3E8" />
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.55)",
                    textAlign: "center",
                    lineHeight: 1.25,
                    maxWidth: 100,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div style={{ flex: 1 }} />
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
