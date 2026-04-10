"use client";

import type { ReactNode } from "react";
import SlideFooter from "../../SlideFooter";

export const PR_BG =
  "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)";

export const PR_MUTED = "rgba(255,255,255,0.82)";
export const PR_DIM = "rgba(255,255,255,0.45)";
export const PR_ACCENT = "#7EB3E8";
export const PR_CARD_BG = "rgba(255,255,255,0.04)";
export const PR_CARD_BORDER = "rgba(255,255,255,0.1)";

export function ProductsRoadmapShell({
  eyebrow,
  title,
  subtitle,
  children,
  slideNumber,
}: {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
  slideNumber?: number;
}) {
  return (
    <div className="slide" style={{ background: PR_BG, justifyContent: "space-between" }}>
      <header style={{ padding: "40px 56px 8px", flexShrink: 0 }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: "0 0 8px",
          }}
        >
          {eyebrow}
        </p>
        <h1 className="font-heading" style={{ fontSize: 34, fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.12, maxWidth: 1600 }}>
          {title}
        </h1>
        {subtitle != null && subtitle !== false ? (
          <div style={{ fontSize: 15, color: PR_DIM, margin: "10px 0 0", lineHeight: 1.4, maxWidth: 1200 }}>{subtitle}</div>
        ) : null}
      </header>
      <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>{children}</div>
      <p style={{ fontSize: 10, color: "rgba(255,255,255,0.32)", textAlign: "center", margin: 0, padding: "2px 16px" }}>
        Proprietary & confidential — Nextiva Corporation · Products Roadmap April 2026
      </p>
      <SlideFooter slideNumber={slideNumber ?? 0} variant="dark" />
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        margin: "0 0 6px",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: PR_ACCENT,
      }}
    >
      {children}
    </p>
  );
}

export function BulletList({ items, fontSize = 10.5 }: { items: string[]; fontSize?: number }) {
  return (
    <ul style={{ margin: 0, padding: "0 0 0 14px", listStyle: "disc", color: PR_DIM }}>
      {items.map((t, i) => (
        <li key={`${i}-${t.slice(0, 40)}`} style={{ fontSize, lineHeight: 1.25, color: PR_MUTED, marginBottom: 3 }}>
          {t}
        </li>
      ))}
    </ul>
  );
}
