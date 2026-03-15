"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import {
  Phone,
  Headset,
  Bot,
  Layers,
  Database,
  Users,
  Brain,
  ArrowLeftRight,
  BarChart3,
  Workflow,
} from "lucide-react";

const products = [
  {
    icon: Phone,
    name: "NextOS",
    tag: "All Customers",
    tagBg: "rgba(40,96,178,0.25)",
    tagColor: "#7EB3E8",
    subtitle: "Core Communication Platform.",
  },
  {
    icon: Headset,
    name: "Experience Center",
    tag: "Enterprise & Verticals",
    tagBg: "rgba(40,96,178,0.25)",
    tagColor: "#7EB3E8",
    subtitle: "Programmable AI & CX Solutions.",
  },
  {
    icon: Bot,
    name: "XBert",
    tag: "All Nextiva Users",
    tagBg: "rgba(40,96,178,0.25)",
    tagColor: "#7EB3E8",
    subtitle: "Agentic AI for All Channels.",
  },
  {
    icon: Layers,
    name: "NEXT",
    tag: "SMB & Mid-Market",
    tagBg: "rgba(212,149,107,0.25)",
    tagColor: "#D4956B",
    subtitle: "Unified Front & Back Office.",
  },
];

const puzzlePaths = [
  "M 0 14 A 14 14 0 0 1 14 0 H 497 V 106 A 18 18 0 0 1 497 142 V 247 H 267 A 18 18 0 0 1 231 247 H 0 Z",
  "M 503 0 H 986 A 14 14 0 0 1 1000 14 V 247 H 770 A 18 18 0 0 1 734 247 H 503 V 142 A 18 18 0 0 0 503 106 V 0 Z",
  "M 0 253 H 231 A 18 18 0 0 0 267 253 H 497 V 359 A 18 18 0 0 1 497 395 V 500 H 14 A 14 14 0 0 1 0 486 Z",
  "M 503 253 H 734 A 18 18 0 0 0 770 253 H 1000 V 486 A 14 14 0 0 1 986 500 H 503 V 395 A 18 18 0 0 0 503 359 V 253 Z",
];

const contentPositions = [
  { left: "0%", top: "0%", width: "49.7%", height: "49.4%" },
  { left: "50.3%", top: "0%", width: "49.7%", height: "49.4%" },
  { left: "0%", top: "50.6%", width: "49.7%", height: "49.4%" },
  { left: "50.3%", top: "50.6%", width: "49.7%", height: "49.4%" },
];

const capabilities = [
  {
    icon: Database,
    title: "Unified Data Model",
    desc: "Single schema across all products",
  },
  {
    icon: Users,
    title: "Customer 360",
    desc: "Complete view of every interaction",
  },
  {
    icon: Brain,
    title: "AI Orchestration",
    desc: "Real-time routing, decisioning & automation",
  },
  {
    icon: ArrowLeftRight,
    title: "Cross-Product Intelligence",
    desc: "Insights flow between NextOS, XBert & EC",
  },
  {
    icon: BarChart3,
    title: "Interaction Analytics",
    desc: "Conversation patterns, sentiment & trends",
  },
  {
    icon: Workflow,
    title: "Workflow Engine",
    desc: "Automated actions triggered by data signals",
  },
];

export default function CXPortfolioDataSlide({
  slideNumber = 15,
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
        style={{ padding: "48px 80px 0", flexShrink: 0, textAlign: "center" }}
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
            fontSize: 17,
            color: "rgba(255,255,255,0.45)",
            margin: "10px auto 0",
            lineHeight: 1.5,
            maxWidth: 720,
          }}
        >
          Four products, one intelligent data platform — unified by design.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          gap: 32,
          padding: "12px 80px 0",
        }}
      >
        {/* Left: Puzzle pieces */}
        <div
          style={{
            position: "relative",
            width: "55%",
            aspectRatio: "1000 / 500",
            flexShrink: 0,
          }}
        >
          <svg
            viewBox="0 0 1000 500"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {puzzlePaths.map((d, i) => (
              <path
                key={i}
                d={d}
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.10)"
                strokeWidth={1.5}
                strokeLinejoin="round"
              />
            ))}
          </svg>

          {products.map((p, i) => {
            const pos = contentPositions[i];
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                style={{
                  position: "absolute",
                  left: pos.left,
                  top: pos.top,
                  width: pos.width,
                  height: pos.height,
                  padding: "20px 22px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "rgba(40,96,178,0.15)",
                    border: "1px solid rgba(40,96,178,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 6,
                  }}
                >
                  <Icon size={16} color="#7EB3E8" strokeWidth={1.75} />
                </div>

                <h2
                  className="font-heading"
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {p.name}
                </h2>

                <span
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    padding: "1px 8px",
                    borderRadius: 5,
                    background: p.tagBg,
                    color: p.tagColor,
                    fontSize: 9,
                    fontWeight: 600,
                    marginTop: 4,
                  }}
                >
                  {p.tag}
                </span>

                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.7)",
                    margin: "6px 0 0",
                    lineHeight: 1.3,
                  }}
                >
                  {p.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div
          style={{
            width: 1,
            alignSelf: "stretch",
            background:
              "linear-gradient(to bottom, transparent, rgba(40,96,178,0.4), transparent)",
            flexShrink: 0,
          }}
        />

        {/* Right: Intelligent Data Platform */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div style={{ marginBottom: 4 }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7EB3E8",
                margin: "0 0 6px",
              }}
            >
              INTELLIGENT DATA PLATFORM
            </p>
            <h3
              className="font-heading"
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              The engine behind every product.
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                margin: "6px 0 0",
                lineHeight: 1.45,
              }}
            >
              NEXT unifies data across the portfolio so every product gets
              smarter with every interaction.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
            }}
          >
            {capabilities.map((cap, i) => {
              const CapIcon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 + i * 0.06 }}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 10,
                    padding: "14px 14px",
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 7,
                      background: "rgba(40,96,178,0.18)",
                      border: "1px solid rgba(40,96,178,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CapIcon size={14} color="#7EB3E8" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#FFFFFF",
                        margin: 0,
                        lineHeight: 1.25,
                      }}
                    >
                      {cap.title}
                    </p>
                    <p
                      style={{
                        fontSize: 11,
                        color: "rgba(255,255,255,0.45)",
                        margin: "3px 0 0",
                        lineHeight: 1.35,
                      }}
                    >
                      {cap.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.main>

      {/* Bottom takeaway bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ padding: "0 80px 8px", flexShrink: 0 }}
      >
        <div
          style={{
            background: "rgba(40,96,178,0.12)",
            border: "1px solid rgba(40,96,178,0.2)",
            borderRadius: 14,
            padding: "16px 40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 16,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            <span style={{ fontWeight: 700, color: "#7EB3E8" }}>
              Our innovation leading with AI
            </span>{" "}
            are built once and delivered across the entire product portfolio.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
