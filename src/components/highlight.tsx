"use client";

import { useRef } from "react";
import { prefersReduced } from "@/lib/motion";

const B = "https://res.cloudinary.com/logicielapplab/image/upload/";
const IMAGES = [
  B + "v1739063959/DIVE_EVOLUTION_2025/DESTACADOS/car1-min_k3s1c4.webp",
  B + "v1739063960/DIVE_EVOLUTION_2025/DESTACADOS/car2-min_vrpmyx.webp",
  B + "v1739063960/DIVE_EVOLUTION_2025/DESTACADOS/car3-min_clpyyg.webp",
  B + "v1739063960/DIVE_EVOLUTION_2025/DESTACADOS/car4-min_gbttxa.webp",
];

/** Galería con scroll nativo + snap: momentum real en táctil, sin librería. */
export default function Highlight() {
  const track = useRef<HTMLDivElement>(null);
  const by = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("figure");
    // scrollBy ignora el scroll-behavior del CSS, asi que la preferencia se
    // comprueba aqui: con reducir movimiento el salto es instantaneo.
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 400) + 20), behavior: prefersReduced() ? "auto" : "smooth" });
  };

  return (
    <section id="inspiracion" className="w-full overflow-hidden bg-[#f5f5f7] py-24 sm:py-32 lg:py-44">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="reveal mb-5 flex items-center gap-3">
          <span className="block h-0.5 w-[26px] rounded-sm bg-[#ffc404]" />
          <span className="text-[12px] font-medium uppercase tracking-[.16em] text-[#86868b]">Galería</span>
        </div>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-14">
          <h2 className="reveal m-0 max-w-[16ch] text-[clamp(32px,4.6vw,68px)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#1d1d1f] [text-wrap:balance]" data-delay="60">
            Encuentra tu inspiración
          </h2>
          <div className="reveal flex gap-2.5" data-delay="120">
            {[-1, 1].map((d) => (
              <button key={d} type="button" onClick={() => by(d)} aria-label={d < 0 ? "Anterior" : "Siguiente"}
                      className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#1d1d1f] shadow-[0_2px_10px_rgba(0,0,0,.05)] backdrop-blur-lg backdrop-saturate-[1.8] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105">
                <svg width="15" height="12" viewBox="0 0 17 14" fill="none" aria-hidden style={{ transform: d < 0 ? "rotate(180deg)" : undefined }}>
                  <path d="M10 1l6 6-6 6M16 7H0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div ref={track} className="no-bar reveal flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-1.5 sm:gap-5 sm:px-8 lg:px-12" data-delay="160"
           style={{ scrollPaddingLeft: "clamp(20px,5vw,48px)" }}>
        {IMAGES.map((src) => (
          <figure key={src} className="group m-0 aspect-[16/10] flex-none basis-[clamp(280px,44vw,620px)] snap-start overflow-hidden rounded-3xl bg-[#e8e8ed] shadow-[0_2px_6px_rgba(0,0,0,.04),0_18px_44px_rgba(0,0,0,.08)] transition-transform duration-500 hover:-translate-y-1"
                  style={{ transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="Galápagos" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                 style={{ transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }} />
          </figure>
        ))}
      </div>
    </section>
  );
}
