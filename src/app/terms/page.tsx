import Breadcrumb from "../_components/Breadcrumb";

export default function TermsPage() {
      const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "Terms" }];

  return (
    <>
        <Breadcrumb items={breadcrumbItems}/>
        <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8 text-green-800">
            Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-6">
            By accessing and using our website, you agree to comply with the
            following terms and conditions.
        </p>

        <section className="space-y-6">
            <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
                1. Use of Website
            </h2>
            <p className="text-gray-600">
                You agree to use this website only for lawful purposes and in a way
                that does not infringe the rights of others.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
                2. Product Information
            </h2>
            <p className="text-gray-600">
                We strive to ensure product descriptions and prices are accurate.
                However, errors may occur and we reserve the right to correct them.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
                3. Payments
            </h2>
            <p className="text-gray-600">
                All payments must be completed at the time of purchase. We use
                secure third-party payment processors.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
                4. Shipping & Delivery
            </h2>
            <p className="text-gray-600">
                Delivery times are estimates and may vary depending on location
                and circumstances beyond our control.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
                5. Returns & Refunds
            </h2>
            <p className="text-gray-600">
                Returns are accepted within the specified return period. Refunds
                are processed after product inspection.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
                6. Changes to Terms
            </h2>
            <p className="text-gray-600">
                We reserve the right to update these terms at any time without
                prior notice.
            </p>
            </div>
        </section>
        </div>
    </>
  );
}