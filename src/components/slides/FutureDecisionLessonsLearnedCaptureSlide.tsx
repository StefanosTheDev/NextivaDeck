"use client";

import DecisionCaptureTemplate from "./strategic-truths/DecisionCaptureTemplate";

const TOPIC = {
  areaNum: "00",
  title: "Lessons Learned",
  storageKey: "fy27-lessons-learned",
};

export default function FutureDecisionLessonsLearnedCaptureSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionCaptureTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
