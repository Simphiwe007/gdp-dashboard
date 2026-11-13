'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function logout() {
    setBusy(true);
    await fetch('/api/auth/logout', { method: 'POST' }).catch(() => undefined);
    router.replace('/login');
  }

  return (
    <button
      type="button"
      onClick={logout}
      disabled={busy}
      className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-navy hover:bg-light-gray transition-colors disabled:opacity-60"
    >
      {busy ? 'Signing out...' : 'Sign out'}
    </button>
  );
}
