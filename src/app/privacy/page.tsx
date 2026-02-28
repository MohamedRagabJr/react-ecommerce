import Breadcrumb from "../_components/Breadcrumb";
export default function PrivacyPage() {
const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "Privacy" }];
  return (
    <>
        <Breadcrumb items={breadcrumbItems} />
        <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8 text-green-800">Privacy Policy</h1>

        <p className="text-gray-600 mb-6">
            This Privacy Policy describes how we collect, use, and protect your
            personal information when you use our website.
        </p>

        <section className="space-y-6">
            <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
                1. Information We Collect
            </h2>
            <p className="text-gray-600">
                We may collect personal information such as your name, email
                address, shipping address, payment details, and browsing activity.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
                2. How We Use Your Information
            </h2>
            <p className="text-gray-600">
                We use your information to process orders, improve our services,
                personalize your experience, and communicate with you.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
                3. Cookies
            </h2>
            <p className="text-gray-600">
                Our website uses cookies to enhance user experience, analyze site
                traffic, and improve functionality.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
                4. Data Protection
            </h2>
            <p className="text-gray-600">
                We implement security measures to protect your personal data from
                unauthorized access, alteration, or disclosure.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
                5. Third-Party Services
            </h2>
            <p className="text-gray-600">
                We may use trusted third-party services for payment processing,
                analytics, and shipping. These providers have their own privacy
                policies.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
                6. Contact Us
            </h2>
            <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact
                us at support@yourstore.com.
            </p>
            </div>
        </section>
        </div>
    </>
  );
}