import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start your free 7-day trial | ViewFlow Systems',
  description:
    'Seven days of full access to the ViewFlow pipeline for real estate agents. No card required, nothing charged automatically. After the trial a monthly subscription keeps it running.',
  openGraph: {
    title: 'Start your free 7-day trial | ViewFlow Systems',
    description:
      'Seven days of full access. No card required. After the trial a monthly subscription keeps it running.',
    type: 'website',
  },
}

export default function TrialLayout({ children }: { children: React.ReactNode }) {
  return children
}
