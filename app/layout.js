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
    icons: {
    icon: "/images/luchi.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google AdSense site verification meta tag */}
        <meta
          name="google-adsense-account"
          content="ca-pub-7031040419946505"
        />

        {/* ✅ Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7031040419946505"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* ✅ Adsterra Script (updated with your new ad unit) */}
        <Script
          src="//pl27278621.profitableratecpm.com/0d/91/e5/0d91e504bf8021b51faf0f15e9de335a.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
    
        <Navbar />

        {/* ✅ Main content */}
        {children}

        {/* ✅ Footer */}
        <Footer />
      </body>
    </html>
  );
}
