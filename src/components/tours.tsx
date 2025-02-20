"use client"
import React, { FunctionComponent, useEffect, useState } from 'react';
import { ShimmerButton } from './magicui/shimmer-button';
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Componente Tour
interface TourProps {
  title: string;
  description: string;
  description_short: string;
  type: string;
  price: number;
  imageUrl: string;
  include: { icon: IconDefinition; item: string }[];
}

const Tour: FunctionComponent<TourProps> = ({ title, description, description_short, type, price, imageUrl, include }) => {
  
  // Hook de Intersection Observer para detectar cuando el componente entra en la vista
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo disparar la animación una vez cuando entra en la vista
    threshold: 0.5, // El componente debe estar al menos al 50% visible para activar la animación
  });
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
    <div
      ref={ref} // Asignar el ref a este div
      className={`h-fit ${(isMobile && !isLandscape) ? "w-full mb-5":"w-[29%]" } rounded-xl overflow-hidden shadow-lg flex flex-col justify-center items-center transition-all duration-500 ease-in-out transform hover:scale-110 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`} // Animación: cuando entra en la vista, se desvanece y se desplaza hacia arriba
    >
      <div className="relative w-full h-[200px]">
        <img
          src={imageUrl}
          className='w-full h-full object-cover'
        />
        <div className="absolute inset-0 flex flex-col pt-5 pl-5 justify-start items-start text-white font-bold text-xl">
          <div className='flex flex-row'>
            <img src={"/logo.png"} alt="Logo" className="w-8 object-contain mr-1" />
            <span
              className="text-sm text-white leading-[12px]"
            >
              Dive <br className='my-0'/>Evolution
            </span>
          </div>
          <span className='uppercase font-black my-2'>{type}</span>
        </div>
      </div>  
      <div className='w-full pl-5 flex flex-row'>
        <div className='relative bg-[#ffc404] -top-4 py-1 px-5 rounded-xl uppercase'>{title}</div>
      </div>
      <div className='w-full flex flex-col justify-center items-center px-5 pb-5'>
          <div className='flex flex-col justify-start items-start'>
              <span className='font-bold text-base'>{description}</span>
              <span className='font-bold text-sm text-gray-500 text-justify'>{description_short}</span>
          </div>
          <div className='w-full flex flex-col justify-center items-start text-base text-justify mt-5'>
              {include.map((item, idx) => (
                  <div key={idx} className="flex flex-row text-sm" style={{ color: idx === 0 ? "green" : "black" }}>
                    <div className='w-5'><FontAwesomeIcon icon={item.icon}/></div> {item.item}
                  </div>
                ))}
          </div>
          <div className='w-full flex flex-col justify-center items-end'>
            <span className='text-sm text-gray-500'>Desde:</span>
            <span className='text-2xl'>${price}<span className='text-base'>,00</span></span>
          </div>
          <ShimmerButton>Ver más</ShimmerButton>
      </div>
    </div>
  );
};

interface ToursProps {
  tourList: TourProps[];
}

// Componente Tours
const Tours: FunctionComponent<ToursProps> = ({ tourList}) => {

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
    <div className={`${(isLandscape && isMobile) ? "px-5" : "px-[10%]"} my-10 w-full h-fit flex ${(isMobile && !isLandscape) ? "flex-col justify-center items-center":"flex-row justify-around"} flex-wrap`}>
      {tourList.map((tour, index) => (
        <Tour
          key={index}
          title={tour.title}
          description={tour.description}
          description_short = {tour.description_short}
          price={tour.price}
          imageUrl={tour.imageUrl}
          include={tour.include}
          type={tour.type}
        />
      ))}
    </div>
  );
};

export default Tours;
