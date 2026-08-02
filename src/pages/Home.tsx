import React from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import heroUploadedImg from "../assets/image.webp"
import kidsTraditionalImg from "../assets/Kid’s Traditional.webp"
import kasavuImg from "../assets/Kasavu.webp"
import image21 from "../assets/image 21.webp"
import image22Asset from "../assets/image22.webp"
import image28Asset from "../assets/image28.webp"
import image29Asset from "../assets/image29.webp"
import image30Asset from "../assets/image30.webp"
import image31Asset from "../assets/image31.webp"
import image22 from "../assets/Child.webp"
import sareeLogo from "../assets/SareeLogo.webp"
import manImg from "../assets/Man.webp"
import avatar1Img from "../assets/image32.webp"
import avatar2Img from "../assets/image33.webp"
import avatar3Img from "../assets/image34.webp"
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

gsap.registerPlugin(ScrollTrigger);

import { CircularImageReveal } from "../components/CircularImageReveal";

import { StaggeredCheckerboardGrid } from "../components/StaggeredCheckerboardGrid";
import { FestiveComboSection } from "../components/FestiveComboSection";


export const Home: React.FC = () => {
  React.useEffect(() => {
    // Previously this called ScrollTrigger.refresh() twice — once on window
    // 'load' and again on a blind 500ms timeout "just in case". Each refresh
    // forces GSAP to synchronously recalculate every registered trigger's
    // position across the whole page (a real layout-thrashing cost, and
    // exactly what Lighthouse's "Forced reflow" insight was flagging).
    // A single refresh, debounced and fired only after the page has actually
    // finished loading, gets the same correctness without the duplicate cost.
    let refreshTimer: ReturnType<typeof setTimeout> | undefined;
    const debouncedRefresh = () => {
      if (refreshTimer) clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    };

    if (document.readyState === 'complete') {
      debouncedRefresh();
    } else {
      window.addEventListener('load', debouncedRefresh, { once: true });
    }

    return () => {
      window.removeEventListener('load', debouncedRefresh);
      if (refreshTimer) clearTimeout(refreshTimer);
    };
  }, []);
  const heroImg = heroUploadedImg
  const traditionsImg = image21

  const circleImages = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9,
    Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20
  ];

  const [heroLoaded, setHeroLoaded] = React.useState(false);
  const [traditionsLoaded, setTraditionsLoaded] = React.useState(false);
  const [ceoLoaded, setCeoLoaded] = React.useState(false);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = React.useState(false);

  const testimonialSectionRef = React.useRef<HTMLDivElement>(null);
  const testimonialHeaderRef = React.useRef<HTMLDivElement>(null);
  const card1Ref = React.useRef<HTMLDivElement>(null);
  const card2Ref = React.useRef<HTMLDivElement>(null);
  const card3Ref = React.useRef<HTMLDivElement>(null);
  const ctaCardRef = React.useRef<HTMLDivElement>(null);

  // Tribute Section Refs
  const tributeSectionRef = React.useRef<HTMLDivElement>(null);
  const tributeLogoRef = React.useRef<HTMLImageElement>(null);
  const tributeQuoteRef = React.useRef<HTMLQuoteElement>(null);
  const tributeHeadingRef = React.useRef<HTMLHeadingElement>(null);
  const tributeDescRef = React.useRef<HTMLParagraphElement>(null);

  // Signature Weaves Refs
  const weavesSectionRef = React.useRef<HTMLDivElement>(null);
  const weavesEyebrowRef = React.useRef<HTMLDivElement>(null);
  const weavesHeadingRef = React.useRef<HTMLHeadingElement>(null);
  const weavesDividerRef = React.useRef<HTMLDivElement>(null);
  const weavesDescRef = React.useRef<HTMLParagraphElement>(null);
  const weavesCard1Ref = React.useRef<HTMLDivElement>(null);
  const weavesCard2Ref = React.useRef<HTMLDivElement>(null);
  const weavesCard3Ref = React.useRef<HTMLDivElement>(null);
  const weavesBtnRef = React.useRef<HTMLDivElement>(null);

  // Legacy Section Refs
  const legacySectionRef = React.useRef<HTMLDivElement>(null);
  const legacyQuoteRef = React.useRef<HTMLQuoteElement>(null);
  const legacyImageRef = React.useRef<HTMLDivElement>(null);

  // Founder's Word Refs
  const founderSectionRef = React.useRef<HTMLDivElement>(null);
  const founderEyebrowRef = React.useRef<HTMLDivElement>(null);
  const founderHeadingRef = React.useRef<HTMLHeadingElement>(null);
  const founderDividerRef = React.useRef<HTMLDivElement>(null);
  const founderDescRef = React.useRef<HTMLParagraphElement>(null);
  const founderCardRef = React.useRef<HTMLDivElement>(null);
  const founderQuoteRef = React.useRef<HTMLParagraphElement>(null);
  const founderAuthorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;

    if (!card1 || !card2 || !card3) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(card1, { opacity: 1, y: 0, scale: 1, pointerEvents: "auto" });
      gsap.set([card2, card3], { opacity: 0, y: 20, scale: 0.98, pointerEvents: "none" });

      // Image initial states
      const img1 = card1.querySelector(".testimonial-main-img");
      const img2 = card2.querySelector(".testimonial-main-img");
      const img3 = card3.querySelector(".testimonial-main-img");

      gsap.set(img1, { scale: 1 });
      gsap.set([img2, img3], { scale: 1.05 });

      // Auto-cycling timeline
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 3,
        delay: 3
      });

      // Card 1 -> Card 2
      tl.to(card1, { opacity: 0, y: -20, duration: 0.5, ease: "power2.out" })
        .set(img1, { scale: 1.05 }) // reset image scale
        .fromTo(card2,
          { opacity: 0, y: 20, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, pointerEvents: "auto", duration: 0.6, ease: "power2.out" },
          "-=0.5"
        )
        .to(img2, { scale: 1, duration: 1.0, ease: "power2.out" }, "-=0.5")
        .set(card1, { pointerEvents: "none" }, "<");

      // Card 2 -> Card 3
      tl.to(card2, { opacity: 0, y: -20, duration: 0.5, ease: "power2.out" }, "+=3")
        .set(img2, { scale: 1.05 }) // reset image scale
        .fromTo(card3,
          { opacity: 0, y: 20, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, pointerEvents: "auto", duration: 0.6, ease: "power2.out" },
          "-=0.5"
        )
        .to(img3, { scale: 1, duration: 1.0, ease: "power2.out" }, "-=0.5")
        .set(card2, { pointerEvents: "none" }, "<");

      // Card 3 -> Card 1
      tl.to(card3, { opacity: 0, y: -20, duration: 0.5, ease: "power2.out" }, "+=3")
        .set(img3, { scale: 1.05 }) // reset image scale
        .fromTo(card1,
          { opacity: 0, y: 20, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, pointerEvents: "auto", duration: 0.6, ease: "power2.out" },
          "-=0.5"
        )
        .to(img1, { scale: 1, duration: 1.0, ease: "power2.out" }, "-=0.5")
        .set(card3, { pointerEvents: "none" }, "<");
    });

    return () => ctx.revert();
  }, []);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Tribute Section
      const tributeSection = tributeSectionRef.current;
      if (tributeSection) {
        gsap.set(tributeLogoRef.current, { opacity: 0, y: 30 });
        gsap.set(tributeQuoteRef.current, { opacity: 0, y: 30 });
        gsap.set(tributeHeadingRef.current, { opacity: 0, y: 30 });
        gsap.set(tributeDescRef.current, { opacity: 0, y: 30 });

        const tributeTl = gsap.timeline({
          scrollTrigger: {
            trigger: tributeSection,
            start: "top 80%",
            end: "bottom 90%",
            toggleActions: "play none none reverse",
          }
        });

        tributeTl
          .to(tributeLogoRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
          .to(tributeQuoteRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to(tributeHeadingRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to(tributeDescRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }

      // 2. Signature Weaves Section
      const weavesSection = weavesSectionRef.current;
      if (weavesSection) {
        gsap.set(weavesEyebrowRef.current, { opacity: 0, y: 30 });
        gsap.set(weavesHeadingRef.current, { opacity: 0, y: 30 });
        gsap.set(weavesDividerRef.current, { opacity: 0, scaleX: 0 });
        gsap.set(weavesDescRef.current, { opacity: 0, y: 30 });
        gsap.set([weavesCard1Ref.current, weavesCard2Ref.current, weavesCard3Ref.current], { opacity: 0, y: 40 });
        gsap.set(weavesBtnRef.current, { opacity: 0, y: 20 });

        const weavesTl = gsap.timeline({
          scrollTrigger: {
            trigger: weavesSection,
            start: "top 80%",
            end: "bottom 90%",
            toggleActions: "play none none reverse",
          }
        });

        weavesTl
          .to(weavesEyebrowRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
          .to(weavesHeadingRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to(weavesDividerRef.current, { opacity: 1, scaleX: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to(weavesDescRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to([weavesCard1Ref.current, weavesCard2Ref.current, weavesCard3Ref.current], {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.25,
            ease: "power3.out"
          }, "-=0.4")
          .to(weavesBtnRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }

      // 3. Legacy Section
      const legacySection = legacySectionRef.current;
      if (legacySection) {
        gsap.set(legacyQuoteRef.current, { opacity: 0, y: 30 });
        gsap.set(legacyImageRef.current, { opacity: 0, y: 40, scale: 0.98 });

        const legacyTl = gsap.timeline({
          scrollTrigger: {
            trigger: legacySection,
            start: "top 80%",
            end: "bottom 90%",
            toggleActions: "play none none reverse",
          }
        });

        legacyTl
          .to(legacyQuoteRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
          .to(legacyImageRef.current, { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out" }, "-=0.5");
      }

      // 4. Founder's Word Section
      const founderSection = founderSectionRef.current;
      if (founderSection) {
        gsap.set(founderEyebrowRef.current, { opacity: 0, y: 30 });
        gsap.set(founderHeadingRef.current, { opacity: 0, y: 30 });
        gsap.set(founderDividerRef.current, { opacity: 0, scaleX: 0 });
        gsap.set(founderDescRef.current, { opacity: 0, y: 30 });
        gsap.set(founderCardRef.current, { opacity: 0, y: 50, scale: 0.98 });
        gsap.set(founderQuoteRef.current, { opacity: 0, y: 20 });
        gsap.set(founderAuthorRef.current, { opacity: 0, y: 20 });

        const founderTl = gsap.timeline({
          scrollTrigger: {
            trigger: founderSection,
            start: "top 85%",
            end: "bottom 90%",
            toggleActions: "play none none reverse",
          }
        });

        founderTl
          .to(founderEyebrowRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
          .to(founderHeadingRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to(founderDividerRef.current, { opacity: 1, scaleX: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to(founderDescRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to(founderCardRef.current, { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out" }, "-=0.5")
          .to(founderQuoteRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to(founderAuthorRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
      }
    }, tributeSectionRef); // scoping context to tributeSectionRef

    return () => ctx.revert();
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      // 1. Start animating front card out
      setIsAnimatingOut(true);

      // 2. Swaps positions when slide out is complete (1.2s)
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % 3);
        setIsAnimatingOut(false);
      }, 1200);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const stackConfig = [
    { x: 0, y: 0, scale: 1, zIndex: 30, opacity: 1, rotate: 0, shadow: true }, // Slot 0 (Front)
    { x: -9, y: -13, scale: 0.928, zIndex: 20, opacity: 0.9, rotate: 3, shadow: true }, // Slot 1 (Middle)
    { x: -12, y: -21, scale: 0.878, zIndex: 10, opacity: 0.9, rotate: 6, shadow: false }, // Slot 2 (Back)
  ];

  const cardIds = [0, 1, 2];
  const getSlot = (id: number) => {
    return (id - activeIndex + 3) % 3;
  };

  return (
    <div className="w-full bg-brand-light text-brand-text font-sans">

      <section className="box-border relative w-full min-h-[560px] h-screen bg-white overflow-hidden">
        <img
          src={heroImg}
          alt="SSK Handlooms Hero"
          onLoad={() => setHeroLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
            heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* ── Mobile/tablet: flex column layout. Desktop lg+: absolute Figma pixel positions ── */}
        <div className="absolute inset-0 flex flex-col justify-center lg:block px-5 sm:px-8 md:px-10 lg:px-0 pt-[90px] sm:pt-[100px] lg:pt-0">

          {/* ESTABLISHED 2008 */}
          <div className="font-satoshi font-normal uppercase text-white whitespace-nowrap text-[11px] sm:text-[13px] lg:text-[14px] leading-[24px] tracking-[3px] sm:tracking-[4px] lg:tracking-[4.8px] mb-2 sm:mb-3 lg:mb-0 lg:absolute lg:w-max lg:h-[24px] lg:left-[40px] lg:top-[279px]">
            ESTABLISHED 2008
          </div>

          {/* Where Every Tread Tells A Story */}
          <h1 className="font-serif font-medium text-white leading-[120%] m-0 text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] mb-3 sm:mb-5 lg:mb-0 lg:absolute lg:w-[582px] lg:h-[154px] lg:left-[40px] lg:top-[307px]">
            Where Every Tread<br />Tells A Story
          </h1>

          {/* Description — hidden on very small mobile, visible sm+ */}
          <p className="hidden sm:block font-satoshi font-normal text-[#EEEEEE] leading-[150%] m-0 text-[14px] md:text-[18px] lg:text-[24px] max-w-[90%] sm:max-w-[420px] md:max-w-[520px] lg:max-w-none mb-5 sm:mb-6 lg:mb-0 lg:absolute lg:w-[570px] lg:h-[108px] lg:left-[40px] lg:top-[477px] lg:flex lg:items-center">
            Authentic Kerala Handlooms for the Modern Soul. Weaving the golden threads of tradition into the fabric of contemporary lifestyle.
          </p>

          {/* Button */}
          <button className="group box-border flex flex-row justify-center items-center px-[28px] sm:px-[36px] lg:px-[40px] py-[12px] sm:py-[14px] lg:py-[16px] w-[200px] sm:w-[240px] lg:w-[278px] h-[44px] sm:h-[50px] lg:h-[58px] border border-[#E3C89B] bg-transparent hover:bg-[#E3C89B] transition-all duration-300 cursor-pointer lg:absolute lg:left-[40px] lg:top-[609px]">
            <span className="font-satoshi font-normal text-[12px] sm:text-[14px] lg:text-[16px] leading-[24px] flex items-center justify-center tracking-[1.6px] uppercase text-[#E3C89B] group-hover:text-[#2c2214] transition-all duration-300 whitespace-nowrap">
              DISCOVER THE WEAVE
            </span>
          </button>
        </div>

        {/* Polaroid Cards Stack — desktop only, hidden on mobile/tablet */}
        <div className="hidden lg:block">
        {cardIds.map((id) => {
          const slot = getSlot(id);
          const cfg = stackConfig[slot];

          let x = cfg.x;
          let y = cfg.y;
          let rotate = cfg.rotate;
          let scale = cfg.scale;

          if (slot === 0) {
            if (isAnimatingOut) {
              x = 180;
              y = -20;
              rotate = 60;
            }
          }

          const textTop = 174; // 236 - 62
          const titleTop = 195; // 174 + 21
          const isTextVisible = slot === 0 || (slot === 1 && isAnimatingOut);

          return (
            <motion.div
              key={id}
              initial={false}
              animate={{
                x: x,
                y: y,
                scale: scale,
                rotate: rotate,
                zIndex: cfg.zIndex,
                opacity: cfg.opacity,
              }}
              transition={{
                duration: isAnimatingOut && slot === 0 ? 1.0 : 0.8,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                top: 433,
                right: 40,
                width: 238,
                height: 236,
                transformOrigin: "bottom left",
              }}
              className={`bg-white box-border ${cfg.shadow ? "shadow-[0px_20px_40px_rgba(0,0,0,0.25)]" : "shadow-[0px_5px_10px_rgba(0,0,0,0.1)]"
                }`}
            >
              <div
                style={{
                  left: "12px",
                  right: "12px",
                  top: "12px",
                  bottom: "70px",
                }}
                className="absolute overflow-hidden bg-gray-100"
              >
                <img
                  src={kasavuImg}
                  alt="Kasavu Saree"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <motion.div
                className="absolute w-[84px] h-[21px] left-[12px] font-sans font-medium text-[14px] leading-[150%] text-[#616161] whitespace-nowrap"
                style={{ top: textTop }}
                animate={{ opacity: isTextVisible ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                BEST SELLER
              </motion.div>
              <motion.div
                className="absolute w-[102px] h-[24px] left-[12px] font-serif font-normal text-[16px] leading-[150%] text-black whitespace-nowrap"
                style={{ top: titleTop }}
                animate={{ opacity: isTextVisible ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                Kasavu Sarees
              </motion.div>
            </motion.div>
          );
        })}
        </div>
      </section>

      {/* 2. Tribute Section */}
      <section
        ref={tributeSectionRef}
        className="relative flex flex-col items-center justify-start sm:justify-center min-h-screen w-full px-4 overflow-hidden pt-[150px] sm:pt-0 pb-[24px] sm:pb-0"
        style={{ background: 'linear-gradient(360deg, #FFFEFA 0%, #F7F4E4 100%)' }}
      >
        {/* Top Image */}
        <img
          ref={tributeLogoRef}
          src={sareeLogo}
          alt="SSK Handlooms"
          className="absolute left-1/2 -translate-x-1/2 top-[40px] w-[136px] h-[116px] object-contain"
          loading="lazy"
          decoding="async"
        />

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
            <blockquote
              ref={tributeQuoteRef}
              className="text-[#462C00] italic font-medium text-[28px] md:text-[44px] leading-[150%] text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "Every thread tells a story of a thousand years, woven with the gold of our ancestors."
            </blockquote>
          </div>

          {/* Text Container */}
          <div className="flex flex-col items-center gap-[24px] max-w-[672px]">
            <h2
              ref={tributeHeadingRef}
              className="text-[#1C1C13] font-medium text-[24px] md:text-[32px] leading-[40px] text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Soul of Kerala
            </h2>
            <p ref={tributeDescRef} className="text-[#534654] font-satoshi font-normal text-[16px] md:text-[20px] leading-[150%] text-center">
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
      <section ref={weavesSectionRef} className="relative flex flex-col items-center pt-[80px] pb-[100px] px-4 bg-[#EDECE3] overflow-hidden w-full">
        <div className="flex flex-col items-center w-full max-w-[1200px] z-10 relative">

          {/* Established */}
          <div ref={weavesEyebrowRef} className="text-[#735C00] font-satoshi font-normal text-[14px] leading-[150%] tracking-[4.8px] uppercase mb-[20px] text-center mt-[24px]">
            ESTABLISHED 2014
          </div>

          {/* Heading */}
          <h2
            ref={weavesHeadingRef}
            className="text-[#43252F] font-medium text-[36px] md:text-[54px] leading-[120%] text-center max-w-[758px] mb-[40px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Signature Weaves, Curated <span className="italic font-normal">For Every Generation</span>
          </h2>

          {/* Divider */}
          <div ref={weavesDividerRef} className="relative flex justify-center items-center w-full max-w-[896px] mb-[32px]">
            <div
              className="absolute inset-x-0 h-[1px]"
              style={{ background: 'linear-gradient(90deg, rgba(233, 195, 73, 0) 0%, #E9C349 50%, rgba(233, 195, 73, 0) 100%)' }}
            />
            <div className="relative flex justify-center items-center w-[30px] h-[15px] bg-[#EDECE3]">
              <div className="w-[5.5px] h-[5.5px] bg-[#735C00] rotate-45" />
            </div>
          </div>

          {/* Subtext */}
          <p ref={weavesDescRef} className="text-[#534654] font-satoshi font-normal text-[16px] md:text-[20px] leading-[150%] text-center max-w-[596px] mb-[64px]">
            Authentic Kerala handloom collections for men, women and kids. Crafted with tradition, woven with care.
          </p>

          {/* Collections List */}
          <div className="flex flex-col items-center w-full gap-[40px] mb-[80px]">

            {/* Women's Card */}
            <div ref={weavesCard1Ref} className="w-full max-w-[1000px] h-auto lg:h-[178px] bg-[#FBFBF8] border-[4px] border-[#FFFFFF] rounded-[40px] flex flex-col lg:flex-row items-center justify-between p-6 lg:p-0 lg:px-[32px] shadow-sm relative overflow-visible">
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
                <p className="text-[#1A0D1C] font-normal text-[14px] lg:text-[16px] leading-[150%] max-w-[441px] font-satoshi">
                  Timeless sarees, set mundu, pavada, dhavani sets, churidhar, tops and dupattas - woven for every celebration
                </p>
              </div>

              {/* Right Placeholder to maintain centering */}
              <div className="hidden lg:block w-[235px] flex-shrink-0" />

              {/* Right Decorative Polaroid Stack */}
              <div className="hidden xl:block absolute right-[-10px] top-[-70px] z-50 pointer-events-none origin-center scale-[1.05]">
                <div className="relative w-[238px] h-[236px]">
                  <div className="absolute top-0 left-0 w-[238px] h-[236px] bg-[#FFFFFF] rounded-[20px] rotate-[14.65deg] flex justify-center items-center shadow-md">
                    <div className="w-[230px] h-[180px] bg-gray-100 rounded-[16px] overflow-hidden -mt-[14px]">
                      <img src={kasavuImg} className="w-full h-full object-cover" alt="" loading="lazy" decoding="async" />
                    </div>
                  </div>

                  <div className="absolute top-[9.55px] left-[0.27px] w-[238px] h-[236px] bg-[#FFFFFF] rounded-[20px] rotate-[8.28deg] flex justify-center items-center shadow-lg">
                    <div className="w-[230px] h-[180px] bg-gray-100 rounded-[16px] overflow-hidden -mt-[14px]">
                      <img src={kasavuImg} className="w-full h-full object-cover" alt="" loading="lazy" decoding="async" />
                    </div>
                  </div>

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
            <div ref={weavesCard2Ref} className="w-full max-w-[1000px] h-auto lg:h-[178px] bg-[#FBFBF8] border-[4px] border-[#FFFFFF] rounded-[40px] flex flex-col lg:flex-row items-center justify-between p-6 lg:p-0 lg:px-[32px] shadow-sm relative">
              <div className="w-[235px] h-[116px] bg-[#FFFFFF] rounded-[16px] p-[8px] flex-shrink-0 mb-4 lg:mb-0 shadow-xs">
                <div className="w-[219px] h-[100px] bg-gray-100 rounded-[12px] overflow-hidden relative">
                  <img src={manImg} className="absolute w-full h-full object-cover object-top" alt="Men" loading="lazy" decoding="async" />
                </div>
              </div>

              <div className="flex flex-col items-center flex-1 px-4 text-center z-10">
                <h3 className="text-[#231226] font-medium text-[20px] lg:text-[24px] leading-[120%] mb-[12px]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Men’s Ethnic Collections
                </h3>
                <p className="text-[#1A0D1C] font-normal text-[14px] lg:text-[16px] leading-[150%] max-w-[441px] font-satoshi">
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
            <div ref={weavesCard3Ref} className="w-full max-w-[1000px] h-auto lg:h-[178px] bg-[#FBFBF8] border-[4px] border-[#FFFFFF] rounded-[40px] flex flex-col lg:flex-row items-center justify-between p-6 lg:p-0 lg:px-[32px] shadow-sm relative">
              <div className="w-[235px] h-[116px] bg-[#FFFFFF] rounded-[16px] p-[8px] flex-shrink-0 mb-4 lg:mb-0 shadow-xs">
                <div className="w-[219px] h-[100px] bg-gray-100 rounded-[12px] overflow-hidden relative">
                  <img src={image22} className="absolute w-full h-full object-cover object-top" alt="Kids Fabric" loading="lazy" decoding="async" />
                </div>
              </div>

              <div className="flex flex-col items-center flex-1 px-4 text-center z-10">
                <h3 className="text-[#231226] font-medium text-[20px] lg:text-[24px] leading-[120%] mb-[12px]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Kid’s Traditional Collections
                </h3>
                <p className="text-[#1A0D1C] font-normal text-[14px] lg:text-[16px] leading-[150%] max-w-[441px] font-satoshi">
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
          <div ref={weavesBtnRef} className="flex justify-center w-full">
            <a href="/collections" className="flex justify-center items-center w-[272px] h-[60px] border border-[#735C00] hover:bg-[#735C00] transition-colors group bg-transparent">
              <span className="text-[#735C00] group-hover:text-[#EDECE3] text-[16px] font-medium leading-[160%] tracking-[1px] uppercase font-satoshi">
                DISCOVER THE WEAVE
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Circular Collections Layout with Section 5 Reveal */}
      <CircularImageReveal images={circleImages}>
        {/* 5. Full Width Banner - Traditions (Revealed from Center) */}
        <div className="relative w-full h-full bg-[#FFFFFF]">
          <div className="absolute inset-0 w-full h-full">
            <img
              src={traditionsImg}
              alt="Traditional Kerala"
              onLoad={() => setTraditionsLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
                traditionsLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
              loading="lazy" decoding="async"
            />
          </div>

          {/* Precise Figma Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))' }}
          />

          {/* Top Left Heading */}
          <div className="absolute top-[40px] sm:top-[80px] lg:top-[120px] left-[20px] sm:left-[40px] lg:left-[80px] right-[20px] sm:right-auto z-10 max-w-[693px]">
            <h2
              className="banner-title text-[#FFFFFF] text-[24px] sm:text-[36px] md:text-[52px] lg:text-[64px] font-medium leading-[120%]"
              style={{ fontFamily: "'Playfair Display', serif", opacity: 0 }}
            >
              Some Traditions Are<br />
              Worn. Others Are <span className="italic">Lived.</span>
            </h2>
          </div>

          {/* Bottom Right Quote and Button */}
          <div className="banner-content absolute bottom-[40px] sm:bottom-[80px] left-[20px] sm:left-auto right-[20px] sm:right-[40px] lg:right-[80px] z-10 w-auto max-w-[90%] sm:max-w-[450px] md:max-w-[520px] lg:max-w-[570px]" style={{ opacity: 0 }}>
            <p className="text-[#FFFFFF] font-normal text-[13px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-[150%] mb-[16px] sm:mb-[24px] lg:mb-[32px] font-satoshi opacity-95">
              "Born from the rich cultural roots of Kerala, SSK Handlooms is more than a brand - It is a commitment to preserve the art of handloom weaving and keep our traditions alive. From the looms of skilled artisans to the celebrations of today, we bring you authenticity you can feel."
            </p>
            <a
              href="/story"
              className="box-border flex justify-center items-center px-[28px] sm:px-[40px] py-[12px] sm:py-[16px] w-[200px] sm:w-[243px] h-[48px] sm:h-[58px] border border-[#FFFFFF] bg-transparent text-[#FFFFFF] text-[14px] sm:text-[16px] font-normal tracking-[1.6px] uppercase hover:bg-white hover:text-[#1A0D1C] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-satoshi pointer-events-auto whitespace-nowrap"
            >
              KNOW OUR STORY
            </a>
          </div>
        </div>
      </CircularImageReveal>

      <section ref={legacySectionRef} className="w-full bg-[#fdfcf7] py-14 md:py-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <blockquote ref={legacyQuoteRef} className="font-['Playfair_Display'] italic text-center text-[#462C00] text-3xl md:text-5xl lg:text-[44px] font-medium leading-[1.5] max-w-[810px] mb-12 md:mb-16">            &ldquo;Every weave carries a legacy. Every<br />
            thread connects generations.&rdquo;
          </blockquote>


          <div ref={legacyImageRef} className="relative w-full max-w-[520px] md:max-w-[560px] mx-auto" style={{ aspectRatio: '560/646' }}>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-[#735C00] opacity-30 pointer-events-none" />

            <div className="w-full h-full overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] rounded-xs md:rounded-sm">
              <img src={image22Asset} alt="Traditional Loom Weaving" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b border-r border-[#735C00] opacity-30 pointer-events-none" />
          </div>
        </div>
      </section>

      <StaggeredCheckerboardGrid />
      <FestiveComboSection />

      {/* 9. Founder's Word (Image 28) */}
      <section ref={founderSectionRef} className="w-full bg-[#fdfcf7] py-16 md:py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-[1040px] mx-auto flex flex-col items-center">
          <div className="text-center max-w-[784px] mx-auto mb-12">
            <div ref={founderEyebrowRef} className="text-[14px] uppercase tracking-[4.8px] text-[#735C00] mb-4 font-normal font-satoshi leading-[150%]">
              A WORD FROM OUR FOUNDER
            </div>
            
            <h2
              ref={founderHeadingRef}
              className="text-3xl md:text-5xl lg:text-[54px] text-[#43252F] font-medium leading-[120%] max-w-[758px] mx-auto mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every Thread Carries A Story<br className="hidden sm:inline" /> Worth <span className="italic">Preserving</span>
            </h2>
            
            {/* Figma Specification Divider */}
            <div ref={founderDividerRef} className="relative flex justify-center items-center w-full max-w-[896px] mx-auto my-6">
              <div
                className="absolute inset-x-0 h-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(233,195,73,0) 0%, #E9C349 50%, rgba(233,195,73,0) 100%)",
                }}
              />
              <div className="relative flex justify-center items-center w-[29.97px] h-[15px] bg-[#fdfcf7]">
                <div className="w-[5.26px] h-[5.84px] bg-[#735C00] rotate-45" />
              </div>
            </div>

            <p ref={founderDescRef} className="text-[#534654] font-normal text-base md:text-[20px] leading-[150%] max-w-[784px] mx-auto font-satoshi">
              Behind every weave lies the dedication of skilled artisans, the richness of our heritage, and a promise to create pieces that will be cherished for generations to come.
            </p>
          </div>

          {/* Figma-Spec Card: 1040px width, 6px border, shadow, 32px outer radius */}
          <div ref={founderCardRef} className="w-full max-w-[1040px] mx-auto bg-white border-[6px] border-white rounded-[32px] shadow-[0px_4px_44px_rgba(115,92,0,0.26)] overflow-hidden">
            <div className="relative w-full h-[450px] md:h-[589px] rounded-[26px] overflow-hidden">
              <img
                src={image28Asset}
                alt="Krishnaprasad, CEO & Creative Director"
                onLoad={() => setCeoLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover object-top md:object-center transition-all duration-1000 ease-out ${
                  ceoLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />
              
              <div
                className="absolute inset-x-0 bottom-0 h-2/3 z-10 flex flex-col justify-end p-8 md:p-16 text-center text-white"
                style={{
                  background:
                    "linear-gradient(179.95deg, rgba(255,255,255,0) 45.46%, rgba(115,92,0,0.5) 79.36%)",
                }}
              >
                <p
                  ref={founderQuoteRef}
                  className="text-xl md:text-3xl lg:text-[32px] text-white font-medium mb-6 leading-[130%] max-w-[871px] mx-auto"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  “True elegance is never announced. It is felt in every weave, every detail, and every moment it becomes part of.”
                </p>
                <div ref={founderAuthorRef} className="text-base md:text-[20px] text-[#EEEEEE] font-normal leading-[150%] max-w-[342px] mx-auto font-satoshi">
                  Krishnaprasad, CEO & Creative Director
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={testimonialSectionRef}
        className="relative w-full bg-[#EDECE3] flex flex-col justify-center items-center py-16 md:py-24 box-border"
      >
        <div className="w-full max-w-[1040px] mx-auto flex flex-col items-center justify-center relative">
          
          {/* Section Header */}
          <div
            ref={testimonialHeaderRef}
            className="text-center max-w-[784px] mx-auto w-full mb-8 flex-shrink-0"
          >
            <div className="text-[14px] uppercase tracking-[4.8px] text-[#735C00] mb-4 font-normal font-satoshi leading-[150%] eyebrow-label">
              EXPERIENCE
            </div>
            
            <h2
              className="text-3xl md:text-5xl lg:text-[54px] text-[#43252F] font-medium leading-[120%] max-w-[758px] mx-auto mb-6 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Our Clients Are <span className="italic font-light">Saying</span>
            </h2>

            {/* Figma Specification Divider */}
            <div className="relative flex justify-center items-center w-full max-w-[896px] mx-auto my-6">
              <div
                className="absolute inset-x-0 h-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(233,195,73,0) 0%, #E9C349 50%, rgba(233,195,73,0) 100%)",
                }}
              />
              <div className="relative flex justify-center items-center w-[29.97px] h-[15px] bg-[#EDECE3]">
                <div className="w-[5.26px] h-[5.84px] bg-[#735C00] rotate-45" />
              </div>
            </div>

            <p className="text-[#534654] font-normal text-base md:text-[20px] leading-[150%] max-w-[596px] mx-auto font-satoshi text-center description-text">
              Real stories from families who trusted us to be part of their most cherished moments.
            </p>
          </div>

          {/* Cards Stacking Area */}
          <div className="relative w-full max-w-[920px] h-[640px] sm:h-[520px] md:h-[400px] flex items-center justify-center flex-grow">
            
            {/* Testimonial Card 1 */}
            <div
              ref={card1Ref}
              className="absolute w-full bg-[#FBFBF8] border-[4px] border-white rounded-[32px] p-6 lg:p-8 flex flex-col md:flex-row gap-8 items-center max-w-[920px] md:h-[400px] box-border"
            >
              <div className="w-full md:w-[350px] h-[180px] sm:h-[230px] md:h-[350px] shrink-0 overflow-hidden rounded-[18px] sm:rounded-[22px] md:rounded-[24px] bg-white">
                <img
                  src={image29Asset}
                  alt="Malabar Silks Boutique"
                  className="w-full h-full object-cover object-center testimonial-main-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="flex-grow flex flex-col justify-between py-2 pr-2 md:pr-4 h-full box-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#955708] text-white text-[16px] font-normal px-[10px] py-[4px] h-[32px] flex items-center rounded-[8px] font-satoshi">
                    Set Sarees & Set Mundu
                  </span>
                  <span 
                    className="text-[74px] font-serif text-[#462C00] leading-none select-none rotate-180 inline-block transform translate-y-4 quote-icon"
                  >
                    ”
                  </span>
                </div>

                <p className="text-[#534654] font-normal text-sm md:text-[18px] leading-[150%] max-w-[470px] mb-6 font-satoshi testimonial-text">
                  We were looking for a reliable supplier who could consistently deliver authentic Kerala wear without compromising on quality. SSK Handlooms exceeded our expectations. The craftsmanship, finishing, and timely delivery have helped us build strong customer trust in our store.
                </p>

                <div className="flex items-center gap-4 mt-auto author-block">
                  <div className="w-[47px] h-[47px] rounded-full overflow-hidden shrink-0 border-[2px] border-white shadow-[0px_4px_7px_rgba(79,79,79,0.15)] bg-white">
                    <img src={avatar1Img} alt="Michael John" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <div 
                      className="text-lg md:text-[22px] text-[#43252F] font-medium leading-none"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Michael John
                    </div>
                    <div className="bg-[#EEDEC3] text-[#43252F] text-[16px] font-normal px-[8px] py-[2px] rounded-[6px] font-satoshi">
                      Procurement Manager, Malabar Boutique
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div
              ref={card2Ref}
              className="absolute w-full bg-[#FBFBF8] border-[4px] border-white rounded-[32px] p-6 lg:p-8 flex flex-col md:flex-row gap-8 items-center max-w-[920px] md:h-[400px] box-border"
              style={{ opacity: 0 }}
            >
              <div className="w-full md:w-[350px] h-[180px] sm:h-[230px] md:h-[350px] shrink-0 overflow-hidden rounded-[18px] sm:rounded-[22px] md:rounded-[24px] bg-white">
                <img
                  src={image30Asset}
                  alt="Kerala Elegance Boutique"
                  className="w-full h-full object-cover object-center testimonial-main-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="flex-grow flex flex-col justify-between py-2 pr-2 md:pr-4 h-full box-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#955708] text-white text-[16px] font-normal px-[10px] py-[4px] h-[32px] flex items-center rounded-[8px] font-satoshi">
                    Kids Traditional & Pavada
                  </span>
                  <span 
                    className="text-[74px] font-serif text-[#462C00] leading-none select-none rotate-180 inline-block transform translate-y-4 quote-icon"
                  >
                    ”
                  </span>
                </div>

                <p className="text-[#534654] font-normal text-sm md:text-[18px] leading-[150%] max-w-[470px] mb-6 font-satoshi testimonial-text">
                  The kids collection is extremely popular in our showroom. The traditional pavada and dhavani sets are crafted with absolute care. Our customers love the soft handloom fabric and the genuine zari borders. SSK is our top trusted brand.
                </p>

                <div className="flex items-center gap-4 mt-auto author-block">
                  <div className="w-[47px] h-[47px] rounded-full overflow-hidden shrink-0 border-[2px] border-white shadow-[0px_4px_7px_rgba(79,79,79,0.15)] bg-white">
                    <img src={avatar2Img} alt="Priya Lakshmi" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <div 
                      className="text-lg md:text-[22px] text-[#43252F] font-medium leading-none"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Priya Lakshmi
                    </div>
                    <div className="bg-[#EEDEC3] text-[#43252F] text-[16px] font-normal px-[8px] py-[2px] rounded-[6px] font-satoshi">
                      Founder, Kerala Elegance Boutique
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div
              ref={card3Ref}
              className="absolute w-full bg-[#FBFBF8] border-[4px] border-white rounded-[32px] p-6 lg:p-8 flex flex-col md:flex-row gap-8 items-center max-w-[920px] md:h-[400px] box-border"
              style={{ opacity: 0 }}
            >
              <div className="w-full md:w-[350px] h-[180px] sm:h-[230px] md:h-[350px] shrink-0 overflow-hidden rounded-[18px] sm:rounded-[22px] md:rounded-[24px] bg-white">
                <img
                  src={image31Asset}
                  alt="Southern Heritage"
                  className="w-full h-full object-cover object-center testimonial-main-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="flex-grow flex flex-col justify-between py-2 pr-2 md:pr-4 h-full box-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#955708] text-white text-[16px] font-normal px-[10px] py-[4px] h-[32px] flex items-center rounded-[8px] font-satoshi">
                    Men's Ethnic Wear
                  </span>
                  <span 
                    className="text-[74px] font-serif text-[#462C00] leading-none select-none rotate-180 inline-block transform translate-y-4 quote-icon"
                  >
                    ”
                  </span>
                </div>

                <p className="text-[#534654] font-normal text-sm md:text-[18px] leading-[150%] max-w-[470px] mb-6 font-satoshi testimonial-text">
                  SSK Handlooms has redefined traditional clothing for the modern man. Their mundus and kurtas feature a perfect blend of rich heritage and superior comfort. The luxury packaging and authentic feel make it a perfect gifting option.
                </p>

                <div className="flex items-center gap-4 mt-auto author-block">
                  <div className="w-[47px] h-[47px] rounded-full overflow-hidden shrink-0 border-[2px] border-white shadow-[0px_4px_7px_rgba(79,79,79,0.15)] bg-white">
                    <img src={avatar3Img} alt="Devan Nair" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <div 
                      className="text-lg md:text-[22px] text-[#43252F] font-medium leading-none"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Devan Nair
                    </div>
                    <div className="bg-[#EEDEC3] text-[#43252F] text-[16px] font-normal px-[8px] py-[2px] rounded-[6px] font-satoshi">
                      Retail Director, Southern Heritage
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div
            ref={ctaCardRef}
            className="relative w-full max-w-[920px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] border-[4px] sm:border-[5px] md:border-[6px] border-white shadow-[0px_4px_34px_rgba(70,44,0,0.20)] p-6 sm:p-8 md:p-12 text-center flex flex-col items-center justify-center overflow-hidden h-auto min-h-[300px] md:min-h-[360px] box-border mt-10 sm:mt-12 md:mt-16"
            style={{
              background: "linear-gradient(180deg, #462C00 0%, #1F1911 100%)",
            }}
          >
            <h2
              className="text-3xl md:text-5xl lg:text-[54px] text-white font-medium leading-[120%] max-w-3xl mb-4 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Woven For Celebrations<br className="hidden sm:inline" /> That Last <span className="italic font-light">A Lifetime</span>
            </h2>
            <p className="text-[#EEEEEE] font-normal text-sm md:text-[15px] leading-[150%] max-w-[551px] mx-auto mb-6 font-satoshi">
              From timeless kasavu classics to contemporary ethnic essentials, each piece is crafted to honor tradition while embracing modern elegance.
            </p>
            <button className="w-full max-w-[300px] h-[48px] sm:h-[52px] border border-white px-[28px] sm:px-[32px] py-[12px] text-[13px] sm:text-[15px] font-normal tracking-[1.6px] uppercase text-white hover:bg-white hover:text-[#1F1911] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-satoshi flex items-center justify-center cursor-pointer box-border">
              DISCOVER THE COLLECTION
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

