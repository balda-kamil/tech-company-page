import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Materiały – SinsiTech",
  description: "Katalog tworzyw technicznych: POM, PA6, PMMA, PC, PE-HD, PET, PVC, Dibond. Dobór materiału do projektu CNC i laserowego.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
