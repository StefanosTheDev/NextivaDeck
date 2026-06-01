"use client";

import DecisionFramingTemplate from "./strategic-truths/DecisionFramingTemplate";

const TOPIC = {
  areaNum: "04a",
  title: "Expand",
  questions: [
    "Where do we invest more in operating leverage — automation, AI tooling, platform consolidation?",
    "Which capabilities earn the next headcount investment to unlock revenue-per-head growth?",
    "Where does AI productivity (XBert, NEXT, internal copilots) compound across functions?",
    "Which segments and motions justify deeper cost-to-serve investment?",
    "What earns the next dollar inside the org — to make every dollar work harder?",
  ],
  output: [
    "Expand list of productivity investments by function (Test · Expand · Harvest)",
    "Investment rationale per item — tied to revenue/head, GM, and EBITDA targets",
    "Resource allocation map — engineering, AI, automation, ops",
    "Ratified unit-economics targets (LTV:CAC, GM per segment) backing the investment",
  ],
  evidence: [
    "Revenue/head and R&D/head trajectory — FY26 actuals → FY27 path",
    "AI productivity lift by function (time from launch to revenue)",
    "Cost-to-serve baselines by segment and motion",
    "Headcount vs. plan, regrettable attrition rate",
    "Platform vs. SB margin convergence drivers",
  ],
};

export default function FutureProductiveOrgExpandFramingSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionFramingTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
