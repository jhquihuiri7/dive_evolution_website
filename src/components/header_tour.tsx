"use client"
import React, { FunctionComponent, useState, useEffect } from 'react';
import Navbar from './navbar';

type HeaderTourProps = {
    backgroundImage: string;
	title: string;
};

const HeaderTour: FunctionComponent<HeaderTourProps> = ({ backgroundImage, title }) => {
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
			<div className='w-full h-[90%] bg-[#0a1d39] flex flex-col justify-between items-center'>
			    <Navbar change_items_color={true}></Navbar>
			    <div className={`w-full h-screen flex ${(isLandscape ? "flex-row justify-between" : "flex-col")}`}>
					<div className={`${(isLandscape && isMobile)? "w-1/2 pl-20 text-5xl": (isMobile) ? "w-full px-5 text-5xl" : "w-1/2 pl-20 text-6xl"} h-full  flex flex-col justify-center items-center text-white font-bold bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/logicielapplab/image/upload/v1739769936/DIVE_EVOLUTION_2025/HEADER/SANCRISTOBAL_daeo0k.png')]`}
					style={{
						backgroundSize: '100%',
					  }}>
					    {title}
					</div>
					<div
                      className={`${isLandscape ? "w-1/2 bg-left" : "w-full bg-center"} h-screen bg-cover`}
                      style={{ backgroundImage: `url(${backgroundImage})` }}
                    >
                    </div>

				</div>
			</div>
      	</div>
    );
};

export default HeaderTour;