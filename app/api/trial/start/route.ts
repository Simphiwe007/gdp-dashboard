import { NextRequest, NextResponse } from 'next/server';

// Server-side proxy to the trial signup function. Keeping this on our own
// origin avoids any cross-origin issues in the browser and means the site
// never depends on a third-party endpoint loading successfully.

const TRIAL_ENDPOINT =
  process.env.TRIAL_SIGNUP_URL ||
  'https://flux-09ee36c4.base44.app/functions/trialSignup';

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  try {
    const res = await fetch(TRIAL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error('trial signup proxy failed', err);
    return NextResponse.json(
      { error: 'We could not start your trial just now. Please try again in a moment.' },
      { status: 502 }
    );
  }
}
