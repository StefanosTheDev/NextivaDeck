"use client";

import BoardConcernTemplate from "./strategic-truths/BoardConcernTemplate";

const TOPIC = {
  num: "03",
  title: "Trust is the product.",
  subtitle:
    "Agentic AI on our stack — first-party data in healthcare, finance, and legal — is the moat. It is also the largest risk surface.",
  concern:
    "The moat is agentic AI on our own stack, sitting on first-party data in healthcare, finance, and legal. This is also the biggest risk surface and belongs at the top of the risk list. In this new AI business, trust is the product.",
  posture: [
    "Make trust a top-level scorecard category — alongside revenue, retention, and AI activation.",
    "Run trust like an operating system — security & privacy, compliance, model & agent governance, incident response — with a named owner per area.",
    "Treat trust as a customer-facing capability, not just internal compliance — independent audits, customer-visible controls.",
  ],
  askRoom: [
    "Where is our trust posture brittle today?",
    "What gets added to FY27 as explicit trust investment?",
    "Who owns trust externally — not just internally?",
  ],
  owner: "TBD — co-owned across security, legal, and AI",
  cadence: "Monthly trust scorecard · quarterly board review",
  next: "Trust deep-dive scheduled in week 1 of post-session workstreams",
};

export default function FutureBoardConcernTrustSlide(props: {
  slideNumber?: number;
}) {
  return <BoardConcernTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
