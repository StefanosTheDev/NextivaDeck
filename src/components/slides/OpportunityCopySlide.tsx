"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

export default function OpportunityCopySlide({ slideNumber = 7 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 200px" }}>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
            textAlign: "center",
          }}
        >
          WHAT WE DO
        </motion.p>

        <motion.h1
          className="font-heading"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 62,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "24px 0 0",
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          A unified, AI platform powering
          <br />
          every customer interaction.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            width: 56,
            height: 3,
            background: "#2860B2",
            margin: "44px 0 36px",
            borderRadius: 2,
            transformOrigin: "center",
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.5)",
            margin: 0,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Turning every customer interaction into real-time outcomes
        </motion.p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
