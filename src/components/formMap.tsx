"use client";

import React, { FunctionComponent, useState } from "react";
import { ShimmerButton } from "./magicui/shimmer-button";

const FormMap: FunctionComponent = () => {
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

  return (
    <div className="my-10 flex h-fit w-full flex-col justify-around gap-6 px-4 sm:px-6 lg:flex-row lg:gap-0">
      <div className="w-full rounded-lg bg-white p-6 shadow-lg lg:w-[40%]">
        <h2 className="mb-4 text-xl font-bold">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
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
              className="w-full rounded-lg border p-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Mensaje</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
              rows={4}
              required
            />
          </div>

          <ShimmerButton className="w-full rounded-lg p-2 text-black" background="rgba(255, 196, 4, 1)">
            Enviar
          </ShimmerButton>
        </form>
      </div>

      <iframe
        title="Mapa Dive Evolution"
        className="h-[500px] w-full lg:w-1/2"
        id="gmap_canvas"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://maps.google.com/maps?q=-0.9015394,-89.6110842&z=19&output=embed"
      />
    </div>
  );
};

export default FormMap;
