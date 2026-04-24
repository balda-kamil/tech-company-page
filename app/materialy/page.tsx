"use client";

import { useEffect } from "react";
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

function RatingDots({ filled, total = 5 }: { filled: number; total?: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{ width: "8px", height: "8px", borderRadius: "50%", background: i < filled ? "var(--gold)" : "rgba(255,255,255,0.12)" }} />
      ))}
    </div>
  );
}

const tableData = [
  { name: "POM-C", sub: "Delrin / Acetal", strength: 4, chemical: 3, temp: "+120°C", cnc: 5, laser: false, uses: "Koła zębate, prowadnice, ślizgi" },
  { name: "PA6 / PA6-GF30", sub: "Poliamid", strength: 5, chemical: 3, temp: "+130°C", cnc: 4, laser: false, uses: "Kołnierze, tuleje, elementy konstrukcyjne" },
  { name: "PMMA", sub: "Plexi / Akryl", strength: 2, chemical: 3, temp: "+80°C", cnc: 4, laser: true, uses: "Reklama, dekoracje, ochrona" },
  { name: "PC", sub: "Poliwęglan", strength: 3, chemical: 2, temp: "+140°C", cnc: 4, laser: true, uses: "Obudowy, panele, osłony maszyn" },
  { name: "PE-HD", sub: "Polietylen", strength: 3, chemical: 5, temp: "+90°C", cnc: 4, laser: false, uses: "Spożywczy, ślizgi przenośników" },
  { name: "PET / PETG", sub: "Politereftalan", strength: 3, chemical: 4, temp: "+110°C", cnc: 4, laser: false, uses: "Precyzyjne elementy, uszczelnienia" },
  { name: "PVC", sub: "Polichlorek winylu", strength: 2, chemical: 4, temp: "+60°C", cnc: 3, laser: true, uses: "Reklama, wystawiennictwo, ochrona" },
  { name: "Dibond", sub: "Płyta ACP aluminium", strength: 3, chemical: 5, temp: "+80°C", cnc: 3, laser: true, uses: "Szyldy, elewacje, reklama zewnętrzna" },
];

const materialCards = [
  {
    abbr: "POM-C", name: "Delrin / Acetal — biały i czarny",
    desc: "Tworzywo o wyjątkowej obrabialności i gładkości powierzchni po frezowaniu. Stosowane wszędzie tam, gdzie wymagana jest niska tarcia i precyzja wymiarowa.",
    specs: [["Gęstość", "1,41 g/cm³"], ["Temp. pracy", "-40°C do +120°C"], ["Twardość Shore D", "80"], ["Odporność chemiczna", "Dobra (kw./ług.)"]],
    tags: ["CNC", "Koła zębate", "Prowadnice", "Ślizgi"],
  },
  {
    abbr: "PA6", name: "Poliamid 6 / PA6-GF30 (ze szkłem)",
    desc: "Wysoka wytrzymałość mechaniczna, doskonała odporność na ścieranie i uderzenia. PA6-GF30 z napełniaczem szklanym jeszcze bardziej twardy i sztywny.",
    specs: [["Gęstość", "1,14–1,36 g/cm³"], ["Temp. pracy", "do +130°C"], ["Wytrzymałość na rozciąganie", "70–130 MPa"], ["Uwaga", "Chłonie wilgoć"]],
    tags: ["CNC", "Kołnierze", "Tuleje", "Przekładnie"],
  },
  {
    abbr: "PMMA", name: "Plexi / Akryl — bezbarwny i barwiony",
    desc: "Wysoka przezroczystość optyczna (92%), doskonała odporność UV, gładka powierzchnia po obróbce. Standard w reklamie i oznakowaniu.",
    specs: [["Przepuszczalność światła", "92%"], ["Temp. pracy", "do +80°C"], ["Grubości w ofercie", "1–50mm"], ["Kolory", "Bezbarwna, mleczna, barwiona"]],
    tags: ["CNC", "Laser", "Reklama", "Ochrona"],
  },
  {
    abbr: "PC", name: "Poliwęglan — bezbarwny i barwiony",
    desc: "Udarność 60× lepsza niż szkło, wysoka przezroczystość. Idealny do ochrony maszyn, obudów elektroniki i paneli przemysłowych.",
    specs: [["Uderzenioodporność", "Bardzo wysoka"], ["Temp. pracy", "do +140°C"], ["Grubości", "2–20mm"], ["Normy", "UL94 V-2 / V-0"]],
    tags: ["CNC", "Laser", "Obudowy", "Panele"],
  },
  {
    abbr: "PE-HD", name: "Polietylen o wysokiej gęstości",
    desc: "Wyjątkowa odporność chemiczna, niski współczynnik tarcia, dopuszczony do kontaktu z żywnością (FDA/EC). Przemysł spożywczy i chemiczny.",
    specs: [["Certyfikaty", "FDA, EC 10/2011"], ["Temp. pracy", "do +90°C"], ["Kolory", "Biały, czarny, niebieski"], ["Tarcie", "Bardzo niskie"]],
    tags: ["CNC", "Spożywczy", "Ślizgi", "Zbiorniki"],
  },
  {
    abbr: "Dibond", name: "Płyta kompozytowa aluminium (ACP)",
    desc: "Rdzeń polietylenowy z okładziną aluminiową. Lekka, sztywna i odporna na warunki atmosferyczne. Standard w reklamie zewnętrznej i elewacjach.",
    specs: [["Grubość standardowa", "3mm, 4mm"], ["Odporność UV", "Wysoka"], ["Obróbka", "CNC + Laser"], ["Kolory", "Srebro, złoto, biały, czarny+"]],
    tags: ["Laser", "CNC", "Zewnętrzne", "Szyldy"],
  },
];

export default function MaterialyPage() {
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

  return (
    <>
      <Nav />
      <main>
        {/* Breadcrumb */}
        <div style={{ position: "relative", zIndex: 1, padding: "20px 60px", borderBottom: "1px solid var(--border)", background: "var(--bg2)", marginTop: "72px", display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-mono),monospace", fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
          <a href="/" style={{ color: "var(--text-dim)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={e => e.currentTarget.style.color = "var(--text-dim)"}>Strona główna</a>
          <span>›</span>
          <span style={{ color: "var(--gold)" }}>Materiały</span>
        </div>

        {/* Hero */}
        <section className="page-hero" style={{ padding: "160px 60px 80px", borderBottom: "1px solid var(--border)", background: "var(--bg2)" }}>
          <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ display: "block", width: "40px", height: "1px", background: "var(--gold)" }} />
            Katalog materiałów
          </div>
          <h1 className="reveal" style={{ fontSize: "clamp(48px,6vw,92px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.96, marginBottom: "28px" }}>
            Tworzywa<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>techniczne</em>
          </h1>
          <p className="reveal reveal-delay-1" style={{ fontSize: "clamp(16px,1.6vw,20px)", color: "var(--text-dim)", maxWidth: "580px", lineHeight: 1.7 }}>
            Pracujemy z szeroką gamą tworzyw technicznych. Pomagamy dobrać materiał do wymagań mechanicznych, chemicznych i temperaturowych Twojego projektu.
          </p>
        </section>

        {/* Comparison Table */}
        <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
          <SectionLabel num="01">Porównanie</SectionLabel>
          <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "40px" }}>
            Który materiał<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>wybrać?</em>
          </h2>
          <div className="reveal reveal-delay-1" style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["Materiał", "Wytrzymałość", "Odporność chemiczna", "Temp. max.", "Obrabialność CNC", "Laser", "Typowe zastosowania"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "12px 16px", fontFamily: "var(--font-mono),monospace", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map(row => (
                  <tr key={row.name} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 16px", fontSize: "13px" }}>
                      <strong>{row.name}</strong>
                      <br /><span style={{ fontSize: "11px", color: "var(--text-muted)" }}>{row.sub}</span>
                    </td>
                    <td style={{ padding: "14px 16px" }}><RatingDots filled={row.strength} /></td>
                    <td style={{ padding: "14px 16px" }}><RatingDots filled={row.chemical} /></td>
                    <td style={{ padding: "14px 16px", fontSize: "13px" }}>{row.temp}</td>
                    <td style={{ padding: "14px 16px" }}><RatingDots filled={row.cnc} /></td>
                    <td style={{ padding: "14px 16px" }}>{row.laser ? <span style={{ color: "var(--gold)", fontSize: "14px" }}>✓</span> : <span style={{ color: "var(--text-muted)", fontSize: "12px" }}>—</span>}</td>
                    <td style={{ padding: "14px 16px", fontSize: "12px", color: "var(--text-dim)" }}>{row.uses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Material Cards */}
        <section style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
          <SectionLabel num="02">Karty materiałów</SectionLabel>
          <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "48px" }}>
            Szczegółowy<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>przegląd tworzyw</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
            {materialCards.map((m, i) => (
              <div key={m.abbr} className={`reveal${i > 0 ? ` reveal-delay-${Math.min(i % 3 + 1, 3)}` : ""}`}
                style={{ background: "var(--bg2)", border: "1px solid var(--border)", padding: "36px", borderRadius: "2px", position: "relative", overflow: "hidden", transition: "background 0.2s, border-color 0.2s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--bg3)"; e.currentTarget.style.borderColor = "var(--border-light)"; (e.currentTarget.querySelector(".mat-bar") as HTMLElement).style.height = "100%"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--bg2)"; e.currentTarget.style.borderColor = "var(--border)"; (e.currentTarget.querySelector(".mat-bar") as HTMLElement).style.height = "0"; }}
              >
                <div className="mat-bar" style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "0", background: "var(--gold)", transition: "height 0.4s" }} />
                <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "28px", fontWeight: 500, color: "var(--gold)", letterSpacing: "-0.01em", marginBottom: "4px" }}>{m.abbr}</div>
                <div style={{ fontSize: "13px", color: "var(--text-dim)", marginBottom: "20px" }}>{m.name}</div>
                <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.65, marginBottom: "20px" }}>{m.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
                  {m.specs.map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", padding: "6px 0", borderBottom: "1px solid var(--border)" }}>
                      <span style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono),monospace", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase" }}>{k}</span>
                      <span style={{ color: "var(--text)", fontWeight: 500, fontSize: "12px" }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {m.tags.map(t => <span key={t} style={{ fontFamily: "var(--font-mono),monospace", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 10px", border: "1px solid var(--border-light)", color: "var(--text-dim)", borderRadius: "1px" }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "80px 60px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "clamp(28px,3vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "16px" }}>
                Nie wiesz, który<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>materiał wybrać?</em>
              </h2>
              <p style={{ fontSize: "15px", color: "var(--text-dim)", lineHeight: 1.7, marginBottom: "32px" }}>
                Opisz swój projekt i wymagania — dobierzemy odpowiedni materiał i technologię. Wycena jest bezpłatna.
              </p>
              <a href="/kontakt" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "var(--gold)", color: "#111113", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", padding: "16px 32px", borderRadius: "2px", textDecoration: "none", transition: "opacity 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                Zapytaj o dobór materiału
              </a>
            </div>
            <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", padding: "36px" }}>
              <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "20px" }}>{"// co nas interesuje przy doborze"}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  "Temperatura i środowisko pracy elementu",
                  "Wymagania mechaniczne (obciążenia, tarcie)",
                  "Kontakt z mediami (woda, oleje, kwasy)",
                  "Wymogi estetyczne i certyfikacyjne",
                  "Budżet i planowana ilość",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", fontSize: "14px" }}>
                    <span style={{ color: "var(--gold)", fontFamily: "var(--font-mono),monospace" }}>0{i + 1}</span>
                    <span style={{ color: "var(--text-dim)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
