"use client"
import React, { FunctionComponent } from 'react';
import EmblaCarousel from "@/components/galeria";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

const IMAGES = [
  '/images/car1.jpg',
  '/images/car2.jpg',
  '/images/car3.jpg',
  '/images/car4.jpg'
];

const Highlight:FunctionComponent = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-[url("/images/Imagen1.png")] bg-cover bg-center'>
      <EmblaCarousel slides={IMAGES} options={OPTIONS}></EmblaCarousel>   
    </div>
  );
}
export default Highlight;
