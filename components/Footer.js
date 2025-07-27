export default function Footer() {
  return (
    <footer className="w-full bg-green-700 text-white mt-16 py-6 px-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-bold text-yellow-400">Luchi25</span>.  
        All rights reserved.
      </p>
      <p className="mt-2 text-xs text-red-200">
        Built with 💚❤️💛 for opportunities, growth, and success.
      </p>
    </footer>
  );
}
