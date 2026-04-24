"use client";

import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function SectionLabel({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "var(--gold)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
      <span style={{ color: "var(--text-muted)" }}>{num}</span>
      {children}
    </div>
  );
}

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    document.querySelectorAll<HTMLElement>(".page-hero .reveal").forEach(el => {
      setTimeout(() => el.classList.add("visible"), 80);
    });
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputStyle: React.CSSProperties = {
    background: "var(--bg2)",
    border: "1px solid var(--border-light)",
    color: "var(--text)",
    fontFamily: "var(--font-head),sans-serif",
    fontSize: "14px",
    padding: "14px 16px",
    borderRadius: "2px",
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
  };
  const labelStyle: React.CSSProperties = {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--text-dim)",
    fontFamily: "var(--font-mono),monospace",
  };

  return (
    <>
      <Nav />
      <main>
        {/* Breadcrumb */}
        <div style={{ position: "relative", zIndex: 1, padding: "20px 60px", borderBottom: "1px solid var(--border)", background: "var(--bg2)", marginTop: "72px", display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-mono),monospace", fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
          <a href="/" style={{ color: "var(--text-dim)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={e => e.currentTarget.style.color = "var(--text-dim)"}>Strona główna</a>
          <span>›</span>
          <span style={{ color: "var(--gold)" }}>Kontakt i wycena</span>
        </div>

        {/* Hero */}
        <section className="page-hero" style={{ padding: "160px 60px 80px", borderBottom: "1px solid var(--border)", background: "var(--bg2)" }}>
          <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ display: "block", width: "40px", height: "1px", background: "var(--gold)" }} />
            Wycena bezpłatna · Odpowiedź 24–48h
          </div>
          <h1 className="reveal" style={{ fontSize: "clamp(48px,6vw,92px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.96, marginBottom: "28px" }}>
            Skontaktuj<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>się z nami</em>
          </h1>
          <p className="reveal reveal-delay-1" style={{ fontSize: "clamp(16px,1.6vw,20px)", color: "var(--text-dim)", maxWidth: "580px", lineHeight: 1.7 }}>
            Wyślij projekt lub opisz swoje potrzeby. Wrócimy z konkretną wyceną, terminem realizacji i ewentualnymi pytaniami technicznymi.
          </p>
        </section>

        {/* Main Content */}
        <section style={{ background: "var(--bg)", padding: "120px 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "80px", alignItems: "start" }}>
            {/* Left: Contact Info */}
            <div>
              <SectionLabel num="01">Dane kontaktowe</SectionLabel>
              <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "40px" }}>
                Gdzie<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>nas znajdziesz?</em>
              </h2>

              <div className="reveal reveal-delay-1">
                {[
                  {
                    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 5l6 5 6-5M3 13h12V5H3v8z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
                    label: "E-mail",
                    value: <a href="mailto:biuro@sinsitech.pl" style={{ color: "var(--text)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={e => e.currentTarget.style.color = "var(--text)"}>biuro@sinsitech.pl</a>,
                    note: "Preferowany sposób kontaktu — możesz od razu dołączyć pliki projektowe.",
                  },
                  {
                    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 2a1 1 0 011-1h2.5l1 3-1.5 1.5a9.5 9.5 0 005 5L12.5 9l3 1V13a1 1 0 01-1 1C6.268 14 3 10.732 3 7V2z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
                    label: "Telefon",
                    value: (
                      <div>
                        <a href="tel:+48536095840" style={{ display: "block", color: "var(--text)", textDecoration: "none", transition: "color 0.2s", marginBottom: "4px" }} onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={e => e.currentTarget.style.color = "var(--text)"}>+48 536 095 840</a>
                        <a href="tel:+48570616613" style={{ display: "block", color: "var(--text)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={e => e.currentTarget.style.color = "var(--text)"}>+48 570 616 613</a>
                      </div>
                    ),
                    note: "Pon–Pt, 9:00–17:00",
                  },
                  {
                    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 10a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.3" /><path d="M15 16c0-3.314-2.686-6-6-6S3 12.686 3 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
                    label: "Adres",
                    value: <span>ul. Obrońców Westerplatte 24B</span>,
                    note: "83-110 Tczew, woj. pomorskie\nMożliwy odbiór osobisty po wcześniejszym uzgodnieniu.",
                  },
                  {
                    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3" /><path d="M9 5v4l3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
                    label: "Godziny pracy",
                    value: <span>Poniedziałek – Piątek</span>,
                    note: "9:00–17:00\nWeekendy — kontakt możliwy mailowo.",
                  },
                  {
                    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.3" /><path d="M5 4V3M13 4V3M2 8h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
                    label: "Dane firmy",
                    value: <span style={{ fontSize: "14px" }}>Remigiusz Miąskowski, Paweł Kucharski s.c.</span>,
                    note: "NIP: PL5932627119",
                  },
                ].map((row, i) => (
                  <div key={i} style={{ display: "flex", gap: "20px", padding: "28px 0", borderBottom: "1px solid var(--border)", alignItems: "flex-start", borderTop: i === 0 ? "1px solid var(--border)" : undefined }}>
                    <div style={{ width: "40px", height: "40px", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "2px", color: "var(--gold)", marginTop: "2px" }}>
                      {row.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "8px" }}>{row.label}</div>
                      <div style={{ fontSize: "16px", fontWeight: 500, marginBottom: "4px" }}>{row.value}</div>
                      <div style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.5, whiteSpace: "pre-line" }}>{row.note}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="reveal" style={{ marginTop: "32px", background: "var(--bg3)", border: "1px solid var(--border)", height: "280px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "2px", overflow: "hidden" }}>
                <svg viewBox="0 0 600 280" width="100%" style={{ opacity: 0.6 }}>
                  <defs>
                    <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="600" height="280" fill="url(#mapgrid)" />
                  <line x1="0" y1="140" x2="600" y2="140" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                  <line x1="300" y1="0" x2="300" y2="280" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
                  <circle cx="300" cy="140" r="20" fill="var(--gold)" opacity="0.2" />
                  <circle cx="300" cy="140" r="8" fill="var(--gold)" opacity="0.8" />
                  <circle cx="300" cy="140" r="4" fill="var(--bg)" />
                  <circle cx="300" cy="140" r="32" fill="none" stroke="var(--gold)" strokeWidth="1" opacity="0.3" />
                  <text x="300" y="190" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontFamily="monospace" fontSize="11">Tczew · ul. Obrońców Westerplatte 24B</text>
                  <text x="300" y="206" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontFamily="monospace" fontSize="9">// woj. pomorskie  83-110</text>
                </svg>
              </div>
            </div>

            {/* Right: Form */}
            <div className="reveal reveal-delay-2" style={{ background: "var(--bg3)", border: "1px solid var(--border)", padding: "52px", borderRadius: "2px" }}>
              <div style={{ fontSize: "22px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "8px" }}>Formularz wyceny</div>
              <div style={{ fontSize: "14px", color: "var(--text-dim)", marginBottom: "36px", paddingBottom: "24px", borderBottom: "1px solid var(--border)" }}>
                Wypełnij formularz, a wrócimy z ceną i terminem w ciągu 24–48 godzin roboczych. Wycena jest bezpłatna i niezobowiązująca.
              </div>
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  {[
                    { label: "Imię i nazwisko *", type: "text", ph: "Jan Kowalski", req: true },
                    { label: "Firma", type: "text", ph: "Nazwa firmy", req: false },
                    { label: "E-mail *", type: "email", ph: "jan@firma.pl", req: true },
                    { label: "Telefon", type: "tel", ph: "+48 000 000 000", req: false },
                  ].map(f => (
                    <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={labelStyle}>{f.label}</label>
                      <input type={f.type} placeholder={f.ph} required={f.req} style={inputStyle}
                        onFocus={e => e.currentTarget.style.borderColor = "var(--gold)"}
                        onBlur={e => e.currentTarget.style.borderColor = "var(--border-light)"} />
                    </div>
                  ))}
                </div>
                {[
                  {
                    label: "Technologia *", type: "select", req: true,
                    options: ["— Wybierz technologię —", "Frezowanie CNC", "Cięcie laserowe CO₂", "Grawerowanie laserowe", "Frezowanie CNC + Laser CO₂", "Prototyp / Seria produkcyjna", "Nie wiem — proszę o doradztwo"],
                  },
                  {
                    label: "Materiał", type: "select", req: false,
                    options: ["— Wybierz materiał (opcjonalnie) —", "PMMA (Plexi / Akryl)", "PC (Poliwęglan)", "POM-C (Delrin)", "PA6 (Poliamid)", "PE-HD (Polietylen)", "PET / PETG", "PVC", "Dibond / ACP", "Guma / EPDM", "Inny — opiszę w wiadomości", "Nie wiem — proszę o doradztwo"],
                  },
                  {
                    label: "Ilość sztuk", type: "select", req: false,
                    options: ["— Orientacyjna ilość —", "1 szt. (prototyp)", "2–5 szt.", "6–20 szt.", "21–100 szt.", "powyżej 100 szt."],
                  },
                ].map(f => (
                  <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                    <label style={labelStyle}>{f.label}</label>
                    <select required={f.req} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                      onFocus={e => e.currentTarget.style.borderColor = "var(--gold)"}
                      onBlur={e => e.currentTarget.style.borderColor = "var(--border-light)"}>
                      {f.options.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                ))}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                  <label style={labelStyle}>Opis projektu *</label>
                  <textarea
                    placeholder={`Opisz projekt: wymiary, kształt, tolerancje, przeznaczenie elementu, termin realizacji...\n\nMożesz też wysłać pliki DWG/DXF/STEP/PDF na biuro@sinsitech.pl`}
                    required
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    onFocus={e => e.currentTarget.style.borderColor = "var(--gold)"}
                    onBlur={e => e.currentTarget.style.borderColor = "var(--border-light)"}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                  <label style={labelStyle}>Termin realizacji</label>
                  <select style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                    onFocus={e => e.currentTarget.style.borderColor = "var(--gold)"}
                    onBlur={e => e.currentTarget.style.borderColor = "var(--border-light)"}>
                    {["— Kiedy potrzebujesz? —", "Jak najszybciej (pilne)", "W ciągu tygodnia", "W ciągu 2 tygodni", "Do miesiąca", "Termin elastyczny"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "11px", color: "var(--text-muted)", margin: "16px 0 24px" }}>
                  {"// Odpowiedź w ciągu 24–48h roboczych · Wycena bezpłatna · Pliki: DWG / DXF / STEP / PDF / AI / CDR"}
                </div>
                <button type="submit"
                  style={{ width: "100%", background: submitted ? "oklch(0.72 0.18 155)" : "var(--gold)", color: "#111113", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", padding: "18px", border: "none", borderRadius: "2px", cursor: "pointer", transition: "opacity 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                  {submitted ? (
                    "✓ Wysłano! Odpiszemy w ciągu 24–48h roboczych"
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l12-6-5 12-2-5-5-1z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      Wyślij zapytanie o wycenę
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Process Reminder */}
        <section style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
          <SectionLabel num="02">Co dalej</SectionLabel>
          <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "48px" }}>
            Co się dzieje<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>po wysłaniu?</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "var(--border)", border: "1px solid var(--border)" }}>
            {[
              { n: "01", title: "Analizujemy dokumentację", desc: "Sprawdzamy pliki, wymiary i wymagania. Jeśli czegoś brakuje — pytamy mailowo lub telefonicznie." },
              { n: "02", title: "Wysyłamy wycenę", desc: "Wrócimy z konkretną ceną, terminem realizacji i ewentualnymi uwagami. Maksymalnie 48h roboczych." },
              { n: "03", title: "Potwierdzasz zamówienie", desc: "Po akceptacji wyceny potwierdzamy zlecenie, ustalamy szczegóły dostawy i rozliczenia." },
              { n: "04", title: "Dostarczamy gotowe elementy", desc: "Wysyłamy kurierem w całej Polsce lub zapraszamy do odbioru osobistego w Tczewie." },
            ].map((step, i) => (
              <div key={i} className={`reveal${i > 0 ? ` reveal-delay-${i}` : ""}`} style={{ background: "var(--bg3)", padding: "40px 32px" }}>
                <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "40px", fontWeight: 300, color: "rgba(255,255,255,0.04)", lineHeight: 1, marginBottom: "24px" }}>{step.n}</div>
                <h4 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "10px" }}>{step.title}</h4>
                <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
