"use client";

import React, { useState } from "react";

const CAMPO =
  "w-full rounded-[14px] border border-[#e8e8ed] bg-white px-4 text-[17px] text-[#1d1d1f] outline-none transition-shadow duration-300 placeholder:text-[#86868b] focus:border-[#0a1d39] focus:shadow-[0_0_0_4px_rgba(10,29,57,.10)]";

export default function FormMap() {
  const [formData, setFormData] = useState({ nombre: "", correo: "", mensaje: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <section className="w-full bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-44">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-stretch gap-6 lg:gap-10">
        <div className="min-w-[290px] flex-1 basis-[420px] rounded-[28px] border border-[#ececf0] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,.03),0_14px_36px_rgba(0,0,0,.06)] sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="block h-0.5 w-[26px] rounded-sm bg-[#ffc404]" />
            <span className="text-[12px] font-medium uppercase tracking-[.16em] text-[#86868b]">Escríbenos</span>
          </div>
          <h2 className="mb-7 text-[clamp(26px,2.6vw,36px)] font-semibold leading-tight tracking-[-0.03em] text-[#1d1d1f]">
            Contáctanos
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="nombre" className="text-[14px] font-medium text-[#1d1d1f]">Nombre</label>
              <input id="nombre" type="text" name="nombre" value={formData.nombre} onChange={handleChange} required
                     className={`h-[50px] ${CAMPO}`} />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="correo" className="text-[14px] font-medium text-[#1d1d1f]">Correo</label>
              <input id="correo" type="email" name="correo" value={formData.correo} onChange={handleChange} required
                     className={`h-[50px] ${CAMPO}`} />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="mensaje" className="text-[14px] font-medium text-[#1d1d1f]">Mensaje</label>
              <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} rows={5} required
                        className={`resize-y py-3.5 ${CAMPO}`} />
            </div>

            <button type="submit"
                    className="mt-1 inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#ffc404] px-8 text-[17px] font-semibold text-[#0a1d39] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                    style={{ transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }}>
              Enviar
            </button>
          </form>
        </div>

        <div id="mapa" className="min-h-[420px] min-w-[290px] flex-1 basis-[420px] overflow-hidden rounded-[28px] border border-[#ececf0] shadow-[0_1px_2px_rgba(0,0,0,.03),0_14px_36px_rgba(0,0,0,.06)]">
          <iframe
            title="Mapa Dive Evolution"
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=-0.9015394,-89.6110842&z=19&output=embed"
            style={{ filter: "grayscale(.32) contrast(1.03)" }}
          />
        </div>
      </div>
    </section>
  );
}
