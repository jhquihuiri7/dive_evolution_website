"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/motion";

const REVIEWS = [
  { review: "Increíble experiencia. Los instructores son muy profesionales y amigables. Desde el primer momento me hicieron sentir seguro y cómodo, explicando cada detalle con paciencia.", author: "Carlos Mendoza" },
  { review: "El mejor centro de buceo que he visitado. Los equipos estaban en perfecto estado y la atención fue excepcional. La inmersión fue increíblemente clara.", author: "Laura Fernández" },
  { review: "Los paisajes submarinos eran espectaculares. Fue mágico nadar entre peces de colores y arrecifes impresionantes, guiados de manera profesional en todo momento.", author: "José Ramírez" },
  { review: "Me sentí seguro en todo momento. La seguridad es su prioridad número uno y se nota: las explicaciones previas fueron detalladas y fáciles de entender.", author: "Ana González" },
];

/** Testimonios sobrios: fade cruzado de 6.5s, sin saltos ni carrusel. */
export default function Opinions() {
  const [i, setI] = useState(0);
  const [on, setOn] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    // Con reducir movimiento no hay rotacion automatica: la opinion se cambia
    // solo desde los puntos. El contenido sigue visible de entrada.
    if (reduced) return;
    let t = 0;
    const id = setInterval(() => {
      setOn(false);
      t = window.setTimeout(() => { setI((v) => (v + 1) % REVIEWS.length); setOn(true); }, 300);
    }, 6500);
    return () => { clearInterval(id); window.clearTimeout(t); };
  }, [reduced]);

  return (
    <section id="opiniones" className="w-full bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-[900px] text-center">
        <div className="reveal mb-8 flex items-center justify-center gap-3 sm:mb-12">
          <span className="block h-0.5 w-[26px] rounded-sm bg-[#ffc404]" />
          <span className="text-[12px] font-medium uppercase tracking-[.16em] text-[#86868b]">Lo que dicen nuestros clientes</span>
        </div>

        <blockquote className="reveal m-0 flex min-h-[clamp(210px,26vh,260px)] flex-col justify-center" data-delay="60">
          <p className="mb-7 text-[clamp(24px,3.4vw,44px)] font-normal leading-[1.22] tracking-[-0.035em] text-[#1d1d1f] transition-all duration-500 [text-wrap:pretty] sm:mb-8"
             style={{ opacity: on ? 1 : 0, transform: on ? "none" : "translateY(8px)", transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }}>
            {REVIEWS[i].review}
          </p>
          <footer className="text-[15px] font-medium text-[#86868b] transition-opacity duration-500" style={{ opacity: on ? 1 : 0 }}>
            {REVIEWS[i].author}
          </footer>
        </blockquote>

        <div className="mt-8 flex justify-center gap-2 sm:mt-11">
          {REVIEWS.map((_, k) => (
            <button key={k} type="button" aria-label={`Opinión ${k + 1}`} onClick={() => setI(k)} className="flex h-11 w-11 items-center justify-center">
              <span className="block h-[7px] w-[7px] rounded-full transition-all duration-500"
                    style={{ background: k === i ? "#1d1d1f" : "#d2d2d7", transform: k === i ? "scale(1.28)" : "none", transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
