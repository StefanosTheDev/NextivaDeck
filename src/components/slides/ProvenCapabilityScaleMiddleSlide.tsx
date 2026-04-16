"use client";

import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const points = [
  "Acquired hundreds of thousands of customers per month across prior businesses",
  "Served tens of millions of customers across communications, hosting, and security",
  "Proven ability to blend digital demand generation with human conversion",
  "Built a repeatable model for serving underserved buyers profitably",
];

export default function ProvenCapabilityScaleMiddleSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: BG, overflow: "hidden" }}>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "36px 72px 6px", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 12px",
          }}
        >
          Execution
        </p>
        <h1 className="font-heading" style={{ fontSize: 40, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15, maxWidth: 1020, marginLeft: "auto", marginRight: "auto" }}>
          Nextiva combines high-scale digital acquisition with human-led conversion
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", margin: "12px auto 0", maxWidth: 860, lineHeight: 1.5 }}>
          Unlike most competitors, Nextiva has demonstrated the ability to operate both e-commerce and human-assisted sales motions at scale.
        </p>
      </motion.header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, padding: "18px 72px 20px", minHeight: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            borderRadius: 16,
            padding: "22px 32px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderTop: "3px solid #2860B2",
            flex: "0 1 auto",
          }}
        >
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 40px" }}>
            {points.map((t) => (
              <li
                key={t}
                style={{
                  fontSize: 17,
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: 1.45,
                  paddingLeft: 18,
                  position: "relative",
                }}
              >
                <span style={{ position: "absolute", left: 0, top: 2, color: "#7EB3E8", fontWeight: 700 }}>&rsaquo;</span>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{
            flex: 1,
            minHeight: 0,
            borderRadius: 16,
            padding: "22px 32px",
            background: "rgba(0, 112, 243, 0.1)",
            border: "1px solid rgba(0, 112, 243, 0.28)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="font-heading" style={{ fontSize: 24, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.45, textAlign: "center", maxWidth: 1000 }}>
            The next era of software and AI will not be won solely by self-serve or enterprise sales. It will be won by companies that can profitably serve the large and underserved middle market.
          </p>
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
