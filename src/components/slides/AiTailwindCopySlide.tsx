"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ArrowRight } from "lucide-react";

const rows = [
  { positioning: "AI embedded in every product", advantage: "Upsells without migration", implications: "93% to 98% of users available for AI activation." },
  { positioning: "XBert + NEXT product offerings", advantage: "New AI entry points", implications: "22% to 28% of revenue targeted." },
  { positioning: "Billions of conversations", advantage: "Early data lead, smarter AI", implications: "Flywheel continually increases the value of the Nextiva data asset." },
];

export default function AiTailwindCopySlide({ slideNumber = 13 }: { slideNumber?: number }) {
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
        style={{ padding: "48px 80px 0", flexShrink: 0 }}
      >
        <p style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 8px" }}>
          AI & NEXTIVA
        </p>
        <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AI is a tailwind — not the thesis.
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", margin: "10px 0 0", lineHeight: 1.5 }}>
          Nextiva is well positioned to leverage AI to drive incremental growth.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 80px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          {/* Column headers */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 56px 1fr 56px 1fr", gap: 16, marginBottom: 8, alignItems: "end" }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7EB3E8", margin: 0, paddingBottom: 12, borderBottom: "2px solid rgba(40,96,178,0.3)" }}>
              Positioning
            </p>
            <div style={{ paddingBottom: 12, borderBottom: "2px solid rgba(40,96,178,0.3)" }} />
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7EB3E8", margin: 0, paddingBottom: 12, borderBottom: "2px solid rgba(40,96,178,0.3)", textAlign: "center" }}>
              Nextiva Advantage
            </p>
            <div style={{ paddingBottom: 12, borderBottom: "2px solid rgba(40,96,178,0.3)" }} />
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7EB3E8", margin: 0, paddingBottom: 12, borderBottom: "2px solid rgba(40,96,178,0.3)", textAlign: "right" }}>
              Economic Implications (FY28)
            </p>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <motion.div
              key={r.positioning}
              initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 56px 1fr 56px 1fr",
                gap: 16,
                alignItems: "stretch",
                padding: i < rows.length - 1 ? "0 0 16px" : "0",
                marginBottom: i < rows.length - 1 ? "16px" : 0,
                borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <div style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 12,
                padding: "18px 20px",
                display: "flex", alignItems: "center",
              }}>
                <p style={{ fontSize: 17, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.4 }}>
                  {r.positioning}
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ArrowRight size={32} color="#7EB3E8" strokeWidth={3} style={{ flexShrink: 0 }} />
              </div>
              <div style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 12,
                padding: "18px 20px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <p style={{ fontSize: 17, fontWeight: 600, color: "#FFFFFF", margin: 0, lineHeight: 1.4, textAlign: "center" }}>
                  {r.advantage}
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ArrowRight size={32} color="#7EB3E8" strokeWidth={3} style={{ flexShrink: 0 }} />
              </div>
              <div style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 12,
                padding: "18px 20px",
                display: "flex", alignItems: "center",
              }}>
                <p style={{ fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.9)", margin: 0, lineHeight: 1.4 }}>
                  {r.implications}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
