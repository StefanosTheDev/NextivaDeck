"use client";

import DecisionAreaDividerTemplate from "./strategic-truths/DecisionAreaDividerTemplate";

const TOPIC = {
  areaNum: "03",
  title: "Accelerate Growth",
  subtitle:
    "Where we have the right to win — and the next dollar goes. Right-to-scale motions, partnerships, and AI activation in the front door.",
};

export default function FutureDecisionAccelerateGrowthDividerSlide(props: {
  slideNumber?: number;
}) {
  return (
    <DecisionAreaDividerTemplate topic={TOPIC} slideNumber={props.slideNumber} />
  );
}
