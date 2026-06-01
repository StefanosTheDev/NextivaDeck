"use client";

import DecisionFramingTemplate from "./strategic-truths/DecisionFramingTemplate";

const TOPIC = {
  areaNum: "03",
  title: "Acceleration of Growth",
  questions: [
    "Where do we have the right to win — and earn the next dollar of investment?",
    "Which growth motions have demonstrated the right to scale (PLG, direct, partnerships)?",
    "What is the FY27 sequencing across organic, partnerships, and opportunistic M&A?",
    "How do we drive 100% booking attainment with ≥95% conversion to recognized revenue in 90 days?",
    "Where does AI activation in the installed base unlock acceleration — XBert and NEXT as the front door?",
    "What earns the next resource — sales rep, product investment, partnership dollar?",
  ],
  output: [
    "Expand list — products, motions, and bets with named posture (Test, Expand, Harvest)",
    "Investment rationale and named hypothesis per item",
    "FY27 growth sequencing — organic → partnerships → opportunistic M&A",
    "Booking commits aligned to 100% attainment · ≥95% 90-day conversion",
    "Named partnership priorities — Google, Deepgram, OpenAI, plus next-wave targets",
  ],
  evidence: [
    "FY26 performance by product and motion",
    "Pipeline by investment area",
    "LTV:CAC by segment and motion",
    "Resource vs. return by area",
    "AI activation lift in acquisition (XBert, NEXT)",
    "Partnership-attributed bookings to date",
  ],
};

export default function FutureDecisionExpandFramingSlide(props: {
  slideNumber?: number;
}) {
  return <DecisionFramingTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
