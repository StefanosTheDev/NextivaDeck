"use client";
import { motion } from "framer-motion";
import {
  Search,
  Lock,
  Mic,
  Bot,
  FileText,
  Shuffle,
  Database,
  Target,
} from "lucide-react";
import SlideFooter from "../SlideFooter";

type Vendor =
  | "Google"
  | "Meta"
  | "Microsoft"
  | "NVIDIA"
  | "Nextiva"
  | "Deepgram"
  | "OSS";

const vendorColors: Record<
  Vendor,
  { bg: string; border: string; text: string }
> = {
  Google: {
    bg: "rgba(66,133,244,0.18)",
    border: "rgba(66,133,244,0.5)",
    text: "#8AB4F8",
  },
  Meta: {
    bg: "rgba(140,82,255,0.18)",
    border: "rgba(140,82,255,0.5)",
    text: "#B794F6",
  },
  Microsoft: {
    bg: "rgba(0,164,164,0.18)",
    border: "rgba(0,164,164,0.5)",
    text: "#4FD1C5",
  },
  NVIDIA: {
    bg: "rgba(118,185,0,0.18)",
    border: "rgba(118,185,0,0.5)",
    text: "#9AE33E",
  },
  Nextiva: {
    bg: "rgba(40,96,178,0.2)",
    border: "rgba(40,96,178,0.55)",
    text: "#7EB3E8",
  },
  Deepgram: {
    bg: "rgba(236,72,153,0.15)",
    border: "rgba(236,72,153,0.45)",
    text: "#F9A8D4",
  },
  OSS: {
    bg: "rgba(156,163,175,0.15)",
    border: "rgba(156,163,175,0.4)",
    text: "#D1D5DB",
  },
};

type Model = { name: string; vendor: Vendor };

const capabilities: Array<{
  icon: typeof Search;
  label: string;
  blend: string;
  models: Model[];
}> = [
  {
    icon: Search,
    label: "Agent Assist + Customer Search / RAG",
    blend: "Nextiva, 3rd Party, OSS",
    models: [
      { name: "Gemini", vendor: "Google" },
      { name: "Azure OpenAI", vendor: "Microsoft" },
      { name: "Llama", vendor: "Meta" },
      { name: "BGE M3 Retriever", vendor: "OSS" },
    ],
  },
  {
    icon: Lock,
    label: "Data Loss Prevention",
    blend: "Nextiva + 3rd Party",
    models: [
      { name: "Proprietary IP", vendor: "Nextiva" },
      { name: "Deepgram", vendor: "Deepgram" },
      { name: "Gemini", vendor: "Google" },
    ],
  },
  {
    icon: Mic,
    label: "Transcription",
    blend: "Nextiva, 3rd Party, OSS",
    models: [
      { name: "Nextiva STT", vendor: "Nextiva" },
      { name: "Deepgram", vendor: "Deepgram" },
      { name: "Distilled Whisper", vendor: "OSS" },
      { name: "Nemo (ASR/NLP/TTS)", vendor: "NVIDIA" },
    ],
  },
  {
    icon: Bot,
    label: "Chatbots + Voicebots",
    blend: "Nextiva, 3rd Party, OSS",
    models: [
      { name: "Gemini", vendor: "Google" },
      { name: "DialogFlow LLM", vendor: "Google" },
      { name: "Llama", vendor: "Meta" },
      { name: "GTE Base Retriever", vendor: "OSS" },
    ],
  },
  {
    icon: FileText,
    label: "Summarization + Sentiment",
    blend: "Nextiva, 3rd Party, OSS",
    models: [
      { name: "Gemini", vendor: "Google" },
      { name: "CCAI Insights", vendor: "Google" },
      { name: "Copilot", vendor: "Microsoft" },
      { name: "Llama", vendor: "Meta" },
    ],
  },
];

const principles = [
  {
    icon: Shuffle,
    title: "Swap models without breaking workflows",
    desc: "Customer compliance posture is independent of any single model.",
  },
  {
    icon: Database,
    title: "Data partitioning + governance is the key",
    desc: "The moat is how we hold the data, not which model processes it.",
  },
  {
    icon: Target,
    title: "Outcomes, not model novelty",
    desc: "We pick the best-of-breed tool for each job and hide the complexity.",
  },
];

export default function BriefingAIModelsSlide({
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
        style={{ padding: "32px 80px 0", flexShrink: 0, textAlign: "center" }}
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
          Model Agnostic Platform
        </p>
        <h1
          className="font-heading"
          style={{
            fontSize: 42,
            fontWeight: 500,
            color: "#FFFFFF",
            margin: "8px 0 0",
            lineHeight: 1.2,
          }}
        >
          A curated blend of proprietary, open-source, and hyperscaler AI.
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.5)",
            margin: "8px auto 0",
            lineHeight: 1.5,
            maxWidth: 860,
          }}
        >
          Best-of-breed options across every CX capability &mdash; chosen for
          outcome, not vendor.
        </p>
      </motion.header>

      <main
        style={{
          flex: 1,
          padding: "18px 80px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {/* Principles strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
        >
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                style={{
                  background: "rgba(40,96,178,0.08)",
                  border: "1px solid rgba(40,96,178,0.25)",
                  borderRadius: 10,
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: "rgba(40,96,178,0.2)",
                    border: "1px solid rgba(40,96,178,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={17} color="#7EB3E8" strokeWidth={2} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.25,
                    }}
                  >
                    {p.title}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.5)",
                      margin: "2px 0 0",
                      lineHeight: 1.35,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* 5 capability columns */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 12,
            alignItems: "start",
          }}
        >
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.article
                key={cap.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderTop: "3px solid #7EB3E8",
                  borderRadius: 12,
                  padding: "16px 14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 6,
                    paddingBottom: 10,
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(40,96,178,0.15)",
                      border: "1px solid rgba(40,96,178,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={20} color="#7EB3E8" strokeWidth={2} />
                  </div>
                  <h2
                    className="font-heading"
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: "2px 0 0",
                      lineHeight: 1.25,
                    }}
                  >
                    {cap.label}
                  </h2>
                  <p
                    style={{
                      fontSize: 9,
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.4)",
                      margin: 0,
                    }}
                  >
                    {cap.blend}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    flex: 1,
                  }}
                >
                  {cap.models.map((m) => {
                    const color = vendorColors[m.vendor];
                    return (
                      <div
                        key={m.name + m.vendor}
                        style={{
                          padding: "7px 10px",
                          background: color.bg,
                          border: `1px solid ${color.border}`,
                          borderRadius: 7,
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: 700,
                            color: "#FFFFFF",
                            margin: 0,
                            lineHeight: 1.2,
                          }}
                        >
                          {m.name}
                        </p>
                        <p
                          style={{
                            fontSize: 9,
                            fontWeight: 600,
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            color: color.text,
                            margin: 0,
                            lineHeight: 1.2,
                          }}
                        >
                          {m.vendor}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom takeaway */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          style={{
            background: "rgba(40,96,178,0.1)",
            border: "1px solid rgba(40,96,178,0.3)",
            borderRadius: 12,
            padding: "16px 28px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.85)",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            <span style={{ fontWeight: 700, color: "#7EB3E8" }}>
              The platform evolves with the models.
            </span>{" "}
            When a better model ships, we swap it in &mdash; without breaking
            customer workflows, compliance posture, or data governance.
          </p>
        </motion.div>
      </main>

      <SlideFooter slideNumber={slideNumber} variant="dark" />
    </div>
  );
}
