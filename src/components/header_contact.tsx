"use client";

import React, { FunctionComponent } from "react";
import Navbar from "./navbar";
import { ShinyButton } from "./magicui/shiny-button";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

const cardVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
};

const HeaderContact: FunctionComponent = () => {
  return (
    <div className="min-h-[100svh] w-full">
      <Navbar change_items_color={true} />

      <div className="relative flex min-h-[100svh] w-full flex-col justify-end bg-[#0a1d39] sm:flex-row">
        <div className="absolute flex h-1/2 w-full flex-row justify-start bg-[url('https://res.cloudinary.com/logicielapplab/image/upload/v1739940793/DIVE_EVOLUTION_2025/CONTACT/EB8A2103-min_tgdwz2.webp')] bg-cover bg-center sm:h-full sm:w-1/2" />

        <div className="relative mt-5 flex h-full w-full flex-col items-center justify-center px-6 text-center sm:items-start sm:px-20 sm:text-start lg:px-32">
          <div className="my-10 z-10 text-4xl font-bold text-white md:text-5xl">Contacta con nosotros</div>

          <div className="z-10 flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch lg:justify-start">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="flex h-[300px] w-full max-w-[325px] flex-col items-center justify-between rounded-xl bg-[#f6f6fa] px-5 py-10"
            >
              <FontAwesomeIcon icon={faLocationDot} size="3x" style={{ color: "#0a1d39" }} />
              <p className="text-3xl font-semibold">Visítanos</p>
              <p>Nuestras oficinas están situadas en Av. Isabela y Guillermo Vega Gallegos</p>
              <ShinyButton className="bg-[#ffc404]">Ir al mapa</ShinyButton>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="flex h-[300px] w-full max-w-[325px] flex-col items-center justify-between rounded-xl bg-[#f6f6fa] px-5 py-10"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="3x" style={{ color: "#25d366" }} />
              <p className="text-3xl font-semibold">Chateemos</p>
              <p>Prefer to speak on the phone? Give us a ring so we can help.</p>
              <ShinyButton className="bg-[#ffc404]">+593982291894</ShinyButton>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContact;
