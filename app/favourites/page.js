"use client";

import { useEffect, useState } from "react";

export default function FavoritesPage() {
  const [favJobs, setFavJobs] = useState([]);
  const [favScholarships, setFavScholarships] = useState([]);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("jobFavorites") || "[]");
    const scholarships = JSON.parse(localStorage.getItem("scholarshipFavorites") || "[]");
    setFavJobs(jobs);
    setFavScholarships(scholarships);
  }, []);

  const removeJob = (jobId) => {
    const updated = favJobs.filter((j) => j.job_id !== jobId);
    setFavJobs(updated);
    localStorage.setItem("jobFavorites", JSON.stringify(updated));
  };

  const removeScholarship = (schId) => {
    const updated = favScholarships.filter((s) => s.id !== schId);
    setFavScholarships(updated);
    localStorage.setItem("scholarshipFavorites", JSON.stringify(updated));
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-2">❤️ Saved Items</h1>
      <p className="text-red-600 mb-6">Here are all your saved jobs and scholarships.</p>

      {/* ✅ Saved Jobs */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-700 mb-4">💼 Saved Jobs</h2>
        {favJobs.length === 0 ? (
          <p className="text-yellow-500">No saved jobs yet. Go to Jobs and save some!</p>
        ) : (
          <ul className="space-y-4">
            {favJobs.map((job) => (
              <li
                key={job.job_id}
                className="p-4 border-2 border-green-600 rounded-lg hover:bg-green-50"
              >
                <h3 className="text-xl font-semibold text-green-700">{job.job_title}</h3>
                <p className="text-gray-700">
                  {job.employer_name} — {job.job_city}, {job.job_country}
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={job.job_apply_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
                  >
                    🔗 Apply Now
                  </a>
                  <button
                    onClick={() => removeJob(job.job_id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
                  >
                    ❌ Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* ✅ Saved Scholarships */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-4">🎓 Saved Scholarships</h2>
        {favScholarships.length === 0 ? (
          <p className="text-yellow-500">
            No saved scholarships yet. Go to Scholarships and save some!
          </p>
        ) : (
          <ul className="space-y-4">
            {favScholarships.map((sch) => (
              <li
                key={sch.id}
                className="p-4 border-2 border-yellow-400 rounded-lg hover:bg-yellow-50"
              >
                <h3 className="text-lg font-semibold text-green-700">{sch.title}</h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={sch.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
                  >
                    🔗 View Details
                  </a>
                  <button
                    onClick={() => removeScholarship(sch.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
                  >
                    ❌ Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
