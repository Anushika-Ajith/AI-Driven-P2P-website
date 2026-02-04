export default function NotFound() {
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
        <div className="nf-card glow-inner">
          <h1 className="nf-code">404</h1>
  
          <p className="nf-text">
            The page you are looking for does not exist.
          </p>
  
          <a href="/" className="nf-btn">
            Go Back Home
          </a>
        </div>
  
        <style>{`
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
        `}</style>
      </div>
    );
  }
  