import React from "react"
import { CONTACT } from "../data/contact"

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full bg-brand-light">
      <div className="max-w-[860px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <h1
          className="text-[32px] md:text-[44px] leading-[120%] text-brand-dark mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-brand-text/60 mb-12">Last updated: 18 August 2026 (revised)</p>

        <div className="flex flex-col gap-10 font-satoshi text-[15px] leading-[170%] text-brand-text">
          <section>
            <h2 className="font-serif text-xl text-brand-dark mb-3">1. Introduction</h2>
            <p>
              SSK Handlooms ("we", "us", "our") respects your privacy. This policy explains what
              information we collect when you visit sskhandlooms.in, how we use it, and the choices
              you have.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-brand-dark mb-3">2. Information We Collect</h2>
            <p className="mb-3">
              <strong>Information you provide:</strong> your name, email address, and any details you
              submit through our newsletter sign-up or contact forms.
            </p>
            <p>
              <strong>Automatically collected information:</strong> we use{" "}
              <strong>Google Analytics</strong> (Google's gtag.js / GA4) to understand how visitors use
              our site — pages viewed, time on site, device and browser type, approximate location, and
              referral source. Google Analytics uses cookies and similar technologies to collect this
              data. This helps us improve site content, navigation, and the overall shopping experience.
              You can learn more about how Google collects and processes data at{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold underline underline-offset-2"
              >
                Google's Privacy & Terms page
              </a>
              . We also use <strong>Microsoft Clarity</strong> to record aggregated behavioural
              analytics — such as scroll depth, clicks, and session heatmaps — so we can understand
              usability issues and improve page layout. Clarity may set cookies and collect device,
              browser, and interaction data. Details are available on{" "}
              <a
                href="https://learn.microsoft.com/en-us/clarity/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold underline underline-offset-2"
              >
                Microsoft Clarity's FAQ & Privacy page
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-brand-dark mb-3">3. Cookies</h2>
            <p>
              Cookies set by Google Analytics and Microsoft Clarity let us distinguish visitors and
              measure site usage and behaviour in aggregate; they do not by themselves identify you
              personally. Most browsers let you block or delete cookies. You can also opt out
              site-wide of Google Analytics using the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold underline underline-offset-2"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-brand-dark mb-3">4. How We Use Information</h2>
            <p>
              We use collected information to operate and improve the website, respond to enquiries,
              send newsletter updates to subscribers who opt in, and understand aggregate traffic and
              engagement trends. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-brand-dark mb-3">5. Contact Us</h2>
            <p>
              For questions about this policy or your data, reach us at{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-brand-gold underline underline-offset-2">
                {CONTACT.email}
              </a>{" "}
              or {CONTACT.phone}.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
