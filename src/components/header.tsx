"use client"
import React, { FunctionComponent } from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import Navbar from './navbar';


const Header:FunctionComponent = () => {
	const [show, setShow] = useState(false);
	const [iconSize, setIconSize] = useState<"2x" | "3x">("2x");

    useEffect(() => {
      setTimeout(() => setShow(true), 500);
	  const handleResize = () => {
		if (window.innerWidth < 640) { // sm: en Tailwind es 640px
			setIconSize("2x");
		} else {
			setIconSize("3x");
		}
	  };

	  handleResize(); // Llamar la función al inicio para ajustar el tamaño inicial
	  window.addEventListener("resize", handleResize);

	  return () => window.removeEventListener("resize", handleResize);
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

    return(
        <div className="bg-[url('https://res.cloudinary.com/logicielapplab/image/upload/v1739048429/DIVE_EVOLUTION_2025/HEADER/background-min_hhsp6g.webp')] text-black bg-cover bg-center w-full h-screen text-[13px] text-[#97979d] flex flex-col justify-between overflow-hidden">
			<Navbar></Navbar>
			<div className="h-20"></div>
			<div className='w-full flex flex-row justify-between items-start px-5 sm:px-10'>
			    <h1 className={`${(isMobile && isLandscape) ? "text-[40px] leading-[40px]": (isMobile) ? "text-[40px] leading-[40px]" : "text-[90px] leading-[90px]"} font-semibold text-white`}>EXPLORA, <br/>SUMÉRGETE Y VIVE<br/>LA AVENTURA</h1>
			    <div className='h-full hidden sm:flex flex-col justify-between'>
					<img src='/images/diveIcon.png' className={`${(isMobile && isLandscape) ? "h-14 w-20":"h-18 w-28"}`}></img>
					<img src='/images/tourIcon.png' className={`${(isMobile && isLandscape) ? "h-14 w-20":"h-18 w-28"}`}></img>
				</div>
			</div>
			<div className='w-full sm:w-1/2'>
				<div className= {`${(isMobile && isLandscape) ? "h-[80px] text-base": (isMobile) ? "h-[125px] text-lg": "h-[125px] text-2xl"} transition-transform transform ${show ? 'translate-x-0' : '-translate-x-full'} 
				duration-700 ease-out w-2/3 sm:w-2/3 bg-[#ffc404] flex flex-row justify-left items-center px-5 sm:px-10`}>Descubre la magia del mundo submarino con quienes han hecho del buceo su vida. </div>
				<div className={`${(isMobile && isLandscape) ? "h-[80px] text-sm": (isMobile) ? "h-[125px] text-base" : "h-[125px] text-lg"} transition-transform transform ${show ? 'translate-x-0' : '-translate-x-full'} 
				duration-700 ease-out w-full bg-[#ffc404] flex flex-row justify-between items-center px-5 sm:px-10`}>
					<a href='https://www.youtube.com/' className='w-full'>
					    <div className='flex flex-row justify-between items-center' >
					     <FontAwesomeIcon icon={faCirclePlay} size={iconSize}/>
						 <div className='w-full'>
						   <p className='mx-5 sm:mx-10 text-gray-500'>Reproduce un video para conocer <br/>nuestra experiencia</p>
						 </div>
					     <FontAwesomeIcon icon={faArrowRight} size={iconSize}/>
					    </div>
					</a>
				</div>
			</div>
        		
      	</div>
    );
};

export default Header;