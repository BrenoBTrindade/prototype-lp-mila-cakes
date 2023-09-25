"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function CupCakesSwiperMobile() {
  return (
    <div className="text-text lg:hidden">
      <div className="text-text flex my-10 flex-col mx-auto">
        <p>
          Cupcakes Gourmet: Experimente nossa coleção de cupcakes delicadamente
          decorados, uma explosão de sabores em cada mordida.
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={50}
        navigation={true}
        modules={[Navigation]}
        className="mySwipe h-[200px] "
      >
        {cupCakes.map(({ src, alt }, i) => (
          <SwiperSlide key={i}>
            {" "}
            <Image
              className="select-none rounded-xl shadow-md shadow-black/60 h-[200px] w-[200px]"
              src={src}
              alt={alt}
              width={300}
              height={300}
            />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const cupCakes = [
  { src: "/cupcake-1.png", alt: "cupcake" },
  { src: "/cupcake-2.png", alt: "cupcake-2" },
  { src: "/cupcake-3.png", alt: "cupcake-3" },
  { src: "/cupcake-1.png", alt: "cupcak-4" },
  { src: "/cupcake-2.png", alt: "cupcake-5" },
  { src: "/cupcake-3.png", alt: "cupcake-6" },
];
