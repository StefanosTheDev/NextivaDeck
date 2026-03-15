"use client";
import React from "react";
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

// Jigsaw pieces: tabs (bump out) and notches (dent in). Pieces with tabs need overflow so the tab extends into the gap.
// TL: tab RIGHT, tab BOTTOM | TR: notch LEFT, tab BOTTOM | BL: tab RIGHT, notch TOP | BR: notch LEFT, notch TOP
const pieceClipPaths = [
  "polygon(0 0, 100% 0, 100% 42%, 112% 50%, 100% 58%, 100% 100%, 92% 100%, 50% 112%, 8% 100%, 0 100%)", // TL
  "polygon(0 0, 100% 0, 100% 100%, 92% 100%, 50% 112%, 8% 100%, 0 100%, 0 58%, -12% 50%, 0 42%)",     // TR
  "polygon(0 0, 8% 0, 50% -12%, 92% 0, 100% 0, 100% 42%, 112% 50%, 100% 58%, 100% 100%, 0 100%)",     // BL
  "polygon(92% 0, 50% -12%, 8% 0, 0 0, 0 42%, -12% 50%, 0 58%, 0 100%, 100% 100%, 100% 0)",           // BR
];
// Pieces 0,1 have bottom tab; 0,2 have right tab - extend those edges into the gap
const pieceOverflow: Record<number, React.CSSProperties> = {
  0: { marginRight: -18, marginBottom: -18, width: "calc(100% + 18px)", height: "calc(100% + 18px)" },
  1: { marginBottom: -18, height: "calc(100% + 18px)" },
  2: { marginRight: -18, width: "calc(100% + 18px)" },
  3: {},
};

export default function CXPortfolioOptionASlide({ slideNumber = 37 }: { slideNumber?: number }) {
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
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, padding: "20px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 14, maxHeight: 460, position: "relative", zIndex: 1, overflow: "visible" }}
      >
        {products.map((p, i) => {
          const Icon = p.Icon;
          return (
            <div
              key={p.name}
              style={{
                ...pieceOverflow[i],
                overflow: "visible",
                clipPath: pieceClipPaths[i],
                background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                border: "2px solid rgba(240,168,140,0.5)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                filter: "drop-shadow(0 0 2px rgba(240,168,140,0.4))",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(240,168,140,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                <Icon size={20} color={CORAL} strokeWidth={1.75} />
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: CORAL, margin: "0 0 6px" }}>{p.name}</h3>
              <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 12, background: "rgba(240,168,140,0.2)", color: CORAL, alignSelf: "flex-start" }}>{p.badge}</span>
              <p style={{ fontSize: 15, fontWeight: 600, color: "#FFF", margin: "12px 0 8px", lineHeight: 1.3 }}>{p.tagline}</p>
              <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.55 }}>
                {p.bullets.map((b, j) => (
                  <li key={j} style={{ marginBottom: 2 }}>{b}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </motion.main>

      <p style={{ padding: "0 100px 16px", fontSize: 13, color: "rgba(255,255,255,0.35)", textAlign: "center" }}>Option A: Jigsaw tabs & notches (snap-together visible)</p>
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
