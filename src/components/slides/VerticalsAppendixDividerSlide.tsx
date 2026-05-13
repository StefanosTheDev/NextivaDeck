"use client";

import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

export default function VerticalsAppendixDividerSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            margin: "0 0 14px",
          }}
        >
          Vertical strategy
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            width: 72,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #2860B2, #0070F3)",
            margin: "0 auto 22px",
            opacity: 0.95,
          }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-heading"
          style={{
            fontSize: 72,
            fontWeight: 400,
            color: "#FFFFFF",
            margin: 0,
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          Appendix.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            margin: "16px 0 0",
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            fontWeight: 400,
          }}
        >
          Customer use cases &amp; vertical depth.
        </motion.p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
