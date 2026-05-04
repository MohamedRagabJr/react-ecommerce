import { Category } from "../../types/product.type";
import getCategories from "../../api/getCategories"
import MainSlider from "./MainSlider";

export default async function CategorySlider() {
    const data = await getCategories();
    const dataImgs = data.map((category: Category) => category.image);
  return (
    <>
    <div className="container mx-auto my-3">
        <MainSlider imglist={dataImgs} slidesPerView={2} slidesPerViewDesc={7} width={400} height={250} className="h-[300px] lg:h-[250px]" />
    </div>
      
    </>
  )
}
