"use client"
import React, { FunctionComponent } from 'react';
import Navbar from './navbar';

const HeaderTour:FunctionComponent = () => {

    return(
        <div className="w-full h-screen">
			<div className='w-full h-[90%] bg-[#00273c] flex flex-col justify-between items-center'>
			    <Navbar></Navbar>
			    <div className='w-full h-screen flex flex-row justify-between'>
					<div className="w-1/2 h-full pl-20 flex flex-col justify-center items-center text-6xl text-white font-bold bg-center bg-[length:95%] bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/logicielapplab/image/upload/v1739769936/DIVE_EVOLUTION_2025/HEADER/SANCRISTOBAL_daeo0k.png')]">
					    Encuentra destinos maravisollos en San Cristobal
					</div>
					<div className="w-1/2 h-screen bg-left bg-cover bg-[url('https://res.cloudinary.com/logicielapplab/image/upload/v1739769164/DIVE_EVOLUTION_2025/HEADER/EB8A1884_ujrmg5.png')]">
					    
					</div>
				</div>
			</div>
      	</div>
    );
};

export default HeaderTour;