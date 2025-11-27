import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Smartsibly terms and conditions for using our services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-slate-900 to-sky-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="text-slate-300 mt-1">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-gray max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
              <p className="text-gray-600">
                By accessing or using Smartsibly&apos;s website and services, you agree to be bound by these Terms of Service. If you disagree with any part, you may not access our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Products and Services</h2>
              <p className="text-gray-600">
                Smartsibly Ltd provides wholesale electronics and tech gadgets. All products are subject to availability. We reserve the right to modify or discontinue products without notice. Prices are subject to change.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Orders and Payment</h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Orders are subject to acceptance and availability</li>
                <li>Payment on delivery is available for qualifying orders</li>
                <li>Prices are quoted in GBP unless otherwise stated</li>
                <li>We reserve the right to refuse orders at our discretion</li>
                <li>Bulk orders may require advance payment or deposit</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Delivery</h2>
              <p className="text-gray-600">
                We offer worldwide delivery within 24-48 hours for most destinations. Delivery times are estimates and not guaranteed. Shipping costs vary by destination and order size. Risk of loss transfers to buyer upon delivery.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Returns and Refunds</h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Defective products may be returned within 14 days</li>
                <li>Products must be in original condition and packaging</li>
                <li>Refunds are processed within 14 business days</li>
                <li>Shipping costs for returns are buyer&apos;s responsibility unless product is defective</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Warranty</h2>
              <p className="text-gray-600">
                Products carry manufacturer warranty where applicable. Warranty claims should be directed to us within the warranty period. We do not warrant products against misuse, damage, or normal wear.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Limitation of Liability</h2>
              <p className="text-gray-600">
                Smartsibly Ltd shall not be liable for any indirect, incidental, or consequential damages arising from use of our products or services. Our total liability shall not exceed the amount paid for the specific product or service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Intellectual Property</h2>
              <p className="text-gray-600">
                All content on this website, including text, graphics, logos, and images, is the property of Smartsibly Ltd and protected by intellectual property laws. Unauthorised use is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Governing Law</h2>
              <p className="text-gray-600">
                These terms are governed by the laws of Scotland and the United Kingdom. Any disputes shall be resolved in the courts of Scotland.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact Information</h2>
              <p className="text-gray-600">
                Smartsibly Ltd<br />
                52 Digital Way, Edinburgh, EH1 3RD<br />
                United Kingdom<br />
                Email: info@smartsibly.com<br />
                VAT: GB 671 3928 41<br />
                Registered in Scotland
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
