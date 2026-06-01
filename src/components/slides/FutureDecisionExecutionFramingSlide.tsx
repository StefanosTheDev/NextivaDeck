"use client";

import DecisionFramingTemplate from "./strategic-truths/DecisionFramingTemplate";

const TOPIC = {
  areaNum: "05",
  title: "Execution Requirements",
  questions: [
    "What must be true to deliver this strategy?",
    "What gets in the way — and what is the fix?",
    "What are we unwilling to do — and why?",
  ],
  output: ["Capability map", "Dependency map", "Ownership model"],
  evidence: [
    "FY26 execution gap analysis",
    "Product roadmap vs. strategy",
    "AI infrastructure requirements",
    "Org capability assessment",
  ],
};

export default function FutureDecisionExecutionFramingSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionFramingTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
