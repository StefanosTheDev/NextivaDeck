"use client";

import DecisionCaptureTemplate from "./strategic-truths/DecisionCaptureTemplate";

const TOPIC = {
  areaNum: "05",
  title: "Execution Requirements",
  storageKey: "fy27-execution",
};

export default function FutureDecisionExecutionCaptureSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionCaptureTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
