"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";
import { Layers, Unplug, BrainCircuit } from "lucide-react";

const ACCENT = "#2860B2";

const fractures = [
  {
    icon: Layers,
    cause: "Data is fragmented",
    effect: "No unified customer view",
  },
  {
    icon: Unplug,
    cause: "Systems are disconnected",
    effect: "Workflows break",
  },
  {
    icon: BrainCircuit,
    cause: "AI lacks live context",
    effect: "Decisions are incomplete",
  },
];

export default function TheProblemAISlide({
  slideNumber = 10,
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
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "60px 100px 0",
          flexShrink: 0,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: ACCENT,
            margin: "0 0 14px",
          }}
        >
          THE PROBLEM
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 52,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.18,
          }}
        >
          AI amplifies what is broken in&nbsp;CX
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.45)",
            margin: "12px 0 0",
            fontWeight: 400,
          }}
        >
          Businesses cannot act in real time because:
        </motion.p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "0 100px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {fractures.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.cause}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: 28,
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 14,
                  background: "rgba(40,96,178,0.15)",
                  border: "1px solid rgba(40,96,178,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={28} color="#7EB3E8" strokeWidth={1.75} />
              </div>
              <div>
                <h2
                  style={{
                    fontSize: 30,
                    fontWeight: 600,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {f.cause}
                </h2>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.45)",
                    margin: "8px 0 0",
                    lineHeight: 1.4,
                    fontStyle: "italic",
                  }}
                >
                  {f.effect}
                </p>
              </div>
            </motion.div>
          );
        })}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            flexShrink: 0,
          }}
        />
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{
          padding: "20px 100px 20px",
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 3,
            height: 26,
            background: ACCENT,
            borderRadius: 2,
            flexShrink: 0,
          }}
        />
        <p
          style={{
            fontSize: 26,
            fontWeight: 600,
            color: "rgba(255,255,255,0.9)",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          AI without real-time context fails.
        </p>
      </motion.div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
