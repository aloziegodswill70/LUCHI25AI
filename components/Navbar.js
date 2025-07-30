"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // you can use lucide-react icons
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClasses = (path) =>
    `block px-4 py-2 rounded-lg font-semibold ${
      pathname === path
        ? "bg-green-600 text-white"
        : "text-green-700 hover:bg-red-600 hover:text-white"
    }`;

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Image
            src="/images/luchi.png"
            alt="Luchi25 Logo"
            width={50}
            height={50}
            priority
          />
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-red-600">
          <Link href="/" className="hover:opacity-80">
            Luchi25AI
          </Link>
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-4">
          <Link href="/jobs" className={linkClasses("/jobs")}>
            Jobs
          </Link>
          <Link href="/scholarships" className={linkClasses("/scholarships")}>
            Scholarships
          </Link>
          <Link href="/generate" className={linkClasses("/generate")}>
            Generate CV
          </Link>
          <Link
            href="/generate-letter"
            className={linkClasses("/generate-letter")}
          >
            Generate Letter
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-green-700 hover:text-red-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-200 flex flex-col px-4 py-2 space-y-2">
          <Link
            href="/jobs"
            className={linkClasses("/jobs")}
            onClick={() => setOpen(false)}
          >
            Jobs
          </Link>
          <Link
            href="/scholarships"
            className={linkClasses("/scholarships")}
            onClick={() => setOpen(false)}
          >
            Scholarships
          </Link>
          <Link
            href="/generate"
            className={linkClasses("/generate")}
            onClick={() => setOpen(false)}
          >
            Generate CV
          </Link>
          <Link
            href="/generate-letter"
            className={linkClasses("/generate-letter")}
            onClick={() => setOpen(false)}
          >
            Generate Letter
          </Link>
        </div>
      )}
    </nav>
  );
}
