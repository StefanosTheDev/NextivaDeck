"use client";

import type { LucideIcon } from "lucide-react";

export type CustomerCaseMetric = { stat: string; label: string };

export type CustomerCaseCardData = {
  icon: LucideIcon;
  photo: string;
  name: string;
  industry: string;
  size: string;
  problems: string[];
  solutions: string[];
  metrics: CustomerCaseMetric[];
  accent: string;
  /** Thumbnail `object-fit`; default `cover` (logos often need `contain`). */
  photoObjectFit?: "cover" | "contain";
  /** Background behind thumbnail (e.g. dark panel for white logos with `contain`). */
  photoThumbBackground?: string;
};

type CustomerUseCaseCaseCardProps = {
  data: CustomerCaseCardData;
  /**
   * `fill` (default): middle column grows and metrics pin to the bottom of a tall card.
   * `hug`: problem/solution height follows copy; small gap above metrics (three-across slide).
   */
  bodyLayout?: "fill" | "hug";
};

export default function CustomerUseCaseCaseCard({
  data: c,
  bodyLayout = "fill",
}: CustomerUseCaseCaseCardProps) {
  const Icon = c.icon;
  const photoFit = c.photoObjectFit ?? "cover";
  const thumbBg = c.photoThumbBackground;
  const hug = bodyLayout === "hug";
  return (
    <article
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        padding: "16px 20px 14px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: c.accent,
          zIndex: 1,
        }}
      />

      <div style={{ marginBottom: 16 }}>
        <span
          style={{
            display: "inline-block",
            padding: "5px 16px",
            borderRadius: 20,
            background: c.accent,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "#FFFFFF",
          }}
        >
          {c.industry}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 14,
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 14,
            overflow: "hidden",
            flexShrink: 0,
            border: `2px solid ${c.accent}40`,
            background: thumbBg ?? "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={c.photo}
            alt={c.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: photoFit,
              objectPosition: "center center",
            }}
          />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            {c.name}
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.4)",
              margin: "4px 0 0",
              lineHeight: 1.25,
            }}
          >
            {c.size}
          </p>
        </div>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: `${c.accent}18`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={16} color={c.accent} strokeWidth={2} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 14,
          ...(hug
            ? { flex: "none", overflow: "visible" }
            : { flex: 1, overflow: "hidden" }),
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#E07E7E",
              margin: "0 0 6px",
            }}
          >
            Problem
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {c.problems.map((p, i) => (
              <li
                key={`p-${i}-${p.slice(0, 24)}`}
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.4,
                  marginBottom:
                    hug && i === c.problems.length - 1 ? 0 : 5,
                  paddingLeft: 16,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "#E07E7E",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                >
                  ✗
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            width: 1,
            background: "rgba(255,255,255,0.08)",
            flexShrink: 0,
          }}
        />

        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#7EB3E8",
              margin: "0 0 6px",
            }}
          >
            Solution
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {c.solutions.map((s, i) => (
              <li
                key={`s-${i}-${s.slice(0, 24)}`}
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.4,
                  marginBottom:
                    hug && i === c.solutions.length - 1 ? 0 : 5,
                  paddingLeft: 16,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "#7EB3E8",
                    fontSize: 13,
                  }}
                >
                  ✓
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          marginTop: hug ? 8 : "auto",
          paddingTop: 3,
          flexShrink: 0,
          ...(c.metrics.length === 3
            ? {
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 8,
                alignItems: "center",
              }
            : {
                display: "flex",
                flexWrap: "wrap",
                gap: "6px 16px",
                alignItems: "center",
              }),
        }}
      >
        {c.metrics.map((m, i) => {
          const packJustify =
            c.metrics.length === 3
              ? i === 0
                ? "flex-start"
                : i === 1
                  ? "center"
                  : "flex-end"
              : "flex-start";
          return (
            <div
              key={m.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: packJustify,
                minWidth: 0,
                width: c.metrics.length === 3 ? "100%" : "auto",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  maxWidth: "100%",
                }}
              >
                <p
                  className="font-heading"
                  style={{
                    fontSize: 19,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {m.stat}
                </p>
                <p
                  style={{
                    fontSize: 9,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                    color: "rgba(255,255,255,0.42)",
                    margin: 0,
                    lineHeight: 1.15,
                    maxWidth: c.metrics.length === 3 ? "min(100%, 7.5rem)" : 140,
                    textAlign: "left",
                  }}
                >
                  {m.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
