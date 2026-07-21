import React from "react"
import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react"
import logoImg from "../../assets/logo.webp"
import watermarkImg from "../../assets/footer-watermark.png"

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#291A00] relative mt-10 overflow-hidden flex justify-center" style={{ height: '677px' }}>
      
      {/* Figma Frame 54 Container */}
      <div className="relative w-[1200px] h-[677px] shrink-0">
        
        {/* Glow / Blur Effect (Ellipse 2) */}
        <div 
          className="absolute bg-[#291A00] z-0 pointer-events-none" 
          style={{ width: '2021px', height: '205px', left: '-389px', top: '494px', filter: 'blur(67px)' }} 
        />

        {/* Frame 55 (Logo Block) */}
        <div className="absolute flex flex-col items-center gap-[4px] p-0 z-10" style={{ width: '170px', height: '116px', left: '40px', top: '40px' }}>
          <img src={logoImg} alt="SSK Handlooms" className="w-[170px] h-[91px] object-contain shrink-0" loading="lazy" decoding="async" />
          <span className="w-[170px] h-[21px] font-sans font-normal text-[14px] leading-[150%] flex items-center justify-center text-center tracking-[4.8px] uppercase text-[#E1C28E] shrink-0">
            Handlooms
          </span>
        </div>

        {/* Horizontal Divider (Logo) */}
        <div className="absolute z-10" style={{ height: '1px', left: '40px', width: '226px', top: '172px', background: 'linear-gradient(90deg, rgba(233, 195, 73, 0) 0%, #E9C349 50%, rgba(233, 195, 73, 0) 100%)' }}>
          {/* Background / Icon */}
          <div className="absolute flex flex-col justify-center items-center px-[10px]" style={{ width: '29.97px', height: '15px', left: 'calc(50% - 29.97px/2)', top: '-7px', background: '#291A00' }}>
            <div style={{ width: '5.26px', height: '5.84px', background: '#735C00', transform: 'rotate(45deg)' }} />
          </div>
        </div>

        {/* Motto (Tradition Woven Into Every Celebration.) */}
        <div className="absolute z-10 font-medium text-[24px] leading-[130%] text-[#FFFFFF]" style={{ width: '270px', height: '62px', left: '40px', top: '197px', fontFamily: "'Playfair Display', serif" }}>
          Tradition Woven Into<br />
          <span className="italic">Every Celebration.</span>
        </div>

        {/* Frame 77 (Shop & Contact) */}
        <div className="absolute flex flex-row justify-center items-start gap-[90px] p-0 z-10" style={{ width: '544px', height: '249px', left: '616px', top: '50px' }}>
          
          {/* Frame 62 (Shop) */}
          <div className="flex flex-col justify-center items-start gap-[28px] shrink-0" style={{ width: '194px', height: '240px' }}>
            {/* Frame 52 (Badge) */}
            <div className="flex flex-row justify-center items-center px-[8px] py-[2px] gap-[10px] bg-[#3D2600] rounded-[6px] shrink-0" style={{ width: '59px', height: '28px' }}>
              <span className="font-sans font-normal text-[16px] leading-[150%] flex items-center text-center text-[#A38300] shrink-0" style={{ height: '24px' }}>SHOP</span>
            </div>

            {/* Frame 61 (Links) */}
            <div className="flex flex-col items-start gap-[16px] shrink-0" style={{ width: '194px', height: '184px' }}>
              
              <Link to="/collections?category=women" className="flex flex-row justify-center items-center gap-[8px] shrink-0 group" style={{ height: '24px' }}>
                <span className="font-sans font-normal text-[16px] leading-[150%] flex items-center text-center text-[#EEEEEE] group-hover:text-white transition-colors" style={{ height: '24px' }}>Women</span>
                <ArrowUpRight className="text-white" style={{ width: '16px', height: '16px' }} />
              </Link>
              
              <Link to="/collections?category=men" className="flex flex-row justify-center items-center gap-[8px] shrink-0 group" style={{ height: '24px' }}>
                <span className="font-sans font-normal text-[16px] leading-[150%] flex items-center text-center text-[#EEEEEE] group-hover:text-white transition-colors" style={{ height: '24px' }}>Men</span>
                <ArrowUpRight className="text-white" style={{ width: '16px', height: '16px' }} />
              </Link>

              <Link to="/collections?category=kids" className="flex flex-row justify-center items-center gap-[8px] shrink-0 group" style={{ height: '24px' }}>
                <span className="font-sans font-normal text-[16px] leading-[150%] flex items-center text-center text-[#EEEEEE] group-hover:text-white transition-colors" style={{ height: '24px' }}>Kids</span>
                <ArrowUpRight className="text-white" style={{ width: '16px', height: '16px' }} />
              </Link>

              <Link to="/collections?category=wedding" className="flex flex-row justify-center items-center gap-[8px] shrink-0 group" style={{ height: '24px' }}>
                <span className="font-sans font-normal text-[16px] leading-[150%] flex items-center text-center text-[#EEEEEE] group-hover:text-white transition-colors" style={{ height: '24px' }}>Wedding Wear</span>
                <ArrowUpRight className="text-white" style={{ width: '16px', height: '16px' }} />
              </Link>

              <Link to="/collections?category=festive" className="flex flex-row items-end gap-[8px] shrink-0 group" style={{ height: '24px' }}>
                <span className="font-sans font-normal text-[16px] leading-[150%] flex items-center text-[#EEEEEE] group-hover:text-white transition-colors" style={{ height: '24px' }}>Festive Collections</span>
                <ArrowUpRight className="text-white" style={{ width: '16px', height: '16px' }} />
              </Link>
            </div>
          </div>

          {/* Frame 76 (Contact) */}
          <div className="flex flex-col items-start gap-[33px] shrink-0" style={{ width: '260px', height: '249px' }}>
            {/* Frame 63 */}
            <div className="flex flex-col items-start gap-[28px] w-full shrink-0" style={{ height: '184px' }}>
              {/* Badge */}
              <div className="flex flex-row justify-center items-center px-[8px] py-[2px] gap-[10px] bg-[#3D2600] rounded-[6px] shrink-0" style={{ width: '89px', height: '28px' }}>
                <span className="font-sans font-normal text-[16px] leading-[150%] flex items-center text-center text-[#A38300] shrink-0" style={{ height: '24px' }}>CONTACT</span>
              </div>

              {/* Links */}
              <div className="flex flex-col items-start gap-[16px] shrink-0" style={{ width: '214px', height: '128px' }}>
                <a href="mailto:hello@sskhandlooms.com" className="flex flex-row justify-center items-center gap-[8px] shrink-0 group" style={{ height: '24px' }}>
                  <Mail className="text-[#735C00]" style={{ width: '20px', height: '20px' }} />
                  <span className="font-sans font-normal text-[16px] leading-[150%] flex items-center text-center text-[#EEEEEE] group-hover:text-white transition-colors" style={{ height: '24px' }}>hello@sskhandlooms.com</span>
                </a>
                
                <a href="tel:+919999999999" className="flex flex-row justify-center items-center gap-[8px] shrink-0 group" style={{ height: '24px' }}>
                  <Phone className="text-[#735C00]" style={{ width: '20px', height: '20px' }} />
                  <span className="font-sans font-normal text-[16px] leading-[150%] flex items-center text-center text-[#EEEEEE] group-hover:text-white transition-colors" style={{ height: '24px' }}>+91 99999 99999</span>
                </a>

                <div className="flex flex-row justify-center items-start gap-[8px] shrink-0" style={{ height: '48px' }}>
                  <MapPin className="text-[#735C00] mt-1" style={{ width: '20px', height: '20px' }} />
                  <span className="font-sans font-normal text-[16px] leading-[150%] flex items-center text-[#EEEEEE]" style={{ width: '174px' }}>Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Social Icons (Frame 75) */}
            <div className="flex flex-row items-center gap-[32px] shrink-0" style={{ width: '160px', height: '32px' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center hover:opacity-80 transition-opacity" style={{ width: '32px', height: '32px' }}>
                <Instagram className="text-[#735C00]" style={{ width: '26px', height: '26px' }} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center hover:opacity-80 transition-opacity" style={{ width: '32px', height: '32px' }}>
                <Facebook className="text-[#735C00]" style={{ width: '26px', height: '26px' }} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center hover:opacity-80 transition-opacity" style={{ width: '32px', height: '32px' }}>
                <Linkedin className="text-[#735C00]" style={{ width: '26px', height: '26px' }} />
              </a>
            </div>
          </div>
        </div>

        {/* image 32 (Watermark) */}
        <div className="absolute z-10 pointer-events-none" style={{ width: '1161px', height: '164px', left: '20px', top: '440px' }}>
          <img src={watermarkImg} alt="HANDLOOMS" className="w-full h-full object-contain shrink-0" loading="lazy" decoding="async" />
        </div>

        {/* Horizontal Divider (Copyright) */}
        <div className="absolute z-10" style={{ width: '976px', height: '1px', left: 'calc(50% - 976px/2)', top: '612px', background: 'linear-gradient(90deg, rgba(67, 51, 23, 0) 0%, rgba(67, 51, 23, 0.5) 50%, rgba(67, 51, 23, 0) 100%)', transform: 'matrix(1, 0, 0, -1, 0, 0)' }} />

        {/* Frame 8 (Copyright Text) */}
        <div className="absolute flex flex-row items-center gap-[4px] p-0 z-10" style={{ width: '363px', height: '24px', left: 'calc(50% - 363px/2)', top: '633px' }}>
          <span className="font-sans font-light text-[16px] leading-[150%] tracking-[-0.01em] text-[#9E9E9E] shrink-0" style={{ width: '119px', height: '24px' }}>
            All rights reserved
          </span>
          <div className="flex justify-center items-center shrink-0" style={{ width: '16px', height: '16px' }}>
             <span className="text-[#9E9E9E] text-[16px] leading-none">©</span>
          </div>
          <span className="font-sans font-light text-[16px] leading-[150%] tracking-[-0.01em] text-[#9E9E9E] shrink-0" style={{ width: '220px', height: '24px' }}>
            2026 Copyright SSK Handlooms
          </span>
        </div>

      </div>
    </footer>
  )
}
