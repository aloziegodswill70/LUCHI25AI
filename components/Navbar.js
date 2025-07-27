"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (path) =>
    `px-4 py-2 rounded-lg font-semibold ${
      pathname === path
        ? "bg-green-600 text-white"
        : "text-green-700 hover:bg-red-600 hover:text-white"
    }`;

  return (
    <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center mb-6">
      <h1 className="text-2xl font-extrabold text-red-600"><Link href="/" className={linkClasses("/")}>
          Luchi25AI
        </Link></h1>
      <div className="flex gap-4">
        <Link href="/jobs" className={linkClasses("/jobs")}>
        Jobs
        </Link>
        <Link href="/scholarships" className={linkClasses("/scholarships")}>
        Scholarships
        </Link>
        <Link href="/generate" className={linkClasses("/generate")}>
          Generate CV
        </Link>
        <Link href="/generate-letter" className={linkClasses("/generate-letter")}>
          Generate Letter
        </Link>
      </div>
    </nav>
  );
}
