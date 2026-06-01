"use client";

import DecisionFramingTemplate from "./strategic-truths/DecisionFramingTemplate";

const TOPIC = {
  areaNum: "00",
  title: "Lessons Learned",
  questions: [
    "Which FY26 assumptions proved true — and which proved false?",
    "What surprised us, and what are we intentionally changing?",
    "What should we explicitly not repeat?",
  ],
  output: [
    "Agreed lessons documented",
    "Assumption changes named",
    "Foundation for FY27 decisions",
  ],
  evidence: [
    "FY26 actuals vs. plan",
    "NRR and churn analysis",
    "AI activation vs. target",
    "GTM productivity data",
  ],
};

export default function FutureDecisionLessonsLearnedFramingSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionFramingTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
