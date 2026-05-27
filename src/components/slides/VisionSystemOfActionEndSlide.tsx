"use client";

import VisionSystemOfActionSlide from "./VisionSystemOfActionSlide";

export default function VisionSystemOfActionEndSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
  slideId?: string;
}) {
  return <VisionSystemOfActionSlide slideNumber={slideNumber} />;
}
