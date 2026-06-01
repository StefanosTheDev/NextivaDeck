"use client";

import DecisionFramingTemplate from "./strategic-truths/DecisionFramingTemplate";

const TOPIC = {
  areaNum: "01",
  title: "ICP",
  questions: [
    "Who are we built to serve — and who are we not?",
    "Where do we consistently win and create the strongest economics?",
    "What evidence supports it?",
  ],
  output: [
    "Named ICP",
    "Named exclusions",
    "Named priority verticals",
  ],
  evidence: [
    "LTV:CAC by segment",
    "NRR by profile",
    "AI activation by segment",
    "Win/loss by ICP fit",
  ],
};

export default function FutureDecisionICPFramingSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionFramingTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
