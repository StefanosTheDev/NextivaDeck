"use client";

import { motion } from "framer-motion";
import { Download, FileEdit, ClipboardList } from "lucide-react";
import SlideFooter from "../SlideFooter";

const NAVY = "#1A447C";
const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";

const PDF_PATH = "/nextiva-strategy-worksheet.pdf";

export default function FutureStrategyWorksheetSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
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

      <motion.header
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        style={{
          padding: "22px 56px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            minWidth: 0,
          }}
        >
          <span
            style={{
              width: 48,
              height: 48,
              borderRadius: 10,
              background: BLUE_SOFT,
              border: `1px solid ${BLUE}33`,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <ClipboardList size={24} color={BLUE} strokeWidth={2.2} />
          </span>
          <div style={{ minWidth: 0 }}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: BLUE,
                margin: 0,
              }}
            >
              Exercise · Team workbook
            </p>
            <h1
              className="font-heading"
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: NAVY_DARK,
                margin: "2px 0 0",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              Strategy Worksheet.
            </h1>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 14px",
              borderRadius: 999,
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
            }}
          >
            <FileEdit size={14} color={BLUE} strokeWidth={2.4} />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: NAVY_DARK,
              }}
            >
              Fillable · 10 pages
            </span>
          </div>
          <a
            href={PDF_PATH}
            download="Nextiva-Strategy-Worksheet.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "9px 16px",
              borderRadius: 999,
              background: BLUE,
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.04em",
              boxShadow: "0 6px 18px rgba(40,96,178,0.25)",
            }}
          >
            <Download size={14} strokeWidth={2.4} />
            Download
          </a>
        </div>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        style={{
          flex: 1,
          padding: "0 56px 14px",
          minHeight: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 14,
            border: `1px solid ${CARD_BORDER}`,
            background: CARD_BG,
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(6,26,55,0.06)",
            position: "relative",
          }}
        >
          <iframe
            src={`${PDF_PATH}#toolbar=1&navpanes=0&view=FitH`}
            title="Nextiva Strategy Worksheet — fillable PDF"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              display: "block",
              background: "#FFFFFF",
            }}
          />
        </div>
      </motion.main>

      <div
        style={{
          padding: "0 56px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12,
            color: MUTED,
            margin: 0,
            letterSpacing: "0.04em",
          }}
        >
          Fill in directly in the embedded PDF, or download to complete in your
          PDF reader of choice. Save a copy per department.
        </p>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            color: MUTED,
            margin: 0,
            fontStyle: "italic",
            whiteSpace: "nowrap",
          }}
        >
          Source: Nextiva Strategy Worksheet · 2019
        </p>
      </div>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
