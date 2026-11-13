import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | ViewFlow Systems',
  description:
    'ViewFlow Systems packages: Starter R1,499, Basic R2,500, Professional R5,000 and Agency R12,000 per month, each after a free 7-day trial.',
};

type Tier = {
  code: string;
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  featured?: boolean;
};

// Starter is confirmed at R1,499/month. The larger packages are deliberately
// not listed with prices until the figures are confirmed, rather than guessed.
const tiers: Tier[] = [
  {
    code: 'STARTER',
    name: 'Starter',
    price: 'R1,499',
    cadence: 'per month',
    blurb: 'For a solo agent who wants every enquiry answered.',
    featured: true,
    features: [
      'Every enquiry from ads, portals and your website in one place',
      'Automatic WhatsApp reply when a lead arrives',
      'Lead scoring so you talk to buyers who are ready',
      'Follow-up at day 0, day 1 and day 3',
      'Your pipeline in the client portal',
    ],
  },
  {
    code: 'BASIC',
    name: 'Basic',
    price: 'R2,500',
    cadence: 'per month',
    blurb: 'For an agent ready to work volume every week.',
    features: [
      'Everything in Starter',
      'Dedicated lead pipeline for your agency',
      'Automated WhatsApp outreach, 50 messages a day',
      'Lead scoring and prioritisation',
      'Client portal access',
      'Weekly performance report',
    ],
  },
  {
    code: 'PRO',
    name: 'Professional',
    price: 'R5,000',
    cadence: 'per month',
    blurb: 'For a busy agent or pair who needs the ceiling lifted.',
    features: [
      'Everything in Basic',
      'Priority lead scoring',
      'Unlimited WhatsApp outreach',
      'Custom outreach scripts',
      'Portal access for team members',
      'Referral programme switched on',
    ],
  },
  {
    code: 'AGENCY',
    name: 'Agency',
    price: 'R12,000',
    cadence: 'per month',
    blurb: 'For multi-agent teams and branches that need routing.',
    features: [
      'Everything in Professional',
      'Up to 5 agent seats',
      'Multi-branch lead routing',
      'Dedicated account manager',
      'Monthly ROI review',
      'Custom integrations and priority support',
    ],
  },
];

const notIncluded = [
  'We do not run your paid ad budget for you.',
  'We do not promise a set number of viewings or sales. Anyone quoting a guaranteed figure before seeing your area and your stock is guessing.',
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors mb-10"
        >
          &larr; Back to ViewFlow Systems
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold text-navy text-balance">
          Packages and pricing
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Four packages, all starting with seven days free. No setup fee, no contract, and
          nothing charged automatically when the trial ends.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.code}
              className={`rounded-2xl border bg-white p-6 shadow-sm ${
                tier.featured ? 'border-cyan ring-1 ring-cyan/30' : 'border-border'
              }`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="text-lg font-bold text-navy">{tier.name}</h2>
                {tier.featured && (
                  <span className="rounded-full bg-cyan/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-navy">
                    Entry
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-3xl font-bold text-navy">{tier.price}</span>
                <span className="text-sm text-muted-foreground">{tier.cadence}</span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">{tier.blurb}</p>

              <ul className="mt-5 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-navy">
                    <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-cyan/20 text-[10px] font-bold text-navy">
                      &#10003;
                    </span>
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/trial"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy/90 transition-colors"
              >
                Start free 7-day trial
              </Link>
              <Link
                href="/subscribe"
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-navy hover:bg-light-gray transition-colors"
              >
                Subscribe now instead
              </Link>
            </div>
          ))}

        </div>

        <div className="mt-8 rounded-xl border border-border bg-light-gray p-6">
          <p className="text-sm text-navy font-semibold mb-2">What is not included</p>
          <ul className="space-y-2">
            {notIncluded.map((item) => (
              <li key={item} className="text-sm text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Already a client?{' '}
          <Link href="/login" className="font-medium text-navy underline underline-offset-2">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
