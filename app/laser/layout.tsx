import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laser CO₂ – SinsiTech",
  description: "Cięcie i grawerowanie laserowe tworzyw, plexi, dibondu. Precyzja 0,1mm. Reklama, przemysł, dekoracje. Tczew, cała Polska.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
