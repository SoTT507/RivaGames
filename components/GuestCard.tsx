"use client";

import { useState } from "react";

type GuestProps = {
  guest: {
    name: string;
    role: string;
    image: string;
    description: string;
  }
};

export default function GuestCard({ guest }: GuestProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group relative aspect-[4/5] w-full cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }} // Adds depth to the 3D rotation
    >
      <div 
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{ 
          transformStyle: "preserve-3d", 
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" 
        }}
      >
        
        {/* 1. FRONT OF THE CARD */}
        <div 
          className="absolute inset-0 w-full h-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 group-hover:border-cyan-500/50 transition-colors"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Image Placeholder / Gradient */}
          <div className="absolute inset-0 bg-slate-800">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent z-10" />
          </div>
          
          {/* Front Content */}
          <div className="absolute bottom-0 left-0 w-full p-6 z-20">
            <p className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-1">
              {guest.role}
            </p>
            <h3 className="text-2xl font-bold text-white mb-2">
              {guest.name}
            </h3>
            
            {/* Click Indicator */}
            <p className="text-slate-400 text-sm mt-3 flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
              <span>Clicca per info</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </p>
          </div>
        </div>

        {/* 2. BACK OF THE CARD */}
        <div 
          className="absolute inset-0 w-full h-full bg-slate-800 rounded-3xl overflow-hidden border border-fuchsia-500/50 p-6 flex flex-col justify-center items-center text-center shadow-lg"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          <div className="w-full flex flex-col h-full justify-center">
            <h3 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-4">
              {guest.name}
            </h3>
            
            {/* AGGIUNTO: whitespace-pre-wrap break-words per la gestione degli a capo */}
            <p className="text-slate-300 text-base leading-relaxed mb-6 overflow-y-auto max-h-[50%] scrollbar-thin whitespace-pre-wrap break-words">
              {guest.description}
            </p>
            
            <div className="mt-auto">
              <span className="text-xs text-slate-500 uppercase tracking-widest border border-slate-700 px-4 py-2 rounded-full">
                Torna Indietro
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
