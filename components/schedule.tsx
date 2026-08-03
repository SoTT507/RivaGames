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
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-yellow to-brand-accent-orange">
          Programma Eventi
        </span>
      </h2>
      
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {eventData.schedule.map((scheduleDay) => (
          <button
            key={scheduleDay.day}
            onClick={() => setActiveDay(scheduleDay.day)}
            className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
              activeDay === scheduleDay.day
                ? "bg-brand-accent-orange text-brand-text shadow-[0_0_20px_rgba(232,109,67,0.5)] border border-brand-accent-orange"
                : "bg-brand-surface text-brand-text/70 hover:bg-brand-border hover:text-brand-text border border-brand-border"
            }`}
          >
            {scheduleDay.day}
          </button>
        ))}
      </div>

      {/* Testo "Clicca per info" centrato */}
      <div className="flex justify-center w-full mb-8">
        <p className="text-brand-text/70 text-xs md:text-sm flex items-center gap-2 opacity-70 transition-opacity">
          <span>Clicca per info</span>
          <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-4">
        {currentSchedule?.events.map((event, index) => (
          <div
            key={index}
            onClick={() => setSelectedEvent(event)}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 bg-brand-surface/80 border border-brand-border p-6 rounded-2xl hover:bg-brand-border transition-colors cursor-pointer"
          >
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-brand-text mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-brand-text/70 flex items-center gap-2">
                <span className="text-brand-accent-orange">📍</span> {event.location}
              </p>
            </div>
            
            <div className="flex-shrink-0 text-2xl font-black text-brand-accent-yellow text-left sm:text-right mt-2 sm:mt-0">
              {event.time}
            </div>
          </div>
        ))}
        {currentSchedule?.events.length === 0 && (
          <div className="text-center text-brand-text/50 py-10">
            Nessun evento in programma per questa giornata.
          </div>
        )}
      </div>

      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/80 backdrop-blur-md p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="bg-brand-surface border border-brand-accent-orange p-8 rounded-3xl max-w-lg w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-5 right-5 text-brand-text/50 hover:text-brand-text transition-colors text-2xl"
            >
              ✕
            </button>
            
            <h3 className="text-3xl font-bold text-brand-text mb-1 pr-6">{selectedEvent.title}</h3>
            <p className="text-xl font-black text-brand-accent-yellow mb-6">{selectedEvent.time}</p>
            
            <div className="text-brand-text/90 leading-relaxed">
              {selectedEvent.description ? (
                <p>{selectedEvent.description}</p>
              ) : (
                <p className="italic text-brand-text/50">Maggiori dettagli in arrivo...</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
