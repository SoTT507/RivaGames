"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type GuestProps = {
  guest: {
    name: string;
    role: string;
    image: string;
    description: string;
    showFrontText?: boolean;
  }
};

export default function GuestCard({ guest }: GuestProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const shouldShowText = guest.showFrontText !== false;

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const fixOverflow = () => {
      // Resetta le dimensioni per testare la grandezza base (1.5rem da globals.css)
      text.style.fontSize = "";
      text.style.lineHeight = "";
      
      // requestAnimationFrame assicura che il DOM abbia applicato il reset 
      // prima di misurare le altezze
      requestAnimationFrame(() => {
        // Selettore di sicurezza: se per colpa del 3D il contenitore 
        // risulta alto 0px, fermiamo tutto per non rimpicciolire a caso
        if (container.clientHeight === 0) return;

        // Se l'altezza totale del testo supera lo spazio visibile del contenitore
        if (text.scrollHeight > container.clientHeight) {
          let currentSize = parseFloat(window.getComputedStyle(text).fontSize);
          
          // Riduciamo finché non entra, limite minimo 10px
          while (text.scrollHeight > container.clientHeight && currentSize > 10) {
            currentSize -= 0.5;
            text.style.fontSize = `${currentSize}px`;
            
            if (currentSize < 14) {
              text.style.lineHeight = "1.2";
            }
          }
        }
      });
    };

    let isMounted = true;

    document.fonts.ready.then(() => {
      if (isMounted) fixOverflow();
    });

    const resizeObserver = new ResizeObserver(() => {
      if (isMounted) fixOverflow();
    });

    resizeObserver.observe(container);

    // Un trick extra: quando la carta viene cliccata e si gira, il browser 
    // aggiorna le dimensioni reali. Lanciamo un ricalcolo di sicurezza.
    if (isFlipped) {
      setTimeout(fixOverflow, 100);
    }

    return () => {
      isMounted = false;
      resizeObserver.disconnect();
    };
  }, [guest.description, isFlipped]); 

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
        
        {/* FRONTE DELLA CARD */}
        <div 
          className="absolute inset-0 w-full h-full bg-brand-surface rounded-3xl overflow-hidden border border-brand-border group-hover:border-brand-accent-yellow/80 transition-colors"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0 bg-brand-border">
            {guest.image && (
              <Image 
                src={guest.image}
                alt={`Foto di ${guest.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent z-10" />
          </div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 z-20">
            {shouldShowText && (
              <>
                <p className="text-brand-accent-yellow text-xs md:text-sm font-bold uppercase tracking-wider mb-1">
                  {guest.role}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-2">
                  {guest.name}
                </h3>
              </>
            )}
            
            <p className="text-brand-text/70 text-xs md:text-sm mt-3 flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
              <span>Clicca per info</span>
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </p>
          </div>
        </div>

        {/* RETRO DELLA CARD */}
        <div 
          className="absolute inset-0 w-full h-full bg-brand-border rounded-3xl overflow-hidden border border-brand-accent-orange p-4 md:p-5 flex flex-col shadow-[0_0_15px_rgba(232,109,67,0.3)]"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          <div className="w-full flex flex-col h-full min-h-0">
            <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-3 border-b border-brand-dark/50 pb-2 text-center shrink-0">
              {guest.name}
            </h3>
            
            {/* Rimosso flex e items-center per permettere al testo di allinearsi naturalmente in alto */}
            <div ref={containerRef} className="flex-1 min-h-0 overflow-hidden pr-1 mb-4">
              <p ref={textRef} className="text-brand-text/90 leading-relaxed whitespace-pre-wrap break-words text-justify w-full">
                {guest.description}
              </p>
            </div>
            
            <div className="mt-auto text-center shrink-0">
              <span className="text-[10px] md:text-xs text-brand-text uppercase tracking-widest border border-brand-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-brand-accent-orange hover:border-brand-accent-orange transition-colors">
                Torna Indietro
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}