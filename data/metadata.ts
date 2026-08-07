import type { Metadata } from "next";

const BASE_URL = "https://www.rivagames.info";

export const siteMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  
  title: "Riva Games Festival 2026 | Fiera Fumetto, Gaming e Cosplay a Riva del Garda",
  
  description: "14-16 Agosto 2026: Tre giorni di cultura pop a Riva del Garda. Incontra Alessandro Sisti, Cosplay and Nerd, partecipa ai tornei gaming e ascolta il Corpo Bandistico di Riva del Garda.",
  
  keywords: [
    "Riva Games Festival", 
    "Riva del Garda", 
    "fiera del fumetto Trentino", 
    "gaming event", 
    "gara cosplay",
    "Alessandro Sisti",
    "Cosplay and Nerd",
    "Corpo Bandistico Riva del Garda",
    "tornei Magic Pauper",
    "eventi lago di Garda"
  ],
  
  openGraph: {
    title: "Riva Games Festival 2026 | Fumetto, Gaming e Cosplay",
    description: "14-16 Agosto 2026. L'evento dedicato alla cultura pop a Riva del Garda. Scopri ospiti e programma!",
    url: BASE_URL,
    siteName: "Riva Games Festival",
    images: [
      {
        url: "/immagini/og-image-rgf.png",
        width: 1200,
        height: 630,
        alt: "Locandina Ufficiale Riva Games Festival 2026",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Riva Games Festival 2026 a Riva del Garda",
    description: "Tre giorni di fumetti, gaming e cosplay con Alessandro Sisti e Cosplay and Nerd.",
    images: ["/immagini/og-image-rgf.png"],
  },
};

// 2. Oggetto esportato per page.tsx (JSON-LD Rich Snippets)
export const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Riva Games Festival 2026",
  "startDate": "2026-08-14T18:00:00+02:00",
  "endDate": "2026-08-16T23:00:00+02:00",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Piazza Cesare Battisti",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Piazza Cesare Battisti",
      "addressLocality": "Riva del Garda",
      "postalCode": "38066",
      "addressRegion": "TN",
      "addressCountry": "IT"
    }
  },
  "image": [`${BASE_URL}/immagini/illustrazione_locandina_RGF.webp`],
  "description": "Tre giorni di fumetti, gaming, cosplay e cultura pop a Riva del Garda.",
  "offers": [
    {
      "@type": "Offer",
      "name": "Biglietto intero - Masterclass / Movie Night",
      "price": "15.00",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": BASE_URL
    },
    {
      "@type": "Offer",
      "name": "Biglietto ridotto",
      "price": "10.00",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": BASE_URL
    }
  ],
  "performer": [
    { "@type": "Person", "name": "Alessandro Sisti" },
    { "@type": "Organization", "name": "Corpo Bandistico di Riva del Garda" },
    { "@type": "Organization", "name": "Cosplay and Nerd" },
    { "@type": "Organization", "name": "Ludimus" },
    { "@type": "Organization", "name": "Busaplay" }
  ]
};
