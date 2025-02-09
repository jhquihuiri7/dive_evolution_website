"use client"
import React, { FunctionComponent, useState, useEffect } from 'react';

const reviews = [
  { review: "¡Increíble experiencia! Los instructores son muy profesionales y amigables. Desde el primer momento, me hicieron sentir seguro y cómodo, explicando cada detalle con paciencia. Definitivamente regresaré para más aventuras.", author: "Carlos Mendoza 🤿🐠" },
  { review: "El mejor centro de buceo que he visitado. Los equipos estaban en perfecto estado, y la atención fue excepcional. La inmersión fue increíblemente clara, y pude ver una gran variedad de vida marina que jamás imaginé.", author: "Laura Fernández 🌊✨" },
  { review: "Los paisajes submarinos eran espectaculares. Fue una experiencia mágica nadar entre peces de colores y arrecifes impresionantes. El equipo nos guió de manera profesional en todo momento.", author: "José Ramírez 🤿🐠" },
  { review: "Me sentí seguro en todo momento. La seguridad es su prioridad número uno, y eso se nota. Las explicaciones previas a la inmersión fueron detalladas y fáciles de entender, lo que hizo que me relajara y disfrutara cada segundo.", author: "Ana González 🔱🏝️" }
];

const Opinions: FunctionComponent = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-screen w-full bg-[url("https://res.cloudinary.com/logicielapplab/image/upload/v1739079631/DIVE_EVOLUTION_2025/REVIEWS/reviews_background_ozbzkr.webp")] bg-cover bg-center flex flex-col justify-center items-center'>
      <div className='bg-white w-[50%] h-[60%] py-10 px-20 flex flex-col justify-around items-center'>
        <h3 className='text-[40px] leading-[45px] font-black'>¿QUE DICEN NUESTROS CLIENTES DE NOSOTROS?</h3>
        <div className='w-full flex flex-row justify-between'>
            <span className='font-bold text-6xl text-black'>&ldquo;</span>
            <p className='italic text-gray-600 text-center px-10 pt-10'>{reviews[index].review}</p>
            <span className='font-bold text-6xl text-black'>&rdquo;</span>
        </div>
        <p className='text-sm font-semibold'>{reviews[index].author}</p>
      </div>
    </div>
  );
};

export default Opinions;
