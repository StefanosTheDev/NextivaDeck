"use client";

import { motion } from "framer-motion";
import { Activity, BrickWall, HardHat, Wrench } from "lucide-react";
import SlideFooter from "../SlideFooter";
import CustomerUseCaseCaseCard, { type CustomerCaseCardData } from "./CustomerUseCaseCaseCard";
import { SB_CUSTOMER_CASES, type SbCustomerCaseSpec } from "./customerUseCasesSbSinglesContent";

function sbToCard(c: SbCustomerCaseSpec, icon: CustomerCaseCardData["icon"]): CustomerCaseCardData {
  return {
    icon,
    photo: c.photo,
    name: c.name,
    industry: c.industry,
    size: c.size,
    problems: c.problems,
    solutions: c.solutions,
    metrics: c.metrics,
    accent: c.accent,
  };
}

/** Dark panel behind logo thumbs so `contain` white/wide artwork reads clearly (matches single-slide hero treatment). */
const LOGO_THUMB_BG = "rgba(6, 10, 18, 0.94)";

/** Kalley → Southeast Diabetes → Handyman Hub → Renegade Roofing (slide-order 133–136). Style: CustomerUseCasesSlide (76). */
const customers: CustomerCaseCardData[] = [
  sbToCard(SB_CUSTOMER_CASES[5], BrickWall),
  sbToCard(SB_CUSTOMER_CASES[6], Activity),
  {
    ...sbToCard(SB_CUSTOMER_CASES[7], Wrench),
    photoObjectFit: "contain",
    photoThumbBackground: LOGO_THUMB_BG,
  },
  {
    ...sbToCard(SB_CUSTOMER_CASES[8], HardHat),
    photoObjectFit: "contain",
    photoThumbBackground: LOGO_THUMB_BG,
  },
];

export default function CustomerUseCasesXbertQuartetSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "32px 80px 0", textAlign: "center", flexShrink: 0 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 6px",
          }}
        >
          Customer Use Cases
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Nextiva AI and XBert deliver measurable outcomes for growing businesses
        </h1>
        <p style={{ fontSize: 15, margin: "6px auto 0", maxWidth: 720, lineHeight: 1.4, color: "rgba(255,255,255,0.45)" }}>
          Four SMB stories — flooring, healthcare supplies, multi-state trades, and roofing.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "20px 100px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 18,
          alignContent: "center",
          overflow: "hidden",
        }}
      >
        {customers.map((c) => (
          <CustomerUseCaseCaseCard key={c.name} data={c} />
        ))}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
