"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
export default function MainSlider({ imglist, slidesPerView, width, height }) {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        slidesPerView={slidesPerView}
        spaceBetween={0}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {imglist.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt="Slide 1"
              className="w-full object-cover"
              width={width}
              height={height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
