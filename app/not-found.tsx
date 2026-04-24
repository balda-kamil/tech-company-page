import Link from "next/link";

export default function NotFound() {
  return (
    <>
      {/* Corner bracket marks — echo the logo geometry */}
      <div style={{ position: "fixed", top: "32px", left: "32px", width: "32px", height: "32px", borderTop: "2px solid rgba(255,255,255,0.08)", borderLeft: "2px solid rgba(255,255,255,0.08)" }} />
      <div style={{ position: "fixed", top: "32px", right: "32px", width: "32px", height: "32px", borderTop: "2px solid rgba(255,255,255,0.08)", borderRight: "2px solid rgba(255,255,255,0.08)" }} />
      <div style={{ position: "fixed", bottom: "32px", left: "32px", width: "32px", height: "32px", borderBottom: "2px solid rgba(255,255,255,0.08)", borderLeft: "2px solid rgba(255,255,255,0.08)" }} />
      <div style={{ position: "fixed", bottom: "32px", right: "32px", width: "32px", height: "32px", borderBottom: "2px solid rgba(255,255,255,0.08)", borderRight: "2px solid rgba(255,255,255,0.08)" }} />

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px 24px",
          position: "relative",
          overflow: "hidden",
          background: "var(--bg)",
        }}
      >
        {/* Ghost logo background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt=""
          aria-hidden
          style={{
            position: "absolute",
            width: "clamp(340px,52vw,680px)",
            opacity: 0.04,
            pointerEvents: "none",
            userSelect: "none",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
          {/* Visible logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="SinsiTech"
            style={{ width: "80px", height: "auto", marginBottom: "40px" }}
          />

          {/* 404 ghost number */}
          <div
            style={{
              fontFamily: "var(--font-mono),monospace",
              fontSize: "clamp(96px,16vw,180px)",
              fontWeight: 300,
              letterSpacing: "-0.06em",
              lineHeight: 0.9,
              color: "rgba(255,255,255,0.06)",
              marginBottom: 0,
            }}
          >
            404
          </div>

          {/* Label */}
          <div
            style={{
              fontFamily: "var(--font-mono),monospace",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", opacity: 0.5 }} />
            Poza polem roboczym
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", opacity: 0.5 }} />
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: "clamp(28px,4vw,48px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Strona wyszła<br />poza <em style={{ fontStyle: "normal", color: "var(--gold)" }}>tolerancję.</em>
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: "16px",
              color: "var(--text-dim)",
              maxWidth: "440px",
              lineHeight: 1.7,
              marginBottom: "48px",
            }}
          >
            Szukanej strony nie ma w naszym układzie współrzędnych. Sprawdź adres URL lub wróć do strony głównej.
          </p>

          {/* Primary actions */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "64px" }}>
            <Link
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "var(--gold)", color: "#111113", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", padding: "16px 32px", borderRadius: "2px", textDecoration: "none", transition: "opacity 0.2s" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L2 8l6 6M2 8h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Strona główna
            </Link>
            <Link
              href="/kontakt"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "var(--text)", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", fontWeight: 500, letterSpacing: "0.04em", padding: "16px 32px", borderRadius: "2px", border: "1px solid var(--border-light)", textDecoration: "none", transition: "border-color 0.2s" }}
            >
              Wyceń projekt →
            </Link>
          </div>

          {/* Quick nav links */}
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              ["/cnc", "Frezowanie CNC"],
              ["/laser", "Laser CO₂"],
              ["/materialy", "Materiały"],
              ["/kontakt", "Kontakt"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "var(--font-mono),monospace",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "var(--gold)", opacity: 0.5 }}>→</span>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Status bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "12px 40px",
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "var(--font-mono),monospace",
          fontSize: "10px",
          letterSpacing: "0.1em",
          color: "var(--text-muted)",
          zIndex: 10,
        }}
      >
        <span>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold)", display: "inline-block", marginRight: "8px" }} />
          ERROR_404 // STRONA NIE ZNALEZIONA
        </span>
        <span>SinsiTech · woj. pomorskie</span>
      </div>
    </>
  );
}
