export default function ThankYou() {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #f0f9ff, #ffffff)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div className="thank-card">
          {/* Success Icon */}
          <div className="success-icon">
            <span>✔</span>
          </div>
  
          <h1 className="thank-title">Message Sent Successfully!</h1>
  
          <p className="thank-desc">
            Thank you for reaching out. Our team will get back to you shortly.
          </p>
  
          <a href="/" className="thank-btn">
            Return to Home
          </a>
        </div>
  
        {/* Glow & Animation Styles */}
        <style>{`
          /* Moving Glow Border */
          .thank-card {
            position: relative;
            background: white;
            padding: 40px 50px;
            width: 100%;
            max-width: 520px;
            border-radius: 18px;
            text-align: center;
            z-index: 2;
          }
  
          .thank-card::before {
            content: "";
            position: absolute;
            inset: -3px;
            border-radius: 20px;
            background: linear-gradient(
              90deg,
              transparent,
              #5b91ff,
              #2563eb,
              #bfdbfe,
              transparent
            );
            background-size: 400% 400%;
            animation: borderMove 6s linear infinite;
            z-index: -1;
          }
  
          .thank-card::after {
            content: "";
            position: absolute;
            inset: 1px;
            background: white;
            border-radius: 16px;
            z-index: -1;
          }
  
          @keyframes borderMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 200% 50%; }
            100% { background-position: 400% 50%; }
          }
  
          /* Success Icon */
          .success-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            background: #22c55e15;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: popIn 0.5s ease-out;
          }
  
          .success-icon span {
            font-size: 40px;
            color: #22c55e;
            font-weight: bold;
          }
  
          @keyframes popIn {
            0% { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
  
          /* Texts */
          .thank-title {
            font-size: 32px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 12px;
          }
  
          .thank-desc {
            font-size: 18px;
            color: #475569;
            line-height: 1.6;
            max-width: 500px;
            margin: 0 auto 28px;
          }
  
          /* Button */
          .thank-btn {
            background: rgb(90,131,244);
            color: white;
            padding: 12px 28px;
            text-decoration: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 700;
            display: inline-block;
            transition: transform .2s ease, background .2s ease;
          }
  
          .thank-btn:hover {
            background: #1d4ed8;
            transform: scale(1.05);
          }
        `}</style>
      </div>
    );
  }
  