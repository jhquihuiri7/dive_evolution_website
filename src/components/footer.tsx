"use client";
import React, { FunctionComponent, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer: FunctionComponent = () => {
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
        <div className={`flex ${(isMobile) ? "flex-col p-10": "flex-row p-20"}  justify-between items-center h-fit w-full bg-no-repeat bg-right bg-contain bg-white bg-[url('https://res.cloudinary.com/logicielapplab/image/upload/v1739330356/DIVE_EVOLUTION_2025/FOOTER/SANCRISTOBALMAP_WRECKBAY_ppiuhs_l3e34k.webp')]`}>
            <div className="flex flex-row items-center">
                <img src="/logo_black.png" alt="Logo" className="h-10 mr-5" />
                <span
                  className={`text-xl font-bold text-black`}
                >
              Dive Evolution
            </span>
            </div>
            <div className={`text-justify ${(isMobile && isLandscape) ? "w-3/5 py-2" : (isMobile) ? "w-4/5 py-2" : "w-2/5"}`}>
            Nos esforzamos por brindarte datos precisos y confiables. Para una asesoría personalizada, contáctanos; con gusto te atenderemos.
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="w-24 flex flex-row justify-between">
                    <a href="youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="xl" style={{ color: "#000000" }}/></a>
                    <a href="youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="xl" style={{ color: "#000000" }}/></a>
                    <a href="youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} size="xl" style={{ color: "#000000" }}/></a>
                </div>
                <div>© 2006-2025 Dive.com, Inc</div>
            </div>
        </div>
    );
}

export default Footer;