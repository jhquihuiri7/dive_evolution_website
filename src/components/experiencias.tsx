"use client";

import { useReducedMotion, useStageProgress } from "@/lib/motion";

const B = "https://res.cloudinary.com/logicielapplab/image/upload/";

export type Destino = {
  type: string; title: string; price: string;
  description: string; description_short: string;
  include: string[]; img: string;
};

export const DESTINOS: Destino[] = [
  { type: "Tour Diario", title: "Tour 360", price: "$150",
    description: "Descubre cada rincón oculto de San Cristóbal",
    description_short: "Una travesía única en lancha rápida que te llevará a explorar los lugares más impresionantes y la increíble biodiversidad de la isla.",
    include: ["Guía certificado", "Almuerzo y snacks"],
    img: B + "v1739994968/DIVE_EVOLUTION_2025/TOUR/upscalemedia-transformed_1_q8skaz.webp" },
  { type: "Tour Diario", title: "Isla Española", price: "$250",
    description: "Encuentro cercano con albatros y leones marinos",
    description_short: "Embárcate en una aventura única: este tour combina caminata, snorkel y navegación, permitiéndote descubrir paisajes impresionantes.",
    include: ["Guía certificado", "Almuerzo y snacks"],
    img: B + "v1739994968/DIVE_EVOLUTION_2025/TOUR/TOUR_ESPA%C3%91OLA_jlqwl2_1_a9o078.webp" },
  { type: "Tour Diario", title: "Panga Ride", price: "$120",
    description: "Aventura entre acantilados y cuevas secretas",
    description_short: "Navega entre acantilados, cavernas y aguas cristalinas mientras descubres la increíble vida marina de Galápagos.",
    include: ["Guía certificado", "Transporte acuático"],
    img: B + "v1739994968/DIVE_EVOLUTION_2025/TOUR/upscalemedia-transformed_2_1_bjapgc.webp" },
];

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

const SCRIM = "bg-[linear-gradient(105deg,rgba(4,9,15,.88)_0%,rgba(4,9,15,.6)_42%,rgba(4,9,15,.15)_72%,rgba(4,9,15,.5)_100%)]";

/** Rótulo de sección. Se pinta una sola vez en los dos modos. */
function Rotulo() {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="block h-0.5 w-[26px] rounded-sm bg-[#ffc404]" />
      <span className="text-[12px] font-medium uppercase tracking-[.16em] text-white/60">Las experiencias</span>
    </div>
  );
}

/** Texto de un destino: identico en el escenario pinned y en el fallback. */
function Ficha({ d }: { d: Destino }) {
  return (
    <>
      <span className="mb-3.5 block text-[12px] font-medium uppercase tracking-[.16em] text-[#ffc404]">{d.type}</span>
      <h3 className="mb-4 text-[clamp(34px,5vw,72px)] font-semibold leading-none tracking-[-0.045em] text-white [text-wrap:balance]">{d.title}</h3>
      <p className="mb-3.5 text-[clamp(19px,1.9vw,26px)] leading-[1.35] tracking-[-0.025em] text-white/90">{d.description}</p>
      <p className="mb-7 max-w-[52ch] text-[17px] font-light leading-relaxed text-white/60">{d.description_short}</p>
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3.5">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[13px] text-white/50">Desde</span>
          <span className="text-[30px] font-semibold tracking-[-0.035em] text-white">{d.price}</span>
        </div>
        <span className="block h-[22px] w-px bg-white/20" />
        <div className="flex flex-wrap gap-2">
          {d.include.map((i) => (
            <span key={i} className="inline-flex items-center rounded-full border border-white/20 bg-white/[.06] px-3.5 py-1.5 text-[13px] text-white/85 backdrop-blur-md">{i}</span>
          ))}
        </div>
      </div>
    </>
  );
}

/**
 * Scroll storytelling: el contenedor mide 3 pantallas y el escenario queda
 * pinned (sticky). El progreso cruza imágenes y textos con parallax vertical.
 *
 * Con "reducir movimiento" no hay escenario ni parallax: los tres destinos se
 * apilan y están visibles de entrada. Un @media de CSS no bastaría, porque
 * aquí el desplazamiento lo pinta JS por frame en un transform inline.
 */
export default function Experiencias() {
  const reduced = useReducedMotion();
  const { ref, p } = useStageProgress<HTMLElement>();
  const n = DESTINOS.length;
  // pos recorre 0 → n-1, de modo que cada destino queda centrado en su entero
  // (dist = 0, opacidad plena). Con p * n el ultimo se apagaba en 2.645 y
  // quedaban ~31svh de negro al final del recorrido.
  const pos = p * (n - 1);
  const idx = Math.min(n, Math.max(1, Math.round(pos) + 1));

  if (reduced) {
    return (
      <section id="experiencias" className="relative w-full bg-[#06090d]">
        {DESTINOS.map((d, i) => (
          <div key={d.title} className="relative w-full">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${d.img}')` }} />
            <div className={`absolute inset-0 ${SCRIM}`} />
            <article className="relative z-[3] mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-44">
              <div className="max-w-[660px]">
                {i === 0 && <Rotulo />}
                <Ficha d={d} />
              </div>
            </article>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section id="experiencias" ref={ref} className="relative w-full bg-[#06090d]" style={{ height: `${n * 120}svh` }}>
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {DESTINOS.map((d, i) => {
          const dist = pos - i;
          const vis = clamp01(1 - Math.abs(dist) * 1.55);
          return (
            <div key={d.title} className="absolute inset-0 will-change-[opacity]" style={{ opacity: vis }}>
              <div className="absolute inset-x-0 -top-[6%] -bottom-[6%] bg-cover bg-center will-change-transform"
                   style={{ backgroundImage: `url('${d.img}')`, transform: `translate3d(0,${(dist * -34).toFixed(1)}px,0) scale(${(1.06 - vis * 0.05).toFixed(4)})` }} />
              <div className={`absolute inset-0 ${SCRIM}`} />
            </div>
          );
        })}

        <div className="relative z-[3] mx-auto flex h-full max-w-[1280px] flex-col justify-center px-5 sm:px-8 lg:px-12">
          <Rotulo />

          <div className="relative min-h-[clamp(300px,42vh,400px)] max-w-[660px]">
            {DESTINOS.map((d, i) => {
              const dist = pos - i;
              return (
                <article key={d.title} className="absolute inset-x-0 top-0 will-change-[opacity,transform]"
                         style={{ opacity: clamp01(1 - Math.abs(dist) * 2.1), transform: `translate3d(0,${(dist * 42).toFixed(1)}px,0)`, pointerEvents: Math.abs(dist) < 0.5 ? "auto" : "none" }}>
                  <Ficha d={d} />
                </article>
              );
            })}
          </div>

          {/* Contador + barra: dice dónde estás sin robar protagonismo */}
          <div className="absolute bottom-12 right-5 flex items-center gap-3.5 sm:right-8 lg:right-12">
            <span className="text-[13px] tabular-nums tracking-[.06em] text-white/55">
              {String(idx).padStart(2, "0")} — {String(n).padStart(2, "0")}
            </span>
            <span className="relative block h-0.5 w-[clamp(64px,9vw,120px)] overflow-hidden rounded-sm bg-white/20">
              <span className="absolute left-0 top-0 h-full rounded-sm bg-[#ffc404]" style={{ width: `${(p * 100).toFixed(1)}%` }} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
