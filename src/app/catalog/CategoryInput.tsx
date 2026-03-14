"use client";

import { useState, useCallback } from "react";
import { Plus } from "lucide-react";

interface Props {
  existingNames: string[];
  onCreateCategory: (name: string) => void;
}

export default function CategoryInput({ existingNames, onCreateCategory }: Props) {
  const [value, setValue] = useState("");

  const handleCreate = useCallback(() => {
    const trimmed = value.trim();
    if (trimmed && !existingNames.includes(trimmed)) {
      onCreateCategory(trimmed);
      setValue("");
    }
  }, [value, existingNames, onCreateCategory]);

  const isValid = value.trim() && !existingNames.includes(value.trim());

  return (
    <div>
      <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, display: "block" }}>
        Categories
      </label>
      <div style={{ display: "flex", gap: 6 }}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleCreate();
            }
          }}
          placeholder="New category name…"
          style={{
            flex: 1, padding: "8px 12px", borderRadius: 6, fontSize: 14,
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff", outline: "none", fontFamily: "'Space Grotesk', sans-serif",
            minWidth: 0,
          }}
        />
        <button
          type="button"
          onClick={handleCreate}
          disabled={!isValid}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: 36, height: 36, borderRadius: 6, border: "none", flexShrink: 0,
            background: isValid ? "#2860B2" : "rgba(255,255,255,0.06)",
            color: isValid ? "#fff" : "rgba(255,255,255,0.2)",
            cursor: isValid ? "pointer" : "default",
          }}
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}
