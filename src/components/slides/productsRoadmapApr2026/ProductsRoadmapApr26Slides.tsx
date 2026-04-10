"use client";

import type { ReactNode } from "react";
import {
  PR_APR26_EYEBROW,
  SLIDE03_COLUMNS,
  SLIDE03_TIMELINE,
  SLIDE03_TITLE,
  SLIDE04_FOOTNOTE,
  SLIDE04_MONTHS,
  SLIDE04_PLATFORM_LINE,
  SLIDE05_AI_EMPLOYEES,
  SLIDE05_HEADER,
  SLIDE05_INTEGRATIONS,
  SLIDE05_OTHER,
  SLIDE05_SUB,
  SLIDE06_2H,
  SLIDE06_2Q_TRANSCRIPTION,
  SLIDE06_MANAGEABILITY,
  SLIDE06_NEXTOS_EASE,
  SLIDE06_USABILITY,
} from "./productsRoadmapApr26Content";
import {
  BulletList,
  PR_ACCENT,
  PR_CARD_BG,
  PR_CARD_BORDER,
  PR_DIM,
  PR_MUTED,
  ProductsRoadmapShell,
  SectionLabel,
} from "./productsRoadmapApr26Shared";

const COL_GAP = 14;
const BODY_PAD = "0 56px 12px";

function ColumnCard({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        background: PR_CARD_BG,
        border: `1px solid ${PR_CARD_BORDER}`,
        borderRadius: 10,
        padding: "10px 12px",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {children}
    </div>
  );
}

export function ProductsRoadmapApr26Slide03({ slideNumber }: { slideNumber: number }) {
  return (
    <ProductsRoadmapShell
      eyebrow={PR_APR26_EYEBROW}
      title={SLIDE03_TITLE}
      subtitle={
        <>
          <span style={{ color: PR_ACCENT, fontWeight: 700, letterSpacing: "0.06em", fontSize: 12 }}>HUMAN + AI</span>
          {" · "}
          <span style={{ color: PR_MUTED }}>{SLIDE03_TIMELINE}</span>
        </>
      }
      slideNumber={slideNumber}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: COL_GAP,
          padding: BODY_PAD,
          flex: 1,
          minHeight: 0,
        }}
      >
        {SLIDE03_COLUMNS.map((col) => (
          <ColumnCard key={col.title}>
            <div>
              <SectionLabel>{col.title}</SectionLabel>
              {col.subtitle ? (
                <p style={{ margin: "0 0 6px", fontSize: 10, color: PR_DIM, lineHeight: 1.3 }}>{col.subtitle}</p>
              ) : null}
            </div>
            <BulletList items={col.bullets} fontSize={10} />
          </ColumnCard>
        ))}
      </div>
    </ProductsRoadmapShell>
  );
}

export function ProductsRoadmapApr26Slide04({ slideNumber }: { slideNumber: number }) {
  return (
    <ProductsRoadmapShell
      eyebrow={PR_APR26_EYEBROW}
      title="Omni-Channel CX — Delivered (Jan – Mar ’26)"
      slideNumber={slideNumber}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: COL_GAP,
          padding: BODY_PAD,
          flex: 1,
          minHeight: 0,
        }}
      >
        {SLIDE04_MONTHS.map((m) => (
          <ColumnCard key={m.label}>
            <SectionLabel>{m.label}</SectionLabel>
            {m.sections.map((sec) => (
              <div key={sec.title}>
                <p
                  style={{
                    margin: "0 0 4px",
                    fontSize: 9.5,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: PR_ACCENT,
                  }}
                >
                  {sec.title}
                </p>
                <BulletList items={sec.items} fontSize={9.25} />
              </div>
            ))}
          </ColumnCard>
        ))}
      </div>
      <div style={{ padding: "0 56px 8px", flexShrink: 0 }}>
        <p style={{ margin: 0, fontSize: 10, color: PR_DIM, textAlign: "center" }}>{SLIDE04_PLATFORM_LINE}</p>
        <p style={{ margin: "4px 0 0", fontSize: 9, color: PR_DIM, textAlign: "center", opacity: 0.85 }}>{SLIDE04_FOOTNOTE}</p>
      </div>
    </ProductsRoadmapShell>
  );
}

export function ProductsRoadmapApr26Slide05({ slideNumber }: { slideNumber: number }) {
  return (
    <ProductsRoadmapShell
      eyebrow={PR_APR26_EYEBROW}
      title={SLIDE05_HEADER}
      subtitle={
        <>
          <span style={{ color: PR_ACCENT, fontWeight: 700 }}>2H 2026+</span>
          {" · "}
          {SLIDE05_SUB}
        </>
      }
      slideNumber={slideNumber}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: COL_GAP,
          padding: BODY_PAD,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div style={{ flex: 1.55, minWidth: 0, minHeight: 0, display: "flex" }}>
          <ColumnCard>
            <SectionLabel>AI EMPLOYEES</SectionLabel>
            <BulletList items={SLIDE05_AI_EMPLOYEES} fontSize={10.25} />
          </ColumnCard>
        </div>
        <div style={{ flex: 1, minWidth: 0, minHeight: 0, display: "flex", flexDirection: "column", gap: COL_GAP }}>
          <ColumnCard>
            <SectionLabel>2Q 2026 — INTEGRATIONS</SectionLabel>
            <BulletList items={SLIDE05_INTEGRATIONS} fontSize={10} />
          </ColumnCard>
          <ColumnCard>
            <SectionLabel>2Q 2026 — OTHER</SectionLabel>
            <BulletList items={SLIDE05_OTHER} fontSize={10} />
          </ColumnCard>
        </div>
      </div>
    </ProductsRoadmapShell>
  );
}

export function ProductsRoadmapApr26Slide06({ slideNumber }: { slideNumber: number }) {
  return (
    <ProductsRoadmapShell eyebrow={PR_APR26_EYEBROW} title="NextOS + Nextiva One" slideNumber={slideNumber}>
      <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0, padding: BODY_PAD, gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "row", gap: COL_GAP, flex: 1, minHeight: 0 }}>
          <ColumnCard>
            <SectionLabel>2H 2026+</SectionLabel>
            <BulletList items={SLIDE06_2H} fontSize={10.25} />
          </ColumnCard>
          <ColumnCard>
            <SectionLabel>2Q 2026</SectionLabel>
            <BulletList items={SLIDE06_2Q_TRANSCRIPTION} fontSize={10.25} />
          </ColumnCard>
        </div>
        <div
          style={{
            background: PR_CARD_BG,
            border: `1px solid ${PR_CARD_BORDER}`,
            borderRadius: 10,
            padding: "12px 14px",
            flexShrink: 0,
          }}
        >
          <p
            style={{
              margin: "0 0 8px",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: PR_ACCENT,
            }}
          >
            AI ENABLED BUSINESS COMMUNICATIONS
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <SectionLabel>USABILITY IMPROVEMENTS</SectionLabel>
              <BulletList items={SLIDE06_USABILITY} fontSize={10} />
            </div>
            <div>
              <SectionLabel>MANAGEABILITY IMPROVEMENTS</SectionLabel>
              <BulletList items={SLIDE06_MANAGEABILITY} fontSize={10} />
            </div>
          </div>
          <div style={{ marginTop: 10 }}>
            <SectionLabel>NextOS EASE OF USE ENHANCEMENTS</SectionLabel>
            <div style={{ marginTop: 4 }}>
              <BulletList items={SLIDE06_NEXTOS_EASE} fontSize={10} />
            </div>
          </div>
        </div>
      </div>
    </ProductsRoadmapShell>
  );
}
