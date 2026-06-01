"use client";

import DecisionFramingTemplate from "./strategic-truths/DecisionFramingTemplate";

const TOPIC = {
  areaNum: "06",
  title: "Strategic Narrative",
  questions: [
    "What changed — and why are we making these choices?",
    "Where will people experience confusion or resistance?",
    "How do we explain it consistently?",
  ],
  output: ["Leadership narrative", "Communication themes"],
  evidence: [
    "Known friction points from FY26",
    "Board and investor commitments",
    "Customer-facing positioning",
  ],
};

export default function FutureDecisionNarrativeFramingSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionFramingTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
