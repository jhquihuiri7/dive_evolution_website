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

    return(
        <div className="bg-[url('/images/background1.jpeg')] text-black bg-cover bg-center w-full h-screen text-[13px] text-[#97979d] flex flex-col justify-between overflow-hidden">
			<Navbar></Navbar>
			<div className="h-20"></div>
			<div className='w-full flex flex-row justify-between items-start px-5 sm:px-10'>
			    <h1 className='text-[40px] sm:text-[90px] font-semibold text-white leading-[40px] sm:leading-[90px]'>EXPLORA, <br/>SUMÉRGETE Y VIVE<br/>LA AVENTURA</h1>
			    <div className='h-full hidden sm:flex flex-col justify-between'>
					<img src='/images/diveIcon.png'></img>
					<img src='/images/tourIcon.png'></img>
				</div>
			</div>
			<div className='w-full sm:w-1/2'>
				<div className= {`transition-transform transform ${show ? 'translate-x-0' : '-translate-x-full'} 
				duration-700 ease-out w-2/3 sm:w-2/3 h-[125px] bg-[#ffc404] text-lg sm:text-2xl flex flex-row justify-left items-center px-5 sm:px-10`}>Descubre la magia del mundo submarino con quienes han hecho del buceo su vida. </div>
				<div className={`transition-transform transform ${show ? 'translate-x-0' : '-translate-x-full'} 
				duration-700 ease-out w-full h-[125px] bg-[#ffc404] text-4xl flex flex-row justify-between items-center px-5 sm:px-10`}>
					<a href='https://www.youtube.com/' className='w-full'>
					    <div className='flex flex-row justify-between items-center text-base sm:text-lg' >
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