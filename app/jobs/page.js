"use client";
import { useEffect, useState } from "react";

const JOBS_PER_PAGE = 10;

export default function JobsPage() {
  const [allJobs, setAllJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("jobFavorites") || "[]");
    setFavorites(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("jobFavorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        if (data.error) {
          setError(data.error);
        } else {
          const jobs = (data.jobs || []).map((job) => ({
            id: job.slug || job.url, // Fallback for unique ID
            title: job.title,
            company: job.company_name || job.company || "Unknown",
            location: job.location || "Remote/Not specified",
            url: job.url,
          }));
          setAllJobs(jobs);
          setTotalPages(Math.ceil(jobs.length / JOBS_PER_PAGE));
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("❌ Failed to load jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const start = (page - 1) * JOBS_PER_PAGE;
    const end = start + JOBS_PER_PAGE;
    setVisibleJobs(allJobs.slice(start, end));
  }, [allJobs, page]);

  const toggleFavorite = (job) => {
    const exists = favorites.find((f) => f.id === job.id);
    if (exists) {
      setFavorites(favorites.filter((f) => f.id !== job.id));
    } else {
      setFavorites([...favorites, job]);
    }
  };

  const isFavorite = (job) => favorites.some((f) => f.id === job.id);

  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-2">💼 Job Listings</h1>
      <p className="text-gray-600 mb-6">Browse remote and international jobs from ArbeitNow.</p>

      {loading && (
        <p className="text-yellow-500 font-semibold animate-pulse">⏳ Loading jobs...</p>
      )}

      {error && (
        <div className="mt-6 p-4 border-2 border-red-600 rounded-lg bg-red-50 text-center">
          <p className="text-red-700 font-semibold mb-3">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold"
          >
            🔄 Reload
          </button>
        </div>
      )}

      {!error && !loading && visibleJobs.length > 0 && (
        <>
          <ul className="space-y-4 mt-4">
            {visibleJobs.map((job) => (
              <li
                key={job.id}
                className="p-4 border-2 border-green-600 rounded-lg hover:bg-green-50"
              >
                <h2 className="text-xl font-semibold text-green-700">{job.title}</h2>
                <p className="text-gray-700 mt-1">
                  {job.company} — {job.location}
                </p>
                <div className="mt-3 flex gap-4">
                  <a
                    href={job.url}
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

          {/* 🔁 Pagination */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
            >
              ⬅️ Prev
            </button>
            <span className="px-4 py-2 text-gray-700 font-medium">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
            >
              Next ➡️
            </button>
          </div>
        </>
      )}

      {!error && !loading && visibleJobs.length === 0 && (
        <p className="mt-6 text-gray-500">No jobs found.</p>
      )}
    </main>
  );
}
