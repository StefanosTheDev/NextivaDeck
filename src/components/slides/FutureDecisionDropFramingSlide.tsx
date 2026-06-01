"use client";

import DecisionFramingTemplate from "./strategic-truths/DecisionFramingTemplate";

const TOPIC = {
  areaNum: "04",
  title: "Drop",
  questions: [
    "What should stop — and why?",
    "What distracts from the ICP and Grow-the-Base model?",
    "What does stopping it free up?",
  ],
  output: ["Drop list", "Transition ownership"],
  evidence: [
    "ROI by product and motion",
    "Cost-to-serve outside ICP",
    "Resource consumed by low-return areas",
  ],
};

export default function FutureDecisionDropFramingSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionFramingTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
