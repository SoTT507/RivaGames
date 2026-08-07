import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Configurazione del font locale
const forcedSquare = localFont({
  src: "./fonts/ForcedSquare.ttf", // Assicurati che il nome file sia ESATTAMENTE questo
  variable: "--font-forced-square",
  weight: "400", // Di default i font custom hanno peso 400
  style: "normal",
});

export const metadata: Metadata = {
  title: "Riva Games Festival 2026",
  description: "Tre giorni di fumetti, gaming, cosplay e cultura pop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      // Passiamo la variabile CSS del font all'HTML
      className={`${forcedSquare.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
