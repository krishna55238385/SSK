import React from "react"
import { motion } from "framer-motion"
import { Heading } from "../components/ui/Heading"
import heroUploadedImg from "../assets/image.png"
import womensHandloomImg from "../assets/Women’s Handloom.png"
import kidsTraditionalImg from "../assets/Kid’s Traditional.png"
import kasavuImg from "../assets/Kasavu.png"
import image21 from "../assets/image 21.png"
import image22Asset from "../assets/image22.png"
import image23Asset from "../assets/image23.png"
import image24Asset from "../assets/image24.png"
import image25Asset from "../assets/image25.png"
import image26Asset from "../assets/image26.png"
import image27Asset from "../assets/image27.png"
import image28Asset from "../assets/image28.png"
import image29Asset from "../assets/image29.png"
import image22 from "../assets/Child.png"
import image23 from "../assets/Man.png"
import sareeLogo from "../assets/SareeLogo.png"
import Image1 from "../assets/image1.png"
import Image2 from "../assets/image2.png"
import Image3 from "../assets/image3.png"
import Image4 from "../assets/image4.png"
import Image5 from "../assets/image5.png"
import Image6 from "../assets/image6.png"
import Image7 from "../assets/image7.png"
import Image8 from "../assets/image8.png"
import Image9 from "../assets/image9.png"
import Image10 from "../assets/image10.png"
import Image11 from "../assets/image11.png"
import Image12 from "../assets/image12.png"
import Image13 from "../assets/image13.png"
import Image14 from "../assets/image14.png"
import Image15 from "../assets/image15.png"
import Image16 from "../assets/image16.jpg"
import Image17 from "../assets/image17.png"
import Image18 from "../assets/image18.png"
import Image19 from "../assets/image19.png"
import Image20 from "../assets/image20.png"


export const Home: React.FC = () => {
  const heroImg = heroUploadedImg
  const traditionsImg = image21
  const avatarImg = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"

  const circleImages = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9,
    Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20
  ];

  return (
    <div className="w-full bg-brand-light text-brand-text font-sans">

      <section className="relative w-full h-[85vh] md:h-screen bg-[#2c2214] overflow-hidden">
        <img
          src={heroImg}
          alt="SSK Handlooms Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-90 object-top"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#1a1410]/60 via-[#1a1410]/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#fdfcf7]/90 to-transparent" />



        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-white"
          >
            <div className="text-[0.65rem] tracking-[0.3em] uppercase mb-6 opacity-90 border-l border-white/60 pl-3">
              Established 2008
            </div>
            <Heading level={1} align="left" className="text-white mb-6 leading-[1.1]">
              Where Every Tread<br />Tells A <em className="italic">Story</em>
            </Heading>
            <p className="text-sm md:text-base opacity-90 max-w-md font-light mb-10 leading-relaxed text-[#fdfcf7]">
              Authentic Kerala Handlooms for the Modern Soul. Weaving the golden threads of tradition into the fabric of contemporary lifestyle.
            </p>
            <button className="border border-white/60 text-white px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#2c2214] transition-colors backdrop-blur-sm">
              Discover the Weave
            </button>
          </motion.div>
        </div>

        {/* Floating Product Polaroid Stack — fanned deck of polaroids */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:block absolute bottom-12 right-16 xl:right-24 z-20"
        >
          <div className="relative w-64 xl:w-76">
            {/* Card 3 (Back-most polaroid snapshot) */}
            <div className="absolute -top-5 left-4 right-4 bg-white p-3 pb-5 rounded-xs shadow-md border border-black/10 opacity-90">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xs bg-gray-100">
                <img src={kasavuImg} alt="" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>

            {/* Card 2 (Middle polaroid snapshot) */}
            <div className="absolute -top-2.5 left-2 right-2 bg-white p-3 pb-5 rounded-xs shadow-lg border border-black/10 opacity-95">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xs bg-gray-100">
                <img src={kasavuImg} alt="" className="w-full h-full object-cover opacity-90" />
              </div>
            </div>

            {/* Card 1 (Main front polaroid snapshot) */}
            <div className="relative z-10 bg-white p-3.5 pb-5 xl:p-4 xl:pb-6 rounded-xs shadow-2xl border border-black/10">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xs mb-3 xl:mb-4 bg-[#f5f3ed]">
                <img
                  src={kasavuImg}
                  alt="Kasavu Saree"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="text-[#2c2214] px-1 text-left">
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#9a7b4f] mb-1 font-medium">
                  BEST SELLER
                </p>
                <h4 className="font-serif text-lg xl:text-xl font-normal leading-snug">
                  Kasavu Sarees
                </h4>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Tribute Section */}
      <section className="py-12 md:py-16 px-4 bg-linear-to-b from-[#f5f0e0] to-[#fdfcf7] text-center">
        <div className="max-w-3xl mx-auto">
          {/* Dress/saree line icon */}
          <div className="mb-4 flex justify-center">
            <img
              src={sareeLogo}
              alt="SSK Handlooms"
              className="w-20 h-20 md:w-24 md:h-24 object-contain opacity-70"
            />
          </div>

          {/* Divider with center dot */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-24 md:w-32 h-[1px] bg-linear-to-r from-transparent to-brand-gold/40" />
            <div className="w-1.5 h-1.5 bg-brand-gold rounded-full rotate-45" />
            <div className="w-24 md:w-32 h-[1px] bg-linear-to-l from-transparent to-brand-gold/40" />
          </div>

          {/* Quote */}
          <Heading
            level={3}
            className="text-[#4a3b1f] mb-6 italic font-normal text-3xl md:text-4xl leading-[1.35] max-w-2xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "Every thread tells a story of a thousand years, woven with the gold of our ancestors."
          </Heading>

          {/* Subheading */}
          <h3 className="font-serif text-[#2c2214] text-2xl md:text-3xl mb-6">
            The Soul of Kerala
          </h3>

          {/* Body copy */}
          <p className="text-[#4a3b1f]/70 text-sm md:text-base leading-relaxed font-light max-w-xl mx-auto mb-8">
            At SSK Handlooms, we believe that heritage shouldn't be a luxury hidden in
            antique chests. It should be lived. Our direct-to-consumer mission bypasses
            the labyrinth of middlemen, ensuring that the true value of each weave goes
            back to the artisan, and the true authenticity of the fabric reaches your
            doorstep.
          </p>

          {/* Bottom divider with center dot */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-24 md:w-32 h-[1px] bg-linear-to-r from-transparent to-brand-gold/40" />
            <div className="w-1.5 h-1.5 bg-brand-gold rounded-full rotate-45" />
            <div className="w-24 md:w-32 h-[1px] bg-linear-to-l from-transparent to-brand-gold/40" />
          </div>
        </div>
      </section>

      {/* 3. Signature Weaves */}
      <section className="py-12 md:py-16 px-4 bg-[#ede9e0]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-3 font-medium">ESTABLISHED 2014</div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#2c2214] leading-tight mb-2">
            Our Signature Weaves,<br />
            Curated <span className="italic font-normal">For Every Generation</span>
          </h2>

          <div className="flex items-center justify-center space-x-3 my-5">
            <div className="h-[1px] w-16 bg-brand-gold/40"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-brand-gold"></div>
            <div className="h-[1px] w-16 bg-brand-gold/40"></div>
          </div>

          <p className="text-[#2c2214]/70 text-sm md:text-base font-light max-w-xl mx-auto mb-10">
            Authentic Kerala handloom collections for men, women and kids.
            Crafted with tradition, woven with care.
          </p>

          <div className="flex flex-col space-y-6 mb-10">
            {/* Women's Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[2rem] p-4 md:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow relative overflow-visible"
            >
              <div className="w-full md:w-56 h-36 rounded-2xl overflow-hidden shrink-0 bg-white p-1.5 shadow-sm border border-black/5 flex items-center justify-center">
                <img src={womensHandloomImg} alt="Women's Folded Saree" className="w-full h-full object-cover rounded-xl" />
              </div>

              <div className="flex-1 text-center px-2 md:px-6">
                <h3 className="font-serif text-[#2c2214] text-xl md:text-2xl mb-2">Women&apos;s Handloom Collections</h3>
                <p className="text-xs md:text-sm text-[#2c2214]/60 font-light leading-relaxed max-w-md mx-auto">
                  Timeless sarees, set mundu, pavada, dhavani sets, churidhar, tops and dupattas - woven for every celebration
                </p>
              </div>

              {/* Polaroid stack wrapper — pulled up so it breaks out of the card's top edge */}
              <div className="w-full md:w-56 h-36 relative flex items-center justify-center shrink-0 my-2 md:my-0 md:-mt-16 overflow-visible">
                {/* Back polaroid 1 */}
                <div className="absolute w-32 md:w-40 bg-white p-1.5 pb-6 rounded-2xl shadow-md border border-gray-100 rotate-[10deg] translate-x-6 -translate-y-2">
                  <div className="w-full h-24 bg-gray-100 rounded-xl overflow-hidden">
                    <img src={womensHandloomImg} alt="Women's Collection" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Back polaroid 2 */}
                <div className="absolute w-32 md:w-40 bg-white p-1.5 pb-6 rounded-2xl shadow-md border border-gray-100 -rotate-[8deg] -translate-x-6 -translate-y-3">
                  <div className="w-full h-24 bg-gray-100 rounded-xl overflow-hidden">
                    <img src={kasavuImg} alt="Kasavu Saree" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Front polaroid */}
                <div className="absolute z-10 w-40 md:w-48 bg-white p-2 pb-4 rounded-2xl shadow-xl border border-gray-100 rotate-[2deg] -translate-y-4">
                  <div className="w-full h-28 bg-gray-100 rounded-xl overflow-hidden mb-1.5">
                    <img src={kasavuImg} alt="Kasavu Saree" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[11px] font-serif text-[#2c2214] block text-left pl-1">Kasavu Sarees</span>
                </div>
              </div>
            </motion.div>

            {/* Men's Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-[2rem] p-4 md:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <div className="w-full md:w-56 h-36 rounded-2xl overflow-hidden shrink-0 bg-white p-1.5 shadow-sm border border-black/5 flex items-center justify-center">
                <img src={womensHandloomImg} alt="Men's Folded Dhoti" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="flex-1 text-center px-2 md:px-6">
                <h3 className="font-serif text-[#2c2214] text-xl md:text-2xl mb-2">Men&apos;s Ethnic Collections</h3>
                <p className="text-xs md:text-sm text-[#2c2214]/60 font-light leading-relaxed max-w-md mx-auto">
                  From classic mundu and dhotis to kurtas and festive wear - crafted for tradition, designed for distinction.
                </p>
              </div>
              <div className="w-full md:w-56 h-36 rounded-2xl overflow-hidden shrink-0 bg-white p-1.5 shadow-sm border border-black/5 flex items-center justify-center">
                <img src={image23} alt="Men's Collection" className="w-full h-full object-cover object-top rounded-xl" />
              </div>
            </motion.div>

            {/* Kid's Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-[2rem] p-4 md:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <div className="w-full md:w-56 h-36 rounded-2xl overflow-hidden shrink-0 bg-white p-1.5 shadow-sm border border-black/5 flex items-center justify-center">
                <img src={kidsTraditionalImg} alt="Kid's Folded Dress" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="flex-1 text-center px-2 md:px-6">
                <h3 className="font-serif text-[#2c2214] text-xl md:text-2xl mb-2">Kid&apos;s Traditional Collections</h3>
                <p className="text-xs md:text-sm text-[#2c2214]/60 font-light leading-relaxed max-w-md mx-auto">
                  Adorable ethnic wear for little ones from kasavu collections to festive outfits, made for memories that last a lifetime.
                </p>
              </div>
              <div className="w-full md:w-56 h-36 rounded-2xl overflow-hidden shrink-0 bg-white p-1.5 shadow-sm border border-black/5 flex items-center justify-center">
                <img src={image22} alt="Kid's Collection" className="w-full h-full object-cover rounded-xl" />
              </div>
            </motion.div>
          </div>

          <div className="mt-6 text-center">
            <a href="/collections" className="inline-block px-8 py-3.5 border border-brand-gold text-brand-gold text-xs tracking-[0.2em] font-medium uppercase hover:bg-brand-gold hover:text-white transition-colors rounded-sm">
              DISCOVER THE WEAVE
            </a>
          </div>
        </div>
      </section>

      {/* 4. Circular Collections Layout */}

      <section className="py-12 md:py-16 overflow-hidden bg-[#fdfcf7] flex flex-col items-center justify-center relative min-h-[680px] md:min-h-[780px]">
        <div
          className="circle-wrap relative w-[500px] h-[500px] md:w-[880px] md:h-[880px] flex items-center justify-center"
          style={{ "--radius": "210px" } as React.CSSProperties}
        >
          <style>{`
      @media (min-width: 768px) {
        .circle-wrap { --radius: 380px; }
      }
    `}</style>

          <Heading
            level={3}
            className="text-[#2c2214] max-w-[240px] md:max-w-[360px] text-center z-10 text-2xl md:text-4xl font-normal"
          >
            A Collection for<br />
            <span className="italic">Everyone</span>
          </Heading>

          {circleImages.map((src, i) => {
            const total = circleImages.length; // 20
            const angle = i * (360 / total);

            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-9 h-11 md:w-[56px] md:h-[68px] bg-white shadow-md overflow-hidden rounded-xl md:rounded-2xl -mt-[22px] -ml-[18px] md:-mt-[34px] md:-ml-[28px] transition-transform duration-300 hover:scale-105"
                style={{
                  transform: `rotate(${angle}deg) translateY(calc(-1 * var(--radius)))`,
                }}
              >
                <img src={src} alt="pattern swatch" className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Full Width Banner - Traditions */}
      <section className="relative w-full min-h-[520px] md:min-h-[620px] flex flex-col justify-between py-12 md:py-16 px-6 md:px-16 lg:px-24 bg-[#1a1410] overflow-hidden">
        <img
          src={traditionsImg}
          alt="Traditional Kerala"
          className="absolute inset-0 w-full h-full object-cover opacity-100 object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/10 to-black/50" />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/30" />

        {/* Top Left Heading */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <h2 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.15] max-w-4xl tracking-tight">
            Some Traditions Are<br />
            Worn. Others Are <span className="italic font-normal">Lived.</span>
          </h2>
        </div>

        {/* Bottom Right Quote and Button */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-end mt-8 md:mt-12">
          <div className="max-w-2xl text-left">
            <p className="text-white/90 font-light text-base md:text-xl leading-relaxed mb-8 font-sans">
              &ldquo;Born from the rich cultural roots of Kerala, SSK Handlooms is more than a brand - It is a commitment to preserve the art of handloom weaving and keep our traditions alive. From the looms of skilled artisans to the celebrations of today, we bring you authenticity you can feel.&rdquo;
            </p>
            <a
              href="/story"
              className="inline-block px-8 py-3.5 border border-white/70 text-white text-xs tracking-[0.25em] font-medium uppercase hover:bg-white hover:text-[#1a1410] transition-colors bg-black/20 backdrop-blur-xs"
            >
              KNOW OUR STORY
            </a>
          </div>
        </div>
      </section>

      {/* 6. Legacy & Heritage Weave Section */}
      <section className="w-full bg-[#fdfcf7] py-14 md:py-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Top Quote */}
          <h2 className="font-serif italic text-center text-[#2c2214] text-3xl md:text-5xl lg:text-[54px] font-normal leading-[1.35] max-w-4xl mb-12 md:mb-16">
            &ldquo;Every weave carries a legacy. Every<br />
            thread connects generations.&rdquo;
          </h2>

          {/* Center Image with Decorative L-Corner Brackets */}
          <div className="relative w-full max-w-[420px] md:max-w-[520px] aspect-square mx-auto">
            {/* Top-Left Bracket */}
            <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-28 md:w-36 h-28 md:h-36 border-t border-l border-[#d6c5a3] pointer-events-none" />

            {/* Main Image */}
            <div className="w-full h-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)] rounded-xs md:rounded-sm">
              <img
                src={image22Asset}
                alt="Traditional Loom Weaving"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-Right Bracket */}
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

