"use client";

import WhoWeServeCopySlide from "./WhoWeServeCopySlide";

export default function WhoWeServeCopy2Slide({
  slideNumber = 0,
}: {
  slideNumber?: number;
  slideId?: string;
}) {
  return <WhoWeServeCopySlide slideNumber={slideNumber} />;
}
