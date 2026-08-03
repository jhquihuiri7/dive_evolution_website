"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useScrolledPast, WHATSAPP } from "@/lib/motion";

const NAV = [
  { text: "Inicio", url: "/" },
  { text: "Tours", url: "/tours" },
  { text: "Cursos", url: "/cursos" },
  { text: "Contacto", url: "/contacto" },
];

/**
 * Nav de vidrio esmerilado. Sobre el hero es transparente; al pasar el hero
 * gana blur + fondo translúcido y se compacta de 76px a 58px.
 */
export default function Navbar() {
  const solid = useScrolledPast(0.6);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const link = solid ? "text-[rgba(29,29,31,.78)]" : "text-white/85";

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-[80] w-full border-b transition-[background-color,backdrop-filter,border-color] duration-500 ${
          solid
            ? "border-black/[.07] bg-white/75 backdrop-blur-2xl backdrop-saturate-[1.8]"
            : "border-transparent bg-transparent"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }}
      >
        <div
          className="mx-auto flex max-w-[1280px] items-center justify-between px-5 transition-[height] duration-500 sm:px-8 lg:px-12"
          style={{ height: solid ? 58 : 76, transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }}
        >
          <Link href="/" className="flex min-h-[44px] items-center gap-2.5">
            <Image src={solid ? "/logo_black.png" : "/logo.png"} alt="Dive Evolution" width={34} height={34} priority className="h-[34px] w-[34px] object-contain" />
            <span className={`text-[19px] font-semibold tracking-[-0.02em] transition-colors duration-500 ${solid ? "text-[#1d1d1f]" : "text-white"}`}>
              Dive Evolution
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex lg:gap-9">
            {NAV.map(({ text, url }) => (
              <Link key={text} href={url} className={`inline-flex min-h-[44px] items-center text-[15px] transition-colors duration-500 ${link}`}>
                {text}
              </Link>
            ))}
            {/* CTA de reserva: único uso del amarillo de marca en la barra */}
            <a
              href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center rounded-full bg-[#ffc404] px-5 text-[15px] font-semibold text-[#0a1d39] transition-transform duration-300 hover:-translate-y-px hover:scale-[1.03] hover:shadow-[0_10px_26px_rgba(255,196,4,.42)]"
              style={{ transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }}
            >
              Reservar
            </a>
          </div>

          {/* Hamburguesa: 44px de área táctil, se convierte en aspa */}
          <button
            type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-2.5 flex h-11 w-11 items-center justify-center md:hidden"
          >
            <span className="flex flex-col gap-[5px]">
              {[0, 1].map((i) => (
                <span
                  key={i}
                  className={`block h-[1.5px] w-[22px] rounded-sm transition-all duration-[400ms] ${open || !solid ? "bg-white" : "bg-[#1d1d1f]"}`}
                  style={{
                    transform: open ? `translateY(${i ? -3.25 : 3.25}px) rotate(${i ? -45 : 45}deg)` : "none",
                    transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)",
                  }}
                />
              ))}
            </span>
          </button>
        </div>
      </nav>

      {/* Hoja móvil a pantalla completa, vidrio oscuro */}
      <div
        className="fixed inset-0 z-[75] flex flex-col justify-center gap-1.5 bg-[rgba(6,11,18,.72)] px-6 backdrop-blur-3xl backdrop-saturate-[1.8] transition-opacity duration-500 sm:px-12 md:hidden"
        style={{ opacity: open ? 1 : 0, visibility: open ? "visible" : "hidden", transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }}
      >
        {NAV.map(({ text, url }) => (
          <Link key={text} href={url} onClick={() => setOpen(false)} className="py-3.5 text-[clamp(30px,7vw,44px)] font-semibold tracking-[-0.03em] text-white">
            {text}
          </Link>
        ))}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
           className="mt-7 inline-flex min-h-[52px] w-fit items-center rounded-full bg-[#ffc404] px-8 text-[17px] font-semibold text-[#0a1d39]">
          Reservar por WhatsApp
        </a>
      </div>
    </>
  );
}
