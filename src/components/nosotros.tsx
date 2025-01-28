import React, { FunctionComponent } from 'react';

const Nosotros: FunctionComponent = () => {
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia bibendum nulla sed consectetur. 
    Donec ullamcorper nisl id nisl scelerisque, sit amet consequat lorem feugiat. Sed et ante id arcu dictum feugiat. 
    Sed pharetra, nisi eget pharetra posuere, ante felis consectetur velit, non congue sapien dui eu dui. Aenean dapibus 
    vulputate turpis id hendrerit. Ut id libero sit amet lorem vulputate feugiat. Nam sit amet purus erat. Mauris non felis 
    nec leo vulputate posuere non non enim. Fusce sit amet lectus eget ante tincidunt lacinia. Nulla facilisi.`;

    // Listas de URLs de las imágenes y los márgenes
    const imageUrls: string[] = [
        '/images/nosotros1.jpg',
        '/images/nosotros1.jpg',
        '/images/nosotros1.jpg',
        '/images/nosotros1.jpg',
        '/images/nosotros1.jpg',
        '/images/nosotros1.jpg'
    ];

    const marginTopValues: string[] = ['0%', '5%', '10%', '10%', '5%', '0%'];

    return (
        <div className='w-full h-screen flex flex-col justify-around items-center p-10'>
            <h2 className='text-[50px] font-black'>Nosotros</h2>
            <div className='w-[70%] h-[60%] flex flex-row justify-around'>
                {/* Generación dinámica de los divs */}
                {imageUrls.map((url, index) => (
                    <div
                        key={index}
                        className="w-[15%] h-[70%] bg-red-500 bg-cover bg-center"
                        style={{ backgroundImage: `url('/images/nosotros1.jpg')`, marginTop: marginTopValues[index] }}
                    />
                ))}
            </div>
            <span className='text-gray-500 text-lg px-36'>{text}</span>
        </div>
    );
};

export default Nosotros;
