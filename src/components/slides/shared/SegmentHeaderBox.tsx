"use client";

export interface SegmentHeaderBoxProps {
  name: string;
  range: string;
  /** Product pills; omit or pass `[]` to hide. */
  badges?: readonly string[];
  customers?: string;
  custPct?: string;
  arr?: string;
  arrPct?: string;
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
  /** When true, only the optional `conversion` column is shown (no Customers / ARR). */
  omitCustomerArrMetrics?: boolean;
  /**
   * Tight card: no wasted header/metric bands. When combined with
   * `omitCustomerArrMetrics`, `conversion`, and no badges, renders one compact
   * block and `width: fit-content` so the card only spans its text.
   */
  dense?: boolean;
  /** Larger segment title, range, product pills, and conversion metric (Lead Velocity V4). */
  largeFonts?: boolean;
  /** When set, card is exactly this tall (e.g. match velocity bar track beside it). */
  rowHeightPx?: number;
}

export default function SegmentHeaderBox({
  name,
  range,
  badges = [],
  customers,
  custPct,
  arr,
  arrPct,
  size = "compact",
  conversion,
  omitCustomerArrMetrics = false,
  dense = false,
  largeFonts = false,
  rowHeightPx,
}: SegmentHeaderBoxProps) {
  const bump = size === "standard" ? 2 : 0;
  const headerPadY = largeFonts ? 16 : size === "standard" ? 16 : 14;
  const headerPadX = largeFonts ? 22 : size === "standard" ? 22 : 20;
  const metricPad = largeFonts ? 16 : size === "standard" ? 14 : 12;
  const showCustArr = !omitCustomerArrMetrics;
  const metricCols = !showCustArr
    ? conversion
      ? "1fr"
      : "1fr 1fr"
    : conversion
      ? "1fr 1fr 1fr"
      : "1fr 1fr";

  const mergedConversionOnly =
    dense && !showCustArr && conversion && badges.length === 0;

  const outerRadius = mergedConversionOnly ? 10 : 16;

  const nameFs = largeFonts ? 28 : 22 + bump;
  const rangeFs = largeFonts ? 16 : 13 + bump;
  const badgeFs = largeFonts ? 12 : 9 + bump;
  const convValFs = largeFonts ? 34 : 26 + bump;
  const convLabFs = largeFonts ? 13 : 11 + bump;

  const rowFixed =
    rowHeightPx != null
      ? {
          height: rowHeightPx,
          minHeight: rowHeightPx,
          maxHeight: rowHeightPx,
          display: "flex" as const,
          flexDirection: "column" as const,
          boxSizing: "border-box" as const,
        }
      : {};

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: outerRadius,
        overflow: "hidden",
        ...rowFixed,
        ...(mergedConversionOnly
          ? { width: "fit-content", maxWidth: 200 }
          : {}),
      }}
    >
      {mergedConversionOnly ? (
        <div
          style={{
            padding: "8px 10px",
            display: "flex",
            flexDirection: "column",
            gap: 0,
            ...(rowHeightPx != null
              ? {
                  flex: 1,
                  minHeight: 0,
                  justifyContent: "center",
                }
              : {}),
          }}
        >
          <h2
            className="font-heading"
            style={{
              fontSize: largeFonts ? 20 + bump : 16 + bump,
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
              fontSize: largeFonts ? 14 + bump : 11 + bump,
              color: "rgba(255,255,255,0.5)",
              margin: "1px 0 0",
              lineHeight: 1.25,
            }}
          >
            {range}
          </p>
          <div
            style={{
              marginTop: 6,
              paddingTop: 6,
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <p
              className="font-heading"
              style={{
                fontSize: largeFonts ? 26 + bump : 19 + bump,
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
                fontSize: largeFonts ? 11 + bump : 9 + bump,
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "rgba(255,255,255,0.55)",
                margin: "2px 0 0",
                textTransform: "uppercase",
              }}
            >
              {conversion.label}
            </p>
            {conversion.sub && (
              <p
                style={{
                  fontSize: 10 + bump,
                  color: "#5B9CF5",
                  margin: "2px 0 0",
                  fontWeight: 500,
                }}
              >
                {conversion.sub}
              </p>
            )}
          </div>
        </div>
      ) : (
        <>
      {/* Segment header — name/range + product pills */}
      <div
        style={{
          padding: `${headerPadY}px ${headerPadX}px ${headerPadY - 2}px`,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12,
          ...(rowHeightPx != null ? { flexShrink: 0 } : {}),
        }}
      >
        <div>
          <h2
            className="font-heading"
            style={{
              fontSize: nameFs,
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
              fontSize: rangeFs,
              color: "rgba(255,255,255,0.5)",
              margin: largeFonts ? "4px 0 0" : "3px 0 0",
            }}
          >
            {range}
          </p>
        </div>
        {badges.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: largeFonts ? 6 : 5,
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            {badges.map((b) => (
              <span
                key={b}
                style={{
                  fontSize: badgeFs,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.8)",
                  letterSpacing: "0.02em",
                  background: "rgba(40,96,178,0.25)",
                  border: "1px solid rgba(40,96,178,0.4)",
                  borderRadius: largeFonts ? 6 : 5,
                  padding: largeFonts ? "5px 11px" : "3px 7px",
                  whiteSpace: "nowrap",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Metrics row — Customers / ARR / [Lead → Sale] */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: metricCols,
          gap: 0,
          ...(rowHeightPx != null
            ? {
                flex: 1,
                minHeight: 0,
                alignSelf: "stretch",
                height: "100%",
                gridTemplateRows: "minmax(0, 1fr)",
              }
            : {}),
        }}
      >
        {showCustArr && (
          <>
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
          </>
        )}
        {conversion && (
          <div
            style={{
              padding: `${metricPad}px ${headerPadX}px`,
              borderRight: "none",
              ...(rowHeightPx != null && !showCustArr
                ? {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    minHeight: 0,
                  }
                : {}),
            }}
          >
            <p
              className="font-heading"
              style={{
                fontSize: convValFs,
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
                fontSize: convLabFs,
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: "rgba(255,255,255,0.55)",
                margin: largeFonts ? "6px 0 0" : "4px 0 0",
                textTransform: "uppercase",
              }}
            >
              {conversion.label}
            </p>
            {conversion.sub && (
              <p
                style={{
                  fontSize: (largeFonts ? 14 : 12) + bump,
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
        </>
      )}
    </div>
  );
}
