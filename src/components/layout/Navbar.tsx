import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { Card } from "../ui/Card"
import kasavuImg from "../../assets/Kasavu.webp"
import logoImg from "../../assets/logo.webp"

export const Navbar: React.FC = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

  // Demo images for mega menu
  const newArrivalsImg = "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop"

  return (
    <nav className="absolute top-0 inset-x-0 z-40 flex items-center justify-between px-6 md:px-16 lg:px-24 py-6 md:py-8 text-white">
      {/* Left Side: Logo + Nav Links */}
      <div className="flex items-center gap-10 lg:gap-16">
        {/* Logo Crest */}
        <Link to="/" className="flex flex-col items-center group select-none">
          <img src={logoImg} alt="SSK Handlooms Logo" className="w-[123px] h-[66px] object-contain" />
          <span className="text-[12px] tracking-[4px] font-normal uppercase text-[#F9EFDE] mt-1 font-sans">
            Handlooms
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-[40px] text-[14px] tracking-[4px] font-normal uppercase text-[#F7EBD7] font-sans">
          <a href="#our-story" className="hover:text-white transition-colors">Our Story</a>
          <div 
            className="relative flex items-center"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <Link to="/collections" className="flex items-center gap-3 hover:text-white transition-colors py-2">
              <span>Collections</span> 
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.70833 8.70833V2.375H10.2917V8.70833H16.625V10.2917H10.2917V16.625H8.70833V10.2917H2.375V8.70833H8.70833Z" fill="#F7EBD7"/>
              </svg>
            </Link>
            
            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {isMegaMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 left-0 bg-white text-brand-text shadow-2xl flex w-[580px] p-8 space-x-8 rounded-sm tracking-normal z-50 normal-case"
                >
                  <div className="flex flex-col space-y-5 text-base font-serif min-w-[140px] text-[#2c2214]">
                    <Link to="/collections" className="hover:text-brand-gold transition-colors font-medium">All Collections</Link>
                    <Link to="/collections?category=women" className="hover:text-brand-gold transition-colors">Women</Link>
                    <Link to="/collections?category=men" className="hover:text-brand-gold transition-colors">Men</Link>
                    <Link to="/collections?category=kids" className="hover:text-brand-gold transition-colors">Kids</Link>
                    <Link to="/collections?category=family" className="hover:text-brand-gold transition-colors">Family Set</Link>
                  </div>
                  
                  <div className="flex space-x-4 flex-1">
                    <Card 
                      imageSrc={kasavuImg} 
                      subtitle="Best Seller"
                      title="Kasavu Sarees"
                      alignText="left" 
                      bordered 
                      className="flex-1"
                    />
                    <Card 
                      imageSrc={newArrivalsImg} 
                      subtitle="New Collection"
                      title="New Arrivals" 
                      alignText="left"
                      bordered 
                      className="flex-1"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Right Button */}
      <a
        href="#contact"
        className="flex justify-center items-center w-[177px] h-[42px] border border-[#E3C89B] text-[#E3C89B] text-[16px] font-normal tracking-[1.6px] uppercase hover:bg-[#E3C89B] hover:text-white transition-all duration-300 font-sans"
      >
        Get In Touch
      </a>
    </nav>
  )
}
