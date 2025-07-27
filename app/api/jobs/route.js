// ✅ app/api/jobs/route.js
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "developer";

  try {
    const res = await fetch(
      `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(query)}&num_pages=1`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      }
    );

    // ✅ Handle quota exceeded
    if (res.status === 429) {
      console.warn("Quota exceeded for JSearch API");
      return NextResponse.json(
        { error: "⚠️ Daily quota exceeded. Please try again later." },
        { status: 429 }
      );
    }

    // ✅ Handle other non-ok statuses
    if (!res.ok) {
      const text = await res.text();
      console.error("JSearch API error:", res.status, text);
      return NextResponse.json(
        { error: "Failed to load jobs. Please try again later." },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json({ jobs: data.data || [] });
  } catch (err) {
    console.error("Jobs fetch error:", err);
    return NextResponse.json(
      { error: "Failed to load jobs. Please check your connection." },
      { status: 500 }
    );
  }
}
