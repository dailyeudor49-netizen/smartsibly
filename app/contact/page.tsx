import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Smartsibly for wholesale tech enquiries and quotes.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-slate-900 to-sky-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-slate-300 mt-1">Get in touch for quotes and enquiries</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Send us a Message</h2>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500">
                    <option>Request a Quote</option>
                    <option>Product Enquiry</option>
                    <option>Bulk Order</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"></textarea>
                </div>
                <button type="submit" className="w-full py-2.5 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-500">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Contact Information</h2>
                <div className="space-y-4">
                  {[
                    { t: "Email", v: "info@smartsibly.com", d: "Response within 24 hours" },
                    { t: "Address", v: "52 Digital Way, Edinburgh, EH1 3RD", d: "United Kingdom" },
                    { t: "Hours", v: "Monday - Friday", d: "9:00 AM - 6:00 PM GMT" },
                  ].map((c, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">{c.t}</h3>
                      <p className="text-sky-600">{c.v}</p>
                      <p className="text-gray-500 text-sm">{c.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-sky-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Why Contact Us?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Get personalised wholesale quotes</li>
                  <li>• Discuss bulk order discounts</li>
                  <li>• Learn about our product range</li>
                  <li>• Payment on delivery options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
