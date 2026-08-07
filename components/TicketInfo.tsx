// components/TicketInfo.tsx
import { TicketCategory } from "@/data/eventInfo";

type TicketProps = {
  data: TicketCategory[]; // Ora accetta l'array di eventi a pagamento
};

export default function TicketInfo({ data }: TicketProps) {
  // Se non ci sono biglietti, non mostriamo l'intera sezione
  if (!data || data.length === 0) return null;

  return (
    <div className="text-center w-full">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-brand-text">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-yellow to-brand-accent-orange">
          Biglietteria
        </span>
      </h2>

      <div className="flex flex-col gap-16 md:gap-24 max-w-6xl mx-auto">
        {data.map((eventTickets, eventIdx) => (
          <div key={eventIdx} className="flex flex-col items-center">
            {/* Titolo e Descrizione dello specifico evento a pagamento */}
            <div className="mb-10 text-center max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-text mb-4">
                {eventTickets.eventTitle}
              </h3>

              {eventTickets.description && (
                <div className="inline-block bg-brand-accent-yellow/10 border border-brand-accent-yellow/50 text-brand-accent-yellow px-6 py-4 rounded-xl shadow-sm text-sm md:text-base">
                  <strong>Info:</strong> {eventTickets.description}
                </div>
              )}
            </div>

            {/* Griglia Biglietti per questo evento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center">
              {eventTickets.prices.map((ticket, idx) => (
                <div
                  key={idx}
                  className="flex flex-col h-full bg-brand-dark p-6 md:p-8 rounded-2xl border border-brand-border hover:border-brand-accent-orange transition-colors w-full mx-auto"
                >
                  <h4 className="text-base md:text-lg text-brand-text/70 mb-4 flex-grow font-semibold">
                    {ticket.type}
                  </h4>

                  <div className="mt-auto flex flex-col gap-4">
                    <p className="text-4xl md:text-5xl font-black text-brand-accent-yellow">
                      {ticket.price}
                    </p>

                    <div className="flex flex-col gap-2 mt-2">
                      {ticket.onlineLink ? (
                        <a
                          href={ticket.onlineLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full py-3 px-4 rounded-xl font-bold text-brand-dark bg-brand-accent-yellow hover:bg-brand-accent-orange transition-colors shadow-md text-sm md:text-base uppercase tracking-wider text-center"
                        >
                          Acquista Online
                        </a>
                      ) : (
                        <div className="block w-full py-3 px-4 rounded-xl font-bold text-brand-text/50 bg-brand-surface border border-brand-border text-sm md:text-base uppercase tracking-wider text-center cursor-default">
                          Solo in Cassa
                        </div>
                      )}

                      {ticket.onSite && (
                        <p className="text-xs md:text-sm text-brand-text/70 font-medium text-center">
                          🎫 Acquistabile {ticket.onlineLink ? "anche " : ""}in
                          loco
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
