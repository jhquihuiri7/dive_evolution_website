"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import React, { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="flex h-fit w-full flex-col items-center justify-between gap-6 bg-white bg-[url('https://res.cloudinary.com/logicielapplab/image/upload/v1739330356/DIVE_EVOLUTION_2025/FOOTER/SANCRISTOBALMAP_WRECKBAY_ppiuhs_l3e34k.webp')] bg-contain bg-right bg-no-repeat p-10 lg:flex-row lg:p-20">
      <div className="flex flex-row items-center">
        <Image src="/logo_black.png" alt="Logo" width={40} height={40} className="mr-5 h-10 w-10" />
        <span className="text-xl font-bold text-black">Dive Evolution</span>
      </div>

      <div className="w-full py-2 text-justify md:w-4/5 lg:w-2/5">
        Nos esforzamos por brindarte datos precisos y confiables. Para una asesoría personalizada,{" "}
        <span className="font-semibold">contáctanos</span>; con gusto te atenderemos.
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex w-24 flex-row justify-between">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} size="xl" style={{ color: "#000000" }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="xl" style={{ color: "#000000" }} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} size="xl" style={{ color: "#000000" }} />
          </a>
        </div>
        <div>© 2006-2025 Dive.com, Inc</div>
      </div>
    </footer>
  );
};

export default Footer;
