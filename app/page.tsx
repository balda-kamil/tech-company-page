"use client";

import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

/* ─── SVG Icons ─── */
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1L15 8L8 15M15 8H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Clock = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M8 5.5V8.5L9.5 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);
const ChevronSmall = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 8l12-6-5 12-2-5-5-1z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 4l6 5 6-5M2 12h12V4H2v8z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 2a1 1 0 011-1h2.5l1 3-1.5 1.5a9 9 0 004.5 4.5L12 8.5l3 1V12a1 1 0 01-1 1C6.268 13 3 9.732 3 6V2z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 9a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.3" />
    <path d="M14 14c0-3.314-2.686-6-6-6S2 10.686 2 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);
const TimeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
    <path d="M8 4.5V8.5L10 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

/* ─── Hover helpers ─── */
const hoverDim = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = "var(--text)"; };
const hoverDimOut = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = "var(--text-dim)"; };

/* ─── SectionLabel ─── */
function SectionLabel({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "var(--gold)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
      <span style={{ color: "var(--text-muted)" }}>{num}</span>
      {children}
    </div>
  );
}


/* ─── Hero ─── */
function Hero() {
  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 60px 80px", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", fontSize: "clamp(180px,22vw,340px)", fontWeight: 700, color: "rgba(255,255,255,0.02)", letterSpacing: "-0.04em", lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" }}>CNC</div>
      <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "28px", display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{ display: "block", width: "40px", height: "1px", background: "var(--gold)" }} />
        Tczew · Polska · Od 2020
      </div>
      <h1 className="reveal" style={{ fontSize: "clamp(52px,6.5vw,104px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.95, maxWidth: "900px", marginBottom: "32px" }}>
        Precyzyjna<br />obróbka<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>tworzyw.</em>
      </h1>
      <p className="reveal reveal-delay-1" style={{ fontSize: "clamp(16px,1.6vw,20px)", color: "var(--text-dim)", maxWidth: "520px", lineHeight: 1.7, marginBottom: "52px", fontWeight: 400 }}>
        Frezowanie CNC, cięcie i grawerowanie laserem CO₂, prototypy i serie produkcyjne. Wysyłasz projekt — my dostarczamy gotowy element.
      </p>
      <div className="reveal reveal-delay-2" style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
        <a href="#wycena" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "var(--gold)", color: "#09090e", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", padding: "16px 32px", borderRadius: "2px", textDecoration: "none", transition: "opacity 0.2s,transform 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}>
          <ArrowRight />Wyceń projekt
        </a>
        <a href="#uslugi" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "var(--text)", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", fontWeight: 500, letterSpacing: "0.04em", padding: "16px 32px", borderRadius: "2px", border: "1px solid var(--border-light)", textDecoration: "none", transition: "border-color 0.2s,background 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.background = "transparent"; }}>
          <Clock />Zobacz usługi
        </a>
      </div>
      <div style={{ position: "absolute", bottom: "40px", left: "60px", display: "flex", alignItems: "center", gap: "12px", fontFamily: "var(--font-mono),monospace", fontSize: "11px", letterSpacing: "0.12em", color: "var(--text-muted)", textTransform: "uppercase" }}>
        <div className="hero-scroll-line" style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom,var(--text-muted),transparent)" }} />
        Przewiń
      </div>
    </section>
  );
}

/* ─── StatsBar ─── */
function StatsBar() {
  const stats = [
    { num: "±0.1", unit: "mm", label: "Dokładność obróbki CNC" },
    { num: "48h", unit: "", label: "Czas odpowiedzi na wycenę" },
    { num: "15+", unit: "", label: "Rodzajów tworzyw w ofercie" },
    { num: "A→Z", unit: "", label: "Kompleksowa realizacja projektu" },
  ];
  return (
    <div style={{ position: "relative", zIndex: 1, borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg2)", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
      {stats.map((s, i) => (
        <div key={i} className={`reveal${i > 0 ? ` reveal-delay-${i}` : ""}`} style={{ padding: "36px 48px", borderRight: i < 3 ? "1px solid var(--border)" : "none" }}>
          <div style={{ fontSize: "clamp(36px,3.5vw,52px)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--gold)", lineHeight: 1, marginBottom: "8px" }}>
            {s.num}{s.unit && <span style={{ fontSize: "0.5em" }}>{s.unit}</span>}
          </div>
          <div style={{ fontSize: "13px", color: "var(--text-dim)", fontWeight: 400, lineHeight: 1.4 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ─── Services ─── */
const serviceData = [
  {
    num: "01 / 04", title: "Frezowanie CNC",
    desc: "Precyzyjna obróbka 2D i 3D tworzyw technicznych. Tolerancje do ±0,1 mm. Prototypy, krótkie i duże serie produkcyjne.",
    tags: ["PMMA","PC","POM","PA6","PET"],
    icon: <svg viewBox="0 0 48 48" fill="none" width="48" height="48"><rect x="4" y="16" width="40" height="20" rx="1" stroke="var(--gold)" strokeWidth="1.5"/><path d="M20 16V12a4 4 0 014-4v0a4 4 0 014 4v4" stroke="var(--gold)" strokeWidth="1.5"/><circle cx="24" cy="26" r="4" stroke="var(--gold)" strokeWidth="1.5"/><path d="M24 26v8" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 20h4M36 20h4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    num: "02 / 04", title: "Laser CO₂",
    desc: "Cięcie i grawerowanie laserowe z wysoką precyzją. Idealne do skomplikowanych konturów, napisów i dekoracji na tworzywach i dibondzie.",
    tags: ["Cięcie","Grawerowanie","Dibond","PVC"],
    icon: <svg viewBox="0 0 48 48" fill="none" width="48" height="48"><path d="M24 4L24 12" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round"/><path d="M24 12L8 40h32L24 12z" stroke="var(--blue)" strokeWidth="1.5" strokeLinejoin="round"/><path d="M16 40h16" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round"/><circle cx="24" cy="20" r="2" fill="var(--blue)"/><path d="M24 22l-4 12h8L24 22z" fill="var(--blue)" opacity="0.15"/></svg>,
  },
  {
    num: "03 / 04", title: "Tworzywa sztuczne",
    desc: "Szeroki asortyment arkuszy i prętów technicznych. Dobór materiału do wymagań mechanicznych, chemicznych i temperaturowych.",
    tags: ["Plexi","Poliwęglan","PE","HIPS"],
    icon: <svg viewBox="0 0 48 48" fill="none" width="48" height="48"><rect x="6" y="10" width="36" height="28" rx="1" stroke="var(--gold)" strokeWidth="1.5"/><path d="M6 18h36M6 26h36" stroke="var(--gold)" strokeWidth="1.5"/><path d="M18 10v28M30 10v28" stroke="var(--gold)" strokeWidth="1.5"/></svg>,
  },
  {
    num: "04 / 04", title: "Prototypy i serie",
    desc: "Od pojedynczego detalu po krótką serię produkcyjną. Kompleksowa realizacja od analizy projektu po dostawę gotowego elementu.",
    tags: ["Prototypy","Serie","Doradztwo","A→Z"],
    icon: <svg viewBox="0 0 48 48" fill="none" width="48" height="48"><path d="M24 6L42 18v12L24 42 6 30V18L24 6z" stroke="var(--gold)" strokeWidth="1.5" strokeLinejoin="round"/><path d="M24 6v36M6 18l18 12 18-12" stroke="var(--gold)" strokeWidth="1.5"/></svg>,
  },
];

function ServiceCard({ s, delay }: { s: typeof serviceData[0]; delay: string }) {
  return (
    <a href="#wycena" className={`reveal ${delay}`}
      style={{ background: "var(--bg2)", padding: "52px 48px", position: "relative", overflow: "hidden", cursor: "pointer", textDecoration: "none", display: "block", color: "var(--text)", transition: "background 0.3s" }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "var(--bg3)";
        (e.currentTarget.querySelector(".svc-bar") as HTMLElement).style.height = "100%";
        const arr = e.currentTarget.querySelector(".svc-arrow") as HTMLElement;
        arr.style.background = "var(--gold)"; arr.style.borderColor = "var(--gold)"; arr.style.color = "#09090e";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "var(--bg2)";
        (e.currentTarget.querySelector(".svc-bar") as HTMLElement).style.height = "0";
        const arr = e.currentTarget.querySelector(".svc-arrow") as HTMLElement;
        arr.style.background = "transparent"; arr.style.borderColor = "var(--border-light)"; arr.style.color = "var(--text-dim)";
      }}>
      <div className="svc-bar" style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "0", background: "var(--gold)", transition: "height 0.4s ease" }} />
      <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "11px", letterSpacing: "0.12em", color: "var(--text-muted)", marginBottom: "40px" }}>{s.num}</div>
      <div style={{ marginBottom: "24px" }}>{s.icon}</div>
      <h3 style={{ fontSize: "26px", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "16px", lineHeight: 1.1 }}>{s.title}</h3>
      <p style={{ fontSize: "14px", color: "var(--text-dim)", lineHeight: 1.7, marginBottom: "32px" }}>{s.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {s.tags.map(t => <span key={t} style={{ fontFamily: "var(--font-mono),monospace", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 10px", border: "1px solid var(--border-light)", color: "var(--text-dim)", borderRadius: "1px" }}>{t}</span>)}
      </div>
      <div className="svc-arrow" style={{ position: "absolute", bottom: "48px", right: "48px", width: "36px", height: "36px", border: "1px solid var(--border-light)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", color: "var(--text-dim)", transition: "all 0.3s", background: "transparent" }}>
        <ChevronSmall />
      </div>
    </a>
  );
}

function Services() {
  const delays = ["", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];
  return (
    <section id="uslugi" style={{ background: "var(--bg)", padding: "120px 60px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", marginBottom: "72px", alignItems: "end" }}>
        <div>
          <SectionLabel num="01">Usługi</SectionLabel>
          <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            Technologie,<br />które <em style={{ fontStyle: "normal", color: "var(--gold)" }}>działają.</em>
          </h2>
        </div>
        <p className="reveal reveal-delay-1" style={{ fontSize: "17px", color: "var(--text-dim)", maxWidth: "520px", lineHeight: 1.7, fontWeight: 400 }}>
          Oferujemy precyzyjną obróbkę tworzyw sztucznych w kilku technologiach. Dobieramy metodę do projektu — nie projekt do metody.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", background: "var(--border)", border: "1px solid var(--border)" }}>
        {serviceData.map((s, i) => <ServiceCard key={i} s={s} delay={delays[i]} />)}
      </div>
    </section>
  );
}

/* ─── WhyUs ─── */
function WhyUs() {
  const reasons = [
    { title: "Doświadczenie w obróbce tworzyw", desc: "Specjalizujemy się wyłącznie w tworzywach technicznych. Znamy ich właściwości, ograniczenia i możliwości — dobierzemy optymalne rozwiązanie." },
    { title: "Jeden kontakt, kompleksowa realizacja", desc: "Wysyłasz wymagania, my prowadzimy projekt od A do Z: analiza, zmiany projektowe, koordynacja, dostawa gotowego rozwiązania." },
    { title: "Szybka analiza dokumentacji", desc: "Wyślij plik DWG/DXF/STEP/PDF — wracamy z konkretną wyceną i terminem w ciągu 24–48 godzin." },
    { title: "Brak minimalnej ilości zamówienia", desc: "Realizujemy zarówno prototypy i pojedyncze sztuki, jak i serie produkcyjne. Indywidualne podejście do każdego projektu." },
  ];
  const specs = [{ val: "±0.1mm", name: "Tolerancja CNC" },{ val: "CO₂", name: "Technologia lasera" },{ val: "15+", name: "Materiałów" },{ val: "24h", name: "Min. czas realizacji" }];
  const bars = [
    { label: "Precyzja obróbki", right: "Wysoka", w: "92%", gradient: "linear-gradient(90deg,var(--blue),var(--gold))", rightColor: "var(--gold)" },
    { label: "Zakres materiałów", right: "Szeroki", w: "88%", gradient: "linear-gradient(90deg,var(--blue),var(--gold))", rightColor: "var(--gold)" },
    { label: "Czas wyceny", right: "24–48h", w: "95%", gradient: "linear-gradient(90deg,var(--blue),var(--blue-dim))", rightColor: "var(--blue)" },
  ];
  return (
    <section id="dlaczego" style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "100px", alignItems: "start" }}>
        <div>
          <SectionLabel num="02">Dlaczego my</SectionLabel>
          <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            Jeden kontakt.<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>Pełna realizacja.</em>
          </h2>
          <div style={{ marginTop: "48px" }}>
            {reasons.map((r, i) => (
              <div key={i} className={`reveal${i > 0 ? ` reveal-delay-${i}` : ""}`} style={{ padding: "36px 0", borderBottom: "1px solid var(--border)", borderTop: i === 0 ? "1px solid var(--border)" : undefined, display: "grid", gridTemplateColumns: "40px 1fr", gap: "24px", alignItems: "start" }}>
                <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "11px", color: "var(--gold)", paddingTop: "4px" }}>0{i+1}</div>
                <div>
                  <h4 style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "10px" }}>{r.title}</h4>
                  <p style={{ fontSize: "14px", color: "var(--text-dim)", lineHeight: 1.7 }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal reveal-delay-2" style={{ position: "sticky", top: "100px", background: "var(--bg3)", border: "1px solid var(--border)", padding: "48px", borderRadius: "2px" }}>
          <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "10px", letterSpacing: "0.15em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "32px", paddingBottom: "16px", borderBottom: "1px solid var(--border)" }}>{"// parametry techniczne"}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "36px" }}>
            {specs.map(s => (
              <div key={s.name} style={{ background: "var(--bg2)", padding: "20px", border: "1px solid var(--border)" }}>
                <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "22px", fontWeight: 500, color: "var(--blue)", letterSpacing: "-0.02em", marginBottom: "4px" }}>{s.val}</div>
                <div style={{ fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.name}</div>
              </div>
            ))}
          </div>
          {bars.map((b, i) => (
            <div key={i} style={{ marginTop: i > 0 ? "16px" : undefined }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono),monospace", fontSize: "11px", color: "var(--text-dim)", marginBottom: "8px" }}>
                <span>{b.label}</span><span style={{ color: b.rightColor }}>{b.right}</span>
              </div>
              <div style={{ height: "3px", background: "var(--bg)", borderRadius: "2px", overflow: "hidden" }}>
                <div className="tolerance-fill" style={{ height: "100%", background: b.gradient, borderRadius: "2px", "--w": b.w } as React.CSSProperties} />
              </div>
            </div>
          ))}
          <div style={{ marginTop: "32px", paddingTop: "28px", borderTop: "1px solid var(--border)" }}>
            <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "11px", color: "var(--text-muted)", marginBottom: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Akceptowane formaty</div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["DWG","DXF","STEP","PDF","AI","CDR","JPG"].map(f => <span key={f} style={{ fontFamily: "var(--font-mono),monospace", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 10px", border: "1px solid var(--border-light)", color: "var(--text-dim)", borderRadius: "1px" }}>{f}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Process ─── */
function Process() {
  const steps = [
    { title: "Wyślij projekt", desc: "Prześlij plik DWG/DXF/STEP/PDF lub opisz swój projekt słowami. Dopasujemy format do technologii.", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10h14M3 10l4-4M3 10l4 4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { title: "Analiza i wycena", desc: "Analizujemy projekt, dobieramy technologię i materiał. W 24–48h wysyłamy konkretną wycenę i termin.", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="1" stroke="var(--gold)" strokeWidth="1.5"/><path d="M7 10l2 2 4-4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { title: "Realizacja", desc: "Po akceptacji przystępujemy do produkcji. Informujemy o statusie i ewentualnych zmianach projektowych.", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="var(--gold)" strokeWidth="1.5"/><path d="M10 6v4l3 3" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round"/></svg> },
    { title: "Dostawa", desc: "Gotowy element trafia do Ciebie. Obsługujemy cały kraj. Możliwy odbiór osobisty w Tczewie.", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 13l3-3 3 3 8-8" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  ];
  return (
    <section id="proces" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
      <div style={{ maxWidth: "600px" }}>
        <SectionLabel num="03">Jak działamy</SectionLabel>
        <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
          Prosty proces,<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>pewny wynik.</em>
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "var(--border)", border: "1px solid var(--border)", marginTop: "72px" }}>
        {steps.map((step, i) => (
          <div key={i} className={`reveal${i > 0 ? ` reveal-delay-${i}` : ""}`} style={{ background: "var(--bg2)", padding: "48px 36px", position: "relative" }}>
            <div aria-hidden style={{ fontFamily: "var(--font-mono),monospace", fontSize: "64px", fontWeight: 300, color: "rgba(255,255,255,0.04)", lineHeight: 1, position: "absolute", top: "20px", right: "24px", letterSpacing: "-0.04em" }}>0{i+1}</div>
            <div style={{ width: "44px", height: "44px", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "28px", borderRadius: "2px" }}>{step.icon}</div>
            <h4 style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "12px" }}>{step.title}</h4>
            <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.7 }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Materials ─── */
function Materials() {
  const mats = [
    { abbr: "PMMA", name: "Plexi / Akryl" },{ abbr: "PC", name: "Poliwęglan" },{ abbr: "POM", name: "Delrin / Acetal" },
    { abbr: "PA6", name: "Poliamid 6" },{ abbr: "PE", name: "Polietylen" },{ abbr: "PET", name: "Politereftalan etylenu" },
    { abbr: "PVC", name: "Polichlorek winylu" },{ abbr: "PETG", name: "Politereftalan + G" },{ abbr: "HIPS", name: "Polistyren udarowy" },
    { abbr: "PP", name: "Polipropylen" },{ abbr: "Dibond", name: "Płyta ACP aluminium" },{ abbr: "Guma", name: "Tworzywa elastyczne" },
  ];
  return (
    <section id="materialy" style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }}>
        <div>
          <SectionLabel num="04">Materiały</SectionLabel>
          <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            Szeroki dobór<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>tworzyw.</em>
          </h2>
          <p className="reveal reveal-delay-1" style={{ fontSize: "17px", color: "var(--text-dim)", maxWidth: "520px", lineHeight: 1.7, fontWeight: 400, marginTop: "20px" }}>
            Nie wiesz, jaki materiał wybrać? Dobierzemy go do Twoich wymagań mechanicznych, chemicznych i temperaturowych.
          </p>
          <div className="reveal reveal-delay-2" style={{ marginTop: "40px", padding: "24px", background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: "2px" }}>
            <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Brak odpowiedniego materiału?</div>
            <p style={{ fontSize: "14px", color: "var(--text-dim)", marginBottom: "16px" }}>Skontaktuj się z nami — jeśli nie mamy w ofercie, pomożemy go pozyskać lub zaproponujemy odpowiednik.</p>
            <a href="#wycena" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "var(--text)", fontFamily: "var(--font-head),sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.04em", padding: "10px 20px", borderRadius: "2px", border: "1px solid var(--border-light)", textDecoration: "none", transition: "border-color 0.2s,background 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.background = "transparent"; }}>
              Zapytaj o materiał
            </a>
          </div>
        </div>
        <div className="reveal reveal-delay-1" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" }}>
          {mats.map(m => (
            <div key={m.abbr} style={{ background: "var(--bg3)", border: "1px solid var(--border)", padding: "20px 18px", borderRadius: "2px", transition: "border-color 0.2s,background 0.2s", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold-dim)"; e.currentTarget.style.background = "rgba(255,200,80,0.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--bg3)"; }}>
              <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "16px", fontWeight: 500, color: "var(--gold)", marginBottom: "6px", letterSpacing: "0.04em" }}>{m.abbr}</div>
              <div style={{ fontSize: "11px", color: "var(--text-dim)", lineHeight: 1.5 }}>{m.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  const reviews = [
    { text: "Bardzo sprawna realizacja zamówienia, dobry kontakt, solidne wykonanie. Elementy z POM pasowały idealnie do tolerancji. Polecam i na pewno wrócę.", initials: "MP", name: "Marcin P.", role: "// Automatyka przemysłowa" },
    { text: "Zlecałam cięcie laserowe napisów z plexi. Jakość perfekcyjna, terminy dotrzymane, cena bardzo rozsądna. Kontakt bezproblemowy — polecam każdemu.", initials: "KW", name: "Kasia W.", role: "// Reklama i oznakowanie" },
    { text: "Potrzebowałem prototypu obudowy z poliwęglanu. Panowie sami zaproponowali lepsze rozwiązanie techniczne i dowieźli projekt na czas. Wzorowa współpraca.", initials: "TK", name: "Tomasz K.", role: "// Elektronika przemysłowa" },
  ];
  return (
    <section id="opinie" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
      <div style={{ maxWidth: "600px" }}>
        <SectionLabel num="05">Opinie</SectionLabel>
        <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
          Mówią o nas<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>klienci.</em>
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px", marginTop: "64px" }}>
        {reviews.map((r, i) => (
          <div key={i} className={`reveal${i > 0 ? ` reveal-delay-${i}` : ""}`} style={{ background: "var(--bg2)", border: "1px solid var(--border)", padding: "40px", borderRadius: "2px", position: "relative" }}>
            <div style={{ display: "flex", gap: "3px", marginBottom: "20px" }}>
              {Array.from({ length: 5 }).map((_, j) => <span key={j} style={{ color: "var(--gold)", fontSize: "14px" }}>★</span>)}
            </div>
            <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "48px", color: "var(--gold)", lineHeight: 1, marginBottom: "20px", opacity: 0.6 }}>&ldquo;</div>
            <blockquote style={{ fontSize: "15px", color: "var(--text)", lineHeight: 1.75, marginBottom: "32px", fontWeight: 400 }}>{r.text}</blockquote>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
              <div style={{ width: "40px", height: "40px", background: "linear-gradient(135deg,var(--gold-dim),var(--blue-dim))", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 600, color: "var(--bg)", flexShrink: 0 }}>{r.initials}</div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "-0.01em" }}>{r.name}</div>
                <div style={{ fontSize: "12px", color: "var(--text-dim)", fontFamily: "var(--font-mono),monospace" }}>{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Gallery / Realizacje ─── */
function Gallery() {
  const gridPattern = (id: string) => (
    <defs>
      <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
      </pattern>
    </defs>
  );
  const cards = [
    {
      meta: "CNC / POM-C", title: "Koło zębate napędu",
      desc: "Frezowanie CNC z pręta POM-C, tolerancja ±0,05 mm. Seria 20 szt. dla automatyki przenośnika.",
      code: "CNC-001 // POM-C",
      svg: (id: string) => (
        <svg viewBox="0 0 320 240" width="100%" style={{ opacity: 0.85 }}>
          {gridPattern(id)}<rect width="320" height="240" fill={`url(#${id})`} />
          <g transform="translate(160,120)">
            <circle r="55" fill="none" stroke="var(--gold)" strokeWidth="1" />
            <circle r="35" fill="none" stroke="var(--gold)" strokeWidth="0.7" strokeDasharray="3 3" />
            <circle r="12" fill="none" stroke="var(--gold)" strokeWidth="1.2" />
            <circle r="5" fill="var(--gold)" opacity="0.4" />
            <g stroke="var(--gold)" strokeWidth="1" fill="none">
              <rect x="-5" y="-68" width="10" height="14" rx="1" /><rect x="-5" y="54" width="10" height="14" rx="1" />
              <rect x="54" y="-5" width="14" height="10" rx="1" /><rect x="-68" y="-5" width="14" height="10" rx="1" />
              <rect x="34" y="-58" width="10" height="14" rx="1" transform="rotate(45 39 -51)" />
              <rect x="-44" y="-58" width="10" height="14" rx="1" transform="rotate(-45 -39 -51)" />
              <rect x="34" y="44" width="10" height="14" rx="1" transform="rotate(-45 39 51)" />
              <rect x="-44" y="44" width="10" height="14" rx="1" transform="rotate(45 -39 51)" />
            </g>
            <line x1="-85" y1="0" x2="-65" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="65" y1="0" x2="85" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="-85" y1="-3" x2="-85" y2="3" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="85" y1="-3" x2="85" y2="3" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <text x="0" y="-95" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontFamily="monospace" fontSize="8">Ø110mm</text>
          </g>
          <path d="M10 10 L25 10 M10 10 L10 25" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
          <path d="M310 10 L295 10 M310 10 L310 25" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
          <text x="10" y="230" fill="rgba(255,255,255,0.2)" fontFamily="monospace" fontSize="7">{`CNC-001 // POM-C`}</text>
        </svg>
      ),
    },
    {
      meta: "Laser CO₂ / PMMA", title: "Podświetlane litery reklamowe",
      desc: "Cięcie laserowe z plexi 3mm mlecznej. Grawer konturowy + wycinanie. Seria 8 szt. dla salonu.",
      code: "LASER-007 // PMMA-3mm",
      svg: (id: string) => (
        <svg viewBox="0 0 320 240" width="100%">
          {gridPattern(id)}<rect width="320" height="240" fill={`url(#${id})`} />
          <g transform="translate(160,120)">
            <rect x="-110" y="-42" width="220" height="84" rx="2" fill="none" stroke="var(--blue)" strokeWidth="1" />
            <text x="0" y="14" textAnchor="middle" fontFamily="monospace" fontSize="38" fontWeight="bold" fill="none" stroke="var(--blue)" strokeWidth="1.2" letterSpacing="4">SINSI</text>
            <circle cx="82" cy="-30" r="3" fill="var(--blue)" opacity="0.8" />
            <circle cx="82" cy="-30" r="7" fill="none" stroke="var(--blue)" strokeWidth="0.5" opacity="0.4" />
            {[-32,-20,-8,4,16,28,40].map(y => <line key={y} x1="-108" y1={y} x2="108" y2={y} stroke="rgba(100,180,255,0.12)" strokeWidth="0.5" />)}
          </g>
          <text x="10" y="230" fill="rgba(255,255,255,0.2)" fontFamily="monospace" fontSize="7">LASER-007 // PMMA-3mm</text>
        </svg>
      ),
    },
    {
      meta: "CNC / Poliwęglan 6mm", title: "Panel obudowy elektronicznej",
      desc: "Frezowanie CNC z PC 6mm z wycinaniem otworów montażowych. Prototyp + seria 50 szt.",
      code: "CNC-014 // PC-6mm",
      svg: (id: string) => (
        <svg viewBox="0 0 320 240" width="100%">
          {gridPattern(id)}<rect width="320" height="240" fill={`url(#${id})`} />
          <g transform="translate(160,120)">
            <rect x="-90" y="-58" width="180" height="116" rx="2" fill="none" stroke="var(--gold)" strokeWidth="1.2" />
            {[[-74,-42],[74,-42],[-74,42],[74,42]].map(([cx,cy]) => <circle key={`${cx},${cy}`} cx={cx} cy={cy} r="5" fill="none" stroke="var(--gold)" strokeWidth="0.8" />)}
            <rect x="-50" y="-28" width="100" height="56" rx="1" fill="none" stroke="var(--gold)" strokeWidth="0.8" strokeDasharray="4 2" />
            <line x1="-90" y1="-72" x2="90" y2="-72" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="-90" y1="-69" x2="-90" y2="-75" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="90" y1="-69" x2="90" y2="-75" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <text x="0" y="-77" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontFamily="monospace" fontSize="8">180mm</text>
            <line x1="104" y1="-58" x2="104" y2="58" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <text x="115" y="4" fill="rgba(255,255,255,0.25)" fontFamily="monospace" fontSize="8">116mm</text>
          </g>
          <text x="10" y="230" fill="rgba(255,255,255,0.2)" fontFamily="monospace" fontSize="7">CNC-014 // PC-6mm</text>
        </svg>
      ),
    },
    {
      meta: "CNC / PA6-GF30", title: "Kołnierz z poliamidu",
      desc: "Toczenie + frezowanie CNC z PA6-GF30. Sześć otworów gwintowanych M8 na okręgu podziałowym.",
      code: "CNC-021 // PA6-GF30",
      svg: (id: string) => (
        <svg viewBox="0 0 320 240" width="100%">
          {gridPattern(id)}<rect width="320" height="240" fill={`url(#${id})`} />
          <g transform="translate(160,120)">
            <circle r="80" fill="none" stroke="var(--gold)" strokeWidth="1" />
            <circle r="60" fill="none" stroke="var(--gold)" strokeWidth="0.7" strokeDasharray="4 3" />
            <circle r="22" fill="none" stroke="var(--gold)" strokeWidth="1.2" />
            {[[0,-60],[52,-30],[52,30],[0,60],[-52,30],[-52,-30]].map(([cx,cy]) => <circle key={`${cx},${cy}`} cx={cx} cy={cy} r="7" fill="none" stroke="var(--gold)" strokeWidth="0.8" />)}
            <line x1="-85" y1="0" x2="85" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="6 3" />
            <line x1="0" y1="-85" x2="0" y2="85" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="6 3" />
            <text x="0" y="100" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontFamily="monospace" fontSize="8">PCD Ø120mm · 6×M8</text>
          </g>
          <text x="10" y="230" fill="rgba(255,255,255,0.2)" fontFamily="monospace" fontSize="7">CNC-021 // PA6-GF30</text>
        </svg>
      ),
    },
    {
      meta: "Laser CO₂ / Dibond 3mm", title: "Dekoracyjny panel Dibond",
      desc: "Cięcie i grawerowanie laserowe z dibondu. Panel dekoracyjny 600×400mm. Ozdobne wycięcia CNC.",
      code: "LASER-019 // DIBOND-3mm",
      svg: (id: string) => (
        <svg viewBox="0 0 320 240" width="100%">
          {gridPattern(id)}<rect width="320" height="240" fill={`url(#${id})`} />
          <g transform="translate(160,120)">
            <rect x="-100" y="-65" width="200" height="130" rx="2" fill="none" stroke="var(--blue)" strokeWidth="1" />
            <rect x="-85" y="-50" width="50" height="50" rx="4" fill="none" stroke="var(--blue)" strokeWidth="0.7" />
            <rect x="-85" y="8" width="50" height="42" rx="4" fill="none" stroke="var(--blue)" strokeWidth="0.7" />
            <rect x="-27" y="-50" width="114" height="100" rx="2" fill="none" stroke="var(--blue)" strokeWidth="0.7" />
            <line x1="-60" y1="-50" x2="-60" y2="50" stroke="rgba(100,180,255,0.2)" strokeWidth="0.5" />
            <line x1="-85" y1="-17" x2="-35" y2="-17" stroke="rgba(100,180,255,0.2)" strokeWidth="0.5" />
            <line x1="-27" y1="-50" x2="87" y2="50" stroke="rgba(100,180,255,0.15)" strokeWidth="0.5" />
            <line x1="87" y1="-50" x2="-27" y2="50" stroke="rgba(100,180,255,0.15)" strokeWidth="0.5" />
            <circle cx="30" cy="0" r="20" fill="none" stroke="var(--blue)" strokeWidth="0.7" opacity="0.6" />
          </g>
          <text x="10" y="230" fill="rgba(255,255,255,0.2)" fontFamily="monospace" fontSize="7">LASER-019 // DIBOND-3mm</text>
        </svg>
      ),
    },
    {
      meta: "CNC / POM-C 20mm", title: "Listwa prowadząca ślizgacza",
      desc: "Frezowanie CNC z POM-C. Sześć otworów pod łożyska ślizgowe, tolerancja H7. 10 szt.",
      code: "CNC-033 // POM-C-20mm",
      svg: (id: string) => (
        <svg viewBox="0 0 320 240" width="100%">
          {gridPattern(id)}<rect width="320" height="240" fill={`url(#${id})`} />
          <g transform="translate(160,120)">
            <rect x="-110" y="-22" width="220" height="44" rx="2" fill="none" stroke="var(--gold)" strokeWidth="1.2" />
            <rect x="-110" y="-8" width="220" height="16" fill="none" stroke="var(--gold)" strokeWidth="0.6" opacity="0.5" />
            {[-88,-56,-24,8,40,72].map(cx => <circle key={cx} cx={cx} cy={0} r="8" fill="none" stroke="var(--gold)" strokeWidth="0.8" />)}
            <rect x="92" y="-10" width="18" height="20" rx="9" fill="none" stroke="var(--gold)" strokeWidth="0.8" />
            <rect x="-110" y="-10" width="18" height="20" rx="9" fill="none" stroke="var(--gold)" strokeWidth="0.8" />
            <line x1="-110" y1="-36" x2="110" y2="-36" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <text x="0" y="-42" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontFamily="monospace" fontSize="8">220mm · 6× Ø16mm</text>
          </g>
          <text x="10" y="230" fill="rgba(255,255,255,0.2)" fontFamily="monospace" fontSize="7">CNC-033 // POM-C-20mm</text>
        </svg>
      ),
    },
  ];

  return (
    <section id="realizacje" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "end", marginBottom: "72px" }}>
        <div>
          <SectionLabel num="06">Realizacje</SectionLabel>
          <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            Projekty,<br />które <em style={{ fontStyle: "normal", color: "var(--gold)" }}>zrealizowaliśmy.</em>
          </h2>
        </div>
        <p className="reveal reveal-delay-1" style={{ fontSize: "17px", color: "var(--text-dim)", maxWidth: "520px", lineHeight: 1.7, fontWeight: 400 }}>
          Precyzyjne elementy z tworzyw technicznych — od prototypów po serie. Każdy projekt to inne wymagania, jeden standard wykonania.
        </p>
      </div>

      <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)", border: "1px solid var(--border)" }}>
        {cards.map((card, i) => (
          <div key={i} style={{ background: "var(--bg2)", overflow: "hidden", cursor: "pointer", position: "relative" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--bg3)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--bg2)")}>
            <div style={{ aspectRatio: "4/3", background: "var(--bg3)", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid var(--border)", overflow: "hidden" }}>
              {card.svg(`gp${i}`)}
            </div>
            <div style={{ padding: "28px 28px 32px" }}>
              <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.12em", marginBottom: "10px" }}>{card.meta}</div>
              <h3 style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "8px" }}>{card.title}</h3>
              <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.6 }}>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal" style={{ textAlign: "center", marginTop: "48px" }}>
        <a href="#wycena" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "var(--text)", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", fontWeight: 500, letterSpacing: "0.04em", padding: "16px 32px", borderRadius: "2px", border: "1px solid var(--border-light)", textDecoration: "none", transition: "border-color 0.2s,background 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.background = "transparent"; }}>
          Wyceń podobny projekt →
        </a>
      </div>
    </section>
  );
}

/* ─── Quote / CTA ─── */
function Quote() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector(".btn-submit") as HTMLButtonElement;
    if (!btn) return;
    btn.textContent = "✓ Wysłano! Odpiszemy w ciągu 24–48h";
    btn.style.background = "oklch(0.72 0.18 155)";
    setTimeout(() => { btn.textContent = "Wyślij zapytanie"; btn.style.background = "var(--gold)"; }, 4000);
  };
  const inputStyle: React.CSSProperties = { background: "var(--bg2)", border: "1px solid var(--border-light)", color: "var(--text)", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", padding: "12px 16px", borderRadius: "2px", outline: "none", transition: "border-color 0.2s", width: "100%" };
  const labelStyle: React.CSSProperties = { fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", fontFamily: "var(--font-mono),monospace" };
  return (
    <section id="wycena" style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "start" }}>
        <div>
          <SectionLabel num="07">Kontakt</SectionLabel>
          <h2 className="reveal" style={{ fontSize: "clamp(40px,4.5vw,68px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, marginBottom: "24px" }}>
            Wyceń<br />swój <em style={{ fontStyle: "normal", color: "var(--gold)" }}>projekt.</em>
          </h2>
          <p className="reveal reveal-delay-1" style={{ fontSize: "16px", color: "var(--text-dim)", lineHeight: 1.7, marginBottom: "40px" }}>
            Wyślij pliki lub opisz projekt — wrócimy z konkretną ceną i terminem w ciągu 24–48 godzin.
          </p>
          <div className="reveal reveal-delay-2" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { icon: <MailIcon />, content: <a href="mailto:biuro@sinsitech.pl" style={{ color: "var(--text)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={e => e.currentTarget.style.color = "var(--text)"}>biuro@sinsitech.pl</a> },
              { icon: <PhoneIcon />, content: <a href="tel:+48536095840" style={{ color: "var(--text)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={e => e.currentTarget.style.color = "var(--text)"}>+48 536 095 840</a> },
              { icon: <LocationIcon />, content: <span>ul. Obrońców Westerplatte 24B, 83-110 Tczew</span> },
              { icon: <TimeIcon />, content: <span>Pon–Pt: 9:00–17:00</span> },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "14px", color: "var(--text-dim)" }}>
                <span style={{ color: "var(--gold)", flexShrink: 0 }}>{row.icon}</span>
                {row.content}
              </div>
            ))}
          </div>
        </div>
        <div className="reveal reveal-delay-1" style={{ background: "var(--bg3)", border: "1px solid var(--border)", padding: "48px", borderRadius: "2px" }}>
          <div style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "32px", paddingBottom: "20px", borderBottom: "1px solid var(--border)" }}>Formularz wyceny</div>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              {[{ label: "Imię i nazwisko *", type: "text", ph: "Jan Kowalski", req: true },{ label: "Firma", type: "text", ph: "Nazwa firmy", req: false },{ label: "E-mail *", type: "email", ph: "jan@firma.pl", req: true },{ label: "Telefon", type: "tel", ph: "+48 000 000 000", req: false }].map(f => (
                <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={labelStyle}>{f.label}</label>
                  <input type={f.type} placeholder={f.ph} required={f.req} style={inputStyle} onFocus={e => e.currentTarget.style.borderColor = "var(--gold)"} onBlur={e => e.currentTarget.style.borderColor = "var(--border-light)"} />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
              <label style={labelStyle}>Technologia</label>
              <select style={{ ...inputStyle, appearance: "none", cursor: "pointer" }} onFocus={e => e.currentTarget.style.borderColor = "var(--gold)"} onBlur={e => e.currentTarget.style.borderColor = "var(--border-light)"}>
                <option value="">— Wybierz technologię —</option>
                <option>Frezowanie CNC</option>
                <option>Cięcie laserowe CO₂</option>
                <option>Grawerowanie laserowe</option>
                <option>Prototyp / Seria</option>
                <option>Nie wiem — proszę o doradztwo</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={labelStyle}>Opis projektu *</label>
              <textarea placeholder="Opisz projekt: materiał, wymiary, ilość, przeznaczenie... lub prześlij plik w odpowiedzi mailowej." required style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }} onFocus={e => e.currentTarget.style.borderColor = "var(--gold)"} onBlur={e => e.currentTarget.style.borderColor = "var(--border-light)"} />
            </div>
            <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "11px", color: "var(--text-muted)", marginTop: "16px", marginBottom: "24px" }}>
              {"// Odpowiedź w ciągu 24–48h · Wycena bezpłatna · Pliki: DWG/DXF/STEP/PDF"}
            </div>
            <button type="submit" className="btn-submit" style={{ width: "100%", background: "var(--gold)", color: "#09090e", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", padding: "16px", border: "none", borderRadius: "2px", cursor: "pointer", transition: "opacity 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.85"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
              <SendIcon />Wyślij zapytanie
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


/* ─── Page ─── */
export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(el => obs.observe(el));
    document.querySelectorAll<HTMLElement>("#hero .reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 100 + i * 150);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <WhyUs />
        <Process />
        <Materials />
        <Testimonials />
        <Gallery />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
