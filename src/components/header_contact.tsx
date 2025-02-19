"use client"
import React, { FunctionComponent, useState, useEffect } from 'react';
import Navbar from './navbar';
import { ShinyButton } from './magicui/shiny-button';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const HeaderContact:FunctionComponent = () => {
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
    return(
        <div className="w-full h-screen">
			<Navbar></Navbar>
			<div className='w-full h-full flex flex-row justify-end bg-[#0a1d39]'>
				<div className="absolute w-1/2 h-full flex flex-row justify-left bg-center bg-cover bg-[url('https://res.cloudinary.com/logicielapplab/image/upload/v1739940793/DIVE_EVOLUTION_2025/CONTACT/EB8A2103-min_tgdwz2.webp')]"></div>
				<div className='w-full h-full flex flex-col justify-center items-start px-32 mt-5'>
				    <div className={`text-white ${ isMobile ? "text-4xl z-10" : "text-5xl"} font-bold mb-10`}>{(isMobile && isLandscape) ? "" : "Contacta con nosotros"}</div>
				    <div className={`w-full flex ${(isMobile && !isLandscape) ? "flex-col" : "flex-row"} justify-left items-center z-10`}>
				        <div className={`mr-20 ${(isMobile && isLandscape) ? "h-[250px] py-5" : (isMobile) ? "h-[300px] py-10 mr-0 mb-10" : "h-[300px] py-10"} px-5 flex flex-col justify-between items-center bg-[#f6f6fa] rounded-xl w-[325px]`}>
						        <FontAwesomeIcon icon={faLocationDot} size="3x" style={{ color: "#0a1d39" }}/>
								<p className='text-3xl font-semibold'>Visítanos</p>
				        		<p>Nuestras oficinas están situadas en Av. Isabela y Guillermo Vega Gallegos</p>
				                <ShinyButton className='bg-[#ffc404]'>Escribenos</ShinyButton>
						</div>
				    	<div className={`${(isMobile && isLandscape) ? "h-[250px] py-5" : "h-[300px] py-10"} px-5 flex flex-col justify-between items-center bg-[#f6f6fa] rounded-xl w-[325px]`}>
                                <FontAwesomeIcon icon={faWhatsapp} size="3x" style={{ color: "#25d366" }}/>
								<p className='text-3xl font-semibold'>Cheaemos</p>
				        		<p>Prefer to speak on the phone? Give us a ring so we can help.</p>
								<ShinyButton className='bg-[#ffc404]'>+593982291894</ShinyButton>
				        </div>
				    </div>
				</div>
			</div>
      	</div>
    );
};

export default HeaderContact;