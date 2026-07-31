export const eventData = {
  hero: {
    title: "Riva Games Festival 2026",
    subtitle: "Tre giorni di cultura pop, esposizioni, musica, buona compagnia e molto altro.",
    dates: "14 - 16 Novembre 2026",
    location: "Riva del Garda, Centro città",
  },
  tickets: {
    description: "I biglietti sono acquistabili esclusivamente presso le casse in loco. Prezzi soggetti a fluttuazioni quantistiche.",
    prices: [
      { type: "Giornaliero Intero", price: "N.A." },
      { type: "Abbonamento 3 Giorni", price: "N.A." },
      { type: "Ridotto (Cosplayer/Under 12)", price: "N.A." },
    ]
  },
  guests: [
    {
      id: "g1",
      name: "Tia Ray",
      role: "Illustratrice & Concept Artist",
      image: "/guests/tiaray.jpg",
      description: "Famosa per il suo lavoro su videogames AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.",
      featured: true
    },
    {
      id: "g2",
      name: "Bill Cancello",
      role: "Top Windows Enjoyier",
      image: "/guests/mark.jpg",
      description: "Creatore di.... ehmmm.... dii... mi sono dimenticato.",
      featured: true
    },
    {
      id: "g3",
      name: "Dr. Eggman",
      role: "Robotics Expert",
      image: "/guests/eggman.jpg",
      description: "In cerca di smeraldi del caos. Si prega di non dargli confidenza.",
      featured: true
    }
  ],
  schedule: [
    {
      day: "Venerdì 14",
      events: [
        { time: "10:00", title: "Apertura Fiera", location: "Ingresso Principale" },
        { time: "15:00", title: "Panel: Il futuro del Retro-gaming", location: "Sala Main" }
      ]
    },
    {
      day: "Sabato 15",
      events: [
        { time: "11:00", title: "Gara Cosplay Ufficiale", location: "Palco Centrale" },
        { time: "14:30", title: "Workshop", location: "Sala Workshop B" },
        { time: "18:00", title: "Concerto Chiptune: I Bit-Busters", location: "Area Esterna" }
      ]
    },
    {
      day: "Domenica 16",
      events: [
        { time: "09:30", title: "Apertura Stand e Area Indie", location: "Padiglione A" },
        { time: "14:00", title: "Torneo di Smash Bros (Premio: 1 Milione di stuzzicadenti)", location: "Area Gaming" },
        { time: "19:00", title: "Chiusura Evento e Saluti", location: "Palco Centrale" }
      ]
    }
  ]
};
