"use client";

import DecisionAreaDividerTemplate from "./strategic-truths/DecisionAreaDividerTemplate";

const TOPIC = {
  areaNum: "02",
  title: "Grow the Base",
  subtitle:
    "Customer value model — retention, expansion, monetization. How we drive NRR to 100% inside the base we already have.",
};

export default function FutureDecisionGrowBaseDividerSlide(props: {
  slideNumber?: number;
}) {
  return (
    <DecisionAreaDividerTemplate topic={TOPIC} slideNumber={props.slideNumber} />
  );
}
