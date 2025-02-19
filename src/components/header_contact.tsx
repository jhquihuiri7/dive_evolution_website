"use client"
import React, { FunctionComponent, useState, useEffect } from 'react';
import Navbar from './navbar';
import { ShinyButton } from './magicui/shiny-button';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from "motion/react"


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

			const cardVariants = {
				hidden: { opacity: 0, scale: 0 },
				visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
			  };
    return(
        <div className="w-full h-screen">
			<Navbar></Navbar>
			<div className='w-full h-full flex flex-row justify-end'>
				<div className="absolute w-1/2 h-full flex flex-row justify-left bg-center bg-cover bg-[url('https://res.cloudinary.com/logicielapplab/image/upload/v1739048429/DIVE_EVOLUTION_2025/HEADER/background-min_hhsp6g.webp')]"></div>
				<div className='w-full h-full flex flex-col justify-center items-start px-32 mt-5'>
				    <div className={`${ isMobile ? "text-4xl z-10" : "text-6xl"} font-bold mb-10`}>{(isMobile && isLandscape) ? "" : "Contactanos"}</div>
				    <div className={`w-full flex ${(isMobile && !isLandscape) ? "flex-col" : "flex-row"} justify-left items-center z-10`}>
						<motion.div 
                        initial="hidden"
						animate="visible"
						variants={cardVariants}
						className={`mr-20 ${(isMobile && isLandscape) ? "h-[250px] py-5" : (isMobile) ? "h-[300px] py-10 mr-0 mb-10" : "h-[300px] py-10"} px-5 flex flex-col justify-between items-center bg-[#f6f6fa] rounded-xl w-[325px]`}>
						        <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="3x" style={{ color: "#0165a1" }}/>
								<p className='text-3xl font-semibold'>Cheaemos</p>
				        		<p>Our team is ready to answer your questions on live chat - it’s quick and easy.</p>
				                <ShinyButton className='w-full'>Escribenos</ShinyButton>
						</motion.div>
				    	<motion.div 
						initial="hidden"
						animate="visible"
						variants={cardVariants}
						className={`${(isMobile && isLandscape) ? "h-[250px] py-5" : "h-[300px] py-10"} px-5 flex flex-col justify-between items-center bg-[#f6f6fa] rounded-xl w-[325px]`}>
                                <FontAwesomeIcon icon={faWhatsapp} size="3x" style={{ color: "#25d366" }}/>
								<p className='text-3xl font-semibold'>Cheaemos</p>
				        		<p>Prefer to speak on the phone? Give us a ring so we can help.</p>
								<ShinyButton>+593982291894</ShinyButton>
				        </motion.div>
				    </div>
				</div>
			</div>
      	</div>
    );
};

export default HeaderContact;