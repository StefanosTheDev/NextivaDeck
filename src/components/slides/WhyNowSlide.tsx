"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const ACCENT = "#7EB3E8";

const items = [
  { word: "AI adoption", description: "is accelerating" },
  { word: "Customer expectations", description: "are rising" },
  { word: "Legacy systems", description: "cannot keep up" },
  { word: "The platform", description: "that owns real-time interactions wins" },
];

export default function WhyNowSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
          padding: "0 200px",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
            textAlign: "center",
          }}
        >
          WHY NOW
        </motion.p>

        <motion.h1
          className="font-heading"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 60,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "24px 0 0",
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          The inflection point
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            width: 56,
            height: 3,
            background: "#2860B2",
            margin: "44px 0 40px",
            borderRadius: 2,
            transformOrigin: "center",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {items.map((item, i) => (
            <motion.p
              key={item.word}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
              style={{ margin: 0, lineHeight: 1.3 }}
            >
              <span
                className="font-heading"
                style={{
                  fontSize: 32,
                  fontWeight: 600,
                  color: ACCENT,
                }}
              >
                {item.word}
              </span>
              <span
                style={{
                  fontSize: 24,
                  color: "rgba(255,255,255,0.3)",
                  margin: "0 16px",
                }}
              >
                &mdash;
              </span>
              <span
                style={{
                  fontSize: 24,
                  color: "rgba(255,255,255,0.55)",
                  fontWeight: 400,
                }}
              >
                {item.description}
              </span>
            </motion.p>
          ))}
        </motion.div>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
