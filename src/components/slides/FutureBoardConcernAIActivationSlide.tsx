"use client";

import BoardConcernTemplate from "./strategic-truths/BoardConcernTemplate";

const TOPIC = {
  num: "02",
  title: "Everyone's job \u2260 no one's job.",
  subtitle:
    "Name one owner against the 17 \u2192 62% installed-base AI activation curve — the metric that moves the valuation.",
  concern:
    "\u201cRevenue is everyone's job\u201d is culturally right, but the whole re-rate hangs on one number: installed-base AI activation going 17% to 62%. One name should sit against that curve — the way the team has for SB and Platform bookings.",
  posture: [
    "Treat installed-base AI activation as a first-class scorecard metric — equal weight to SB and Platform bookings.",
    "Name a single owner with P&L-equivalent accountability — not a shared committee.",
    "Weekly review · monthly board-visible bridge — what moved, what didn't, what we changed.",
  ],
  askRoom: [
    "Who owns the 17 \u2192 62% curve?",
    "What instrumentation makes activation reviewable weekly by Q1?",
    "How does the owner's mandate work across CS, Product, and Sales?",
  ],
  owner: "TBD",
  cadence: "Weekly review · monthly board bridge",
  next: "Owner named by end of Day 3",
};

export default function FutureBoardConcernAIActivationSlide(props: {
  slideNumber?: number;
}) {
  return <BoardConcernTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
