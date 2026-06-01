"use client";

import DecisionCaptureTemplate from "./strategic-truths/DecisionCaptureTemplate";

const TOPIC = {
  areaNum: "01",
  title: "ICP",
  storageKey: "fy27-icp",
};

export default function FutureDecisionICPCaptureSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionCaptureTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
