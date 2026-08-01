"use client";

import { useState } from "react";
import { eventData } from "@/data/eventInfo";

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(eventData.schedule[0].day);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  const currentSchedule = eventData.schedule.find((s) => s.day === activeDay);

  return (
    <div className="w-full relative">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">
          Programma Eventi
        </span>
      </h2>
      
      {/* Tabs per i Giorni */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {eventData.schedule.map((scheduleDay) => (
          <button
            key={scheduleDay.day}
            onClick={() => setActiveDay(scheduleDay.day)}
            className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
              activeDay === scheduleDay.day
                ? "bg-fuchsia-600 text-white shadow-[0_0_20px_rgba(192,38,211,0.5)]"
                : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800"
            }`}
          >
            {scheduleDay.day}
          </button>
        ))}
      </div>
      
      {/* Lista Eventi del Giorno Selezionato */}
      <div className="max-w-4xl mx-auto space-y-4">
        {currentSchedule?.events.map((event, index) => (
          <div
            key={index}
            onClick={() => setSelectedEvent(event)}
            // Aggiunto flex-col per mobile e sm:flex-row per schermi a partire da 640px
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:bg-slate-800/80 transition-colors cursor-pointer"
          >
            {/* Blocco Titolo e Luogo */}
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-slate-100 mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-slate-400 flex items-center gap-2">
                <span className="text-fuchsia-500">📍</span> {event.location}
              </p>
            </div>
            
            {/* Blocco Orario: allineato a sinistra su mobile, a destra da sm in poi */}
            <div className="flex-shrink-0 text-2xl font-black text-cyan-400 text-left sm:text-right mt-2 sm:mt-0">
              {event.time}
            </div>
          </div>
        ))}
        {currentSchedule?.events.length === 0 && (
          <div className="text-center text-slate-500 py-10">
            Nessun evento in programma per questa giornata.
          </div>
        )}
      </div>

      {/* Modale Evento a tutto schermo con sfocatura */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-md p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 p-8 rounded-3xl max-w-lg w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors"
              aria-label="Chiudi modale"
            >
              ✕
            </button>
            
            <h3 className="text-3xl font-bold text-white mb-1 pr-6">{selectedEvent.title}</h3>
            <p className="text-xl font-black text-cyan-400 mb-6">{selectedEvent.time}</p>
            
            <div className="text-slate-300 leading-relaxed">
              {selectedEvent.description ? (
                <p>{selectedEvent.description}</p>
              ) : (
                <p className="italic text-slate-500">Maggiori dettagli in arrivo...</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
