import React, { FunctionComponent } from 'react';

const ContactQuestion:FunctionComponent = () => {

    const text = "¿Tienes dudas o necesitas ayuda con tu reserva? Nuestro equipo está listo para asistirte."
    const subtext = "¡Contáctanos y hagamos realidad tu próxima aventura!"
    return (
        <div className='w-full my-20 px-[20%] text-center text-4xl flex flex-col justify-center'>
          {text}<br/><p className='hidden sm:flex'>{subtext}</p>
        </div>
    );
}
export default ContactQuestion;
