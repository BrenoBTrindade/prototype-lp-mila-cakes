"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../app/swiper.css";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

export default function Welcome() {
  return (
    <section className="flex justify-center my-10 flex-col items-center">
      <p className="text-2xl text-text w-1/2">
        Seja bem-vindo à Mila Cakes, a confeitaria dos sonhos onde a doçura
        ganha vida! Aqui, cada mordida é uma experiência única e deliciosa que
        fará você se apaixonar pelo mundo dos doces
      </p>
      <Swiper
        cssMode={true}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper max-lg:mt-10 max-lg:h-[310px] max-lg:w-[350px] xl:my-20 xl:h-[400px] xl:w-[800px]"
      >
        {cakes.map(({ src, alt }, i) => (
          <SwiperSlide key={i}>
            <Image
              className="w-[650px] h-[400px]"
              src={src}
              alt={alt}
              width={900}
              height={530}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const cakes = [
  { src: "/cake-1.png", alt: "bolo com cobertura" },
  { src: "/cake-1.png", alt: "bolo com cobertura-2" },
  { src: "/cake-1.png", alt: "bolo com cobertura-3" },
];
