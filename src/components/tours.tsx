"use client"
import React, { FunctionComponent } from 'react';


const Tours:FunctionComponent = () => {
    return(
        <div className='w-full h-fit px-[10%]'>
           <div className='h-fit w-[300px] flex flex-col justify-center items-center'>
                <img src='https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros6-min_xkgphx.webp'/>
                <div className='w-full flex flex-row justify-between'>
                    <span>Title</span>
                    <span>$150</span>
                </div>
                <div>Description</div>
                
           </div>
        </div>
    );
}

export default Tours;