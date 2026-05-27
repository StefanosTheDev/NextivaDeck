"use client";

import AtAGlanceSlide from "./AtAGlanceSlide";

export default function AtAGlanceAsSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
  slideId?: string;
}) {
  return <AtAGlanceSlide slideNumber={slideNumber} />;
}
