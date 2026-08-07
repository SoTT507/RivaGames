import Immagine from "next/image";
import { eventData } from "@/data/eventInfo";
import GuestCard from "@/components/GuestCard";
import TicketInfo from "@/components/TicketInfo";
import Schedule from "@/components/schedule";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark text-brand-text font-sans selection:bg-brand-accent-orange selection:text-brand-text">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <Immagine 
            src="/immagini/illustrazione_locandina_RGF.webp"
            alt="Sfondo evento"
            fill
            className="object-cover"
            sizes="100vw"
            quality={85}
            loading="eager"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2027]/95 via-brand-dark/70 to-[#0F2027]/95 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent-orange/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex justify-center mb-4 sm:mb-6">
            <img
              src="/immagini/logo_nero.png"
              alt={eventData.hero.title}
              className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain drop-shadow-xl"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-brand-text/90 font-medium mb-8 drop-shadow-md">
            {eventData.hero.subtitle}
          </p>
                    
          {/* MODIFICATO: gap-3 su mobile, sm:gap-4 da tablet in su. text-sm su mobile, sm:text-lg da tablet in su */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm sm:text-lg font-semibold">
                      
          {/* MODIFICATO: px-4 py-2 su mobile, sm:px-6 sm:py-3 da tablet in su */}
          <div className="flex items-center gap-2 bg-brand-surface/80 px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-brand-border backdrop-blur-md shadow-lg">
            <span className="text-brand-accent-yellow">📅</span> {eventData.hero.dates}
          </div>
                      
          {/* MODIFICATO: px-4 py-2 su mobile, sm:px-6 sm:py-3 da tablet in su */}
          <div className="flex items-center gap-2 bg-brand-surface/80 px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-brand-border backdrop-blur-md shadow-lg text-center">
            <span className="text-brand-accent-orange">📍</span> {eventData.hero.location}
          </div>            
        </div>
      </div>
      </section>

      <section className="py-4 sm:py-6 px-2 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest mb-2 sm:mb-3 font-semibold">
            I nostri Sponsor
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-4 sm:gap-y-6">
            {eventData.sponsors.map((sponsor) => (
              <div 
                key={sponsor.id}
                className="flex items-center justify-center hover:scale-105 transition-all duration-300"
              >
                <Immagine
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={100}
                  height={50}
                  className="object-contain h-8 sm:h-10 md:h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROGRAMMA */}
      <section className="py-24 px-4 relative bg-brand-dark">
        <div className="max-w-6xl mx-auto">
           <Schedule />
        </div>
      </section>     
     
      {/* 3. BIGLIETTERIA */}
      <section className="py-24 px-4 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto">
          <TicketInfo data={eventData.tickets} />
        </div>
      </section> 

      {/* 4. OSPITI */}
      <section className="py-24 px-4 relative bg-brand-surface border-t border-brand-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-brand-text">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-yellow to-brand-accent-orange">
              Featuring
            </span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventData.guests.filter(g => g.featured).map((guest) => (
              <GuestCard key={guest.id} guest={guest} />
            ))}
          </div>
        </div>
      </section>

      

      {/* FOOTER */}
      <footer className="py-8 text-center text-brand-accent-yellow/80 text-sm border-t border-brand-border bg-brand-dark">
        <p>Copyright © 2026 {eventData.hero.title}. Tutti i diritti riservati.</p>
      </footer>
      
    </main>
  );
}
