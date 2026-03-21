"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

export default function AppendixDividerSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
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
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
