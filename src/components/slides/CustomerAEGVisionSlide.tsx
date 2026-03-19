"use client";
import React from "react";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const problems = [
  "Limited self-service options for appointment scheduling, prescription refills and routine inquiries",
  "Inefficient customer engagement across multiple channels.",
  "Fragmented view of the customer. No visibility to customer data for use across departments",
  "No outbound sales and marketing able to use risk customer data",
];

const solutions = [
  "EMR-integrated agentic IVA for users to manage appointments, refill prescriptions",
  "Shifted inbound inquires from high-cost retail locations to contact center, deflecting 15%",
  "HIPAA compliant single view of the customer across clinical, retail, operations and marketing",
  "Increased sales leveraging customer information in outbound sales and marketing campaigns",
];

const metrics = [
  { stat: "20%", label: "Increased Sales" },
  { stat: "40K+ / Month", label: "Customers supported with AI" },
  { stat: "15%", label: "AI-Enabled Deflections" },
  { stat: "40K / Month", label: "Automated standard requests" },
];

export default function CustomerAEGVisionSlide({ slideNumber = 12 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "40px 80px 0", flexShrink: 0 }}
      >
        <p style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 4px" }}>
          Nextiva Customer
        </p>
        <h1 className="font-heading" style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
          AEG Vision
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ flex: 1, display: "flex", gap: 24, padding: "20px 80px 0", overflow: "hidden" }}
      >
        {/* Left — photo + company info */}
        <div style={{ width: "32%", flexShrink: 0, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ flex: 1, borderRadius: 14, overflow: "hidden", position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/pptx-slides/slide11-img0.png"
              alt="AEG Vision"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" }} />
            <div style={{ position: "absolute", bottom: 16, left: 20 }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#7BB3E0", margin: 0 }}>
                Retail Optometry
              </p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", margin: "4px 0 0" }}>500 Clinical Practice Locations · 5,000 employees</p>
            </div>
          </div>
        </div>

        {/* Right — Problem / Solution */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", gap: 16, flex: 1 }}>
            {/* Problem */}
            <div style={{ flex: 1, background: "rgba(220,70,70,0.07)", border: "1px solid rgba(220,70,70,0.18)", borderRadius: 14, padding: "20px 22px" }}>
              <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#E07E7E", margin: "0 0 14px" }}>
                Problem
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {problems.map((p) => (
                  <li key={p} style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.5, marginBottom: 8, paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#E07E7E", fontWeight: 700 }}>✗</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div style={{ flex: 1, background: "rgba(40,96,178,0.08)", border: "1px solid rgba(40,96,178,0.2)", borderRadius: 14, padding: "20px 22px" }}>
              <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#7EB3E8", margin: "0 0 14px" }}>
                Solution
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {solutions.map((s) => (
                  <li key={s} style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.5, marginBottom: 8, paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#7EB3E8" }}>✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Metrics */}
          <div style={{ display: "flex", gap: 16 }}>
            {metrics.map((m) => (
              <div key={m.label} style={{ flex: 1, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "14px 16px", textAlign: "center" }}>
                <p className="font-heading" style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>{m.stat}</p>
                <p style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", color: "rgba(255,255,255,0.4)", margin: "4px 0 0" }}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
