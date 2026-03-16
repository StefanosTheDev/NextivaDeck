"use client";
import { Fragment } from "react";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import {
  Phone,
  Headset,
  Bot,
  Layers,
  Database,
  History,
  ArrowLeftRight,
  Brain,
  Zap,
} from "lucide-react";

const products = [
  {
    icon: Phone,
    name: "NextOS",
    tag: "All Customers",
    subtitle: "Core Communication Platform.",
    bullets: [
      "AI-enabled communication",
      "Cross-product workflow automation",
      "Leverages XBert and NEXT AI capabilities",
    ],
  },
  {
    icon: Headset,
    name: "Experience Center",
    tag: "Enterprise & Verticals",
    subtitle: "Programmable AI & CX Solutions.",
    bullets: [
      "Omnichannel engagement",
      "AI-assisted customer interactions",
      "Open API ecosystem & integrations",
    ],
  },
  {
    icon: Bot,
    name: "XBert",
    tag: "All Nextiva Users",
    subtitle: "Agentic AI for All Channels.",
    bullets: [
      "Agentic AI across voice, chat & email",
      "Autonomous handling of customer interactions 24/7",
      "Self-learning, always-improving agents",
    ],
  },
  {
    icon: Layers,
    name: "NEXT",
    tag: "SMB & Mid-Market",
    subtitle: "Unified Front & Back Office.",
    bullets: [
      "Unified data model across all products",
      "AI & human working in tandem",
      "Single source of customer truth",
    ],
  },
];

const dataCapabilities = [
  {
    icon: Database,
    num: 1,
    title: "Structured + Unstructured Data",
    desc: "Every channel, every format, unified in one schema",
  },
  {
    icon: History,
    num: 2,
    title: "Customer Interaction History",
    desc: "Complete timeline of every conversation and touchpoint",
  },
  {
    icon: ArrowLeftRight,
    num: 3,
    title: "Cross-Product Intelligence",
    desc: "Insights flow between all four products in real time",
  },
  {
    icon: Brain,
    num: 4,
    title: "AI Model Layer",
    desc: "Proprietary models trained on billions of real interactions",
  },
  {
    icon: Zap,
    num: 5,
    title: "Real-Time Orchestration",
    desc: "Automated decisioning, routing, and workflow triggers",
  },
];

const cardStyle: React.CSSProperties = {
  flex: 1,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: "22px 16px",
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
};

const iconBoxStyle: React.CSSProperties = {
  width: 34,
  height: 34,
  borderRadius: 9,
  background: "rgba(40,96,178,0.15)",
  border: "1px solid rgba(40,96,178,0.25)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 10,
  flexShrink: 0,
};

export default function ProductDataPlatformCopySlide({
  slideNumber = 16,
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
        style={{ padding: "44px 80px 0", flexShrink: 0, textAlign: "center" }}
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
          Four Products. One Intelligent Data Platform.
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.45)",
            margin: "10px auto 0",
            lineHeight: 1.5,
            maxWidth: 740,
          }}
        >
          Every product connects to a shared data layer that gets smarter with
          every interaction.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          display: "flex",
          alignItems: "stretch",
          padding: "24px 60px 0",
          gap: 0,
        }}
      >
        {products.map((p, i) => {
          const Icon = p.icon;
          return (
            <Fragment key={p.name}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                style={cardStyle}
              >
                <div style={iconBoxStyle}>
                  <Icon size={17} color="#7EB3E8" strokeWidth={1.75} />
                </div>

                <h3
                  className="font-heading"
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {p.name}
                </h3>

                <span
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    padding: "2px 8px",
                    borderRadius: 6,
                    background: "rgba(40,96,178,0.25)",
                    color: "#7EB3E8",
                    fontSize: 9,
                    fontWeight: 600,
                    marginTop: 6,
                  }}
                >
                  {p.tag}
                </span>

                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.85)",
                    margin: "10px 0 0",
                    lineHeight: 1.3,
                  }}
                >
                  {p.subtitle}
                </p>

                <ul
                  style={{ listStyle: "none", padding: 0, margin: "8px 0 0" }}
                >
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: 11,
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.45,
                        paddingLeft: 12,
                        position: "relative",
                        marginBottom: 3,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 6,
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.3)",
                        }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {i < 3 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 24,
                    flexShrink: 0,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <line
                      x1="2"
                      y1="12"
                      x2="16"
                      y2="12"
                      stroke="#2860B2"
                      strokeWidth={1.5}
                      strokeDasharray="3 2"
                      opacity={0.5}
                    />
                    <path
                      d="M14,8 L20,12 L14,16"
                      fill="none"
                      stroke="#2860B2"
                      strokeWidth={1.5}
                      opacity={0.5}
                    />
                  </svg>
                </div>
              )}
            </Fragment>
          );
        })}

        <div style={{ width: 20, flexShrink: 0 }} />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={cardStyle}
        >
          <div style={iconBoxStyle}>
            <Database size={17} color="#7EB3E8" strokeWidth={1.75} />
          </div>

          <p
            style={{
              fontWeight: 700,
              fontSize: 9,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#7EB3E8",
              margin: "0 0 4px",
            }}
          >
            THE ENGINE
          </p>

          <h3
            className="font-heading"
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Intelligent Data Platform
          </h3>

          <p
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.4)",
              margin: "6px 0 10px",
              lineHeight: 1.4,
            }}
          >
            The shared layer fueling every product with compounding intelligence.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {dataCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.65 + i * 0.06 }}
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "rgba(40,96,178,0.2)",
                    border: "1px solid rgba(40,96,178,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#7EB3E8",
                  }}
                >
                  {cap.num}
                </div>
                <div style={{ minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {cap.title}
                  </p>
                  <p
                    style={{
                      fontSize: 9,
                      color: "rgba(255,255,255,0.4)",
                      margin: "1px 0 0",
                      lineHeight: 1.3,
                    }}
                  >
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ padding: "0 60px 8px", flexShrink: 0 }}
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
              One platform, compounding intelligence
            </span>{" "}
            — every interaction across every product makes the entire system
            smarter.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
