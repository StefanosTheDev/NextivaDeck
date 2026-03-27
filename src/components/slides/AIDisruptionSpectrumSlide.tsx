"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ACCENT = "#7EB3E8";

const exposedItems = [
  "Generalist, horizontal functionality",
  "Simple, repeatable workflows",
  "Standalone tools, shallow integration",
  "Low switching costs for customers",
  "Commoditized, publicly available data",
  "Minimal compliance burden",
  "High tolerance for errors",
];

const insulatedItems = [
  "Mission-critical, real-time conversations",
  "Complex, multi-channel orchestration",
  "Deeply embedded in enterprise workflows",
  "Zero tolerance for downtime or errors",
  "Strict regulatory compliance",
  "Proprietary interaction data at scale",
  "Deep domain expertise in CX operations",
];

export default function AIDisruptionSpectrumSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        overflow: "hidden",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "48px 100px 0",
          flexShrink: 0,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          DEFENSIBILITY
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 48,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "12px 0 0",
            lineHeight: 1.15,
          }}
        >
          Not all software is equally exposed to AI disruption
        </h1>
      </motion.header>

      {/* Spectrum arrow */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        style={{
          margin: "28px 100px 0",
          flexShrink: 0,
          transformOrigin: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <ArrowLeft size={22} color="rgba(255,255,255,0.35)" strokeWidth={2.5} />
          </div>
          <div
            style={{
              flex: 1,
              height: 4,
              borderRadius: 2,
              background: "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, #2860B2 50%, #7EB3E8 100%)",
            }}
          />
          <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <ArrowRight size={22} color={ACCENT} strokeWidth={2.5} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 8,
          }}
        >
          <p
            className="font-heading"
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "rgba(255,255,255,0.4)",
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            More Exposed
          </p>
          <p
            className="font-heading"
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: ACCENT,
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            More Insulated
          </p>
        </div>
      </motion.div>

      {/* Two columns */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        style={{
          flex: 1,
          display: "flex",
          gap: 24,
          padding: "20px 100px 0",
          minHeight: 0,
        }}
      >
        {/* Left column: More Exposed */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <p
            className="font-heading"
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "rgba(255,255,255,0.45)",
              margin: "0 0 14px",
              lineHeight: 1.3,
            }}
          >
            Fast, Forgiving, Low-Stakes Environments
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
            {exposedItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.45 + i * 0.06 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 10,
                  padding: "12px 18px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.45)",
                    margin: 0,
                    lineHeight: 1.35,
                  }}
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right column: More Insulated (Nextiva) */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <p
            className="font-heading"
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: ACCENT,
              margin: "0 0 14px",
              lineHeight: 1.3,
            }}
          >
            High-Stakes, Complex, Regulated Systems
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
            {insulatedItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.45 + i * 0.06 }}
                style={{
                  background: "rgba(40,96,178,0.12)",
                  border: "1px solid rgba(40,96,178,0.25)",
                  borderLeft: `4px solid ${ACCENT}`,
                  borderRadius: "0 10px 10px 0",
                  padding: "12px 18px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.85)",
                    margin: 0,
                    lineHeight: 1.35,
                  }}
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.main>

      <div style={{ height: 12, flexShrink: 0 }} />
      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
