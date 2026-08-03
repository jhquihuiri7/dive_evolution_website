"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export const EASE = "cubic-bezier(0.25,0.1,0.25,1)";

export const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Revela los elementos con clase .reveal al entrar en viewport.
 * Un solo observer para toda la página: más barato que un hook por card.
 */
export function useReveals(scope?: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = scope?.current ?? document;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    if (prefersReduced()) {
      nodes.forEach((n) => n.setAttribute("data-shown", "true"));
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const d = el.dataset.delay ?? "0";
          el.style.transitionDelay = `${d}ms`;
          el.setAttribute("data-shown", "true");
          obs.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [scope]);
}

/** true cuando se ha bajado más de `ratio` de la altura de pantalla. */
export function useScrolledPast(ratio = 0.6) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setPast(window.scrollY > window.innerHeight * ratio);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [ratio]);
  return past;
}

/** Parallax suave: mueve el elemento a `k` veces la velocidad del scroll. */
export function useParallax<T extends HTMLElement>(k = 0.3) {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (prefersReduced()) return;
    let raf = 0;
    const paint = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const y = window.scrollY;
      if (y < window.innerHeight * 1.5)
        el.style.transform = `translate3d(0,${(y * k).toFixed(1)}px,0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(paint); };
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [k]);
  return ref;
}

/** Progreso 0→1 de un contenedor alto usado como escenario pinned. */
export function useStageProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const paint = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      setP(Math.min(1, Math.max(0, -r.top / Math.max(1, total))));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(paint); };
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return { ref, p };
}

export const WHATSAPP = "https://wa.me/593982291894";
