
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { NewsletterPopup } from './components/ui/NewsletterPopup'
import { Home } from './pages/Home'
import { Collections } from './pages/Collections'

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

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

function AppContent() {
  const location = useLocation()
  
  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-brand-light text-brand-text selection:bg-brand-gold selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/collections" element={<PageWrapper><Collections /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
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

