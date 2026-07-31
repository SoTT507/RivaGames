"use client";

import { useState } from "react";
import { eventData } from "@/data/eventInfo";

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(eventData.schedule[0].day);
  const currentSchedule = eventData.schedule.find((s) => s.day === activeDay);

  return (
    <div className="w-full">
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
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:bg-slate-800/80 transition-colors"
          >
            <div className="flex-shrink-0 w-24 text-2xl font-black text-cyan-400">
              {event.time}
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-slate-100 mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-slate-400 flex items-center gap-2">
                <span className="text-fuchsia-500">📍</span> {event.location}
              </p>
            </div>
          </div>
        ))}
        {currentSchedule?.events.length === 0 && (
          <div className="text-center text-slate-500 py-10">
            Nessun evento in programma per questa giornata.
          </div>
        )}
      </div>
    </div>
  );
}
