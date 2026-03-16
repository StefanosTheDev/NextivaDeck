"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Phone, Headset, Bot, Layers, Globe } from "lucide-react";

const cxProducts = [
  { icon: Phone, name: "NextOS" },
  { icon: Headset, name: "Experience Center" },
  { icon: Bot, name: "XBert" },
];

const platformLayers = [
  { label: "AI Orchestration Layer", opacity: 0.18 },
  { label: "Omnichannel Communication", opacity: 0.14 },
  { label: "Unified Data Model", opacity: 0.10 },
  { label: "Data & Integration Layer", opacity: 0.07 },
];

const ecosystemItems = [
  {
    icon: Layers,
    title: "NEXT",
    desc: "Unified front & back office for SMB & Mid-Market",
  },
  {
    icon: Globe,
    title: "Open Platform",
    desc: "APIs, integrations & partner ecosystem",
  },
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
        <p
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          OUR SOLUTION
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 60,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
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
        {/* Outer bordered container — mirrors Tableau's main box */}
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: 960,
            border: "1.5px solid rgba(40,96,178,0.45)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {/* Left section (~65%) — CX Platform */}
          <div
            style={{
              flex: "0 0 64%",
              background: "rgba(255,255,255,0.03)",
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
                  padding: "5px 16px",
                  borderRadius: 20,
                  background: "rgba(40,96,178,0.35)",
                  border: "1px solid rgba(40,96,178,0.5)",
                  color: "#7EB3E8",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
              >
                AI-Powered Platform
              </span>
            </motion.div>

            {/* Pre-built CX Products heading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "rgba(255,255,255,0.7)",
                margin: 0,
              }}
            >
              Pre-built CX Products
            </motion.p>

            {/* Product tiles row */}
            <div
              style={{
                display: "flex",
                gap: 24,
                justifyContent: "flex-start",
                marginBottom: 4,
              }}
            >
              {cxProducts.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                      minWidth: 100,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "rgba(40,96,178,0.15)",
                        border: "1px solid rgba(40,96,178,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={22} color="#7EB3E8" strokeWidth={1.75} />
                    </div>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#FFFFFF",
                        textAlign: "center",
                        lineHeight: 1.2,
                      }}
                    >
                      {p.name}
                    </span>
                  </motion.div>
                );
              })}
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

          {/* Right section (~36%) — NEXT Ecosystem */}
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
              NEXT
              <br />
              Ecosystem
            </h3>

            {/* Ecosystem items */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 36,
                width: "100%",
              }}
            >
              {ecosystemItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: "rgba(40,96,178,0.18)",
                        border: "1px solid rgba(40,96,178,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={24} color="#7EB3E8" strokeWidth={1.75} />
                    </div>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#FFFFFF",
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.45)",
                        margin: 0,
                        lineHeight: 1.4,
                        maxWidth: 180,
                      }}
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
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
