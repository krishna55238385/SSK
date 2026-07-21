import React from "react"
import { motion } from "framer-motion"
import heroUploadedImg from "../assets/image.webp"
import kidsTraditionalImg from "../assets/Kid’s Traditional.webp"
import kasavuImg from "../assets/Kasavu.webp"
import image21 from "../assets/image 21.webp"
import image22Asset from "../assets/image22.webp"
import image23Asset from "../assets/image23.webp"
import image24Asset from "../assets/image24.webp"
import image25Asset from "../assets/image25.webp"
import image26Asset from "../assets/image26.webp"
import image27Asset from "../assets/image27.webp"
import image28Asset from "../assets/image28.webp"
import image29Asset from "../assets/image29.webp"
import image22 from "../assets/Child.webp"
import sareeLogo from "../assets/SareeLogo.webp"
import Image1 from "../assets/image1.webp"
import Image2 from "../assets/image2.webp"
import Image3 from "../assets/image3.webp"
import Image4 from "../assets/image4.webp"
import Image5 from "../assets/image5.webp"
import Image6 from "../assets/image6.webp"
import Image7 from "../assets/image7.webp"
import Image8 from "../assets/image8.webp"
import Image9 from "../assets/image9.webp"
import Image10 from "../assets/image10.webp"
import Image11 from "../assets/image11.webp"
import Image12 from "../assets/image12.webp"
import Image13 from "../assets/image13.webp"
import Image14 from "../assets/image14.webp"
import Image15 from "../assets/image15.webp"
import Image16 from "../assets/image16.webp"
import Image17 from "../assets/image17.webp"
import Image18 from "../assets/image18.webp"
import Image19 from "../assets/image19.webp"
import Image20 from "../assets/image20.webp"

const CircularImageReveal = React.lazy(() => 
  import("../components/CircularImageReveal").then(module => ({ default: module.CircularImageReveal }))
);


export const Home: React.FC = () => {
  const heroImg = heroUploadedImg
  const traditionsImg = image21
  const avatarImg = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"

  const circleImages = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9,
    Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20
  ];

  return (
    <div className="w-full bg-brand-light text-brand-text font-sans">

      <section className="relative w-full h-[85vh] md:h-screen bg-white overflow-hidden">
        <img
          src={heroImg}
          alt="SSK Handlooms Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        {/* Figma: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white max-w-[600px]"
          >
            <div className="text-[14px] tracking-[4.8px] uppercase mb-4 text-white font-sans">
              Established 2008
            </div>
            
            <h1 
              className="text-white mb-6 text-4xl md:text-5xl lg:text-[64px] font-medium leading-[120%]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Where Every Tread Tells A Story
            </h1>
            
            <p className="text-[18px] md:text-[24px] leading-[150%] text-[#EEEEEE] font-sans font-normal max-w-[570px] mb-12">
              Authentic Kerala Handlooms for the Modern Soul. Weaving the golden threads of tradition into the fabric of contemporary lifestyle.
            </p>
            
            <button className="flex justify-center items-center w-[278px] h-[58px] border border-[#E3C89B] text-[#E3C89B] text-[16px] tracking-[1.6px] uppercase hover:bg-[#E3C89B] hover:text-white transition-colors">
              Discover the Weave
            </button>
          </motion.div>
        </div>

        {/* Floating Product Polaroid Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:block absolute bottom-20 right-20 xl:right-32 z-20 cursor-pointer"
        >
          <div className="relative w-[238px] h-[236px]">
            {/* Card 3 (Back-most polaroid) - Frame 14 */}
            <div className="absolute -top-8 left-6 w-[209px] h-[208px] bg-white opacity-90 p-3 shadow-md rotate-[6deg]">
              <div className="w-full h-[130px] overflow-hidden bg-gray-100 mb-2">
                <img src={kasavuImg} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="px-1 text-left">
                <p className="text-[14px] text-[#9E9E9E] font-medium leading-[150%] font-sans">BEST SELLER</p>
                <h4 className="text-[16px] text-[#000000] font-normal leading-[150%]" style={{ fontFamily: "'Playfair Display', serif" }}>Kasavu Sarees</h4>
              </div>
            </div>

            {/* Card 2 (Middle polaroid) - Frame 13 */}
            <div className="absolute -top-4 left-3 w-[221px] h-[220px] bg-white opacity-90 p-3 shadow-lg rotate-[3deg]">
              <div className="w-full h-[142px] overflow-hidden bg-gray-100 mb-2">
                <img src={kasavuImg} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="px-1 text-left">
                <p className="text-[14px] text-[#9E9E9E] font-medium leading-[150%] font-sans">BEST SELLER</p>
                <h4 className="text-[16px] text-[#000000] font-normal leading-[150%]" style={{ fontFamily: "'Playfair Display', serif" }}>Kasavu Sarees</h4>
              </div>
            </div>

            {/* Card 1 (Main front polaroid) - Frame 12 */}
            <motion.div 
              animate={{ 
                rotate: [0, 60, 0],
                x: [0, 180, 0],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "backInOut"
              }}
              className="relative z-10 w-[238px] h-[236px] bg-white p-3 shadow-2xl flex flex-col items-center origin-bottom-left"
            >
              <div className="w-[214px] h-[154px] overflow-hidden bg-gray-100 mb-3">
                <img
                  src={kasavuImg}
                  alt="Kasavu Saree"
                  className="w-full h-full object-cover"
                  loading="lazy" decoding="async"
                />
              </div>
              <div className="w-full px-1 text-left">
                <p className="text-[14px] text-[#9E9E9E] font-medium leading-[150%] font-sans mb-0.5">
                  BEST SELLER
                </p>
                <h4 className="text-[16px] text-[#000000] font-normal leading-[150%]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Kasavu Sarees
                </h4>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. Tribute Section */}
      <section 
        className="relative flex flex-col items-center pt-[40px] pb-[80px] px-4 overflow-hidden w-full"
        style={{ background: 'linear-gradient(360deg, #FFFEFA 0%, #F7F4E4 100%)' }}
      >
        {/* Top Image */}
        <div className="mb-[16px]">
          <img
            src={sareeLogo}
            alt="SSK Handlooms"
            className="w-[136px] h-[116px] object-contain"
            loading="lazy" decoding="async"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-center w-full max-w-[896px] gap-[40px]">
          
          {/* Top Divider */}
          <div className="relative flex justify-center items-center w-full">
            <div 
              className="absolute inset-x-0 h-[1px]" 
              style={{ background: 'linear-gradient(90deg, rgba(233, 195, 73, 0) 0%, #E9C349 50%, rgba(233, 195, 73, 0) 100%)' }}
            />
            <div className="relative flex justify-center items-center w-[30px] h-[15px] bg-[#FDFAE9]">
              <div className="w-[5.5px] h-[5.5px] bg-[#735C00] rotate-45" />
            </div>
          </div>

          {/* Blockquote */}
          <div className="px-[26px] max-w-[810px]">
            <h3 
              className="text-[#462C00] italic font-medium text-[28px] md:text-[44px] leading-[150%] text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              “Every thread tells a story of a thousand years, woven with the gold of our ancestors.”
            </h3>
          </div>

          {/* Text Container */}
          <div className="flex flex-col items-center gap-[24px] max-w-[672px]">
            <h2 
              className="text-[#1C1C13] font-medium text-[24px] md:text-[32px] leading-[40px] text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Soul of Kerala
            </h2>
            <p className="text-[#534654] font-sans font-normal text-[16px] md:text-[20px] leading-[150%] text-center">
              At SSK Handlooms, we believe that heritage shouldn't be a luxury hidden in antique chests. It should be lived. Our direct-to-consumer mission bypasses the labyrinth of middlemen, ensuring that the true value of each weave goes back to the artisan, and the true authenticity of the fabric reaches your doorstep.
            </p>
          </div>

          {/* Bottom Divider */}
          <div className="relative flex justify-center items-center w-full">
            <div 
              className="absolute inset-x-0 h-[1px]" 
              style={{ background: 'linear-gradient(90deg, rgba(233, 195, 73, 0) 0%, #E9C349 50%, rgba(233, 195, 73, 0) 100%)' }}
            />
            <div className="relative flex justify-center items-center w-[30px] h-[15px] bg-[#FDFAE9]">
              <div className="w-[5.5px] h-[5.5px] bg-[#735C00] rotate-45" />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Signature Weaves */}
      <section className="relative flex flex-col items-center pt-[80px] pb-[100px] px-4 bg-[#EDECE3] overflow-hidden w-full">
        <div className="flex flex-col items-center w-full max-w-[1200px] z-10 relative">
          
          {/* Established */}
          <div className="text-[#735C00] font-sans font-normal text-[14px] leading-[150%] tracking-[4.8px] uppercase mb-[20px] text-center mt-[24px]">
            ESTABLISHED 2014
          </div>

          {/* Heading */}
          <h2 
            className="text-[#43252F] font-medium text-[36px] md:text-[54px] leading-[120%] text-center max-w-[758px] mb-[40px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Signature Weaves, Curated <span className="italic font-normal">For Every Generation</span>
          </h2>

          {/* Divider */}
          <div className="relative flex justify-center items-center w-full max-w-[896px] mb-[32px]">
            <div 
              className="absolute inset-x-0 h-[1px]" 
              style={{ background: 'linear-gradient(90deg, rgba(233, 195, 73, 0) 0%, #E9C349 50%, rgba(233, 195, 73, 0) 100%)' }}
            />
            <div className="relative flex justify-center items-center w-[30px] h-[15px] bg-[#FDFAE9]">
              <div className="w-[5.5px] h-[5.5px] bg-[#735C00] rotate-45" />
            </div>
          </div>

          {/* Subtext */}
          <p className="text-[#534654] font-sans font-normal text-[16px] md:text-[20px] leading-[150%] text-center max-w-[596px] mb-[64px]">
            Authentic Kerala handloom collections for men, women and kids. Crafted with tradition, woven with care.
          </p>

          {/* Collections List */}
          <div className="flex flex-col items-center w-full gap-[40px] mb-[80px]">
            
            {/* Women's Card */}
            <div className="w-full max-w-[1000px] h-auto lg:h-[178px] bg-[#FBFBF8] border-[4px] border-[#FFFFFF] rounded-[40px] flex flex-col lg:flex-row items-center justify-between p-6 lg:p-0 lg:px-[32px] shadow-sm relative overflow-visible">
              {/* Left Image container */}
              <div className="w-[235px] h-[116px] bg-[#FFFFFF] rounded-[16px] p-[8px] flex-shrink-0 mb-4 lg:mb-0 shadow-xs">
                <div className="w-[219px] h-[100px] bg-gray-100 rounded-[12px] overflow-hidden relative">
                  <img src={Image6} className="absolute w-full h-full object-cover scale-110 -rotate-3" alt="Women" loading="lazy" decoding="async" />
                </div>
              </div>
              
              {/* Center Text */}
              <div className="flex flex-col items-center flex-1 px-4 text-center z-10">
                <h3 className="text-[#231226] font-medium text-[20px] lg:text-[24px] leading-[120%] mb-[12px]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Women’s Handloom Collections
                </h3>
                <p className="text-[#1A0D1C] font-normal text-[14px] lg:text-[16px] leading-[150%] max-w-[441px] font-sans">
                  Timeless sarees, set mundu, pavada, dhavani sets, churidhar, tops and dupattas - woven for every celebration
                </p>
              </div>

              {/* Right Placeholder to maintain centering */}
              <div className="hidden lg:block w-[235px] flex-shrink-0" />

              {/* Right Decorative Polaroid Stack (Replaces right image) */}
              <div className="hidden xl:block absolute right-[-10px] top-[-70px] z-50 pointer-events-none origin-center scale-[1.05]">
                <div className="relative w-[238px] h-[236px]">
                  {/* Frame 41 */}
                  <div className="absolute top-0 left-0 w-[238px] h-[236px] bg-[#FFFFFF] rounded-[20px] rotate-[14.65deg] flex justify-center items-center shadow-md">
                    <div className="w-[230px] h-[180px] bg-gray-100 rounded-[16px] overflow-hidden -mt-[14px]">
                      <img src={kasavuImg} className="w-full h-full object-cover" alt="" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  
                  {/* Frame 40 */}
                  <div className="absolute top-[9.55px] left-[0.27px] w-[238px] h-[236px] bg-[#FFFFFF] rounded-[20px] rotate-[8.28deg] flex justify-center items-center shadow-lg">
                    <div className="w-[230px] h-[180px] bg-gray-100 rounded-[16px] overflow-hidden -mt-[14px]">
                      <img src={kasavuImg} className="w-full h-full object-cover" alt="" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  
                  {/* Frame 12 */}
                  <div className="absolute top-[11.68px] left-[-8.07px] w-[238px] h-[236px] bg-[#FFFFFF] rounded-[20px] rotate-[4.63deg] shadow-xl flex flex-col items-center justify-start pt-[4.31px] border border-gray-100/50">
                    <div className="w-[230px] h-[180px] bg-gray-100 rounded-[16px] overflow-hidden mb-[6px]">
                      <img src={kasavuImg} className="w-full h-full object-cover" alt="" loading="lazy" decoding="async" />
                    </div>
                    <div className="w-full px-[14px] text-left">
                      <span className="text-[#000000] font-normal text-[16px] leading-[150%]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Kasavu Sarees
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Men's Card */}
            <div className="w-full max-w-[1000px] h-auto lg:h-[178px] bg-[#FBFBF8] border-[4px] border-[#FFFFFF] rounded-[40px] flex flex-col lg:flex-row items-center justify-between p-6 lg:p-0 lg:px-[32px] shadow-sm relative">
              <div className="w-[235px] h-[116px] bg-[#FFFFFF] rounded-[16px] p-[8px] flex-shrink-0 mb-4 lg:mb-0 shadow-xs">
                <div className="w-[219px] h-[100px] bg-gray-100 rounded-[12px] overflow-hidden relative">
                  <img src={Image6} className="absolute w-full h-full object-cover scale-110 -rotate-3" alt="Men Fabric" loading="lazy" decoding="async" />
                </div>
              </div>
              
              <div className="flex flex-col items-center flex-1 px-4 text-center z-10">
                <h3 className="text-[#231226] font-medium text-[20px] lg:text-[24px] leading-[120%] mb-[12px]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Men’s Ethnic Collections
                </h3>
                <p className="text-[#1A0D1C] font-normal text-[14px] lg:text-[16px] leading-[150%] max-w-[441px] font-sans">
                  From classic mundu and dhotis to kurtas and festive wear - crafted for tradition, designed for distinction.
                </p>
              </div>

              <div className="w-[235px] h-[116px] bg-[#FFFFFF] rounded-[16px] p-[8px] flex-shrink-0 mt-4 lg:mt-0 shadow-xs">
                <div className="w-[219px] h-[100px] bg-gray-100 rounded-[12px] overflow-hidden relative">
                  <img src={Image19} className="absolute w-full h-full object-cover object-top" alt="Men" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>

            {/* Kid's Card */}
            <div className="w-full max-w-[1000px] h-auto lg:h-[178px] bg-[#FBFBF8] border-[4px] border-[#FFFFFF] rounded-[40px] flex flex-col lg:flex-row items-center justify-between p-6 lg:p-0 lg:px-[32px] shadow-sm relative">
              <div className="w-[235px] h-[116px] bg-[#FFFFFF] rounded-[16px] p-[8px] flex-shrink-0 mb-4 lg:mb-0 shadow-xs">
                <div className="w-[219px] h-[100px] bg-gray-100 rounded-[12px] overflow-hidden relative">
                  <img src={image22} className="absolute w-full h-full object-cover object-top" alt="Kids Fabric" loading="lazy" decoding="async" />
                </div>
              </div>
              
              <div className="flex flex-col items-center flex-1 px-4 text-center z-10">
                <h3 className="text-[#231226] font-medium text-[20px] lg:text-[24px] leading-[120%] mb-[12px]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Kid’s Traditional Collections
                </h3>
                <p className="text-[#1A0D1C] font-normal text-[14px] lg:text-[16px] leading-[150%] max-w-[441px] font-sans">
                  Adorable ethnic wear for little ones from kasavu collections to festive outfits, made for memories that last a lifetime.
                </p>
              </div>

              <div className="w-[235px] h-[116px] bg-[#FFFFFF] rounded-[16px] p-[8px] flex-shrink-0 mt-4 lg:mt-0 shadow-xs">
                <div className="w-[219px] h-[100px] bg-gray-100 rounded-[12px] overflow-hidden relative">
                  <img src={kidsTraditionalImg} className="absolute w-full h-full object-cover object-top scale-[1.3] translate-y-3" alt="Kids" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center w-full">
            <a href="/collections" className="flex justify-center items-center w-[272px] h-[60px] border border-[#735C00] hover:bg-[#735C00] transition-colors group bg-transparent">
              <span className="text-[#735C00] group-hover:text-[#EDECE3] text-[16px] font-medium leading-[160%] tracking-[1px] uppercase font-sans">
                DISCOVER THE WEAVE
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Circular Collections Layout with Section 5 Reveal */}
      <React.Suspense fallback={<div className="w-full h-screen bg-[#fdfcf7]" />}>
        <CircularImageReveal images={circleImages}>
          {/* 5. Full Width Banner - Traditions (Revealed from Center) */}
          <div className="relative w-full h-full bg-[#FFFFFF]">
            <div className="absolute inset-0 w-full h-full">
              <img
                src={traditionsImg}
                alt="Traditional Kerala"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy" decoding="async"
              />
            </div>
            
            {/* Precise Figma Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))' }} 
            />

            {/* Top Left Heading */}
            <div className="absolute top-[80px] lg:top-[120px] left-[40px] lg:left-[80px] z-10">
              <h2 className="text-[#FFFFFF] text-[40px] md:text-[60px] lg:text-[72px] font-normal leading-[120%] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Some Traditions Are<br />
                Worn. Others Are <span className="italic">Lived.</span>
              </h2>
            </div>

            {/* Bottom Right Quote and Button */}
            <div className="absolute bottom-[80px] lg:bottom-[80px] right-[40px] lg:right-[80px] z-10 w-full max-w-[550px]">
              <p className="text-[#FFFFFF] font-normal text-[16px] lg:text-[20px] leading-[160%] mb-[32px] font-sans opacity-95">
                “Born from the rich cultural roots of Kerala, SSK Handlooms is more than a brand - It is a commitment to preserve the art of handloom weaving and keep our traditions alive. From the looms of skilled artisans to the celebrations of today, we bring you authenticity you can feel.”
              </p>
              <a
                href="/story"
                className="flex justify-center items-center w-[272px] h-[60px] border border-[#FFFFFF] bg-transparent text-[#FFFFFF] text-[16px] font-medium tracking-[1px] uppercase hover:bg-white hover:text-[#1A0D1C] transition-colors font-sans pointer-events-auto"
              >
                KNOW OUR STORY
              </a>
            </div>
          </div>
        </CircularImageReveal>
      </React.Suspense>

      <section className="w-full bg-[#fdfcf7] py-14 md:py-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="font-serif italic text-center text-[#2c2214] text-3xl md:text-5xl lg:text-[54px] font-normal leading-[1.35] max-w-4xl mb-12 md:mb-16">
            &ldquo;Every weave carries a legacy. Every<br />
            thread connects generations.&rdquo;
          </h2>


          <div className="relative w-full max-w-[420px] md:max-w-[520px] aspect-square mx-auto">
            <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-28 md:w-36 h-28 md:h-36 border-t border-l border-[#d6c5a3] pointer-events-none" />

            <div className="w-full h-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)] rounded-xs md:rounded-sm">
              <img
                src={image22Asset}
                alt="Traditional Loom Weaving"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-28 md:w-36 h-28 md:h-36 border-b border-r border-[#d6c5a3] pointer-events-none" />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fdfcf7] pt-10 md:pt-14 pb-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 mb-8 flex flex-col items-start">
          <div className="max-w-md text-left">
            <div className="text-xs uppercase tracking-[0.2em] text-[#9a7b4f] mb-3 font-medium">
              THE ART OF THE WEAVER
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#2c2214] font-normal leading-tight mb-6">
              Authentic Weaves, Modern <span className="italic">Silhouettes</span>
            </h2>
            <p className="text-[#2c2214]/80 font-light text-sm md:text-base leading-relaxed">
              Our master weavers in the heart of Kerala use techniques passed down through ten generations. Each piece is a testament to human patience and precision.
            </p>
          </div>
        </div>

        {/* Staggered Corner-to-Corner Checkerboard Grid - Full Screen Bleed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full max-w-none">
          {/* Row 1: 01 Left, Empty Right */}
          <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] overflow-hidden bg-black">
            <img
              src={image23Asset}
              alt="Finest Yarns"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:p-12 text-white z-10 flex flex-col items-start">
              <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-white/90 font-light leading-none mb-1.5 select-none">
                01
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-normal mb-1.5">
                Finest Yarns
              </h3>
              <p className="text-white/90 font-light text-xs md:text-sm max-w-sm leading-relaxed">
                Carefully selected for exceptional quality and comfort.
              </p>
            </div>
          </div>
          <div className="hidden md:block w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] bg-transparent" />

          {/* Row 2: Empty Left, 02 Right */}
          <div className="hidden md:block w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] bg-transparent" />
          <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] overflow-hidden bg-black">
            <img
              src={image24Asset}
              alt="Handloom Weaving"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:p-12 text-white z-10 flex flex-col items-start">
              <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-white/90 font-light leading-none mb-1.5 select-none">
                02
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-normal mb-1.5">
                Handloom Weaving
              </h3>
              <p className="text-white/90 font-light text-xs md:text-sm max-w-sm leading-relaxed">
                Expertly woven by skilled artisans with generations of craftsmanship.
              </p>
            </div>
          </div>

          {/* Row 3: 03 Left, Empty Right */}
          <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] overflow-hidden bg-black">
            <img
              src={image25Asset}
              alt="Perfect Finishing"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:p-12 text-white z-10 flex flex-col items-start">
              <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-white/90 font-light leading-none mb-1.5 select-none">
                03
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-normal mb-1.5">
                Perfect Finishing
              </h3>
              <p className="text-white/90 font-light text-xs md:text-sm max-w-sm leading-relaxed">
                Every detail thoughtfully refined for timeless elegance.
              </p>
            </div>
          </div>
          <div className="hidden md:block w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] bg-transparent" />

          {/* Row 4: Empty Left, 04 Right */}
          <div className="hidden md:block w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] bg-transparent" />
          <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] overflow-hidden bg-black">
            <img
              src={image26Asset}
              alt="Made for Moments"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:p-12 text-white z-10 flex flex-col items-start">
              <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-white/90 font-light leading-none mb-1.5 select-none">
                04
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-normal mb-1.5">
                Made for Moments
              </h3>
              <p className="text-white/90 font-light text-xs md:text-sm max-w-sm leading-relaxed">
                Designed to celebrate life's most meaningful occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full min-h-[520px] md:min-h-[580px] flex items-center justify-center py-12 md:py-16 px-6 md:px-16 lg:px-24 bg-[#1a1410] overflow-hidden">
        <img
          src={image27Asset}
          alt="The Joy of Dressing Together"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          <div className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/90 mb-4 font-medium">
            FESTIVE SEASONS
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-normal mb-6 leading-tight">
            “The Joy of Dressing Together”
          </h2>
          <p className="text-white/90 font-light text-sm md:text-lg leading-relaxed mb-8 max-w-3xl">
            Our Family Combo Collections are more than just matching outfits; they are the threads that bind your most precious memories during Onam, Vishu, and weddings.
          </p>
          <button className="border border-white/80 px-8 py-3.5 tracking-[0.25em] text-xs uppercase text-white hover:bg-white hover:text-[#1a1410] transition-colors">
            EXPLORE FAMILY SETS
          </button>
        </div>
      </section>

      {/* 9. Founder's Word (Image 28) */}
      <section className="w-full bg-[#fdfcf7] py-12 md:py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9a7b4f] mb-3 font-medium">
              A WORD FROM OUR FOUNDER
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#2c2214] font-normal leading-tight mb-5">
              Every Thread Carries A Story<br className="hidden sm:inline" /> Worth <span className="italic">Preserving</span>
            </h2>
            <div className="flex items-center justify-center gap-3 my-6">
              <div className="w-24 md:w-36 h-[1px] bg-[#e5e0d8]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#9a7b4f]" />
              <div className="w-24 md:w-36 h-[1px] bg-[#e5e0d8]" />
            </div>
            <p className="text-[#2c2214]/80 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Behind every weave lies the dedication of skilled artisans, the richness of our heritage, and a promise to create pieces that will be cherished for generations to come.
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto p-2 md:p-3 bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl border border-[#2c2214]/5">
            <div className="relative w-full h-[450px] md:h-[600px] rounded-2xl md:rounded-[2rem] overflow-hidden">
              <img
                src={image28Asset}
                alt="Krishnaprasad, CEO & Creative Director"
                className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-[#2c2214]/95 via-[#2c2214]/65 to-transparent z-10 flex flex-col justify-end p-8 md:p-16 text-center text-white">
                <p className="text-xl md:text-3xl lg:text-4xl font-serif font-normal text-white mb-4 leading-relaxed max-w-4xl mx-auto">
                  “True elegance is never announced. It is felt in every weave, every detail, and every moment it becomes part of.”
                </p>
                <div className="text-xs md:text-sm text-white/90 font-light tracking-wide">
                  Krishnaprasad, CEO & Creative Director
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Experience (Client Reviews with Image 29 Stack) */}
      <section className="w-full bg-[#f0ece1] py-12 md:py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-xs uppercase tracking-[0.25em] text-[#9a7b4f] mb-3 font-medium">
              EXPERIENCE
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#2c2214] font-normal leading-tight mb-5">
              What Our Clients Are <span className="italic">Saying</span>
            </h2>
            <div className="flex items-center justify-center gap-3 my-6">
              <div className="w-24 md:w-36 h-[1px] bg-[#dcd6c8]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#9a7b4f]" />
              <div className="w-24 md:w-36 h-[1px] bg-[#dcd6c8]" />
            </div>
            <p className="text-[#2c2214]/80 font-light text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Real stories from families who trusted us to be part of their most cherished moments.
            </p>
          </div>

          {/* Client Reviews Stack (3 Wide Cards) */}
          <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 md:gap-10">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="w-full bg-white rounded-3xl md:rounded-[2rem] p-4 md:p-6 lg:p-8 shadow-md border border-[#2c2214]/5 flex flex-col md:flex-row gap-6 md:gap-10 items-center"
              >
                {/* Left: Image 29 Box */}
                <div className="w-full md:w-[45%] shrink-0">
                  <div className="aspect-[4/3] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-sm">
                    <img
                      src={image29Asset}
                      alt="Malabar Silks Boutique"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Right: Review Details */}
                <div className="w-full md:w-[55%] flex flex-col justify-between py-2 md:py-4 pr-2 md:pr-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-[#a66a1f] text-white text-xs md:text-sm font-medium px-4 py-1.5 rounded-full shadow-xs">
                      Set Sarees & Set Mundu
                    </span>
                    <span className="text-3xl md:text-5xl font-serif text-[#2c2214]/80 font-bold leading-none select-none">
                      ”
                    </span>
                  </div>

                  <p className="text-[#2c2214]/80 font-light text-sm md:text-base leading-relaxed mb-8">
                    We were looking for a reliable supplier who could consistently deliver authentic Kerala wear without compromising on quality. SSK Handlooms exceeded our expectations. The craftsmanship, finishing, and timely delivery have helped us build strong customer trust in our store.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shrink-0 shadow-sm border border-[#e5e0d8]">
                      <img src={avatarImg} alt="Michael John" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <div className="font-serif text-lg md:text-xl text-[#2c2214] font-normal leading-none">
                        Michael John
                      </div>
                      <div className="bg-[#f4efe4] text-[#8c6b3e] text-[11px] md:text-xs font-medium px-3 py-1 rounded-md">
                        Procurement Manager, Malabar Boutique
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA Box (Woven For Celebrations That Last A Lifetime) */}
      <section className="w-full bg-[#f0ece1] pt-8 md:pt-12 pb-10 md:pb-14 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto rounded-3xl md:rounded-[2.5rem] bg-linear-to-br from-[#382613] via-[#24170b] to-[#170e06] border-[3px] md:border-4 border-white shadow-2xl p-10 md:p-16 lg:p-20 text-center flex flex-col items-center justify-center relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white font-normal leading-tight mb-6 max-w-3xl">
            Woven For Celebrations<br className="hidden sm:inline" /> That Last <span className="italic font-light">A Lifetime</span>
          </h2>
          <p className="text-white/80 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
            From timeless kasavu classics to contemporary ethnic essentials, each piece is crafted to honor tradition while embracing modern elegance.
          </p>
          <button className="border border-white/80 px-8 py-3.5 tracking-[0.25em] text-xs uppercase text-white hover:bg-white hover:text-[#24170b] transition-colors">
            DISCOVER THE COLLECTION
          </button>
        </div>
      </section>

    </div>
  )
}

