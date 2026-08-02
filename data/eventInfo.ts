export const eventData = {
  hero: {
    title: "Riva Games Festival 2026",
    subtitle: "",
    dates: "14 - 16 Agosto 2026",
    location: "Riva del Garda, Piazza Battisti",
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
        { time: "18:00", title: "Apertura Fiera", location: "Ingresso Principale" },
        { time: "18:00", title: "Area Food", location: "Piazza Cesare Battisti"  },
        { time: "18:00", title: "Area Market & Espositori", location: "Piazza Cesare Battisti"  },
        { time: "18:00", title: "Ludoteca con Ludimus e Busplay", location: "Palco Centrale" },
        { time: "18:00", title: "Magic e TCG con Pauperwave", location: "Palco Centrale"  },
        { time: "18:00", title: "DJ Set", location: "Piazza Cesare Battisti"  },
        { time: "23:00", title: "Fine Primo Giorno", location: "Piazza Cesare Battisti"  }
      ]
    },
    {
      day: "Sabato 15",
      events: [
        { time: "10:00", title: "Apertura Secondo Giorno", location: "Palco Centrale" },
        { time: "10:00", title: "Area Food", location: "Piazza Cesare Battisti"  },
        { time: "10:00", title: "Area Market & Espositori", location: "Piazza Cesare Battisti"  },
        { time: "10:00", title: "Mostra Dedicara a PK - Paperinik New Adventures", location: "Palco Centrale"  },
        { time: "10:00", title: "Ludoteca con Ludimus e Busplay", location: "Palco Centrale" },
        { time: "10:00", title: "Magic e TCG con Pauperwave", location: "Palco Centrale"  },
        { time: "10:00", title: "DJ Set", location: "Piazza Cesare Battisti"  },
        { time: "10:00 - 19:00", title: "Area Gaming con GamersArena", location: "Palco Centrale" },
        { time: "15:00 - 19:00", title: "Workshop con Alessandro Sisti", location: "Palco Centrale"  },
        { time: "23:00", title: "Fine Secondo Giorno", location: "Piazza Cesare Battisti"  }
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
