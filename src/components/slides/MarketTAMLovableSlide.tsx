"use client";
import { Fragment } from "react";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ArrowRight } from "lucide-react";

const metrics = [
  { value: "$176B", label: "Total CX market (CY26)" },
  { value: "$262B", label: "CY29 target", highlight: true },
];

export default function MarketTAMLovableSlide({ slideNumber = 50 }: { slideNumber?: number }) {
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
        style={{ padding: "56px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 10px" }}>
          MARKET OPPORTUNITY
        </p>
        <h1 className="font-heading" style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          CX is a large market, growing fast.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 100px", gap: 48 }}
      >
        {metrics.map((m, i) => (
          <Fragment key={m.label}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.15 }}
              style={{
                background: m.highlight ? "rgba(40,96,178,0.12)" : "rgba(255,255,255,0.04)",
                border: m.highlight ? "2px solid rgba(40,96,178,0.4)" : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "60px 64px",
                display: "flex", flexDirection: "column",
                alignItems: "center", textAlign: "center",
                minWidth: 320,
              }}
            >
              <p className="font-heading" style={{ fontSize: 96, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1 }}>
                {m.value}
              </p>
              <p style={{ fontSize: 18, fontWeight: 500, color: "rgba(255,255,255,0.5)", margin: "16px 0 0", lineHeight: 1.4 }}>
                {m.label}
              </p>
            </motion.div>
            {i === 0 && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, flexShrink: 0 }}
              >
                <span className="font-heading" style={{ fontSize: 32, fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>14%</span>
                <span style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.55)", letterSpacing: "0.06em", marginTop: -2 }}>CAGR</span>
                <ArrowRight size={48} color="#2860B2" strokeWidth={3.5} style={{ marginTop: 8 }} />
              </motion.div>
            )}
          </Fragment>
        ))}
      </motion.main>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
        style={{ padding: "0 100px 12px", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.35)", margin: 0, fontStyle: "italic" }}>
          Segment detail available in appendix.
        </p>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
