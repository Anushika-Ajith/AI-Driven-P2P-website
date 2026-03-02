module.exports = [
"[project]/website-components/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website-components/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website-components/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website-components/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Page() {
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function startProcessFlow() {
            const steps = Array.from(document.querySelectorAll("#process .step"));
            if (steps.length === 0) {
                console.warn("Steps not found, retrying...");
                setTimeout(startProcessFlow, 200);
                return;
            }
            let index = 0;
            setInterval(()=>{
                steps.forEach((s)=>s.classList.remove("glow"));
                steps[index]?.classList.add("glow");
                index = (index + 1) % steps.length;
            }, 1000);
        }
        // Run after DOM settles
        setTimeout(startProcessFlow, 500);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "3b97d46767d8a7ce",
                children: ':root{--primary:#1e3a8a;--secondary:#2563eb;--accent:#22c55e;--bg:#eef2ff;--bg-soft:#f8fafc;--bg-white:#fff;--text-dark:#0f172a;--text-muted:#475569;--border:#e2e8f0;--glow:#2563eb2e}html{scroll-behavior:smooth}*{box-sizing:border-box;margin:0;padding:0;font-family:Segoe UI,Roboto,Arial,sans-serif}body{color:var(--text-dark);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;padding-top:90px;background:#f0f9ff!important}header{z-index:9999;border-bottom:1px solid var(--border);background:#fff;position:fixed;top:0;left:0;right:0;box-shadow:0 4px 20px #0000000f}.nav{justify-content:space-between;align-items:center;max-width:1400px;margin:auto;padding:16px 20px;display:flex}.logo{color:var(--primary);font-size:24px;font-weight:800}nav a{color:var(--text-muted);margin-left:22px;font-weight:500;text-decoration:none}nav a:hover{color:var(--secondary)}.features-grid .glow-box h3,.features-grid .glow-box p{position:relative;z-index:2!important}.hero h1{letter-spacing:-.01em;color:#0f172a;max-width:560px;margin-bottom:24px;font-size:48px;font-weight:700;line-height:1.15}.hero p{color:#475569;max-width:560px;margin-bottom:28px;font-size:20px;font-weight:400;line-height:1.65}.hero-points{list-style:none}.hero-points li{color:#0f172a;align-items:center;gap:10px;margin-bottom:14px;font-size:17px;font-weight:600;line-height:1.6;display:flex}.hero-points li:before{content:"✔";color:#22c55e;font-size:18px;line-height:1}.process{background:#fff;border-radius:22px;width:100%;max-width:650px;padding:28px 30px;position:relative;box-shadow:0 24px 48px #0f172a14}.process.glow-border{border-radius:22px;overflow:hidden}.process.glow-border:before{content:"";z-index:0;background:linear-gradient(90deg,#0000,#5b91ff,#2563eb,#bfdbfe,#0000) 0 0/400% 400%;animation:6s linear infinite borderGlow;position:absolute;inset:-2px}.process.glow-border:after{content:"";z-index:1;background:#fff;border-radius:20px;position:absolute;inset:1px}.process>*{z-index:2;position:relative}.steps{align-items:center;gap:18px;margin-bottom:22px;padding-bottom:20px;display:flex;position:relative}.step{z-index:2;color:#475569;background:#f8fafc;border:2px solid #0000;border-radius:16px;justify-content:center;align-items:center;min-height:44px;padding:14px 22px;font-size:15px;font-weight:400;line-height:1.25;transition:border-color .6s,box-shadow .6s,transform .6s;display:flex;position:relative}.step:not(:last-child):after{content:"";z-index:1;background:#c7d2fe;width:18px;height:2px;position:absolute;top:65%;right:-18px}.step.glow{background:#3b82f61f;transition:all .4s;transform:translateY(-2px);box-shadow:0 0 12px #3b82f659;border-color:#3b82f6!important}.steps.external:after{opacity:.7}.divider{color:#496dfe;text-align:center;margin:18px 0 20px;font-size:15px;font-weight:400}.features-grid .glow-box h3{z-index:2;margin-bottom:12px;position:relative;color:#0f172a!important;font-size:20px!important;font-weight:600!important}.features-grid .glow-box p{z-index:2;position:relative;color:#475569!important;font-size:18px!important;line-height:1.6!important}.glow-border{border-radius:18px;position:relative;overflow:hidden}.glow-border:before{content:"";z-index:0;background:linear-gradient(90deg,#0000,#5b91ff,#2563eb,#bfdbfe,#0000) 0 0/400% 400%;animation:6s linear infinite borderGlow;position:absolute;inset:-2px}.glow-border:after{content:"";z-index:1;background:#fff;border-radius:16px;position:absolute;inset:1px}.features-section{border-top:1px solid var(--border);background:linear-gradient(#f8fafc,#fff);padding:100px 20px}.features-container{max-width:1400px;margin:auto}.features-header{max-width:760px;margin-bottom:64px}.features-header h2{letter-spacing:-.01em;color:#0f172a;margin-bottom:18px;font-size:38px;font-weight:700}.features-header p{color:#475569;max-width:720px;font-size:20px;line-height:1.7}.features-grid{grid-template-columns:repeat(3,1fr);gap:36px;display:grid}@media (width<=1024px){.features-grid{grid-template-columns:repeat(2,1fr)}}@media (width<=600px){.features-grid{grid-template-columns:1fr}}.feature-card.glow{border-color:var(--secondary);box-shadow:0 0 0 6px var(--glow),0 18px 40px #00000014;transform:translateY(-2px)}.feature-card h3{color:var(--primary);margin-bottom:12px;font-size:20px;font-weight:600}.feature-card p{color:#475569;font-size:17px;line-height:1.65}@media (width<=900px){.steps{flex-wrap:wrap;justify-content:center}.step{min-width:140px}.step:not(:last-child):after{display:none}}.hamburger{cursor:pointer;background:0 0;border:none;padding:6px;display:none}.hamburger span{background:#1e3a8a;width:24px;height:2px;margin:5px 0;transition:all .3s;display:block}.hamburger.active span:first-child{transform:translateY(7px)rotate(45deg)}.hamburger.active span:nth-child(2){opacity:0}.hamburger.active span:nth-child(3){transform:translateY(-7px)rotate(-45deg)}@media (width<=1024px){.hamburger{display:block}.nav-links{border-top:1px solid var(--border);opacity:0;pointer-events:none;background:#fff;flex-direction:column;gap:18px;padding:24px 20px;transition:all .3s;display:flex;position:absolute;top:64px;left:0;right:0;transform:translateY(-20px)}.nav-links.open{opacity:1;pointer-events:auto;transform:translateY(0)}.nav-links a{margin-left:0;font-size:18px}.nav{position:relative}}@media (width>=1025px){.nav-links{display:flex}}#contact{background:linear-gradient(#f0f9ff,#fff);padding:80px 20px}.contact-wrap{text-align:center;max-width:900px;margin:auto}.contact-eyebrow{color:var(--secondary);margin-bottom:10px;font-size:16px;font-weight:600}.contact-title{color:#0f172a;margin-bottom:14px;font-size:38px;font-weight:700}.contact-desc{color:#475569;max-width:650px;margin:0 auto 40px;font-size:18px;line-height:1.6}.contact-box{background:#fff;border:1px solid #dbe3ff;border-radius:16px;max-width:700px;margin:auto;padding:32px;position:relative;box-shadow:0 0 0 6px #2563eb26}.contact-box:before{content:"";z-index:0;background:linear-gradient(90deg,#0000,#5b91ff,#2563eb,#bfdbfe,#0000) 0 0/300% 300%;border-radius:18px;animation:8s linear infinite borderGlow;position:absolute;inset:-2px}.contact-box:after{content:"";z-index:1;background:#fff;border-radius:14px;position:absolute;inset:1px}.contact-box>*{z-index:2;position:relative}.contact-grid{grid-template-columns:1fr 1fr;gap:16px;display:grid}@media (width<=768px){.contact-grid{grid-template-columns:1fr}}.contact-box label{text-align:left;color:#334155;margin-bottom:6px;font-size:15px;font-weight:600;display:block}.contact-box input,.contact-box textarea{border:1px solid #cbd5e1;border-radius:8px;width:100%;padding:10px 12px;font-size:16px}.contact-box textarea{resize:none}.contact-btn{color:#fff;cursor:pointer;background:#5a83f4;border:none;border-radius:8px;width:100%;margin-top:14px;padding:12px;font-weight:700}.contact-btn:hover{background:#1d4ed8}.whatsapp-btn{z-index:9999;cursor:pointer;display:inline-block;position:fixed;bottom:28px;right:28px}.whatsapp-btn img{object-fit:contain;width:190px;height:120px;transition:transform .2s}.whatsapp-btn img:hover{transform:scale(1.08)}@media (width<=1024px){.whatsapp-btn{z-index:9999;position:fixed;bottom:22px;right:22px}.whatsapp-btn img{border-radius:50%;transition:transform .2s;content:url(/images/wtsp-icon.png)!important;object-fit:contain!important;width:48px!important;height:48px!important;box-shadow:none!important;background:0 0!important;padding:0!important}.whatsapp-btn img:hover{transform:scale(1.08)}}.product-section{background:linear-gradient(#f0f9ff,#fff);align-items:center;min-height:100vh;padding:100px 20px 60px;display:flex}.product-container{width:100%;max-width:1400px;margin:0 auto}.section-title{letter-spacing:.08em;text-transform:uppercase;color:var(--secondary);margin-bottom:14px;font-size:14px;font-weight:600;display:inline-block}.product-heading{color:#0f172a;margin-bottom:20px;font-size:34px;font-weight:700}.product-intro{color:#334155;max-width:820px;margin-bottom:50px;font-size:19px;line-height:1.7}.product-section{padding:120px 20px}.features-section{border-top:1px solid var(--border);padding:100px 20px 60px}.features-header h2{color:#0f172a;margin-bottom:16px;font-weight:700;font-size:34px!important}.features-eyebrow{letter-spacing:.08em;text-transform:uppercase;color:var(--secondary);margin-bottom:12px;font-size:14px;font-weight:600;display:inline-block}.features-header p{color:#334155;max-width:820px;line-height:1.7;font-size:19px!important}.glow-box{background:#fff;border-radius:16px;flex-direction:column;justify-content:flex-start;min-height:210px;padding:30px 28px;display:flex;position:relative;overflow:hidden;box-shadow:0 8px 30px #0284c714}.glow-box:before{content:"";z-index:0;background:linear-gradient(90deg,#0000,#38bdf8,#0ea5e9,#e0f2fe,#0000) 0 0/400% 400%;animation:6s linear infinite borderGlow;position:absolute;inset:-2px}.glow-box:after{content:"";z-index:1;background:#fff;border-radius:14px;position:absolute;inset:1px}.glow-box h4,.glow-box p{z-index:2;position:relative}.glow-box h4{color:#0f172a;margin-bottom:12px;font-size:22px;font-weight:600}.glow-box p{color:#475569;font-size:18px;line-height:1.6}.glow-border{margin-bottom:-2px!important}@keyframes borderGlow{0%{background-position:0%}to{background-position:400%}}.product-grid{grid-template-columns:repeat(2,1fr);gap:36px;display:grid}@media (width<=1024px){.product-grid{grid-template-columns:1fr}}.product-heading{font-size:28px}.product-section{min-height:auto;padding:100px 20px}.glow-box h3,.glow-box h4{margin-bottom:12px!important}.glow-box p{flex:1;line-height:1.3}.product-grid .glow-box,.features-grid .glow-box{height:100%!important}.product-grid,.features-grid{align-items:stretch!important}#product .product-grid .glow-box,#managed-services .product-grid .glow-box{height:auto!important;min-height:auto!important;padding:26px 30px!important;display:block!important}#product .product-grid .glow-box h4,#managed-services .product-grid .glow-box h4{margin-top:0!important;margin-bottom:14px!important}#product .product-grid .glow-box p,#managed-services .product-grid .glow-box p{flex:none!important;margin-bottom:0!important;line-height:1.55!important}#product .glow-box,#managed-services .glow-box{position:relative;padding:28px 30px!important}#product .glow-box:after,#managed-services .glow-box:after{border-radius:14px!important;inset:1px!important}#product .glow-box p,#managed-services .glow-box p{flex:none!important;margin-bottom:0!important}#product.product-section,#managed-services.product-section{padding-top:100px!important;padding-bottom:100px!important}.hero{background:linear-gradient(#f0f9ff,#fff);padding:120px 20px 80px}.hero-container{grid-template-columns:1.1fr 1fr;align-items:center;gap:40px;max-width:1200px;margin:auto;display:grid}.hero-container>div:first-child{max-width:550px}@media (width<=1024px){.hero{padding:20px 20px 40px!important}.hero-container{max-width:960px!important;margin:0 auto!important;padding:0!important}.hero-container>div:first-child{text-align:left!important;max-width:100%!important;padding-left:20px!important;padding-right:20px!important}.process{max-width:760px!important;margin:0 auto!important;padding:20px!important}.hero h1,.hero p,.hero-points,.hero-points li{margin-left:0!important;padding-left:0!important}}@media (width<=600px){body{padding-top:65px!important}.hero{padding-top:10px!important}.hero-container{grid-template-columns:1fr!important;gap:20px!important}.hero-container>div:first-child{order:1!important}.process{order:2!important;width:100%!important;max-width:100%!important}}@media (width>=1025px){.hero{padding:100px 20px!important}.hero-container{max-width:1400px!important;margin:0 auto!important;padding:0!important}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "jsx-3b97d46767d8a7ce",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-3b97d46767d8a7ce" + " " + "nav",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "logo",
                            children: "ODIN Technologies"
                        }, void 0, false, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "jsx-3b97d46767d8a7ce" + " " + `nav-links ${menuOpen ? "open" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#about",
                                    onClick: ()=>setMenuOpen(false),
                                    className: "jsx-3b97d46767d8a7ce",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1131,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#features",
                                    onClick: ()=>setMenuOpen(false),
                                    className: "jsx-3b97d46767d8a7ce",
                                    children: "Features"
                                }, void 0, false, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1132,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#product",
                                    onClick: ()=>setMenuOpen(false),
                                    className: "jsx-3b97d46767d8a7ce",
                                    children: "Product"
                                }, void 0, false, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1133,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#managed-services",
                                    onClick: ()=>setMenuOpen(false),
                                    className: "jsx-3b97d46767d8a7ce",
                                    children: "Managed Services"
                                }, void 0, false, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1134,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    onClick: ()=>setMenuOpen(false),
                                    className: "jsx-3b97d46767d8a7ce",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1135,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMenuOpen(!menuOpen),
                            "aria-label": "Toggle navigation",
                            className: "jsx-3b97d46767d8a7ce" + " " + `hamburger ${menuOpen ? "active" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-3b97d46767d8a7ce"
                                }, void 0, false, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1143,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-3b97d46767d8a7ce"
                                }, void 0, false, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1144,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-3b97d46767d8a7ce"
                                }, void 0, false, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1145,
                                    columnNumber: 3
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1138,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/website-components/app/page.tsx",
                    lineNumber: 1128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/website-components/app/page.tsx",
                lineNumber: 1127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-3b97d46767d8a7ce" + " " + "hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-3b97d46767d8a7ce" + " " + "hero-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b97d46767d8a7ce",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "jsx-3b97d46767d8a7ce",
                                    children: [
                                        "AI-Driven Procurement.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "jsx-3b97d46767d8a7ce"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1157,
                                            columnNumber: 15
                                        }, this),
                                        "Complete Transparency."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-3b97d46767d8a7ce",
                                    children: "We redesign the procure-to-pay process to be agile, auditable, and fully traceable. AI drives the internal and external sourcing process, ensuring every stakeholder has transparent, traceable, and explainable visibility across the entire sourcing lifecycle."
                                }, void 0, false, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "hero-points",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "AI-driven internal & external sourcing"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1166,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "100% traceable decisions and approvals"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1167,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Real-time leadership visibility"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1168,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "process",
                            className: "jsx-3b97d46767d8a7ce" + " " + "process glow-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        textAlign: "left",
                                        fontSize: "13px",
                                        fontWeight: 700,
                                        color: "#2546f5",
                                        marginBottom: "12px",
                                        marginTop: "-4px"
                                    },
                                    className: "jsx-3b97d46767d8a7ce",
                                    children: "Internal Sourcing"
                                }, void 0, false, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1173,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "steps internal",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3b97d46767d8a7ce" + " " + "step",
                                            children: "Internal Requisition"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1186,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3b97d46767d8a7ce" + " " + "step",
                                            children: "Expiry Optimization"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1187,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3b97d46767d8a7ce" + " " + "step",
                                            children: "Central Stock"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1188,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3b97d46767d8a7ce" + " " + "step",
                                            children: "Store Issue"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1189,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1185,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "divider",
                                    children: "AI evaluates → Balance moves to External"
                                }, void 0, false, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1192,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        textAlign: "left",
                                        fontSize: "13px",
                                        fontWeight: 700,
                                        color: "#2546f5",
                                        marginBottom: "12px",
                                        marginTop: "-4px"
                                    },
                                    className: "jsx-3b97d46767d8a7ce",
                                    children: "External Sourcing"
                                }, void 0, false, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1193,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "steps external",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3b97d46767d8a7ce" + " " + "step",
                                            children: "RFQ"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1206,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3b97d46767d8a7ce" + " " + "step",
                                            children: "PO"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1207,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3b97d46767d8a7ce" + " " + "step",
                                            children: "GRN"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1208,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3b97d46767d8a7ce" + " " + "step",
                                            children: "Invoice"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1209,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3b97d46767d8a7ce" + " " + "step",
                                            children: "Payment"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1210,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1205,
                                    columnNumber: 3
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1172,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/website-components/app/page.tsx",
                    lineNumber: 1153,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/website-components/app/page.tsx",
                lineNumber: 1152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "about",
                className: "jsx-3b97d46767d8a7ce" + " " + "product-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-3b97d46767d8a7ce" + " " + "product-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "section-title",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1223,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "product-heading",
                            children: "Built for Secure, Transparent Enterprise Operations"
                        }, void 0, false, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1224,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "product-intro",
                            children: "An AI-powered Procure-to-Pay platform designed for cross-industry supplier ecosystems—combining securely isolated multi-tenancy with a highly configurable architecture. Supporting Cloud, On-Premise, or Hybrid deployment, it ensures rigorous data isolation to meet the most stringent compliance and residency needs."
                        }, void 0, false, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1228,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "product-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Security-First Engineering"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1240,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Every component is designed with tenant isolation, encryption, and controlled access at its core—protecting sensitive commercial data across users and organizations."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1241,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1239,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Governance by Design"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1249,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Built-in audit trails, traceable actions, and policy-driven workflows ensure accountability and compliance without slowing operations."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1250,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1248,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Operational Discipline"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1257,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "We combine technology with structured processes to deliver stability, consistency, and reliability in mission-critical environments."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1258,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1256,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Long-Term Partnership"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1265,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "ODIN works as a trusted partner—supporting customers through platform evolution, security needs, and changing operational demands."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1266,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1264,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1237,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/website-components/app/page.tsx",
                    lineNumber: 1221,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/website-components/app/page.tsx",
                lineNumber: 1220,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "features",
                className: "jsx-3b97d46767d8a7ce" + " " + "features-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-3b97d46767d8a7ce" + " " + "features-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "features-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "features-eyebrow",
                                    children: "Features"
                                }, void 0, false, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1282,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-3b97d46767d8a7ce",
                                    children: "Built for Intelligent, Governed Procurement"
                                }, void 0, false, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-3b97d46767d8a7ce",
                                    children: "The platform combines AI-driven intelligence with strong governance to support confident, auditable procurement decisions at scale."
                                }, void 0, false, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1284,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1281,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "features-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "AI-Driven Sourcing Intelligence"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1291,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Evaluates internal availability and demand signals."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1292,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1290,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "End-to-End Traceability"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1296,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Complete audit trail across procurement lifecycle."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1297,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1295,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Decision-Centric Workflows"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1301,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Highly configurable and mobile-responsive workflows built for agile decision-making—enabling seamless approvals from any device, anywhere."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1302,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1300,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Leadership Visibility & Control"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1307,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Real-time visibility at every stage."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1308,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1306,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Vendor Interaction Intelligence"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1312,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Negotiations linked to sourcing events."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1313,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1311,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Enterprise-Ready Architecture"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1317,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Secure and scalable architecture."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1318,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1316,
                                    columnNumber: 3
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1289,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/website-components/app/page.tsx",
                    lineNumber: 1280,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/website-components/app/page.tsx",
                lineNumber: 1279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "product",
                className: "jsx-3b97d46767d8a7ce" + " " + "product-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-3b97d46767d8a7ce" + " " + "product-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "section-title",
                            children: "Product"
                        }, void 0, false, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1329,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "product-heading",
                            children: "ODIN P2P – Intelligent Procure-to-Pay Platform"
                        }, void 0, false, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1330,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "product-intro",
                            children: "A secure, AI-powered, multi-tenant Procure-to-Pay platform designed for organizations and their supplier ecosystems—built for control, compliance, and transparency."
                        }, void 0, false, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1334,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "product-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "End-to-End Automation"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1343,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Manage requisition, sourcing, RFQ, purchase orders, receipts, invoicing, and payments through a unified workflow."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1344,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1342,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "AI-Driven Intelligence"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1351,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Demand forecasting, intelligent supplier selection, spend visibility, and negotiation insights powered by AI."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1352,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1350,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Security with Transparency"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1359,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Tenant isolation, auditable workflows, and immutable records ensure trust, traceability, and accountability."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1360,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1358,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Flexible & Scalable"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1367,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Configurable approvals, compliance rules, and an API-first microservices architecture adaptable across industries."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1368,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1366,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1340,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/website-components/app/page.tsx",
                    lineNumber: 1327,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/website-components/app/page.tsx",
                lineNumber: 1326,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "managed-services",
                className: "jsx-3b97d46767d8a7ce" + " " + "product-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-3b97d46767d8a7ce" + " " + "product-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "section-title",
                            children: "Managed Services"
                        }, void 0, false, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1385,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "product-heading",
                            children: "Secure Procurement Operations, Managed by Experts"
                        }, void 0, false, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1386,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "product-intro",
                            children: "ODIN Technologies provides managed procurement services to accelerate operations while preserving strict confidentiality, security, and customer-defined data protection controls."
                        }, void 0, false, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1390,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "product-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Vendor Onboarding Acceleration"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1399,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Our team fast-tracks supplier onboarding, validation, and configuration—reducing cycle time while maintaining governance and compliance."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1400,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1398,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Rate Contract Lifecycle Management"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1408,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Effective dates, renewals, expiries, and compliance are continuously monitored to keep rate contracts accurate and up to date."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1409,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1407,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Encrypted & Controlled Access"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1416,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Pricing and sensitive contract information are visible only through secured, role-restricted views. Rates remain encrypted with zero plaintext exposure."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1417,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1415,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b97d46767d8a7ce" + " " + "glow-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Customer-Defined Encryption"
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1425,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3b97d46767d8a7ce",
                                            children: "Additional data fields and documents can be custom-encrypted based on customer security policies, compliance needs, and risk thresholds."
                                        }, void 0, false, {
                                            fileName: "[project]/website-components/app/page.tsx",
                                            lineNumber: 1426,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website-components/app/page.tsx",
                                    lineNumber: 1424,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1396,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/website-components/app/page.tsx",
                    lineNumber: 1383,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/website-components/app/page.tsx",
                lineNumber: 1382,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                className: "jsx-3b97d46767d8a7ce",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-3b97d46767d8a7ce" + " " + "contact-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "contact-eyebrow",
                            children: "Contact Us"
                        }, void 0, false, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1442,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "contact-title",
                            children: "Get in touch with our team"
                        }, void 0, false, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1444,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "contact-desc",
                            children: "Ready to transform your workflow? Contact us today and discover how StreamLine can help your team achieve extraordinary results."
                        }, void 0, false, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1448,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b97d46767d8a7ce" + " " + "contact-box",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: async (e)=>{
                                    e.preventDefault();
                                    setLoading(true);
                                    setSuccess("");
                                    setError("");
                                    const form = e.currentTarget;
                                    const formData = new FormData(form);
                                    const email = String(formData.get("email") || "").trim();
                                    const phone = String(formData.get("phone") || "").trim();
                                    const firstName = String(formData.get("firstName") || "").trim();
                                    const lastName = String(formData.get("lastName") || "").trim();
                                    const message = String(formData.get("message") || "").trim();
                                    // -------------------------
                                    // VALIDATION RULES
                                    // -------------------------
                                    // -------------------------
                                    // VALIDATION RULES
                                    // -------------------------
                                    const errors = {};
                                    // EMAIL
                                    if (!email) errors.email = "Email is required";
                                    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address";
                                    // PHONE
                                    if (!phone) errors.phone = "Phone number is required";
                                    else if (!/^[0-9]{10}$/.test(phone)) errors.phone = "Enter a valid 10-digit phone number";
                                    // FIRST NAME
                                    if (!firstName) errors.firstName = "First name is required";
                                    else if (!/^[A-Za-z ]+$/.test(firstName)) errors.firstName = "First name must contain only letters";
                                    // LAST NAME
                                    if (!lastName) errors.lastName = "Last name is required";
                                    else if (!/^[A-Za-z ]+$/.test(lastName)) errors.lastName = "Last name must contain only letters";
                                    // MESSAGE
                                    if (!message || message.length < 10) errors.message = "Message must be at least 10 characters";
                                    // If validation fails → stop and show errors
                                    if (Object.keys(errors).length > 0) {
                                        setLoading(false);
                                        setError("Please fix the errors below.");
                                        // Show inline errors
                                        const errorElements = document.querySelectorAll(".input-error");
                                        document.querySelectorAll(".input-error").forEach((el)=>{
                                            el.textContent = "";
                                        });
                                        // reset before setting new
                                        Object.entries(errors).forEach(([field, msg])=>{
                                            const errorTag = document.getElementById(`${field}-error`);
                                            if (errorTag) errorTag.textContent = msg;
                                        });
                                        return;
                                    }
                                    // -------------------------
                                    // API CALL
                                    //--------------------------
                                    const payload = {
                                        email,
                                        phone,
                                        firstName,
                                        lastName,
                                        message
                                    };
                                    const res = await fetch("/api/contact", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(payload)
                                    });
                                    const data = await res.json();
                                    setLoading(false);
                                    if (res.ok) {
                                        window.location.href = "/thank-you";
                                    }
                                },
                                className: "jsx-3b97d46767d8a7ce",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3b97d46767d8a7ce" + " " + "contact-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3b97d46767d8a7ce",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-3b97d46767d8a7ce",
                                                        children: "Email Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website-components/app/page.tsx",
                                                        lineNumber: 1550,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "email",
                                                        placeholder: "Enter your email address",
                                                        className: "jsx-3b97d46767d8a7ce"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website-components/app/page.tsx",
                                                        lineNumber: 1551,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        id: "email-error",
                                                        style: {
                                                            color: "red",
                                                            fontSize: "13px"
                                                        },
                                                        className: "jsx-3b97d46767d8a7ce" + " " + "input-error"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website-components/app/page.tsx",
                                                        lineNumber: 1552,
                                                        columnNumber: 3
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/website-components/app/page.tsx",
                                                lineNumber: 1549,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3b97d46767d8a7ce",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-3b97d46767d8a7ce",
                                                        children: "Phone Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website-components/app/page.tsx",
                                                        lineNumber: 1558,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "phone",
                                                        placeholder: "Enter your phone number",
                                                        className: "jsx-3b97d46767d8a7ce"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website-components/app/page.tsx",
                                                        lineNumber: 1559,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        id: "phone-error",
                                                        style: {
                                                            color: "red",
                                                            fontSize: "13px"
                                                        },
                                                        className: "jsx-3b97d46767d8a7ce" + " " + "input-error"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website-components/app/page.tsx",
                                                        lineNumber: 1560,
                                                        columnNumber: 3
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/website-components/app/page.tsx",
                                                lineNumber: 1557,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3b97d46767d8a7ce",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-3b97d46767d8a7ce",
                                                        children: "First Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website-components/app/page.tsx",
                                                        lineNumber: 1566,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "firstName",
                                                        placeholder: "Enter your first name",
                                                        className: "jsx-3b97d46767d8a7ce"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website-components/app/page.tsx",
                                                        lineNumber: 1567,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        id: "firstName-error",
                                                        style: {
                                                            color: "red",
                                                            fontSize: "13px"
                                                        },
                                                        className: "jsx-3b97d46767d8a7ce" + " " + "input-error"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website-components/app/page.tsx",
                                                        lineNumber: 1568,
                                                        columnNumber: 3
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/website-components/app/page.tsx",
                                                lineNumber: 1565,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3b97d46767d8a7ce",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-3b97d46767d8a7ce",
                                                        children: "Last Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website-components/app/page.tsx",
                                                        lineNumber: 1574,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "lastName",
                                                        placeholder: "Enter your last name",
                                                        className: "jsx-3b97d46767d8a7ce"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website-components/app/page.tsx",
                                                        lineNumber: 1575,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        id: "lastName-error",
                                                        style: {
                                                            color: "red",
                                                            fontSize: "13px"
                                                        },
                                                        className: "jsx-3b97d46767d8a7ce" + " " + "input-error"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website-components/app/page.tsx",
                                                        lineNumber: 1576,
                                                        columnNumber: 3
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/website-components/app/page.tsx",
                                                lineNumber: 1573,
                                                columnNumber: 1
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/website-components/app/page.tsx",
                                        lineNumber: 1548,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: "16px"
                                        },
                                        className: "jsx-3b97d46767d8a7ce",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "jsx-3b97d46767d8a7ce",
                                                children: "Message"
                                            }, void 0, false, {
                                                fileName: "[project]/website-components/app/page.tsx",
                                                lineNumber: 1583,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "message",
                                                rows: 4,
                                                placeholder: "Tell us about your project...",
                                                className: "jsx-3b97d46767d8a7ce"
                                            }, void 0, false, {
                                                fileName: "[project]/website-components/app/page.tsx",
                                                lineNumber: 1584,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                id: "message-error",
                                                style: {
                                                    color: "red",
                                                    fontSize: "13px"
                                                },
                                                className: "jsx-3b97d46767d8a7ce" + " " + "input-error"
                                            }, void 0, false, {
                                                fileName: "[project]/website-components/app/page.tsx",
                                                lineNumber: 1589,
                                                columnNumber: 3
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/website-components/app/page.tsx",
                                        lineNumber: 1582,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: loading,
                                        className: "jsx-3b97d46767d8a7ce" + " " + "contact-btn",
                                        children: loading ? "Sending..." : "Send Message →"
                                    }, void 0, false, {
                                        fileName: "[project]/website-components/app/page.tsx",
                                        lineNumber: 1594,
                                        columnNumber: 9
                                    }, this),
                                    success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: "green",
                                            marginTop: 10
                                        },
                                        className: "jsx-3b97d46767d8a7ce",
                                        children: success
                                    }, void 0, false, {
                                        fileName: "[project]/website-components/app/page.tsx",
                                        lineNumber: 1597,
                                        columnNumber: 13
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: "red",
                                            marginTop: 10
                                        },
                                        className: "jsx-3b97d46767d8a7ce",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/website-components/app/page.tsx",
                                        lineNumber: 1598,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/website-components/app/page.tsx",
                                lineNumber: 1455,
                                columnNumber: 5
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/website-components/app/page.tsx",
                            lineNumber: 1453,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/website-components/app/page.tsx",
                    lineNumber: 1441,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/website-components/app/page.tsx",
                lineNumber: 1440,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: `/api/whatsapp?from=Landing Page`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "jsx-3b97d46767d8a7ce" + " " + "whatsapp-btn",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website$2d$components$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/whatsapp.png",
                    alt: "WhatsApp",
                    className: "jsx-3b97d46767d8a7ce"
                }, void 0, false, {
                    fileName: "[project]/website-components/app/page.tsx",
                    lineNumber: 1614,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/website-components/app/page.tsx",
                lineNumber: 1608,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=website-components_app_page_tsx_4aba92f7._.js.map