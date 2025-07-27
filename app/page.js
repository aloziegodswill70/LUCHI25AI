import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* ✅ Hero */}
      <HeroSection />

      {/* ✅ Content: placeholder for jobs & scholarships */}
      <section className="flex-1 w-full max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          🔥 Latest Opportunities
        </h2>
        <p className="text-gray-700 mb-4">
          Click on any button you want and enjoy the services.
        </p>
        <ul className="space-y-3">
          <li className="p-4 border-2 border-green-600 rounded-lg shadow-sm hover:bg-green-50">
            ✅ Sample Job: Cyber Security at Cybertech (Remote)
          </li>
          <li className="p-4 border-2 border-green-600 rounded-lg shadow-sm hover:bg-green-50">
            🎓 Sample Scholarship: Masters in Nursing – Fully Funded
          </li>
        </ul>
      </section>

      {/* ✅ Sponsor Section */}
      <section className="w-full bg-green-50 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <Image
            src="/images/Luchi25.jpeg" // 👉 replace with sponsor image path
            alt="Sponsor"
            width={150}
            height={150}
            className="rounded-full border-4 border-green-600 object-cover"
          />
          <p className="text-lg font-medium text-gray-800">
            Thank you <span className="font-bold text-green-700">Engr. and Mrs Njoku</span> for sponsoring this website and supporting opportunities for many.
          </p>
        </div>
      </section>

      {/* ✅ Developer Section */}
      <section className="w-full bg-yellow-50 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <Image
            src="/images/godswil.jpg" // 👉 replace with developer image path
            alt="Developer"
            width={150}
            height={150}
            className="rounded-full border-4 border-yellow-400 object-cover"
          />
          <p className="text-lg font-medium text-gray-800">
            This web app is developed by:{" "}
            <span className="font-bold text-green-700">
              Dr. Alozie Godswill Onyedikachi
            </span>, an experienced optometrist interested in ocular emergency, contact lens, and eye care technology. He is also an expert in web app development.
          </p>
        </div>
      </section>

      {/* ✅ Support Button */}
      <div className="w-full py-8 px-6 text-center bg-white">
        <Link
           href="https://paystack.shop/pay/gensemai"// 👉 or your desired payment/support page
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md text-lg"
        >
          💚 Send us money to support this work
        </Link>
      </div>

      
    </main>
  );
}
