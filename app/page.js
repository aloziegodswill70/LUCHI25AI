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

      {/* ✅ Articles Section with Internal Links */}
      <section className="w-full max-w-5xl mx-auto py-12 px-6 space-y-12">
        <div>
          <h3 className="text-2xl font-bold text-green-700 mb-2">💼 Hustle Smart</h3>
          <p className="text-gray-700 mb-2">
            Discover smart ways to make money online through AI-powered tools and freelance platforms. Learn how to position yourself and earn from anywhere.
          </p>
          <Link href="/hustle" className="text-green-600 hover:underline font-medium">
            Read more about smart hustling →
          </Link>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-700 mb-2">✈️ How to Book Flights Easily</h3>
          <p className="text-gray-700 mb-2">
            Booking affordable flights doesn't have to be difficult. We guide you step-by-step on how to book flights yourself using reliable websites.
          </p>
          <Link href="/how-to-book-flight" className="text-green-600 hover:underline font-medium">
            See the flight guide →
          </Link>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-700 mb-2">🛂 How to Apply for a Visa</h3>
          <p className="text-gray-700 mb-2">
            Applying for a visa can be confusing, but our guide breaks it down with tips and common errors to avoid for a successful application.
          </p>
          <Link href="/how-to-apply-for-visa" className="text-green-600 hover:underline font-medium">
            Learn how to apply for visa →
          </Link>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-700 mb-2">📄 Get Your CV Instantly</h3>
          <p className="text-gray-700 mb-2">
            Don’t waste time formatting a CV manually. Use our tool to generate a professional CV and Cover Letter in seconds.
          </p>
          <Link href="/get-your-cv-instantly" className="text-green-600 hover:underline font-medium">
            Generate your CV now →
          </Link>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-700 mb-2">🎓 Apply for Scholarships & Jobs</h3>
          <p className="text-gray-700 mb-2">
            We’ve compiled the latest job and scholarship opportunities for international students and remote workers. Apply before deadlines!
          </p>
          <Link href="/apply-for-scholarships-and-jobs" className="text-green-600 hover:underline font-medium">
            Start applying now →
          </Link>
        </div>
      </section>

      {/* ✅ Sponsor Section */}
      <section className="w-full bg-green-50 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <Image
            src="/images/Luchi25.jpeg"
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
            src="/images/godswil.jpg"
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
          href="https://paystack.shop/pay/gensemai"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md text-lg"
        >
          💚 Send us money to support this work
        </Link>
      </div>
    </main>
  );
}
