"use client";

import DecisionAreaDividerTemplate from "./strategic-truths/DecisionAreaDividerTemplate";

const TOPIC = {
  areaNum: "06",
  title: "Strategic Narrative",
  subtitle:
    "The story we align on — internally and externally — into FY27. What changed, why we made these choices, and how we explain it consistently.",
};

export default function FutureDecisionNarrativeDividerSlide(props: {
  slideNumber?: number;
}) {
  return (
    <DecisionAreaDividerTemplate topic={TOPIC} slideNumber={props.slideNumber} />
  );
}
