"use client";

import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const BG =
  "radial-gradient(ellipse 90% 80% at 50% 22%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 48%, #000208 100%)";

const want = [
  "Fast response times",
  "Human reassurance",
  "Trusted guidance",
  "Simplicity and speed",
  "Confidence in the vendor",
];

const deliver = [
  "Hybrid self-serve + sales-assisted motion",
  "Response times in under 90 seconds",
  "Mission-critical expertise in communications and AI",
  "Cost structure that supports profitable human engagement",
  "Strong conversion and retention economics",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
      {items.map((t) => (
        <li
          key={t}
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.78)",
            lineHeight: 1.5,
            marginBottom: 11,
            paddingLeft: 18,
            position: "relative",
          }}
        >
          <span style={{ position: "absolute", left: 0, top: 2, color: "#7EB3E8", fontWeight: 700 }}>&rsaquo;</span>
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function NextivaBuiltUneasyMiddleSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div className="slide" style={{ background: BG, overflow: "hidden" }}>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "40px 72px 8px", flexShrink: 0, textAlign: "center" }}
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
          Nextiva
        </p>
        <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 500, color: "#FFFFFF", margin: 0, lineHeight: 1.15, maxWidth: 980, marginLeft: "auto", marginRight: "auto" }}>
          Nextiva is uniquely positioned to win the underserved middle market
        </h1>
        <p style={{ fontSize: 19, color: "rgba(255,255,255,0.55)", margin: "14px auto 0", maxWidth: 860, lineHeight: 1.5 }}>
          Nextiva combines the efficiency of digital acquisition with the trust and conversion benefits of human engagement.
        </p>
      </motion.header>

      <main style={{ flex: 1, display: "flex", gap: 22, padding: "24px 72px 32px", minHeight: 0, alignItems: "stretch" }}>
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            flex: 1,
            borderRadius: 16,
            padding: "24px 26px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderTop: "3px solid #2860B2",
          }}
        >
          <h2 className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: "0 0 16px" }}>
            What customers want
          </h2>
          <BulletList items={want} />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{
            flex: 1,
            borderRadius: 16,
            padding: "24px 26px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderTop: "3px solid #0070F3",
          }}
        >
          <h2 className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: "0 0 16px" }}>
            What Nextiva delivers
          </h2>
          <BulletList items={deliver} />
        </motion.section>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
