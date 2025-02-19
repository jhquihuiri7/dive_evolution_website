"use client";
import { useRef, useState, useEffect, RefObject } from "react";
import Header from "@/components/header";
import Highlight from "@/components/highlight";
import Nosotros from "@/components/nosotros";
import Opinions from "@/components/opinions";
import Footer from "@/components/footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./embla.css";

export default function Home() {
  const section1Ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const section2Ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const section3Ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const section4Ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;



  const sectionsRef = [section1Ref, section2Ref, section3Ref, section4Ref];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Función para desplazarse a una sección con control de scroll
  const scrollToSection = (index: number) => {
    if (isScrolling || index < 0 || index >= sectionsRef.length) return;

    setIsScrolling(true); // Bloqueamos cambios mientras se mueve
    sectionsRef[index].current?.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      setCurrentIndex(index);
      setIsScrolling(false); // Desbloqueamos después del scroll
    }, 600); // Ajuste del tiempo según la velocidad del scroll
  };

  // Detectar la sección visible con IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return; // Evita interferencias con scroll programado
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const newIndex = sectionsRef.findIndex(
              (ref) => ref.current === entry.target
            );
            if (newIndex !== currentIndex) {
              setCurrentIndex(newIndex);
            }
            break;
          }
        }
      },
      { threshold: 0.5 } // Detecta cuando el 50% de la sección está visible
    );

    sectionsRef.forEach((section) => {
      if (section.current) observer.observe(section.current);
    });

    return () => observer.disconnect();
  }, [isScrolling]); // Agregamos isScrolling para evitar interferencias

  return (
    <div>
      <div className="fixed right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-40">
        <img
          src="/images/diveIcon.png"
          alt="Anterior"
          className={`cursor-pointer ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:scale-110 transition"
          }`}
          onClick={() => scrollToSection(currentIndex - 1)}
        />
        <img
          src="/images/tourIcon.png"
          alt="Siguiente"
          className={`cursor-pointer ${
            currentIndex === sectionsRef.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:scale-110 transition"
          }`}
          onClick={() => scrollToSection(currentIndex + 1)}
        />
      </div>
      <Header refProp={section1Ref} />
      <Nosotros refProp={section2Ref} />
      <Highlight refProp={section3Ref} />
      <Opinions refProp={section4Ref} />
      <Footer />
    </div>
  );
}
