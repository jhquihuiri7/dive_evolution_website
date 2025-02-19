import React, { FunctionComponent } from 'react';

const ContactQuestion:FunctionComponent = () => {

    const text = "¿Tienes dudas o necesitas ayuda con tu reserva? Nuestro equipo está listo para asistirte."
    const subtext = "¡Contáctanos y hagamos realidad tu próxima aventura!"
    return (
        <div className='w-full my-20 px-[20%] text-center text-4xl flex flex-row justify-center'>
          {text}<br/>{subtext}
        </div>
    );
}
export default ContactQuestion;
