import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Smartsibly privacy policy - how we collect, use and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-slate-900 to-sky-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-slate-300 mt-1">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-gray max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
              <p className="text-gray-600">
                Smartsibly Ltd (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our website and services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="text-gray-600 mb-2">We may collect the following information:</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Name and contact details (email, phone, address)</li>
                <li>Company information for business customers</li>
                <li>Order history and transaction details</li>
                <li>Communication records and enquiries</li>
                <li>Website usage data and analytics</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-2">We use your information to:</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Process and fulfil your orders</li>
                <li>Communicate about products and services</li>
                <li>Provide customer support</li>
                <li>Improve our website and offerings</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Sharing</h2>
              <p className="text-gray-600">
                We do not sell your personal data. We may share information with trusted partners for order fulfilment, payment processing, and delivery services. All partners are bound by confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organisational measures to protect your data against unauthorised access, alteration, or destruction. However, no internet transmission is completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
              <p className="text-gray-600 mb-2">Under GDPR, you have the right to:</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Data Retention</h2>
              <p className="text-gray-600">
                We retain personal data only as long as necessary for the purposes outlined in this policy or as required by law. Transaction records are kept for 7 years for accounting purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contact Us</h2>
              <p className="text-gray-600">
                For privacy-related enquiries, contact us at:<br />
                Email: info@smartsibly.com<br />
                Address: 52 Digital Way, Edinburgh, EH1 3RD, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
