import Link from "next/link";

const hoverDim = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.currentTarget.style.color = "var(--text)";
};
const hoverDimOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.currentTarget.style.color = "var(--text-dim)";
};

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "64px 60px 40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: "60px",
          paddingBottom: "48px",
          borderBottom: "1px solid var(--border)",
          marginBottom: "32px",
        }}
      >
        <div>
          <Link
            href="/"
            style={{
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0",
              marginBottom: "4px",
            }}
          >
            Sinsi<span style={{ color: "var(--gold)" }}>Tech</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="SinsiTech logo"
              style={{ width: "100px", maxWidth: "100px", height: "auto", marginLeft: "8px" }}
            />
          </Link>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-dim)",
              lineHeight: 1.7,
              marginTop: "16px",
              maxWidth: "280px",
            }}
          >
            Precyzyjna obróbka tworzyw sztucznych. Frezowanie CNC, laser CO₂, prototypy i serie. Tczew i cała Polska.
          </p>
        </div>

        {[
          {
            title: "Usługi",
            links: [
              { l: "Frezowanie CNC", h: "/cnc" },
              { l: "Laser CO₂", h: "/laser" },
              { l: "Tworzywa sztuczne", h: "/#uslugi" },
              { l: "Prototypy i serie", h: "/#uslugi" },
            ],
          },
          {
            title: "Materiały",
            links: [
              { l: "PMMA (Plexi)", h: "/materialy" },
              { l: "Poliwęglan PC", h: "/materialy" },
              { l: "POM, PA6, PE", h: "/materialy" },
              { l: "Dibond, PVC", h: "/materialy" },
            ],
          },
          {
            title: "Kontakt",
            links: [
              { l: "biuro@sinsitech.pl", h: "mailto:biuro@sinsitech.pl" },
              { l: "+48 536 095 840", h: "tel:+48536095840" },
              { l: "+48 570 616 613", h: "tel:+48570616613" },
              { l: "Wyceń projekt", h: "/kontakt" },
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <h5
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                fontFamily: "var(--font-mono),monospace",
                marginBottom: "20px",
              }}
            >
              {col.title}
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {col.links.map((lk) => (
                <li key={lk.l}>
                  <Link
                    href={lk.h}
                    style={{
                      fontSize: "14px",
                      color: "var(--text-dim)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={hoverDim}
                    onMouseLeave={hoverDimOut}
                  >
                    {lk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "var(--font-mono),monospace",
          fontSize: "11px",
          color: "var(--text-muted)",
          letterSpacing: "0.08em",
        }}
      >
        <span>© 2026 Sinsi Tech — Remigiusz Miąskowski, Paweł Kucharski s.c. · NIP: PL5932627119</span>
        <span>Tczew, woj. pomorskie · Obsługujemy całą Polskę</span>
      </div>
    </footer>
  );
}
