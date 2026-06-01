"use client";

import BoardConcernTemplate from "./strategic-truths/BoardConcernTemplate";

const TOPIC = {
  num: "01",
  title: "Counter-moves.",
  subtitle:
    "Who's coming for our ground — incumbents, newcomers, and the players we haven't seen yet.",
  concern:
    "The deck articulates our moves, but their counter-moves are harder to see — especially if someone better-funded democratizes conversational AI down-market. The big players will come for our market soon.",
  posture: [
    "The threat surface is broad — incumbents, well-funded newcomers, and companies we haven't seen yet. The conversational layer is on a path to commodity.",
    "Defend on what's hardest to copy — first-party data depth in our verticals, the end-to-end agentic stack, and mid-market trust.",
    "Reframe positioning from \u201cUCaaS with AI\u201d or \u201cCCaaS with AI\u201d to a \u201cConversational AI Platform\u201d within FY27 — before someone else does it for us.",
  ],
  askRoom: [
    "Where does conversational AI commoditize first — and how fast?",
    "What is hard for any competitor — known or unknown — to take from us?",
    "What is the next dollar of investment defending?",
  ],
  owner: "CMO — competitive intelligence",
  cadence: "Monthly competitive review",
  next: "FY27 competitive POV landed before Q1 close",
};

export default function FutureBoardConcernCounterMovesSlide(props: {
  slideNumber?: number;
}) {
  return <BoardConcernTemplate topic={TOPIC} slideNumber={props.slideNumber} />;
}
