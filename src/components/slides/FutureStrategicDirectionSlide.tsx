"use client";

import { motion } from "framer-motion";
import {
  Sprout,
  Cpu,
  Focus,
  HeartHandshake,
  Handshake,
  Users,
  Gauge,
  Rocket,
  MessageSquare,
} from "lucide-react";
import SlideFooter from "../SlideFooter";
import SessionSectionNav from "./strategic-truths/SessionSectionNav";

const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

const PILLARS = [
  {
    icon: Sprout,
    title: "Grow the Base",
    body: "Primary growth strategy — from protecting to expanding customer value, adoption, and retention.",
  },
  {
    icon: Cpu,
    title: "AI Monetization",
    body: "Activate AI across the installed base — turn existing customers into AI buyers and raise revenue per account. The dawn of Nextiva as the end-to-end agentic AI company.",
  },
  {
    icon: Focus,
    title: "Focus Over Breadth",
    body: "Concentrated investment behind what has earned the right to scale. Complexity reduced.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-First Execution",
    body: "Product, GTM, and Operations align around segments where Nextiva consistently wins.",
  },
  {
    icon: Handshake,
    title: "Partnership-Led Acceleration",
    body: "Partnerships prioritized ahead of acquisitions until the installed-base model is proven.",
  },
  {
    icon: Users,
    title: "Revenue as Everyone's Responsibility",
    body: "Growth, expansion, retention distributed across the organization.",
  },
  {
    icon: Gauge,
    title: "Productivity as a Strategic Outcome",
    body: "Margin expansion and unit economics improve while growing.",
  },
  {
    icon: Rocket,
    title: "Product-Led Growth Acceleration",
    body: "Product-led, sales-plus-ecommerce motions — XBert and NEXT as the front door — lower CAC, accelerate time-to-value, and open new top-of-funnel reach.",
  },
];

export default function FutureStrategicDirectionSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background: "#FFFFFF",
        color: NAVY_DARK,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1400,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(40,96,178,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "26px 72px 0",
          textAlign: "center",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 14px",
            borderRadius: 999,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}55`,
            marginBottom: 10,
          }}
        >
          <span
            className="font-heading"
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: BLUE,
              letterSpacing: "-0.02em",
            }}
          >
            02
          </span>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
            }}
          >
            Direction
          </span>
        </div>

        <h1
          className="font-heading"
          style={{
            fontSize: 42,
            fontWeight: 600,
            color: NAVY_DARK,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          Strategic Direction.
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 16,
            color: BODY,
            margin: "8px auto 0",
            maxWidth: 1000,
            lineHeight: 1.5,
          }}
        >
          The directional assumptions the plan was built on.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        style={{
          flex: 1,
          padding: "20px 56px 8px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "1fr",
            gap: 12,
            flex: 1,
            minHeight: 0,
          }}
        >
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.14 + i * 0.05 }}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderTop: `4px solid ${BLUE}`,
                  borderRadius: 12,
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  boxShadow: "0 4px 14px rgba(6,26,55,0.04)",
                  minHeight: 0,
                }}
              >
                <span
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: BLUE_SOFT,
                    border: `1px solid ${BLUE}`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color={BLUE} strokeWidth={2.2} />
                </span>
                <h2
                  className="font-heading"
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: NAVY_DARK,
                    margin: 0,
                    lineHeight: 1.2,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {p.title}
                </h2>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 12.5,
                    color: BODY,
                    lineHeight: 1.45,
                  }}
                >
                  {p.body}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 22px",
            borderRadius: 12,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}33`,
          }}
        >
          <MessageSquare size={16} color={BLUE} strokeWidth={2.4} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
              flexShrink: 0,
            }}
          >
            Discussion
          </span>
          <span style={{ width: 1, height: 18, background: `${BLUE}55` }} />
          <p
            style={{
              margin: 0,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14,
              color: NAVY_DARK,
              lineHeight: 1.45,
              flex: 1,
            }}
          >
            Which of these should still be debated versus treated as embedded
            assumptions?
          </p>
        </div>

        <SessionSectionNav active="direction" />
      </motion.main>

      <footer
        style={{
          padding: "0 72px 14px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 12,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        FY27 Strategic Planning · Day 1 · Direction
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
