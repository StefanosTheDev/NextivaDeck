"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const layers = [
  {
    label: "Artificial Intelligence",
    description: "Real-time insights and orchestration",
    pillBg: "rgba(180,170,160,0.7)",
    pillColor: "#FFFFFF",
  },
  {
    label: "Customer Data",
    description: "Unstructured and structured",
    pillBg: "#FFFFFF",
    pillColor: "#1A447C",
  },
  {
    label: "Communications",
    description: "Voice, Messaging, Social, Live Chat, Web",
    pillBg: "#2860B2",
    pillColor: "#FFFFFF",
  },
  {
    label: "Global Telecommunications Infrastructure",
    description: "Resilient, highly available network, critical commercial geographies, certified and compliant",
    pillBg: "#2860B2",
    pillColor: "#FFFFFF",
  },
];

export default function PlatformCopySlide({ slideNumber = 10 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 30%, rgba(15,44,89,0.4) 0%, rgba(6,26,55,0.65) 45%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ padding: "40px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 14px" }}>
          SOLVING FOR THE FUTURE OF BUSINESS
        </p>
        <h1 className="font-heading" style={{ fontSize: 60, fontWeight: 500, color: "#FFFFFF", margin: "0 auto", lineHeight: 1.15, whiteSpace: "nowrap" }}>
          Nextiva&apos;s Agentic CX Platform.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", margin: "16px auto 0", lineHeight: 1.55, maxWidth: 960, textAlign: "center" }}>
          Communications, data, and AI — unified into a single architecture supported by a global telecommunications infrastructure. Turns every conversation into an outcome.
        </p>
      </motion.header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "12px 180px 0", gap: 10 }}>
        {layers.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", flex: 1, minHeight: 0 }}
          >
            {/* Pill badge — overlaps the top of the card */}
            <div style={{
              position: "relative",
              zIndex: 2,
              marginBottom: -14,
              padding: "10px 32px",
              borderRadius: 28,
              background: layer.pillBg,
              color: layer.pillColor,
              fontSize: 20,
              fontWeight: 700,
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            }}>
              {layer.label}
            </div>

            {/* Card */}
            <div style={{
              width: "100%",
              flex: 1,
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: "24px 28px 16px",
              textAlign: "center",
            }}>
              <p style={{ fontSize: 20, color: "rgba(255,255,255,0.55)", margin: 0 }} className="font-heading">
                {layer.description}
              </p>
            </div>
          </motion.div>
        ))}
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
