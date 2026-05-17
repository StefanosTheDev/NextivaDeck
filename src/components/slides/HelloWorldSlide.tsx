"use client";
import SlideFooter from "../SlideFooter";

export default function HelloWorldSlide({ slideNumber }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "72px 100px 0",
        }}
      >
        <h1 style={{ fontSize: 56, fontWeight: 700, color: "#FFFFFF", margin: 0, letterSpacing: "-0.02em" }}>hello world</h1>
      </div>
      <SlideFooter slideNumber={slideNumber ?? 1} variant="dark" />
    </div>
  );
}
