"use client"

import { useState } from "react"

export default function PrivacyPolicy() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)

  return (
    <>
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
          background: #f0f9ff !important;
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
          z-index: 9999;
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

        .hamburger.active span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

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

        @media (min-width: 1025px) {
          .nav-links {
            display: flex;
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

        /* ================= PRIVACY POLICY PAGE ================= */
        .privacy-section {
          background: linear-gradient(180deg, #f0f9ff, #ffffff);
          padding: 100px 20px;
          min-height: calc(100vh - 90px);
        }

        .privacy-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .privacy-header {
          margin-bottom: 50px;
        }

        .privacy-title {
          font-size: 42px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .privacy-date {
          font-size: 16px;
          color: #64748b;
          margin-bottom: 40px;
        }

        .privacy-content {
          background: white;
          border-radius: 16px;
          padding: 50px 40px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          line-height: 1.8;
        }

        .privacy-content h2 {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          margin-top: 40px;
          margin-bottom: 16px;
        }

        .privacy-content h2:first-child {
          margin-top: 0;
        }

        .privacy-content p {
          font-size: 16px;
          color: #475569;
          margin-bottom: 20px;
        }

        .privacy-content ul {
          margin-left: 24px;
          margin-bottom: 20px;
        }

        .privacy-content li {
          font-size: 16px;
          color: #475569;
          margin-bottom: 12px;
          line-height: 1.7;
        }

        .privacy-content strong {
          color: #0f172a;
          font-weight: 600;
        }

        .privacy-content a {
          color: var(--secondary);
          text-decoration: none;
        }

        .privacy-content a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .privacy-title {
            font-size: 32px;
          }

          .privacy-content {
            padding: 30px 24px;
          }

          .privacy-content h2 {
            font-size: 24px;
          }

          .privacy-section {
            padding: 60px 20px;
          }
        }

        /* ================= WHATSAPP BUTTON ================= */
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

        @media (max-width: 1024px) {
          .whatsapp-btn {
            position: fixed;
            bottom: 22px;
            right: 22px;
            z-index: 9999;
          }

          .whatsapp-btn img {
            content: url("/images/wtsp-icon.png") !important;
            width: 48px !important;
            height: 48px !important;
            object-fit: contain !important;
            border-radius: 50%;
            background: none !important;
            padding: 0 !important;
            box-shadow: none !important;
            transition: transform 0.2s ease;
          }

          .whatsapp-btn img:hover {
            transform: scale(1.08);
          }
        }
      `}</style>

      {/* ================= NAV ================= */}
      <header>
        <div className="nav">
          <a href="/" className="logo">ODIN Technologies</a>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="/#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="/#features" onClick={() => setMenuOpen(false)}>Features</a>
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
                  <a href="/#product" onClick={() => {setProductOpen(false); setMenuOpen(false)}}>P2P</a>
                  <a href="/#whatsapp" onClick={() => {setProductOpen(false); setMenuOpen(false)}}>WhatsApp</a>
                  <a href="/#document-management" onClick={() => {setProductOpen(false); setMenuOpen(false)}}>Document Management</a>
                </div>
              )}
            </div>
            <a href="/#managed-services" onClick={() => setMenuOpen(false)}>Managed Services</a>
            <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>
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

      {/* ================= PRIVACY POLICY CONTENT ================= */}
      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-header">
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-date">Last Updated: February 12th</p>
          </div>

          <div className="privacy-content">
            <h2>1. Introduction</h2>
            <p>
              Odin technologies ("we", "our", or "us") operates a WhatsApp-based communication service that provides voice transcription, translation, and automation features.
            </p>
            <p>
              We respect your privacy and are committed to protecting your personal data.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              When you interact with us via WhatsApp, we may collect:
            </p>
            <ul>
              <li>Phone number</li>
              <li>Messages you send</li>
              <li>Voice notes you submit</li>
              <li>Metadata such as timestamps</li>
            </ul>
            <p>
              We do not collect any information beyond what you voluntarily send to our WhatsApp number.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information solely to:
            </p>
            <ul>
              <li>Transcribe voice messages into text</li>
              <li>Translate messages between languages</li>
              <li>Provide automated responses</li>
              <li>Improve service functionality</li>
            </ul>

            <h2>4. Third-Party Services</h2>
            <p>
              To provide our services, we may use trusted third-party providers, including:
            </p>
            <ul>
              <li><strong>WhatsApp (Meta Platforms, Inc.)</strong> for message delivery</li>
              <li><strong>AI service providers</strong> for speech-to-text and translation processing</li>
            </ul>
            <p>
              These providers process data only as necessary to deliver the service.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We retain user messages and voice data only for as long as necessary to:
            </p>
            <ul>
              <li>Deliver requested services</li>
              <li>Troubleshoot issues</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal data.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your data from unauthorized access, misuse, or disclosure.
            </p>

            <h2>7. Your Rights</h2>
            <p>
              You may request:
            </p>
            <ul>
              <li>Access to your data</li>
              <li>Deletion of your data</li>
              <li>Information about how your data is processed</li>
            </ul>
            <p>
              To make a request, contact us using the details below.
            </p>

            <h2>8. Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact:
            </p>
            <p>
              <strong>Business Name:</strong> Odin Technologies<br />
              <strong>Email:</strong> <a href="mailto:odindevteam@gmail.com">odindevteam@gmail.com</a>
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any updates will be posted on this page.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHATSAPP FLOAT BUTTON ================= */}
      <a
        href={`/api/whatsapp?from=Privacy Policy Page`}
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/whatsapp.png" alt="WhatsApp" />
      </a>
    </>
  )
}

