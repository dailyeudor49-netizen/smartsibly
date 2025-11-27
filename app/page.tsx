import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-sky-400 text-sm font-medium">Wholesale Tech Supplier</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-5">
                Smart Tech, <span className="text-sky-400">Smart Prices</span>
              </h1>
              <p className="text-slate-300 text-lg mb-8">
                Quality electronics and gadgets for businesses and individuals.
                Worldwide delivery in 24/48h, payment on delivery.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/products" className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-medium rounded-lg">
                  View Products
                </Link>
                <Link href="/contact" className="px-6 py-3 border border-slate-500 hover:border-slate-400 text-white font-medium rounded-lg">
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "4,000+", l: "Products" },
                  { n: "850+", l: "Customers" },
                  { n: "16", l: "Years" },
                  { n: "24/48h", l: "Delivery" },
                ].map((s, i) => (
                  <div key={i} className="p-5 bg-slate-800/50 rounded-xl text-center">
                    <div className="text-2xl font-bold text-sky-400">{s.n}</div>
                    <div className="text-slate-400 text-sm">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Stats */}
      <section className="md:hidden py-8 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-4 gap-2 text-center">
          {[
            { n: "4,000+", l: "Products" },
            { n: "850+", l: "Customers" },
            { n: "16", l: "Years" },
            { n: "24/48h", l: "Delivery" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-lg font-bold text-sky-600">{s.n}</div>
              <div className="text-gray-600 text-xs">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Product Categories</h2>
            <p className="text-gray-600 mt-2">Browse our wholesale tech range</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { e: "🔊", n: "Speakers", h: "/products#speakers" },
              { e: "🎧", n: "Audio", h: "/products#audio" },
              { e: "🔋", n: "Power", h: "/products#power" },
              { e: "⌚", n: "Wearables", h: "/products#wearables" },
              { e: "📱", n: "Accessories", h: "/products#accessories" },
              { e: "🔌", n: "Cables", h: "/products#cables" },
            ].map((c, i) => (
              <Link key={i} href={c.h} className="p-4 bg-gray-50 rounded-xl text-center hover:bg-sky-50 hover:ring-2 hover:ring-sky-200 transition-all">
                <div className="text-3xl mb-2">{c.e}</div>
                <div className="text-sm font-medium text-gray-800">{c.n}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Why Smartsibly?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Worldwide Delivery", d: "Fast shipping in 24/48h to countries worldwide. Costs vary by destination." },
              { t: "Pay on Delivery", d: "No upfront payment. Inspect products before paying." },
              { t: "Volume Discounts", d: "Competitive wholesale pricing with bulk discounts." },
              { t: "Quality Tested", d: "Every product checked before shipping." },
            ].map((f, i) => (
              <div key={i} className="p-5 bg-slate-800 rounded-xl">
                <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">{f.t}</h3>
                <p className="text-slate-400 text-sm">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-sky-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Order?</h2>
          <p className="text-sky-100 mb-8">Contact us for a personalised quote. No minimum for first orders.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50">
            Request Quote
          </Link>
          <p className="text-sky-200 text-sm mt-4">Or email info@smartsibly.com</p>
        </div>
      </section>
    </div>
  );
}
