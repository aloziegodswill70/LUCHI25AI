// ✅ app/api/generate-cv/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, skills, experience } = await req.json();

    const prompt = `
Generate a professional CV in plain text.
Name: ${name}
Skills: ${skills}
Experience: ${experience}

Include sections: Profile Summary, Skills, Work Experience, Education, and Contact Info.
`;

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // ✅ Updated model
        model: "llama3-70b-8192",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    const data = await res.json();

    if (data.error) {
      console.error("Groq CV error:", data.error);
      return NextResponse.json(
        { error: "Failed to generate CV" },
        { status: 500 }
      );
    }

    return NextResponse.json({ result: data.choices[0].message.content });
  } catch (err) {
    console.error("CV generation error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
