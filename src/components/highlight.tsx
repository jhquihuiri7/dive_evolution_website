"use client"
import React, { FunctionComponent} from 'react';
import EmblaCarousel from "@/components/galeria";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

const IMAGES = [
  'https://res.cloudinary.com/logicielapplab/image/upload/v1739063959/DIVE_EVOLUTION_2025/DESTACADOS/car1-min_k3s1c4.webp',
  'https://res.cloudinary.com/logicielapplab/image/upload/v1739063960/DIVE_EVOLUTION_2025/DESTACADOS/car2-min_vrpmyx.webp',
  'https://res.cloudinary.com/logicielapplab/image/upload/v1739063960/DIVE_EVOLUTION_2025/DESTACADOS/car3-min_clpyyg.webp',
  'https://res.cloudinary.com/logicielapplab/image/upload/v1739063960/DIVE_EVOLUTION_2025/DESTACADOS/car4-min_gbttxa.webp'
];

const Highlight:FunctionComponent = () => {
  
  return (
    <div className={`relative flex flex-col justify-center items-center w-full h-screen shadow-inner-lg bg-[url("https://res.cloudinary.com/logicielapplab/image/upload/v1739073504/DIVE_EVOLUTION_2025/DESTACADOS/BACKGROUND/destacados_nuc9kn.webp")] bg-cover bg-center`}>
          <div className="absolute inset-0 pointer-events-none bg-transparent shadow-[inset_0px_50px_60px_rgba(0,0,0,1)]"></div>
          <div className='w-full flex flex-row justify-start pl-20 z-10'>
            <div className='my-10 flex flex-col justify-center items-center'>
              <h2 className='text-5xl font-bold text-white'>Encuentra tu inspiración</h2>
            <div className='w-full h-2 bg-[#ffc404]'></div>
          </div>
      </div>
      <EmblaCarousel slides={IMAGES} options={OPTIONS}></EmblaCarousel>   
    </div>
  );
}
export default Highlight;
