import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt i Wycena – SinsiTech",
  description: "Wyceń projekt CNC lub laserowy. Odpowiedź w 24–48h. Tczew, ul. Obrońców Westerplatte 24B. Tel: +48 536 095 840.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
