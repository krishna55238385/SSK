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
    <nav className="box-border absolute w-full h-[108px] left-0 top-0 z-40">
      {/* Frame 80 */}
      <Link 
        to="/" 
        className="group select-none flex flex-col items-center p-0 gap-[4px] absolute w-[123px] h-[88px] left-[40px] top-[20px] no-underline"
      >
        <img 
          src={logoImg} 
          alt="SSK Handlooms Logo" 
          className="w-[123px] h-[66px] flex-none order-0 self-stretch grow-0 object-contain"
        />
        <span 
          className="w-[123px] h-[18px] font-satoshi font-normal text-[12px] leading-[150%] flex items-center justify-center text-center tracking-[4px] uppercase text-[#F9EFDE] flex-none order-1 self-stretch grow-0"
        >
          Handlooms
        </span>
      </Link>

      {/* Frame 79 */}
      <div className="flex flex-row items-center p-0 gap-[40px] absolute w-[312px] h-[24px] left-[228px] top-[36px]">
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

      {/* Button */}
      <a
        href="#contact"
        className="group box-border flex flex-row justify-center items-center px-[24px] py-[8px] absolute w-[177px] h-[42px] right-[40px] top-[27px] border border-[#E3C89B] hover:bg-[#E3C89B] transition-all duration-300 no-underline cursor-pointer"
      >
        <span
          className="w-[127px] h-[24px] font-satoshi font-normal text-[16px] leading-[24px] flex items-center justify-center tracking-[1.6px] uppercase text-[#E3C89B] group-hover:text-[#2c2214] transition-all duration-300 whitespace-nowrap flex-none order-0 grow-0"
        >
          Get In Touch
        </span>
      </a>
    </nav>
  )
}
