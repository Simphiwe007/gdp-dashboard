import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { LogoutButton } from '@/components/logout-button';

export const dynamic = 'force-dynamic';

const AUTH_ENDPOINT =
  process.env.CLIENT_AUTH_URL ||
  'https://flux-09ee36c4.base44.app/functions/clientAuth';

type Session = {
  success?: boolean;
  client?: {
    id: string;
    full_name: string;
    email: string;
    agency_name: string;
    phone: string;
    plan: string;
    start_date: string | null;
  };
  status?: string;
  trial_ends_at?: string | null;
  trial_live?: boolean;
  days_left?: number;
  needs_subscription?: boolean;
  error?: string;
};

async function getSession(token: string): Promise<Session | null> {
  try {
    const res = await fetch(AUTH_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'session', session_token: token }),
      cache: 'no-store',
    });
    if (!res.ok) return null;
    return (await res.json()) as Session;
  } catch {
    return null;
  }
}

const prettyDate = (iso?: string | null) => {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString('en-ZA', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return null;
  }
};

export default async function PortalPage() {
  const token = (await cookies()).get('vf_session')?.value;
  if (!token) redirect('/login');

  const session = await getSession(token);
  if (!session?.client) redirect('/login');

  const { client } = session;
  const paused = session.needs_subscription === true;
  const daysLeft = session.days_left ?? 0;

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex items-start justify-between gap-4 mb-10">
          <div>
            <Link href="/" className="text-sm text-muted-foreground hover:text-navy transition-colors">
              ViewFlow Systems
            </Link>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-navy">
              Welcome, {client.full_name.split(' ')[0]}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {client.agency_name || 'Your agency'} &middot; {client.email}
            </p>
          </div>
          <LogoutButton />
        </div>

        {/* Account state */}
        <div
          className={`rounded-2xl border p-6 sm:p-8 ${
            paused ? 'border-red-200 bg-red-50' : 'border-border bg-white shadow-sm'
          }`}
        >
          {paused ? (
            <>
              <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-700">
                Account paused
              </span>
              <h2 className="mt-4 text-xl font-bold text-navy">
                Your free trial has ended
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Your account stops operating until a monthly subscription is active. Nothing was
                charged and your data is still here. Turn the subscription on and everything
                continues where it left off.
              </p>
              <Link
                href="/subscribe"
                className="mt-6 inline-flex rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy/90 transition-colors"
              >
                Choose a package and pay
              </Link>
              <p className="mt-3 text-xs text-muted-foreground">
                Card or EFT, handled by PayFast. You are charged monthly until you cancel.
              </p>
            </>
          ) : session.status === 'active' ? (
            <>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
                Subscribed
              </span>
              <h2 className="mt-4 text-xl font-bold text-navy">
                {client.plan || 'Your package'} is active
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Your subscription is paid up. Manage or change your package any time.
              </p>
              <dl className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl bg-light-gray p-4">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">Package</dt>
                  <dd className="mt-1 font-semibold text-navy">{client.plan || 'Active'}</dd>
                </div>
                <div className="rounded-xl bg-light-gray p-4">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">Billed</dt>
                  <dd className="mt-1 font-semibold text-navy">Monthly</dd>
                </div>
                <div className="rounded-xl bg-light-gray p-4">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">Status</dt>
                  <dd className="mt-1 font-semibold text-navy">Active</dd>
                </div>
              </dl>
              <Link
                href="/subscribe"
                className="mt-6 inline-flex rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-navy hover:bg-light-gray transition-colors"
              >
                Change package
              </Link>
            </>
          ) : (
            <>
              <span className="inline-flex items-center rounded-full bg-cyan/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
                Trial active
              </span>
              <h2 className="mt-4 text-xl font-bold text-navy">
                {daysLeft === 0
                  ? 'Your trial ends today'
                  : `${daysLeft} ${daysLeft === 1 ? 'day' : 'days'} left in your trial`}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Full access until {prettyDate(session.trial_ends_at)}. Nothing is charged
                automatically. After that date a monthly subscription keeps the account running.
              </p>

              <dl className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl bg-light-gray p-4">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">Plan</dt>
                  <dd className="mt-1 font-semibold text-navy">Free trial</dd>
                </div>
                <div className="rounded-xl bg-light-gray p-4">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">Started</dt>
                  <dd className="mt-1 font-semibold text-navy">
                    {prettyDate(client.start_date) ?? 'Today'}
                  </dd>
                </div>
                <div className="rounded-xl bg-light-gray p-4">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">Status</dt>
                  <dd className="mt-1 font-semibold text-navy">Trial</dd>
                </div>
              </dl>
            </>
          )}
        </div>

        {/* What is included */}
        <div className="mt-8 rounded-2xl border border-border bg-white p-6 sm:p-8">
          <h3 className="font-semibold text-navy">What your account includes</h3>
          <ul className="mt-4 space-y-3">
            {[
              'Every enquiry from your ads, portals and website captured in one place',
              'Automatic WhatsApp reply the moment a lead arrives',
              'Lead scoring so you talk to buyers who are ready',
              'Follow-up scheduled for day 0, day 1 and day 3',
              'Qualified viewings booked into your calendar',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-navy">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/20 text-[11px] font-bold text-navy">
                  &#10003;
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Honest status of the build */}
        <div className="mt-8 rounded-2xl border border-border bg-light-gray p-6 sm:p-8">
          <h3 className="font-semibold text-navy">Setup status</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Your lead capture and WhatsApp follow-up are switched on by us, not by you, because
            they need your portal logins and numbers. We have your details and will contact you on{' '}
            {client.phone || 'the number you gave us'} to finish connecting your lead sources.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Until that connection is made, no leads are flowing into this account yet. We would
            rather tell you that than show you an empty dashboard that looks like it is working.
          </p>
        </div>
      </div>
    </main>
  );
}
