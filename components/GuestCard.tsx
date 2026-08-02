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
      style={{ perspective: "1000px" }}
    >
      <div 
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{ 
          transformStyle: "preserve-3d", 
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" 
        }}
      >
        
        {/* 1. FRONTE DELLA CARD */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#372020] rounded-3xl overflow-hidden border border-[#418080] group-hover:border-[#FECB33]/60 transition-colors"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0 bg-[#418080]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D4D4D] via-[#372020]/40 to-transparent z-10" />
          </div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 z-20">
            <p className="text-[#FECB33] text-sm font-bold uppercase tracking-wider mb-1">
              {guest.role}
            </p>
            <h3 className="text-2xl font-bold text-white mb-2">
              {guest.name}
            </h3>
            
            <p className="text-gray-300 text-sm mt-3 flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
              <span>Clicca per info</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </p>
          </div>
        </div>

        {/* 2. RETRO DELLA CARD */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#418080] rounded-3xl overflow-hidden border border-[#E86D43] p-6 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(232,109,67,0.3)]"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          <div className="w-full flex flex-col h-full justify-center">
            <h3 className="text-2xl font-bold text-white mb-4 border-b border-[#372020] pb-4">
              {guest.name}
            </h3>
            
            <p className="text-gray-100 text-base leading-relaxed mb-6 overflow-y-auto max-h-[50%] scrollbar-thin whitespace-pre-wrap break-words">
              {guest.description}
            </p>
            
            <div className="mt-auto">
              <span className="text-xs text-white uppercase tracking-widest border border-[#372020] px-4 py-2 rounded-full hover:bg-[#E86D43] hover:border-[#E86D43] transition-colors">
                Torna Indietro
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
