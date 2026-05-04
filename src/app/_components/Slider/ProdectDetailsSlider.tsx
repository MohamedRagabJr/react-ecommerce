"use client"
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

import type { Swiper as SwiperType } from 'swiper';

export default function ProductDetailsSlider({images, title}: {images?: string[], title: string}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);


  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={{ prevEl, nextEl }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 mb-3"
      >
        {images?.map((img: string, index: number) => (
          <SwiperSlide key={index} className='flex justify-center items-center'>
            <Image
              src={img}
              alt={`${title} - Image ${index + 1}`}
              width={3000}
              height={3000}
              className="w-full h-[500px] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="flex justify-between gap-4 my-4 w-full absolute top-[225px] z-10">
        <button
          ref={(node) => setPrevEl(node)}
          className="rounded-xl bg-linear-to-r from-[#2f6a4a] to-[#63a883] text-white hover:opacity-90 transition w-[50px] h-[50px]  cursor-pointer flex justify-center items-center py-2"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          ref={(node) => setNextEl(node)}
          className="rounded-xl bg-linear-to-r from-[#2f6a4a] to-[#63a883] text-white hover:opacity-90 transition w-[50px] h-[50px] cursor-pointer flex justify-center items-center py-2"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images?.map((img: string, index: number) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt={`${title} - Thumbnail ${index + 1}`}
              width={300}
              height={300}
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
