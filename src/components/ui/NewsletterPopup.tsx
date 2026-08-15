import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"
import image27 from "../../assets/image27.webp"
import { NEWSLETTER_FORM_ID } from "../../lib/formspree"

export const NewsletterPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [state, handleSubmit] = useForm(NEWSLETTER_FORM_ID)

  useEffect(() => {
    // Show popup after 3 seconds for demo purposes
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  // Let the confirmation message sit long enough to be read, then dismiss.
  useEffect(() => {
    if (!state.succeeded) return
    const timer = setTimeout(() => setIsOpen(false), 3500)
    return () => clearTimeout(timer)
  }, [state.succeeded])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-5xl md:min-h-[560px] flex flex-col md:flex-row relative shadow-2xl rounded-xs overflow-hidden"
          >
            {/* Left Image Side */}
            <div className="md:w-1/2 relative h-72 sm:h-80 md:h-auto min-h-[320px] md:min-h-[560px]">
              <img 
                src={image27} 
                alt="Family in traditional wear" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Right Form Side */}
            <div className="md:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center relative bg-white">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-brand-text/70 hover:text-black focus:outline-none transition-colors"
                aria-label="Close newsletter popup"
              >
                <X strokeWidth={1} className="w-8 h-8 md:w-9 md:h-9" />
              </button>
              
              <div className="font-satoshi text-xs tracking-[0.25em] uppercase text-[#9a7b4f] mb-3 font-medium">
                STAY CONNECTED
              </div>

              {state.succeeded ? (
                <>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-[1.15] mb-6 mt-2">
                    Thank you for<br/>joining us.
                  </h2>
                  <p className="font-satoshi text-sm md:text-base text-brand-text/70 leading-relaxed">
                    You're on the list. We'll write to you when new weaves land.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-[1.15] mb-8 mt-2">
                    Join our community to get<br/>all the upcoming updates.
                  </h2>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Labels the submission in the Formspree inbox. */}
                    <input type="hidden" name="_subject" value="New newsletter signup — SSK Handlooms" />

                    {/* Honeypot: bots fill this, humans never see it. Formspree
                        silently discards any submission that has it set. */}
                    <input
                      type="text"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="hidden"
                    />

                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                    <input
                      id="newsletter-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="your@gmail.com"
                      required
                      className="w-full border border-brand-gray/50 px-5 py-3.5 text-sm md:text-base focus:outline-none focus:border-brand-text placeholder-gray-400 rounded-xs transition-all duration-300 font-satoshi"
                    />
                    <ValidationError
                      field="email"
                      prefix="Email"
                      errors={state.errors}
                      className="font-satoshi text-sm text-red-700"
                    />

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-brand-dark hover:bg-brand-dark/90 text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed py-4 text-sm tracking-[0.2em] uppercase font-medium rounded-xs shadow-sm font-satoshi"
                    >
                      {state.submitting ? "Submitting…" : "Submit"}
                    </button>

                    {/* Form-level errors (network failure, rate limiting, etc.) */}
                    <ValidationError
                      errors={state.errors}
                      className="font-satoshi text-sm text-red-700"
                    />
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
