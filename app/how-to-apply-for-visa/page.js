// app/how-to-apply-for-visa/page.js
import Link from "next/link";

export const metadata = {
  title: "How to Apply for Visa",
  description: "Complete visa application guide for travel, jobs, or study.",
};

export default function ApplyVisaPage() {
  return (
    <main className="min-h-screen p-6 bg-black text-gold">
      <h1 className="text-3xl font-bold mb-4">How to Apply for a Visa 🛂</h1>

      <p className="mb-4">
        Planning to travel, study, or work abroad? The visa application process is often the first official step. A well-prepared application increases your chances of approval.
      </p>

      <p className="mb-4">
        Here's a general checklist to guide you:
      </p>

      <ul className="list-decimal ml-6 space-y-2">
        <li>Ensure you have a valid passport with at least 6 months before expiry.</li>
        <li>Gather financial proof like bank statements, pay slips, or sponsorship letters.</li>
        <li>Get a travel itinerary — temporary flight and hotel reservations work.</li>
        <li>Fill out the visa application form for your target country correctly.</li>
        <li>Pay the visa fee and book your biometric/interview appointment.</li>
      </ul>

      <p className="mt-6">
        📝 Don’t have a professional CV yet?{" "}
        <Link href="/get-your-cv-instantly" className="underline text-gold hover:text-white">
          Generate your CV instantly
        </Link>{" "}
        using AI.
      </p>

      <p className="mt-2">
        🎓 Interested in visa routes through education or work? Explore{" "}
        <Link href="/apply-for-scholarships-and-jobs" className="underline text-gold hover:text-white">
          scholarships and job opportunities
        </Link>{" "}
        abroad.
      </p>

      <p className="mt-2">
        ✈️ Need a guide to book your flight after getting the visa? Check{" "}
        <Link href="/how-to-book-flight" className="underline text-gold hover:text-white">
          How to Book a Flight
        </Link>
        .
      </p>

      <p className="mt-6">
        🚀 Back to the{" "}
        <Link href="/hustle" className="underline text-gold hover:text-white">
          Hustle Hub
        </Link>{" "}
        for more resources.
      </p>
    </main>
  );
}
