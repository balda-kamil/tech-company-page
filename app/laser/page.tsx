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

const laserMaterials = [
  { abbr: "PMMA", color: "var(--gold)", desc: "Plexi / Akryl\nCięcie + grawerowanie\ndo 20mm" },
  { abbr: "PC", color: "var(--gold)", desc: "Poliwęglan\nCięcie + grawerowanie\ndo 10mm" },
  { abbr: "PVC", color: "var(--gold)", desc: "PVC spieniony\nCięcie + grawerowanie\ndo 15mm" },
  { abbr: "Dibond", color: "var(--blue)", desc: "Płyta ACP alu\nCięcie + grawerowanie\ndo 4mm" },
  { abbr: "Guma", color: "var(--gold)", desc: "Uszczelki, membrany\nCięcie konturów\ndo 10mm" },
  { abbr: "HIPS", color: "var(--gold)", desc: "Polistyren udarowy\nCięcie + grawerowanie\ndo 10mm" },
];

const applications = [
  { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="12" rx="1" stroke="var(--gold)" strokeWidth="1.3" /><path d="M7 4V3M13 4V3" stroke="var(--gold)" strokeWidth="1.3" strokeLinecap="round" /><path d="M3 8h14" stroke="var(--gold)" strokeWidth="1.3" /></svg>, title: "Reklama i oznakowanie", desc: "Litery reklamowe, loga, tablice informacyjne z plexi i dibondu. Cięcie i grawerowanie znaków w każdym rozmiarze." },
  { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L18 7V13L10 18L2 13V7L10 2Z" stroke="var(--gold)" strokeWidth="1.3" /></svg>, title: "Wzornictwo i dekoracje", desc: "Panele dekoracyjne, elementy wyposażenia wnętrz, ozdobne wycięcia, wzory geometryczne i organiczne." },
  { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="4" y="4" width="12" height="12" rx="1" stroke="var(--gold)" strokeWidth="1.3" /><circle cx="10" cy="10" r="2.5" stroke="var(--gold)" strokeWidth="1.3" /></svg>, title: "Przemysł i elektronika", desc: "Panele frontowe, tabliczki znamionowe, maski, obudowy, elementy uszczelniające z PTFE i gumy." },
  { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 17L10 3L17 17H3Z" stroke="var(--gold)" strokeWidth="1.3" strokeLinejoin="round" /></svg>, title: "Modelarstwo i prototypy", desc: "Szybkie prototypy z plexi i PVC. Modele architektoniczne, makiety, puzzle i elementy edukacyjne." },
  { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="var(--gold)" strokeWidth="1.3" /><path d="M10 6.5V10L12.5 12.5" stroke="var(--gold)" strokeWidth="1.3" strokeLinecap="round" /></svg>, title: "Gastronomia i spożywczy", desc: "Tabliczki menu, ozdoby z plexi, stojaki i ekspozytory. Grawerowanie personalizowanych upominków." },
  { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 10h16M10 2v16" stroke="var(--gold)" strokeWidth="1.3" strokeLinecap="round" /></svg>, title: "Uszczelki i membrany", desc: "Cięcie laserowe uszczelek z gumy, PTFE, pianki EVA. Precyzyjne kontury bez odkształceń mechanicznych." },
];

export default function LaserPage() {
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
          <a href="/#uslugi" style={{ color: "var(--text-dim)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={e => e.currentTarget.style.color = "var(--text-dim)"}>Usługi</a>
          <span>›</span>
          <span style={{ color: "var(--gold)" }}>Laser CO₂</span>
        </div>

        {/* Hero */}
        <section className="page-hero" style={{ padding: "160px 60px 80px", borderBottom: "1px solid var(--border)", background: "var(--bg2)" }}>
          <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ display: "block", width: "40px", height: "1px", background: "var(--gold)" }} />
            Usługa 02 / 04
          </div>
          <h1 className="reveal" style={{ fontSize: "clamp(48px,6vw,92px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.96, marginBottom: "28px" }}>
            Cięcie i grawerowanie<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>Laser CO₂</em>
          </h1>
          <p className="reveal reveal-delay-1" style={{ fontSize: "clamp(16px,1.6vw,20px)", color: "var(--text-dim)", maxWidth: "580px", lineHeight: 1.7 }}>
            Bezkontaktowa obróbka laserowa z minimalną strefą wpływu ciepła. Doskonałe dla skomplikowanych konturów, drobnych detali, napisów i wzorów dekoracyjnych.
          </p>
          <div className="reveal reveal-delay-2" style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "40px" }}>
            <a href="/kontakt" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "var(--gold)", color: "#111113", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", padding: "16px 32px", borderRadius: "2px", textDecoration: "none", transition: "opacity 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l12-6-5 12-2-5-5-1z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
              Wyceń projekt laserowy
            </a>
            <a href="/cnc" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "var(--text)", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", fontWeight: 500, letterSpacing: "0.04em", padding: "16px 32px", borderRadius: "2px", border: "1px solid var(--border-light)", textDecoration: "none", transition: "border-color 0.2s, background 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.background = "transparent"; }}>
              Sprawdź też CNC →
            </a>
          </div>
        </section>

        {/* Capabilities: Cutting vs Engraving */}
        <section style={{ background: "var(--bg)", padding: "120px 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div>
              <SectionLabel num="01">Technologie</SectionLabel>
              <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "20px" }}>
                Cięcie<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>vs Grawerowanie</em>
              </h2>
              <p className="reveal reveal-delay-1" style={{ fontSize: "17px", color: "var(--text-dim)", maxWidth: "520px", lineHeight: 1.7, marginBottom: "40px" }}>
                Laser CO₂ pozwala na dwie fundamentalnie różne operacje — dobieramy moc i prędkość do efektu, jaki chcesz osiągnąć.
              </p>
              <div className="reveal reveal-delay-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", padding: "36px", borderRadius: "2px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "8px", color: "var(--gold)" }}>Cięcie</h3>
                  <div style={{ fontSize: "12px", color: "var(--text-dim)", fontFamily: "var(--font-mono),monospace", marginBottom: "24px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Przez cały przekrój</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {["Dowolny kontur 2D", "Grubości 1–20 mm", "Gładka krawędź cięcia", "Brak naprężeń mech.", "Idealne dla małych detali"].map(item => (
                      <li key={item} style={{ display: "flex", gap: "12px", fontSize: "14px", color: "var(--text-dim)", lineHeight: 1.5 }}>
                        <span style={{ color: "var(--gold)", flexShrink: 0 }}>→</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", padding: "36px", borderRadius: "2px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "8px", color: "var(--blue)" }}>Grawerowanie</h3>
                  <div style={{ fontSize: "12px", color: "var(--blue-dim)", fontFamily: "var(--font-mono),monospace", marginBottom: "24px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Powierzchniowe</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {["Napisy, loga, wzory", "Regulowana głębokość", "Rastry i wektorowo", "Tabliczki znamionowe", "Efekty matowe i błyszczące"].map(item => (
                      <li key={item} style={{ display: "flex", gap: "12px", fontSize: "14px", color: "var(--text-dim)", lineHeight: 1.5 }}>
                        <span style={{ color: "var(--blue)", flexShrink: 0 }}>→</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="reveal reveal-delay-1" style={{ background: "var(--bg3)", border: "1px solid var(--border)", overflow: "hidden", borderRadius: "2px" }}>
                <svg viewBox="0 0 400 300" width="100%">
                  <defs>
                    <pattern id="lgrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    </pattern>
                    <radialGradient id="laserGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="var(--blue)" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  </defs>
                  <rect width="400" height="300" fill="url(#lgrid)" />
                  <rect x="60" y="80" width="280" height="140" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" rx="1" />
                  <line x1="200" y1="20" x2="200" y2="148" stroke="var(--blue)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
                  <circle cx="200" cy="148" r="18" fill="url(#laserGlow)" opacity="0.7" />
                  <circle cx="200" cy="148" r="4" fill="var(--blue)" opacity="0.9" />
                  <path d="M100,148 Q150,120 200,148 Q250,176 300,148" fill="none" stroke="var(--blue)" strokeWidth="1.5" opacity="0.8" />
                  <rect x="180" y="10" width="40" height="30" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  <text x="200" y="28" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontFamily="monospace" fontSize="8">CO₂</text>
                  <circle cx="204" cy="145" r="2" fill="var(--gold)" opacity="0.7" />
                  <circle cx="197" cy="152" r="1.5" fill="var(--gold)" opacity="0.5" />
                  <text x="68" y="240" fill="rgba(255,255,255,0.25)" fontFamily="monospace" fontSize="8">PMMA / PC / PVC / DIBOND</text>
                </svg>
              </div>
              <div className="reveal reveal-delay-2" style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderTop: "none", padding: "28px 32px" }}>
                <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid var(--border)" }}>{"// parametry lasera"}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  {[
                    { val: "CO₂", label: "Typ lasera", c: "var(--blue)" },
                    { val: "1300×900", label: "Pole robocze (mm)", c: "var(--gold)" },
                    { val: "0.1mm", label: "Dokładność pozycjonowania", c: "var(--blue)" },
                    { val: "20mm", label: "Maks. grubość cięcia", c: "var(--gold)" },
                  ].map(s => (
                    <div key={s.label}>
                      <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "18px", color: s.c, fontWeight: 500 }}>{s.val}</div>
                      <div style={{ fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
          <SectionLabel num="02">Zastosowania</SectionLabel>
          <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "16px" }}>
            Dla kogo jest<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>laser CO₂?</em>
          </h2>
          <p className="reveal reveal-delay-1" style={{ fontSize: "17px", color: "var(--text-dim)", maxWidth: "520px", lineHeight: 1.7, marginBottom: "56px" }}>
            Technologia laserowa sprawdza się w bardzo różnych branżach — od reklamy po przemysł.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)", border: "1px solid var(--border)" }}>
            {applications.map((app, i) => (
              <div key={app.title} className={`reveal${i > 0 ? ` reveal-delay-${Math.min(i % 3, 3)}` : ""}`} style={{ background: "var(--bg2)", padding: "36px 28px" }}>
                <div style={{ width: "40px", height: "40px", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", borderRadius: "2px" }}>
                  {app.icon}
                </div>
                <h4 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "8px" }}>{app.title}</h4>
                <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.6 }}>{app.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Materials */}
        <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "80px", alignItems: "start" }}>
            <div>
              <SectionLabel num="03">Materiały</SectionLabel>
              <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "20px" }}>
                Co możemy<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>ciąć laserem?</em>
              </h2>
              <p className="reveal reveal-delay-1" style={{ fontSize: "17px", color: "var(--text-dim)", maxWidth: "520px", lineHeight: 1.7 }}>
                Laser CO₂ pozwala ciąć i grawerować wiele rodzajów tworzyw.
              </p>
              <div className="reveal reveal-delay-2" style={{ marginTop: "32px", padding: "20px 24px", background: "var(--bg3)", border: "1px solid var(--border)", borderLeft: "3px solid var(--gold)" }}>
                <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.7 }}>
                  <strong style={{ color: "var(--text)" }}>Ważne:</strong> Laserem CO₂ nie można ciąć aluminium i stali. Dla tych materiałów polecamy podwykonawców. Zapytaj — pomożemy znaleźć rozwiązanie.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {laserMaterials.map(m => (
                <div key={m.abbr} style={{ background: "var(--bg3)", border: "1px solid var(--border)", padding: "24px", borderRadius: "2px" }}>
                  <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "16px", fontWeight: 500, color: m.color, marginBottom: "8px" }}>{m.abbr}</div>
                  <div style={{ fontSize: "11px", color: "var(--text-dim)", whiteSpace: "pre-line" }}>{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "80px" }}>
            <div>
              <SectionLabel num="04">FAQ</SectionLabel>
              <h2 className="reveal" style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
                Pytania<br /><em style={{ fontStyle: "normal", color: "var(--gold)" }}>o laser</em>
              </h2>
            </div>
            <div style={{ paddingTop: "16px" }} className="reveal reveal-delay-1">
              {[
                { q: "Jakie pliki wysłać do cięcia laserowego?", a: "Dla cięcia: DXF lub AI z warstwami (cięcie / grawerowanie). Dla grawerowania: możemy pracować z JPG, PNG, PDF. Im wyższa rozdzielczość, tym lepszy efekt rastrowego graweru." },
                { q: "Czy krawędź cięcia jest czysta?", a: "Tak — przy odpowiednich ustawieniach krawędź plexi po cięciu laserowym jest prawie polerowana. PVC i dibond mają krawędź matową, ale bez zadziorów." },
                { q: "Ile trwa realizacja?", a: "Dla prostych zleceń (cięcie płyt, litery) często możemy realizować w ciągu 1–3 dni roboczych. Skomplikowane serie lub duże ilości — ustalamy indywidualnie." },
                { q: "Czy laser może ciąć aluminium?", a: "Laser CO₂ nie nadaje się do cięcia aluminium i stali. Możemy wygrawerować aluminium lub pomóc znaleźć podwykonawcę do cięcia plazmą/wodą." },
              ].map(item => <FaqItem key={item.q} question={item.q} answer={item.a} />)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "80px 60px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px", flexWrap: "wrap" }}>
            <div>
              <h2 style={{ fontSize: "clamp(28px,3vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "12px" }}>
                Gotowy na <em style={{ fontStyle: "normal", color: "var(--gold)" }}>wycenę?</em>
              </h2>
              <p style={{ fontSize: "15px", color: "var(--text-dim)" }}>Wyślij projekt — wrócimy z ceną w 24–48h.</p>
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="/kontakt" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "var(--gold)", color: "#111113", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", padding: "16px 32px", borderRadius: "2px", textDecoration: "none", transition: "opacity 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                Wyceń projekt laserowy
              </a>
              <a href="/cnc" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "var(--text)", fontFamily: "var(--font-head),sans-serif", fontSize: "14px", fontWeight: 500, letterSpacing: "0.04em", padding: "16px 32px", borderRadius: "2px", border: "1px solid var(--border-light)", textDecoration: "none", transition: "border-color 0.2s, background 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.background = "transparent"; }}>
                Frezowanie CNC →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
