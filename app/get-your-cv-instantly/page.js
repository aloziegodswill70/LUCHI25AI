// app/get-your-cv-instantly/page.js
import Link from "next/link";

export const metadata = {
  title: "Get Your CV Instantly",
  description: "Generate a professional CV in minutes.",
};

export default function GetCVPage() {
  return (
    <main className="min-h-screen p-6 bg-black text-gold">
      <h1 className="text-3xl font-bold mb-4">Get Your CV Instantly 📄</h1>
      <p className="mb-4">
        Whether you're applying for scholarships, remote jobs, or visas, a solid CV is your first step.
      </p>
      <p className="mb-4">
        Use our AI-powered tool to generate your CV in minutes. Just enter your details and download it as a PDF.
      </p>
      <Link
        href="/dashboard/cv"
        className="inline-block text-black bg-gold px-4 py-2 rounded hover:bg-yellow-500 font-semibold"
      >
        Generate My CV Now
      </Link>
      <p className="mt-6">
        Next steps:{" "}
        <Link
          href="/apply-for-scholarships-and-jobs"
          className="underline text-gold hover:text-white"
        >
          Apply for Scholarships and Jobs
        </Link>{" "}
        or{" "}
        <Link
          href="/how-to-apply-for-visa"
          className="underline text-gold hover:text-white"
        >
          Learn How to Apply for a Visa
        </Link>
        .
      </p>
      <p className="mt-4">
        Not ready yet? You can also{" "}
        <Link
          href="/how-to-book-flight"
          className="underline text-gold hover:text-white"
        >
          Learn How to Book Flights
        </Link>{" "}
        easily from Nigeria.
      </p>
    </main>
  );
}
