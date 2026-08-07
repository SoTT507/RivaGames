import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Configurazione del font locale
const forcedSquare = localFont({
  src: "./fonts/ForcedSquare.ttf", 
  variable: "--font-forced-square",
  weight: "400", 
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rivagames.info"), 
  
  title: "Riva Games Festival 2026 | 14-16 Agosto",
  description: "Tre giorni di fumetti, gaming, cosplay e cultura pop a Riva del Garda. Scopri il programma, gli ospiti e acquista il tuo biglietto!",
  
  keywords: [
    "Riva Games Festival", 
    "Riva del Garda", 
    "fiera del fumetto", 
    "gaming", 
    "cosplay", 
    "eventi Trentino", 
    "giochi da tavolo"
  ],
  
  openGraph: {
    title: "Riva Games Festival 2026 | 14-16 Agosto",
    description: "L'evento dedicato alla cultura pop a Riva del Garda. Scopri ospiti, programma e acquista il biglietto!",
    url: "https://www.rivagames.info", // SOSTITUISCI CON IL TUO DOMINIO REALE
    siteName: "Riva Games Festival",
    images: [
      {
        // meglio un immagine creata apposta per i social (solitamente 1200x630px)
        url: "/immagini/illustrazione_locandina_RGF.webp", 
        width: 1200,
        height: 630,
        alt: "Locandina Ufficiale Riva Games Festival 2026",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Riva Games Festival 2026",
    description: "Tre giorni di fumetti, gaming e cosplay a Riva del Garda.",
    images: ["/immagini/illustrazione_locandina_RGF.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${forcedSquare.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
