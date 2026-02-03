import MainSlider from "./MainSlider";
import Image from "next/image";
import sliderImage from "../../../../public/1.avif"
import sliderImage2 from "../../../../public/2.webp"
import slideimage from "../../../../public/11.jpg"
import slideimage2 from "../../../../public/22.jpg"
export default function Slider() {
  return (
    <>
        <div className="container mx-auto">
            <div className="flex">
                <div className="w-3/4">
                    <MainSlider imglist={[slideimage , slideimage2 , sliderImage2]} slidesPerView={1} />
                </div>
                <div className="w-1/4">
                    <Image src={sliderImage} width={100} height={100} className="w-full object-cover"  alt="Slider Image" />
                    <Image src={sliderImage2} width={100} height={100} className="w-full object-cover"  alt="Slider Image" />

                </div>
            </div>
        </div>
    </>
  )
}
