"use client";

import DecisionAreaDividerTemplate from "./strategic-truths/DecisionAreaDividerTemplate";

const TOPIC = {
  areaNum: "01",
  title: "ICP",
  subtitle:
    "Who Nextiva is built to serve — and who we are not. Named segments, named personas, named exclusions. The foundation everything else builds on.",
};

export default function FutureDecisionICPDividerSlide(props: {
  slideNumber?: number;
}) {
  return (
    <DecisionAreaDividerTemplate topic={TOPIC} slideNumber={props.slideNumber} />
  );
}
