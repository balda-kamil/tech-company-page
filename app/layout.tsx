import type { Metadata } from "next";
import { Space_Grotesk, DM_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-head",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Sinsi Tech – Frezowanie CNC, Laser CO₂, Tworzywa Sztuczne",
  description:
    "Precyzyjna obróbka tworzyw sztucznych. Frezowanie CNC, cięcie i grawerowanie laserem CO₂, prototypy i serie produkcyjne. Tczew i cała Polska.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${spaceGrotesk.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
