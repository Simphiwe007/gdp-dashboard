import { NextRequest, NextResponse } from 'next/server';

const AUTH_ENDPOINT =
  process.env.CLIENT_AUTH_URL ||
  'https://flux-09ee36c4.base44.app/functions/clientAuth';

export async function POST(req: NextRequest) {
  const token = req.cookies.get('vf_session')?.value;

  if (token) {
    // Revoke server-side too, not just the cookie.
    await fetch(AUTH_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'logout', session_token: token }),
      cache: 'no-store',
    }).catch(() => undefined);
  }

  const out = NextResponse.json({ success: true });
  out.cookies.set('vf_session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
  return out;
}
