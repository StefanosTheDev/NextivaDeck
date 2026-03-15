"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Phone, Headphones, Bot, Layers } from "lucide-react";

const CORAL = "#F0A88C";

const products = [
  { Icon: Phone, name: "NextOS", badge: "All Customers", tagline: "Core Communication Platform.", bullets: ["AI-enabled communication", "Cross-product workflow automation", "Leverages XBert and NEXT AI"] },
  { Icon: Headphones, name: "Experience Center", badge: "Enterprise & Verticals", tagline: "Programmable AI & CX Solutions.", bullets: ["Omnichannel engagement", "AI-assisted interactions", "Open API ecosystem"] },
  { Icon: Bot, name: "XBert", badge: "All Nextiva Users", tagline: "Agentic AI for All Channels.", bullets: ["Voice, chat & email", "Autonomous 24/7 handling", "Self-learning agents"] },
  { Icon: Layers, name: "NEXT", badge: "SMB & Mid-Market", tagline: "Unified Front & Back Office.", bullets: ["Unified data model", "AI & human in tandem", "Single customer truth"] },
];

export default function CXPortfolioOptionCSlide({ slideNumber = 39 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      data-speaker-notes="Nextiva's CX platform portfolio spans four major products serving all customer segments."
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, position: "relative", zIndex: 1 }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: CORAL, margin: "0 0 10px" }}>Our solution</p>
        <h1 className="font-heading" style={{ fontSize: 64, fontWeight: 700, color: "#FFFFFF", marginTop: 10, lineHeight: 1.15 }}>
          Nextiva&apos;s CX Platform Portfolio.
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", marginTop: 8 }}>Four products. One integrated platform.</p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "20px 80px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}
      >
        <div style={{ width: "100%", maxWidth: 1000, position: "relative" }}>
          {/* Puzzle-inspired central divider */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 480"
            preserveAspectRatio="none"
            style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.5 }}
          >
            <path
              d="M 500 0 Q 520 120 500 240 Q 480 120 500 0"
              fill="none"
              stroke={CORAL}
              strokeWidth={2}
              strokeDasharray="8 6"
              opacity={0.4}
            />
            <path
              d="M 0 240 Q 120 260 240 240 Q 120 220 0 240"
              fill="none"
              stroke={CORAL}
              strokeWidth={2}
              strokeDasharray="8 6"
              opacity={0.4}
            />
            <path
              d="M 500 240 Q 620 260 1000 240"
              fill="none"
              stroke={CORAL}
              strokeWidth={2}
              strokeDasharray="8 6"
              opacity={0.4}
            />
            <path
              d="M 500 240 Q 620 220 1000 240"
              fill="none"
              stroke={CORAL}
              strokeWidth={2}
              strokeDasharray="8 6"
              opacity={0.4}
            />
            <path
              d="M 240 240 Q 260 360 240 480"
              fill="none"
              stroke={CORAL}
              strokeWidth={2}
              strokeDasharray="8 6"
              opacity={0.4}
            />
            <path
              d="M 760 240 Q 740 360 760 480"
              fill="none"
              stroke={CORAL}
              strokeWidth={2}
              strokeDasharray="8 6"
              opacity={0.4}
            />
          </svg>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: 24,
              position: "relative",
              zIndex: 1,
            }}
          >
            {products.map((p) => {
              const Icon = p.Icon;
              return (
                <article
                  key={p.name}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 16,
                    padding: "28px 24px",
                    borderTop: `3px solid ${CORAL}`,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(240,168,140,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                    <Icon size={20} color={CORAL} strokeWidth={1.75} />
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: CORAL, margin: "0 0 6px" }}>{p.name}</h3>
                  <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 12, background: "rgba(240,168,140,0.18)", color: CORAL, alignSelf: "flex-start" }}>{p.badge}</span>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#FFF", margin: "12px 0 8px", lineHeight: 1.35 }}>{p.tagline}</p>
                  <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.55 }}>
                    {p.bullets.map((b, j) => (
                      <li key={j} style={{ marginBottom: 3 }}>{b}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </motion.main>

      <p style={{ padding: "0 100px 16px", fontSize: 13, color: "rgba(255,255,255,0.35)", textAlign: "center" }}>Option C: Card grid with puzzle divider</p>
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
