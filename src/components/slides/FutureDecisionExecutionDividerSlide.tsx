"use client";

import DecisionAreaDividerTemplate from "./strategic-truths/DecisionAreaDividerTemplate";

const TOPIC = {
  areaNum: "05",
  title: "Execution Requirements",
  subtitle:
    "What must be true to deliver the plan — capabilities, dependencies, and ownership. The cross-functional commitments that turn strategy into execution.",
};

export default function FutureDecisionExecutionDividerSlide(props: {
  slideNumber?: number;
}) {
  return (
    <DecisionAreaDividerTemplate topic={TOPIC} slideNumber={props.slideNumber} />
  );
}
