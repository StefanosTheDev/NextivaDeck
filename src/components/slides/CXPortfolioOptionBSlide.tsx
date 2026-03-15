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

export default function CXPortfolioOptionBSlide({ slideNumber = 38 }: { slideNumber?: number }) {
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
        style={{ flex: 1, padding: "24px 80px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "0 0", width: "100%", maxWidth: 1000 }}>
          {products.map((p, i) => {
            const Icon = p.Icon;
            const offsets: Record<number, string> = {
              0: "translate(-12px, -12px)",
              1: "translate(12px, -12px)",
              2: "translate(-12px, 12px)",
              3: "translate(12px, 12px)",
            };
            return (
              <div
                key={p.name}
                style={{
                  transform: offsets[i],
                  background: "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 20,
                  padding: "32px 28px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(240,168,140,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  borderTop: `4px solid ${CORAL}`,
                  zIndex: i === 0 || i === 3 ? 2 : 1,
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(240,168,140,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <Icon size={22} color={CORAL} strokeWidth={1.75} />
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 700, color: CORAL, margin: "0 0 8px" }}>{p.name}</h3>
                <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 16, background: "rgba(240,168,140,0.18)", color: CORAL, alignSelf: "flex-start" }}>{p.badge}</span>
                <p style={{ fontSize: 16, fontWeight: 600, color: "#FFF", margin: "14px 0 10px", lineHeight: 1.35 }}>{p.tagline}</p>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
                  {p.bullets.map((b, j) => (
                    <li key={j} style={{ marginBottom: 4 }}>{b}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </motion.main>

      <p style={{ padding: "0 100px 16px", fontSize: 13, color: "rgba(255,255,255,0.35)", textAlign: "center" }}>Option B: Overlapping rounded cards</p>
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
