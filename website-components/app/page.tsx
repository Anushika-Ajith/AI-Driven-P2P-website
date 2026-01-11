"use client"

import { useEffect, useState } from "react"

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    /* ================= PROCESS FLOW ================= */
    const steps = document.querySelectorAll(".step")
    const process = document.getElementById("process")

    let index = 0
    let interval: any

    function startWave() {
      interval = setInterval(() => {
        steps.forEach(s => s.classList.remove("glow"))
        steps[index]?.classList.add("glow")
        index = (index + 1) % steps.length
      }, 1600)
    }

    process?.addEventListener("mouseenter", () => {
      clearInterval(interval)
    })

    process?.addEventListener("mouseleave", () => {
      startWave()
    })

    startWave()

    /* ================= FEATURES FLOW ================= */
    const featureSection = document.getElementById("features")
    const cards = Array.from(
      document.querySelectorAll(".feature-card")
    )

    let fIndex = 0
    let fInterval: any

    function startFlow(startFrom = 0) {
      clearInterval(fInterval)
      fIndex = startFrom

      fInterval = setInterval(() => {
        cards.forEach(c => c.classList.remove("glow"))
        cards[fIndex]?.classList.add("glow")
        fIndex = (fIndex + 1) % cards.length
      }, 1800)
    }

    /* Hover pause like original HTML */
    featureSection?.addEventListener("mouseenter", () => {
      clearInterval(fInterval)
    })

    featureSection?.addEventListener("mouseleave", () => {
      startFlow(fIndex)
    })

    /* Click behavior (missing earlier) */
    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("glow"))
        card.classList.add("glow")
        startFlow(index + 1)
      })
    })

    /* Start animation */
    startFlow()


    return () => {
      clearInterval(interval)
      clearInterval(fInterval)
    }
  }, [])

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

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", Roboto, Arial, sans-serif;
  }

  body {
     background: radial-gradient(
    1200px 500px at 70% 20%,
    #f5f8ff 0%,
    #eef2ff 40%,
    #eef2ff 100%
  );
    color: var(--text-dark);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* ================= NAV ================= */
  header {
    background: white;
    border-bottom: 1px solid var(--border);
  }

  .nav {
    max-width: 1200px;
    margin: auto;
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-weight: 800;
    font-size: 18px;
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

  /* ================= HERO ================= */
  .hero {
    padding: 90px 20px;
  }

  .hero-container {
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 50px;
    align-items: center;
  }

  /* constrain text column (important) */
  .hero-container > div:first-child {
    max-width: 600px;
  }

  /* ✅ FIXED HERO HEADING */
  .hero h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.01em;
    color: #0f172a;
    margin-bottom: 24px;
    max-width: 560px;
  }

  /* hero paragraph */
  .hero p {
    font-size: 18px;
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
    font-size: 15px;
    font-weight: 600;
    line-height: 1.6;
    margin-bottom: 14px;
    color: #0f172a;
  }

  .hero-points li::before {
    content: "✔";
    color: #22c55e;
    font-size: 16px;
    line-height: 1;
  }

  /* ================= PROCESS CARD ================= */
  .process {
    background: #ffffff;
    border-radius: 22px;
    padding: 32px 34px;
     box-shadow: 0 24px 48px rgba(15, 23, 42, 0.08);
  }

  .process h3 {
  font-size: 14px;
  font-weight: 700;     /* ⬆ slightly stronger */
  color: var(--primary);
  margin-bottom: 14px;
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

  font-size: 13px;
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

.step:not(:last-child)::after {
  content: "";
  position: absolute;

  /* ⬇ 75% vertical alignment */
  top: 65%;

  /* start just outside pill */
  right: -18px;

  width: 18px;
  height: 2px;

  background: #c7d2fe;

  z-index: 1;
}

  .step.glow {
  border-color: #2563eb;

  box-shadow:
    0 0 0 2px rgba(37, 99, 235, 0.35);

  color: #0f172a;
}

.steps.external::after {
  opacity: 0.7;
}

  .divider {
  font-size: 13px;
  font-weight: 400;              /* lighter */
  color:rgb(73, 109, 254);                /* muted blue-gray */
  margin: 18px 0 20px;
  text-align: center;
}


  /* ================= FEATURES ================= */
  .features-section {
    background: linear-gradient(to bottom, #f8fafc, #ffffff);
    padding: 100px 20px;
    border-top: 1px solid var(--border);
  }

  .features-container {
    max-width: 1200px;
    margin: auto;
  }

  .features-header {
    max-width: 760px;
    margin-bottom: 64px;
  }

  .features-eyebrow {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--secondary);
    margin-bottom: 12px;
    display: inline-block;
  }

  .features-header h2 {
  font-size: 36px;        /* slightly larger */
  font-weight: 700;       /* NOT 800 */
  letter-spacing: -0.01em;
  margin-bottom: 18px;
  color: #0f172a;
}

  .features-header p {
  font-size: 18px;       /* ⬆ increase */
  line-height: 1.7;      /* more breathing space */
  max-width: 720px;
  color: #475569;
}


  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 36px;
  }

  .feature-card {
    background: var(--bg-white);
    border-radius: 20px;
    padding: 34px 32px;
    min-height: 180px; 
    border: 1px solid var(--border);
    transition: box-shadow 0.6s ease, transform 0.6s ease;
  }

  .feature-card.glow {
    border-color: var(--secondary);
    box-shadow: 0 0 0 6px var(--glow),
      0 18px 40px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }

  .feature-card h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--primary);
  }

  .feature-card p {
    font-size: 15px;
    color: var(--text-muted);
    line-height: 1.65;
    color: #475569;
  }

  .feature-card:hover {
    border-color: var(--secondary);
    box-shadow: 0 0 0 6px var(--glow),
      0 18px 40px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 900px) {
    .hero-container {
      grid-template-columns: 1fr;
    }

    .steps {
      flex-wrap: wrap;
    }

    .steps::after {
       z-index: 1;
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
    font-size: 16px;
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

`}</style>



      {/* ================= NAV ================= */}
      <header>
        <div className="nav">
          <div className="logo">ODIN Technologies</div>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
  <a href="#" onClick={() => setMenuOpen(false)}>Product</a>
  <a href="#" onClick={() => setMenuOpen(false)}>Features</a>
  <a href="#" onClick={() => setMenuOpen(false)}>Managed Services</a>
  <a href="#" onClick={() => setMenuOpen(false)}>About</a>
  <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>
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
              AI-Driven Procurement.
              <br />
              Complete Transparency.
            </h1>

            <p>
            We redesign the procure-to-pay process to be agile, auditable, and fully traceable. AI drives both internal and external sourcing decisions, ensuring every movement, approval, and interaction is visible and explainable.
            </p>

            <ul className="hero-points">
              <li>AI-driven internal & external sourcing</li>
              <li>100% traceable decisions and approvals</li>
              <li>Real-time leadership visibility</li>
            </ul>
          </div>

          <div className="process" id="process">
            <h3>AI-Driven Internal Sourcing</h3>
            <div className="steps">
              <div className="step">Internal Requisition</div>
              <div className="step">Expiry Optimization</div>
              <div className="step">Central Stock</div>
              <div className="step">Store Issue</div>
            </div>

            <div className="divider">
              AI evaluates → Balance moves to External
            </div>

            <h3>AI-Driven External Sourcing</h3>
            <div className="steps">
              <div className="step">RFQ</div>
              <div className="step">PO</div>
              <div className="step">GRN</div>
              <div className="step">Invoice</div>
              <div className="step">Payment</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features-section" id="features">
        <div className="features-container">
          <div className="features-header">
            <span className="features-eyebrow">Platform Capabilities</span>
            <h2>Built for Intelligent, Governed Procurement</h2>
            <p>
            The platform combines AI-driven intelligence with strong governance to support confident, auditable procurement decisions at scale.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <h3>AI-Driven Sourcing Intelligence</h3>
              <p>Evaluates internal availability and demand signals.</p>
            </div>
            <div className="feature-card">
              <h3>End-to-End Traceability</h3>
              <p>Complete audit trail across procurement lifecycle.</p>
            </div>
            <div className="feature-card">
              <h3>Decision-Centric Workflows</h3>
              <p>Workflows designed around decisions.</p>
            </div>
            <div className="feature-card">
              <h3>Leadership Visibility & Control</h3>
              <p>Real-time visibility at every stage.</p>
            </div>
            <div className="feature-card">
              <h3>Vendor Interaction Intelligence</h3>
              <p>Negotiations linked to sourcing events.</p>
            </div>
            <div className="feature-card">
              <h3>Enterprise-Ready Architecture</h3>
              <p>Secure and scalable architecture.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
