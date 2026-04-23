"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Layers,
  Medal,
  Network,
  RadioTower,
  type LucideIcon,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const ACCENT = "#4A9EF2";
const CARD_BG = "rgba(12, 36, 72, 0.55)";

type VerticalsCard = {
  id: string;
  icon: LucideIcon;
  title: string;
  subtext?: string;
};

const cards: VerticalsCard[] = [
  {
    id: "tam-verticals",
    icon: BarChart3,
    title: "Large TAM Verticals Prioritized",
    subtext:
      "Healthcare, Financial Services, Highly Distributed Franchises/Enterprises. Other verticals to follow.",
  },
  {
    id: "secret-sauce",
    icon: Network,
    title: "Our secret weapon is a market our competitors ignore",
    subtext:
      "Distributed franchises and enterprises, dozens to hundreds of locations, underserved and ready.",
  },
  {
    id: "platform-pillars",
    icon: Layers,
    title: "Unified CX Platform, six-pillar product strategy approach",
    subtext:
      "CX First, Human + AI in Tandem, Conversational Commerce, Bespoke-at-Scale, Trustworthy, Reasoning over Data.",
  },
  {
    id: "gtm-leverage",
    icon: RadioTower,
    title: "Go to Market Strategy: Combine direct sales with channel partner leverage.",
    subtext: "Matrix Vertical Specialists + Strong Domain Channel Partnerships for Scale.",
  },
  {
    id: "deployment",
    icon: Medal,
    title: "Deep knowledge of customer use cases by verticals.",
    subtext: "Repeatable, scalable, fast.",
  },
];

export default function VerticalsStrategySlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 88% 58% at 50% 38%, rgba(88,166,255,0.12) 0%, transparent 55%), radial-gradient(ellipse 92% 78% at 50% 12%, rgba(15,44,89,0.48) 0%, rgba(6,26,55,0.72) 48%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        style={{
          padding: "28px 96px 0",
          flexShrink: 0,
          display: "flex",
          gap: 28,
          alignItems: "flex-start",
          position: "relative",
          zIndex: 1,
        }}
      >
        <img
          src="/images/nextiva-logo-white.svg"
          alt=""
          width={132}
          height={28}
          style={{ flexShrink: 0, marginTop: 4 }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="eyebrow eyebrow--light" style={{ margin: "0 0 10px" }}>
            Verticals Strategy
          </p>
          <h1
            className="font-heading"
            style={{
              fontSize: 52,
              fontWeight: 600,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.12,
              maxWidth: 1600,
            }}
          >
            {"Nextiva's Agentic CX Strategy"}
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.48)",
              margin: "8px 0 0",
              lineHeight: 1.45,
              maxWidth: 1180,
            }}
          >
            {
              "Five key elements form the foundation of our verticals approach. Our customers trust Nextiva to be their key and first AI partner."
            }
          </p>
        </div>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        style={{
          flex: 1,
          padding: "10px 96px 6px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          minHeight: 0,
        }}
      >
        {cards.map((card, i) => {
          const Icon = card.icon;
          const long = card.title.length > 62;
          return (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.38, delay: 0.18 + i * 0.06 }}
              style={{
                flex: 1,
                minHeight: 0,
                background: CARD_BG,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.08)",
                borderLeft: `4px solid ${ACCENT}`,
                boxShadow: `inset 6px 0 28px rgba(74,158,242,0.12)`,
                padding: "12px 28px 12px 22px",
                display: "flex",
                alignItems: "center",
                gap: 22,
              }}
            >
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 11,
                  background: "rgba(40,96,178,0.22)",
                  border: "1px solid rgba(74,158,242,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={26} color={ACCENT} strokeWidth={1.85} />
              </div>
              <div
                style={{
                  flex: 1,
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: long ? 21 : 24,
                    fontWeight: 700,
                    color: ACCENT,
                    lineHeight: 1.28,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {card.title}
                </h2>
                {card.subtext ? (
                  <p
                    style={{
                      margin: 0,
                      fontSize: 17,
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.78)",
                      lineHeight: 1.45,
                      maxWidth: 1580,
                    }}
                  >
                    {card.subtext}
                  </p>
                ) : null}
              </div>
            </motion.article>
          );
        })}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
