"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Monitor, Workflow, Zap, Server } from "lucide-react";

const ACCENT = "#7EB3E8";

const layers = [
  {
    icon: Monitor,
    label: "Feature SaaS",
    desc: "CRM records, dashboards, ticketing — UIs on databases.",
    status: "Most exposed",
    statusColor: "#F87171",
    statusBg: "rgba(248,113,113,0.12)",
    statusBorder: "rgba(248,113,113,0.30)",
  },
  {
    icon: Workflow,
    label: "Workflow SaaS",
    desc: "Automation tools built for humans to operate.",
    status: "Under pressure",
    statusColor: "#FBBF24",
    statusBg: "rgba(251,191,36,0.12)",
    statusBorder: "rgba(251,191,36,0.30)",
  },
  {
    icon: Zap,
    label: "System of Action",
    desc: "Real-time capture, AI execution, outcome delivery.",
    status: "Our zone",
    statusColor: "#7EB3E8",
    statusBg: "rgba(126,179,232,0.16)",
    statusBorder: "rgba(126,179,232,0.40)",
    highlight: true,
  },
  {
    icon: Server,
    label: "Infrastructure",
    desc: "Regulated, mission-critical communication pipes.",
    status: "Most protected",
    statusColor: "#4ADE80",
    statusBg: "rgba(74,222,128,0.12)",
    statusBorder: "rgba(74,222,128,0.30)",
  },
];

export default function VisionAIWaveLayersSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 12px" }}>
          Where the wave is hitting
        </p>
        <h1 className="font-heading" style={{ fontSize: 54, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          The AI wave doesn&apos;t hit every layer the same way.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.55)", margin: "16px auto 0", lineHeight: 1.5, maxWidth: 1280 }}>
          Software built as a UI is most exposed. Infrastructure is most protected. We sit at the layers AI cannot touch — and the layer AI runs through.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "48px 100px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 22,
          alignItems: "stretch",
        }}
      >
        {layers.map((l, i) => {
          const Icon = l.icon;
          return (
            <motion.article
              key={l.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              style={{
                background: l.highlight ? "rgba(40,96,178,0.10)" : "rgba(255,255,255,0.04)",
                border: l.highlight ? `1px solid ${l.statusBorder}` : "1px solid rgba(255,255,255,0.08)",
                borderTop: `3px solid ${l.statusColor}`,
                borderRadius: 14,
                padding: "30px 26px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 13,
                  background: l.statusBg,
                  border: `1px solid ${l.statusBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 22,
                }}
              >
                <Icon size={26} color={l.statusColor} strokeWidth={1.75} />
              </div>

              <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF", margin: "0 0 14px", lineHeight: 1.2 }}>
                {l.label}
              </h2>

              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.62)", margin: 0, lineHeight: 1.5, flex: 1 }}>
                {l.desc}
              </p>

              <div
                style={{
                  marginTop: 24,
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: l.statusBg,
                  border: `1px solid ${l.statusBorder}`,
                  alignSelf: "flex-start",
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: l.statusColor }}>
                  {l.status}
                </span>
              </div>
            </motion.article>
          );
        })}
      </motion.main>

      <div style={{ flex: 0, padding: "32px 100px 16px" }}>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", textAlign: "center", margin: 0, fontStyle: "italic" }}>
          AI commoditizes thin software. AI amplifies infrastructure.
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
      <span aria-hidden style={{ color: ACCENT, position: "absolute", visibility: "hidden" }}>·</span>
    </div>
  );
}
