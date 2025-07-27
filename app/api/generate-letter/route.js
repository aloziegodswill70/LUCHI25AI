// ✅ app/api/generate-letter/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { applicantName, position, company } = await req.json();

    const prompt = `
Write a formal job application letter.
Applicant Name: ${applicantName}
Position: ${position}
Company: ${company}

Make it professional, friendly, and include relevant skills.
`;

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // ✅ Updated to valid Groq model
        model: "llama3-70b-8192",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    const data = await res.json();

    if (data.error) {
      console.error("Groq Letter error:", data.error);
      return NextResponse.json(
        { error: "Failed to generate letter" },
        { status: 500 }
      );
    }

    return NextResponse.json({ result: data.choices[0].message.content });
  } catch (err) {
    console.error("Letter generation error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
