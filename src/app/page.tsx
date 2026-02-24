import CategorySlider from "./_components/Slider/CategorySlider";
import Slider from "./_components/Slider/Slider";
import Products from "./products/Products";

export default function Home() {
  return (
    <>
      <Slider />
      <CategorySlider />
      <Products />
    </>
  );
}
