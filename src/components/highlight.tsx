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
    <div className={`flex flex-col justify-center items-center w-full h-screen bg-[url("https://res.cloudinary.com/logicielapplab/image/upload/v1739073504/DIVE_EVOLUTION_2025/DESTACADOS/BACKGROUND/destacados_nuc9kn.webp")] bg-cover bg-center`}>
      <div className='w-[80%] my-10'>
        <h2 className='text-6xl font-bold text-white'>Nosotros</h2>
        <div className='w-[300px] h-4 bg-[#ffc404]'></div>
      </div>
      <EmblaCarousel slides={IMAGES} options={OPTIONS}></EmblaCarousel>   
    </div>
  );
}
export default Highlight;
