import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* ✅ Hero */}
      <HeroSection />

      {/* ✅ Content: placeholder for jobs & scholarships */}
      <section className="flex-1 w-full max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-6">🔥 Latest Opportunities</h2>
        <p className="text-gray-700 mb-4">
          Here you can display daily updated jobs and scholarships. (We can build this section next!)
        </p>
        <ul className="space-y-3">
          <li className="p-4 border-2 border-green-600 rounded-lg shadow-sm hover:bg-green-50">
            ✅ Sample Job: Frontend Developer at TechCorp (Remote)
          </li>
          <li className="p-4 border-2 border-green-600 rounded-lg shadow-sm hover:bg-green-50">
            🎓 Sample Scholarship: Masters in AI – Fully Funded
          </li>
        </ul>
      </section>

    
    </main>
  );
}
