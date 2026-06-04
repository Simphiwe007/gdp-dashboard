import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'ViewFlow Systems | Predictable Viewing Pipelines for Real Estate Agents',
  description: 'Turn inconsistent leads into qualified property viewing appointments through automation, AI follow-up, and structured pipeline systems.',
  keywords: ['real estate', 'lead generation', 'automation', 'AI follow-up', 'property viewings', 'pipeline systems'],
  openGraph: {
    title: 'ViewFlow Systems | Predictable Viewing Pipelines for Real Estate Agents',
    description: 'Turn inconsistent leads into qualified property viewing appointments through automation, AI follow-up, and structured pipeline systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
