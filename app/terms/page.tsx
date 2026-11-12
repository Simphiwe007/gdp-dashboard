import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | ViewFlow Systems",
  description:
    "The terms that apply when you use ViewFlow Systems' lead-to-appointment automation for real estate agents.",
}

const LAST_UPDATED = "13 November 2026"

export default function TermsPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="text-cyan font-medium text-sm hover:underline"
        >
          &larr; Back to ViewFlow Systems
        </Link>

        <h1 className="mt-8 text-4xl font-bold text-navy">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-10 space-y-8 text-navy/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Agreement
            </h2>
            <p>
              These terms apply when you use ViewFlow Systems software and
              services. By requesting a trial, signing up or using the product,
              you agree to them. If you are agreeing on behalf of an agency, you
              confirm you may do so.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              What the service does
            </h2>
            <p>
              ViewFlow Systems captures property enquiries, qualifies them,
              sends automated follow-up messages on your instruction, and helps
              book viewing appointments into your calendar. It is a workflow
              tool. It does not guarantee sales, viewings or any particular
              commercial result.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Trials and billing
            </h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>
                Trials are time-limited. When a trial ends, access stops unless
                you choose a paid plan.
              </li>
              <li>
                Paid plans are billed in advance on a recurring basis at the
                price shown when you subscribe.
              </li>
              <li>
                Founding client pricing applies only to the client who signed up
                on it and is not transferable.
              </li>
              <li>
                Cancel any time. Cancellation stops the next billing cycle;
                fees already paid are not refunded for part-months unless
                required by law.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Your obligations
            </h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>
                You will only upload or send to contacts you are entitled to
                contact, and you will comply with POPIA and applicable
                marketing law, including honouring opt-outs.
              </li>
              <li>
                You will keep your login details secure and are responsible for
                activity under your account.
              </li>
              <li>
                You will not use the service to send unlawful, misleading or
                harassing messages, or to interfere with the platform.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Acceptable use of automation
            </h2>
            <p>
              Messaging channels such as WhatsApp and email have their own
              rules. You are responsible for keeping your connected accounts in
              good standing and for the content sent from them. We may suspend
              sending if we see abuse that risks the platform or other clients.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Availability
            </h2>
            <p>
              We aim to keep the service available and will give reasonable
              notice of planned maintenance. We do not promise uninterrupted
              service, and third-party providers may occasionally fail.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Liability
            </h2>
            <p>
              To the extent the law allows, our total liability for any claim
              arising from the service is limited to the fees you paid us in the
              three months before the claim. We are not liable for indirect or
              consequential loss, including lost profit or lost deals.
            </p>
            <p className="mt-3">
              Nothing in these terms limits rights you have under the Consumer
              Protection Act that cannot be limited by agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Ending the agreement
            </h2>
            <p>
              You may stop using the service at any time. We may suspend or end
              access if these terms are breached, if fees remain unpaid, or if
              we stop offering the service, in which case we will refund any
              unused prepaid period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Law
            </h2>
            <p>
              These terms are governed by the laws of the Republic of South
              Africa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy mb-3">
              Contact
            </h2>
            <p>
              Questions about these terms:{" "}
              <a
                href="mailto:ViewFlow-System@outlook.com"
                className="text-cyan hover:underline"
              >
                ViewFlow-System@outlook.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-navy/10 text-sm text-muted-foreground">
          <Link href="/privacy" className="text-cyan hover:underline">
            Privacy Policy
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
