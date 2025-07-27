import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-green-700 text-white mt-16 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        {/* ✅ Left Side */}
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-yellow-400">Luchi25</span>. All rights reserved.
        </p>

        {/* ✅ Center Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link
            href="/privacy-policy"
            className="underline hover:text-yellow-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="underline hover:text-yellow-300"
          >
            Terms of Service
          </Link>
        </div>

        {/* ✅ Right Side */}
        <div className="flex flex-col sm:items-end text-xs text-red-200">
          <p>Built with 💚❤️💛 for opportunities, growth, and success.</p>
          <p>Built by: Dr. Godswill O. Alozie</p>
        </div>
      </div>
    </footer>
  );
}
