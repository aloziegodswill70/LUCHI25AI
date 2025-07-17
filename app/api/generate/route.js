// ✅ Force this API route to be dynamic (run only at request time)
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(req) {
  try {
    // ✅ Get user session
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // ✅ Parse request body
    const { topic, type } = await req.json();
    if (!topic || typeof topic !== 'string') {
      return NextResponse.json({ error: "Invalid or missing 'topic'" }, { status: 400 });
    }
    if (!type || typeof type !== 'string') {
      return NextResponse.json({ error: "Invalid or missing 'type'" }, { status: 400 });
    }

    // ✅ Fetch user from database
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { generations: true },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // ✅ Limit generation for non-pro users
    if (!user.isPro && user.generations.length >= 3) {
      return NextResponse.json({ error: 'Generation limit reached' }, { status: 403 });
    }

    // ✅ Call Groq API
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: [
          { role: 'system', content: 'You are a helpful assistant...' },
          { role: 'user', content: topic },
        ],
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error('Groq API error:', errText);
      return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
    }

    const data = await groqRes.json();
    const result = data?.choices?.[0]?.message?.content?.trim();

    if (!result) {
      return NextResponse.json({ error: 'No result generated' }, { status: 500 });
    }

    // ✅ Save generation in DB
    await prisma.generation.create({
      data: {
        type,
        content: result,
        userId: user.id,
      },
    });

    // ✅ Return response
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/generate:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
