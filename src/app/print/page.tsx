"use client";

import { useState, useCallback } from "react";
import { Download, ArrowLeft, FileText, Loader2 } from "lucide-react";

export default function PrintPage() {
  const [status, setStatus] = useState<"idle" | "generating" | "done" | "error">("idle");

  const handleDownload = useCallback(async () => {
    setStatus("generating");
    try {
      const res = await fetch("/api/generate-pdf");
      if (!res.ok) throw new Error("PDF generation failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Nextiva-Investor-Deck-2026.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setStatus("done");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #0a0f1a 0%, #111827 100%)",
        fontFamily: "'Space Grotesk', sans-serif",
        padding: 40,
      }}
    >
      <a
        href="/"
        style={{
          position: "absolute",
          top: 24,
          left: 32,
          display: "flex",
          alignItems: "center",
          gap: 8,
          color: "rgba(255,255,255,0.5)",
          textDecoration: "none",
          fontSize: 14,
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
      >
        <ArrowLeft size={16} />
        Back to Deck
      </a>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
          maxWidth: 480,
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "rgba(40,96,178,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FileText size={36} style={{ color: "#5b9cf5" }} />
        </div>

        <div>
          <h1 style={{ fontSize: 28, fontWeight: 600, color: "#fff", margin: 0 }}>
            Download PDF
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", marginTop: 8 }}>
            Generate a high-quality PDF of the full Nextiva Investor Deck with all slides in their current order.
          </p>
        </div>

        <button
          onClick={handleDownload}
          disabled={status === "generating"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: "16px 40px",
            borderRadius: 12,
            border: "none",
            background:
              status === "done"
                ? "#059669"
                : status === "error"
                  ? "#dc2626"
                  : "#2860B2",
            color: "#fff",
            fontSize: 17,
            fontWeight: 600,
            fontFamily: "'Space Grotesk', sans-serif",
            cursor: status === "generating" ? "wait" : "pointer",
            transition: "all 0.25s",
            opacity: status === "generating" ? 0.7 : 1,
            minWidth: 240,
            boxShadow:
              status === "idle"
                ? "0 4px 24px rgba(40,96,178,0.35)"
                : "none",
          }}
          onMouseEnter={(e) => {
            if (status === "idle")
              e.currentTarget.style.boxShadow = "0 6px 32px rgba(40,96,178,0.5)";
          }}
          onMouseLeave={(e) => {
            if (status === "idle")
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(40,96,178,0.35)";
          }}
        >
          {status === "generating" ? (
            <>
              <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} />
              Generating PDF…
            </>
          ) : status === "done" ? (
            <>
              <Download size={20} />
              Downloaded!
            </>
          ) : status === "error" ? (
            "Something went wrong — try again"
          ) : (
            <>
              <Download size={20} />
              Download PDF
            </>
          )}
        </button>

        {status === "generating" && (
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            This may take 15–30 seconds while all slides render…
          </p>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
