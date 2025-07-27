export default function HeroSection() {
  return (
    <section className="w-full bg-green-600 text-white py-16 px-6 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Luchi25 Jobs & Scholarships
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        💚❤️💛 Stay updated with daily job and scholarship opportunities.  
        Instantly generate professional CVs and application letters to land your dream opportunity.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/generate"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
        >
          ✨ Generate CV
        </a>
        <a
          href="/generate-letter"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-md"
        >
          ✉️ Generate Letter
        </a>
      </div>
    </section>
  );
}
