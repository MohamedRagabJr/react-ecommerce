"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
interface MainSliderProps {
  imglist: (string | StaticImageData)[];
  slidesPerView: number;
  width: number;
  height: number;
}

export default function MainSlider({ imglist, slidesPerView, width, height }: MainSliderProps) {
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
          <SwiperSlide key={index} >
            <Image
              src={src}
              alt="Slide 1"
              width={width}
              height={height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
