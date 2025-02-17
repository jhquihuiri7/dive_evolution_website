"use client"
import React, { FunctionComponent, useEffect, useState } from 'react';
import { ShimmerButton } from './magicui/shimmer-button';
import { useInView } from "react-intersection-observer";

// Componente Tour
interface TourProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Tour: FunctionComponent<TourProps> = ({ title, description, price, imageUrl }) => {
  const [rotation, setRotation] = useState<number>(0);

  useEffect(() => {
    const randomRotation = Math.floor(Math.random() * 11) - 5; // Random rotation between -5° and 5°
    setRotation(randomRotation);
  }, []);

  // Hook de Intersection Observer para detectar cuando el componente entra en la vista
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo disparar la animación una vez cuando entra en la vista
    threshold: 0.5, // El componente debe estar al menos al 50% visible para activar la animación
  });

  return (
    <div
      ref={ref} // Asignar el ref a este div
      className={`h-fit w-[300px] flex flex-col justify-center items-center m-10 transition-all duration-500 ease-in-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`} // Animación: cuando entra en la vista, se desvanece y se desplaza hacia arriba
    >
      <img
        src={imageUrl}
        style={{ transform: `rotate(${rotation}deg)` }} 
        className='w-[80%]'
      />
      <div className='w-full flex flex-row justify-between my-5'>
        <span className='font-bold text-3xl'>{title}</span>
        <span className='text-2xl'>${price}</span>
      </div>
      <div className='text-base text-justify mb-5'>{description}</div>
      <ShimmerButton>Ver más</ShimmerButton>
    </div>
  );
};

// Componente Tours
const Tours: FunctionComponent = () => {
  const tourList = [
    { title: 'Tour 360', description: 'Descubre playas paradisíacas...', price: 150, imageUrl: 'https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros6-min_xkgphx.webp' },
    { title: 'Tour en Kayak', description: 'Remar por aguas cristalinas...', price: 100, imageUrl: 'https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros6-min_xkgphx.webp' },
    { title: 'Aventura Submarina', description: 'Explora el fascinante mundo submarino...', price: 200, imageUrl: 'https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros6-min_xkgphx.webp' },
    { title: 'Excursión a la Isla Española', description: 'Visita la famosa Isla Española...', price: 250, imageUrl: 'https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros6-min_xkgphx.webp' },
    { title: 'Trekking en la Isla San Cristóbal', description: 'Caminata por senderos...', price: 120, imageUrl: 'https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros6-min_xkgphx.webp' },
    { title: 'Noche de Estrellas', description: 'Disfruta de una noche observando las estrellas...', price: 80, imageUrl: 'https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros6-min_xkgphx.webp' },
    { title: 'Tour Cultural', description: 'Sumérgete en la historia...', price: 90, imageUrl: 'https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros6-min_xkgphx.webp' },
    { title: 'Excursión en Barco', description: 'Recorre las islas a bordo...', price: 300, imageUrl: 'https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros6-min_xkgphx.webp' },
    { title: 'Snorkeling con Tiburones', description: 'Vive la emoción de nadar...', price: 220, imageUrl: 'https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros6-min_xkgphx.webp' },
    { title: 'Aventura en la Isla Santa Cruz', description: 'Disfruta de una excursión...', price: 180, imageUrl: 'https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros6-min_xkgphx.webp' },
  ];
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
    <div className={`${(isLandscape && isMobile) ? "px-5" : "px-[10%]"} w-full h-fit flex flex-row flex-wrap justify-between`}>
      {tourList.map((tour, index) => (
        <Tour
          key={index}
          title={tour.title}
          description={tour.description}
          price={tour.price}
          imageUrl={tour.imageUrl}
        />
      ))}
    </div>
  );
};

export default Tours;
