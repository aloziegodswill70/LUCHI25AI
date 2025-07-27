"use client";
import { useState } from "react";

export default function GenerateCV() {
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(null);

  const handleGenerate = async () => {
    if (!name.trim()) {
      alert("⚠️ Please enter your name");
      return;
    }
    setLoading(true);
    setGenerated(null);
    try {
      const res = await fetch("/api/generate-cv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicantName: name,
          education,
          experience,
          skills,
        }),
      });

      const data = await res.json();
      if (data.error) {
        alert(`❌ ${data.error}`);
      } else {
        // ✅ Backend returns { result: "..." }
        setGenerated(data.result);
      }
    } catch (err) {
      console.error("CV generation error:", err);
      alert("❌ Error generating CV");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">✨ Generate Your CV</h1>
      <p className="text-red-600 mb-6 max-w-2xl">
        Fill out the form below and instantly get a CV generated for you.
      </p>

      {/* 📝 Form */}
      <div className="max-w-xl space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-2 border-green-600 p-3 rounded-lg outline-none"
        />
        <textarea
          placeholder="Education (e.g. B.Sc in Computer Science)"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          className="w-full border-2 border-green-600 p-3 rounded-lg outline-none"
        />
        <textarea
          placeholder="Experience (e.g. 2 years as Frontend Developer)"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="w-full border-2 border-green-600 p-3 rounded-lg outline-none"
        />
        <textarea
          placeholder="Skills (e.g. React, Node.js, Tailwind CSS)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="w-full border-2 border-green-600 p-3 rounded-lg outline-none"
        />

        <button
          onClick={handleGenerate}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
        >
          {loading ? "Generating..." : "Generate CV"}
        </button>
      </div>

      {loading && (
        <p className="mt-6 text-yellow-500 font-semibold animate-pulse">
          ⏳ Generating your CV...
        </p>
      )}

      {generated && !loading && (
        <div className="mt-8 bg-green-50 border border-green-600 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-green-700 mb-4">📄 Your CV</h2>
          <pre className="whitespace-pre-wrap text-gray-800">{generated}</pre>
          <button
            onClick={() => {
              const blob = new Blob([generated], { type: "text/plain" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "CV.txt";
              a.click();
            }}
            className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow-md"
          >
            ⬇️ Download CV
          </button>
        </div>
      )}
    </main>
  );
}
