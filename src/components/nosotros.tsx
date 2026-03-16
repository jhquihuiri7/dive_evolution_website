"use client";

import React, { RefObject } from "react";

interface SectionProps {
  refProp: RefObject<HTMLDivElement>;
}

const images = [
  {
    img: "https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros1-min_rgjfsr.webp",
    descripcion: "Zalophus wollebaeki, isla San Cristóbal, Galápagos.",
    offsetClass: "lg:mt-0",
  },
  {
    img: "https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros2-min_t9zisb.webp",
    descripcion: "Isla Isabela, Galápagos.",
    offsetClass: "lg:mt-[5%]",
  },
  {
    img: "https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros3-min_pryimu.webp",
    descripcion: "Sesuvium portulacastru, isla Floreana, Galápagos.",
    offsetClass: "lg:mt-[10%]",
  },
  {
    img: "https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros4-min_ual3i8.webp",
    descripcion: "Kicker rock, San Cristóbal, Galápagos.",
    offsetClass: "lg:mt-[10%]",
  },
  {
    img: "https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros5-min_lm2hqd.webp",
    descripcion: "Isla San Cristóbal, Galápagos.",
    offsetClass: "lg:mt-[5%]",
  },
  {
    img: "https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros6-min_xkgphx.webp",
    descripcion: "Fregata minor, isla San Cristóbal, Galápagos.",
    offsetClass: "lg:mt-0",
  },
];

const Nosotros: React.FC<SectionProps> = ({ refProp }) => {
  const text =
    "En DIVE EVOLUTION, más de 25 años de experiencia nos respaldan. Somos un Centro de Enseñanza Recreativa certificado por PSS (Professional Scuba School), una de las organizaciones de formación de buceadores más prestigiosas del mundo.";

  return (
    <section
      ref={refProp}
      className="flex min-h-[100svh] w-full flex-col items-center justify-around bg-black p-6 sm:p-10"
    >
      <div className="mb-5 flex w-full flex-row justify-start">
        <div className="mt-6 flex w-full max-w-[400px] flex-col items-center justify-center">
          <h2 className="text-center text-4xl font-bold text-white sm:text-5xl">¿Quiénes somos?</h2>
          <div className="h-2 w-[80%] bg-[#ffc404]" />
        </div>
      </div>

      <div className="flex w-full flex-wrap justify-around gap-3 sm:gap-4 lg:h-[60%] lg:w-[75%] lg:flex-nowrap">
        {images.map((image, index) => (
          <div
            key={index}
            className={`group flex h-44 w-[48%] flex-col justify-end bg-cover bg-center transition-transform duration-300 sm:h-52 sm:w-[31%] lg:h-[70%] lg:w-[15%] lg:hover:scale-110 ${image.offsetClass}`}
            style={{ backgroundImage: `url('${image.img}')` }}
          >
            <div className="flex min-h-[80px] w-full items-center justify-center bg-[#163E64] px-2 text-center text-xs text-white lg:hidden lg:group-hover:flex">
              {image.descripcion}
            </div>
          </div>
        ))}
      </div>

      <span className="mt-5 px-[5%] text-center text-lg text-white sm:px-[10%] lg:px-[25%]">{text}</span>
    </section>
  );
};

export default Nosotros;
