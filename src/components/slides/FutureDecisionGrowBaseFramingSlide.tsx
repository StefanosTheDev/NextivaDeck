"use client";

import DecisionFramingTemplate from "./strategic-truths/DecisionFramingTemplate";

const TOPIC = {
  areaNum: "02",
  title: "Grow the Base",
  questions: [
    "How do we protect the base from churn?",
    "How do we expand revenue and AI within existing accounts?",
    "How do we monetize the base to drive NRR from 91% to 94%?",
    "What are the highest-leverage drivers?",
  ],
  output: [
    "Grow-the-Base framework",
    "Customer value model",
    "NRR improvement plan",
  ],
  evidence: [
    "Churn drivers by segment",
    "Expansion revenue by motion",
    "AI activation funnel",
    "NRR bridge analysis",
  ],
};

export default function FutureDecisionGrowBaseFramingSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionFramingTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
