"use client";
import { useEffect, useState } from "react";

export default function ScholarshipsPage() {
  const [scholarships, setScholarships] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState([]); // track saved scholarships

  // 🔹 Load saved favorites from localStorage on mount
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("scholarshipFavorites") || "[]");
    setSaved(favs);
  }, []);

  // 🔹 Fetch scholarships from RSS feed
  useEffect(() => {
    async function fetchScholarships() {
      setLoading(true);
      setError("");

      try {
        const rssUrl = encodeURIComponent("https://opportunitydesk.org/feed/");
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);
        const data = await res.json();

        if (!data.items || !Array.isArray(data.items)) {
          setError("⚠️ Feed structure changed or no scholarships found.");
          setScholarships([]);
          return;
        }

        const mapped = data.items.map((item, index) => ({
          id: index,
          title: item.title,
          link: item.link,
          description: item.description || "",
        }));

        setScholarships(mapped);
      } catch (err) {
        console.error("Error fetching scholarships:", err);
        setError("❌ Failed to load scholarships. Try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchScholarships();
  }, []);

  // 🔹 Search filter
  const filtered = scholarships.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Toggle save/remove
  const toggleSave = (sch) => {
    const exists = saved.find((f) => f.id === sch.id);
    let updated;
    if (exists) {
      updated = saved.filter((f) => f.id !== sch.id);
    } else {
      updated = [...saved, sch];
    }
    setSaved(updated);
    localStorage.setItem("scholarshipFavorites", JSON.stringify(updated));
  };

  const isSaved = (id) => saved.some((f) => f.id === id);

  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-2">🎓 Scholarships</h1>
      <p className="text-red-600 mb-6">
        Find the latest scholarships and global opportunities.
      </p>

      {/* 🔎 Search Box */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search scholarships..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border-2 border-green-600 p-3 rounded-lg outline-none"
        />
      </div>

      {loading && (
        <p className="text-yellow-500 font-semibold animate-pulse">
          ⏳ Loading scholarships...
        </p>
      )}

      {error && <p className="text-red-600 font-semibold mt-4">{error}</p>}

      {/* ✅ Scholarships List */}
      <ul className="space-y-4 mt-4">
        {filtered.map((s) => (
          <li
            key={s.id}
            className="p-4 border-2 border-green-600 rounded-lg hover:bg-green-50"
          >
            <h2 className="text-xl font-semibold text-green-700">{s.title}</h2>
            <p
              className="text-gray-700 mt-2 text-sm"
              dangerouslySetInnerHTML={{ __html: s.description }}
            ></p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
              >
                🔗 View Details
              </a>
              <button
                onClick={() => toggleSave(s)}
                className={`px-4 py-2 rounded-lg font-semibold shadow-md ${
                  isSaved(s.id)
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-yellow-400 hover:bg-yellow-500 text-gray-800"
                }`}
              >
                {isSaved(s.id) ? "❤️ Saved" : "➕ Save"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
