
"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slideimage from "../../../../public/11.jpg"
import slideimage2 from "../../../../public/22.jpg"




// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
export default function MainSlider() {
  return (
    <>
      <Swiper
        pagination={true} modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Image src={slideimage} alt="Slide 1" className='w-full object-contain' width={800} height={800} />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={slideimage2} alt="Slide 1" className='w-full object-cover'   width={800} height={800}/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
