import React from "react"
import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react"
import logoImg from "../../assets/logo.png"

export const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col items-center">
      {/* Main Footer Content */}
      <div className="w-full bg-[#231a0e] text-[#d4cdbd] pt-8 md:pt-10 pb-4 px-6 md:px-16 lg:px-24 relative overflow-hidden flex flex-col items-center">
        
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 z-10 relative mb-4">
          
          {/* Column 1: Logo & Motto */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex flex-col items-center mb-1">
              <img src={logoImg} alt="SSK Handlooms Logo" className="h-12 md:h-14 w-auto object-contain mb-1" />
              <span className="text-[9px] tracking-[0.3em] font-serif uppercase text-[#d4cdbd]">Handlooms</span>
            </Link>

            {/* Delicate Gold Diamond Separator */}
            <div className="flex items-center gap-2 my-2.5">
              <div className="w-10 h-[1px] bg-[#5e4b2d]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#9a7b4f]" />
              <div className="w-10 h-[1px] bg-[#5e4b2d]" />
            </div>

            <p className="font-serif text-base md:text-lg text-white font-normal leading-tight">
              Tradition Woven Into<br/>
              Every <span className="italic font-light">Celebration.</span>
            </p>
          </div>

          {/* Column 2: Shop Navigation Links with Arrow ↗ */}
          <div className="flex flex-col items-start">
            <div className="bg-[#382813] text-[#dcae5b] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md mb-3 border border-[#5e4b2d]/50">
              SHOP
            </div>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm font-light text-[#d4cdbd] w-full">
              <li>
                <Link to="/collections?category=women" className="hover:text-white transition-colors flex items-center justify-between max-w-[170px]">
                  <span>Women</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9a7b4f]" />
                </Link>
              </li>
              <li>
                <Link to="/collections?category=men" className="hover:text-white transition-colors flex items-center justify-between max-w-[170px]">
                  <span>Men</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9a7b4f]" />
                </Link>
              </li>
              <li>
                <Link to="/collections?category=kids" className="hover:text-white transition-colors flex items-center justify-between max-w-[170px]">
                  <span>Kids</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9a7b4f]" />
                </Link>
              </li>
              <li>
                <Link to="/collections?category=wedding" className="hover:text-white transition-colors flex items-center justify-between max-w-[170px]">
                  <span>Wedding Wear</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9a7b4f]" />
                </Link>
              </li>
              <li>
                <Link to="/collections?category=festive" className="hover:text-white transition-colors flex items-center justify-between max-w-[170px]">
                  <span>Festive Collections</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9a7b4f]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details & Social Icons */}
          <div className="flex flex-col items-start">
            <div className="bg-[#382813] text-[#dcae5b] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md mb-3 border border-[#5e4b2d]/50">
              CONTACT
            </div>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm font-light text-[#d4cdbd] mb-3.5">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#9a7b4f] shrink-0" />
                <a href="mailto:hello@sskhandlooms.com" className="hover:text-white transition-colors">hello@sskhandlooms.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#9a7b4f] shrink-0" />
                <a href="tel:+919999999999" className="hover:text-white transition-colors">+91 99999 99999</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#9a7b4f] shrink-0 mt-0.5" />
                <span className="leading-relaxed">Coimbatore, Tamil Nadu,<br/>India</span>
              </li>
            </ul>

            {/* Social Media Circle Buttons Row */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-[#7a5921] hover:bg-[#a67d36] text-[#231a0e] flex items-center justify-center transition-colors shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-[#7a5921] hover:bg-[#a67d36] text-[#231a0e] flex items-center justify-center transition-colors shadow-sm"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-full bg-[#7a5921] hover:bg-[#a67d36] text-[#231a0e] flex items-center justify-center transition-colors shadow-sm"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Giant Luxury Watermark Text across background */}
        <div className="w-full text-center mt-1 -mb-2 md:-mb-4 pointer-events-none select-none z-0">
          <div className="text-[9vw] md:text-[8vw] font-serif font-light text-white/[0.04] leading-none tracking-tighter">
            HANDLOOMS
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full max-w-7xl mx-auto pt-3 border-t border-white/5 text-center text-[11px] md:text-xs text-[#d4cdbd]/60 font-light tracking-wide z-10 relative">
          All rights reserved © 2026 Copyright SSK Handlooms
        </div>
      </div>
    </footer>
  )
}
