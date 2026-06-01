"use client";

import { motion } from "framer-motion";
import {
  AlertOctagon,
  Compass,
  MessageCircleQuestion,
  Quote,
  User,
  Calendar,
  ArrowRight,
} from "lucide-react";
import SlideFooter from "../../SlideFooter";

const NAVY_DARK = "#061A37";
const BLUE = "#2860B2";
const BLUE_SOFT = "#E8EEF7";
const BODY = "#4A4846";
const MUTED = "#A29E9B";
const CARD_BG = "#F8F6F2";
const CARD_BORDER = "#E0DEDA";
const CORAL = "#E85A4F";
const CORAL_SOFT = "#FDEAE7";

export type BoardConcernTopic = {
  num: string;
  title: string;
  subtitle: string;
  concern: string;
  posture: string[];
  askRoom: string[];
  owner: string;
  cadence: string;
  next: string;
};

function Column({
  Icon,
  label,
  accent,
  items,
}: {
  Icon: typeof Compass;
  label: string;
  accent: string;
  items: string[];
}) {
  return (
    <article
      style={{
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderTop: `5px solid ${accent}`,
        borderRadius: 14,
        padding: "20px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        boxShadow: "0 6px 20px rgba(6,26,55,0.05)",
        minHeight: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span
          style={{
            width: 34,
            height: 34,
            borderRadius: 9,
            background: BLUE_SOFT,
            border: `1px solid ${accent}`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={17} color={accent} strokeWidth={2.2} />
        </span>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: accent,
          }}
        >
          {label}
        </span>
      </div>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 9,
        }}
      >
        {items.map((it) => (
          <li
            key={it}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13.5,
              color: NAVY_DARK,
              display: "flex",
              alignItems: "flex-start",
              gap: 9,
              lineHeight: 1.5,
            }}
          >
            <span
              aria-hidden
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: accent,
                flexShrink: 0,
                marginTop: 7,
              }}
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function BoardConcernTemplate({
  topic,
  slideNumber = 0,
}: {
  topic: BoardConcernTopic;
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
            "radial-gradient(circle, rgba(40,96,178,0.06) 0%, transparent 60%)",
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
              background: CORAL_SOFT,
              border: `1px solid ${CORAL}55`,
              marginBottom: 10,
            }}
          >
            <AlertOctagon size={12} color={CORAL} strokeWidth={2.4} />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: CORAL,
              }}
            >
              Board concern · {topic.num}
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
            {topic.title}
          </h1>
          <p
            style={{
              margin: "8px 0 0",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 16,
              color: BODY,
              lineHeight: 1.45,
              maxWidth: 1000,
            }}
          >
            {topic.subtitle}
          </p>
        </div>

        <span
          className="font-heading"
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: CORAL,
            opacity: 0.14,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            fontVariantNumeric: "tabular-nums",
            flexShrink: 0,
          }}
        >
          {topic.num}
        </span>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        style={{
          flex: 1,
          padding: "18px 72px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          position: "relative",
          zIndex: 1,
          minHeight: 0,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          style={{
            padding: "18px 24px",
            borderRadius: 14,
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #FFF7F5 100%)",
            border: `1px solid ${CORAL}33`,
            boxShadow: "0 6px 24px rgba(232,90,79,0.10)",
            display: "flex",
            gap: 18,
            alignItems: "flex-start",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: 42,
              height: 42,
              borderRadius: 11,
              background: CORAL,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            <Quote size={20} color="#FFFFFF" strokeWidth={2.2} />
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: CORAL,
                marginBottom: 6,
              }}
            >
              The concern
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 15.5,
                color: NAVY_DARK,
                lineHeight: 1.5,
                fontStyle: "italic",
              }}
            >
              &ldquo;{topic.concern}&rdquo;
            </p>
          </div>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr 1fr",
            gap: 16,
            flex: 1,
            minHeight: 0,
          }}
        >
          <Column
            Icon={Compass}
            label="Our posture"
            accent={BLUE}
            items={topic.posture}
          />
          <Column
            Icon={MessageCircleQuestion}
            label="What we need from the room"
            accent={BLUE}
            items={topic.askRoom}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.5 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1.4fr",
            gap: 14,
            padding: "14px 22px",
            borderRadius: 12,
            background: BLUE_SOFT,
            border: `1px solid ${BLUE}33`,
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <User size={16} color={BLUE} strokeWidth={2.4} />
            <div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: BLUE,
                  marginBottom: 2,
                }}
              >
                Owner
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: NAVY_DARK,
                  lineHeight: 1.3,
                }}
              >
                {topic.owner}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Calendar size={16} color={BLUE} strokeWidth={2.4} />
            <div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: BLUE,
                  marginBottom: 2,
                }}
              >
                Cadence
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: NAVY_DARK,
                  lineHeight: 1.3,
                }}
              >
                {topic.cadence}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <ArrowRight size={16} color={BLUE} strokeWidth={2.4} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: BLUE,
                  marginBottom: 2,
                }}
              >
                Next step
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: NAVY_DARK,
                  lineHeight: 1.3,
                }}
              >
                {topic.next}
              </div>
            </div>
          </div>
        </motion.div>
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
        }}
      >
        Board pre-read · Concerns to address in the room
      </footer>

      <SlideFooter slideNumber={slideNumber} variant="light" />
    </div>
  );
}
