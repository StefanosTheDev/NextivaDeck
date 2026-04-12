"use client";
import { motion } from "framer-motion";
import { Bot, Mic, MessageSquare, FileText, ShieldCheck } from "lucide-react";
import SlideFooter from "../SlideFooter";

const CAPABILITIES = [
  {
    title: "Agent Assist + Customer Search / RAG",
    icon: Bot,
    blend: "blend of Nextiva, 3rd party and Open Source",
    models: [
      "Model: Gemini (Google)",
      "Sub service: Retriever-BGE M3",
      "Sub service: LLM Llama (Meta AI)",
      "Model: Azure OpenAI (Microsoft)",
    ],
  },
  {
    title: "Transcription",
    icon: Mic,
    blend: "blend of Nextiva, 3rd party and Open Source",
    models: [
      "Nextiva transcription",
      "Deepgram transcription",
      "Sub service: Distilled Whisper",
      "Sub service: Nemo (NVIDIA) ASR, NLP, TTS",
    ],
  },
  {
    title: "Chatbots + voicebots",
    icon: MessageSquare,
    blend: "blend of Nextiva, 3rd party and Open Source",
    models: [
      "Model: Gemini (Google)",
      "Model: DialogFlow LLM (Google)",
      "Sub service: Retriever-GTE Base",
      "Sub service: LLM Llama (Meta AI)",
    ],
  },
  {
    title: "Summarization + sentiment",
    icon: FileText,
    blend: "blend of Nextiva, 3rd party and Open Source",
    models: [
      "Model: Gemini (Google)",
      "Model: CCAI Insights (Google)",
      "Sub service: LLM Llama (Meta AI)",
      "Model: Copilot (Microsoft)",
    ],
  },
  {
    title: "Data Loss Prevention",
    icon: ShieldCheck,
    blend: "blend of Nextiva, and 3rd party",
    models: [
      "Model: Nextiva Proprietary IP",
      "Model: Deepgram",
      "Model: Gemini (Google)",
    ],
  },
];

const INTRO = "A curated blend of Nextiva proprietary, open-source, open weight, and 3rd party hyperscalers to provide customers best of breed options.";

const BULLETS = [
  "Swap models without breaking workflows or compliance posture",
  "Key is customer data partitioning + governance",
  "Outcomes, not model novelty",
];

export default function SenthilModelAgnosticPlatformSlide({
  slideNumber = 0,
}: {
  slideNumber?: number;
}) {
  return (
    <div
      className="slide"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 20%, rgba(15,44,89,0.45) 0%, rgba(6,26,55,0.7) 45%, #000208 100%)",
        justifyContent: "space-between",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "48px 100px 0", flexShrink: 0 }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#CCC7C3",
            margin: 0,
          }}
        >
          AI CAPABILITIES
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "10px 0 0",
            lineHeight: 1.15,
          }}
        >
          Model Agnostic Platform
        </h1>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          flex: 1,
          padding: "24px 100px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignContent: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
          <p style={{ fontSize: 26, color: "rgba(255,255,255,0.75)", lineHeight: 1.5, margin: 0 }}>
            {INTRO}
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {BULLETS.map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: 20,
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: i < BULLETS.length - 1 ? 14 : 0,
                  lineHeight: 1.5,
                  paddingLeft: 20,
                  position: "relative",
                }}
              >
                <span style={{ position: "absolute", left: 0, color: "#2860B2" }}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {CAPABILITIES.map((cap, i) => (
            <motion.article
              key={cap.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderLeft: "4px solid #7EB3E8",
                borderRadius: 12,
                padding: "14px 20px",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 36,
                  height: 36,
                  borderRadius: 9,
                  background: "rgba(40,96,178,0.14)",
                  border: "1px solid rgba(40,96,178,0.32)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 2,
                }}
              >
                <cap.icon size={18} color="#7EB3E8" strokeWidth={1.75} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#7EB3E8",
                    margin: "0 0 2px",
                  }}
                >
                  {cap.title}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.4)",
                    margin: "0 0 6px",
                    fontStyle: "italic",
                  }}
                >
                  [{cap.blend}]
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {cap.models.map((m) => (
                    <span
                      key={m}
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.6)",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 6,
                        padding: "2px 8px",
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
