"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Layers, Activity, DollarSign, Lock } from "lucide-react";

const ACCENT = "#7EB3E8";
const BLUE = "#2860B2";

const CX = 550;
const CY = 280;
const R = 210;

const flywheelNodes = [
  {
    icon: Layers,
    title: "Embedded Across the Platform",
    detail: "AI ships inside every product, not bolted on",
    x: CX,
    y: CY - R,
  },
  {
    icon: Activity,
    title: "More Interactions, More Usage",
    detail: "AI drives volume that grows the platform",
    x: CX + R,
    y: CY,
  },
  {
    icon: DollarSign,
    title: "New Monetization Models",
    detail: "Per-interaction, per-outcome, platform fees",
    x: CX,
    y: CY + R,
  },
  {
    icon: Lock,
    title: "Deepening Switching Costs",
    detail: "Each interaction makes the platform harder to leave",
    x: CX - R,
    y: CY,
  },
];

const arcs = [
  { d: "M 635,88 A 210,210 0 0,1 742,195", x1: 635, y1: 88, x2: 742, y2: 195 },
  { d: "M 742,365 A 210,210 0 0,1 635,472", x1: 742, y1: 365, x2: 635, y2: 472 },
  { d: "M 465,472 A 210,210 0 0,1 358,365", x1: 465, y1: 472, x2: 358, y2: 365 },
  { d: "M 358,195 A 210,210 0 0,1 465,88", x1: 358, y1: 195, x2: 465, y2: 88 },
];

export default function AIExpandsNextivaSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 30%, rgba(15,44,89,0.4) 0%, rgba(6,26,55,0.65) 45%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 14px",
          }}
        >
          AI & NEXTIVA
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          AI expands Nextiva &mdash; it does not disrupt it.
        </h1>
        <p
          style={{
            fontSize: 21,
            color: "rgba(255,255,255,0.5)",
            margin: "14px auto 0",
            lineHeight: 1.5,
            maxWidth: 740,
          }}
        >
          Every layer of AI makes the platform more valuable, more embedded,
          and harder to replace.
        </p>
      </motion.header>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", width: 1100, height: 560 }}>
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
            viewBox="0 0 1100 560"
            fill="none"
          >
            <defs>
              <marker
                id="flywheel-arrow"
                markerWidth={12}
                markerHeight={10}
                refX={10}
                refY={5}
                orient="auto"
              >
                <polygon
                  points="0,0 12,5 0,10"
                  fill={ACCENT}
                  fillOpacity={0.65}
                />
              </marker>
              {arcs.map((arc, i) => (
                <linearGradient
                  key={`grad-${i}`}
                  id={`arc-grad-${i}`}
                  gradientUnits="userSpaceOnUse"
                  x1={arc.x1}
                  y1={arc.y1}
                  x2={arc.x2}
                  y2={arc.y2}
                >
                  <stop offset="0%" stopColor={BLUE} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={ACCENT} stopOpacity={0.4} />
                </linearGradient>
              ))}
            </defs>

            {[130, 170].map((r) => (
              <motion.circle
                key={r}
                cx={CX}
                cy={CY}
                r={r}
                stroke="rgba(40,96,178,0.06)"
                strokeWidth={1}
                strokeDasharray="4 8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            ))}

            <circle
              cx={CX}
              cy={CY}
              r={R}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth={1}
            />

            {arcs.map((arc, i) => (
              <motion.path
                key={i}
                d={arc.d}
                stroke={`url(#arc-grad-${i})`}
                strokeWidth={2.5}
                markerEnd="url(#flywheel-arrow)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
              />
            ))}
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              position: "absolute",
              left: CX,
              top: CY,
              transform: "translate(-50%, -50%)",
              width: 90,
              height: 90,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(40,96,178,0.35) 0%, rgba(40,96,178,0.08) 70%, transparent 100%)",
              border: "1.5px solid rgba(126,179,232,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                inset: -20,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(40,96,178,0.18) 0%, transparent 70%)",
              }}
            />
            <span
              className="font-heading"
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: ACCENT,
                letterSpacing: "0.06em",
                position: "relative",
              }}
            >
              AI
            </span>
          </motion.div>

          {flywheelNodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                style={{
                  position: "absolute",
                  left: node.x,
                  top: node.y,
                  transform: "translate(-50%, -50%)",
                  width: 260,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: `3px solid ${BLUE}`,
                  borderRadius: 14,
                  padding: "18px 22px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: "rgba(40,96,178,0.15)",
                      border: "1px solid rgba(40,96,178,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color={ACCENT} strokeWidth={1.75} />
                  </div>
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {node.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.5)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {node.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        style={{ padding: "0 100px 16px", flexShrink: 0 }}
      >
        <div
          style={{
            background: "rgba(40,96,178,0.12)",
            border: "1px solid rgba(40,96,178,0.2)",
            borderRadius: 14,
            padding: "18px 36px",
            textAlign: "center",
          }}
        >
          <p
            className="font-heading"
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            Growth scales with interactions, not seats.
          </p>
        </div>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
