"use client";

import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import type { Metadata } from "next";

function SectionLabel({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "var(--gold)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
      <span style={{ color: "var(--text-muted)" }}>{num}</span>
      {children}
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: "1px solid var(--border)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", background: "none", border: "none", color: "var(--text)", fontFamily: "var(--font-head),sans-serif", fontSize: "16px", fontWeight: 500, textAlign: "left", padding: "24px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", transition: "color 0.2s" }}
        onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
        onMouseLeave={e => e.currentTarget.style.color = "var(--text)"}
      >
        {question}
        <span style={{ flexShrink: 0, color: "var(--gold)", fontSize: "20px", transition: "transform 0.3s", display: "inline-block", transform: open ? "rotate(45deg)" : "none" }}>+</span>
      </button>
      {open && (
        <div style={{ padding: "0 0 24px", fontSize: "14px", color: "var(--text-dim)", lineHeight: 1.75, maxWidth: "680px" }}>{answer}</div>
      )}
    </div>
  );
}

const gridPattern = (id: string) => (
  <defs>
    <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
    </pattern>
  </defs>
);

export default function CNCPage() {
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

  const materials = [
    { abbr: "POM-C", name: "Delrin / Acetal — biały i czarny", desc: "Doskonała obrabialność, bardzo niska chropowatość po frezowaniu. Idealny do elementów ślizgowych, kół zębatych, prowadnic.", props: ["Temp. do +120°C", "Twardość: 80 Shore D"] },
    { abbr: "PA6", name: "Poliamid 6 / PA6-GF30", desc: "Wysoka wytrzymałość mechaniczna, odporna na ścieranie. Zastosowania: koła, tuleje, elementy konstrukcyjne.", props: ["Temp. do +130°C", "Bardzo wysoka twardość"] },
    { abbr: "PC", name: "Poliwęglan — bezbarwny i barwiony", desc: "Przezroczysty, udarowy, doskonała geometria po obróbce. Obudowy, panele, osłony maszyn.", props: ["Temp. do +140°C", "Przezroczysty"] },
    { abbr: "PMMA", name: "Plexi / Akryl — różne kolory i grubości", desc: "Doskonała przezroczystość optyczna, połysk po frezowaniu. Elementy dekoracyjne, oznakowanie, obudowy.", props: ["Temp. do +80°C", "Optycznie czyste"] },
    { abbr: "PE-HD", name: "Polietylen o wysokiej gęstości", desc: "Odporność chemiczna, ślizgowa powierzchnia, higiena. Przemysł spożywczy, wałki, ślizgi przenośników.", props: ["Certyfikat FDA", "Chemoodporny"] },
    { abbr: "PET", name: "Politereftalan etylenu", desc: "Niska absorpcja wilgoci, dobra stabilność wymiarowa. Elementy precyzyjne, uszczelnienia, prowadnice.", props: ["Niska wilgochłonność", "Stabilność wymiarowa"] },
  ];

  const faqItems = [
    { q: "Jakie pliki powinienem wysłać?", a: "Najlepiej DXF lub DWG dla elementów 2D, STEP lub IGES dla 3D. Przyjmujemy też PDF, AI, CDR — zapytaj jeśli masz inny format. Nieraz wystarczy opis słowny lub szkic." },
    { q: "Jaka jest minimalna ilość zamówienia?", a: "Brak minimalnej ilości. Realizujemy pojedyncze sztuki, prototypy i serie produkcyjne. Cena jednostkowa jest wyższa przy małych ilościach, ale chętnie to wycenimy." },
    { q: "Ile czeka się na wycenę?", a: "Standardowo 24–48 godzin roboczych od chwili otrzymania kompletnej dokumentacji. W przypadku pilnych zleceń – napisz, postaramy się przyspieszyć." },
    { q: "Czy mogę dostarczyć własny materiał?", a: "Tak, istnieje możliwość dostarczenia własnego materiału do obróbki. Skontaktuj się z nami wcześniej, żebyśmy mogli ocenić jego przydatność." },
    { q: "Jak wygląda dostawa gotowych elementów?", a: "Wysyłamy kurierem na terenie całej Polski. Możliwy też odbiór osobisty w Tczewie. Pakujemy starannie — elementy przyjeżdżają bez zarysowań." },
    { q: "Czy wystawiacie fakturę VAT?", a: "Tak, wystawiamy faktury VAT. Jesteśmy spółką cywilną zarejestrowaną w Polsce (NIP: PL5932627119). Faktury wystawiane są po realizacji zamówienia lub, na życzenie, zaliczkowo." },
  ];

  return (
    <>
      <Nav />
      <main>
        {/* Breadcrumb */}
        <div style={{ position: "relative", zIndex: 1, padding: "20px 60px", borderBottom: "1px solid var(--border)", background: "var(--bg2)", marginTop: "72px", display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-mono),monospace", fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
          <a href="/" style={{ color: "var(--text-dim)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={e => e.currentTarget.style.color = "var(--text-dim)"}>Strona główna</a>
          <span>›</span>
          <a href="/#uslugi" style={{ color: "var(--text-dim)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={e => e.currentTarget.style.color = "var(--text-dim)"}>Usługi</a>
          <span>›</span>
          <span style={{ color: "var(--gold)" }}>Frezowanie CNC</span>
        </div>

        {/* Hero */}
        <section className="page-hero" style={{ padding: "160px 60px 80px", borderBottom: "1px solid var(--border)", background: "var(--bg2)" }}>
          <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ display: "block", width: "40px", height: "1px", background: "var(--gold)" }} />
            Usługa 01 / 04
          </div>
          <h1 className="reveal" style={{ fontSize: "clamp(48px,6vw,92px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.96, marginBottom: "28px" }}>
            Frezowanie<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>CNC</em>
          </h1>
          <p className="reveal reveal-delay-1" style={{ fontSize: "clamp(16px,1.6vw,20px)", color: "var(--text-dim)", maxWidth: "580px", lineHeight: 1.7 }}>
            Precyzyjna obróbka 2D i 3D tworzyw technicznych z tolerancją do ±0,1 mm. Realizujemy prototypy, serie małe i duże — od jednej sztuki po tysiące.
          </p>
          <div className="reveal reveal-delay-2" style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "40px" }}>
            <a href="/kontakt" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "var(--gold)", color: "#111113", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", padding: "16px 32px", borderRadius: "2px", textDecoration: "none", transition: "opacity 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l12-6-5 12-2-5-5-1z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Wyceń projekt CNC
            </a>
            <a href="/materialy" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "var(--text)", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", fontWeight: 500, letterSpacing: "0.04em", padding: "16px 32px", borderRadius: "2px", border: "1px solid var(--border-light)", textDecoration: "none", transition: "border-color 0.2s, background 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.background = "transparent"; }}>
              Zobacz materiały →
            </a>
          </div>
        </section>

        {/* Capabilities */}
        <section style={{ background: "var(--bg)", padding: "120px 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div>
              <SectionLabel num="01">Możliwości</SectionLabel>
              <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "20px" }}>
                Co możemy<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>wykonać?</em>
              </h2>
              <p className="reveal reveal-delay-1" style={{ fontSize: "17px", color: "var(--text-dim)", maxWidth: "520px", lineHeight: 1.7, marginBottom: "40px" }}>
                Frezarka CNC pozwala realizować niemal dowolne kształty 2D i 2,5D w tworzywach technicznych.
              </p>
              <div className="reveal reveal-delay-2">
                {[
                  { n: "01", title: "Wycinanie konturów 2D", desc: "Płyty, panele, uszczelki, elementy kratownic. Dowolny kontur z pliku DXF/DWG." },
                  { n: "02", title: "Kieszenie i rowki", desc: "Kieszenie prostokątne i profilowane, rowki T, rowki wpustowe, podcięcia." },
                  { n: "03", title: "Wiercenie i gwintowanie", desc: "Serie otworów wg rysunku, gwinty metryczne, otwory pod wkładki gwintowane." },
                  { n: "04", title: "Obróbka 3D", desc: "Rzeźbione powierzchnie, zaokrąglenia krawędzi, formy 3D z pliku STEP/STL." },
                  { n: "05", title: "Grawerowanie i oznaczenia", desc: "Numery seryjne, loga, tabliczki znamionowe, napisy i skalowania." },
                ].map(item => (
                  <div key={item.n} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: "16px", padding: "18px 0", borderBottom: "1px solid var(--border)", alignItems: "start" }}>
                    <div style={{ color: "var(--gold)", fontFamily: "var(--font-mono),monospace", fontSize: "12px", paddingTop: "2px" }}>{item.n}</div>
                    <div>
                      <strong style={{ fontSize: "15px" }}>{item.title}</strong>
                      <p style={{ fontSize: "13px", color: "var(--text-dim)", marginTop: "4px", lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="reveal reveal-delay-1" style={{ background: "var(--bg3)", border: "1px solid var(--border)", padding: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "2px", marginBottom: "24px" }}>
                <svg viewBox="0 0 380 280" width="100%" style={{ maxWidth: "380px" }}>
                  {gridPattern("cgrid")}
                  <rect width="380" height="280" fill="url(#cgrid)" />
                  <g transform="translate(190,140)">
                    <rect x="-140" y="-90" width="280" height="180" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                    <path d="M-100,-50 L100,-50 L100,50 L-100,50 Z" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.7" />
                    <rect x="-60" y="-30" width="120" height="60" rx="2" fill="rgba(255,130,60,0.08)" stroke="var(--gold)" strokeWidth="1" />
                    <line x1="60" y1="-30" x2="60" y2="30" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                    <circle cx="60" cy="-30" r="5" fill="var(--blue)" opacity="0.8" />
                    <circle cx="60" cy="-30" r="10" fill="none" stroke="var(--blue)" strokeWidth="0.5" opacity="0.4" />
                    <line x1="-100" y1="-68" x2="100" y2="-68" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                    <line x1="-100" y1="-71" x2="-100" y2="-65" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                    <line x1="100" y1="-71" x2="100" y2="-65" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                    <text x="0" y="-74" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontSize="9">200mm</text>
                  </g>
                  <text x="12" y="268" fill="rgba(255,255,255,0.2)" fontFamily="monospace" fontSize="7">SCHEMAT // FREZOWANIE KIESZENI 2.5D</text>
                </svg>
              </div>
              <div className="reveal reveal-delay-2" style={{ background: "var(--bg3)", border: "1px solid var(--border)", padding: "32px" }}>
                <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "20px", paddingBottom: "12px", borderBottom: "1px solid var(--border)" }}>{"// parametry maszyny"}</div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {[
                      ["Tolerancja wymiarowa", "±0,1 mm"],
                      ["Maks. pole robocze", "2500 × 1250 mm"],
                      ["Maks. grubość materiału", "do 100 mm"],
                      ["Min. promień narzędzia", "R 0,5 mm"],
                      ["Prędkość wrzeciona", "do 24 000 obr/min"],
                      ["Osi obróbki", "3 osie (X, Y, Z)"],
                      ["Akceptowane formaty", "DXF, DWG, STEP, PDF"],
                    ].map(([k, v]) => (
                      <tr key={k} style={{ borderBottom: "1px solid var(--border)" }}>
                        <td style={{ padding: "16px 0", fontSize: "12px", color: "var(--text-dim)", fontFamily: "var(--font-mono),monospace", letterSpacing: "0.06em", width: "55%" }}>{k}</td>
                        <td style={{ padding: "16px 0", fontSize: "14px", color: "var(--text)", fontWeight: 500 }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Materials */}
        <section style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
          <SectionLabel num="02">Materiały</SectionLabel>
          <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "16px" }}>
            Tworzywa do<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>frezowania CNC</em>
          </h2>
          <p className="reveal reveal-delay-1" style={{ fontSize: "17px", color: "var(--text-dim)", maxWidth: "520px", lineHeight: 1.7, marginBottom: "56px" }}>
            Pracujemy z szerokim zakresem tworzyw technicznych. Nie wiesz, co wybrać? Doradzimy.
          </p>
          <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: "2px", padding: "8px 32px 0" }}>
            {materials.map((m, i) => (
              <div key={m.abbr} className={`reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ""}`} style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", gap: "20px", alignItems: "center", padding: "20px 0", borderBottom: i < materials.length - 1 ? "1px solid var(--border)" : "none" }}>
                <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "18px", fontWeight: 500, color: "var(--gold)" }}>{m.abbr}</div>
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "4px" }}>{m.name}</h4>
                  <p style={{ fontSize: "12px", color: "var(--text-dim)", lineHeight: 1.5 }}>{m.desc}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-end" }}>
                  {m.props.map(p => <span key={p} style={{ fontFamily: "var(--font-mono),monospace", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>{p}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: "24px", textAlign: "right" }}>
            <a href="/materialy" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "var(--text)", fontFamily: "var(--font-head),sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.04em", padding: "12px 24px", borderRadius: "2px", border: "1px solid var(--border-light)", textDecoration: "none", transition: "border-color 0.2s, background 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.background = "transparent"; }}>
              Pełny katalog materiałów →
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "80px", alignItems: "start" }}>
            <div>
              <SectionLabel num="03">FAQ</SectionLabel>
              <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
                Często zadawane<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>pytania</em>
              </h2>
              <p className="reveal reveal-delay-1" style={{ fontSize: "17px", color: "var(--text-dim)", marginTop: "16px" }}>
                Nie znalazłeś odpowiedzi?{" "}
                <a href="/kontakt" style={{ color: "var(--gold)", textDecoration: "none" }}>Napisz do nas →</a>
              </p>
            </div>
            <div style={{ paddingTop: "16px" }} className="reveal reveal-delay-1">
              {faqItems.map(item => <FaqItem key={item.q} question={item.q} answer={item.a} />)}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "80px 60px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px", flexWrap: "wrap" }}>
            <div>
              <h2 style={{ fontSize: "clamp(28px,3vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "12px" }}>
                Gotowy na <em style={{ fontStyle: "normal", color: "var(--gold)" }}>wycenę?</em>
              </h2>
              <p style={{ fontSize: "15px", color: "var(--text-dim)" }}>Wyślij rysunek lub opis — wrócimy z ceną i terminem w 24–48h.</p>
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="/kontakt" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "var(--gold)", color: "#111113", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", padding: "16px 32px", borderRadius: "2px", textDecoration: "none", transition: "opacity 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                Wyceń projekt CNC
              </a>
              <a href="/laser" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "var(--text)", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", fontWeight: 500, letterSpacing: "0.04em", padding: "16px 32px", borderRadius: "2px", border: "1px solid var(--border-light)", textDecoration: "none", transition: "border-color 0.2s, background 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.background = "transparent"; }}>
                Sprawdź też Laser CO₂ →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
