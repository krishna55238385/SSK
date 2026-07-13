import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export const NewsletterPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup after 3 seconds for demo purposes
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-3xl flex flex-col md:flex-row relative shadow-2xl"
          >
            {/* Left Image Side */}
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1583391733958-d25e0b464dba?q=80&w=1000&auto=format&fit=crop" 
                alt="Family in traditional wear" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Right Form Side */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-brand-text hover:text-black focus:outline-none"
              >
                <X strokeWidth={1} className="w-8 h-8" />
              </button>
              
              <h2 className="font-serif text-3xl md:text-4xl text-brand-text leading-tight mb-8 mt-4">
                Join our community to get<br/>all the upcoming updates.
              </h2>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
                <input 
                  type="email" 
                  placeholder="your@gmail.com" 
                  required
                  className="w-full border border-brand-gray/50 px-4 py-3 text-sm focus:outline-none focus:border-brand-text placeholder-gray-300"
                />
                <button 
                  type="submit"
                  className="w-full bg-[#7a7a7a] hover:bg-gray-600 text-white transition-colors py-4 text-sm tracking-wide uppercase"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
