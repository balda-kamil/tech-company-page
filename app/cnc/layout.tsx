import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frezowanie CNC – SinsiTech",
  description: "Precyzyjne frezowanie CNC tworzyw technicznych. Tolerancje ±0,1mm. POM, PA6, PMMA, PC, PE. Prototypy i serie. Tczew, cała Polska.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
