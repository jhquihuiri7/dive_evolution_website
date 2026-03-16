"use client";

import React, { RefObject, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";

interface SectionProps {
  refProp: RefObject<HTMLDivElement>;
}

const Header: React.FC<SectionProps> = ({ refProp }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timerId = window.setTimeout(() => setShow(true), 500);
    return () => window.clearTimeout(timerId);
  }, []);

  return (
    <div
      ref={refProp || undefined}
      className="flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[url('https://res.cloudinary.com/logicielapplab/image/upload/v1739048429/DIVE_EVOLUTION_2025/HEADER/background-min_hhsp6g.webp')] bg-cover bg-center text-[#97979d]"
    >
      <Navbar change_items_color={false} />
      <div className="h-20" />

      <div className="flex w-full flex-row items-start justify-between px-5 sm:px-10">
        <h1 className="text-[40px] font-semibold leading-[40px] text-white sm:text-[90px] sm:leading-[90px]">
          EXPLORA, <br />
          SUMÉRGETE Y VIVE
          <br />
          LA AVENTURA
        </h1>
      </div>

      <div className="w-full sm:w-1/2">
        <div
          className={`h-[120px] w-4/5 transform bg-[#ffc404] px-5 text-gray-500 transition-transform duration-700 ease-out sm:h-[125px] sm:w-2/3 sm:px-10 sm:text-2xl ${
            show ? "translate-x-0" : "-translate-x-full"
          } flex items-center justify-start`}
        >
          Descubre la magia del mundo submarino con quienes han hecho del buceo su vida.
        </div>

        <div
          className={`h-[110px] w-full transform bg-[#ffc404] px-5 text-sm transition-transform duration-700 ease-out sm:h-[125px] sm:px-10 sm:text-lg ${
            show ? "translate-x-0" : "-translate-x-full"
          } flex items-center justify-between`}
        >
          <a href="https://www.youtube.com/" className="w-full" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row items-center justify-between">
              <div className="sm:hidden">
                <FontAwesomeIcon icon={faCirclePlay} size="2x" />
              </div>
              <div className="hidden sm:block">
                <FontAwesomeIcon icon={faCirclePlay} size="3x" />
              </div>

              <div className="w-full">
                <p className="mx-5 text-gray-800 sm:mx-10">
                  Reproduce un video para conocer <br />
                  nuestra experiencia
                </p>
              </div>

              <div className="sm:hidden">
                <FontAwesomeIcon icon={faArrowRight} size="2x" />
              </div>
              <div className="hidden sm:block">
                <FontAwesomeIcon icon={faArrowRight} size="3x" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
