import Breadcrumb from "../_components/Breadcrumb";

export default function ShippingPage() {
const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "Shipping" }];

  return (
    <>
        <Breadcrumb items={breadcrumbItems} />
        <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8 text-green-800">Shipping Information</h1>

        <div className="space-y-6 text-gray-600">
            <p>
            We offer fast and reliable shipping across the country.
            </p>

            <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
                Processing Time
            </h2>
            <p>
                Orders are processed within 1-2 business days.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
                Delivery Time
            </h2>
            <p>
                Delivery typically takes 2-5 business days depending on your location.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
                Shipping Fees
            </h2>
            <p>
                Shipping fees are calculated at checkout based on your address.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
                International Shipping
            </h2>
            <p>
                Currently, we only ship domestically.
            </p>
            </div>
        </div>
        </div>
    </>
  );
}