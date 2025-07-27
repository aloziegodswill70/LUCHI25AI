"use client";
import { useState } from "react";

export default function GenerateLetter() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [skills, setSkills] = useState("");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(null);

  const handleGenerate = async () => {
    if (!name.trim() || !position.trim() || !company.trim()) {
      alert("⚠️ Please fill out your name, position, and company.");
      return;
    }
    setLoading(true);
    setGenerated(null);
    try {
      const res = await fetch("/api/generate-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicantName: name,
          position,
          company,
          skills, // optional extra context
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
      console.error("Letter error:", err);
      alert("❌ Error generating letter. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        📄 Generate Application Letter
      </h1>
      <p className="text-red-600 mb-6 max-w-2xl">
        Fill out the form below to instantly generate a professional application letter.
      </p>

      {/* ✏️ Form */}
      <div className="max-w-xl space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-2 border-green-600 p-3 rounded-lg outline-none"
        />
        <input
          type="text"
          placeholder="Position (e.g. Frontend Developer)"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="w-full border-2 border-green-600 p-3 rounded-lg outline-none"
        />
        <input
          type="text"
          placeholder="Company (e.g. TechCorp)"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full border-2 border-green-600 p-3 rounded-lg outline-none"
        />
        <textarea
          placeholder="Skills or qualities to highlight (optional)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="w-full border-2 border-green-600 p-3 rounded-lg outline-none"
        />

        <button
          onClick={handleGenerate}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
        >
          {loading ? "Generating..." : "Generate Letter"}
        </button>
      </div>

      {loading && (
        <p className="mt-6 text-yellow-500 font-semibold animate-pulse">
          ⏳ Generating your application letter...
        </p>
      )}

      {generated && !loading && (
        <div className="mt-8 bg-green-50 border border-green-600 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-green-700 mb-4">✅ Your Letter</h2>
          <pre className="whitespace-pre-wrap text-gray-800">{generated}</pre>
          <button
            onClick={() => {
              const blob = new Blob([generated], { type: "text/plain" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "Application_Letter.txt";
              a.click();
            }}
            className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow-md"
          >
            ⬇️ Download Letter
          </button>
        </div>
      )}
    </main>
  );
}
