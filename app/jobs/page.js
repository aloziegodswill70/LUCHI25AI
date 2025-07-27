"use client";
import { useEffect, useState } from "react";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("developer");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);

  // ✅ Load favorites from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("jobFavorites") || "[]");
    setFavorites(saved);
  }, []);

  // ✅ Save favorites to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("jobFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const fetchJobs = async (query) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/jobs?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (data.error) {
        setError(data.error);
        setJobs([]);
      } else {
        setJobs(data.jobs || []);
      }
    } catch (err) {
      console.error("Error loading jobs:", err);
      setError("❌ Failed to load jobs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(search);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchJobs(search);
  };

  // ✅ Add or remove favorite
  const toggleFavorite = (job) => {
    const exists = favorites.find((f) => f.job_id === job.job_id);
    if (exists) {
      const updated = favorites.filter((f) => f.job_id !== job.job_id);
      setFavorites(updated);
    } else {
      setFavorites([...favorites, job]);
    }
  };

  const isFavorite = (job) => {
    return favorites.some((f) => f.job_id === job.job_id);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-2">💼 Jobs</h1>
      <p className="text-red-600 mb-6">
        Explore global job opportunities updated daily.
      </p>

      {/* 🔎 Search Box */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border-2 border-green-600 p-3 rounded-lg outline-none"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
        >
          Search
        </button>
      </form>

      {loading && (
        <p className="text-yellow-500 font-semibold animate-pulse">
          ⏳ Loading jobs...
        </p>
      )}

      {error && (
        <div className="mt-6 p-4 border-2 border-red-600 rounded-lg bg-red-50 text-center">
          <p className="text-red-700 font-semibold mb-3">{error}</p>
          <button
            onClick={() => fetchJobs(search)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold"
          >
            🔄 Try Again
          </button>
        </div>
      )}

      {/* ✅ Jobs List */}
      {!error && !loading && jobs.length > 0 && (
        <ul className="space-y-4 mt-4">
          {jobs.map((job, idx) => (
            <li
              key={idx}
              className="p-4 border-2 border-green-600 rounded-lg hover:bg-green-50"
            >
              <h2 className="text-xl font-semibold text-green-700">
                {job.job_title}
              </h2>
              <p className="text-gray-700 mt-1">
                {job.employer_name} — {job.job_city}, {job.job_country}
              </p>
              <div className="mt-3 flex gap-4">
                <a
                  href={job.job_apply_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
                >
                  🔗 Apply Now
                </a>
                <button
                  onClick={() => toggleFavorite(job)}
                  className={`px-4 py-2 rounded-lg font-semibold shadow-md ${
                    isFavorite(job)
                      ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                >
                  {isFavorite(job) ? "⭐ Saved" : "☆ Save"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {!error && !loading && jobs.length === 0 && (
        <p className="mt-6 text-gray-500">No jobs found. Try another search.</p>
      )}
    </main>
  );
}
