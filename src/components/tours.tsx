"use client";

import React, { FunctionComponent } from "react";
import Image from "next/image";
import { ShimmerButton } from "./magicui/shimmer-button";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface TourProps {
  title: string;
  description: string;
  description_short: string;
  type: string;
  price: number;
  imageUrl: string;
  include: { icon: IconDefinition; item: string }[];
}

const Tour: FunctionComponent<TourProps> = ({
  title,
  description,
  description_short,
  type,
  price,
  imageUrl,
  include,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <div
      ref={ref}
      className={`mb-5 flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-xl shadow-lg transition-all duration-500 ease-in-out md:w-[48%] xl:w-[29%] xl:hover:scale-[1.03] ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="relative h-[220px] w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 48vw, 29vw"
        />

        <div className="absolute inset-0 flex flex-col items-start justify-start pl-5 pt-5 text-xl font-bold text-white">
          <div className="flex flex-row">
            <Image src="/logo.png" alt="Logo Dive Evolution" width={32} height={32} className="mr-1 h-8 w-8 object-contain" />
            <span className="text-sm leading-[12px] text-white">
              Dive <br className="my-0" />
              Evolution
            </span>
          </div>
          <span className="my-2 uppercase font-black">{type}</span>
        </div>
      </div>

      <div className="flex w-full flex-row pl-5">
        <div className="relative -top-4 rounded-xl bg-[#ffc404] px-5 py-1 uppercase">{title}</div>
      </div>

      <div className="flex w-full flex-col items-center justify-center px-5 pb-5">
        <div className="flex flex-col items-start justify-start">
          <span className="text-base font-bold">{description}</span>
          <span className="text-justify text-sm font-bold text-gray-500">{description_short}</span>
        </div>

        <div className="mt-5 flex w-full flex-col items-start justify-center text-justify text-base">
          {include.map((item, idx) => (
            <div key={idx} className="flex flex-row text-sm" style={{ color: idx === 0 ? "green" : "black" }}>
              <div className="w-5">
                <FontAwesomeIcon icon={item.icon} />
              </div>{" "}
              {item.item}
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-end justify-center">
          <span className="text-sm text-gray-500">Desde:</span>
          <span className="text-2xl">
            ${price}
            <span className="text-base">,00</span>
          </span>
        </div>

        <ShimmerButton>Ver más</ShimmerButton>
      </div>
    </div>
  );
};

interface ToursProps {
  tourList: TourProps[];
}

const Tours: FunctionComponent<ToursProps> = ({ tourList }) => {
  return (
    <div className="my-10 flex h-fit w-full flex-wrap justify-center gap-5 px-4 sm:px-6 lg:px-[10%] xl:justify-around">
      {tourList.map((tour, index) => (
        <Tour
          key={index}
          title={tour.title}
          description={tour.description}
          description_short={tour.description_short}
          price={tour.price}
          imageUrl={tour.imageUrl}
          include={tour.include}
          type={tour.type}
        />
      ))}
    </div>
  );
};

export default Tours;
