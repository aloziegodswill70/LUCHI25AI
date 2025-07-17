// app/api/history/route.js

// ✅ Mark this route as dynamic so Next.js does NOT try to prerender it at build time
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth'; // ✅ use the central authOptions
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // ✅ Fetch the user's history ordered by most recent
    const history = await prisma.generation.findMany({
      where: { user: { email: session.user.email } },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ history }, { status: 200 });
  } catch (error) {
    console.error('Error fetching history:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
