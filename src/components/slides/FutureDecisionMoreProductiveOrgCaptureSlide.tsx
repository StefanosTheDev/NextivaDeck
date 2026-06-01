"use client";

import DecisionCaptureTemplate from "./strategic-truths/DecisionCaptureTemplate";

const TOPIC = {
  areaNum: "04",
  title: "More Productive Organization",
  storageKey: "fy27-more-productive-org",
};

export default function FutureDecisionMoreProductiveOrgCaptureSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionCaptureTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
