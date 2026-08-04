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

  sponsors: [
    { id: 1, name: "Provincia Trento", logo: "/immagini/loghi/Logo_Provincia_Autonoma_Trento.png" },
    { id: 3, name: "Alto Garda Ledro", logo: "/immagini/loghi/Logo_Comunità_Alto_Garda_Ledro.jpg" },
    { id: 4, name: "Comune Riva", logo: "/immagini/loghi/Comune_Riva.png" },
    { id: 10, name: "Cassa Rurale", logo: "/immagini/loghi/cassa_rurale_vallagarina_bcc_logo.jpg" },
    { id: 12, name: "Piano B", logo: "/immagini/loghi/Logo_piano_B.png" },
    { id: 5, name: "Banda Riva", logo: "/immagini/loghi/banda_riva_w.jpg" }
  ],



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
      name: "Corpo Bandistico di Riva del Garda",
      role: "Organizzatrice del Riva Games Festival",
      image: "/immagini/guests/banda_riva/banda_riva_w.jpg",
      description: "Da sempre impegnato nella promozione della musica in città, il Corpo Bandistico porta avanti progetti dedicati al rapporto tra musica, cinema, videogiochi e cultura pop, portando sul palco colonne sonore e grandi temi della cultura contemporanea, coinvolgendo musicisti di diverse generazioni e proponendo iniziative rivolte alla comunità.",
      featured: true,
      showFrontText: true,
    },
    {
      id: "g3",
      name: "Busaplay",
      role: "",
      image: "/immagini/guests/busaplay/LogoBusaplay/PNG/BusaPlay_Logo_3.png",
      description: "Dettagli in arrivo...",
      featured: true,
      showFrontText: false,
    },
    {
      id: "g4",
      name: "Ludimus",
      role: "Robotics Expert",
      image: "/immagini/guests/ludimus.svg",
      description: "Dettagli in arrivo...",
      featured: true,
      showFrontText: false,
    },
    {
      id: "g5",
      name: "Cosplay and Nerd",
      role: "",
      image: "/immagini/guests/cosplay_and_nerd.jpg",
      description: "Dettagli in arrivo...",
      featured: true,
      showFrontText: false,
    },
    
  ],
  schedule: [
    {
      day: "Venerdì 14",
      events: [
        { time: "18:00", title: "Apertura Fiera", location: "Ingresso Principale", indic: "Inizio Serata"},
        { time: "18:00", title: "Area Food", location: "Piazza Cesare Battisti", indic: "Tante delizie tra cui scegliere."  },
        { time: "18:00", title: "Area Market & Espositori", location: "Piazza Cesare Battisti", indic: "Allestiti per tutta la piazza e nel giardino della Rocca."  },
        { time: "18:00", title: "DJ Set", location: "Piazza Cesare Battisti", indic: "Musica dal vivo con DJ Giuspe."  },
        { time: "18:00", title: "Ludoteca con Ludimus e Busaplay", location: "Palco Centrale", indic: "Giochi da tavolo in compagnia." },
        { time: "18:00", title: "TCG con Pauperwave", location: "Palco Centrale", indic: "Magic, pokemon?, e tanto altro."  },
        { time: "23:00", title: "Fine Primo Giorno", location: "Piazza Cesare Battisti", indic: "Chiusura primo giorno della Fiera."  }
      ]
    },
    {
      day: "Sabato 15",
      events: [
        { time: "10:00", title: "Apertura Secondo Giorno", location: "Palco Centrale", indic: "Apertura dei cancelli della Fiera." },
        { time: "10:00", title: "Area Food", location: "Piazza Cesare Battisti", indic: "Tante delizie tra cui scegliere."  },
        { time: "10:00", title: "Area Market & Espositori", location: "Piazza Cesare Battisti", indic: "Allestiti per tutta la piazza e nel giardino della Rocca."  },
        { time: "10:00", title: "DJ Set", location: "Piazza Cesare Battisti", indic: "Musica dal vivo con DJ Giuspe."  },
        { time: "10:00 - 19:00", title: "Ludoteca con Ludimus e Busaplay", location: "Palco Centrale", indic: "Giochi da tavolo in compagnia." },
        { time: "10:00 - 19:00", title: "TCG con Pauperwave", location: "Palco Centrale", indic: "Toreno Commander Magic, 4 turni con premiazione finale: ore 11:00"  },        
        { time: "10:00 - 19:00", title: "Area Gaming con GamersArena", location: "Palco Centrale", indic: "Tornei di Mario Kart e Fifa e Giri nel simulatore F1." },
        { time: "10:00", title: "Mostra Dedicata a PK", location: "Palco Centrale", indic: "Dedicata alla serie PK: meno uno all'alba"  },        
        { time: "14:30 - 19:00", title: "Dentro La Storia", location: "Palco Centrale", indic: "Masterclass di sceneggiatura per fumetti con Alessandro Sisti. Richiesta iscrizione."  },
        { time: "20:00 - 23.00", title: "D&D in notturna", location: "Piazza Cesare Battisti", indic: "Sessione di D&D serale con Busaplay"  },
        { time: "23:00", title: "Fine Secondo Giorno", location: "Piazza Cesare Battisti", indic: "Chiusura secondo giorno della Fiera."  }
      ]
    },
    {
      day: "Domenica 16",
      events: [
        { time: "10:00", title: "Apertura Terzo Giorno", location: "Palco Centrale", indic: "Apertura dei cancelli della Fiera." },
        { time: "10:00 - 17:30", title: "Area Food", location: "", indic: "Tante delizie tra cui scegliere." },
        { time: "10:00", title: "Area Market & Espositori", location: "", indic: "Allestiti per tutta la piazza e nel giardino della Rocca." },
        { time: "10:00 - 17:30", title: "Ludoteca con Ludimus e Busaplay", location: "Area Gaming", indic: "Giochi da tavolo in compagnia." },
        { time: "10:00 - 17:30", title: "TCG con Pouperwave", location: "Palco Centrale", indic: "Tornei Magic: Ore 11:00 e ore 14:00" },
        { time: "10:00 - 17:30", title: "Area Gaming con GamersArena", location: "Padiglione A", indic: "Tornei di Mario Kart e Fifa e Giri nel simulatore F1." },
        { time: "10:00", title: "Mostra Dedicata a PK", location: "Palco Centrale", indic: "Dedicata alla serie PK: meno uno all'alba" },
        { time: "11:00 - 19:00", title: "Dentro La Storia", location: "Palco Centrale", indic: "Masterclass di sceneggiatura per fumetti con Alessandro Sisti. Richiesta iscrizione."  },
        { time: "11:00 - 19:00", title: "Gara Cosplay con Cosplay & Nerd", location: "Piazza Cesare Battisti", indic: "Iscrizioni: ore 11:00 - 14:30.\npre-Judging: ore 14:30-15:30.\nCosplay Contest: ore 16:00.\nPremiazioni: ore 17:30"  },
        { time: "21:00", title: "Movie Night: Japan Fantasy - Evento conclusivo", location: "Rocca", indic: "le più belle colonne sonore di anime e videgiochi suonate dal vivo" },
        { time: "23:00", title: "Fine Fiera", location: "Piazza Cesare Battisti", indic: "Chiusura Fiera e rigraziamenti"  }
      ]
    }
  ]
  
};
