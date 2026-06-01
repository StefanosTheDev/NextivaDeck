"use client";

const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const MUTED = "#A29E9B";
const SEP = "#E0DEDA";

export type SessionStep =
  | "context"
  | "direction"
  | "scorecard"
  | "learned"
  | "pressure"
  | "decisions";

const STEPS: { id: SessionStep; label: string }[] = [
  { id: "context", label: "Context" },
  { id: "direction", label: "Direction" },
  { id: "scorecard", label: "Scorecard" },
  { id: "learned", label: "What We Learned" },
  { id: "pressure", label: "Pressure Test" },
  { id: "decisions", label: "Decisions" },
];

export default function SessionSectionNav({
  active,
}: {
  active: SessionStep;
}) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: "8px 72px 6px",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {STEPS.map((s, i) => {
        const isActive = s.id === active;
        return (
          <div
            key={s.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: isActive ? 800 : 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: isActive ? BLUE : MUTED,
                padding: isActive ? "3px 10px" : "3px 6px",
                borderRadius: 999,
                background: isActive ? "#E8EEF7" : "transparent",
                border: isActive ? `1px solid ${BLUE}55` : "1px solid transparent",
                transition: "all 120ms ease",
              }}
            >
              {s.label}
            </span>
            {i < STEPS.length - 1 && (
              <span
                aria-hidden
                style={{
                  width: 14,
                  height: 1,
                  background: SEP,
                  flexShrink: 0,
                }}
              />
            )}
          </div>
        );
      })}
      <span style={{ visibility: "hidden", color: NAVY_DARK }}>.</span>
    </nav>
  );
}
