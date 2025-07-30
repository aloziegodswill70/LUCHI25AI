import { NextResponse } from "next/server";


export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "";
  
  // Build ArbeitNow API URL
  const apiUrl = `https://www.arbeitnow.com/api/job-board-api?${query ? `search=${encodeURIComponent(query)}` : ""}`;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      console.error("ArbeitNow API error:", res.status);
      return NextResponse.json({ error: "Failed to fetch jobs" }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json({ jobs: data.data || [], total: data.data?.length, perPage: data.data?.length });
  } catch (err) {
    console.error("Error fetching from ArbeitNow:", err);
    return NextResponse.json({ error: "Failed to load jobs" }, { status: 500 });
  }
}
