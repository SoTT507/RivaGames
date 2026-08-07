import { time } from "node:console";
import { title } from "node:process";

export type EventReference = {
  title: string;
  url?: string;
  targetEventId?: string;   
};

export type ScheduleEvent = {
  id?: string;
  time: string;
  title: string;
  location: string;
  indic: string;
  description?: string;
  references?: EventReference[];
};

export const eventData = {
  hero: {
    title: "Riva Games Festival 2026",
    subtitle: "",
    dates: "14 - 16 Agosto 2026",
    location: "Piazza Cesare Battisti, R.d.G.",
  },
  highlightedEvents: [
      "torneo-pauper",
      "masterclass-sisti",
      "gara-cosplay",
      "movie-night-japan"
    ],
    tickets: [
        {
          eventTitle: "Movie Night: Japan Fantasy",
          description: "Evento conclusivo. I posti sono limitati, si consiglia la prevendita online.",
          prices: [
            { 
              type: "Biglietto intero", 
              price: "15,00 €", 
              onlineLink: "", 
              onSite: true 
            },
            { 
              type: "Biglietto ridotto under 18", 
              price: "10,00 €", 
              onlineLink: "", 
              onSite: true 
            },
            { 
              type: "Soci Cassa Rurale Altogarda", 
              price: "1,00 €", 
              onSite: true 
            },
          ]
        },
        {
          eventTitle: "Dentro La Storia - Masterclass",
          description: "Masterclass di sceneggiatura con Alessandro Sisti. Accesso consentito solo con prenotazione tramite form (vedi specifica evento).",
          prices: [
            { 
              type: "Iscrizione Masterclass", 
              price: "15,00 €", 
              onlineLink: "#", 
              onSite: true // Solo online per gestire i posti limitati
            }
          ]
        }
      ],

  

  sponsors: [
    { id: 1, name: "Provincia Trento", logo: "/immagini/loghi/Logo_Provincia_Autonoma_Trento.png" },
    { id: 3, name: "Alto Garda Ledro", logo: "/immagini/loghi/Logo_Comunità_Alto_Garda_Ledro.jpg" },
    { id: 4, name: "Comune Riva", logo: "/immagini/loghi/Comune_Riva.png" },
    { id: 5, name: "Banda Riva", logo: "/immagini/loghi/banda_riva_w.jpg" },
    { id: 12, name: "Piano B", logo: "/immagini/loghi/Logo_piano_B.png" },
    { id: 10, name: "Cassa Rurale", logo: "/immagini/loghi/cassa_rurale_1.png" }
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
      description: "Associazione trentina atta a promuovere la socialità e la cultura attraverso giochi da tavolo, giochi di ruolo ed eventi ludici.",
      featured: true,
      showFrontText: false,
    },
    {
      id: "g4",
      name: "Ludimus",
      role: "Robotics Expert",
      image: "/immagini/guests/ludimus.svg",
      description: "Associazione trentina dedicata alla gestione di eventi culturali tramite giochi da tavolo ed escape room. Vanta un catalogo di oltre 300 giochi da tavolo.",
      featured: true,
      showFrontText: false,
    },
    {
      id: "g5",
      name: "Cosplay and Nerd",
      role: "",
      image: "/immagini/guests/cosplay_and_nerd.jpg",
      description: "CosplayAndNerd è una comunity che ha trasformato il proprio amore per il mondo cosplay e nerd in un'attività creativa e coinvolgente. Fondata per dar vita ad eventi straordinari, è ormai da 10 anni un punto di riferimento per chi cerca esperienze uniche e indimenticabili",
      featured: true,
      showFrontText: false,
    },
    
  ],
  schedule: [
    {
      day: "Venerdì 14",
      events: [
        { time: "18:00", title: "Apertura Fiera", location: "Ingresso Principale", indic: "Inizio Serata"},
        { time: "18:00 - 23:00", title: "Ludoteca con Ludimus, Busaplay e Othello", location: "Piazza Cesare Battisti", indic: "Ludoteca e giochi da tavolo in compagnia, organizzato da Ludimus, Busaplay e Othello." },
        { time: "18:00 - 23:00", title: "Magic e TCG con LabTale", location: "Piazza Cesare Battisti", indic: "Tavoli dimostrativi e prova gratuita di numerosi giochi di carte.",
          references: [
            { title: "Vedi Torneo di Sabato", targetEventId: "torneo-pauper" },
          ],
        },
        { time: "18:00 - 23:00", title: "DJ Set con DJ Giuspe", location: "Piazza Cesare Battisti", indic: "DJ Set in Piazza Cesare Battisti con DJ Giuspe."  },
        { time: "23:00", title: "Fine Primo Giorno", location: "Piazza Cesare Battisti", indic: "Chiusura primo giorno della Fiera."}
      ]
    },
    {
      day: "Sabato 15",
      events: [
        { time: "10:00", title: "Apertura Secondo Giorno", location: "Cortile interno della Rocca", indic: "Apertura dei cancelli della Fiera.",
          references: [],
        },
        { time: "10:00", title: "Mostra Dedicata a PK", location: "Biblioteca Civica", indic: "Dedicata alla serie di Paperinik arriva la mostra \"PK - Meno uno all'alba\"",
          references: [],
        },
        { time: "10:00 - 19:00", title: "Area Gaming con GamersArena", location: "Piazza Cesare Battisti", 
          indic: "• Tornei di Mario Kart \n• Tornei di Fifa \n• Hotlap al simulatore F1.",
          references: [
            { title: "Iscrizione Torneo Mario Kart", url: "#" },
            { title: "Iscrizione Torneo Fifa", url: "#" },
          ],
        },
        { time: "10:00 - 19:00", title: "Ludoteca con Ludimus, Busaplay e Othello", location: "Piazza Cesare Battisti", 
          indic: "Ludoteca e giochi da tavolo in compagnia, organizzato da Ludimus, Busaplay e Othello.",
          references: [],
        },
        { time: "10:00 - 17:30", title: "Magic e TCG con LabTale", location: "Cortile interno della Rocca", 
          indic: "• Magic - Toreno Pauper con premiazione - Ore 11:00 \n• Tavoli dimostrativi \n• Prova gratuita di numerosi giochi di carte",
          references: [
            { title: "Vedi Torneo Pauper", targetEventId: "torneo-pauper" },
          ],
        },
        { id: "torneo-pauper", time: "11:00", title: "Torneo Commander - Magic", location: "Piazza Cesare Battisti", 
          indic: "Torneo Pauper con premiazione - ore 11:00",
          references: [
            { title: "Iscrizione Torneo Pauper", url: "#" },
          ],
        },
        { 
          id: "masterclass-sisti",
          time: "14:30 - 18:00", title: "Dentro La Storia", location: "Sala museo MAG", 
          indic: "Masterclass di sceneggiatura per fumetti con Alessandro Sisti. Iscriviti Subito!!",
          references: [
            { title: "Iscrizione Masterclass", url: "https://forms.gle/6U5VB7qsxRLmAsZY6" },
          ],
        },
        { time: "18:00 - 21:00", title: "DJ Set con DJ Giuspe", location: "Piazza Cesare Battisti", 
          indic: "DJ Set in Piazza Cesare Battisti con DJ Giuspe.",
          references: [],
        },
        { time: "20:00 - 23.00", title: "Sessione D&D notturna", location: "Piazza Cesare Battisti", 
          indic: "Possibilità di effettuare Oneshot della durata presvista di un paio d'ore con alcuni dei master di BusaPlay",
          references: [],
        },
        { time: "23:00", title: "Fine Secondo Giorno", location: "Piazza Cesare Battisti", 
          indic: "Chiusura secondo giorno della Fiera.",
          references: [],
        }
      ]
    },
    {
      day: "Domenica 16",
      events: [
        { time: "10:00", title: "Apertura Terzo Giorno", location: "Cortile interno della Rocca", indic: "Apertura dei cancelli della Fiera." },
        { time: "10:00 - 17:30", title: "Area Food", location: "", indic: "Tante delizie tra cui scegliere." },
        { time: "10:00", title: "Area Market & Espositori", location: "", indic: "Allestiti per tutta la piazza e nel giardino della Rocca." },
        { time: "10:00 - 17:30", title: "Ludoteca con Ludimus e Busaplay", location: "Area Gaming", indic: "Giochi da tavolo in compagnia." },
        { time: "10:00 - 17:30", title: "TCG con Pouperwave", location: "Cortile interno della Rocca", indic: "Tornei Magic: Ore 11:00 e ore 14:00" },
        { time: "10:00 - 17:30", title: "Area Gaming con GamersArena", location: "Padiglione A", indic: "Tornei di Mario Kart e Fifa e Giri nel simulatore F1." },
        { time: "10:00", title: "Mostra Dedicata a PK", location: "Cortile interno della Rocca", indic: "Dedicata alla serie di Paperinik arriva la mostra \"PK - Meno uno all'alba\"" },
        { time: "11:00 - 14:30", title: "Intervista ad Alessandro Sisti", location: "Biblioteca Civica", indic: "Intervista allo sceneggiatore italiano Alessandro Sisti, l'intervistatore sarà Giacomo Panozzo"},
        { time: "14:30 - 18:00", title: "Dentro La Storia", location: "Sala museo MAG", indic: "Masterclass di sceneggiatura per fumetti con Alessandro Sisti. Iscriviti Subito!!"  },
        {
          id: "gara-cosplay",
          time: "16:00 - 19:00", title: "Gara Cosplay diretta da CosplayAndNerd", location: "Piazza Cesare Battisti", indic: "Con la possibilità di incontrare e chiaccherare con grandi cosplayer.\nIscrizioni: ore 11:00 - 14:30.\npre-Judging: ore 14:30-15:30.\nCosplay Contest: ore 16:00.\nPremiazioni: ore 17:30"  },
        { 
          id: "movie-night-japan",
          time: "21:00", title: "Movie Night: Japan Fantasy", location: "Rocca", indic: "le più belle colonne sonore di anime e videgiochi suonate dal vivo. Acquista subito il biglietto!" },
        { time: "23:00", title: "Fine Fiera", location: "Piazza Cesare Battisti", indic: "Chiusura Fiera e rigraziamenti"  }
      ]
    }
  ]
  
};
