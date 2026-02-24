import OrderSummary from "../_components/OrderSummary";
import Breadcrumb from "../_components/Breadcrumb";
import CartCard from "../_components/CartCard";

export default function CartPage() {
  const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "cart" }];

  return (
    <div className="cart-page container mx-auto">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex mt-12 gap-4">
        <div className="w-2/3">
          <CartCard />
        </div>
        <div className="w-1/3">
          {/* <OrderSummary /> */}
        </div>
      </div>
    </div>
  );
}
