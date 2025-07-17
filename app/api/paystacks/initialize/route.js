// app/api/paystacks/initialize/route.js

// ✅ Mark this route as dynamic so Vercel won’t pre-render it at build time
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // ✅ Prepare data for Paystack
    const paystackData = {
      email: user.email,
      amount: 50000, // amount in kobo (₦500.00)
      callback_url: `${process.env.NEXTAUTH_URL}/payment-success`,
    };

    // ✅ Call Paystack initialize endpoint
    const res = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paystackData),
    });

    const data = await res.json();

    if (data.status && data.data?.authorization_url) {
      return NextResponse.json({ authorization_url: data.data.authorization_url }, { status: 200 });
    } else {
      return NextResponse.json(
        { error: data.message || 'Paystack initialization failed' },
        { status: 400 }
      );
    }
  } catch (err) {
    console.error('Paystack initialize error:', err);
    return NextResponse.json({ error: 'Server error initializing Paystack' }, { status: 500 });
  }
}
