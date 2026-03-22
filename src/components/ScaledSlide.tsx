"use client";

import { useState, useEffect, type ReactNode } from "react";

function useSlideScale() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const update = () => {
      setScale(Math.max(window.innerWidth / 1920, window.innerHeight / 1080));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return scale;
}

export default function ScaledSlide({ children }: { children: ReactNode }) {
  const scale = useSlideScale();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 1920,
          height: 1080,
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
