"use client"

import { useEffect, useState } from "react"

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    function startProcessFlow() {
      const steps = Array.from(document.querySelectorAll("#process .step"));
  
      if (steps.length === 0) {
        console.warn("Steps not found, retrying...");
        setTimeout(startProcessFlow, 200);
        return;
      }
  
      let index = 0;
  
      setInterval(() => {
        steps.forEach(s => s.classList.remove("glow"));
        steps[index]?.classList.add("glow");
        index = (index + 1) % steps.length;
      }, 1000);
    }
  
    // Run after DOM settles
    setTimeout(startProcessFlow, 500);
  }, []);
  
  
  
  

  return (
    <>
      {/* ================= INTERNAL CSS ================= */}
      <style jsx global>{`
  :root {
    --primary: #1e3a8a;
    --secondary: #2563eb;
    --accent: #22c55e;
    --bg: #eef2ff;
    --bg-soft: #f8fafc;
    --bg-white: #ffffff;
    --text-dark: #0f172a;
    --text-muted: #475569;
    --border: #e2e8f0;
    --glow: rgba(37, 99, 235, 0.18);
  }
    html {
  scroll-behavior: smooth;
}


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", Roboto, Arial, sans-serif;
  }

  body {
  padding-top: 90px;
  background: #f0f9ff !important; /* Clean white background */
  color: var(--text-dark);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


  /* ================= NAV ================= */
  header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999; /* above all sections */
  background: white;
  border-bottom: 1px solid var(--border);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

  .nav {
    max-width: 1400px;
    margin: auto;
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-weight: 800;
    font-size: 24px;
    color: var(--primary);
  }

  nav a {
    margin-left: 22px;
    text-decoration: none;
    font-weight: 500;
    color: var(--text-muted);
  }

  nav a:hover {
    color: var(--secondary);
  }

/* FIX: Feature titles hidden */
.features-grid .glow-box h3,
.features-grid .glow-box p {
  position: relative;
  z-index: 2 !important;
}


  /* ✅ FIXED HERO HEADING */
  .hero h1 {
    font-size: 42px;
    font-weight: 790;
    line-height: 1.15;
    letter-spacing: -0.01em;
    color: #0f172a;
    margin-bottom: 24px;
    max-width: 560px;
  }

  /* hero paragraph */
  .hero p {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.65;
    color: #475569;
    margin-bottom: 28px;
    max-width: 560px;
  }

  /* hero bullet list */
  .hero-points {
    list-style: none;
  }

  .hero-points li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.6;
    margin-bottom: 14px;
    color: #0f172a;
  }

  .hero-points li::before {
    content: "✔";
    color: #22c55e;
    font-size: 18px;
    line-height: 1;
  }

  /* ================= PROCESS CARD ================= */
  .process {
  width: 100%;
  max-width: 650px;        /* perfect width like original */
  border-radius: 22px;
  padding: 28px 30px;      /* more compact and clean */
  background: white;
  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.08);
  position: relative;
}


.process.glow-border {
  border-radius: 22px;
  overflow: hidden;
}
.process.glow-border::before {
  content: "";
  position: absolute;
  inset: -2px;
  background: linear-gradient(90deg, transparent, #5b91ff, #2563eb, #bfdbfe, transparent);
  background-size: 400% 400%;
  animation: borderGlow 6s linear infinite;
  z-index: 0;
}

.process.glow-border::after {
  content: "";
  position: absolute;
  inset: 1px;
  background: white;
  border-radius: 20px;
  z-index: 1;
}

.process > * {
  position: relative;
  z-index: 2;
}
  .steps {
    position: relative;
    display: flex;
    gap: 18px;
    margin-bottom: 22px;
    padding-bottom: 20px;
    align-items: center;
  }


.step {
  position: relative;
  z-index: 2;

  padding: 14px 22px;
  min-height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 16px;

  font-size: 15px;
  font-weight: 400;        /* ⬅ reduced */
  line-height: 1.25;

  background: #f8fafc;
  color: #475569;

  border: 2px solid transparent;

  transition:
    border-color 0.6s ease,
    box-shadow 0.6s ease,
    transform 0.6s ease;
}

/* CONNECTING LINE */
.step:not(:last-child)::after {
  content: "";
  position: absolute;

  top: 50%;
  left: 100%;                 /* start exactly at right edge of box */

  width: 16px;                /* half the gap between boxes */
  height: 1.5px;


  background: #9ca3af;

  transform: translateY(-50%);
}

/* ARROW HEAD */
.step:not(:last-child)::before {
  content: "";
  position: absolute;

  top: 50%;
  left: calc(100% + 14px);    /* place arrow at end of line */

  transform: translateY(-50%);

  border-top: 3.5px solid transparent;
border-bottom: 3.5px solid transparent;
border-left: 5.5px solid #9ca3af;

}



  .step.glow {
  border-color: #3b82f6 !important;
  background: rgba(59, 130, 246, 0.12);
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.35);
  transform: translateY(-2px);
  transition: all 0.4s ease;
}



.steps.external::after {
  opacity: 0.7;
}

  .divider {
  font-size: 15px;
  font-weight: 400;              /* lighter */
  color:rgb(73, 109, 254);                /* muted blue-gray */
  margin: 18px 0 20px;
  text-align: center;
}
/* MAKE FEATURE CARD HEADINGS MATCH OTHER SECTIONS */
.features-grid .glow-box h3 {
  font-size: 20px !important;
  font-weight: 600 !important;
  color: #0f172a !important;
  margin-bottom: 12px;
  position: relative;
  z-index: 2;
}

.features-grid .glow-box p {
  font-size: 18px !important;
  line-height: 1.6 !important;
  color: #475569 !important;
  position: relative;
  z-index: 2;
}

/* ================= UNIFIED GLOW BORDER STYLE ================= */
.glow-border {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
}

.glow-border::before {
  content: "";
  position: absolute;
  inset: -2px;
  background: linear-gradient(
    90deg,
    transparent,
    #5b91ff,
    #2563eb,
    #bfdbfe,
    transparent
  );
  background-size: 400% 400%;
  animation: borderGlow 6s linear infinite;
  z-index: 0;
}

.glow-border::after {
  content: "";
  position: absolute;
  inset: 1px;
  background: white;
  border-radius: 16px;
  z-index: 1;
}

  /* ================= FEATURES ================= */
  .features-section {
    background: linear-gradient(to bottom, #f8fafc, #ffffff);
    padding: 100px 20px;
    border-top: 1px solid var(--border);
  }

  .features-container {
    max-width: 1400px;
    margin: auto;
  }

  .features-header {
    max-width: 760px;
    margin-bottom: 64px;
  }

  .features-eyebrow {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--secondary);
    margin-bottom: 12px;
    display: inline-block;
  }

  .features-header h2 {
  font-size: 38px;        /* slightly larger */
  font-weight: 700;       /* NOT 800 */
  letter-spacing: -0.01em;
  margin-bottom: 18px;
  color: #0f172a;
}

  .features-header p {
  font-size: 20px;       /* ⬆ increase */
  line-height: 1.7;      /* more breathing space */
  max-width: 720px;
  color: #475569;
}


  /* Desktop */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
}

/* Tablet */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media (max-width: 600px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}



  .feature-card.glow {
    border-color: var(--secondary);
    box-shadow: 0 0 0 6px var(--glow),
      0 18px 40px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }

  .feature-card h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--primary);
  }

  .feature-card p {
    font-size: 17px;
    color: var(--text-muted);
    line-height: 1.65;
    color: #475569;
  }

 
  
  
  @media (max-width: 900px) {
  .steps {
    flex-wrap: wrap;
    justify-content: center;
  }

  .step {
    min-width: 140px;
  }

  .step:not(:last-child)::after {
    display: none;
  }
}

    /* ================= HAMBURGER MENU ================= */

.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #1e3a8a;
  margin: 5px 0;
  transition: all 0.3s ease;
}

/* Animate to X */
.hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ---------- MOBILE & TABLET ---------- */
@media (max-width: 1024px) {

  .hamburger {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;

    background: white;
    border-top: 1px solid var(--border);

    display: flex;
    flex-direction: column;
    gap: 18px;

    padding: 24px 20px;

    transform: translateY(-20px);
    opacity: 0;
    pointer-events: none;

    transition: all 0.3s ease;
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-links a {
    margin-left: 0;
    font-size: 18px;
  }

  .nav {
    position: relative;
  }
}

/* ---------- DESKTOP ---------- */
@media (min-width: 1025px) {
  .nav-links {
    display: flex;
  }
}

/* ================= CONTACT (SIMPLE & CLEAN) ================= */

#contact {
  background: linear-gradient(180deg, #f0f9ff, #ffffff);
  padding: 80px 20px;
}

/* Center everything */
.contact-wrap {
  max-width: 900px;
  margin: auto;
  text-align: center;
}

/* Small heading */
.contact-eyebrow {
  font-size: 16px;
  font-weight: 600;
  color:var(--secondary); 
  margin-bottom: 10px;
}

/* Main heading */
.contact-title {
  font-size: 38px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 14px;
}

/* Description */
.contact-desc {
  font-size: 18px;
  color: #475569;
  max-width: 650px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

/* Form box */
.contact-box {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  max-width: 700px;
  margin: auto;
  border: 1px solid #dbe3ff;
  box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.15);
  position: relative;
}
/* Continuous illuminated border for contact section */
.contact-box::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 18px;
  background: linear-gradient(
    90deg,
    transparent,
    #5b91ff,
    #2563eb,
    #bfdbfe,
    transparent
  );
  background-size: 300% 300%;
  animation: borderGlow 8s linear infinite;
  z-index: 0;
}

.contact-box::after {
  content: "";
  position: absolute;
  inset: 1px;
  background: white;
  border-radius: 14px;
  z-index: 1;
}

.contact-box > * {
  position: relative;
  z-index: 2;
}

/* Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

/* Labels */
.contact-box label {
  display: block;
  text-align: left;
  font-size: 15px;
  font-weight: 600;
  color: #334155;
  margin-bottom: 6px;
}

/* Inputs */
.contact-box input,
.contact-box textarea {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-size: 16px;
}

.contact-box textarea {
  resize: none;
}

/* Button */
.contact-btn {
  margin-top: 14px;
  width: 100%;
  background:rgb(90, 131, 244); /* BLUE */
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-weight: 700;
  cursor: pointer;
}

.contact-btn:hover {
  background: #1d4ed8; /* darker blue */
}
  /* ================= WHATSAPP BUTTON (IMAGE ONLY) ================= */

.whatsapp-btn {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  cursor: pointer;
  display: inline-block;
}

.whatsapp-btn img {
  width: 190px;  
  height: 120px;
  object-fit: contain;
  transition: transform 0.2s ease;
}

.whatsapp-btn img:hover {
  transform: scale(1.08);
}
  /* Mobile + Tablet WhatsApp Button (small icon only) */
@media (max-width: 1024px) {

  .whatsapp-btn {
    position: fixed;
    bottom: 22px;
    right: 22px;
    z-index: 9999;
  }

  .whatsapp-btn img {
    content: url("/images/wtsp-icon.png") !important;

    width: 48px !important;   /* ⬅ slightly bigger */
    height: 48px !important;

    object-fit: contain !important;
    border-radius: 50%;        /* keeps icon smooth */
    background: none !important;
    padding: 0 !important;
    box-shadow: none !important;
    transition: transform 0.2s ease;
  }

  .whatsapp-btn img:hover {
    transform: scale(1.08);
  }
}






/* ================= PRODUCT SECTION ================= */

.product-section {
  padding: 100px 20px 60px;
    
  min-height: 100vh;          /* 🔥 full screen height */
  display: flex;
  align-items: center;        /* vertically center content */
  background: linear-gradient(180deg, #f0f9ff, #ffffff);
}

.product-container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

/* Eyebrow */
.section-title  {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--secondary);
  margin-bottom: 14px;
  display: inline-block;
}

/* Main heading */
.product-heading {
  font-size: 34px;            /* 🔥 slightly increased */
  margin-bottom: 20px;
  color: #0f172a;
  font-weight: 700;
}

/* Intro text */
.product-intro {
  max-width: 820px;
  font-size: 19px;            /* 🔥 slightly increased */
  line-height: 1.7;
  color: #334155;
  margin-bottom: 50px;        /* 🔥 increased spacing */
}


.product-section {
  padding: 120px 20px;
}

.features-section {
  padding: 120px 20px;
  border-top: 1px solid var(--border);
}

/* GRID */
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;                  /* 🔥 more spacing */
}
/* Make FEATURE section heading match other sections */
.features-section {
  padding: 100px 20px 60px;

}

.features-header h2 {
    font-size: 34px !important;   /* match .product-heading */
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 16px;
}

.features-eyebrow {
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--secondary);
  margin-bottom: 12px;
}

.features-header p {
  font-size: 19px !important;  /* match intro text */
  line-height: 1.7;
  color: #334155;
  max-width: 820px;
}

/* Glow Box (tile) */
.glow-box {
  position: relative;
  padding: 30px 28px;         /* 🔥 increased padding */
  border-radius: 16px;
  background: #ffffff;
  overflow: hidden;
  min-height: 210px;          /* 🔥 increased tile height */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 8px 30px rgba(2, 132, 199, 0.08);
}

.glow-box::before {
  content: "";
  position: absolute;
  inset: -2px;
  background: linear-gradient(
    90deg,
    transparent,
    #38bdf8,
    #0ea5e9,
    #e0f2fe,
    transparent
  );
  background-size: 400% 400%;
  animation: borderGlow 6s linear infinite;
  z-index: 0;
}

.glow-box::after {
  content: "";
  position: absolute;
  inset: 1px;
  background: #fff;
  border-radius: 14px;
  z-index: 1;
}

.glow-box h4,
.glow-box p {
  position: relative;
  z-index: 2;
}

.glow-box h4 {
  font-size: 22px;            /* 🔥 slightly increased */
  margin-bottom: 12px;
  color: #0f172a;
  font-weight: 600;
}

.glow-box p {
  font-size: 18px;            /* 🔥 slightly increased */
  line-height: 1.6;
  color: #475569;
}

.glow-border {
  margin-bottom: -2px !important;
}


@keyframes borderGlow {
  0% { background-position: 0% 50%; }
  100% { background-position: 400% 50%; }
}

/* Desktop */
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
}

/* Tablet */
@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}

  .product-heading {
    font-size: 28px;
  }

  .product-section {
    padding: 100px 20px;
    min-height: auto;        /* mobile should scroll naturally */
  }
}
/* -------------------------------------------
   UNIFORM CARD HEIGHT + PERFECT TOP/BOTTOM SPACE
------------------------------------------- */

/* Equal padding for every card */
.glow-box {
  padding: 32px 32px !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #ffffff;
  border-radius: 16px;
  min-height: 260px !important;
}

/* Make text content take up variable space
   so bottom padding ALWAYS stays equal */
.glow-box h3,
.glow-box h4 {
  margin-bottom: 12px !important;
}

.glow-box p {
  flex: 1; /* IMPORTANT → pushes bottom spacing evenly */
  line-height: 1.3;
}

/* Make all cards inside the same grid EXACT same height */
.product-grid .glow-box,
.features-grid .glow-box {
  height: 100% !important;
}

/* Ensure grid rows stretch evenly */
.product-grid,
.features-grid {
  align-items: stretch !important;
}

/* =========================================================
   CLEAN, PERFECT, FIXED TOP = BOTTOM SPACING
   (PRODUCT + MANAGED SERVICES ONLY)
============================================================ */

/* Remove previous flex-grow, min-height, equal-height hacks */
#product .product-grid .glow-box,
#managed-services .product-grid .glow-box {
  display: block !important;
  min-height: auto !important;
  height: auto !important;
}

/* FIX padding EXACTLY even */
#product .product-grid .glow-box,
#managed-services .product-grid .glow-box {
  padding: 26px 30px !important;
}

/* Title spacing */
#product .product-grid .glow-box h4,
#managed-services .product-grid .glow-box h4 {
  margin-top: 0 !important;
  margin-bottom: 14px !important;
}

/* Paragraph resets */
#product .product-grid .glow-box p,
#managed-services .product-grid .glow-box p {
  margin-bottom: 0 !important;
  line-height: 1.55 !important;

  /* Remove flex pushing */
  flex: none !important;
}

/* =========================================================
   FIX UNEVEN TOP/BOTTOM PADDING BUT KEEP GLOW
============================================================ */

#product .glow-box,
#managed-services .glow-box {
  padding: 28px 30px !important; /* your desired padding */
  position: relative;
}

/* Keep glow but make inset equal on all sides */
#product .glow-box::after,
#managed-services .glow-box::after {
  inset: 1px !important;          /* keep the glow border breathing room */
  top: 1px !important;
  bottom: 1px !important;         /* this fixes the visual imbalance */
  border-radius: 14px !important;
}

#product .glow-box p,
#managed-services .glow-box p {
  margin-bottom: 0 !important;
  flex: none !important;
}
/* =========================================================
   FIX FOR UNEVEN TOP / BOTTOM SPACING IN PRODUCT & MANAGED SERVICES
============================================================ */

#product.product-section,
#managed-services.product-section {
  padding-top: 100px !important;
  padding-bottom: 100px !important;
}
/* =========================================================
   FINAL HERO RESPONSIVE FIX (CLEAN + EXACT)
============================================================ */

.hero {
  background: linear-gradient(180deg, #f0f9ff, #ffffff);
  padding: 120px 20px 80px; 
}

.hero-container {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 40px;
  align-items: center;
}

.hero-container > div:first-child {
  max-width: 550px;
}

//* ================= PERFECT TABLET HERO ALIGNMENT FIX ================= */
@media (max-width: 1024px) {

  /* EXACTLY SAME AS ABOUT SECTION */
  .hero {
    padding: 20px 20px 40px !important;
    /* top = 20px (remove big empty space)
       left/right = 10px (same as about section)
       bottom = 40px */
  }

  /* Make hero container same max-width behavior as about section */
  .hero-container {
    max-width: 960px !important;  /* same as process */
    margin: 0 auto !important;
    padding: 0 !important;
  }

  /* Center text column */
   .hero-container > div:first-child {
    text-align: left !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
    max-width: 100% !important;
  }

  /* Match process card spacing with other tablet grids */
  .process {
    max-width: 760px !important;
    margin: 0 auto !important;
    padding: 20px !important;
  }
    /* Align hero text exactly with process card */
  

  /* Bullets and texts also align */
 
  .hero h1,
  .hero p,
  .hero-points,
  .hero-points li {
    margin-left: 0 !important;
    padding-left: 0 !important;
  }


}

/* ================= MOBILE HERO FIX ================= */
@media (max-width: 600px) {

  /* Remove large white gap caused by fixed header */
  body {
    padding-top: 65px !important;
  }

  /* Remove extra spacing above hero */
  .hero {
    padding-top: 10px !important;
  }

  /* Stack hero into one column */
  .hero-container {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
  }

  /* Ensure text comes first */
  .hero-container > div:first-child {
    order: 1 !important;
  }

  /* Move process below text */
  .process {
    order: 2 !important;
    width: 100% !important;
    max-width: 100% !important;
  }
}

/* =========================================================
   FIX: REMOVE EXTRA LEFT/RIGHT PADDING ON DESKTOP HERO
============================================================ */
@media (min-width: 1025px) {

  .hero {
    padding: 100px 20px 100px !important;
  }

  .hero-container {
    max-width: 1400px !important;
    margin: 0 auto !important;
    padding: 0 !important;
  }
}
/* ================= DROPDOWN ================= */

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-btn {
  background: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  color: var(--text-muted);
  cursor: pointer;
  margin-left: 22px;
}

.dropdown-btn:hover {
  color: var(--secondary);
}

.dropdown-menu {
  position: absolute;
  top: 38px;
  left: 0;

  background: #ffffff;
  border-radius: 10px;
  padding: 10px 0;
  min-width: 180px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border);

  display: flex;
  flex-direction: column;
  z-index: 9999;
}

.dropdown-menu a {
  padding: 10px 16px;
  text-decoration: none;
  color: #334155;
  font-size: 15px;
}

.dropdown-menu a:hover {
  background: #f1f5f9;
  color: var(--secondary);
}


`}</style>



      {/* ================= NAV ================= */}
      <header>
        <div className="nav">
          <div className="logo">ODIN Technologies</div>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <div 
  className="dropdown"
  onMouseEnter={() => setProductOpen(true)}
  onMouseLeave={() => setProductOpen(false)}
>
  <button 
    className="dropdown-btn"
    onClick={() => setProductOpen(!productOpen)}
  >
    Products ▾
  </button>

  {productOpen && (
    <div className="dropdown-menu">
      <a href="#product" onClick={() => {setProductOpen(false); setMenuOpen(false)}}>P2P</a>
      <a href="#whatsapp" onClick={() => {setProductOpen(false); setMenuOpen(false)}}>WhatsApp</a>
      <a href="#document-management" onClick={() => {setProductOpen(false); setMenuOpen(false)}}>Document Management</a>
    </div>
  )}
</div>

          <a href="#managed-services" onClick={() => setMenuOpen(false)}>Managed Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
</nav>

<button
  className={`hamburger ${menuOpen ? "active" : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation"
>
  <span></span>
  <span></span>
  <span></span>
</button>

        </div>
      </header>

      {/* ================= HERO + PROCESS ================= */}
      <section className="hero">
        <div className="hero-container">
          <div>
            <h1>
              AI-Driven Procurement <br></br>
              with Complete Transparency
            </h1>

            <p>
            We redesign the procure-to-pay process to be agile, auditable, and fully traceable. AI drives the internal and external sourcing process, ensuring every stakeholder has transparent, traceable, and explainable visibility across the entire sourcing lifecycle.
            </p>

            <ul className="hero-points">
              <li>AI-driven internal & external sourcing</li>
              <li>100% traceable decisions and approvals</li>
              <li>Real-time leadership visibility</li>
            </ul>
          </div>

          <div className="process glow-border" id="process">
          <h4
    style={{
      textAlign: "left",
      fontSize: "13px",
      fontWeight: 700,
      color: "#2546f5",
      marginBottom: "12px",
      marginTop: "-4px"
    }}
  >
    Internal Sourcing
  </h4>
  <div className="steps internal">
    <div className="step">Internal Requisition</div>
    <div className="step">Expiry Optimization</div>
    <div className="step">Central Stock</div>
    <div className="step">Store Issue</div>
  </div>

  <div className="divider">AI evaluates → Balance moves to External</div>
  <h4
    style={{
      textAlign: "left",
      fontSize: "13px",
      fontWeight: 700,
      color: "#2546f5",
      marginBottom: "12px",
      marginTop: "-4px"
    }}
  >
    External Sourcing
  </h4>
  <div className="steps external">
    <div className="step">RFQ</div>
    <div className="step">PO</div>
    <div className="step">GRN</div>
    <div className="step">Invoice</div>
    <div className="step">Payment</div>
  </div>

</div>


        </div>
      </section>

{/* ================= ABOUT SECTION ================= */}
<section id="about" className="product-section">
  <div className="product-container">

    <h2 className="section-title">About</h2>
    <h3 className="product-heading">
      Built for Secure, Enterprise Procurement Operations
    </h3>

    <p className="product-intro">
  An AI-powered Procure-to-Pay platform designed for cross-industry
  supplier ecosystems—combining securely isolated multi-tenancy with a
  highly configurable architecture. Supporting Cloud, On-Premise, or Hybrid
  deployment, it ensures rigorous data isolation to meet the most stringent
  compliance and residency needs.
</p>


    <div className="product-grid">

      <div className="glow-box">
        <h4>Security-First Engineering</h4>
        <p>
          Every component is designed with tenant isolation, encryption, and
          controlled access at its core—protecting sensitive commercial data
          across users and organizations.
        </p>
      </div>

      <div className="glow-box">
        <h4>Governance by Design</h4>
        <p>
          Built-in audit trails, traceable actions, and policy-driven workflows ensuring accountability without comprimsing operational efficiency.
        </p>
      </div>

      <div className="glow-box">
        <h4>Operational Discipline</h4>
        <p>
          We combine technology with structured processes to deliver stability,
          consistency, and reliability in mission-critical environments.
        </p>
      </div>

      <div className="glow-box">
        <h4>Long-Term Partnership</h4>
        <p>
          ODIN works as a trusted partner—supporting customers through platform
          evolution, security needs, and changing operational demands.
        </p>
      </div>

    </div>

  </div>
</section>


      {/* ================= FEATURES ================= */}
      <section className="features-section" id="features">
        <div className="features-container">
          <div className="features-header">
            <span className="features-eyebrow">Features</span>
            <h2>Built for Intelligent, Governed Procurement</h2>
            <p>
            The platform combines AI-driven intelligence with strong governance to support confident, auditable procurement decisions at scale.
            </p>
          </div>

          <div className="features-grid">
  <div className="glow-box">
    <h3>AI-Driven Sourcing Intelligence</h3>
    <p>Evaluates internal availability and demand signals.</p>
  </div>

  <div className="glow-box">
    <h3>End-to-End Traceability</h3>
    <p>Complete audit trail across procurement lifecycle.</p>
  </div>

  <div className="glow-box">
    <h3>Decision-Centric Workflows</h3>
    <p>Highly configurable and mobile-responsive workflows built for agile
    decision-making—enabling seamless approvals from any device, anywhere.</p>
  </div>

  <div className="glow-box">
    <h3>Leadership Visibility & Control</h3>
    <p>Real-time visibility at every stage.</p>
  </div>

  <div className="glow-box">
    <h3>Vendor Interaction Intelligence</h3>
    <p>Negotiations linked to sourcing events.</p>
  </div>

  <div className="glow-box">
    <h3>Enterprise-Ready Architecture</h3>
    <p>Secure and scalable architecture.</p>
  </div>
</div>

        </div>
      </section>

      {/* ================= PRODUCT SECTION ================= */}
<section id="product" className="product-section">
  <div className="product-container">

    <h2 className="section-title">Product</h2>
    <h3 className="product-heading">
      ODIN P2P – Intelligent Procure-to-Pay Platform
    </h3>

    <p className="product-intro">
      A secure, AI-powered, multi-tenant Procure-to-Pay platform designed for
      organizations and their supplier ecosystems—built for control, compliance,
      and transparency.
    </p>

    <div className="product-grid">

      <div className="glow-box">
        <h4>End-to-End Automation</h4>
        <p>
          Manage requisition, sourcing, RFQ, purchase orders, receipts,
          invoicing, and payments through a unified workflow.
        </p>
      </div>

      <div className="glow-box">
        <h4>AI-Driven Intelligence</h4>
        <p>
          Demand forecasting, intelligent supplier selection, spend visibility,
          and negotiation insights powered by AI.
        </p>
      </div>

      <div className="glow-box">
        <h4>Security with Transparency</h4>
        <p>
          Tenant isolation, auditable workflows, and immutable records ensure
          trust, traceability, and accountability.
        </p>
      </div>

      <div className="glow-box">
        <h4>Flexible & Scalable</h4>
        <p>
          Configurable approvals, compliance rules, and an API-first
          microservices architecture adaptable across industries.
        </p>
      </div>

    </div>

  </div>
</section>

      

{/* ================= MANAGED SERVICES SECTION ================= */}
<section id="managed-services" className="product-section">
  <div className="product-container">

    <h2 className="section-title">Managed Services</h2>
    <h3 className="product-heading">
      Secure Procurement Operations, Managed by Experts
    </h3>

    <p className="product-intro">
    ODIN Technologies provides managed vendor services to accelerate operations while preserving strict confidentiality, security, and customer-defined data protection controls.
    </p>

    <div className="product-grid">

      <div className="glow-box">
        <h4>Vendor Onboarding Acceleration</h4>
        <p>
          Our team fast-tracks supplier onboarding, validation, and
          configuration—reducing cycle time while maintaining governance and
          compliance.
        </p>
      </div>

      <div className="glow-box">
        <h4>Rate Contract Lifecycle Management</h4>
        <p>
          Effective dates, renewals, expiries, and compliance are continuously
          monitored to keep rate contracts accurate and up to date.
        </p>
      </div>

      <div className="glow-box">
        <h4>Encrypted & Controlled Access</h4>
        <p>
          Pricing and sensitive contract information are visible only through
          secured, role-restricted views. Rates remain encrypted with zero
          plaintext exposure.
        </p>
      </div>

      <div className="glow-box">
        <h4>Customer-Defined Encryption</h4>
        <p>
          Additional data fields and documents can be custom-encrypted based on
          customer security policies, compliance needs, and risk thresholds.
        </p>
      </div>

    </div>

  </div>
</section>



      {/* Contact Section */}
      <section id="contact">
  <div className="contact-wrap">
    <div className="contact-eyebrow">Contact Us</div>

    <h2 className="contact-title">
      Get in touch with our team
    </h2>

    <p className="contact-desc">
      Ready to transform your workflow? Contact us today and discover how
      StreamLine can help your team achieve extraordinary results.
    </p>

    <div className="contact-box">

    <form
  onSubmit={async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess("")
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const email = String(formData.get("email") || "").trim()
    const phone = String(formData.get("phone") || "").trim()
    const firstName = String(formData.get("firstName") || "").trim()
    const lastName = String(formData.get("lastName") || "").trim()
    const message = String(formData.get("message") || "").trim()


    // -------------------------
    // VALIDATION RULES
    // -------------------------
    // -------------------------
// VALIDATION RULES
// -------------------------
const errors: Record<string, string> = {}

// EMAIL
if (!email) errors.email = "Email is required"
else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
  errors.email = "Enter a valid email address"

// PHONE
if (!phone) errors.phone = "Phone number is required"
else if (!/^[0-9]{10}$/.test(phone))
  errors.phone = "Enter a valid 10-digit phone number"

// FIRST NAME
if (!firstName) errors.firstName = "First name is required"
else if (!/^[A-Za-z ]+$/.test(firstName))
  errors.firstName = "First name must contain only letters"

// LAST NAME
if (!lastName) errors.lastName = "Last name is required"
else if (!/^[A-Za-z ]+$/.test(lastName))
  errors.lastName = "Last name must contain only letters"


// MESSAGE
if (!message || message.length < 10)
  errors.message = "Message must be at least 10 characters"


    // If validation fails → stop and show errors
    if (Object.keys(errors).length > 0) {
      setLoading(false)
      setError("Please fix the errors below.")

      // Show inline errors
      const errorElements = document.querySelectorAll(".input-error")
      document.querySelectorAll(".input-error").forEach(el => {
       el.textContent = ""
      })
       // reset before setting new

      Object.entries(errors).forEach(([field, msg]) => {
        const errorTag = document.getElementById(`${field}-error`)
        if (errorTag) errorTag.textContent = msg
      })

      return
    }

    // -------------------------
    // API CALL
    //--------------------------
    const payload = { email, phone, firstName, lastName, message }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const data = await res.json()
    setLoading(false)

    if (res.ok) {
      window.location.href = "/thank-you"
    }
    
  }}
>


        <div className="contact-grid">
        <div>
  <label>Email Address</label>
  <input name="email" placeholder="Enter your email address" />
  <p id="email-error" className="input-error" style={{ color: "red", fontSize: "13px" }}></p>

</div>


<div>
  <label>Phone Number</label>
  <input name="phone" placeholder="Enter your phone number" />
  <p id="phone-error" className="input-error" style={{ color: "red", fontSize: "13px" }}></p>

</div>


<div>
  <label>First Name</label>
  <input name="firstName" placeholder="Enter your first name" />
  <p id="firstName-error" className="input-error" style={{ color: "red", fontSize: "13px" }}></p>

</div>


<div>
  <label>Last Name</label>
  <input name="lastName" placeholder="Enter your last name" />
  <p id="lastName-error" className="input-error" style={{ color: "red", fontSize: "13px" }}></p>

</div>

        </div>

        <div style={{ marginTop: "16px" }}>
  <label>Message</label>
  <textarea
    name="message"
    rows={4}
    placeholder="Tell us about your project..."
  ></textarea>
  <p id="message-error" className="input-error" style={{ color: "red", fontSize: "13px" }}></p>

</div>


        <button className="contact-btn" disabled={loading}>
  {loading ? "Sending..." : "Send Message →"}
</button>
{success && <p style={{ color: "green", marginTop: 10 }}>{success}</p>}
{error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}

      </form>
    </div>
  </div>
  
 

</section>
{/* ================= WHATSAPP FLOAT BUTTON ================= */}
<a
  href={`/api/whatsapp?from=Landing Page`}
  className="whatsapp-btn"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="/images/whatsapp.png" alt="WhatsApp" />
</a>



    </>
  )
}
