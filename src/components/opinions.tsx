"use client";

import React, { RefObject, useEffect, useState } from "react";

const reviews = [
  {
    review:
      "¡Increíble experiencia! Los instructores son muy profesionales y amigables. Desde el primer momento, me hicieron sentir seguro y cómodo, explicando cada detalle con paciencia. Definitivamente regresaré para más aventuras.",
    author: "Carlos Mendoza 🤿🐠",
  },
  {
    review:
      "El mejor centro de buceo que he visitado. Los equipos estaban en perfecto estado, y la atención fue excepcional. La inmersión fue increíblemente clara, y pude ver una gran variedad de vida marina que jamás imaginé.",
    author: "Laura Fernández 🌊✨",
  },
  {
    review:
      "Los paisajes submarinos eran espectaculares. Fue una experiencia mágica nadar entre peces de colores y arrecifes impresionantes. El equipo nos guió de manera profesional en todo momento.",
    author: "José Ramírez 🤿🐠",
  },
  {
    review:
      "Me sentí seguro en todo momento. La seguridad es su prioridad número uno, y eso se nota. Las explicaciones previas a la inmersión fueron detalladas y fáciles de entender, lo que hizo que me relajara y disfrutara cada segundo.",
    author: "Ana González 🔱🏝️",
  },
];

interface SectionProps {
  refProp: RefObject<HTMLDivElement>;
}

const Opinions: React.FC<SectionProps> = ({ refProp }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      ref={refProp}
      className='flex min-h-[100svh] w-full flex-col items-center justify-center bg-[url("https://res.cloudinary.com/logicielapplab/image/upload/v1739079631/DIVE_EVOLUTION_2025/REVIEWS/reviews_background_ozbzkr.webp")] bg-cover bg-center'
    >
      <div className="mt-10 flex h-[70%] w-[92%] flex-col items-center justify-around bg-white px-5 py-6 sm:w-[80%] sm:px-10 md:w-[70%] lg:h-[60%] lg:w-[50%] lg:px-20 lg:py-10">
        <h3 className="text-center text-[28px] font-black leading-[34px] sm:text-[34px] sm:leading-[40px] lg:text-[40px] lg:leading-[45px]">
          ¿QUE DICEN NUESTROS CLIENTES DE NOSOTROS?
        </h3>
        <div className="flex w-full flex-row justify-between">
          <span className="text-5xl font-bold text-black sm:text-6xl">&ldquo;</span>
          <p className="px-[5%] pt-6 text-center italic text-gray-600 sm:pt-10">{reviews[index].review}</p>
          <span className="text-5xl font-bold text-black sm:text-6xl">&rdquo;</span>
        </div>
        <p className="text-sm font-semibold">{reviews[index].author}</p>
      </div>
    </section>
  );
};

export default Opinions;
