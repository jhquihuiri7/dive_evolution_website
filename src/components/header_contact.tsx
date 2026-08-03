"use client";

import Navbar from "./navbar";
import { useParallax, WHATSAPP } from "@/lib/motion";

const FOTO =
  "https://res.cloudinary.com/logicielapplab/image/upload/v1739940793/DIVE_EVOLUTION_2025/CONTACT/EB8A2103-min_tgdwz2.webp";

const PIN = "M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z";
const WA = "M12.05 2C6.5 2 2 6.5 2 12.05a10 10 0 0 0 1.37 5.05L2 22l5.05-1.32a10 10 0 0 0 5 1.27h.01c5.54 0 10.04-4.5 10.04-10.05C22.1 6.5 17.6 2 12.05 2Zm0 18.13h-.01a8.35 8.35 0 0 1-4.25-1.16l-.3-.18-3 .78.8-2.92-.2-.3a8.32 8.32 0 0 1-1.28-4.45c0-4.6 3.75-8.35 8.36-8.35 2.23 0 4.33.87 5.9 2.45a8.3 8.3 0 0 1 2.45 5.9c0 4.6-3.75 8.23-8.47 8.23Z";

/** Tarjeta de vidrio: mismo cristal que las del hero de portada. */
function Tarjeta({ icon, title, text, children }: {
  icon: string; title: string; text: string; children: React.ReactNode;
}) {
  return (
    <div className="flex min-w-[260px] flex-1 basis-[300px] flex-col items-start gap-4 rounded-3xl border border-white/15 bg-white/[.09] p-6 shadow-[0_24px_70px_rgba(0,0,0,.34)] backdrop-blur-2xl backdrop-saturate-[1.8] sm:p-7">
      <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-white/20 bg-white/15">
        <svg width="21" height="21" viewBox="0 0 24 24" fill="#fff" aria-hidden><path d={icon} /></svg>
      </span>
      <span className="text-[clamp(21px,2vw,26px)] font-semibold tracking-[-0.03em] text-white">{title}</span>
      <p className="m-0 flex-1 text-[15px] font-light leading-relaxed text-white/70">{text}</p>
      {children}
    </div>
  );
}

/**
 * Hero dividido: panel navy con el titulo y las dos tarjetas de vidrio a la
 * izquierda, imagen full-bleed con parallax a la derecha.
 */
export default function HeaderContact() {
  const img = useParallax<HTMLDivElement>(0.32);

  return (
    <section className="relative w-full bg-[#0a1d39]">
      <Navbar />

      <div className="flex w-full flex-col lg:flex-row">
        {/* El py-24 deja libres los 76px del nav en movil. */}
        <div className="relative flex min-h-[62svh] w-full flex-col justify-center bg-[#0a1d39] px-5 py-24 sm:px-8 sm:py-32 lg:min-h-[100svh] lg:w-1/2 lg:px-12 lg:py-44">
          <span className="mb-[18px] block h-[3px] w-[38px] rounded-sm bg-[#ffc404]" />
          <h1 className="mb-9 text-[clamp(32px,4.6vw,68px)] font-semibold leading-[1.05] tracking-[-0.04em] text-white [text-wrap:balance] sm:mb-11">
            Contacta con nosotros
          </h1>

          <div className="flex flex-wrap items-stretch gap-3.5">
            <Tarjeta icon={PIN} title="Visítanos" text="Nuestras oficinas están situadas en Av. Isabela y Guillermo Vega Gallegos.">
              <a href="#mapa"
                 className="inline-flex min-h-[44px] items-center rounded-full border border-white/25 bg-white/[.08] px-5 text-[15px] font-medium text-white backdrop-blur-lg transition-transform duration-300 hover:-translate-y-px hover:scale-[1.03]"
                 style={{ transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }}>
                Ir al mapa
              </a>
            </Tarjeta>

            <Tarjeta icon={WA} title="Chateemos" text="¿Prefieres hablar por teléfono? Llámanos y con gusto te ayudamos.">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                 className="inline-flex min-h-[44px] items-center rounded-full bg-[#ffc404] px-5 text-[15px] font-semibold text-[#0a1d39] transition-transform duration-300 hover:-translate-y-px hover:scale-[1.03]"
                 style={{ transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }}>
                +593 98 229 1894
              </a>
            </Tarjeta>
          </div>
        </div>

        {/* Mismos dos overlays que en header_tour: el nav cruza esta mitad. */}
        <div className="relative min-h-[38svh] w-full overflow-hidden lg:min-h-[100svh] lg:w-1/2">
          <div ref={img} className="absolute inset-x-0 -top-[14%] -bottom-[14%] bg-cover bg-center will-change-transform"
               style={{ backgroundImage: `url('${FOTO}')` }} />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(4,9,15,.88)_0%,rgba(4,9,15,.6)_42%,rgba(4,9,15,.15)_72%,rgba(4,9,15,.5)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,9,15,.55)_0%,rgba(4,9,15,0)_22%)]" />
        </div>
      </div>
    </section>
  );
}
