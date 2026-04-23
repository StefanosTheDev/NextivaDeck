"use client";

import { motion } from "framer-motion";
import { Heart, Hotel, Mountain } from "lucide-react";
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

/** Cocoa Lofts, Walker River Resort, Shasta Community Health (slide-order 132, 137, 140). Style: CustomerUseCasesSlide (76). */
const customers: CustomerCaseCardData[] = [
  sbToCard(SB_CUSTOMER_CASES[4], Hotel),
  sbToCard(SB_CUSTOMER_CASES[9], Mountain),
  {
    icon: Heart,
    photo: "/images/pptx-slides/slide9-img0.png",
    name: "Shasta Community Health",
    industry: "Community Healthcare",
    size: "7 Clinical Locations · 100 Providers across 10+ practices",
    problems: [
      "Poor customer experience: Chaotic inbound communications management, with many queues, long hold times, significant misrouting.",
      "Staffing inefficiencies: Highly manual repetitive tasks, such as appointment scheduling and prescription refills.",
      "Siloed customer information: Fragmented communications with patients across departments, no holistic visibility.",
    ],
    solutions: [
      "Improved initial customer experience: Automated to more than 10 care practices; AI addresses routine inquiries.",
      "Staffing efficiencies gained: AI drives routine tasks via EMR integration, hands off to humans for the complex.",
      "Overall improved customer sat: Seamless patient transition across practices and departments.",
      "Operational efficiencies gained from handling peak call volumes concurrently with one AI Employee vs customers waiting on hold for the next human representative.",
    ],
    metrics: [
      { stat: "2 min", label: "Average wait time (reduced)" },
      { stat: "20%", label: "AI-Enabled Deflections" },
    ],
    accent: "#7BB3E0",
  },
];

export default function CustomerUseCasesCocoaWalkerShastaSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
          Nextiva AI delivers outcomes from pilot properties to enterprise healthcare
        </h1>
        <p style={{ fontSize: 15, margin: "6px auto 0", maxWidth: 720, lineHeight: 1.4, color: "rgba(255,255,255,0.45)" }}>
          Hospitality pilot, resort communications modernization, and multi-site community health.
        </p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "28px 80px 16px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto",
          gap: 16,
          alignContent: "center",
          alignItems: "start",
          overflow: "hidden",
        }}
      >
        {customers.map((c) => (
          <CustomerUseCaseCaseCard key={c.name} data={c} bodyLayout="hug" />
        ))}
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
