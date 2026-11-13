'use client';

import { useState } from 'react';
import Link from 'next/link';

type Package = { code: string; name: string; price: string };

const packages: Package[] = [
  { code: 'STARTER', name: 'Starter', price: 'R1,499' },
  { code: 'BASIC', name: 'Basic', price: 'R2,500' },
  { code: 'PRO', name: 'Professional', price: 'R5,000' },
  { code: 'AGENCY', name: 'Agency', price: 'R12,000' },
];

export function SubscribeButtons() {
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [needsLogin, setNeedsLogin] = useState(false);

  async function pay(code: string) {
    setBusy(code);
    setError(null);
    setNeedsLogin(false);

    try {
      const res = await fetch('/api/payfast/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier_code: code }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.status === 401) {
        setNeedsLogin(true);
        return;
      }

      if (!res.ok || !data?.process_url || !data?.params) {
        setError(
          data?.message ||
            'Billing is not switched on yet. Nothing has been charged and no card was taken.',
        );
        return;
      }

      // Hand off to PayFast's hosted page. Card details never touch this site.
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = data.process_url;
      form.style.display = 'none';

      for (const [key, value] of Object.entries(data.params as Record<string, string>)) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = String(value);
        form.appendChild(input);
      }

      document.body.appendChild(form);
      form.submit();
    } catch {
      setError('Could not reach the billing server. Nothing has been charged.');
    } finally {
      setBusy(null);
    }
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {packages.map((pkg) => (
          <div
            key={pkg.code}
            className="rounded-xl border border-border bg-white p-5 flex items-center justify-between gap-4"
          >
            <div>
              <p className="font-semibold text-navy">{pkg.name}</p>
              <p className="text-sm text-muted-foreground">{pkg.price} per month</p>
            </div>
            <button
              type="button"
              onClick={() => pay(pkg.code)}
              disabled={busy !== null}
              className="rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy/90 transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {busy === pkg.code ? 'Opening...' : 'Subscribe'}
            </button>
          </div>
        ))}
      </div>

      {needsLogin && (
        <p className="mt-4 rounded-lg bg-amber-50 border border-amber-200 p-3 text-sm text-amber-900">
          You need to be signed in before paying, so the payment lands on your account.{' '}
          <Link href="/login" className="font-semibold underline underline-offset-2">
            Log in
          </Link>{' '}
          or{' '}
          <Link href="/trial" className="font-semibold underline underline-offset-2">
            start a trial
          </Link>
          .
        </p>
      )}

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-800">
          {error}
        </p>
      )}

      <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
        Paying opens PayFast, where you enter your card or EFT details. ViewFlow never sees or
        stores your card number. Billing repeats monthly until you cancel.
      </p>
    </div>
  );
}
