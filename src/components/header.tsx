"use client"
import React, { FunctionComponent } from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import Navbar from './navbar';


const Header:FunctionComponent = () => {
	const [show, setShow] = useState(false);

    useEffect(() => {
      setTimeout(() => setShow(true), 500);
    }, []);

    return(
        <div className="bg-[url('/images/background1.jpeg')] text-black bg-cover bg-center w-full h-screen text-[13px] text-[#97979d] flex flex-col justify-between">
			<Navbar/>
			<div className="h-20"></div>
			<div className='flex flex-row justify-start items-start mx-10'>
			    <h1 className='text-[90px] font-semibold text-white leading-[90px]'>EXPLORA, <br/>SUMÉRGETE Y VIVE<br/>LA AVENTURA</h1>
			</div>
			<div className='w-1/2'>
				<div className= {`transition-transform transform ${show ? 'translate-x-0' : '-translate-x-full'} 
				duration-700 ease-out w-2/3 h-[125px] bg-[#ffc404] text-2xl flex flex-row justify-left items-center px-10`}>Descubre la magia del mundo submarino con quienes han hecho del buceo su vida. </div>
				<div className={`transition-transform transform ${show ? 'translate-x-0' : '-translate-x-full'} 
				duration-700 ease-out w-full h-[125px] bg-[#ffc404] text-4xl flex flex-row justify-left items-center px-10`}>
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