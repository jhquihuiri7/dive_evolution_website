"use client";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";

const Nosotros: FunctionComponent = () => {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    // Función para detectar si la sección está en vista
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true); // La animación se dispara solo cuando la sección es visible
                } else {
                    setInView(false); // Se puede reiniciar si es necesario
                }
            },
            { threshold: 0.1 } // Ajustar este valor a 0.1 (o 1 si quieres que la animación solo se active cuando la sección esté completamente visible)
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia bibendum nulla sed consectetur. 
    Donec ullamcorper nisl id nisl scelerisque, sit amet consequat lorem feugiat. Sed et ante id arcu dictum feugiat. 
    Sed pharetra, nisi eget pharetra posuere, ante felis consectetur velit, non congue sapien dui eu dui. Aenean dapibus 
    vulputate turpis id hendrerit. Ut id libero sit amet lorem vulputate feugiat. Nam sit amet purus erat. Mauris non felis 
    nec leo vulputate posuere non non enim. Fusce sit amet lectus eget ante tincidunt lacinia. Nulla facilisi.`;

    const imageUrls: string[] = [
        "/images/nosotros1.jpg",
        "/images/nosotros2.jpg",
        "/images/nosotros3.jpg",
        "/images/nosotros4.jpg",
        "/images/nosotros5.jpg",
        "/images/nosotros6.jpg",
    ];

    const marginTopValues: string[] = ["0%", "5%", "10%", "10%", "5%", "0%"];

    return (
        <div ref={sectionRef} className="w-full h-screen flex flex-col justify-around items-center p-10">
            {/* TÍTULO */}
            <h2
                className={`text-[50px] font-black opacity-0 translate-y-[-20px] transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : ''}`}
            >
                Nosotros
            </h2>

            {/* IMÁGENES */}
            <div className="w-[70%] h-[60%] flex flex-row justify-around">
                {imageUrls.map((url, index) => (
                    <div
                        key={index}
                        className={`w-[15%] h-[70%] bg-red-500 bg-cover bg-center opacity-0 scale-75 translate-y-10 transform transition-all duration-[1500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${inView ? 'opacity-100 scale-100 translate-y-0' : ''}`}
                        style={{
                            backgroundImage: `url('${url}')`,
                            marginTop: marginTopValues[index],
                        }}
                    />
                ))}
            </div>

            {/* TEXTO */}
            <span
                className={`text-gray-500 text-lg px-36 opacity-0 translate-y-5 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : ''}`}
            >
                {text}
            </span>
        </div>
    );
};

export default Nosotros;
