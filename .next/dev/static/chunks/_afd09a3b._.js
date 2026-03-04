(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/axios.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const instance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:4000") || "http://localhost:4000",
    maxContentLength: Infinity,
    maxBodyLength: Infinity
});
const __TURBOPACK__default__export__ = instance;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ChatUI.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/axios.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ChatUI() {
    _s();
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [answer, setAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recording, setRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioURL, setAudioURL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // ----------------------------------------
    // TEXT QUESTION
    // ----------------------------------------
    async function ask() {
        try {
            setLoading(true);
            setAnswer("");
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/ask", {
                question
            });
            if (typeof res.data.answer === "object") {
                console.warn("Backend returned object instead of string");
            }
            setAnswer(String(res.data.answer || "").trim());
        } catch (err) {
            console.error(err);
            setAnswer("❌ Error occurred. Check backend.");
        } finally{
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
            const blob = new Blob(audioChunksRef.current, {
                type: "audio/webm"
            });
            const formData = new FormData();
            formData.append("audio", blob, "voice.webm");
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("http://localhost:4000/ask/voice", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            setAnswer(res.data.answer_text || res.data.answer || "");
            if (res.data.audio_url) {
                setAudioURL(res.data.audio_url);
            }
        } catch (err) {
            console.error("Voice request failed:", err);
            setAnswer("❌ Voice request failed.");
        } finally{
            setLoading(false);
        }
    }
    // ----------------------------------------
    // START RECORDING
    // ----------------------------------------
    async function startRecording() {
        setAudioURL("");
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            const recorder = new MediaRecorder(stream);
            mediaRecorderRef.current = recorder;
            audioChunksRef.current = [];
            recorder.ondataavailable = (event)=>{
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
            tracks.forEach((track)=>track.stop());
            mediaRecorderRef.current.stop();
        }
        setRecording(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: "60px",
            background: "#f4f6ff",
            fontFamily: "Arial"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "600px",
                background: "white",
                padding: "32px",
                borderRadius: "20px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
                border: "1px solid #eef1ff"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        fontSize: "32px",
                        fontWeight: "800",
                        color: "#2b4eff",
                        marginBottom: "20px",
                        textAlign: "center"
                    },
                    children: "WhatsApp Assistant"
                }, void 0, false, {
                    fileName: "[project]/components/ChatUI.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    style: {
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
                        overflow: "hidden"
                    },
                    rows: 2,
                    placeholder: "Ask anything…",
                    value: question,
                    onChange: (e)=>{
                        setQuestion(e.target.value);
                        e.target.style.height = "auto";
                        e.target.style.height = e.target.scrollHeight + "px";
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ChatUI.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    style: {
                        width: "100%",
                        background: loading ? "#a6b4ff" : "#2b4eff",
                        color: "white",
                        padding: "14px",
                        borderRadius: "10px",
                        fontSize: "17px",
                        fontWeight: "600",
                        cursor: "pointer",
                        border: "none"
                    },
                    disabled: loading,
                    onClick: ask,
                    children: loading ? "Thinking..." : "Ask"
                }, void 0, false, {
                    fileName: "[project]/components/ChatUI.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    disabled: loading,
                    onClick: recording ? stopRecording : startRecording,
                    style: {
                        marginTop: "10px",
                        width: "100%",
                        background: recording ? "#ff3b3b" : "#25d366",
                        color: "white",
                        padding: "12px",
                        borderRadius: "12px",
                        fontSize: "17px",
                        border: "none",
                        cursor: "pointer"
                    },
                    children: recording ? "Stop Recording" : "🎤 Start Voice Input"
                }, void 0, false, {
                    fileName: "[project]/components/ChatUI.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this),
                answer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: "24px",
                        padding: "18px",
                        borderRadius: "12px",
                        background: "#f7f9ff",
                        border: "1px solid #d9defc",
                        fontSize: "17px",
                        color: "#333",
                        lineHeight: "1.6"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: "#2b4eff"
                            },
                            children: "Answer: "
                        }, void 0, false, {
                            fileName: "[project]/components/ChatUI.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, this),
                        answer
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatUI.tsx",
                    lineNumber: 226,
                    columnNumber: 11
                }, this),
                audioURL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                    controls: true,
                    style: {
                        width: "100%"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                        src: audioURL,
                        type: "audio/mp3"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatUI.tsx",
                        lineNumber: 246,
                        columnNumber: 5
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ChatUI.tsx",
                    lineNumber: 245,
                    columnNumber: 3
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ChatUI.tsx",
            lineNumber: 137,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ChatUI.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(ChatUI, "Ulx21gRbv/9ZA90FS27xnQT/c/8=");
_c = ChatUI;
var _c;
__turbopack_context__.k.register(_c, "ChatUI");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_afd09a3b._.js.map