import getCategories from "../api/getCategories"
import MainSlider from "./MainSlider";

export default async function CategorySlider() {
    const data = await getCategories();
    const dataImgs = data.map((category) => category.image);
  return (
    <>
    <div className="container mx-auto py-8 category-slider">
        <MainSlider imglist={dataImgs} slidesPerView={7} width={400} height={250} />
    </div>
      
    </>
  )
}
