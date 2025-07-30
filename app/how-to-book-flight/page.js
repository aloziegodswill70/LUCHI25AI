// app/how-to-book-flight/page.js
import Link from "next/link";

export const metadata = {
  title: "How to Book a Flight",
  description: "Step-by-step guide to booking affordable international flights from Nigeria.",
};

export default function BookFlightPage() {
  return (
    <main className="min-h-screen p-6 bg-black text-yellow-400">
      <h1 className="text-3xl font-bold mb-4">How to Book a Flight ✈️</h1>

      <p className="mb-4">
        Booking international flights is now easier than ever. Use trusted platforms like{" "}
        <a href="https://www.travelstart.com.ng" target="_blank" className="underline hover:text-white">Travelstart</a>,{" "}
        <a href="https://www.wakanow.com" target="_blank" className="underline hover:text-white">Wakanow</a>, or{" "}
        <a href="https://www.google.com/flights" target="_blank" className="underline hover:text-white">Google Flights</a>.
        Always compare prices and book at least 3 weeks ahead.
      </p>

      <p className="mb-2 font-semibold">Steps to follow:</p>
      <ul className="list-decimal ml-6 space-y-2">
        <li>Search flights on multiple platforms.</li>
        <li>Check visa requirements before booking.</li>
        <li>Use alerts for best deals.</li>
        <li>Confirm payment methods (Naira cards or dollar cards).</li>
        <li>Double-check the airport codes and layover durations.</li>
        <li>Print or download your booking confirmation.</li>
      </ul>

      <p className="mt-4">
        Need a visa too? Read{" "}
        <Link href="/how-to-apply-for-visa" className="underline hover:text-white">
          How to Apply for Visa
        </Link>.
      </p>
      <p className="mt-2">
        Want to get your documents ready fast? Visit{" "}
        <Link href="/get-your-cv-instantly" className="underline hover:text-white">
          Get Your CV Instantly
        </Link>.
      </p>
      <p className="mt-2">
        You can also{" "}
        <Link href="/apply-for-scholarships-and-jobs" className="underline hover:text-white">
          Apply for Scholarships and Jobs
        </Link>.
      </p>
      <p className="mt-4">
        Or go back to the{" "}
        <Link href="/hustle" className="underline hover:text-white">
          Hustle Hub
        </Link>.
      </p>
    </main>
  );
}
