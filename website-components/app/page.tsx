"use client"

import { useEffect, useState } from "react"
import "./landing.css"
import ProductsWhatsApp from "./products-whatsapp"
import ProductsDocumentIntelligence from "./products-document-intelligence"

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
  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest(".dropdown")) {
        setProductOpen(false)
      }
    }
  
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])
  
  
  

  return (
    <>
      



      {/* ================= NAV ================= */}
      <header>
        <div className="nav">
          <div className="logo">ODIN Technologies</div>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <div className="dropdown">
  <button
    className="dropdown-btn"
    onClick={() => setProductOpen(prev => !prev)}
  >
    Products
  </button>

  <div className={`dropdown-menu ${productOpen ? "show" : ""}`}>

      <a href="#product" onClick={() => { setProductOpen(false); setMenuOpen(false) }}>P2P</a>
      <a href="#whatsapp" onClick={() => { setProductOpen(false); setMenuOpen(false) }}>WhatsApp</a>
      <a href="#document-management" onClick={() => { setProductOpen(false); setMenuOpen(false) }}>Document Management</a>
    </div>
  
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

    <h2 className="section-title">ProductS</h2>
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
<ProductsWhatsApp />

<ProductsDocumentIntelligence />


{/* ================= MANAGED SERVICES SECTION ================= */}
<section id="managed-services" className="product-section">
  <div className="product-container">

    <h2 className="section-title">Managed Services</h2>
    <h3 className="product-heading">
    Confidential and Controlled Vendor Management Services, Managed by Experts
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
        Secure seal opening, Effective dates, renewals, expiries, and compliance are continuously monitored 
        to keep rate contracts accurate and up to date.
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
      ODIN Technologies can help your team achieve extraordinary results.
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
  {loading ? (
    "Sending..."
  ) : (
    <>
      Send Message
      <span className="btn-arrow">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M19 12L13 6M19 12L13 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </>
  )}
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
