import Image from "next/image";
import sliderImage from "../../../public/22.jpg";
import Breadcrumb from "../_components/Breadcrumb";
export default function AboutPage() {
const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "About us" }];

  return (
    <>
        <Breadcrumb items={breadcrumbItems}/>
        <div className="max-w-5xl mx-auto px-6 py-16">
        

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-4xl font-bold mb-8 text-start text-green-800">
                    About Us
                </h1>
                <p className="text-gray-600 mb-4">
                    We are a passionate ecommerce brand dedicated to delivering
                    high-quality products at competitive prices.
                </p>

                <p className="text-gray-600 mb-4">
                    Our mission is to provide a seamless shopping experience,
                    fast delivery, and excellent customer support.
                </p>

                <p className="text-gray-600">
                    Thank you for choosing us and being part of our journey.
                </p>
            </div>

                <Image src={sliderImage} width={800} height={800} alt="about Image" />
                
            </div>
        </div>
    </>
  );
}