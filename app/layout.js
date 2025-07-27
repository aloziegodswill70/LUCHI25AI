import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luchi25AI",
  description:
    "Generate your CV and Application letter instantly, also get news for jobs and scholarships.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7031040419946505"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* ✅ Adsterra Script for site verification / ad unit */}
        <Script
          id="adsterra-script"
          strategy="afterInteractive"
          src="//pl27278341.profitableratecpm.com/7b/2d/fc/7b2dfcf1416e2edc1e02ca98aacfe27b.js"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
