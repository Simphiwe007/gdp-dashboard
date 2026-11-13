'use client';

import { useState } from 'react';
import Link from 'next/link';

const included = [
  'Every enquiry from your ads, portals and website captured in one place',
  'Automatic WhatsApp reply the moment a lead arrives, day or night',
  'Lead scoring so you talk to buyers who are ready, not tyre-kickers',
  'Follow-up scheduled for day 0, day 1 and day 3 without you remembering',
  'Qualified viewings booked straight into your live calendar',
];

export default function TrialPage() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    agency_name: '',
    password: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [trialEnds, setTrialEnds] = useState<string | null>(null);
  const [already, setAlready] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const prettyDate = (iso: string | null) => {
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

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setMessage('');

    try {
      const res = await fetch('/api/trial/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus('error');
        setMessage(data?.error || 'Something went wrong. Please try again.');
        return;
      }

      setTrialEnds(data?.trial_ends_at ?? null);
      setAlready(Boolean(data?.already_registered));
      setMessage(data?.message || 'Your trial has started.');
      setStatus('done');
    } catch {
      setStatus('error');
      setMessage('We could not reach our servers. Please try again in a moment.');
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors mb-10"
        >
          &larr; Back to ViewFlow Systems
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: what they get */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan/15 text-navy px-4 py-2 text-sm font-medium mb-6">
              7 days free. No card required.
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold text-navy text-balance">
              Start your free 7-day trial
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Full access to the ViewFlow pipeline for seven days. We do not ask for a card
              and we do not auto-charge you. When the seven days are up the account pauses
              until you switch on a monthly membership.
            </p>

            <ul className="mt-8 space-y-4">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-navy">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/20 text-xs font-bold text-navy">
                    &#10003;
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-xl border border-border bg-light-gray p-5">
              <p className="text-sm text-navy font-semibold mb-1">What happens after 7 days</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your account stops operating until a subscription is active. Starter is R1,499
                per month, with larger packages for teams. Nothing is charged automatically and
                your data stays exactly where it is, so you can pick up the moment you subscribe.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm lg:sticky lg:top-8">
            {status === 'done' ? (
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan/20 text-navy text-xl font-bold mb-5">
                  &#10003;
                </div>
                <h2 className="text-2xl font-bold text-navy">
                  {already ? 'You already have an account' : 'Your trial is active'}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{message}</p>

                {prettyDate(trialEnds) && (
                  <div className="mt-6 rounded-xl bg-light-gray p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Trial runs until
                    </p>
                    <p className="text-lg font-semibold text-navy mt-1">
                      {prettyDate(trialEnds)}
                    </p>
                  </div>
                )}

                <Link
                  href={already ? '/login' : '/portal'}
                  className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy/90 transition-colors"
                >
                  {already ? 'Log in to your account' : 'Open your dashboard'}
                </Link>

                {!already && (
                  <p className="mt-4 text-center text-xs text-muted-foreground leading-relaxed">
                    Your dashboard is already open. Bookmark{' '}
                    <span className="font-medium text-navy">viewflow-systems.vercel.app/login</span>{' '}
                    to come back later.
                  </p>
                )}
              </div>
            ) : (
              <form onSubmit={submit}>
                <h2 className="text-xl font-bold text-navy">Get set up in under a minute</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  No card, no contract. Just your details.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-navy mb-1.5">
                      Full name <span className="text-cyan-dark">*</span>
                    </label>
                    <input
                      id="full_name"
                      required
                      value={form.full_name}
                      onChange={set('full_name')}
                      className="w-full rounded-lg border border-border px-3.5 py-2.5 text-navy outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
                      placeholder="Thabo Mokoena"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                      Email <span className="text-cyan-dark">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={set('email')}
                      className="w-full rounded-lg border border-border px-3.5 py-2.5 text-navy outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
                      placeholder="you@youragency.co.za"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-navy mb-1.5">
                      Choose a password <span className="text-cyan-dark">*</span>
                    </label>
                    <input
                      id="password"
                      type="password"
                      required
                      minLength={8}
                      value={form.password}
                      onChange={set('password')}
                      className="w-full rounded-lg border border-border px-3.5 py-2.5 text-navy outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
                      placeholder="At least 8 characters"
                    />
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      You will use this to log in to your account.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
                      WhatsApp number
                    </label>
                    <input
                      id="phone"
                      value={form.phone}
                      onChange={set('phone')}
                      className="w-full rounded-lg border border-border px-3.5 py-2.5 text-navy outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
                      placeholder="065 581 5144"
                    />
                  </div>

                  <div>
                    <label htmlFor="agency_name" className="block text-sm font-medium text-navy mb-1.5">
                      Agency name
                    </label>
                    <input
                      id="agency_name"
                      value={form.agency_name}
                      onChange={set('agency_name')}
                      className="w-full rounded-lg border border-border px-3.5 py-2.5 text-navy outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
                      placeholder="Your agency"
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <p className="mt-4 rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-6 w-full rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy/90 transition-colors disabled:opacity-60"
                >
                  {status === 'sending' ? 'Starting your trial...' : 'Start my free 7-day trial'}
                </button>

                <p className="mt-4 text-center text-xs text-muted-foreground leading-relaxed">
                  Seven days of full access on Starter (R1,499 per month). After that a
                  subscription is required to keep operating. No automatic charges, no card today.
                </p>

                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link href="/login" className="font-medium text-navy underline underline-offset-2">
                    Log in
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
