"use client";
import SlideFooter from "../SlideFooter";

export default function SenthilRoadmapCoverSlide({ slideNumber = 0 }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(15,44,89,0.55) 0%, rgba(6,26,55,0.85) 50%, #000208 100%)",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          April 2026
        </p>

        <h1
          className="font-heading"
          style={{
            fontSize: 88,
            fontWeight: 500,
            color: "#FFFFFF",
            marginTop: 24,
            lineHeight: 1.15,
            textAlign: "center",
            maxWidth: 1540,
          }}
        >
          Nextiva Products Roadmap
        </h1>

        <div
          style={{
            width: 120,
            height: 1,
            background: "rgba(255,255,255,0.2)",
            margin: "32px 0",
          }}
        />

        <p
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "rgba(255,255,255,0.5)",
            margin: 0,
          }}
        >
          Proprietary &amp; Highly Confidential – Covered by NDA
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
