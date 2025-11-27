import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-lg mb-3">Smartsibly</h3>
            <p className="text-slate-400 text-sm mb-3">
              Tech gadgets and electronics at wholesale prices. Fast delivery worldwide.
            </p>
            <div className="text-slate-400 text-sm space-y-1">
              <p>info@smartsibly.com</p>
              <p>52 Digital Way, Edinburgh</p>
              <p>EH1 3RD, United Kingdom</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/products#speakers" className="hover:text-sky-400">Speakers</Link></li>
              <li><Link href="/products#power" className="hover:text-sky-400">Power Banks</Link></li>
              <li><Link href="/products#wearables" className="hover:text-sky-400">Wearables</Link></li>
              <li><Link href="/products#accessories" className="hover:text-sky-400">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-sky-400">About</Link></li>
              <li><Link href="/products" className="hover:text-sky-400">Products</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/privacy-policy" className="hover:text-sky-400">Privacy</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-sky-400">Cookies</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-sky-400">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-slate-500">
          <p>&copy; {year} Smartsibly Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <span>VAT: GB 671 3928 41</span>
            <span>Registered in Scotland</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
