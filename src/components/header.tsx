"use client"
import React, { FunctionComponent } from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCirclePlay } from '@fortawesome/free-solid-svg-icons';


const Header:FunctionComponent = () => {
	const [show, setShow] = useState(false);

    useEffect(() => {
      setTimeout(() => setShow(true), 500);
    }, []);

    return(
        <div className="bg-[url('/images/background.jpg')] text-black bg-cover bg-center w-full h-screen text-[13px] text-[#97979d] flex flex-col justify-between">
			<div className='h-20 bg-transparent hover:bg-white'></div>
			<div className='flex flex-row justify-between mr-10'>
				<div className='flex flex-col justify-start items-start ml-10'>
					<h2 className='text-[20px] font-bold text-white'>DEJANOS PLANEAR TU PERFECTO </h2>
					<h1 className='text-[90px] font-black text-white leading-[90px]'>VIAJE EN <br/>GALAPAGOS</h1>
				</div>
				<div className='flex flex-col justify-center items-center'>
					<div className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white font-semibold'>1</div>
					<div className='w-1 h-[100px] bg-white'></div>
					<div className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white font-semibold'>2</div>
					<div className='w-1 h-[100px] bg-white'></div>
					<div className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white font-semibold'>3</div>
				</div>
			</div>
			<div className='w-1/2'>
				<div className= {`transition-transform transform ${show ? 'translate-x-0' : '-translate-x-full'} 
				duration-700 ease-out w-2/3 h-[150px] bg-white text-4xl flex flex-row justify-left items-center px-10`}>Conoce mas</div>
				<div className={`transition-transform transform ${show ? 'translate-x-0' : '-translate-x-full'} 
				duration-700 ease-out w-full h-[150px] bg-white text-4xl flex flex-row justify-left items-center px-10`}>
					<a href='https://www.youtube.com/'>
					    <div className='flex flex-row justify-left items-center text-lg px-10'>
					     <FontAwesomeIcon icon={faCirclePlay} size='3x'/>
					     <p className='mx-10 text-gray-500'>Reproduce un video para conocer <br/>nuestra experiencia</p>
					     <FontAwesomeIcon icon={faArrowRight} size='3x'/>
					    </div>
					</a>
				</div>
			</div>
        		
      	</div>
    );
};

export default Header;