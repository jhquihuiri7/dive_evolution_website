"use client";
import React, { FunctionComponent } from "react";

const Nosotros: FunctionComponent = () => {
    
    const text = `En DIVE EVOLUTION, más de 25 años de experiencia nos respaldan. Somos un Centro de Enseñanza 
    Recreativa certificado por PSS (Professional Scuba School), una de las organizaciones de formación de buceadores 
    más prestigiosas del mundo`;

    const images = [
        {
            "img": "https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros1-min_rgjfsr.webp",
            "descripcion": "Zalophus wollebaeki, isla San Cristóbal, Galápagos."
        },
        {
            "img": "https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros2-min_t9zisb.webp",
            "descripcion": "Dive, isla Isabela."
        },
        {
            "img": "https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros3-min_pryimu.webp",
            "descripcion": "Sesuvium portulacastru, isla Floreana, Galápagos."
        },
        {
            "img": "https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros4-min_ual3i8.webp",
            "descripcion": "Kicker rock, San Cristóbal, Galápagos."
        },
        {
            "img": "https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros5-min_lm2hqd.webp",
            "descripcion": "Diving, Santa Cruz Galápagos."
        },
        {
            "img": "https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros6-min_xkgphx.webp",
            "descripcion": "Fregata minor, isla San Cristóbal, Galápagos."
        }
    ]
    

    const marginTopValues: string[] = ["0%", "5%", "10%", "10%", "5%", "0%"];

    return (
        <div className="w-full h-screen flex flex-col justify-around items-center p-10">
            {/* TÍTULO */}
            <div className='w-[300px] mt-6 flex flex-col justify-center items-center'>
                <h2 className='text-6xl font-bold text-black'>Nosotros</h2>
                <div className='w-full h-4 bg-[#ffc404]'></div>
            </div>

            {/* IMÁGENES */}
            <div className="w-[1000px] h-[60%] flex flex-row justify-around">
                {images.map((image, index) => (
                    <div
                    key={index}
                    className="w-[300px] h-[80%] flex flex-col justify-end bg-cover bg-center transition-transform duration-300 hover:scale-150 group"
                    style={{
                        backgroundImage: `url('${image.img}')`,
                        marginTop: marginTopValues[index],
                    }}
                >
                    <div className="w-full h-[100px] bg-[#163E64] hidden group-hover:flex items-center justify-center text-white text-center px-2">
                        {image.descripcion}
                    </div>
                </div>
                
                ))}
            </div>

            {/* TEXTO */}
            <span
                className={`text-black text-lg text-center px-[25%] mt-5`}
            >
                {text}
            </span>
        </div>
    );
};

export default Nosotros;
