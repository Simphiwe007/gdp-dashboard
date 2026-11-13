import { NextRequest, NextResponse } from 'next/server';

const AUTH_ENDPOINT =
  process.env.CLIENT_AUTH_URL ||
  'https://flux-09ee36c4.base44.app/functions/clientAuth';

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  try {
    const res = await fetch(AUTH_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'login', ...(body as object) }),
      cache: 'no-store',
    });

    const data = await res.json().catch(() => ({}));
    const out = NextResponse.json(
      data?.session_token ? { success: true } : data,
      { status: res.status }
    );

    if (res.ok && data?.session_token) {
      out.cookies.set('vf_session', data.session_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
      });
    }

    return out;
  } catch (err) {
    console.error('login proxy failed', err);
    return NextResponse.json(
      { error: 'We could not reach our servers. Please try again.' },
      { status: 502 }
    );
  }
}
