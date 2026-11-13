import Link from 'next/link';
import type { Metadata } from 'next';
import { SubscribeButtons } from '@/components/subscribe-buttons';

export const metadata: Metadata = {
  title: 'Subscribe | ViewFlow Systems',
  description: 'Turn on a ViewFlow Systems monthly subscription with PayFast.',
};

export default function SubscribePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <Link
          href="/portal"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors mb-10"
        >
          &larr; Back to your account
        </Link>

        <h1 className="text-4xl font-bold text-navy text-balance">Turn your subscription on</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Pick the package you want and pay with card or EFT on PayFast. Your account continues
          as soon as the payment clears.
        </p>

        <div className="mt-10">
          <SubscribeButtons />
        </div>
      </div>
    </main>
  );
}
