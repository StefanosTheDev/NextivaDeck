"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const pillars = [
  { headline: "Scaled & Profitable", detail: "$350M+ revenue, 70%+ gross margin, 90%+ recurring" },
  { headline: "Owns the Interaction Layer", detail: "Where businesses and customers communicate" },
  { headline: "AI-Native Evolution", detail: "Transforming conversations into actions and outcomes" },
  { headline: "The Massive Middle", detail: "Serving millions of businesses ignored by incumbents" },
  { headline: "Expanding Monetization", detail: "From subscriptions \u2192 usage \u2192 outcomes" },
  { headline: "Proven & Durable", detail: "93K+ customers, <1.6% churn, <1% concentration" },
];

export default function InfrastructureLayerThesisSlide({ slideNumber = 3 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 84% 74% at 52% 42%, rgba(22,69,136,0.34) 0%, rgba(8,31,66,0.8) 52%, #000208 100%)",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "56px 100px 28px",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            margin: 0,
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            textAlign: "center",
          }}
        >
          Investment Thesis
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="font-heading"
          style={{
            margin: "16px 0 0",
            fontSize: 66,
            fontWeight: 500,
            lineHeight: 1.06,
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          The Infrastructure Layer for Agentic CX
        </motion.h1>

        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.headline}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              style={{
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.1)",
                borderTop: "3px solid #2860B2",
                background: "rgba(255,255,255,0.04)",
                padding: "28px 28px 24px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.25,
                }}
              >
                {p.headline}
              </h3>
              <div style={{ width: 28, height: 2, background: "#2860B2", borderRadius: 1, margin: "12px 0" }} />
              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.45,
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {p.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72 }}
          className="font-heading"
          style={{
            margin: "36px auto 0",
            fontSize: 36,
            lineHeight: 1.2,
            fontWeight: 600,
            color: "#FFFFFF",
            textAlign: "center",
            maxWidth: 1400,
          }}
        >
          Nextiva is not a tool &mdash; it is the system where AI meets the customer
        </motion.p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
