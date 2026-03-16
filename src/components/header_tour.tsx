"use client";

import React, { FunctionComponent } from "react";
import Navbar from "./navbar";

type HeaderTourProps = {
  backgroundImage: string;
  title: string;
};

const HeaderTour: FunctionComponent<HeaderTourProps> = ({ backgroundImage, title }) => {
  return (
    <div className="min-h-[100svh] w-full">
      <div className="flex min-h-[100svh] w-full flex-col items-center justify-between bg-[#0a1d39]">
        <Navbar change_items_color={true} />

        <div className="flex min-h-[100svh] w-full flex-col lg:flex-row lg:justify-between">
          <div
            className="flex min-h-[50svh] w-full flex-col items-center justify-center bg-[url('https://res.cloudinary.com/logicielapplab/image/upload/v1739769936/DIVE_EVOLUTION_2025/HEADER/SANCRISTOBAL_daeo0k.png')] bg-center bg-no-repeat px-6 text-center text-4xl font-bold text-white sm:px-12 sm:text-5xl lg:min-h-[100svh] lg:w-1/2 lg:items-start lg:px-20 lg:text-start lg:text-6xl"
            style={{ backgroundSize: "100%" }}
          >
            {title}
          </div>

          <div
            className="min-h-[50svh] w-full bg-cover bg-center lg:min-h-[100svh] lg:w-1/2 lg:bg-left"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderTour;
