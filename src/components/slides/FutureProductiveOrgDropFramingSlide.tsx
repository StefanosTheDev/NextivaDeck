"use client";

import DecisionFramingTemplate from "./strategic-truths/DecisionFramingTemplate";

const TOPIC = {
  areaNum: "04b",
  title: "Drop",
  questions: [
    "What manual or low-leverage processes should we stop — or automate away?",
    "Where is complexity diluting productivity without earning return?",
    "Which roles, tools, or workflows free real capacity if retired?",
    "What internal commitments compound cost-to-serve without lifting margin?",
  ],
  output: [
    "Drop list of low-leverage work, tools, or processes",
    "Transition ownership for each retirement",
    "Capacity freed for highest-leverage productivity investments",
    "Headcount and budget reallocation plan",
  ],
  evidence: [
    "Cost-to-serve outliers by function and segment",
    "ROI of internal tools, platforms, and licenses",
    "Time-spent analysis on low-margin activities",
    "Headcount consumed by retired motions or roles",
  ],
};

export default function FutureProductiveOrgDropFramingSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionFramingTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
