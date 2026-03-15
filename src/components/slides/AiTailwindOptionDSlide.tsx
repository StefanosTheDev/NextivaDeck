"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const howWeWin = [
  "Embedded AI → expansion",
  "XBert + NEXT → new entry points",
  "Real-conversation data → moat",
];

const proofPoints = [
  { stat: "22%", label: "AI bookings (FY26)" },
  { stat: "31%+", label: "by FY28" },
  { stat: "50%+ CAGR", label: "AI bookings growth" },
  { stat: "Additive", label: "New revenue" },
];

export default function AiTailwindOptionDSlide({ slideNumber = 53 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "48px 80px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 8px" }}>
          AI TAILWIND — OPTION D
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AI is the tailwind — not the thesis.
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: "10px 0 0", lineHeight: 1.5 }}>
          Two-column: How we win | Proof points.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", gap: 32, padding: "24px 80px", alignItems: "center" }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
          <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#7EB3E8", margin: 0 }}>
            How we win
          </p>
          {howWeWin.map((line, i) => (
            <div
              key={line}
              style={{
                padding: "20px 24px",
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                borderLeft: "4px solid #2860B2", borderRadius: 12,
              }}
            >
              <p style={{ fontSize: 20, fontWeight: 600, color: "#FFFFFF", margin: 0 }}>{line}</p>
            </div>
          ))}
        </div>

        <div style={{ width: 2, height: 240, background: "rgba(40,96,178,0.4)", borderRadius: 1, flexShrink: 0 }} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
          <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#7EB3E8", margin: 0 }}>
            Proof points
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {proofPoints.map((p) => (
              <div
                key={p.label}
                style={{
                  padding: "24px",
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14, textAlign: "center",
                }}
              >
                <p className="font-heading" style={{ fontSize: 36, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>{p.stat}</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", margin: "6px 0 0" }}>{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
