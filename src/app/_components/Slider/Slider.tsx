import MainSlider from "./MainSlider";
import Image from "next/image";
import sliderImage from "../../../../public/slide1.jpeg";
import sliderImage2 from "../../../../public/slide2.jpg";
import sliderImage3 from "../../../../public/slide3.jpg";

export default function Slider() {
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full main-slider ">
            <MainSlider
              imglist={[sliderImage, sliderImage2, sliderImage3]}
              slidesPerView={1}
              width={1200}
              height={900}
            />
          </div>
      </div>
    </>
  );
}
