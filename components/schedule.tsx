"use client";
import { useState } from "react";
import { eventData, type ScheduleEvent, type EventReference } from "@/data/eventInfo";
import Highlights from "@/components/Highlights";

export default function Schedule() {
  // All'avvio i giorni sono CHIUSI
  const [activeDay, setActiveDay] = useState(eventData.schedule[0].day);
  const [selectedEvent, setSelectedEvent] = useState<ScheduleEvent | null>(null);
  const [isDayOpen, setIsDayOpen] = useState(false);
  const currentSchedule = eventData.schedule.find((s) => s.day === activeDay);

  // Funzione toggle
  const toggleDay = (day: string) => {
    if (activeDay === day && isDayOpen) {
      setIsDayOpen(false);
    } else {
      setActiveDay(day);
      setIsDayOpen(true);
    }
  };

  return (
    <div className="w-full relative">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-yellow to-brand-accent-orange">
          Programma Eventi
        </span>
      </h2>

      {/* BOTTONI GIORNI - SENZA ICONE */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {eventData.schedule.map((scheduleDay) => {
          const isActive = activeDay === scheduleDay.day && isDayOpen;
          return (
            <button
              key={scheduleDay.day}
              onClick={() => toggleDay(scheduleDay.day)}
              className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                isActive
                  ? "bg-brand-accent-orange text-brand-text shadow-[0_0_20px_rgba(232,109,67,0.5)] border border-brand-accent-orange"
                  : "bg-brand-surface text-brand-text/70 hover:bg-brand-border hover:text-brand-text border border-brand-border"
              }`}
            >
              {scheduleDay.day}
            </button>
          );
        })}
      </div>

      {/* Testo "Clicca per info" - mostrato solo se i giorni sono aperti */}
      {isDayOpen && currentSchedule && currentSchedule.events.length > 0 && (
        <div className="flex justify-center w-full mb-8">
          <p className="text-brand-text/70 text-xs md:text-sm flex items-center gap-2 opacity-70 transition-opacity">
            <span>Clicca per info</span>
            <svg
              className="w-3 h-3 md:w-4 md:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
          </p>
        </div>
      )}

      {/* LISTA EVENTI - visibile solo se isDayOpen è true */}
      {isDayOpen && currentSchedule && (
        <div className="max-w-4xl mx-auto space-y-4">
          {currentSchedule.events.map((event, index) => (
            <div
              key={index}
              onClick={() => setSelectedEvent(event)}
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 border border-brand-border p-6 rounded-2xl hover:border-brand-accent-orange transition-colors cursor-pointer overflow-hidden shadow-sm"
            >
              {/* SFONDI */}
              <div className="absolute inset-0 bg-brand-surface z-0 transition-colors" />
              <div className="absolute inset-0 w-full h-full bg-[linear-gradient(285deg,var(--color-brand-dark)_30%,var(--color-brand-surface)_70%)] z-0 opacity-95 group-hover:opacity-100 transition-opacity" />

              {/* CONTENUTO */}
              <div className="flex-grow relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-1 drop-shadow-md">
                  {event.title}
                </h3>
                <p className="text-sm text-brand-text/70 flex items-center gap-2">
                  <span className="text-brand-accent-orange">📍</span>{" "}
                  {event.location}
                </p>
              </div>

              {/* ORARIO */}
              <div className="flex-shrink-0 text-2xl font-black text-brand-accent-yellow text-left sm:text-right mt-2 sm:mt-0 relative z-10">
                {event.time}
              </div>
            </div>
          ))}
          {currentSchedule.events.length === 0 && (
            <div className="text-center text-brand-text/50 py-10">
              Nessun evento in programma per questa giornata.
            </div>
          )}
        </div>
      )}

      {/* Messaggio quando i giorni sono chiusi */}
      {!isDayOpen && (
        <div className="text-center text-brand-text/40 py-10">
          <p className="text-lg">Clicca su un giorno per vederne gli eventi</p>
        </div>
      )}

      {/* MODAL / POPUP EVENTO */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/80 backdrop-blur-md p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-brand-surface border border-brand-accent-orange p-6 sm:p-8 rounded-[2.5rem] md:rounded-3xl w-[92vw] h-[92vh] max-w-sm md:max-w-2xl lg:max-w-3xl md:h-[85vh] shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-5 md:top-6 md:right-6 text-brand-text/50 hover:text-brand-text transition-colors text-3xl font-black z-10 leading-none"
              aria-label="Chiudi popup"
            >
              &times;
            </button>

            <div className="flex-1 overflow-y-auto pr-2 mt-4 md:mt-0">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-text mb-1 pr-6">
                {selectedEvent.title}
              </h3>
              <p className="text-xl font-black text-brand-accent-yellow mb-6">
                {activeDay} | {selectedEvent.time}
              </p>

              <div className="text-brand-text/90 leading-loose text-base md:text-lg lg:text-xl mt-4">
                {selectedEvent.description ? (
                  <p>{selectedEvent.description}</p>
                ) : (
                  <p
                    className="italic text-brand-text/50"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {selectedEvent.indic}
                  </p>
                )}
              </div>
            </div>

            {selectedEvent.references && selectedEvent.references.length > 0 && (
              <div className="mt-4 pt-4 border-t border-brand-border/50 shrink-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {selectedEvent.references.map((ref: EventReference, idx: number) => {
                    if (ref.targetEventId) {
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            let target: ScheduleEvent | null = null;
                            for (const day of eventData.schedule) {
                              const found = day.events.find(
                                (e: ScheduleEvent) => e.id === ref.targetEventId,
                              );
                              if (found) {
                                target = found;
                                setActiveDay(day.day);
                                setIsDayOpen(true);
                                break;
                              }
                            }
                            if (target) {
                              setSelectedEvent(target);
                            }
                          }}
                          className="flex items-center justify-center bg-brand-accent-orange text-brand-dark py-3 px-4 rounded-xl font-bold hover:bg-brand-accent-yellow transition-colors shadow-md text-sm md:text-base text-center w-full"
                        >
                          {ref.title}
                        </button>
                      );
                    }

                    if (ref.url) {
                      const isExternal = ref.url.startsWith("http");
                      return (
                        <a
                          key={idx}
                          href={ref.url}
                          target={isExternal ? "_blank" : "_self"}
                          rel={isExternal ? "noopener noreferrer" : ""}
                          className="flex items-center justify-center bg-brand-accent-orange text-brand-dark py-3 px-4 rounded-xl font-bold hover:bg-brand-accent-yellow transition-colors shadow-md text-sm md:text-base text-center w-full"
                        >
                          {ref.title}
                        </a>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}