"use client";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

export default function SafeHarborSlide({ slideNumber }: { slideNumber?: number }) {
  return (
    <div className="slide slide--cream">
      {/* Blue top rule */}
      <div style={{ width: "100%", height: 3, background: "#2860B2", flexShrink: 0 }} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 100px" }}>
        <motion.p
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
          style={{ marginBottom: 24 }}
        >
          Safe Harbor Statement
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            fontSize: 22,
            lineHeight: 1.8,
            color: "#6C6967",
            maxWidth: 1440,
          }}
        >
          <p style={{ marginBottom: 28 }}>
            This presentation contains forward-looking statements within the meaning of Section 27A of the Securities Act
            of 1933 and Section 21E of the Securities Exchange Act of 1934. These statements involve known and unknown
            risks, uncertainties, and other factors that may cause actual results to differ materially from any future
            results, performance, or achievements expressed or implied by the forward-looking statements.
          </p>
          <p style={{ marginBottom: 28 }}>
            Forward-looking statements represent our management&apos;s beliefs and assumptions only as of the date of this
            presentation. You should read this presentation with the understanding that our actual future results may be
            materially different from what we expect.
          </p>
          <p>
            Except as required by law, we assume no obligation to update these forward-looking statements publicly, or to
            update the reasons actual results could differ materially from those anticipated in the forward-looking
            statements, even if new information becomes available in the future.
          </p>
        </motion.div>
      </div>

      <SlideFooter slideNumber={slideNumber ?? 2} variant="light" />
    </div>
  );
}
