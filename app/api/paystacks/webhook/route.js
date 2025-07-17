// app/api/paystacks/webhook/route.js

// ✅ Mark route as dynamic to avoid build-time issues on Vercel
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // ✅ use singleton instance

export async function POST(req) {
  try {
    // ✅ Get raw body for signature verification
    const body = await req.json();

    const paystackSignature = req.headers.get('x-paystack-signature');
    const crypto = await import('crypto');

    const computedHash = crypto
      .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY)
      .update(JSON.stringify(body))
      .digest('hex');

    // ✅ Verify Paystack signature
    if (computedHash !== paystackSignature) {
      return NextResponse.json({ status: 'invalid signature' }, { status: 400 });
    }

    const event = body.event;

    if (event === 'charge.success') {
      const email = body?.data?.customer?.email;

      if (!email) {
        return NextResponse.json({ status: 'missing email' }, { status: 400 });
      }

      try {
        await prisma.user.update({
          where: { email },
          data: { isPro: true },
        });

        return NextResponse.json({ status: 'success' }, { status: 200 });
      } catch (dbError) {
        console.error('Database update error:', dbError);
        return NextResponse.json({ status: 'db error' }, { status: 500 });
      }
    }

    // ✅ Event is not relevant, acknowledge with 200
    return NextResponse.json({ status: 'ignored' }, { status: 200 });
  } catch (err) {
    console.error('Webhook handling error:', err);
    return NextResponse.json({ status: 'server error' }, { status: 500 });
  }
}
