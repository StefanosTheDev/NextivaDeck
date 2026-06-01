"use client";

import { motion } from "framer-motion";
import { ClipboardEdit, CircleDot } from "lucide-react";
import SlideFooter from "../../SlideFooter";
import { WorksheetTextarea, WorksheetInput } from "../worksheet/WorksheetField";

const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#FFFFFF";
const CARD_BORDER = "#E0DEDA";

export type CaptureTopic = {
  areaNum: string;
  title: string;
  storageKey: string;
};

function Field({
  label,
  storageKey,
  minHeight = 64,
}: {
  label: string;
  storageKey: string;
  minHeight?: number;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1, minHeight: 0 }}>
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 10.5,
          fontWeight: 800,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: BLUE,
        }}
      >
        {label}
      </div>
      <WorksheetTextarea
        storageKey={storageKey}
        minHeight={minHeight}
        placeholder="Document during discussion…"
      />
    </div>
  );
}

export default function DecisionCaptureTemplate({
  topic,
  slideNumber = 0,
}: {
  topic: CaptureTopic;
  slideNumber?: number;
}) {
  const k = topic.storageKey;
  return (
    <div
      className="slide"
      style={{
        background: "#FFFFFF",
        color: NAVY_DARK,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: 3, background: BLUE, flexShrink: 0 }} />

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1400,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(40,96,178,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "26px 72px 0",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 14px",
              borderRadius: 999,
              background: BLUE_SOFT,
              border: `1px solid ${BLUE}55`,
              marginBottom: 8,
            }}
          >
            <ClipboardEdit size={12} color={BLUE} strokeWidth={2.4} />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: BLUE,
              }}
            >
              Decision Area {topic.areaNum} · Decision (capture)
            </span>
          </div>
          <h1
            className="font-heading"
            style={{
              fontSize: 44,
              fontWeight: 600,
              color: NAVY_DARK,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            {topic.title}.
          </h1>
        </div>

        <span
          className="font-heading"
          style={{
            fontSize: 84,
            fontWeight: 700,
            color: BLUE,
            opacity: 0.12,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            fontVariantNumeric: "tabular-nums",
            flexShrink: 0,
          }}
        >
          {topic.areaNum}
        </span>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        style={{
          flex: 1,
          padding: "18px 72px 10px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${CARD_BORDER}`,
            borderTop: `4px solid ${BLUE}`,
            borderRadius: 14,
            padding: "16px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            boxShadow: "0 6px 20px rgba(6,26,55,0.04)",
          }}
        >
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 10.5,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: BLUE,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <CircleDot size={12} color={BLUE} strokeWidth={2.4} />
            Decision
          </div>
          <WorksheetTextarea
            storageKey={`${k}-decision`}
            minHeight={56}
            placeholder="Capture the decision here…"
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
            flex: 1,
            minHeight: 0,
          }}
        >
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: 14,
              padding: "16px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              boxShadow: "0 6px 20px rgba(6,26,55,0.04)",
            }}
          >
            <Field label="What changed from FY26" storageKey={`${k}-changed`} />
            <Field label="Risks" storageKey={`${k}-risks`} />
          </div>

          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: 14,
              padding: "16px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              boxShadow: "0 6px 20px rgba(6,26,55,0.04)",
            }}
          >
            <Field label="Dependencies" storageKey={`${k}-deps`} />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 10.5,
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: BLUE,
                  }}
                >
                  Owner
                </div>
                <WorksheetInput
                  storageKey={`${k}-owner`}
                  placeholder="Assign during session…"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 10.5,
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: BLUE,
                  }}
                >
                  Follow-up
                </div>
                <WorksheetInput
                  storageKey={`${k}-followup`}
                  placeholder="Capture before leaving…"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.main>

      <footer
        style={{
          padding: "0 72px 14px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 12,
          fontWeight: 600,
          color: MUTED,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>FY27 Strategic Planning · Decision capture</span>
        <span style={{ color: BODY, fontWeight: 500 }}>
          Decide, name an owner, set a follow-up.
        </span>
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
