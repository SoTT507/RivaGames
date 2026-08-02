import { eventData } from "@/data/eventInfo";
import GuestCard from "@/components/GuestCard";
import TicketInfo from "@/components/TicketInfo";
import Schedule from "@/components/schedule";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#3D4D4D] text-white font-sans selection:bg-[#E86D43] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D4D4D]/80 via-[#418080]/30 to-[#3D4D4D] z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E86D43]/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#FECB33] to-[#E86D43] mb-6 drop-shadow-lg">
            {eventData.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-medium mb-8">
            {eventData.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-semibold">
            <div className="flex items-center gap-2 bg-[#3D4D4D]/80 px-6 py-3 rounded-full border border-[#418080] backdrop-blur-md">
              <span className="text-[#FECB33]">📅</span> {eventData.hero.dates}
            </div>
            <div className="flex items-center gap-2 bg-[#3D4D4D]/80 px-6 py-3 rounded-full border border-[#418080] backdrop-blur-md">
              <span className="text-[#E86D43]">📍</span> {eventData.hero.location}
            </div>
          </div>
        </div>
      </section>

      {/* 2. BIGLIETTERIA */}
      <section className="py-24 px-4 bg-[#3D4D4D] border-y border-[#418080]">
        <div className="max-w-5xl mx-auto">
          <TicketInfo data={eventData.tickets} />
        </div>
      </section>

      {/* 3. PROGRAMMA */}
      <section className="py-24 px-4 relative bg-[#3D4D4D]">
        <div className="max-w-6xl mx-auto">
           <Schedule />
        </div>
      </section>

      {/* 4. OSPITI */}
      <section className="py-24 px-4 relative bg-[#3D4D4D] border-t border-[#418080]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FECB33] to-[#E86D43]">
              Ospiti Speciali
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
      <footer className="py-8 text-center text-[#FECB33]/60 text-sm border-t border-[#418080] bg-[#3D4D4D]">
        <p>Copyright © 2026 {eventData.hero.title}. Tutti i diritti riservati.</p>
      </footer>
      
    </main>
  );
}
