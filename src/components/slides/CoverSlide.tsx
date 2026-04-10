"use client";

export default function CoverSlide({ slideNumber: _sn }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: `radial-gradient(ellipse 80% 70% at 50% 50%, rgba(15,44,89,0.55) 0%, rgba(6,26,55,0.85) 50%, #000208 100%)`,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img
        src="/images/desert-hero.png"
        alt=""
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "55%",
          objectFit: "cover",
          objectPosition: "center top",
          opacity: 0.35,
          maskImage: "linear-gradient(to bottom, transparent 0%, black 30%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 30%)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p
          style={{ fontWeight: 700, fontSize: 22, letterSpacing: "0.15em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}
        >
          NEXTIVA
        </p>

        <h1
          className="font-heading"
          style={{ fontSize: 88, fontWeight: 500, color: "#FFFFFF", marginTop: 24, lineHeight: 1.15, textAlign: "center", maxWidth: 1540 }}
        >
          Agentic CX Platform
        </h1>

        <p
          style={{ fontSize: 28, fontWeight: 400, color: "rgba(255,255,255,0.6)", margin: "20px 0 0", lineHeight: 1.4 }}
        >
          Helping businesses to build stronger customer relationships
        </p>

        <div
          style={{ width: 120, height: 1, background: "rgba(255,255,255,0.2)", margin: "32px 0" }}
        />

        <p
          style={{ fontSize: 24, fontWeight: 400, color: "rgba(255,255,255,0.5)", margin: 0 }}
        >
          Confidential
        </p>
      </div>
    </div>
  );
}
