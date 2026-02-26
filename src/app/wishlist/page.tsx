import WishlistCard from "./WishlistCard";
import Breadcrumb from "../_components/Breadcrumb"

export default function WishlistPage() {
    const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "Wishlist" }]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="container mx-auto">

        <WishlistCard />

      </div>
    </>

  );
}