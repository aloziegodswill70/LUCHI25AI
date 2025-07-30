// app/apply-for-scholarships-and-jobs/page.js
import Link from "next/link";

export const metadata = {
  title: "Apply for Scholarships and Jobs",
  description: "Find remote jobs and fully funded scholarship opportunities.",
};

export default function ScholarshipsJobsPage() {
  return (
    <main className="min-h-screen p-6 bg-black text-gold">
      <h1 className="text-3xl font-bold mb-4">Apply for Scholarships & Jobs 🎓💼</h1>
      <p className="mb-4">
        You can work and study abroad from Nigeria. Start by applying to remote jobs on platforms like:
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>
          <a
            href="https://arbeitnow.com/remote-jobs"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Arbeitnow
          </a>
        </li>
        <li>
          <a
            href="https://remoteok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            RemoteOK
          </a>
        </li>
        <li>
          <a
            href="https://github.com/remote-jobs"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            GitHub Jobs
          </a>
        </li>
      </ul>
      <p className="mb-4">
        Fully funded scholarships are available in countries like Germany, UK, Canada, and Norway. Explore programs such as:
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>DAAD (Germany)</li>
        <li>Chevening (UK)</li>
        <li>Vanier (Canada)</li>
        <li>Erasmus+ (Europe)</li>
      </ul>
      <p className="mt-6">
        Before applying, make sure your{" "}
        <Link href="/get-your-cv-instantly" className="underline text-gold hover:text-white">
          CV is ready
        </Link>
        . You’ll also need a strong{" "}
        <Link href="/how-to-apply-for-visa" className="underline text-gold hover:text-white">
          visa strategy
        </Link>
        .
      </p>
      <p className="mt-2">
        Return to the{" "}
        <Link href="/hustle" className="underline text-gold hover:text-white">
          Hustle Hub
        </Link>{" "}
        for more resources.
      </p>
    </main>
  );
}
