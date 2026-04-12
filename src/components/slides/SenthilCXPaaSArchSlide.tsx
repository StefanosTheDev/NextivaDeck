"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

interface LayerDef {
  label: string;
  sublabel?: string;
  items: string[];
  accent?: boolean;
}

const LAYERS: LayerDef[] = [
  {
    label: "Customer Experiences (omnichannel)",
    items: ["Voice", "Video", "In Person", "FB", "LinkedIn", "X/…"],
  },
  {
    label: "CX Agent (Human) Experiences",
    items: ["NEXT", "Search", "Live Chat", "NEXT Embedded"],
  },
  {
    label: "Deterministic + Agentic Journeys",
    sublabel: "Programmable Flows + AI Agents",
    items: ["NEXT Cards + Workflows"],
  },
  {
    label: "NEXT Studio",
    items: [
      "Customer Experience Designer",
      "CX Agent Experience Designer",
      "Data + AI Model Manager",
    ],
  },
  {
    label: "Nextiva Data & Intelligence Platform",
    accent: true,
    items: [
      "Customer Data Model + Governance",
      "Business Data Model + Governance",
      "Cognitive & Assist Models (AI + Human)",
      "Analytics & Reporting",
      "Nextiva Customer Journal",
      "XBERT",
      "NextIQ",
    ],
  },
];

const BYO = ["BYO Models", "BYO Analytics", "BYO Flows", "BYO Agents"];

const DATA_WINGS = {
  left: { label: "Customer Data", sublabel: "1st & 3rd Party" },
  right: { label: "Business Data", sublabel: "" },
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
        style={{ padding: "48px 100px 0", flexShrink: 0 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          PLATFORM ARCHITECTURE
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "10px 0 0",
            lineHeight: 1.15,
          }}
        >
          Nextiva CXPaaS Architecture
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "16px 80px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          justifyContent: "center",
        }}
      >
        {LAYERS.map((layer, i) => {
          const isDataLayer = i === LAYERS.length - 1;
          const isStudioLayer = layer.label === "NEXT Studio";
          return (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 + (LAYERS.length - 1 - i) * 0.08 }}
              style={{
                background: layer.accent
                  ? "rgba(40,96,178,0.15)"
                  : "rgba(255,255,255,0.04)",
                border: layer.accent
                  ? "1px solid rgba(40,96,178,0.35)"
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: isDataLayer ? "18px 28px" : "14px 28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: layer.accent ? "#7EB3E8" : "#FFFFFF",
                    }}
                  >
                    {layer.label}
                  </span>
                  {layer.sublabel && (
                    <span
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      ({layer.sublabel})
                    </span>
                  )}
                </div>
                {isDataLayer && (
                  <div style={{ display: "flex", gap: 16 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#7EB3E8" }}>
                      {DATA_WINGS.left.label}{" "}
                      <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.45)" }}>
                        ({DATA_WINGS.left.sublabel})
                      </span>
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#7EB3E8" }}>
                      {DATA_WINGS.right.label}
                    </span>
                  </div>
                )}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {layer.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.7)",
                      background: layer.accent
                        ? "rgba(40,96,178,0.2)"
                        : "rgba(255,255,255,0.04)",
                      border: layer.accent
                        ? "1px solid rgba(40,96,178,0.35)"
                        : "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 6,
                      padding: "4px 12px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
              {isStudioLayer && (
                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    marginTop: 8,
                    paddingTop: 8,
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {BYO.map((b) => (
                    <span
                      key={b}
                      style={{
                        fontSize: 12,
                        color: "rgba(255,255,255,0.45)",
                        background: "rgba(255,255,255,0.02)",
                        border: "1px dashed rgba(255,255,255,0.12)",
                        borderRadius: 6,
                        padding: "2px 8px",
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
