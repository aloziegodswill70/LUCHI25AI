import Link from "next/link";

export const metadata = {
  title: "Hustle Smart with Luchi25",
  description: "Unlock global opportunities—Flights, Visas, Scholarships, and More!",
};

export default function HustlePage() {
  return (
    <main className="min-h-screen p-6 bg-black text-gold">
      <h1 className="text-3xl font-bold mb-4">Hustle Smart with Luchi25 ✈️🌍</h1>
      <p className="mb-4">Discover legitimate global opportunities right from Nigeria. Get started with:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <Link href="/how-to-book-flight" className="text-gold underline hover:text-white">
            How to Book a Flight
          </Link>
        </li>
        <li>
          <Link href="/how-to-apply-for-visa" className="text-gold underline hover:text-white">
            How to Apply for Visa
          </Link>
        </li>
        <li>
          <Link href="/get-your-cv-instantly" className="text-gold underline hover:text-white">
            Get Your CV Instantly
          </Link>
        </li>
        <li>
          <Link href="/apply-for-scholarships-and-jobs" className="text-gold underline hover:text-white">
            Apply for Scholarships and Jobs
          </Link>
        </li>
      </ul>
    </main>
  );
}
