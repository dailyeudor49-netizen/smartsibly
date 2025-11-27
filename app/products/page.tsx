import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our wholesale tech gadgets and electronics catalogue.",
};

export default function ProductsPage() {
  const cats = [
    { id: "speakers", name: "Bluetooth Speakers", items: ["Portable Speakers", "Home Speakers", "Outdoor Speakers", "Mini Speakers", "Party Speakers", "Soundbars"] },
    { id: "audio", name: "Audio & Headphones", items: ["Wireless Earbuds", "Over-ear Headphones", "Neckbands", "Gaming Headsets", "Wired Earphones", "Sports Earbuds"] },
    { id: "power", name: "Power & Charging", items: ["Power Banks", "Wireless Chargers", "Fast Chargers", "Car Chargers", "Multi-port Chargers", "Charging Cables"] },
    { id: "wearables", name: "Wearables", items: ["Smartwatches", "Fitness Trackers", "Smart Bands", "Kids Watches", "GPS Watches", "Health Monitors"] },
    { id: "accessories", name: "Accessories", items: ["Phone Cases", "Screen Protectors", "Phone Stands", "Car Mounts", "Tablet Cases", "Laptop Sleeves"] },
    { id: "cables", name: "Cables & Adapters", items: ["USB-C Cables", "Lightning Cables", "HDMI Cables", "Adapters", "USB Hubs", "Extension Cables"] },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-slate-900 to-sky-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-slate-300 mt-1">Wholesale tech catalogue</p>
        </div>
      </section>

      <section className="border-b sticky top-16 md:top-18 z-30 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex gap-2">
            {cats.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="px-3 py-1.5 text-sm bg-gray-100 rounded-full hover:bg-sky-100 hover:text-sky-700 whitespace-nowrap">
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-14">
          {cats.map((c, idx) => (
            <div key={c.id} id={c.id} className="scroll-mt-28">
              <div className="mb-5">
                <span className="text-sky-600 text-sm">{String(idx + 1).padStart(2, "0")}</span>
                <h2 className="text-2xl font-bold text-gray-900">{c.name}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {c.items.map((item, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded-lg hover:bg-sky-50 transition">
                    <p className="text-sm font-medium text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Need a Quote?</h2>
          <p className="text-slate-400 mb-5">Contact us for pricing and bulk orders</p>
          <Link href="/contact" className="px-6 py-2.5 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-400">
            Get Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
