"use client";

import DecisionFramingTemplate from "./strategic-truths/DecisionFramingTemplate";

const TOPIC = {
  areaNum: "04",
  title: "More Productive Organization",
  questions: [
    "Where does operating leverage live today — and where does it need to live by FY27 Q4 exit?",
    "What is structural in the productivity lift versus a one-time correction?",
    "How do AI-driven productivity, platform mix, and cost discipline compound across the org?",
    "Which functions are pulling their weight on revenue per head — and which aren't?",
    "Where can we reduce complexity without sacrificing growth?",
    "What unit-economics targets ratify durable efficiency (LTV:CAC, GM per segment)?",
  ],
  output: [
    "Operating leverage map — rev/head $255K → $563K · R&D/head $921K → $2.6M (FY30)",
    "Gross margin and EBITDA trajectory locked — 67 → 74% GM · ~0 → 26% EBITDA at FY27 Q4 exit",
    "Productivity roadmap by function — named owners, named lifts",
    "Cost-to-serve baselines by segment and motion",
    "LTV:CAC targets per segment ratified (≥3× blended, ≥3.5× VSB, ≥3× Platform)",
    "Platform → SB gross-margin convergence POV (drivers and residuals named)",
  ],
  evidence: [
    "Revenue per head and per R&D head — FY26 actuals and FY27 path",
    "Gross margin and EBITDA bridge to FY27 Q4 exit",
    "Cost-to-serve by segment and motion",
    "Headcount vs. plan, regrettable attrition rate",
    "AI productivity gains by function (time-from-launch-to-revenue)",
    "Platform vs. SB margin gap analysis",
  ],
};

export default function FutureDecisionMoreProductiveOrgFramingSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionFramingTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
