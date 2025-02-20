"use client"
import React, {useState, useEffect, RefObject } from 'react';

const reviews = [
  { review: "¡Increíble experiencia! Los instructores son muy profesionales y amigables. Desde el primer momento, me hicieron sentir seguro y cómodo, explicando cada detalle con paciencia. Definitivamente regresaré para más aventuras.", author: "Carlos Mendoza 🤿🐠" },
  { review: "El mejor centro de buceo que he visitado. Los equipos estaban en perfecto estado, y la atención fue excepcional. La inmersión fue increíblemente clara, y pude ver una gran variedad de vida marina que jamás imaginé.", author: "Laura Fernández 🌊✨" },
  { review: "Los paisajes submarinos eran espectaculares. Fue una experiencia mágica nadar entre peces de colores y arrecifes impresionantes. El equipo nos guió de manera profesional en todo momento.", author: "José Ramírez 🤿🐠" },
  { review: "Me sentí seguro en todo momento. La seguridad es su prioridad número uno, y eso se nota. Las explicaciones previas a la inmersión fueron detalladas y fáciles de entender, lo que hizo que me relajara y disfrutara cada segundo.", author: "Ana González 🔱🏝️" }
];

interface SectionProps {
  refProp: RefObject<HTMLDivElement>;
}

const Opinions: React.FC<SectionProps> = ({ refProp }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const [isLandscape, setIsLandscape] = useState<boolean | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false); // Nuevo estado para identificar si es móvil
      
  useEffect(() => {
      if (typeof window !== "undefined") {
          const checkIfMobile = window.innerWidth <= 900; // Definir un límite para dispositivos móviles
          setIsMobile(checkIfMobile); // Actualizar el estado según el tamaño de la ventana
          setIsLandscape(window.innerWidth > window.innerHeight);
          
          const handleResize = () => {
              setIsMobile(window.innerWidth <= 900); // Verificar en cada redimensionado si es móvil
              setIsLandscape(window.innerWidth > window.innerHeight);
          };
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
      }
  }, []);
  if (isLandscape === null) return null;
  return (
    <div ref={refProp} className='h-screen w-full bg-[url("https://res.cloudinary.com/logicielapplab/image/upload/v1739079631/DIVE_EVOLUTION_2025/REVIEWS/reviews_background_ozbzkr.webp")] bg-cover bg-center flex flex-col justify-center items-center'>
      <div className={`px-20 py-10 ${(isMobile && isLandscape) ? "w-[85%] h-[70%] mt-10 py-5": (isMobile) ? "w-[70%] h-[70%] px-5" : "w-[50%] h-[60%]"} bg-white flex flex-col justify-around items-center`}>
        <h3 className={`text-center ${(isMobile && isLandscape) ? "text-[30px] leading-[30px]" : (isMobile) ? "text-[30px] leading-[35px]" : "text-[40px] leading-[45px]"} font-black`}>¿QUE DICEN NUESTROS CLIENTES DE NOSOTROS?</h3>
        <div className='w-full flex flex-row justify-between'>
            <span className='font-bold text-6xl text-black'>&ldquo;</span>
            <p className='italic text-gray-600 text-center px-[5%] pt-10'>{reviews[index].review}</p>
            <span className='font-bold text-6xl text-black'>&rdquo;</span>
        </div>
        <p className='text-sm font-semibold'>{reviews[index].author}</p>
      </div>
    </div>
  );
};

export default Opinions;
