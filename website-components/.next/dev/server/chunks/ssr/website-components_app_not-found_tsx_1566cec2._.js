module.exports = [
"[project]/website-components/app/not-found.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotFound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website-components/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function NotFound() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            background: "linear-gradient(180deg, #f0f9ff, #ffffff)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nf-card glow-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "nf-code",
                        children: "404"
                    }, void 0, false, {
                        fileName: "[project]/website-components/app/not-found.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "nf-text",
                        children: "The page you are looking for does not exist."
                    }, void 0, false, {
                        fileName: "[project]/website-components/app/not-found.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        className: "nf-btn",
                        children: "Go Back Home"
                    }, void 0, false, {
                        fileName: "[project]/website-components/app/not-found.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/website-components/app/not-found.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
          .nf-card {
            position: relative;
            background: white;
            padding: 50px 60px;
            width: 100%;
            max-width: 540px;
            border-radius: 22px;
            text-align: center;
            overflow: hidden;
          }
  
          /* ======================================================
             🔥 SUPER BRIGHT OUTER GLOW (UPGRADED)
          =======================================================*/
          .nf-card::before {
            content: "";
            position: absolute;
            inset: -6px;
            border-radius: 26px;
  
            /* Stronger gradient colors */
            background: linear-gradient(
              120deg,
              #77a9ff,
              #3b82f6,
              #1d4ed8,
              #93c5fd,
              #77a9ff
            );
  
            background-size: 350% 350%;
            animation: glowMove 4s linear infinite;
  
            z-index: -1;
  
            /* MUCH brighter glow effect */
            filter: blur(12px);
            opacity: 0.9;
          }
  
          .nf-card::after {
            content: "";
            position: absolute;
            inset: 3px;
            background: white;
            border-radius: 18px;
            z-index: -1;
          }
  
          @keyframes glowMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 200% 50%; }
            100% { background-position: 400% 50%; }
          }
  
          /* ======================================================
             ✨ STRONGER INNER PULSE GLOW
          =======================================================*/
          .glow-inner {
            animation: innerPulse 2.8s ease-in-out infinite;
          }
  
          @keyframes innerPulse {
            0% {
              box-shadow: 0 0 0 rgba(59,130,246,0.0);
            }
            50% {
              box-shadow: 0 0 45px rgba(59,130,246,0.45);
            }
            100% {
              box-shadow: 0 0 0 rgba(59,130,246,0.0);
            }
          }
  
          .nf-code {
            font-size: 64px;
            font-weight: 800;
            color: #1e3a8a;
            margin-bottom: 14px;
          }
  
          .nf-text {
            font-size: 19px;
            color: #475569;
            margin-bottom: 32px;
            line-height: 1.6;
          }
  
          .nf-btn {
            background: rgb(90,131,244);
            padding: 12px 30px;
            color: white;
            border-radius: 8px;
            font-weight: 700;
            text-decoration: none;
            transition: transform 0.2s ease, background 0.2s ease;
          }
  
          .nf-btn:hover {
            transform: scale(1.05);
            background: #1d4ed8;
          }
        `
            }, void 0, false, {
                fileName: "[project]/website-components/app/not-found.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/website-components/app/not-found.tsx",
        lineNumber: 3,
        columnNumber: 7
    }, this);
}
}),
];

//# sourceMappingURL=website-components_app_not-found_tsx_1566cec2._.js.map