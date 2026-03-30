"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const topCards = [
  { number: 1, title: "True Omni-Channel\nCommunications Engine" },
  { number: 2, title: "Unified Data Architecture\npowering Agentic AI" },
  { number: 3, title: "Unified Front & Back Office\nacross Customer Functions" },
];

const platformLayers = [
  { label: "AI Orchestration Layer", opacity: 0.07 },
  { label: "Omnichannel Communication", opacity: 0.10 },
  { label: "Unified Data Model", opacity: 0.14 },
  { label: "Data & Integration Layer", opacity: 0.18 },
];

const dataModelItems = [
  { label: "Unstructured Data", desc: "All customer interactions" },
  { label: "Structured Data", desc: "CRM, ERP, Billing records" },
  { label: "3rd Party Data", desc: "Social, reviews, public data" },
];


export default function CXPortfolioArchSlide({
  slideNumber = 20,
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
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          PLATFORM ARCHITECTURE
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}
        >
          Nextiva&apos;s CX Platform Portfolio.
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.45)",
            margin: "14px auto 0",
            lineHeight: 1.5,
            maxWidth: 720,
          }}
        >
          Agentic CX, powered by AI.
        </p>
      </motion.header>

      {/* Main architecture diagram */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 100px 0",
        }}
      >
        {/* Outer bordered container */}
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: 1040,
            border: "1.5px solid rgba(40,96,178,0.45)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {/* Left section (~64%) */}
          <div
            style={{
              flex: "0 0 64%",
              background: "rgba(255,255,255,0.06)",
              padding: "28px 32px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "6px 18px",
                  borderRadius: 20,
                  background: "rgba(6,26,55,0.9)",
                  border: "1px solid rgba(40,96,178,0.4)",
                  color: "#FFFFFF",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
              >
                AI-Powered Platform
              </span>
            </motion.div>

            {/* Three numbered cards */}
            <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
              {topCards.map((card, i) => (
                <motion.div
                  key={card.number}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  style={{
                    flex: 1,
                    borderRadius: 12,
                    overflow: "hidden",
                    border: "1px solid rgba(40,96,178,0.3)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      background: `linear-gradient(135deg, rgba(40,96,178,${0.75 - i * 0.12}) 0%, rgba(40,96,178,${0.45 - i * 0.08}) 100%)`,
                      padding: "8px 0",
                      textAlign: "center",
                    }}
                  >
                    <span
                      className="font-heading"
                      style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", lineHeight: 1 }}
                    >
                      {card.number}
                    </span>
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      padding: "14px 12px",
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#FFFFFF",
                        margin: 0,
                        textAlign: "center",
                        lineHeight: 1.35,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {card.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stacked layer bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {platformLayers.map((layer, i) => (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  style={{
                    background: `rgba(40,96,178,${layer.opacity})`,
                    border: "1px solid rgba(40,96,178,0.2)",
                    borderLeft: "4px solid rgba(40,96,178,0.5)",
                    borderRadius: 10,
                    padding: "12px 20px",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {layer.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vertical divider */}
          <div
            style={{
              width: 1.5,
              background: "rgba(40,96,178,0.45)",
              flexShrink: 0,
            }}
          />

          {/* Right section (~36%) — Unified Data Model */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.02)",
              padding: "28px 28px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3
              className="font-heading"
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "0 0 8px",
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              Unified Data
              <br />
              Model
            </h3>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: "0 0 20px", textAlign: "center" }}>
              The foundation powering every AI decision
            </p>

            {/* Data type cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                width: "100%",
                flex: 1,
                justifyContent: "center",
              }}
            >
              {dataModelItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  style={{
                    background: "rgba(40,96,178,0.1)",
                    border: "1px solid rgba(40,96,178,0.25)",
                    borderRadius: 10,
                    padding: "14px 16px",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", margin: "4px 0 0" }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </motion.main>

      {/* Bottom takeaway bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{ padding: "0 100px 8px", flexShrink: 0 }}
      >
        <div
          style={{
            background: "rgba(40,96,178,0.12)",
            border: "1px solid rgba(40,96,178,0.2)",
            borderRadius: 14,
            padding: "18px 40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 17,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            <span style={{ fontWeight: 700, color: "#7EB3E8" }}>
              One platform, built once
            </span>{" "}
            — AI innovations delivered across the entire product portfolio.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
