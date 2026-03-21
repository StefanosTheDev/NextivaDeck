"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Phone, Headphones, Bot, Layers } from "lucide-react";

const ACCENT = "#7EB3E8";
const ACCENT_STRONG = "#2860B2";

const products = [
  {
    Icon: Phone,
    name: "NextOS",
    badge: "All Customers",
    tagline: "Core Communication Platform.",
    bullets: [
      "AI-enabled communication",
      "Cross-product workflow automation",
      "Leverages XBert and NEXT AI capabilities",
    ],
  },
  {
    Icon: Headphones,
    name: "Experience Center",
    badge: "Enterprise & Verticals",
    tagline: "Programmable AI & CX Solutions.",
    bullets: [
      "Omnichannel engagement",
      "AI-assisted customer interactions",
      "Open API ecosystem & integrations",
    ],
  },
  {
    Icon: Bot,
    name: "XBert",
    badge: "All Nextiva Users",
    tagline: "Agentic AI for All Channels.",
    bullets: [
      "Agentic AI across voice, chat & email",
      "Autonomous handling of customer interactions 24/7",
      "Self-learning, always-improving agents",
    ],
  },
  {
    Icon: Layers,
    name: "NEXT",
    badge: "SMB & Mid-Market",
    tagline: "Unified Front & Back Office.",
    bullets: [
      "Unified data model across all products",
      "AI & human working in tandem",
      "Single source of customer truth",
    ],
  },
];

export default function CXPortfolioThomasSlide({ slideNumber = 59 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      data-speaker-notes="Nextiva's CX platform portfolio spans four major products serving all customer segments — all built on one unified platform."
    >
      <div
        style={{
          position: "absolute",
          top: -300,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(40,96,178,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, position: "relative", zIndex: 1 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 10px",
          }}
        >
          Our solution
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 64, fontWeight: 700, color: "#FFFFFF", marginTop: 10, lineHeight: 1.15 }}
        >
          Nextiva&apos;s CX Platform Portfolio.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "24px 100px 0", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 1 }}
      >
        {/* Foundation platform strip */}
        <div
          style={{
            width: "100%",
            background: `linear-gradient(180deg, rgba(40,96,178,0.15) 0%, rgba(6,26,55,0.4) 100%)`,
            border: `1px solid rgba(126,179,232,0.2)`,
            borderRadius: 12,
            padding: "16px 32px 18px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
          }}
        >
          <h3
            className="font-heading"
            style={{
              fontSize: 22,
              fontWeight: 600,
              fontStyle: "italic",
              color: ACCENT,
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Intelligent Data Platform
          </h3>
          <div style={{ display: "flex", gap: 14, width: "100%" }}>
            {[
              "Unified Structured & Unstructured Data",
              "Agentic AI",
              "Unified Front & Back Office",
            ].map((label) => (
              <div
                key={label}
                style={{
                  flex: 1,
                  padding: "10px 16px",
                  borderRadius: 24,
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(0,2,8,0.5)",
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Vertical connector lines from platform strip down into each card */}
        <div style={{ width: "100%", display: "flex", gap: 20, height: 20 }}>
          {products.map((p) => (
            <div key={p.name} style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: 2,
                  height: 20,
                  background: `linear-gradient(180deg, ${ACCENT} 0%, ${ACCENT_STRONG} 100%)`,
                  opacity: 0.6,
                }}
              />
            </div>
          ))}
        </div>

        {/* Product cards row */}
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: 20,
          }}
        >
          {products.map((p) => {
            const Icon = p.Icon;
            return (
              <article
                key={p.name}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderBottom: `3px solid ${ACCENT_STRONG}`,
                  borderRadius: "0 0 14px 14px",
                  padding: "20px 22px 24px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "rgba(40,96,178,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  <Icon size={22} color={ACCENT} strokeWidth={1.75} />
                </div>
                <h2
                  className="font-heading"
                  style={{ fontSize: 28, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}
                >
                  {p.name}
                </h2>
                <span
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    marginTop: 8,
                    padding: "4px 12px",
                    borderRadius: 20,
                    background: "rgba(40,96,178,0.15)",
                    color: ACCENT,
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  {p.badge}
                </span>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", margin: "14px 0 6px", lineHeight: 1.4 }}>
                  {p.tagline}
                </p>
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
                  {p.bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.6)",
                        lineHeight: 1.5,
                        marginBottom: 3,
                        paddingLeft: 14,
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 7,
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: ACCENT,
                        }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </motion.main>

      <div style={{ padding: "16px 100px 24px", position: "relative", zIndex: 1 }}>
        <div
          style={{
            background: "rgba(40,96,178,0.06)",
            border: "1px solid rgba(40,96,178,0.15)",
            borderRadius: 14,
            padding: "16px 40px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", margin: 0 }}>
            <span style={{ fontWeight: 700, color: "#FFFFFF" }}>Our innovation leading with AI</span>{" "}
            are built once and delivered across the entire product portfolio.
          </p>
        </div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
