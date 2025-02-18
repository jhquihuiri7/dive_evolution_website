import React, { FunctionComponent, useState, useEffect} from 'react';
import { ShimmerButton } from './magicui/shimmer-button';

const ContactBody:FunctionComponent = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

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
  return (
    <div className={`w-full h-fit flex ${(isMobile && !isLandscape) ? "flex-col" : "flex-row"} justify-around my-10`}>
        <div className={`${(isMobile && !isLandscape) ? "w-full" : "w-[40%]"}  bg-white p-6 rounded-lg shadow-lg`}>
        <h2 className="text-xl font-bold mb-4">Contáctanos</h2>
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Correo</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Mensaje</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            rows={4}
            required
          ></textarea>
        </div>
        <ShimmerButton className="w-full text-white p-2 rounded-lg">Enviar</ShimmerButton>
            </form>
            </div>
        </div>
        <iframe 
              width={`${(isMobile && !isLandscape) ? "100%" : "50%"}`}
              height="500" 
              id="gmap_canvas" 
              src="https://maps.google.com/maps?q=-0.9015394,-89.6110842&z=19&output=embed">
        </iframe>
    </div>
    
  );
}

export default ContactBody;