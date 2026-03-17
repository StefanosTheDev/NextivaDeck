"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

export default function BetterOutcomesCopySlide({ slideNumber = 4 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 100px",
          textAlign: "center",
        }}
      >
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
          }}
        >
          Our Mission
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            marginTop: 32,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 24px", justifyContent: "center", alignItems: "baseline" }}>
            <p className="font-heading" style={{ fontSize: 64, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>
              Enterprise power.
            </p>
            <p className="font-heading" style={{ fontSize: 64, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>
              Main street simplicity.
            </p>
          </div>
          <p className="font-heading" style={{ fontSize: 64, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>
            Exceptional customer experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            width: 100,
            height: 1,
            background: "rgba(255,255,255,0.15)",
            marginTop: 44,
          }}
        />
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
