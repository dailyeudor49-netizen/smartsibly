"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link href="/">
            <Image
              src="/images/logo.jpg"
              alt="Smartsibly"
              width={150}
              height={45}
              className="h-9 w-auto"
              unoptimized
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium ${isActive(l.href) ? "text-sky-600" : "text-gray-700 hover:text-sky-600"}`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="px-4 py-2 bg-sky-600 text-white text-sm font-medium rounded-lg hover:bg-sky-700">
              Get Quote
            </Link>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden pb-4 border-t">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 text-sm ${isActive(l.href) ? "text-sky-600" : "text-gray-700"}`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="block mx-3 mt-2 px-4 py-2 bg-sky-600 text-white text-sm font-medium rounded-lg text-center">
              Get Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
