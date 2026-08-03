"use client";

import Navbar from "./navbar";
import { useParallax } from "@/lib/motion";

const MAPA =
  "https://res.cloudinary.com/logicielapplab/image/upload/v1739769936/DIVE_EVOLUTION_2025/HEADER/SANCRISTOBAL_daeo0k.png";

type HeaderTourProps = {
  backgroundImage: string;
  title: string;
};

/**
 * Hero dividido: panel navy con el mapa de la isla a la izquierda e imagen
 * full-bleed con parallax a la derecha. En movil se apilan.
 */
export default function HeaderTour({ backgroundImage, title }: HeaderTourProps) {
  const img = useParallax<HTMLDivElement>(0.32);

  return (
    <section className="relative w-full bg-[#0a1d39]">
      <Navbar />

      <div className="flex w-full flex-col lg:flex-row">
        {/* Panel navy. El py-24 deja libres los 76px del nav en movil. */}
        <div className="relative flex min-h-[52svh] w-full flex-col justify-center overflow-hidden bg-[#0a1d39] px-5 py-24 sm:px-8 sm:py-32 lg:min-h-[100svh] lg:w-1/2 lg:px-12 lg:py-44">
          <div
            className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[.16]"
            style={{ backgroundImage: `url('${MAPA}')` }}
          />
          <div className="relative z-[2]">
            <span className="mb-[18px] block h-[3px] w-[38px] rounded-sm bg-[#ffc404]" />
            <h1 className="text-[clamp(32px,4.6vw,68px)] font-semibold leading-[1.05] tracking-[-0.04em] text-white [text-wrap:balance]">
              {title}
            </h1>
          </div>
        </div>

        {/* Panel de imagen con dos overlays */}
        <div className="relative min-h-[48svh] w-full overflow-hidden lg:min-h-[100svh] lg:w-1/2">
          <div
            ref={img}
            className="absolute inset-x-0 -top-[14%] -bottom-[14%] bg-cover bg-center will-change-transform"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
          {/* Degradado horizontal: empalma con el panel navy */}
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(4,9,15,.88)_0%,rgba(4,9,15,.6)_42%,rgba(4,9,15,.15)_72%,rgba(4,9,15,.5)_100%)]" />
          {/* Scrim vertical superior: sin el, los enlaces del nav se pierden
              sobre las zonas claras de la foto (el reflejo del sol en /cursos) */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,9,15,.55)_0%,rgba(4,9,15,0)_22%)]" />
        </div>
      </div>
    </section>
  );
}
