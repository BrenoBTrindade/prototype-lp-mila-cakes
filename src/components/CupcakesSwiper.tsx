"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function App() {
  return (
    <div className="text-text">
      <div className="text-text flex my-10 flex-col text-2xl w-[60%] mx-auto">
        <p className="w-[60%]">
          Cupcakes Gourmet: Experimente nossa coleção de cupcakes delicadamente
          decorados, uma explosão de sabores em cada mordida.
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={-50}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-[65%] h-[310px] "
      >
        {cupCakes.map(({ src, alt }, i) => (
          <SwiperSlide key={i}>
            {" "}
            <Image
              className="select-none rounded-xl shadow-md shadow-black/60 h-[300px] w-[300px]"
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
