"use client";

import { useParallax, WHATSAPP } from "@/lib/motion";

const HERO =
  "https://res.cloudinary.com/logicielapplab/image/upload/v1739048429/DIVE_EVOLUTION_2025/HEADER/background-min_hhsp6g.webp";

/** Hero full-bleed: la imagen se mueve a 0.32× el scroll, el contenido no. */
export default function Header() {
  const bg = useParallax<HTMLDivElement>(0.32);

  return (
    <section id="top" className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-[#060b12]">
      <div ref={bg} className="absolute inset-x-0 -top-[14%] -bottom-[14%] bg-cover bg-center will-change-transform"
           style={{ backgroundImage: `url('${HERO}')` }} />
      {/* Scrim en dos tiempos: legibilidad arriba y abajo, imagen limpia en medio */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,9,15,.62)_0%,rgba(4,9,15,.12)_26%,rgba(4,9,15,.18)_52%,rgba(4,9,15,.86)_100%)]" />

      <div className="relative z-[2] mx-auto w-full max-w-[1280px] px-5 pb-12 sm:px-8 lg:px-12 lg:pb-[72px]">
        <div className="reveal mb-5 flex items-center gap-3 sm:mb-7">
          <span className="block h-0.5 w-[26px] rounded-sm bg-[#ffc404]" />
          <span className="text-[12px] font-medium uppercase tracking-[.16em] text-white/70">Galápagos · Isla San Cristóbal</span>
        </div>

        <h1 className="reveal mb-7 max-w-[15ch] text-[clamp(44px,8vw,108px)] font-semibold leading-[0.96] tracking-[-0.045em] text-white sm:mb-11 [text-wrap:balance]" data-delay="80">
          Explora, sumérgete<br />
          <span className="text-white/60">y vive la aventura</span>
        </h1>

        <div className="reveal flex flex-wrap items-stretch gap-3.5" data-delay="160">
          {/* El bloque amarillo original vive aquí como regla de acento sobre vidrio */}
          <div className="min-w-[260px] max-w-[520px] flex-1 basis-[380px] rounded-3xl border border-white/15 bg-white/[.09] p-6 shadow-[0_24px_70px_rgba(0,0,0,.34)] backdrop-blur-2xl backdrop-saturate-[1.8] sm:p-7">
            <span className="mb-[18px] block h-[3px] w-[38px] rounded-sm bg-[#ffc404]" />
            <p className="text-[clamp(17px,1.5vw,21px)] leading-[1.45] tracking-[-0.02em] text-white/95">
              Descubre la magia del mundo submarino con quienes han hecho del buceo su vida.
            </p>
          </div>

          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"
             className="flex min-w-[250px] max-w-[420px] flex-1 basis-[300px] items-center gap-4 rounded-3xl border border-white/15 bg-white/[.09] p-5 text-white shadow-[0_24px_70px_rgba(0,0,0,.34)] backdrop-blur-2xl backdrop-saturate-[1.8] transition-transform duration-500 hover:-translate-y-0.5 hover:scale-[1.02] sm:p-6"
             style={{ transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }}>
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-white/20 bg-white/15">
              <svg width="15" height="17" viewBox="0 0 15 17" fill="none" aria-hidden><path d="M14 7.63a1 1 0 0 1 0 1.74l-12 6.9A1 1 0 0 1 .5 15.4V1.6A1 1 0 0 1 2 .73l12 6.9Z" fill="#fff" /></svg>
            </span>
            <span className="flex-1">
              <span className="block text-[16px] font-semibold tracking-[-0.02em]">Reproduce el video</span>
              <span className="block text-[14px] text-white/60">Conoce nuestra experiencia</span>
            </span>
            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" aria-hidden className="flex-none opacity-70">
              <path d="M10 1l6 6-6 6M16 7H0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <a href={WHATSAPP} className="sr-only">Reservar</a>
    </section>
  );
}
