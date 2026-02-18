"use client"

export default function ProductsDocumentIntelligence() {

  const cards = [
    {
      title: "Intelligent OCR & Contextual Extraction",
      text: "Capture key fields from invoices, registrations, contracts, and operational records with high accuracy."
    },
    {
      title: "Entity-Driven Data Mapping",
      text: "Automatically link documents to suppliers, departments, assets, POs, and transactions."
    },
    {
      title: "AI-Ready Structured Repository",
      text: "Convert unstructured files into searchable, queryable datasets for analytics and automation."
    },
    {
      title: "Workflow Automation Enablement",
      text: "Trigger onboarding, approvals, compliance checks, and 3-way matching directly from extracted data."
    },
    {
      title: "Secure Multi-Tenant Architecture",
      text: "Centralized storage designed for enterprise governance, scalability, and compliance."
    },
    {
      title: "Natural Language Search & Retrieval",
      text: "Locate documents instantly using business context instead of filenames."
    }
  ]

  return (
    <>
      <style jsx>{`

        #document-management {
          padding: 120px 20px;
          background: linear-gradient(180deg, #f0f9ff, #ffffff);
        }

        .doc-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .doc-hero {
          max-width: 100%;
          margin-bottom: 60px;
        }

        .doc-heading {
          font-size: 34px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .doc-subheading {
          font-size: 24px;
          font-weight: 600;
          color: #1e3a8a;
          margin-bottom: 24px;
        }

        .doc-intro {
          font-size: 19px;
          line-height: 1.7;
          color: #334155;
          margin-bottom: 20px;
        }

        /* ===== SAME GRID AS WHATSAPP ===== */

        .doc-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px;
          margin-top: 50px;
        }

        @media (max-width: 1024px) {
          .doc-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ===== EXACT SAME CARD STYLE AS WHATSAPP ===== */

        .doc-card {
          position: relative;
          padding: 32px;
          border-radius: 16px;
          background: #ffffff;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(2, 132, 199, 0.08);
        }

        .doc-card::before {
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

        .doc-card::after {
          content: "";
          position: absolute;
          inset: 1px;
          background: #ffffff;
          border-radius: 14px;
          z-index: 1;
        }

        .doc-card h4,
        .doc-card p {
          position: relative;
          z-index: 2;
        }

        .doc-card h4 {
          font-size: 20px;
          margin-bottom: 12px;
          font-weight: 600;
          color: #0f172a;
        }

        .doc-card p {
          font-size: 17px;
          line-height: 1.6;
          color: #475569;
        }
                /* =========================================
           JUSTIFY PARAGRAPHS – DOCUMENT SECTION ONLY
        ========================================== */

        .doc-intro,
        .doc-card p {
          text-align: justify;
        }

        @keyframes borderGlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }

      `}</style>

      <section id="document-management">
        <div className="doc-container">

          <h2 className="section-title">Products</h2>

          <div className="doc-hero">
            <h3 className="doc-heading">
              AI Document Intelligence Platform
            </h3>

            <div className="doc-subheading">
              From Files to Actionable Business Data
            </div>

            <p className="doc-intro">
              Transform scattered business documents into structured, intelligent assets.
              Our AI Document Intelligence Platform uses advanced OCR and contextual data extraction
              to digitize, classify, and link documents directly to your core business entities —
              enabling faster decisions, automation, and real-time insights.
            </p>

            <p className="doc-intro">
              Built as a scalable microservice, the platform integrates seamlessly with Procure-to-Pay,
              supplier management, finance workflows, and asset lifecycle processes.
            </p>
          </div>

          <div className="doc-grid">
            {cards.map((card, i) => (
              <div className="doc-card" key={i}>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
