"use client";

import { motion } from "framer-motion";

export default function VisionMainStreetSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 75% at 50% 50%, rgba(170,120,40,0.35) 0%, rgba(55,35,12,0.78) 46%, #060403 100%)",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 240,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 55%, rgba(251,191,36,0.07) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 1700,
          padding: "0 80px",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          style={{
            margin: 0,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(251,191,36,0.88)",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          The customer moat
        </motion.p>

        <motion.h1
          className="font-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          style={{
            margin: "44px 0 0",
            fontSize: 200,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
            textShadow:
              "0 12px 80px rgba(251,191,36,0.28), 0 4px 20px rgba(0,0,0,0.45)",
          }}
        >
          Main Street is
          <br />
          our home.
        </motion.h1>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 160, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
          style={{
            height: 3,
            borderRadius: 2,
            background:
              "linear-gradient(90deg, transparent, rgba(251,191,36,0.9), transparent)",
            marginTop: 56,
          }}
        />
      </div>

      <span
        style={{
          position: "absolute",
          right: 60,
          bottom: 32,
          zIndex: 2,
          fontSize: 20,
          fontFamily: "'Space Grotesk', sans-serif",
          color: "rgba(255,255,255,0.3)",
        }}
      >
        {slideNumber}
      </span>
    </div>
  );
}
