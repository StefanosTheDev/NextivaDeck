"use client";

import DecisionAreaDividerTemplate from "./strategic-truths/DecisionAreaDividerTemplate";

const TOPIC = {
  areaNum: "04",
  title: "Productive Organization",
  subtitle:
    "Compound efficiency — more value to customers, lower cost to serve. Operating leverage, unit economics, and the productivity gains we ratify.",
};

export default function FutureDecisionMoreProductiveOrgDividerSlide(props: {
  slideNumber?: number;
}) {
  return (
    <DecisionAreaDividerTemplate topic={TOPIC} slideNumber={props.slideNumber} />
  );
}
