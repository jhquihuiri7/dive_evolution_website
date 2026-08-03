"use client";

import { useReveals } from "@/lib/motion";

/**
 * Activa los .reveal de una pagina que, por lo demas, es server component.
 * La home hace esto mismo desde su page.tsx, que si es cliente; aqui evita
 * tener que volver cliente paginas enteras solo por el observer.
 */
export default function Reveals() {
  useReveals();
  return null;
}
