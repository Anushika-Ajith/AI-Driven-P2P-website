"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body
        style={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #fef2f2, #ffffff)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div className="error-card glow-border">
          <h1 className="error-title">Something went wrong</h1>

          <p className="error-text">
            An unexpected error occurred. Please try again or return to the
            homepage.
          </p>

          <button className="error-btn" onClick={() => reset()}>
            Try Again
          </button><br></br>

          <a href="/" className="error-home">
            Go to Home →
          </a>
        </div>

        <style>{`
          /* Glow container */
          .glow-border {
            position: relative;
            padding: 42px 52px;
            border-radius: 18px;
            background: white;
            text-align: center;
            max-width: 520px;
            width: 100%;
            box-shadow: 0 8px 25px rgba(0,0,0,0.06);
          }

          /* Animated glowing border */
          .glow-border::before {
            content: "";
            position: absolute;
            inset: -3px;
            border-radius: 20px;
            background: linear-gradient(
              90deg,
              transparent,
              #f87171,
              #dc2626,
              #fecaca,
              transparent
            );
            background-size: 400% 400%;
            animation: glowMove 6s linear infinite;
            z-index: -1;
          }

          .glow-border::after {
            content: "";
            position: absolute;
            inset: 1px;
            background: white;
            border-radius: 16px;
            z-index: -1;
          }

          @keyframes glowMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 200% 50%; }
            100% { background-position: 400% 50%; }
          }

          .error-title {
            font-size: 34px;
            font-weight: 700;
            color: #b91c1c;
            margin-bottom: 10px;
          }

          .error-text {
            font-size: 18px;
            color: #475569;
            margin-bottom: 26px;
          }

          .error-btn {
            background: #2563eb;
            color: white;
            padding: 12px 26px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            transition: 0.2s ease;
            margin-bottom: 14px;
          }

          .error-btn:hover {
            transform: scale(1.05);
            background: #1d4ed8;
          }

          .error-home {
            font-size: 16px;
            font-weight: 600;
            color: #2563eb;
            text-decoration: none;
            display: inline-block;
          }

          .error-home:hover {
            text-decoration: underline;
          }
        `}</style>
      </body>
    </html>
  );
}
