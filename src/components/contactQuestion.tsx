import React, { FunctionComponent } from "react";

const ContactQuestion: FunctionComponent = () => {
  const text = "¿Tienes dudas o necesitas ayuda con tu reserva? Nuestro equipo está listo para asistirte.";
  const subtext = "¡Contáctanos y hagamos realidad tu próxima aventura!";

  return (
    <div className="my-14 flex w-full flex-col justify-center px-6 text-center text-3xl sm:my-20 sm:px-[12%] sm:text-4xl lg:px-[20%]">
      {text}
      <br />
      <p className="hidden sm:block">{subtext}</p>
    </div>
  );
};

export default ContactQuestion;
