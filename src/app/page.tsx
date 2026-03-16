"use client";

import { RefObject, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Highlight from "@/components/highlight";
import Nosotros from "@/components/nosotros";
import Opinions from "@/components/opinions";
import Footer from "@/components/footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./embla.css";

config.autoAddCss = false;

export default function Home() {
  const section1Ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const section2Ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const section3Ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const section4Ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const timeoutRef = useRef<number | null>(null);

  const sectionsRef = useMemo(
    () => [section1Ref, section2Ref, section3Ref, section4Ref],
    [section1Ref, section2Ref, section3Ref, section4Ref],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (index: number) => {
    if (isScrolling || index < 0 || index >= sectionsRef.length) return;

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    setIsScrolling(true);
    sectionsRef[index].current?.scrollIntoView({ behavior: "smooth" });

    timeoutRef.current = window.setTimeout(() => {
      setCurrentIndex(index);
      setIsScrolling(false);
    }, 600);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return;

        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const newIndex = sectionsRef.findIndex((ref) => ref.current === entry.target);
          if (newIndex !== -1) setCurrentIndex(newIndex);
          break;
        }
      },
      { threshold: 0.5 },
    );

    sectionsRef.forEach((section) => {
      if (section.current) observer.observe(section.current);
    });

    return () => {
      observer.disconnect();
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [isScrolling, sectionsRef]);

  return (
    <div>
      <div className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 transform flex-col gap-3 sm:flex sm:right-5 sm:gap-4">
        <button
          type="button"
          onClick={() => scrollToSection(currentIndex - 1)}
          disabled={currentIndex === 0}
          className={`cursor-pointer ${
            currentIndex === 0 ? "cursor-not-allowed opacity-50" : "transition hover:scale-110"
          }`}
          aria-label="Ir a la seccion anterior"
        >
          <Image src="/images/diveIcon.png" alt="Anterior" width={40} height={40} />
        </button>

        <button
          type="button"
          onClick={() => scrollToSection(currentIndex + 1)}
          disabled={currentIndex === sectionsRef.length - 1}
          className={`cursor-pointer ${
            currentIndex === sectionsRef.length - 1
              ? "cursor-not-allowed opacity-50"
              : "transition hover:scale-110"
          }`}
          aria-label="Ir a la siguiente seccion"
        >
          <Image src="/images/tourIcon.png" alt="Siguiente" width={40} height={40} />
        </button>
      </div>

      <Header refProp={section1Ref} />
      <Nosotros refProp={section2Ref} />
      <Highlight refProp={section3Ref} />
      <Opinions refProp={section4Ref} />
      <Footer />
    </div>
  );
}
