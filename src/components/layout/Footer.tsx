import React from "react"
import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react"
import logoImg from "../../assets/logo.webp"
import watermarkImg from "../../assets/footer-watermark.png"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const footerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: "top 80%", // Enters when 20% visible
          toggleActions: "play none none none",
        }
      });

      // Target elements
      const logo = footer.querySelector(".footer-logo");
      const brandText = footer.querySelector(".footer-brand-text");
      const divider1 = footer.querySelector(".footer-divider-logo");
      const motto = footer.querySelector(".footer-motto");
      const shopCol = footer.querySelector(".footer-shop-col");
      const contactCol = footer.querySelector(".footer-contact-col");
      const socialIcons = footer.querySelector(".footer-social-icons");
      const watermark = footer.querySelector(".footer-watermark");
      const divider2 = footer.querySelector(".footer-divider-bottom");
      const copyright = footer.querySelector(".footer-copyright");

      // Initial states
      gsap.set([logo, brandText, divider1, motto, shopCol, contactCol, socialIcons, divider2, copyright], {
        opacity: 0,
        y: 30
      });
      gsap.set(watermark, { opacity: 0 });

      // Staggered timeline
      tl.to(logo, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .to(brandText, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.45")
        .to(divider1, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.45")
        .to(motto, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.45")
        .to(shopCol, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.45")
        .to(contactCol, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.45")
        .to(socialIcons, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.45")
        .to(watermark, { opacity: 0.08, duration: 1.5, ease: "power2.out" }, "-=0.8") // fade only
        .to(divider2, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=1.2")
        .to(copyright, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.45");
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="w-full bg-[#291A00] relative mt-10 overflow-hidden flex justify-center py-16 xl:py-0 h-auto xl:h-[530px]">
      
      {/* Figma Frame 54 Container */}
      <div className="relative w-full max-w-[1200px] h-auto xl:h-[530px] shrink-0 px-6 xl:px-10 flex flex-col xl:block box-border">
        
        {/* Glow / Blur Effect (Ambient Gold/Brown Center Glow) */}
        <div 
          className="absolute rounded-full bg-[#735C00] opacity-20 pointer-events-none" 
          style={{ width: '1000px', height: '205px', left: '50%', transform: 'translateX(-50%)', top: '320px', filter: 'blur(100px)' }} 
        />

        {/* Left Column (Logo, Divider, Motto) */}
        <div className="relative xl:absolute flex flex-col items-center xl:items-start z-10 w-full xl:w-[270px] xl:left-[40px] xl:top-[50px] footer-left-col">
          {/* Logo Block */}
          <div className="flex flex-col items-center xl:items-start gap-[4px] p-0 w-[170px] h-[116px] footer-logo-block">
            <img src={logoImg} alt="SSK Handlooms" className="w-[170px] h-[91px] object-contain shrink-0 footer-logo" loading="lazy" decoding="async" />
            <span className="w-[170px] h-[21px] font-sans font-normal text-[12px] leading-[150%] flex items-center justify-center text-center xl:justify-start xl:text-left tracking-[4.8px] uppercase text-[#E1C28E] shrink-0 footer-brand-text">
              Handlooms
            </span>
          </div>

          {/* Horizontal Divider (Logo) */}
          <div className="hidden xl:block relative footer-divider-logo mt-[16px]" style={{ height: '1px', width: '226px', background: 'linear-gradient(90deg, rgba(233, 195, 73, 0) 0%, #E9C349 50%, rgba(233, 195, 73, 0) 100%)' }}>
            {/* Background / Icon */}
            <div className="absolute flex flex-col justify-center items-center px-[10px]" style={{ width: '29.97px', height: '15px', left: 'calc(50% - 29.97px/2)', top: '-7px', background: '#291A00' }}>
              <div style={{ width: '5.26px', height: '5.84px', background: '#735C00', transform: 'rotate(45deg)' }} />
            </div>
          </div>

          {/* Motto (Tradition Woven Into Every Celebration.) */}
          <div className="relative z-10 font-medium text-[20px] leading-[130%] text-[#FFFFFF] w-full xl:w-[270px] mt-6 xl:mt-[24px] text-center xl:text-left footer-motto" style={{ fontFamily: "'Playfair Display', serif" }}>
            Tradition Woven Into<br />
            Every Celebration.
          </div>
        </div>

        {/* Frame 77 (Shop & Contact) */}
        <div className="relative xl:absolute flex flex-col md:flex-row justify-center items-center xl:items-start gap-12 md:gap-[90px] p-0 z-10 w-full xl:w-[544px] xl:left-[616px] xl:top-[50px] mb-12 xl:mb-0">
          
          {/* Frame 62 (Shop) */}
          <div className="flex flex-col justify-center items-center xl:items-start gap-[28px] shrink-0 w-full md:w-[194px] footer-shop-col">
            {/* Frame 52 (Badge) */}
            <div className="flex flex-row justify-center items-center px-[8px] py-[2px] gap-[10px] bg-[#3D2600] rounded-[6px] shrink-0" style={{ width: '59px', height: '28px' }}>
              <span className="font-satoshi font-normal text-[13px] leading-[150%] flex items-center text-center text-[#A38300] shrink-0" style={{ height: '24px' }}>SHOP</span>
            </div>

            {/* Frame 61 (Links) */}
            <div className="flex flex-col items-center xl:items-start gap-[16px] shrink-0 w-full" style={{ height: '184px' }}>
              
              <Link to="/collections?category=women" className="relative group flex flex-row justify-center items-center gap-[8px] shrink-0" style={{ height: '24px' }}>
                <span className="font-satoshi font-normal text-[14px] leading-[150%] flex items-center text-center text-[#EEEEEE] group-hover:text-white transition-colors" style={{ height: '24px' }}>Women</span>
                <ArrowUpRight className="text-[#EEEEEE] group-hover:text-white transition-colors" style={{ width: '14px', height: '14px' }} />
                <span className="absolute bottom-[-1px] left-0 w-[48px] h-[1px] bg-[#E3C89B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
              
              <Link to="/collections?category=men" className="relative group flex flex-row justify-center items-center gap-[8px] shrink-0" style={{ height: '24px' }}>
                <span className="font-satoshi font-normal text-[14px] leading-[150%] flex items-center text-center text-[#EEEEEE] group-hover:text-white transition-colors" style={{ height: '24px' }}>Men</span>
                <ArrowUpRight className="text-[#EEEEEE] group-hover:text-white transition-colors" style={{ width: '14px', height: '14px' }} />
                <span className="absolute bottom-[-1px] left-0 w-[32px] h-[1px] bg-[#E3C89B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>

              <Link to="/collections?category=kids" className="relative group flex flex-row justify-center items-center gap-[8px] shrink-0" style={{ height: '24px' }}>
                <span className="font-satoshi font-normal text-[14px] leading-[150%] flex items-center text-center text-[#EEEEEE] group-hover:text-white transition-colors" style={{ height: '24px' }}>Kids</span>
                <ArrowUpRight className="text-[#EEEEEE] group-hover:text-white transition-colors" style={{ width: '14px', height: '14px' }} />
                <span className="absolute bottom-[-1px] left-0 w-[32px] h-[1px] bg-[#E3C89B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>

              <Link to="/collections?category=wedding" className="relative group flex flex-row justify-center items-center gap-[8px] shrink-0" style={{ height: '24px' }}>
                <span className="font-satoshi font-normal text-[14px] leading-[150%] flex items-center text-center text-[#EEEEEE] group-hover:text-white transition-colors" style={{ height: '24px' }}>Wedding Wear</span>
                <ArrowUpRight className="text-[#EEEEEE] group-hover:text-white transition-colors" style={{ width: '14px', height: '14px' }} />
                <span className="absolute bottom-[-1px] left-0 w-[94px] h-[1px] bg-[#E3C89B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>

              <Link to="/collections?category=festive" className="relative group flex flex-row justify-center items-center gap-[8px] shrink-0" style={{ height: '24px' }}>
                <span className="font-satoshi font-normal text-[14px] leading-[150%] flex items-center text-center text-[#EEEEEE] group-hover:text-white transition-colors" style={{ height: '24px' }}>Festive Collections</span>
                <ArrowUpRight className="text-[#EEEEEE] group-hover:text-white transition-colors" style={{ width: '14px', height: '14px' }} />
                <span className="absolute bottom-[-1px] left-0 w-[124px] h-[1px] bg-[#E3C89B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </div>
          </div>

          {/* Frame 76 (Contact) */}
          <div className="flex flex-col items-center xl:items-start gap-[33px] shrink-0 w-full md:w-[260px] footer-contact-col">
            {/* Frame 63 */}
            <div className="flex flex-col items-center xl:items-start gap-[28px] w-full shrink-0" style={{ height: '184px' }}>
              {/* Badge */}
              <div className="flex flex-row justify-center items-center px-[8px] py-[2px] gap-[10px] bg-[#3D2600] rounded-[6px] shrink-0" style={{ width: '89px', height: '28px' }}>
                <span className="font-satoshi font-normal text-[13px] leading-[150%] flex items-center text-center text-[#A38300] shrink-0" style={{ height: '24px' }}>CONTACT</span>
              </div>

              {/* Links */}
              <div className="flex flex-col items-center xl:items-start gap-[16px] shrink-0 w-full" style={{ height: '128px' }}>
                <a href="mailto:hello@sskhandlooms.com" className="relative group flex flex-row justify-center items-center gap-[8px] shrink-0" style={{ height: '24px' }}>
                  <Mail className="text-[#735C00] group-hover:text-[#E1C28E] transition-colors" style={{ width: '18px', height: '18px' }} />
                  <span className="font-satoshi font-normal text-[14px] leading-[150%] flex items-center text-center text-[#EEEEEE] group-hover:text-white transition-colors" style={{ height: '24px' }}>hello@sskhandlooms.com</span>
                  <span className="absolute bottom-[-1px] left-[26px] w-[146px] h-[1px] bg-[#E3C89B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
                
                <a href="tel:+919999999999" className="relative group flex flex-row justify-center items-center gap-[8px] shrink-0" style={{ height: '24px' }}>
                  <Phone className="text-[#735C00] group-hover:text-[#E1C28E] transition-colors" style={{ width: '18px', height: '18px' }} />
                  <span className="font-satoshi font-normal text-[14px] leading-[150%] flex items-center text-center text-[#EEEEEE] group-hover:text-white transition-colors" style={{ height: '24px' }}>+91 99999 99999</span>
                  <span className="absolute bottom-[-1px] left-[26px] w-[106px] h-[1px] bg-[#E3C89B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>

                <div className="flex flex-row justify-center items-start gap-[8px] shrink-0" style={{ height: '48px' }}>
                  <MapPin className="text-[#735C00] mt-1 shrink-0" style={{ width: '18px', height: '18px' }} />
                  <span className="font-satoshi font-normal text-[14px] leading-[150%] flex items-center text-center xl:text-left text-[#EEEEEE]" style={{ width: '174px' }}>Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Social Icons (Frame 75) */}
            <div className="flex flex-row items-center justify-center xl:justify-start gap-[32px] shrink-0 footer-social-icons" style={{ width: '160px', height: '32px' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="flex justify-center items-center group transition-colors duration-300" style={{ width: '32px', height: '32px' }}>
                <Instagram className="text-[#735C00] group-hover:text-[#E1C28E] transition-colors duration-300" style={{ width: '32px', height: '32px' }} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="flex justify-center items-center group transition-colors duration-300" style={{ width: '32px', height: '32px' }}>
                <Facebook className="text-[#735C00] group-hover:text-[#E1C28E] transition-colors duration-300" style={{ width: '32px', height: '32px' }} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="flex justify-center items-center group transition-colors duration-300" style={{ width: '32px', height: '32px' }}>
                <Linkedin className="text-[#735C00] group-hover:text-[#E1C28E] transition-colors duration-300" style={{ width: '32px', height: '32px' }} />
              </a>
            </div>
          </div>
        </div>

        {/* image 32 (Watermark) */}
        <div className="absolute z-0 pointer-events-none footer-watermark opacity-[0.13] top-[520px] xl:top-[270px]" style={{ width: '1500px', height: '200px', left: '50%', transform: 'translateX(-50%)' }}>
          <img src={watermarkImg} alt="HANDLOOMS" className="w-full h-full object-contain shrink-0" loading="lazy" decoding="async" />
        </div>

        {/* Horizontal Divider (Copyright) */}
        <div className="relative xl:absolute z-10 footer-divider-bottom w-full xl:w-[976px] h-[1px] xl:left-[112px] xl:top-[470px] my-8 xl:my-0" style={{ background: 'linear-gradient(90deg, rgba(67, 51, 23, 0) 0%, rgba(67, 51, 23, 0.5) 50%, rgba(67, 51, 23, 0) 100%)', transform: 'matrix(1, 0, 0, -1, 0, 0)' }} />

        {/* Frame 8 (Copyright Text) */}
        <div className="relative xl:absolute flex justify-center items-center z-10 w-full xl:w-[363px] xl:left-[418.5px] xl:top-[490px] footer-copyright">
          <span className="font-satoshi font-light text-[14px] leading-[150%] tracking-[-0.01em] text-[#9E9E9E] text-center w-full block">
            All rights reserved © 2026 Copyright SSK Handlooms
          </span>
        </div>

      </div>
    </footer>
  )
}
