"use client";
import React from "react";
import { motion } from "framer-motion";
import SlideFooter from "../SlideFooter";

const problems = [
  "Chaotic inbound communications management, with many queues, long hold times, significant misrouting",
  "Routine tasks like appointment scheduling and prescription refills are manual and take human capacity",
  "Fragmented communications with patients across departments, with no visibility to customer information",
];

const solutions = [
  "Rules-based front end supports routing to more than 10 care practices. AI-agent handles routine inquiries.",
  "EMR integration enables routine tasks to be performed by the AI Agent experience.",
  "Seamless patient transition across practices and departments. AI handles the easy stuff and connects human agents for complex inquiries",
];

const outcomes = [
  "Reduced wait times + faster patient routing to departments and providers",
  "Addition of self-serve for users to manage appointments, refill prescriptions.",
  "20% Deflection of routine calls",
  "Seamless Agent Transfer — direct connection to human agents for complex related inquiries.",
];

const metrics = [
  { stat: "2 min", label: "Average wait time (reduced)" },
  { stat: "20%", label: "AI-Enabled Deflections" },
];

export default function CustomerShastaSlide({ slideNumber = 12 }: { slideNumber?: number }) {
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
          Shasta Community Health
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
              src="/images/pptx-slides/slide9-img0.png"
              alt="Shasta Community Health"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" }} />
            <div style={{ position: "absolute", bottom: 16, left: 20 }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#7BB3E0", margin: 0 }}>
                Community Healthcare
              </p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", margin: "4px 0 0" }}>7 Clinical Locations · 100 Providers across 10+ practices</p>
            </div>
          </div>
        </div>

        {/* Right — Problem / Solution / Outcomes */}
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

          {/* Outcomes + Metrics */}
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ flex: 2, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "14px 20px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#CCC7C3", margin: "0 0 8px" }}>Outcomes</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {outcomes.map((o) => (
                  <span key={o} style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>• {o}</span>
                ))}
              </div>
            </div>
            {metrics.map((m) => (
              <div key={m.label} style={{ flex: 1, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "14px 16px", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>{m.stat}</p>
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
