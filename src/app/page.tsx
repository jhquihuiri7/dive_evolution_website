"use client";

import { useRef } from "react";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Nosotros from "@/components/nosotros";
import Experiencias from "@/components/experiencias";
import Highlight from "@/components/highlight";
import Opinions from "@/components/opinions";
import CtaBand from "@/components/ctaBand";
import Footer from "@/components/footer";
import { useReveals, WHATSAPP } from "@/lib/motion";

export default function Home() {
  const scope = useRef<HTMLDivElement>(null);
  useReveals(scope);

  return (
    <div ref={scope}>
      <Navbar />
      <Header />
      <Nosotros />
      {/* Scroll storytelling: sustituye a los botones de salto entre secciones */}
      <Experiencias />
      <Highlight />
      <Opinions />
      <CtaBand />
      <Footer />

      {/* CTA de reserva siempre accesible */}
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Reservar por WhatsApp"
         className="fixed bottom-4 right-4 z-[70] inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-[rgba(255,196,4,.94)] px-5 text-[16px] font-semibold text-[#0a1d39] shadow-[0_10px_34px_rgba(0,0,0,.22)] backdrop-blur-xl backdrop-saturate-[1.8] transition-transform duration-500 hover:-translate-y-0.5 hover:scale-[1.03] sm:bottom-8 sm:right-8"
         style={{ transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }}>
        <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12.05 2C6.5 2 2 6.5 2 12.05a10 10 0 0 0 1.37 5.05L2 22l5.05-1.32a10 10 0 0 0 5 1.27h.01c5.54 0 10.04-4.5 10.04-10.05C22.1 6.5 17.6 2 12.05 2Zm0 18.13h-.01a8.35 8.35 0 0 1-4.25-1.16l-.3-.18-3 .78.8-2.92-.2-.3a8.32 8.32 0 0 1-1.28-4.45c0-4.6 3.75-8.35 8.36-8.35 2.23 0 4.33.87 5.9 2.45a8.3 8.3 0 0 1 2.45 5.9c0 4.6-3.75 8.23-8.47 8.23Z" />
        </svg>
        Reservar
      </a>
    </div>
  );
}
