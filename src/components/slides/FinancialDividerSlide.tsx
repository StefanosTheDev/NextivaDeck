"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

export default function FinancialDividerSlide({ slideNumber = 23 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "linear-gradient(180deg, #F5F0E8 0%, #D9E6F0 100%)",
        position: "relative",
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
            color: "#1A447C",
            margin: 0,
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          Financial Overview.
        </motion.h1>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
