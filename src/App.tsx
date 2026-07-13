
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { NewsletterPopup } from './components/ui/NewsletterPopup'
import { Home } from './pages/Home'
import { Collections } from './pages/Collections'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col font-sans bg-brand-light text-brand-text selection:bg-brand-gold selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
          </Routes>
        </main>
        <Footer />
        <NewsletterPopup />
      </div>
    </Router>
  )
}

export default App
