"use client";

import { useState, useRef } from "react";
import axios from "../lib/axios";

export default function ChatUI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const [showFeedback, setShowFeedback] =
    useState(false);

  const [feedbackDone, setFeedbackDone] =
    useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<BlobPart[]>([]);
  
  // ----------------------------------------
  // TEXT QUESTION
  // ----------------------------------------
  async function ask() {
    try {
      setLoading(true);
      setAnswer("");

      const res = await axios.post("/ask", { question });

      if (typeof res.data.answer === "object") {
        console.warn("Backend returned object instead of string");
      }

      setAnswer(String(res.data.answer || "").trim());

      setFeedbackDone(false);
      setShowFeedback(true);
    } catch (err) {
      console.error(err);
      setAnswer("❌ Error occurred. Check backend.");
    } finally {
      setLoading(false);
    }
  }

  /// ----------------------------------------
// HANDLE RECORDING STOP (UPLOAD AUDIO)
// ----------------------------------------
async function handleRecordingStop() {
  try {
    setLoading(true);

    // prevent empty audio upload
    if (audioChunksRef.current.length === 0) {
      setAnswer("⚠ No audio recorded.");
      return;
    }

    const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });

    const formData = new FormData();
    formData.append("audio", blob, "voice.webm");

    const res = await axios.post(
      "http://localhost:4000/ask/voice",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setAnswer(res.data.answer_text || res.data.answer || "");
    setFeedbackDone(false);
    setShowFeedback(true);
    if (res.data.audio_url) {
      setAudioURL(res.data.audio_url);
    }

  } catch (err) {
    console.error("Voice request failed:", err);
    setAnswer("❌ Voice request failed.");
  } finally {
    setLoading(false);
  }
}

// ----------------------------------------
// START RECORDING
// ----------------------------------------
async function startRecording() {
  setAudioURL("");
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;

    audioChunksRef.current = [];

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    recorder.onstop = handleRecordingStop;

    recorder.start();
    setRecording(true);

  } catch (error) {
    console.error("Microphone access error:", error);
    alert("Microphone access denied.");
  }
}

// ----------------------------------------
// STOP RECORDING
// ----------------------------------------
function stopRecording() {
  if (mediaRecorderRef.current) {
    const tracks = mediaRecorderRef.current.stream.getTracks();
    tracks.forEach((track) => track.stop());

    mediaRecorderRef.current.stop();
  }

  setRecording(false);
}

async function submitFeedback(
  helpful: boolean
) {

  try {

    await axios.post(
      "http://localhost:4000/feedback",
      {
        feedbackId: crypto.randomUUID(),
        isHelpful: helpful,
        comments: ""
      }
    );

    setFeedbackDone(true);

  } catch (err) {

    console.error(err);

  }

}

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "60px",
        background: "#f4f6ff",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "600px",
          background: "white",
          padding: "32px",
          borderRadius: "20px",
          boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
          border: "1px solid #eef1ff",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "800",
            color: "#2b4eff",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          WhatsApp Assistant
        </h1>

        {/* ------------------------- */}
        {/* TEXTBOX */}
        {/* ------------------------- */}
        <textarea
          style={{
            width: "100%",
            boxSizing: "border-box",
            border: "1px solid #d4d8f7",
            padding: "14px",
            borderRadius: "12px",
            fontSize: "16px",
            outline: "none",
            resize: "none",
            marginBottom: "16px",
            background: "#f7f9ff",
            overflow: "hidden",
          }}
          rows={2}
          placeholder="Ask anything…"
          value={question}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setQuestion(e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
        />

        {/* ASK BUTTON */}
        <button
          style={{
            width: "100%",
            background: loading ? "#a6b4ff" : "#2b4eff",
            color: "white",
            padding: "14px",
            borderRadius: "10px",
            fontSize: "17px",
            fontWeight: "600",
            cursor: "pointer",
            border: "none",
          }}
          disabled={loading}
          onClick={ask}
        >
          {loading ? "Thinking..." : "Ask"}
        </button>

        {/* MIC BUTTON */}
        <button
  disabled={loading}
  onClick={recording ? stopRecording : startRecording}
          style={{
            marginTop: "10px",
            width: "100%",
            background: recording ? "#ff3b3b" : "#25d366",
            color: "white",
            padding: "12px",
            borderRadius: "12px",
            fontSize: "17px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {recording ? "Stop Recording" : "🎤 Start Voice Input"}
        </button>

        {/* ANSWER BOX */}
        {answer && (
          <div
            style={{
              marginTop: "24px",
              padding: "18px",
              borderRadius: "12px",
              background: "#f7f9ff",
              border: "1px solid #d9defc",
              fontSize: "17px",
              color: "#333",
              lineHeight: "1.6",
            }}
          >
            <strong style={{ color: "#2b4eff" }}>Answer: </strong>
            {answer}
          </div>
        )}

        {/* PLAY AUDIO */}
        {audioURL && (
  <audio controls style={{ width: "100%" }}>
    <source src={audioURL} type="audio/mp3" />
  </audio>
)}

{showFeedback && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingTop: "80px",
      zIndex: 9999
    }}
  >
    <div
      style={{
        width: "400px",
        background: "#fff",
        borderRadius: "16px",
        padding: "24px",
        textAlign: "center"
      }}
    >

      {!feedbackDone ? (
        <>
          <h3>
            Was this response helpful?
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginTop: "20px"
            }}
          >
            <button
              onClick={() =>
                submitFeedback(true)
              }
            >
              Yes
            </button>

            <button
              onClick={() =>
                submitFeedback(false)
              }
            >
              No
            </button>
          </div>
        </>
      ) : (
        <>
          <h3>
            Thank you for your feedback!
          </h3>

          <button
            onClick={() =>
              setShowFeedback(false)
            }
          >
            Close
          </button>
        </>
      )}

    </div>
  </div>
)}
      </div>
    </div>
  );
}