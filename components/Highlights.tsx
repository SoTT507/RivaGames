// components/Highlights.tsx
"use client";
import { useState } from "react";
import { eventData, ScheduleEvent } from "@/data/eventInfo";

// Estendiamo il tipo per includere il giorno, utile per il popup
type HighlightEvent = ScheduleEvent & { day: string };

export default function Highlights() {
  const [selectedEvent, setSelectedEvent] = useState<HighlightEvent | null>(
    null,
  );

  // 1. Estraiamo gli eventi in rilevanza recuperandoli tramite ID
  const highlightedEvents = eventData.highlightedEvents
    .map((id) => {
      for (const scheduleDay of eventData.schedule) {
        const foundEvent = scheduleDay.events.find((e) => e.id === id);
        if (foundEvent) {
          return { ...foundEvent, day: scheduleDay.day };
        }
      }
      return null;
    })
    .filter(Boolean) as HighlightEvent[];

  // Se non ci sono eventi in evidenza, non renderizziamo nulla
  if (highlightedEvents.length === 0) return null;

  return (
    <>
      {/* BANDA EVENTI IN RILEVANZA SCORREVOLE */}
      <section className="relative overflow-hidden py-4 border-b border-brand-dark shadow-[0_4px_20px_rgba(232,109,67,0.2)] bg-gradient-to-r from-brand-accent-yellow via-brand-accent-orange to-brand-accent-yellow bg-[length:200%_auto] animate-gradient-x">
        {/* Cambiato w-[200%] con w-max per calcolare lo spazio reale occupato dal testo */}
        <div className="flex w-max animate-marquee-ltr hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            /* 
                    Aggiunto flex-shrink-0 per non schiacciare il testo.
                    Aggiunto gap-16 md:gap-24 (circa 4-6 rem) per separare NETTAMENTE gli eventi.
                    Aggiunto px-8 md:px-12 per mantenere lo stesso spazio anche tra la fine del primo loop e l'inizio del secondo.
                  */
            <div
              key={i}
              className="flex flex-shrink-0 items-center gap-16 md:gap-24 px-8 md:px-12 whitespace-nowrap"
            >
              {highlightedEvents.map((ev, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedEvent(ev)}
                  // Aumentato anche il gap interno (gap-4) per far respirare le info dell'evento stesso
                  className="flex items-center gap-4 text-brand-dark font-black tracking-widest uppercase text-sm sm:text-base md:text-lg hover:scale-105 transition-transform cursor-pointer"
                  title={`Scopri di più su ${ev.title}`}
                >
                  <span className="text-xl md:text-2xl">🔥</span>
                  <span>{ev.day}</span>
                  <span className="opacity-60">•</span>
                  <span>{ev.title}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* MODAL / POPUP EVENTO (Indipendente per la banda) */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/80 backdrop-blur-md p-4"
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
                {selectedEvent.day} - {selectedEvent.time}
              </p>

              <div className="text-brand-text/90 leading-relaxed text-sm md:text-base">
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

            {selectedEvent.references &&
              selectedEvent.references.length > 0 && (
                <div className="mt-4 pt-4 border-t border-brand-border/50 shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {selectedEvent.references.map((ref, idx) => {
                      if (ref.targetEventId) {
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              let target = null;
                              for (const day of eventData.schedule) {
                                const found = day.events.find(
                                  (e) => e.id === ref.targetEventId,
                                );
                                if (found) {
                                  target = { ...found, day: day.day };
                                  break;
                                }
                              }
                              if (target) {
                                setSelectedEvent(target as HighlightEvent);
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
    </>
  );
}
