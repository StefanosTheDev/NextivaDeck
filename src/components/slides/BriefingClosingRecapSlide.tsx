"use client";
import { motion } from "framer-motion";
import {
  Bot,
  MessageCircle,
  ShieldCheck,
  Workflow,
  Database,
  Settings2,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const pillars = [
  { icon: Bot, title: "Human + AI in tandem" },
  { icon: MessageCircle, title: "Conversational Commerce" },
  { icon: ShieldCheck, title: "Trustworthy" },
  { icon: Workflow, title: "CX First System of Action" },
  { icon: Database, title: "Reasoning over customer & business data" },
  { icon: Settings2, title: "Bespoke, at Scale" },
];

export default function BriefingClosingRecapSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 35%, rgba(15,44,89,0.55) 0%, rgba(6,26,55,0.8) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "72px 80px 0", flexShrink: 0, textAlign: "center" }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#7EB3E8",
            margin: 0,
          }}
        >
          In Summary
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 64,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "24px auto 0",
            lineHeight: 1.2,
            maxWidth: 1480,
          }}
        >
          Nextiva empowers{" "}
          <span style={{ color: "#7EB3E8", fontWeight: 700 }}>
            the best possible outcome
          </span>{" "}
          at the moment of interaction.
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "24px 100px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 32,
        }}
      >
        {/* Divider line with centered label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              flex: 1,
              maxWidth: 180,
              height: 1,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(126,179,232,0.4) 100%)",
            }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Delivered through six pillars
          </span>
          <div
            style={{
              flex: 1,
              maxWidth: 180,
              height: 1,
              background:
                "linear-gradient(90deg, rgba(126,179,232,0.4) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Pillar grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 18,
            maxWidth: 1400,
            width: "100%",
            margin: "0 auto",
          }}
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "22px 26px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderLeft: "3px solid #7EB3E8",
                  borderRadius: 12,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 11,
                    background: "rgba(40,96,178,0.15)",
                    border: "1px solid rgba(40,96,178,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color="#7EB3E8" strokeWidth={2} />
                </div>
                <span
                  className="font-heading"
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    textAlign: "left",
                    lineHeight: 1.25,
                  }}
                >
                  {p.title}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Closing tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{
            textAlign: "center",
            fontSize: 18,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.5)",
            margin: 0,
            lineHeight: 1.5,
            maxWidth: 900,
            alignSelf: "center",
          }}
        >
          One platform. One data model. One team of humans and AI working in
          tandem &mdash; for every customer, every interaction, every outcome.
        </motion.p>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
