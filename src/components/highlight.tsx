"use client";

import React, { RefObject } from "react";
import EmblaCarousel from "@/components/galeria";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

const IMAGES = [
  "https://res.cloudinary.com/logicielapplab/image/upload/v1739063959/DIVE_EVOLUTION_2025/DESTACADOS/car1-min_k3s1c4.webp",
  "https://res.cloudinary.com/logicielapplab/image/upload/v1739063960/DIVE_EVOLUTION_2025/DESTACADOS/car2-min_vrpmyx.webp",
  "https://res.cloudinary.com/logicielapplab/image/upload/v1739063960/DIVE_EVOLUTION_2025/DESTACADOS/car3-min_clpyyg.webp",
  "https://res.cloudinary.com/logicielapplab/image/upload/v1739063960/DIVE_EVOLUTION_2025/DESTACADOS/car4-min_gbttxa.webp",
];

interface SectionProps {
  refProp: RefObject<HTMLDivElement>;
}

const Highlight: React.FC<SectionProps> = ({ refProp }) => {
  return (
    <section
      ref={refProp}
      className='relative flex min-h-[100svh] w-full flex-col items-center justify-center bg-[url("https://res.cloudinary.com/logicielapplab/image/upload/v1739073504/DIVE_EVOLUTION_2025/DESTACADOS/BACKGROUND/destacados_nuc9kn.webp")] bg-cover bg-center shadow-inner-lg'
    >
      <div className="pointer-events-none absolute inset-0 bg-transparent shadow-[inset_0px_50px_60px_rgba(0,0,0,1)]" />

      <div className="z-10 flex w-full flex-row justify-start pl-6 sm:pl-10 lg:pl-20">
        <div className="my-10 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Encuentra tu inspiración</h2>
          <div className="h-2 w-full bg-[#ffc404]" />
        </div>
      </div>

      <EmblaCarousel slides={IMAGES} options={OPTIONS} />
    </section>
  );
};

export default Highlight;
