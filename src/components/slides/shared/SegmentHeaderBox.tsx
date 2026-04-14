"use client";

export interface SegmentHeaderBoxProps {
  name: string;
  range: string;
  badges: readonly string[];
  customers: string;
  custPct: string;
  arr: string;
  arrPct: string;
  /** "compact" = tight spacing (default). "standard" = +2px on every text element. */
  size?: "compact" | "standard";
  /** Optional third metric — when present, the metric grid expands to 3
   *  columns. Used by the Lead Velocity Buckets slide to surface lead-to-sale
   *  conversion rates alongside customers/ARR. */
  conversion?: {
    value: string;
    label: string;
    sub?: string;
  };
}

export default function SegmentHeaderBox({
  name,
  range,
  badges,
  customers,
  custPct,
  arr,
  arrPct,
  size = "compact",
  conversion,
}: SegmentHeaderBoxProps) {
  const bump = size === "standard" ? 2 : 0;
  const headerPadY = size === "standard" ? 16 : 14;
  const headerPadX = size === "standard" ? 22 : 20;
  const metricPad = size === "standard" ? 14 : 12;
  const metricCols = conversion ? "1fr 1fr 1fr" : "1fr 1fr";

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      {/* Segment header — name/range + product pills */}
      <div
        style={{
          padding: `${headerPadY}px ${headerPadX}px ${headerPadY - 2}px`,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12,
        }}
      >
        <div>
          <h2
            className="font-heading"
            style={{
              fontSize: 22 + bump,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            {name}
          </h2>
          <p
            style={{
              fontSize: 13 + bump,
              color: "rgba(255,255,255,0.5)",
              margin: "3px 0 0",
            }}
          >
            {range}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: 5,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {badges.map((b) => (
            <span
              key={b}
              style={{
                fontSize: 9 + bump,
                fontWeight: 700,
                color: "rgba(255,255,255,0.8)",
                letterSpacing: "0.02em",
                background: "rgba(40,96,178,0.25)",
                border: "1px solid rgba(40,96,178,0.4)",
                borderRadius: 5,
                padding: "3px 7px",
                whiteSpace: "nowrap",
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics row — Customers / ARR / [Lead → Sale] */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: metricCols,
          gap: 0,
        }}
      >
        <div
          style={{
            padding: `${metricPad}px ${headerPadX}px`,
            borderRight: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            className="font-heading"
            style={{
              fontSize: 26 + bump,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1,
            }}
          >
            {customers}
          </p>
          <p
            style={{
              fontSize: 11 + bump,
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: "rgba(255,255,255,0.55)",
              margin: "4px 0 0",
              textTransform: "uppercase",
            }}
          >
            Customers
          </p>
          <p
            style={{
              fontSize: 12 + bump,
              color: "#5B9CF5",
              margin: "2px 0 0",
              fontWeight: 500,
            }}
          >
            {custPct}
          </p>
        </div>
        <div
          style={{
            padding: `${metricPad}px ${headerPadX}px`,
            borderRight: conversion
              ? "1px solid rgba(255,255,255,0.06)"
              : "none",
          }}
        >
          <p
            className="font-heading"
            style={{
              fontSize: 26 + bump,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1,
            }}
          >
            {arr}
          </p>
          <p
            style={{
              fontSize: 11 + bump,
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: "rgba(255,255,255,0.55)",
              margin: "4px 0 0",
              textTransform: "uppercase",
            }}
          >
            ARR
          </p>
          <p
            style={{
              fontSize: 12 + bump,
              color: "#5B9CF5",
              margin: "2px 0 0",
              fontWeight: 500,
            }}
          >
            {arrPct}
          </p>
        </div>
        {conversion && (
          <div style={{ padding: `${metricPad}px ${headerPadX}px` }}>
            <p
              className="font-heading"
              style={{
                fontSize: 26 + bump,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1,
              }}
            >
              {conversion.value}
            </p>
            <p
              style={{
                fontSize: 11 + bump,
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: "rgba(255,255,255,0.55)",
                margin: "4px 0 0",
                textTransform: "uppercase",
              }}
            >
              {conversion.label}
            </p>
            {conversion.sub && (
              <p
                style={{
                  fontSize: 12 + bump,
                  color: "#5B9CF5",
                  margin: "2px 0 0",
                  fontWeight: 500,
                }}
              >
                {conversion.sub}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
