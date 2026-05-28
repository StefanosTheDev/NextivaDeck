"use client";

import { useEffect, useId, useState } from "react";

const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const CARD_BORDER = "#E0DEDA";
const MUTED = "#A29E9B";

const STORAGE_PREFIX = "nx_worksheet:";

/** Read-once helper: avoids SSR mismatch and only touches localStorage on mount. */
function loadValue(key: string): string {
  if (typeof window === "undefined") return "";
  try {
    return window.localStorage.getItem(STORAGE_PREFIX + key) ?? "";
  } catch {
    return "";
  }
}

function saveValue(key: string, value: string) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_PREFIX + key, value);
  } catch {
    /* ignore quota / private-mode errors */
  }
}

interface BaseProps {
  storageKey: string;
  placeholder?: string;
  label?: string;
  fontSize?: number;
  minHeight?: number;
  style?: React.CSSProperties;
}

export function WorksheetInput({
  storageKey,
  placeholder,
  label,
  fontSize = 16,
  style,
}: BaseProps) {
  const id = useId();
  const [value, setValue] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setValue(loadValue(storageKey));
    setHydrated(true);
  }, [storageKey]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, ...style }}>
      {label && (
        <label
          htmlFor={id}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: BLUE,
          }}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type="text"
        value={hydrated ? value : ""}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
          saveValue(storageKey, e.target.value);
        }}
        style={{
          width: "100%",
          background: "#FFFFFF",
          border: `1px solid ${CARD_BORDER}`,
          borderRadius: 8,
          padding: "10px 14px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize,
          color: NAVY_DARK,
          outline: "none",
          transition: "border-color 0.15s, box-shadow 0.15s",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = BLUE;
          e.currentTarget.style.boxShadow = `0 0 0 3px ${BLUE}22`;
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = CARD_BORDER;
          e.currentTarget.style.boxShadow = "none";
        }}
      />
    </div>
  );
}

export function WorksheetTextarea({
  storageKey,
  placeholder,
  label,
  fontSize = 15,
  minHeight = 80,
  style,
}: BaseProps) {
  const id = useId();
  const [value, setValue] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setValue(loadValue(storageKey));
    setHydrated(true);
  }, [storageKey]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        flex: 1,
        minHeight: 0,
        ...style,
      }}
    >
      {label && (
        <label
          htmlFor={id}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: BLUE,
          }}
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        value={hydrated ? value : ""}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
          saveValue(storageKey, e.target.value);
        }}
        style={{
          width: "100%",
          flex: 1,
          minHeight,
          background: "#FFFFFF",
          border: `1px solid ${CARD_BORDER}`,
          borderRadius: 8,
          padding: "10px 14px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize,
          color: NAVY_DARK,
          outline: "none",
          resize: "none",
          lineHeight: 1.45,
          transition: "border-color 0.15s, box-shadow 0.15s",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = BLUE;
          e.currentTarget.style.boxShadow = `0 0 0 3px ${BLUE}22`;
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = CARD_BORDER;
          e.currentTarget.style.boxShadow = "none";
        }}
      />
    </div>
  );
}

export function WorksheetPageBadge({
  page,
  total = 9,
}: {
  page: number;
  total?: number;
}) {
  return (
    <span
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: MUTED,
      }}
    >
      Strategy Worksheet · Page {page} of {total}
    </span>
  );
}
