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

        {/* ✅ Adsterra Script (Updated) */}
        <Script
          async
          data-cfasync="false"
          src="//pl27278547.profitableratecpm.com/1f59e71fa26029af801c4ec9fe5a0581/invoke.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />

        {/* ✅ Your main page content */}
        {children}

        {/* ✅ Adsterra container for the ad unit */}
        <div id="container-1f59e71fa26029af801c4ec9fe5a0581"></div>

        <Footer />
      </body>
    </html>
  );
}
