import React from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"
import { CONTACT_FORM_ID } from "../lib/formspree"
import { CONTACT, SOCIALS } from "../data/contact"

const inputClass =
  "w-full border border-brand-gray/60 bg-white px-5 py-3.5 text-sm md:text-base text-brand-text focus:outline-none focus:border-brand-text placeholder-gray-400 rounded-xs transition-all duration-300 font-satoshi"

const labelClass =
  "block font-satoshi text-[11px] tracking-[0.18em] uppercase text-brand-text/60 mb-2"

const errorClass = "font-satoshi text-sm text-red-700 mt-1"

/**
 * The target of the navbar's "Get In Touch" link (href="#contact").
 * Rendered above the footer on every route so the anchor resolves from
 * anywhere in the app, not just the home page.
 */
export const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm(CONTACT_FORM_ID)

  return (
    <section id="contact" className="scroll-mt-8 w-full bg-brand-light px-6 py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left — invitation and direct contact details */}
        <div>
          <div className="font-satoshi text-xs font-medium uppercase tracking-[0.25em] text-[#9a7b4f]">
            Get In Touch
          </div>

          <h2 className="mt-3 font-serif text-3xl leading-[1.15] text-brand-text sm:text-4xl lg:text-5xl">
            We&rsquo;d love to hear<br className="hidden sm:inline" /> from you.
          </h2>

          <p className="mt-6 max-w-[460px] font-satoshi text-sm leading-relaxed text-brand-text/70 md:text-base">
            Whether it&rsquo;s a question about a particular weave, a wedding trousseau,
            or a bulk order for your store &mdash; send us a note and we&rsquo;ll get back to you.
          </p>

          <div className="mt-10 flex w-fit flex-col gap-5">
            <a href={`mailto:${CONTACT.email}`} className="group flex items-center gap-3">
              <Mail className="h-[18px] w-[18px] shrink-0 text-brand-gold" />
              <span className="font-satoshi text-sm text-brand-text/80 transition-colors group-hover:text-brand-text md:text-base">
                {CONTACT.email}
              </span>
            </a>

            <a href={CONTACT.phoneHref} className="group flex items-center gap-3">
              <Phone className="h-[18px] w-[18px] shrink-0 text-brand-gold" />
              <span className="font-satoshi text-sm text-brand-text/80 transition-colors group-hover:text-brand-text md:text-base">
                {CONTACT.phone}
              </span>
            </a>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-[18px] w-[18px] shrink-0 text-brand-gold" />
              <span className="max-w-[260px] font-satoshi text-sm leading-relaxed text-brand-text/80 md:text-base">
                {CONTACT.address}
              </span>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {SOCIALS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow SSK Handlooms on ${name}`}
                className="text-brand-gold transition-colors duration-300 hover:text-brand-dark"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Right — enquiry form */}
        <div className="w-full border border-brand-gray/60 bg-white p-7 shadow-[0px_4px_34px_rgba(70,44,0,0.08)] sm:p-9 md:p-10">
          {state.succeeded ? (
            <div className="flex min-h-[380px] flex-col justify-center">
              <h3 className="font-serif text-2xl leading-[1.2] text-brand-text sm:text-3xl">
                Thank you for writing in.
              </h3>
              <p className="mt-4 font-satoshi text-sm leading-relaxed text-brand-text/70 md:text-base">
                We&rsquo;ve received your message and will get back to you at the email you shared.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Labels the submission in the Formspree inbox, so enquiries are
                  distinguishable from newsletter signups. */}
              <input type="hidden" name="_subject" value="New enquiry — SSK Handlooms" />

              {/* Honeypot: bots fill this, humans never see it. */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div>
                <label htmlFor="contact-name" className={labelClass}>Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
                <ValidationError field="name" prefix="Name" errors={state.errors} className={errorClass} />
              </div>

              <div>
                <label htmlFor="contact-email" className={labelClass}>Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                />
                <ValidationError field="email" prefix="Email" errors={state.errors} className={errorClass} />
              </div>

              <div>
                <label htmlFor="contact-phone" className={labelClass}>
                  Phone <span className="normal-case tracking-normal text-brand-text/40">(optional)</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+91 00000 00000"
                  className={inputClass}
                />
                <ValidationError field="phone" prefix="Phone" errors={state.errors} className={errorClass} />
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClass}>Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us what you're looking for…"
                  className={`${inputClass} resize-y min-h-[120px]`}
                />
                <ValidationError field="message" prefix="Message" errors={state.errors} className={errorClass} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full cursor-pointer rounded-xs bg-brand-dark py-4 font-satoshi text-sm font-medium uppercase tracking-[0.2em] text-white shadow-sm transition-all duration-300 hover:bg-brand-dark/90 hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
              >
                {state.submitting ? "Sending…" : "Send Message"}
              </button>

              {/* Form-level errors (network failure, rate limiting, etc.) */}
              <ValidationError errors={state.errors} className={errorClass} />
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
