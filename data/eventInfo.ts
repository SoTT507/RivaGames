export const eventData = {
  hero: {
    title: "Riva Games Festival 2026",
    subtitle: "",
    dates: "14 - 16 Agosto 2026",
    location: "Piazza Cesare Battisti, R.d.G.",
  },
  tickets: {
    description: "Solo per Movie Night: Japan Fantasy - Evento conclusivo",
    prices: [
      { type: "Biglietto intero", price: "15,00 €" },
      { type: "Biglietto ridotto under 18", price: "10,00 €" },
      { type: "Biglietto soci e correntisti cassa rurale altogarda rovereto", price: "1,00 €" },
    ]
  },
  guests: [
    {
      id: "g1",
      name: "Alessandro Sisti",
      role: "Sceneggiatore & Co-creatore di PKNA",
      image: "/immagini/guests/alessandrosisti.webp",
      description: "Alessandro Sisti è uno storico sceneggiatore, giornalista e attualmente professore dell'Academy of Visual Arts and New Media italiano. Firmatore di innumerevoli storie nel mondo delle vignette, celebre per aver contribuito a ridefinire il fumetto Disney in Italia come co-creatore di Paperinik New Adventures e ha contribuito al successo di testate di risonanza internazionale come W.I.T.C.H. e MM. La sua carriera quarantennale spazia dall'intrattenimento per ragazzi alla divulgazione editoriale",
      featured: true
    },
    {
      id: "g2",
      name: "Busaplay",
      role: "",
      image: "/immagini/guests/busaplay/LogoBusaplay/PNG/BusaPlay_Logo_3.png",
      description: "Dettagli in arrivo...",
      featured: true,
      showFrontText: false,
    },
    {
      id: "g3",
      name: "Ludimus",
      role: "Robotics Expert",
      image: "/immagini/guests/ludimus.svg",
      description: "Dettagli in arrivo...",
      featured: true,
      showFrontText: false,
    },
    {
      id: "g4",
      name: "Cosplay and Nerd",
      role: "",
      image: "/immagini/guests/cosplay_and_nerd.jpg",
      description: "Dettagli in arrivo...",
      featured: true,
      showFrontText: false,
    },
    {
      id: "g5",
      name: "Banda Riva ",
      role: "Organizzatrice del Riva Games Festival",
      image: "",
      description: "Dettagli in arrivo...",
      featured: true,
      showFrontText: false,
    },
  ],
  schedule: [
    {
      day: "Venerdì 14",
      events: [
        { time: "18:00", title: "Apertura Fiera", location: "Ingresso Principale" },
        { time: "18:00", title: "Area Food", location: "Piazza Cesare Battisti"  },
        { time: "18:00", title: "Area Market & Espositori", location: "Piazza Cesare Battisti"  },
        { time: "18:00", title: "Ludoteca con Ludimus e Busaplay", location: "Palco Centrale" },
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
        { time: "10:00", title: "Ludoteca con Ludimus e Busaplay", location: "Palco Centrale" },
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
        { time: "10:00", title: "Apertura Terzo Giorno", location: "Palco Centrale" },
        { time: "10:00 - 23:00", title: "Area Market & Espositori", location: "" },
        { time: "10:00 - 17:30", title: "Area Food", location: "" },
        { time: "10:00 - 17:30", title: "Area Gaming con GamersArena", location: "Padiglione A" },
        { time: "10:00", title: "Ludoteca con Ludimus e Busaplay", location: "Area Gaming" },
        { time: "10:00", title: "Magic e TCG con Pouperwave", location: "Palco Centrale" },
        { time: "10:30", title: "Intervista & Talk con Alessandro Sisti", location: "Biblioteca Civica" },
        { time: "15:00 - 19:00", title: "Paperninik New Adventures - Mostra dedicata a PK", location: "Biblioteca Civica" },
        { time: "21:00", title: "Movie Night: Japan Fantasy - Evento conclusivo", location: "Rocca" },
        { time: "23:00", title: "Fine Fiera", location: "Piazza Cesare Battisti"  }
      ]
    }
  ]
};
