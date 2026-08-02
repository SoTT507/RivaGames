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
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FECB33] to-[#E86D43]">
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
                ? "bg-[#E86D43] text-white shadow-[0_0_20px_rgba(232,109,67,0.5)]"
                : "bg-[#372020] text-gray-300 hover:bg-[#418080] hover:text-white border border-[#418080]"
            }`}
          >
            {scheduleDay.day}
          </button>
        ))}
      </div>
      
      {/* Lista Eventi */}
      <div className="max-w-4xl mx-auto space-y-4">
        {currentSchedule?.events.map((event, index) => (
          <div
            key={index}
            onClick={() => setSelectedEvent(event)}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 bg-[#372020]/80 border border-[#418080] p-6 rounded-2xl hover:bg-[#418080] transition-colors cursor-pointer"
          >
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-white mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-gray-300 flex items-center gap-2">
                <span className="text-[#E86D43]">📍</span> {event.location}
              </p>
            </div>
            
            <div className="flex-shrink-0 text-2xl font-black text-[#FECB33] text-left sm:text-right mt-2 sm:mt-0">
              {event.time}
            </div>
          </div>
        ))}
        {currentSchedule?.events.length === 0 && (
          <div className="text-center text-gray-400 py-10">
            Nessun evento in programma per questa giornata.
          </div>
        )}
      </div>

      {/* Modale */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#3D4D4D]/80 backdrop-blur-md p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="bg-[#372020] border border-[#E86D43] p-8 rounded-3xl max-w-lg w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors text-2xl"
            >
              ✕
            </button>
            
            <h3 className="text-3xl font-bold text-white mb-1 pr-6">{selectedEvent.title}</h3>
            <p className="text-xl font-black text-[#FECB33] mb-6">{selectedEvent.time}</p>
            
            <div className="text-gray-200 leading-relaxed">
              {selectedEvent.description ? (
                <p>{selectedEvent.description}</p>
              ) : (
                <p className="italic text-gray-400">Maggiori dettagli in arrivo...</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
