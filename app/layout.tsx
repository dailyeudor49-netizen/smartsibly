import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoogleAdsPixel from "./components/GoogleAdsPixel";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Smartsibly | Wholesale Tech & Electronics",
    template: "%s | Smartsibly",
  },
  description: "Wholesale tech gadgets and electronics. Fast worldwide delivery in 24/48h, payment on delivery, competitive prices.",
  keywords: ["wholesale electronics", "tech gadgets", "electronics supplier", "wholesale gadgets"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <GoogleAdsPixel />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
