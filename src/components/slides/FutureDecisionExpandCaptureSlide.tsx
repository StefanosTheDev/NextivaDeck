"use client";

import DecisionCaptureTemplate from "./strategic-truths/DecisionCaptureTemplate";

const TOPIC = {
  areaNum: "03",
  title: "Acceleration of Growth",
  storageKey: "fy27-acceleration-of-growth",
};

export default function FutureDecisionExpandCaptureSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionCaptureTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
