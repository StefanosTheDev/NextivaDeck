"use client";

import { useEffect, useState } from "react";
import { X, Copy, Check, Lightbulb, MessageCircle, FolderInput } from "lucide-react";
/** Matches `DEFAULT_PROJECT_ID` / `DEFAULT_PROJECT_NAME` in projects store — keep in sync (client-safe). */
const NEXTIVA_INVESTOR_DECK_ID = "investor-deck";
const NEXTIVA_INVESTOR_DECK_NAME = "Nextiva Investor Deck";

interface Props {
  projectId: string;
  projectName: string;
  publishedCount: number;
  hiddenCount: number;
  totalCount: number;
  onClose: () => void;
}

type TabId = "start" | "copy";

export default function PromptTipsModal({
  projectId,
  projectName,
  publishedCount,
  hiddenCount,
  totalCount,
  onClose,
}: Props) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("start");
  const isDefaultDeck = projectId === NEXTIVA_INVESTOR_DECK_ID;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const starterLine =
    `I'm working on the deck project "${projectName}" (project id: ${projectId}). ` +
    `Only change slides for this project — leave every other project alone.`;

  /** Short label in the UI; body below is the full Cursor template. */
  const copyPromptShortLabel = "Copy published slides (Nextiva → this project)";

  const copyFromNextivaBody = isDefaultDeck
    ? ""
    : [
        `Copy published slides from "${NEXTIVA_INVESTOR_DECK_NAME}" (projectId: ${NEXTIVA_INVESTOR_DECK_ID}) into "${projectName}" (projectId: ${projectId}).`,
        ``,
        `How "published" is defined here: in data/projects/${NEXTIVA_INVESTOR_DECK_ID}.json, take every id that appears in "order" and is NOT in "hiddenSlides", keeping that order.`,
        ``,
        `Update only data/projects/${projectId}.json: append those slide ids to the end of "order" in the same sequence. Do not change the investor-deck JSON.`,
        ``,
        `If an id is already in this project's "order", duplicate the React slide + register a new unique kebab-case id in slideRegistry.ts, then append the new id instead — don't reuse the same id twice in this project.`,
        ``,
        `Leave this project's "categories", "categoryNames", and "hiddenSlides" as-is unless something breaks the build.`,
      ].join("\n");

  const handleCopy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      window.setTimeout(() => {
        setCopiedKey((current) => (current === key ? null : current));
      }, 1600);
    } catch {
      // ignore
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(3,7,18,0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width: "min(560px, 100%)",
          maxHeight: "calc(100vh - 48px)",
          background: "linear-gradient(180deg, #0f172a 0%, #111827 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16,
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
        }}
      >
        <header
          style={{
            padding: "18px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Lightbulb size={17} color="#fbbf24" />
              <h2 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>Prompt tips</h2>
            </div>
            <p
              style={{
                margin: "8px 0 0",
                color: "rgba(255,255,255,0.55)",
                fontSize: 13,
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: "#fff" }}>{projectName}</strong>
              {" "}
              <span style={{ color: "rgba(255,255,255,0.45)" }}>
                ({projectId}) · {publishedCount} published · {hiddenCount} hidden · {totalCount}{" "}
                total
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              flexShrink: 0,
              width: 32,
              height: 32,
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.7)",
              cursor: "pointer",
            }}
          >
            <X size={16} />
          </button>
        </header>

        <div
          style={{
            display: "flex",
            padding: "0 12px",
            gap: 4,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab("start")}
            style={{
              flex: 1,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "12px 10px",
              border: "none",
              borderBottom: activeTab === "start" ? "2px solid #2860B2" : "2px solid transparent",
              marginBottom: -1,
              background: "transparent",
              color: activeTab === "start" ? "#fff" : "rgba(255,255,255,0.5)",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <MessageCircle size={15} />
            Start a Cursor chat
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("copy")}
            style={{
              flex: 1,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "12px 10px",
              border: "none",
              borderBottom: activeTab === "copy" ? "2px solid #2860B2" : "2px solid transparent",
              marginBottom: -1,
              background: "transparent",
              color: activeTab === "copy" ? "#fff" : "rgba(255,255,255,0.5)",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <FolderInput size={15} />
            Copy from Nextiva deck
          </button>
        </div>

        <div style={{ padding: 20, overflowY: "auto" }}>
          {activeTab === "start" && (
            <div>
              <p
                style={{
                  margin: "0 0 12px",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: 13,
                  lineHeight: 1.55,
                }}
              >
                Open Cursor with{" "}
                <kbd style={kbdStyle}>Cmd</kbd>
                <kbd style={kbdStyle}>L</kbd>, paste this once, then say what you want. It locks Cursor
                to <strong style={{ color: "#fff" }}>{projectName}</strong> only.
              </p>
              <div
                style={{
                  border: "1px dashed rgba(251,191,36,0.35)",
                  borderRadius: 12,
                  background: "rgba(251,191,36,0.06)",
                  padding: "14px 14px",
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    flex: 1,
                    color: "rgba(255,255,255,0.82)",
                    fontSize: 13,
                    lineHeight: 1.55,
                    fontFamily:
                      "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
                  }}
                >
                  {starterLine}
                </p>
                <button
                  type="button"
                  onClick={() => handleCopy("starter", starterLine)}
                  style={{
                    flexShrink: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    borderRadius: 8,
                    border: "1px solid rgba(251,191,36,0.4)",
                    background:
                      copiedKey === "starter"
                        ? "rgba(52,211,153,0.18)"
                        : "rgba(251,191,36,0.12)",
                    color: copiedKey === "starter" ? "#34d399" : "#fbbf24",
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "8px 12px",
                    cursor: "pointer",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {copiedKey === "starter" ? <Check size={13} /> : <Copy size={13} />}
                  {copiedKey === "starter" ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          )}

          {activeTab === "copy" && (
            <div>
              {isDefaultDeck ? (
                <p style={{ margin: 0, color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.55 }}>
                  You&apos;re already in the main <strong style={{ color: "#fff" }}>{NEXTIVA_INVESTOR_DECK_NAME}</strong>.{" "}
                  Switch to another project in the hub, then use this tab to pull slides from this deck into that project.
                </p>
              ) : (
                <>
                  <p
                    style={{
                      margin: "0 0 8px",
                      color: "rgba(255,255,255,0.9)",
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    {copyPromptShortLabel}
                  </p>
                  <p
                    style={{
                      margin: "0 0 12px",
                      color: "rgba(255,255,255,0.55)",
                      fontSize: 12,
                      lineHeight: 1.5,
                    }}
                  >
                    Template for Cursor — paste after your starter line. It names the JSON files and
                    how published vs hidden works so the repo stays consistent.
                  </p>
                  <div
                    style={{
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.04)",
                      padding: "14px 14px",
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        flex: 1,
                        color: "rgba(255,255,255,0.82)",
                        fontSize: 12,
                        lineHeight: 1.6,
                        whiteSpace: "pre-wrap",
                        fontFamily:
                          "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
                      }}
                    >
                      {copyFromNextivaBody}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleCopy("copy", copyFromNextivaBody)}
                      style={{
                        flexShrink: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        borderRadius: 8,
                        border: "1px solid rgba(255,255,255,0.14)",
                        background:
                          copiedKey === "copy" ? "rgba(52,211,153,0.18)" : "rgba(255,255,255,0.06)",
                        color: copiedKey === "copy" ? "#34d399" : "rgba(255,255,255,0.88)",
                        fontSize: 12,
                        fontWeight: 600,
                        padding: "8px 12px",
                        cursor: "pointer",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {copiedKey === "copy" ? <Check size={13} /> : <Copy size={13} />}
                      {copiedKey === "copy" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <footer
          style={{
            padding: "12px 20px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "flex-end",
            gap: 10,
          }}
        >
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: "8px 14px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.05)",
              color: "#fff",
              fontSize: 13,
              cursor: "pointer",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  );
}

const kbdStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  padding: "1px 6px",
  margin: "0 2px",
  borderRadius: 4,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(255,255,255,0.06)",
  fontSize: 11,
  fontFamily: "inherit",
  color: "rgba(255,255,255,0.75)",
};
