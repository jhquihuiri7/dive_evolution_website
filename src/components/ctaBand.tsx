import Link from "next/link";
import { WHATSAPP } from "@/lib/motion";

const BG = "https://res.cloudinary.com/logicielapplab/image/upload/v1739079631/DIVE_EVOLUTION_2025/REVIEWS/reviews_background_ozbzkr.webp";

export default function CtaBand() {
  return (
    <section className="w-full bg-white px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
      <div className="reveal relative mx-auto max-w-[1280px] overflow-hidden rounded-[clamp(24px,3vw,36px)] bg-[#0a1d39] px-6 py-16 text-center sm:px-12 sm:py-24 lg:px-20 lg:py-32">
        <div className="absolute inset-x-0 -top-[20%] -bottom-[20%] bg-cover bg-center opacity-50" style={{ backgroundImage: `url('${BG}')` }} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,29,57,.72),rgba(6,11,18,.88))]" />
        <div className="relative z-[2]">
          <h2 className="mx-auto mb-5 max-w-[20ch] text-[clamp(30px,4.4vw,62px)] font-semibold leading-[1.05] tracking-[-0.04em] text-white [text-wrap:balance]">
            ¿Tienes dudas o necesitas ayuda con tu reserva?
          </h2>
          <p className="mx-auto mb-9 max-w-[46ch] text-[clamp(17px,1.6vw,21px)] font-light leading-[1.5] text-white/70 sm:mb-11">
            Nuestro equipo está listo para asistirte. Contáctanos y hagamos realidad tu próxima aventura.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
               className="inline-flex min-h-[52px] items-center rounded-full bg-[#ffc404] px-8 text-[17px] font-semibold text-[#0a1d39] transition-transform duration-500 hover:-translate-y-0.5 hover:scale-[1.03]"
               style={{ transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }}>
              Reservar por WhatsApp
            </a>
            <Link href="/contacto"
                  className="inline-flex min-h-[52px] items-center rounded-full border border-white/25 bg-white/[.08] px-8 text-[17px] font-medium text-white backdrop-blur-lg transition-transform duration-500 hover:-translate-y-0.5">
              Formulario de contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
