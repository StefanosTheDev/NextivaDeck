"use client";
import React from "react";
import { motion } from "framer-motion";
import { Building2, Tv, Heart, Eye } from "lucide-react";
import SlideFooter from "../SlideFooter";
import CustomerUseCaseCaseCard, { type CustomerCaseCardData } from "./CustomerUseCaseCaseCard";

const customers: CustomerCaseCardData[] = [
  {
    icon: Heart,
    photo: "/images/pptx-slides/slide9-img0.png",
    name: "Shasta Community Health",
    industry: "Community Healthcare",
    size: "7 Locations · 100 Providers",
    problems: [
      "Chaotic inbound comms — long holds, misrouting",
      "Scheduling & refills manual, consuming staff capacity",
      "Fragmented patient comms, no customer visibility",
    ],
    solutions: [
      "Rules-based routing to 10+ practices; AI handles routine",
      "EMR integration automates routine tasks via AI agent",
      "Seamless patient transitions; AI + human handoff",
    ],
    metrics: [
      { stat: "2 min", label: "Avg wait time" },
      { stat: "20%", label: "AI deflections" },
    ],
    accent: "#7BB3E0",
  },
  {
    icon: Eye,
    photo: "/images/pptx-slides/slide11-img0.png",
    name: "AEG Vision",
    industry: "Retail Optometry",
    size: "500 Locations · 5,000 employees",
    problems: [
      "No self-service for scheduling or refills",
      "Fragmented customer view across departments",
      "Inefficient multi-channel engagement",
      "No outbound sales using customer data",
    ],
    solutions: [
      "EMR-integrated IVA for appointments & prescriptions",
      "HIPAA-compliant single view: clinical, retail, ops",
      "Shifted inbound to contact center, deflecting 15%",
      "Customer data powers outbound sales campaigns",
    ],
    metrics: [
      { stat: "20%", label: "Increased sales" },
      { stat: "15%", label: "AI deflections" },
      { stat: "40K/Mo", label: "Automated requests" },
    ],
    accent: "#1A447C",
  },
  {
    icon: Building2,
    photo: "/images/pptx-slides/slide4-img0.png",
    name: "Suzuki",
    industry: "Industrial Manufacturing",
    size: "72K Employees · 192 Countries",
    problems: [
      "Staffing inefficiencies: High call volume for standard information inquiries on models, locations and customer service issues.",
      "Poor customer experiences: Slow response and resolution times due to reliance on phone or e-mail, limited engagement on other channels.",
      "Limited customer insight: No holistic customer information.",
    ],
    solutions: [
      "Improved CX: AI-driven instant responses to standard inquiries; seamless transfers to human agents for complex ones.",
      "Automated KPI visibility: KPIs across multiple dimensions and channels.",
      "Continuous improvement: Customer feedback & sentiment captured.",
    ],
    metrics: [
      { stat: "1M+/Mo", label: "Customers with AI" },
      { stat: "12%", label: "Cost reduction" },
      { stat: "60%+", label: "Faster follow-up" },
    ],
    accent: "#2860B2",
  },
  {
    icon: Tv,
    photo: "/images/pptx-slides/slide6-img0.jpg",
    name: "Tata Play",
    industry: "Digital Entertainment",
    size: "400K+ cities · 1,600 employees",
    problems: [
      "Staffing inefficiencies: High call volume for standard service queries.",
      "Slow resolution: Email/phone reliance.",
      "Poor scalability: No automation for upgrades & troubleshooting.",
      "Limited channel support: Inefficient multi-channel engagement.",
    ],
    solutions: [
      "Expanded channel support: Integrated WhatsApp AI Bot for automated customer support & other inquiries, reduced call center load.",
      "Scaled automation: 5 million+/month standard queries and troubleshooting.",
      "Improved customer sat: Faster first response time and customer engagement efficiency.",
    ],
    metrics: [
      { stat: "$40%", label: "Cost savings" },
      { stat: "20%", label: "WhatsApp deflections" },
      { stat: "5M+/Mo", label: "Automated requests" },
    ],
    accent: "#7BB3E0",
  },
];

export default function CustomerUseCasesSlide({
  slideNumber = 12,
}: {
  slideNumber?: number;
}) {
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
          Nextiva AI delivers business results to enterprise customers
        </h1>
        <p
          style={{
            fontSize: 15,
            margin: "6px auto 0",
            maxWidth: 600,
            lineHeight: 1.4,
            visibility: "hidden",
          }}
        >
          .
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
