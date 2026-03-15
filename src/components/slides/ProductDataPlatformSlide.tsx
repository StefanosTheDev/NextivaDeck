"use client";
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
    subtitle: "Core Communication Platform",
  },
  {
    icon: Headset,
    name: "Experience Center",
    subtitle: "Programmable AI & CX Solutions",
  },
  {
    icon: Bot,
    name: "XBert",
    subtitle: "Agentic AI Engine",
  },
  {
    icon: Layers,
    name: "NEXT",
    subtitle: "Unified Front & Back Office",
  },
];

const VIEWBOX = "0 0 1000 800";

const puzzlePaths = [
  // TL — tab right, tab bottom
  "M 0 14 A 14 14 0 0 1 14 0 H 497 V 182 A 18 18 0 0 1 497 218 V 397 H 267 A 18 18 0 0 1 231 397 H 0 Z",
  // TR — notch left, tab bottom
  "M 503 0 H 986 A 14 14 0 0 1 1000 14 V 397 H 770 A 18 18 0 0 1 734 397 H 503 V 218 A 18 18 0 0 0 503 182 V 0 Z",
  // BL — tab right, notch top
  "M 0 403 H 231 A 18 18 0 0 0 267 403 H 497 V 582 A 18 18 0 0 1 497 618 V 786 A 14 14 0 0 1 486 800 H 0 Z",
  // BR — notch left, notch top
  "M 503 403 H 734 A 18 18 0 0 0 770 403 H 1000 V 786 A 14 14 0 0 1 986 800 H 503 V 618 A 18 18 0 0 0 503 582 V 403 Z",
];

const contentPositions = [
  { left: "0%", top: "0%", width: "49.7%", height: "49.6%" },
  { left: "50.3%", top: "0%", width: "49.7%", height: "49.6%" },
  { left: "0%", top: "50.4%", width: "49.7%", height: "49.6%" },
  { left: "50.3%", top: "50.4%", width: "49.7%", height: "49.6%" },
];

const dataCapabilities = [
  {
    icon: Database,
    title: "Structured + Unstructured Data",
    desc: "Every channel, every format, unified in one schema",
  },
  {
    icon: History,
    title: "Customer Interaction History",
    desc: "Complete timeline of every conversation and touchpoint",
  },
  {
    icon: ArrowLeftRight,
    title: "Cross-Product Intelligence",
    desc: "Insights flow between all four products in real time",
  },
  {
    icon: Brain,
    title: "AI Model Layer",
    desc: "Proprietary models trained on billions of real interactions",
  },
  {
    icon: Zap,
    title: "Real-Time Orchestration",
    desc: "Automated decisioning, routing, and workflow triggers",
  },
];

export default function ProductDataPlatformSlide({
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
          padding: "20px 80px 0",
          gap: 0,
          position: "relative",
        }}
      >
        {/* Left: Interlocking puzzle pieces */}
        <div
          style={{
            flex: "1 1 60%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 0,
            marginRight: 4,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1000 / 800",
              maxHeight: "100%",
            }}
          >
          <svg
            viewBox={VIEWBOX}
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
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                style={{
                  position: "absolute",
                  left: pos.left,
                  top: pos.top,
                  width: pos.width,
                  height: pos.height,
                  padding: "24px 26px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "rgba(40,96,178,0.15)",
                    border: "1px solid rgba(40,96,178,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <Icon size={19} color="#7EB3E8" strokeWidth={1.75} />
                </div>

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
                  {p.name}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#7EB3E8",
                    margin: "5px 0 0",
                    lineHeight: 1.3,
                  }}
                >
                  {p.subtitle}
                </p>
              </motion.div>
            );
          })}
          </div>
        </div>

        {/* SVG connector arrows */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 36,
            flexShrink: 0,
            margin: "0 4px",
          }}
        >
          <svg
            width="36"
            height="60%"
            viewBox="0 0 36 200"
            preserveAspectRatio="none"
            style={{ overflow: "visible" }}
          >
            <defs>
              <marker
                id="arrowHead"
                markerWidth="8"
                markerHeight="6"
                refX="7"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L8,3 L0,6" fill="#2860B2" />
              </marker>
              <filter id="arrowGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {[30, 75, 125, 170].map((y, i) => (
              <motion.line
                key={i}
                x1="0"
                y1={y}
                x2="30"
                y2={y}
                stroke="#2860B2"
                strokeWidth={2}
                strokeDasharray="6 4"
                markerEnd="url(#arrowHead)"
                filter="url(#arrowGlow)"
                opacity={0.7}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              />
            ))}
          </svg>
        </div>

        {/* Right: Intelligent Data Platform strip */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            flex: "0 0 30%",
            background:
              "linear-gradient(180deg, rgba(40,96,178,0.12) 0%, rgba(40,96,178,0.06) 100%)",
            border: "1px solid rgba(40,96,178,0.25)",
            borderRadius: 16,
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {/* Strip header */}
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
              THE ENGINE
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
              Intelligent Data Platform
            </h3>
            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.4)",
                margin: "6px 0 0",
                lineHeight: 1.4,
              }}
            >
              The shared layer fueling every product with compounding
              intelligence.
            </p>
          </div>

          {/* Capability boxes stacked vertically */}
          {dataCapabilities.map((cap, i) => {
            const CapIcon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: "3px solid rgba(40,96,178,0.5)",
                  borderRadius: 10,
                  padding: "12px 14px",
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 7,
                    background: "rgba(40,96,178,0.2)",
                    border: "1px solid rgba(40,96,178,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CapIcon size={14} color="#7EB3E8" strokeWidth={1.75} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: 13,
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
                      fontSize: 11,
                      color: "rgba(255,255,255,0.4)",
                      margin: "2px 0 0",
                      lineHeight: 1.3,
                    }}
                  >
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
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
