"use client";
import SlideFooter from "../SlideFooter";

export default function BriefingPlatformDividerSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#7EB3E8",
            margin: 0,
          }}
        >
          Part Two
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 88,
            fontWeight: 400,
            color: "#FFFFFF",
            margin: 0,
            textAlign: "center",
            lineHeight: 1.05,
          }}
        >
          Platform Architecture.
        </h1>
        <div
          style={{
            width: 120,
            height: 1,
            background: "rgba(255,255,255,0.2)",
          }}
        />
        <p
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "rgba(255,255,255,0.55)",
            margin: 0,
            textAlign: "center",
            maxWidth: 640,
            lineHeight: 1.4,
          }}
        >
          How the platform is built &mdash; data, models, trust, and reach.
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
