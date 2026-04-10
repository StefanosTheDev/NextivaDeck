"use client";

export default function ClosingSlide({ slideNumber: _sn }: { slideNumber?: number }) {
  return (
    <div
      className="slide"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 50% 60%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 50%, #000208 100%)",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p style={{ fontWeight: 700, fontSize: 22, letterSpacing: "0.15em", textTransform: "uppercase", color: "#CCC7C3", margin: 0 }}>
          NEXTIVA
        </p>

        <h2 className="font-heading" style={{ fontSize: 80, fontWeight: 500, color: "#FFFFFF", marginTop: 24, lineHeight: 1.15, whiteSpace: "nowrap" }}>
          Thank you.
        </h2>

        <div style={{ marginTop: 36, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 20, color: "rgba(255,255,255,0.5)" }}>
            nextiva.com
          </span>
          <span style={{ fontSize: 16, color: "rgba(255,255,255,0.25)" }}>949-519-1086</span>
        </div>

        <div style={{ width: 80, height: 1, background: "rgba(255,255,255,0.15)", marginTop: 44 }} />

        <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 24, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>
          <span>Scottsdale, Arizona</span>
          <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "inline-block" }} />
          <span>Confidential</span>
        </div>
      </div>
    </div>
  );
}
