import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const CHECKOUT_ENDPOINT = 'https://flux-09ee36c4.base44.app/functions/payfastCheckout';

export async function POST(req: NextRequest) {
  const token = req.cookies.get('vf_session')?.value;

  if (!token) {
    return NextResponse.json({ error: 'not_authenticated' }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));

  try {
    const res = await fetch(CHECKOUT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tier_code: body?.tier_code, session_token: token }),
      cache: 'no-store',
    });

    const data = await res.json().catch(() => ({}));

    if (res.status === 401) {
      return NextResponse.json({ error: 'not_authenticated' }, { status: 401 });
    }

    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { error: 'checkout_unreachable', message: 'Could not reach the billing server.' },
      { status: 502 },
    );
  }
}
