"use client";

import DecisionFramingTemplate from "./strategic-truths/DecisionFramingTemplate";

const TOPIC = {
  areaNum: "03a",
  title: "Expand",
  questions: [
    "What earns the next dollar of investment?",
    "What earns the next resource — sales rep, product dollar, partnership dollar?",
    "What has demonstrated the right to scale?",
    "Where do we double down vs. test, harvest, or hold?",
    "Which bets carry an Expand posture — and what is the hypothesis we'd refute or confirm?",
  ],
  output: [
    "Expand list with named posture per item (Test · Expand · Harvest)",
    "Investment rationale and named hypothesis per item",
    "Resource allocation by area — sales, product, partnership",
    "Ratified LTV:CAC targets per segment and motion",
  ],
  evidence: [
    "FY26 performance by product and motion",
    "Pipeline by investment area",
    "Resource vs. return by area",
    "LTV:CAC by segment and motion",
    "Partnership-attributed bookings to date",
  ],
};

export default function FutureDecisionExpandListFramingSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionFramingTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
