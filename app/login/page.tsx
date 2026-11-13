'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setMessage('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus('error');
        setMessage(data?.error || 'Email or password is incorrect.');
        return;
      }

      router.replace('/portal');
    } catch {
      setStatus('error');
      setMessage('We could not reach our servers. Please try again.');
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-md mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors mb-10"
        >
          &larr; Back to ViewFlow Systems
        </Link>

        <h1 className="text-3xl font-bold text-navy">Log in to your account</h1>
        <p className="mt-3 text-muted-foreground">
          Use the email and password you set when you started your trial.
        </p>

        <form onSubmit={submit} className="mt-8 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border px-3.5 py-2.5 text-navy outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
                placeholder="you@youragency.co.za"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-navy mb-1.5">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-border px-3.5 py-2.5 text-navy outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
                placeholder="Your password"
              />
            </div>
          </div>

          {status === 'error' && (
            <p className="mt-4 rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-700">{message}</p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-6 w-full rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy/90 transition-colors disabled:opacity-60"
          >
            {status === 'sending' ? 'Signing in...' : 'Log in'}
          </button>

          <p className="mt-5 text-center text-sm text-muted-foreground">
            No account yet?{' '}
            <Link href="/trial" className="font-medium text-navy underline underline-offset-2">
              Start a free 7-day trial
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
