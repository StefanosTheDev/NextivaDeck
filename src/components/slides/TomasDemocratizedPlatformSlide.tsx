"use client";
import { motion } from "framer-motion";
import {
  Users,
  Layers,
  Database,
  Bot,
  Route,
  ShieldCheck,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

const PILLARS = [
  { icon: Users, title: "Native CX-first approach for all" },
  { icon: Layers, title: "An open, future-ready CXPaaS platform" },
  { icon: Database, title: "Open data architectures to build from" },
  { icon: Bot, title: "Human + AI in tandem" },
  { icon: Route, title: "End-to-end customer journey orchestration" },
  { icon: ShieldCheck, title: "Trustworthy, secure, and compliant" },
];

export default function TomasDemocratizedPlatformSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "56px 100px 0", flexShrink: 0, textAlign: "center" }}
      >
        <h1
          className="font-heading"
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Nextiva provides
          <br />
          <span style={{ color: "#7EB3E8" }}>a democratized platform for all</span>
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "36px 100px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: 20,
          alignContent: "center",
        }}
      >
        {PILLARS.map((pillar, i) => (
          <motion.article
            key={pillar.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: "rgba(40,96,178,0.14)",
                border: "1px solid rgba(40,96,178,0.32)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <pillar.icon size={26} color="#7EB3E8" strokeWidth={1.75} />
            </div>
            <p
              className="font-heading"
              style={{
                fontSize: 20,
                fontWeight: 500,
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              {pillar.title}
            </p>
          </motion.article>
        ))}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
