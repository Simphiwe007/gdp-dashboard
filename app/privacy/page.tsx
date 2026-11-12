import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | ViewFlow Systems",
  description:
    "How ViewFlow Systems collects, uses and protects personal information, in line with South Africa's Protection of Personal Information Act (POPIA).",
}

const LAST_UPDATED = "13 November 2026"

export default function PrivacyPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="text-cyan font-medium text-sm hover:underline"
        >
          &larr; Back to ViewFlow Systems
        </Link>

        <h1 className="mt-8 text-4xl font-bold text-navy">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-10 space-y-8 text-navy/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Who we are
            </h2>
            <p>
              ViewFlow Systems builds lead-to-appointment automation for South
              African real estate agents. In this policy &ldquo;we&rdquo;,
              &ldquo;us&rdquo; and &ldquo;ViewFlow&rdquo; refer to ViewFlow
              Systems. We are the responsible party for the personal
              information described here.
            </p>
            <p className="mt-3">
              You can reach us at{" "}
              <a
                href="mailto:ViewFlow-System@outlook.com"
                className="text-cyan hover:underline"
              >
                ViewFlow-System@outlook.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              What we collect
            </h2>
            <p>We only collect what we need to run the service:</p>
            <ul className="mt-3 space-y-2 list-disc pl-6">
              <li>
                <strong>Account details</strong> you give us when you request a
                trial or audit: your name, email address, agency name and
                contact number.
              </li>
              <li>
                <strong>Lead data</strong> you provide or connect while using
                the system, such as the names, phone numbers and enquiry details
                of people who contact your agency.
              </li>
              <li>
                <strong>Usage information</strong> such as log-in activity and
                which parts of the product you use, so we can support you and
                keep the service working.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Why we use it
            </h2>
            <p>We process personal information to:</p>
            <ul className="mt-3 space-y-2 list-disc pl-6">
              <li>create and manage your account and trial;</li>
              <li>
                capture enquiries and send the follow-up messages you have asked
                the system to send;
              </li>
              <li>provide support and respond to your questions;</li>
              <li>billing, where you become a paying client; and</li>
              <li>meet our legal obligations.</li>
            </ul>
            <p className="mt-3">
              We do not sell personal information, and we do not use your
              clients&rsquo; details for our own marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Your responsibilities
            </h2>
            <p>
              When you load lead data into the system, you remain responsible
              for it. You need a lawful basis to contact those people, and you
              must honour opt-outs you receive. Our automation sends messages on
              your behalf, on your instruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Who can see it
            </h2>
            <p>
              Access is limited to people who need it to operate and support the
              service. We use service providers for hosting, databases, email
              and messaging delivery who process data on our instructions.
              Where a provider stores data outside South Africa, we rely on
              section 72 of POPIA and require appropriate protection.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              How long we keep it
            </h2>
            <p>
              We keep account information while your account is active, and lead
              data for as long as you use the service. If you close your
              account, we delete or de-identify your data within 30 days unless
              the law requires us to keep it longer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Your rights
            </h2>
            <p>
              Under POPIA you may ask us to confirm what personal information we
              hold about you, correct or delete it, and object to certain
              processing. Email us and we will respond within a reasonable time.
            </p>
            <p className="mt-3">
              If you are unhappy with our response you may complain to the
              Information Regulator of South Africa at{" "}
              <a
                href="https://inforegulator.org.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:underline"
              >
                inforegulator.org.za
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Cookies
            </h2>
            <p>
              We use only the cookies and similar storage needed to keep you
              signed in and to measure basic site traffic. We do not run
              third-party advertising trackers on this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Changes
            </h2>
            <p>
              If this policy changes we will update the date at the top of this
              page. Material changes will be communicated to active clients by
              email.
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-navy/10 text-sm text-muted-foreground">
          <Link href="/terms" className="text-cyan hover:underline">
            Terms of Service
          </Link>
          <span className="mx-2">&middot;</span>
          <Link href="/" className="text-cyan hover:underline">
            Home
          </Link>
        </div>
      </div>
    </main>
  )
}
