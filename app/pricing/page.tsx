import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | ViewFlow Systems',
  description:
    'ViewFlow Systems costs R1,499 per month per agency after a free 7-day trial. No setup fee and no contract.',
};

const included = [
  'Every enquiry from your ads, portals and website captured in one place',
  'Automatic WhatsApp reply the moment a lead arrives, day or night',
  'Lead scoring so you talk to buyers who are ready, not tyre-kickers',
  'Follow-up scheduled for day 0, day 1 and day 3',
  'Qualified viewings booked into your live calendar',
  'Setup done with you, not handed to you',
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors mb-10"
        >
          &larr; Back to ViewFlow Systems
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold text-navy text-balance">
          One price, one plan
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          No setup fee. No contract. Start with seven days free and decide once you have seen it
          working.
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-white p-6 sm:p-10 shadow-sm">
          <div className="flex flex-wrap items-end gap-3">
            <span className="text-5xl font-bold text-navy">R1,499</span>
            <span className="text-lg text-muted-foreground pb-1">per month</span>
          </div>
          <p className="mt-3 text-muted-foreground">
            First seven days free. No card required to start and nothing charged automatically.
          </p>

          <ul className="mt-8 space-y-3">
            {included.map((item) => (
              <li key={item} className="flex gap-3 text-navy">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/20 text-xs font-bold text-navy">
                  &#10003;
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/trial"
            className="mt-9 inline-flex w-full items-center justify-center rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white hover:bg-navy/90 transition-colors sm:w-auto sm:px-10"
          >
            Start my free 7-day trial
          </Link>

          <p className="mt-5 text-sm text-muted-foreground">
            Already a client?{' '}
            <Link href="/login" className="font-medium text-navy underline underline-offset-2">
              Log in
            </Link>
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-light-gray p-6">
          <p className="text-sm text-navy font-semibold mb-2">What is not included</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We do not run your paid ad budget for you, and we do not promise a specific number of
            viewings or sales. Anyone quoting you a guaranteed figure before seeing your area and
            your stock is guessing.
          </p>
        </div>
      </div>
    </main>
  );
}
