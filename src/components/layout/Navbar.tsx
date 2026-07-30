import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { Card } from "../ui/Card"
import kasavuImg from "../../assets/Kasavu.webp"
import logoImg from "../../assets/logo.webp"

export const Navbar: React.FC = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(false)

  // Demo images for mega menu
  const newArrivalsImg = "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop"

  return (
    <nav className="box-border absolute w-full h-[80px] lg:h-[108px] left-0 top-0 z-40 flex items-center justify-between px-6 lg:px-10">
      {/* Logo Link (Figma Frame 80) */}
      <Link 
        to="/" 
        className="group select-none flex flex-col items-center p-0 gap-[2px] lg:gap-[4px] no-underline lg:absolute lg:w-[123px] lg:h-[88px] lg:left-[40px] lg:top-[20px]"
      >
        <img 
          src={logoImg} 
          alt="SSK Handlooms Logo" 
          className="w-[90px] h-[48px] lg:w-[123px] lg:h-[66px] flex-none object-contain"
        />
        <span 
          className="font-satoshi font-normal text-[10px] lg:text-[12px] leading-[150%] flex items-center justify-center text-center tracking-[3px] lg:tracking-[4px] uppercase text-[#F9EFDE] flex-none"
        >
          Handlooms
        </span>
      </Link>

      {/* Hamburger Icon for Mobile/Tablet */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden text-[#F7EBD7] hover:text-[#E3C89B] transition-colors focus:outline-none p-2 cursor-pointer"
        aria-label="Toggle menu"
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Desktop Menu - Frame 79 */}
      <div className="hidden lg:flex flex-row items-center p-0 gap-[40px] absolute w-[312px] h-[24px] left-[228px] top-[36px]">
        {/* OUR Story */}
        <a 
          href="#our-story"
          className="w-[108px] h-[24px] font-satoshi font-normal text-[14px] leading-[24px] flex items-center tracking-[4px] uppercase text-[#F7EBD7] flex-none order-0 grow-0 no-underline whitespace-nowrap"
        >
          Our Story
        </a>

        {/* Frame 83 */}
        <div 
          className="flex flex-row items-center p-0 gap-[12px] w-[164px] h-[24px] flex-none order-1 grow-0 relative"
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
          <Link 
            to="/collections" 
            className="w-[133px] h-[24px] font-satoshi font-normal text-[14px] leading-[24px] flex items-center tracking-[4px] uppercase text-[#F7EBD7] flex-none order-0 grow-0 no-underline whitespace-nowrap"
          >
            Collections
          </Link>

          {/* Plus icon wrapper */}
          <div className="w-[19px] h-[19px] flex-none order-1 grow-0 relative">
            <svg 
              className="absolute left-[12.5%] right-[12.5%] top-[12.5%] bottom-[12.5%] w-[14.25px] h-[14.25px]"
              viewBox="0 0 19 19" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.70833 8.70833V2.375H10.2917V8.70833H16.625V10.2917H10.2917V16.625H8.70833V10.2917H2.375V8.70833H8.70833Z" fill="#F7EBD7"/>
            </svg>
          </div>

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

      {/* Desktop Button */}
      <a
        href="#contact"
        className="hidden lg:flex group box-border flex-row justify-center items-center px-[24px] py-[8px] absolute w-[177px] h-[42px] right-[40px] top-[27px] border border-[#E3C89B] hover:bg-[#E3C89B] transition-all duration-300 no-underline cursor-pointer"
      >
        <span
          className="w-[127px] h-[24px] font-satoshi font-normal text-[16px] leading-[24px] flex items-center justify-center tracking-[1.6px] uppercase text-[#E3C89B] group-hover:text-[#2c2214] transition-all duration-300 whitespace-nowrap flex-none order-0 grow-0"
        >
          Get In Touch
        </span>
      </a>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-[#2c2214]/98 z-50 flex flex-col p-6 overflow-y-auto"
          >
            {/* Header row in mobile menu */}
            <div className="flex items-center justify-between w-full mb-10">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="group select-none flex flex-col items-start gap-[2px] no-underline"
              >
                <img 
                  src={logoImg} 
                  alt="SSK Handlooms Logo" 
                  className="w-[90px] h-[48px] object-contain"
                />
                <span 
                  className="font-satoshi font-normal text-[10px] tracking-[3px] uppercase text-[#F9EFDE]"
                >
                  Handlooms
                </span>
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#F7EBD7] hover:text-[#E3C89B] transition-colors focus:outline-none p-2 cursor-pointer"
                aria-label="Close menu"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-6 flex-1 justify-center py-6">
              <a 
                href="#our-story"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-satoshi font-normal text-[20px] tracking-[4px] uppercase text-[#F7EBD7] no-underline py-2 border-b border-[#F7EBD7]/10"
              >
                Our Story
              </a>

              <div className="flex flex-col">
                <button
                  onClick={() => setIsMobileCollectionsOpen(!isMobileCollectionsOpen)}
                  className="w-full flex items-center justify-between font-satoshi font-normal text-[20px] tracking-[4px] uppercase text-[#F7EBD7] py-2 border-b border-[#F7EBD7]/10 text-left focus:outline-none cursor-pointer"
                >
                  <span>Collections</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${isMobileCollectionsOpen ? 'rotate-45' : ''}`}
                    viewBox="0 0 19 19" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.70833 8.70833V2.375H10.2917V8.70833H16.625V10.2917H10.2917V16.625H8.70833V10.2917H2.375V8.70833H8.70833Z" fill="#F7EBD7"/>
                  </svg>
                </button>

                <AnimatePresence>
                  {isMobileCollectionsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden flex flex-col pl-4 mt-3 space-y-4 border-l border-[#E3C89B]/30"
                    >
                      <Link 
                        to="/collections" 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-satoshi text-base tracking-[2px] uppercase text-[#F7EBD7]/80 hover:text-white"
                      >
                        All Collections
                      </Link>
                      <Link 
                        to="/collections?category=women" 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-satoshi text-base tracking-[2px] uppercase text-[#F7EBD7]/80 hover:text-white"
                      >
                        Women
                      </Link>
                      <Link 
                        to="/collections?category=men" 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-satoshi text-base tracking-[2px] uppercase text-[#F7EBD7]/80 hover:text-white"
                      >
                        Men
                      </Link>
                      <Link 
                        to="/collections?category=kids" 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-satoshi text-base tracking-[2px] uppercase text-[#F7EBD7]/80 hover:text-white"
                      >
                        Kids
                      </Link>
                      <Link 
                        to="/collections?category=family" 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-satoshi text-base tracking-[2px] uppercase text-[#F7EBD7]/80 hover:text-white"
                      >
                        Family Set
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Get in Touch Button inside mobile drawer */}
            <div className="mt-auto py-6">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="box-border flex justify-center items-center w-full h-[50px] border border-[#E3C89B] bg-transparent text-[#E3C89B] font-satoshi font-normal text-base tracking-[2px] uppercase hover:bg-[#E3C89B] hover:text-[#2c2214] transition-all duration-300 no-underline cursor-pointer"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
