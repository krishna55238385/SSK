import React, { useEffect, useRef, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ContactSection } from './components/ContactSection'
import { NewsletterPopup } from './components/ui/NewsletterPopup'

// Lazy-loaded route pages: keeps the initial bundle to just what "/" needs,
// instead of shipping the Collections page bundle to every visitor up front.
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const Collections = lazy(() =>
  import('./pages/Collections').then((m) => ({ default: m.Collections }))
)

// Helper for scroll restoration on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

interface PageWrapperProps {
  children: React.ReactNode
}

// Fade/slide-in on route mount, done with gsap instead of framer-motion so the
// whole app only ships one animation library. Note: this replaces
// framer-motion's crossfade (old page fading out while new one fades in) with
// a straightforward fade-in of the new page only — a deliberate trade-off to
// drop the extra ~kB of framer-motion from the bundle.
const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(ref.current, { clearProps: "transform,translate,y" })
        }
      }
    )
  }, [location.pathname])

  return <div ref={ref}>{children}</div>
}

// Shown briefly while a lazy-loaded route chunk downloads. Matches the app
// background so there's no flash of unstyled/blank content.
const PageFallback: React.FC = () => (
  <div className="min-h-screen w-full bg-brand-light" />
)

function AppContent() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-brand-light text-brand-text selection:bg-brand-gold selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/collections" element={<PageWrapper><Collections /></PageWrapper>} />
          </Routes>
        </Suspense>
      </main>
      {/* Outside <Routes> so the navbar's "Get In Touch" (#contact) anchor
          resolves on every route, not just the home page. */}
      <ContactSection />
      <Footer />
      <NewsletterPopup />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
