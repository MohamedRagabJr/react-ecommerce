import MainSlider from "./MainSlider";
import Image from "next/image";
import sliderImage from "../../../../public/slider-image-1.jpeg";
import sliderImage2 from "../../../../public/slider-image-2.jpeg";
import sliderImage3 from "../../../../public/slider-image-3.jpeg";
export default function Slider() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-3/4">
            <MainSlider
              imglist={[sliderImage, sliderImage2, sliderImage3]}
              slidesPerView={1}
              width={1200}
              height={1200}
            />
          </div>
          <div className="w-1/4">
            <Image
              src={sliderImage2}
              width={600}
              height={600}
              className="w-full object-cover h-40"
              alt="Slider Image"
            />
            <Image
              src={sliderImage3}
              width={600}
              height={600}
              className="w-full object-cover h-40"
              alt="Slider Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
