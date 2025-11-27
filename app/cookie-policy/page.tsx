import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Smartsibly cookie policy - how we use cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-slate-900 to-sky-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Cookie Policy</h1>
          <p className="text-slate-300 mt-1">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-gray max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. What Are Cookies</h2>
              <p className="text-gray-600">
                Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember your preferences, and provide information to site owners.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Cookies</h2>
              <p className="text-gray-600 mb-2">Smartsibly uses cookies to:</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Ensure the website functions correctly</li>
                <li>Remember your preferences and settings</li>
                <li>Analyse website traffic and usage patterns</li>
                <li>Improve user experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                  <p className="text-gray-600 text-sm">Required for basic website functionality. Cannot be disabled.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                  <p className="text-gray-600 text-sm">Help us understand how visitors interact with our website.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Functional Cookies</h3>
                  <p className="text-gray-600 text-sm">Remember your preferences for enhanced functionality.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Third-Party Cookies</h2>
              <p className="text-gray-600">
                We may use third-party services like Google Analytics that set their own cookies. These help us analyse website traffic. Third parties have their own privacy policies governing their cookies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Managing Cookies</h2>
              <p className="text-gray-600">
                Most browsers allow you to control cookies through settings. You can delete existing cookies and block new ones. Note that disabling cookies may affect website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Cookie Retention</h2>
              <p className="text-gray-600">
                Session cookies are deleted when you close your browser. Persistent cookies remain for varying periods depending on their purpose, typically from 30 days to 2 years.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this cookie policy periodically. Changes will be posted on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contact Us</h2>
              <p className="text-gray-600">
                For questions about our use of cookies, contact us at:<br />
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
