"use client";
import { motion } from "framer-motion";
import SlideFooter from "../../SlideFooter";

export default function FinancialSummaryPlaceholder({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0 }}
      >
        <p
          style={{ fontWeight: 700, fontSize: 18, letterSpacing: "0.05em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}
        >
          Financial Highlights
        </p>
        <h1
          className="font-heading"
          style={{ fontSize: 56, fontWeight: 500, color: "#FFFFFF", margin: "10px 0 0", lineHeight: 1.15 }}
        >
          Long Term Model: Durable Top Line Momentum
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "60px 100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 40,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1200,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            padding: "80px 60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
          }}
        >
          <p
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "rgba(255,255,255,0.4)",
              margin: 0,
              textAlign: "center",
            }}
          >
            [PLACEHOLDER]
          </p>
          <p
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.3)",
              margin: 0,
              textAlign: "center",
              maxWidth: 600,
              lineHeight: 1.5,
            }}
          >
            Financial Highlights / Summary content to be added.
            <br />
            This slide will frame the detailed financial metrics that follow.
          </p>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
