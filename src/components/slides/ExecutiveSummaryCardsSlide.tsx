"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const cards = [
  {
    header: "Strong AI position",
    bullets: [
      "Position to benefit from and lead in the AI-driven transformation",
      "AI is a structural tailwind to growth",
    ],
  },
  {
    header: "Balanced Growth",
    body: "A highly predictable, recurring revenue model with strong contractual commitments, delivering current profitability and a clear path to expanding margins.",
  },
  {
    header: "Ask",
    bullets: [
      "$300 million",
      "Use of proceeds: repayment of existing debt, potential acquisitions.",
    ],
  },
];

export default function ExecutiveSummaryCardsSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <h1 className="font-heading" style={{ fontSize: 64, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          Executive Summary
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "32px 100px 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          alignContent: "center",
        }}
      >
        {cards.map((card, i) => (
          <motion.article
            key={card.header}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              padding: "28px 32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              className="font-heading"
              style={{
                fontSize: 36,
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              {card.header}
            </span>
            {card.bullets ? (
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {card.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", marginBottom: j < card.bullets!.length - 1 ? 10 : 0, lineHeight: 1.5, paddingLeft: 20, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#2860B2" }}>•</span>
                    {b}
                  </li>
                ))}
              </ul>
            ) : card.body ? (
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.5 }}>
                {card.body}
              </p>
            ) : null}
          </motion.article>
        ))}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
