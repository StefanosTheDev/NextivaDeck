"use client";
import SlideFooter from "../SlideFooter";

export default function SenthilTechnologyDividerSlide({ slideNumber = 0 }: { slideNumber?: number }) {
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
        }}
      >
        <h1
          className="font-heading"
          style={{
            fontSize: 72,
            fontWeight: 400,
            color: "#FFFFFF",
            margin: 0,
            textAlign: "center",
          }}
        >
          Technology.
        </h1>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
