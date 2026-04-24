"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const linkStyle: React.CSSProperties = {
    fontSize: "13px",
    fontWeight: 500,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "var(--text-dim)",
    textDecoration: "none",
    transition: "color 0.2s",
  };
  const activeLinkStyle: React.CSSProperties = { ...linkStyle, color: "var(--text)" };

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 60px",
        height: "72px",
        background: "rgba(17,17,19,0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
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
        }}
      >
        Sinsi<span style={{ color: "var(--gold)" }}>Tech</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="SinsiTech logo"
          style={{ height: "28px", width: "auto", maxWidth: "100px", display: "inline-block", verticalAlign: "middle", marginLeft: "8px" }}
        />
      </Link>

      <ul style={{ display: "flex", alignItems: "center", gap: "36px", listStyle: "none" }}>
        {/* Usługi dropdown */}
        <li
          style={{ position: "relative" }}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a
            href="#"
            style={
              isActive("/cnc") || isActive("/laser")
                ? activeLinkStyle
                : linkStyle
            }
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color =
                isActive("/cnc") || isActive("/laser")
                  ? "var(--text)"
                  : "var(--text-dim)")
            }
          >
            Usługi <span style={{ fontSize: "9px", opacity: 0.5 }}>▾</span>
          </a>
          {dropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 16px)",
                left: "-16px",
                background: "var(--bg3)",
                border: "1px solid var(--border-light)",
                minWidth: "200px",
                padding: "8px 0",
                borderRadius: "2px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
              }}
            >
              {[
                ["/cnc", "Frezowanie CNC"],
                ["/laser", "Laser CO₂"],
                ["/#uslugi", "Prototypy i serie"],
              ].map(([href, label]) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    display: "block",
                    padding: "10px 20px",
                    fontSize: "13px",
                    color: pathname === href ? "var(--text)" : "var(--text-dim)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    textDecoration: "none",
                    transition: "color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-dim)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </li>

        {[
          ["/materialy", "Materiały"],
          ["/#dlaczego", "O nas"],
          ["/#realizacje", "Realizacje"],
          ["/kontakt", "Kontakt"],
        ].map(([href, label]) => (
          <li key={href}>
            <Link
              href={href}
              style={isActive(href.startsWith("/") && !href.includes("#") ? href : "") ? activeLinkStyle : linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = isActive(href.startsWith("/") && !href.includes("#") ? href : "") ? "var(--text)" : "var(--text-dim)")
              }
            >
              {label}
            </Link>
          </li>
        ))}

        <li>
          <Link
            href="/kontakt"
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#111113",
              textDecoration: "none",
              background: "var(--gold)",
              padding: "10px 22px",
              borderRadius: "2px",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Wyceń projekt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
