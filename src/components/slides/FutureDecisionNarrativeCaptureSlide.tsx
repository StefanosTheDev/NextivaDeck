"use client";

import DecisionCaptureTemplate from "./strategic-truths/DecisionCaptureTemplate";

const TOPIC = {
  areaNum: "06",
  title: "Strategic Narrative",
  storageKey: "fy27-narrative",
};

export default function FutureDecisionNarrativeCaptureSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionCaptureTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
