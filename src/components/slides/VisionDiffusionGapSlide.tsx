"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Cpu, Users } from "lucide-react";

const ACCENT = "#7EB3E8";

export default function VisionDiffusionGapSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
          The diffusion gap
        </p>
        <h1 className="font-heading" style={{ fontSize: 60, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AI capability is racing. Operator adoption isn&apos;t.
        </h1>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.55)", margin: "16px auto 0", lineHeight: 1.5, maxWidth: 1320 }}>
          Foundation models advance in months. Mid-market operators adopt in years. The gap between them is the market.
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
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          alignItems: "stretch",
        }}
      >
        {/* AI capability — racing up */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            background: "rgba(40,96,178,0.10)",
            border: `1px solid rgba(126,179,232,0.30)`,
            borderTop: `3px solid ${ACCENT}`,
            borderRadius: 16,
            padding: "36px 36px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
            <div
              style={{
                width: 56, height: 56, borderRadius: 14,
                background: "rgba(40,96,178,0.18)",
                border: "1px solid rgba(126,179,232,0.40)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <Cpu size={28} color={ACCENT} strokeWidth={1.75} />
            </div>
            <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: ACCENT }}>
              AI capability
            </span>
          </div>

          <h2 className="font-heading" style={{ fontSize: 36, fontWeight: 700, color: "#FFFFFF", margin: "0 0 12px", lineHeight: 1.2 }}>
            Racing.
          </h2>
          <p style={{ fontSize: 19, color: "rgba(255,255,255,0.70)", margin: "0 0 24px", lineHeight: 1.5 }}>
            Foundation models advance in <strong style={{ color: "#FFFFFF" }}>months</strong>.
          </p>

          {/* Curve illustration */}
          <svg viewBox="0 0 400 140" style={{ width: "100%", height: 140, marginTop: "auto" }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="capGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#7EB3E8" stopOpacity="0" />
                <stop offset="1" stopColor="#7EB3E8" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="capFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#7EB3E8" stopOpacity="0.25" />
                <stop offset="1" stopColor="#7EB3E8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 130 C 100 125, 200 100, 280 50 S 380 8, 400 5 L 400 140 L 0 140 Z" fill="url(#capFill)" />
            <path d="M0 130 C 100 125, 200 100, 280 50 S 380 8, 400 5" fill="none" stroke="url(#capGradient)" strokeWidth="3" />
          </svg>
        </motion.article>

        {/* Operator adoption — flat */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderTop: `3px solid rgba(255,255,255,0.35)`,
            borderRadius: 16,
            padding: "36px 36px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
            <div
              style={{
                width: 56, height: 56, borderRadius: 14,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.18)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <Users size={28} color="rgba(255,255,255,0.65)" strokeWidth={1.75} />
            </div>
            <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
              Operator adoption
            </span>
          </div>

          <h2 className="font-heading" style={{ fontSize: 36, fontWeight: 700, color: "#FFFFFF", margin: "0 0 12px", lineHeight: 1.2 }}>
            Crawling.
          </h2>
          <p style={{ fontSize: 19, color: "rgba(255,255,255,0.70)", margin: "0 0 24px", lineHeight: 1.5 }}>
            Mid-market operators adopt in <strong style={{ color: "#FFFFFF" }}>years</strong>.
          </p>

          {/* Curve illustration */}
          <svg viewBox="0 0 400 140" style={{ width: "100%", height: 140, marginTop: "auto" }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="adoptGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="rgba(255,255,255,0.45)" />
                <stop offset="1" stopColor="rgba(255,255,255,0.55)" />
              </linearGradient>
              <linearGradient id="adoptFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="rgba(255,255,255,0.10)" />
                <stop offset="1" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
            <path d="M0 130 C 100 128, 200 122, 280 110 S 380 92, 400 88 L 400 140 L 0 140 Z" fill="url(#adoptFill)" />
            <path d="M0 130 C 100 128, 200 122, 280 110 S 380 92, 400 88" fill="none" stroke="url(#adoptGradient)" strokeWidth="3" strokeDasharray="6 6" />
          </svg>
        </motion.article>
      </motion.main>

      {/* Gap banner */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        style={{
          margin: "28px 100px 0",
          padding: "18px 32px",
          borderRadius: 14,
          background: "rgba(40,96,178,0.18)",
          border: "1px solid rgba(126,179,232,0.35)",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: 18, fontWeight: 700, color: ACCENT, letterSpacing: "0.10em", textTransform: "uppercase" }}>
          The gap = the market
        </span>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", margin: "4px 0 0", fontStyle: "italic" }}>
          Widening every month.
        </p>
      </motion.div>

      <div style={{ padding: "16px 100px 14px" }}>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", textAlign: "center", margin: 0, fontStyle: "italic" }}>
          The opportunity isn&apos;t in building better AI. It&apos;s in closing the gap — operator by operator.
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
