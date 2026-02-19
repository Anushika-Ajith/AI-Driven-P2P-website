"use client"

export default function ProductsWhatsApp() {
  return (
    <>
     <style jsx>{`
  #whatsapp {
    padding: 120px 20px;
    background: linear-gradient(180deg, #f0f9ff, #ffffff);
  }

  .whatsapp-container {
    max-width: 1400px;
    margin: 0 auto;
  }

  .whatsapp-hero {
  max-width: 100%;
  width: 100%;
  margin-bottom: 60px;
}


  .whatsapp-heading {
    font-size: 34px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 20px;
  }

  .whatsapp-intro {
    font-size: 19px;
    line-height: 1.7;
    color: #334155;
  }

  .whatsapp-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
    margin-top: 50px;
  }

  /* ===== MATCH ORIGINAL GLOW BOX STYLE ===== */

  .wa-card {
    position: relative;
    padding: 32px;
    border-radius: 16px;
    background: #ffffff;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(2, 132, 199, 0.08);
  }

  .wa-card::before {
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

  .wa-card::after {
    content: "";
    position: absolute;
    inset: 1px;
    background: #ffffff;
    border-radius: 14px;
    z-index: 1;
  }

  .wa-card h4,
  .wa-card p {
    position: relative;
    z-index: 2;
  }

  .wa-card h4 {
    font-size: 20px;
    margin-bottom: 12px;
    font-weight: 600;
    color: #0f172a;
  }

  .wa-card p {
    font-size: 17px;
    line-height: 1.6;
    color: #475569;
  }

  /* ===== FINAL STATEMENT CARD (REMOVE GREEN) ===== */

  .whatsapp-highlight {
    margin-top: 70px;
    padding: 50px 40px;
    border-radius: 18px;
    background: linear-gradient(180deg, #f8fafc, #eef2ff);
    border: 1px solid #e2e8f0;
    text-align: center;
  }

  .whatsapp-highlight h3 {
    font-size: 26px;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 14px;
  }

  .whatsapp-highlight p {
    font-size: 18px;
    color: #475569;
  }

  @media (max-width: 1024px) {
    .whatsapp-grid {
      grid-template-columns: 1fr;
    }
  }

  @keyframes borderGlow {
    0% { background-position: 0% 50%; }
    100% { background-position: 400% 50%; }
  }

  .whatsapp-final {
  margin-top: 80px;
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: #1e3a8a; /* same blue tone used elsewhere */
}

  /* =========================================
     JUSTIFY PARAGRAPHS – WHATSAPP SECTION ONLY
  ========================================== */

  .whatsapp-intro,
  .wa-card p,
  .whatsapp-highlight p {
    text-align: justify;
    text-justify: inter-word;
  }
    /* =========================================
MOBILE – UNIFORM CARD SPACING
========================================= */

@media (max-width: 600px) {
  .whatsapp-grid {
    gap: 16px !important;   /* same spacing as all other sections */
  }
}


`}</style>


      <section id="whatsapp">
        <div className="whatsapp-container">

          <h2 className="section-title">Products</h2>

          <div className="whatsapp-hero">
            <h3 className="whatsapp-heading">
              WhatsApp AI Assistant – Multilingual Communication Made Intelligent
            </h3>

            <p className="whatsapp-intro">
              Our WhatsApp AI Assistant helps businesses interact effortlessly
              with suppliers, customers, and teams through natural conversations
              in multiple languages. Built as an intelligent communication layer,
              it understands queries, assists users instantly, and transforms
              everyday chats and calls into meaningful business insights all
              within the familiarity of WhatsApp.
              <br /><br />
              Designed for modern operations, the assistant doesn’t just respond
              to messages; it listens, analyzes, and organizes conversations into
              clear outcomes helping organizations reduce missed follow-ups,
              improve response time, and maintain complete visibility across interactions.
            </p>
          </div>

          <div className="whatsapp-grid">

            <div className="wa-card">
              <h4>Multilingual Conversations</h4>
              <p>Engage users in their preferred language through WhatsApp chat and voice.</p>
            </div>

            <div className="wa-card">
              <h4>AI Call & Chat Intelligence</h4>
              <p>Capture discussions and automatically extract key points from interactions.</p>
            </div>

            <div className="wa-card">
              <h4>Smart Conversation Summaries</h4>
              <p>Instant highlights of important decisions and updates.</p>
            </div>

            <div className="wa-card">
              <h4>Action Item Identification</h4>
              <p>Detect follow-ups, commitments, and next steps automatically.</p>
            </div>

            <div className="wa-card">
              <h4>Flexible Business Integration</h4>
              <p>Works with existing systems or as a standalone AI communication service.</p>
            </div>

          </div>

    
          <h3 className="whatsapp-final">
  Simple to use. Familiar like WhatsApp. Powerful for business communication.
</h3>
            
          </div>

    
      </section>
    </>
  )
}
