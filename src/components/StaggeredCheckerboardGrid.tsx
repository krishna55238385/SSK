import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image23Asset from "../assets/image23.webp";
import image24Asset from "../assets/image24.webp";
import image25Asset from "../assets/image25.webp";
import image26Asset from "../assets/image26.webp";

gsap.registerPlugin(ScrollTrigger);

export const StaggeredCheckerboardGrid: React.FC = () => {
  const pinRef = useRef<HTMLDivElement>(null);
  
  const [img1Loaded, setImg1Loaded] = React.useState(false);
  const [img2Loaded, setImg2Loaded] = React.useState(false);
  const [img3Loaded, setImg3Loaded] = React.useState(false);
  const [img4Loaded, setImg4Loaded] = React.useState(false);
  
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  const card1ImgRef = useRef<HTMLImageElement>(null);
  const card2ImgRef = useRef<HTMLImageElement>(null);
  const card3ImgRef = useRef<HTMLImageElement>(null);
  const card4ImgRef = useRef<HTMLImageElement>(null);

  const card1TextRef = useRef<HTMLDivElement>(null);
  const card2TextRef = useRef<HTMLDivElement>(null);
  const card3TextRef = useRef<HTMLDivElement>(null);
  const card4TextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop Animation (Medium screens and up)
      mm.add("(min-width: 768px)", () => {
        // Set initial states for desktop
        gsap.set(card1Ref.current, { opacity: 0, filter: "blur(12px)", scale: 1 });
        gsap.set(card1ImgRef.current, { scale: 1.3, yPercent: -15 });
        gsap.set(card1TextRef.current, { opacity: 0, y: 40 });

        gsap.set(card2Ref.current, { opacity: 0, filter: "blur(12px)", scale: 1 });
        gsap.set(card2ImgRef.current, { scale: 1.3, xPercent: 15 });
        gsap.set(card2TextRef.current, { opacity: 0, y: 40 });

        gsap.set(card3Ref.current, { opacity: 0, filter: "blur(12px)", scale: 1 });
        gsap.set(card3ImgRef.current, { scale: 0.85, yPercent: 15 });
        gsap.set(card3TextRef.current, { opacity: 0, y: 40 });

        gsap.set(card4Ref.current, { opacity: 0, filter: "blur(12px)", scale: 1 });
        gsap.set(card4ImgRef.current, { scale: 0.85, xPercent: -15 });
        gsap.set(card4TextRef.current, { opacity: 0, y: 40 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: "+=3200",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          }
        });

        // 1st Card: Fades and blurs in, image zooms out and pans into place
        tl.to(card1Ref.current, { opacity: 1, filter: "blur(0px)", ease: "power2.inOut", duration: 1.5 })
          .to(card1ImgRef.current, { scale: 1, yPercent: 0, ease: "power2.inOut", duration: 1.5 }, "<")
          .to(card1TextRef.current, { opacity: 1, y: 0, ease: "power2.out", duration: 0.8 }, "-=0.6")
          .to({}, { duration: 0.5 }) // Hold

          // 2nd Card: Fades and blurs in on the right
          .to(card2Ref.current, { opacity: 1, filter: "blur(0px)", ease: "power2.inOut", duration: 1.5 })
          .to(card2ImgRef.current, { scale: 1, xPercent: 0, ease: "power2.inOut", duration: 1.5 }, "<")
          .to(card2TextRef.current, { opacity: 1, y: 0, ease: "power2.out", duration: 0.8 }, "-=0.6")
          .to({}, { duration: 0.5 }) // Hold

          // 3rd Card: Fades and blurs in over Card 1. Card 1 fades out slightly and shrinks.
          .to(card1Ref.current, { opacity: 0.25, scale: 0.95, filter: "blur(4px)", ease: "power2.inOut", duration: 1.5 })
          .to(card3Ref.current, { opacity: 1, filter: "blur(0px)", ease: "power2.inOut", duration: 1.5 }, "<")
          .to(card3ImgRef.current, { scale: 1, yPercent: 0, ease: "power2.inOut", duration: 1.5 }, "<")
          .to(card3TextRef.current, { opacity: 1, y: 0, ease: "power2.out", duration: 0.8 }, "-=0.6")
          .to({}, { duration: 0.5 }) // Hold

          // 4th Card: Fades and blurs in over Card 2. Card 2 fades out slightly and shrinks.
          .to(card2Ref.current, { opacity: 0.25, scale: 0.95, filter: "blur(4px)", ease: "power2.inOut", duration: 1.5 })
          .to(card4Ref.current, { opacity: 1, filter: "blur(0px)", ease: "power2.inOut", duration: 1.5 }, "<")
          .to(card4ImgRef.current, { scale: 1, xPercent: 0, ease: "power2.inOut", duration: 1.5 }, "<")
          .to(card4TextRef.current, { opacity: 1, y: 0, ease: "power2.out", duration: 0.8 }, "-=0.6")
          .to({}, { duration: 0.5 }); // Final Hold
      });

      // Mobile Animation (Single column stacking)
      mm.add("(max-width: 767px)", () => {
        // Set initial states for mobile
        gsap.set(card1Ref.current, { opacity: 1, filter: "blur(0px)", scale: 1 });
        gsap.set(card1ImgRef.current, { scale: 1, yPercent: 0 });
        gsap.set(card1TextRef.current, { opacity: 1, y: 0 });

        gsap.set(card2Ref.current, { opacity: 0, filter: "blur(12px)", scale: 1 });
        gsap.set(card2ImgRef.current, { scale: 1.3, xPercent: 15 });
        gsap.set(card2TextRef.current, { opacity: 0, y: 40 });

        gsap.set(card3Ref.current, { opacity: 0, filter: "blur(12px)", scale: 1 });
        gsap.set(card3ImgRef.current, { scale: 0.85, yPercent: 15 });
        gsap.set(card3TextRef.current, { opacity: 0, y: 40 });

        gsap.set(card4Ref.current, { opacity: 0, filter: "blur(12px)", scale: 1 });
        gsap.set(card4ImgRef.current, { scale: 1.3, xPercent: -15 });
        gsap.set(card4TextRef.current, { opacity: 0, y: 40 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: "+=2400",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          }
        });

        // 2nd Card stacks over 1st Card
        tl.to(card1Ref.current, { opacity: 0.25, scale: 0.95, filter: "blur(4px)", ease: "power2.inOut", duration: 1.5 })
          .to(card2Ref.current, { opacity: 1, filter: "blur(0px)", ease: "power2.inOut", duration: 1.5 }, "<")
          .to(card2ImgRef.current, { scale: 1, xPercent: 0, ease: "power2.inOut", duration: 1.5 }, "<")
          .to(card2TextRef.current, { opacity: 1, y: 0, ease: "power2.out", duration: 0.8 }, "-=0.6")
          .to({}, { duration: 0.5 }) // Hold

          // 3rd Card stacks over 2nd Card
          .to(card2Ref.current, { opacity: 0.25, scale: 0.95, filter: "blur(4px)", ease: "power2.inOut", duration: 1.5 })
          .to(card3Ref.current, { opacity: 1, filter: "blur(0px)", ease: "power2.inOut", duration: 1.5 }, "<")
          .to(card3ImgRef.current, { scale: 1, yPercent: 0, ease: "power2.inOut", duration: 1.5 }, "<")
          .to(card3TextRef.current, { opacity: 1, y: 0, ease: "power2.out", duration: 0.8 }, "-=0.6")
          .to({}, { duration: 0.5 }) // Hold

          // 4th Card stacks over 3rd Card
          .to(card3Ref.current, { opacity: 0.25, scale: 0.95, filter: "blur(4px)", ease: "power2.inOut", duration: 1.5 })
          .to(card4Ref.current, { opacity: 1, filter: "blur(0px)", ease: "power2.inOut", duration: 1.5 }, "<")
          .to(card4ImgRef.current, { scale: 1, xPercent: 0, ease: "power2.inOut", duration: 1.5 }, "<")
          .to(card4TextRef.current, { opacity: 1, y: 0, ease: "power2.out", duration: 0.8 }, "-=0.6")
          .to({}, { duration: 0.5 }); // Final Hold
      });

      // Exit Animation (Scrolled out)
      const exitTl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "bottom bottom",
          end: () => `+=${window.innerHeight * 0.4}`, // 40vh of scroll
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      exitTl.to([card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current], {
        scale: 0.96,
        opacity: 0.3,
        ease: "power2.inOut"
      })
      .to(pinRef.current, {
        backgroundColor: "#0d0a08",
        ease: "none"
      }, 0);
    }, pinRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pinRef} className="relative w-full h-screen overflow-hidden bg-[#fdfcf7] flex flex-col justify-between">
      {/* Sticky Theme Header */}
      <div className="w-full max-w-6xl mx-auto px-6 md:px-16 lg:px-24 pt-8 md:pt-12 pb-6 flex flex-col items-start z-50">
        <div className="text-xs uppercase tracking-[0.2em] text-[#735C00] mb-2 font-medium font-satoshi">
          THE ART OF THE WEAVER
        </div>
        <h2 className="text-2xl md:text-[32px] font-serif text-[#1C1C13] font-medium leading-[1.25] mb-3">
          Authentic Weaves, Modern <span className="italic">Silhouettes</span>
        </h2>
        <p className="text-[#534654] font-normal text-sm md:text-base max-w-2xl leading-relaxed font-satoshi">
          Our master weavers in the heart of Kerala use techniques passed down through ten generations. Each piece is a testament to human patience and precision.
        </p>
      </div>

      {/* Card Animation Area */}
      <div className="relative flex-1 w-full bg-[#1C1C13] overflow-hidden">
        {/* Card 1: 01 Finest Yarns */}
        <div
          ref={card1Ref}
          className="absolute left-0 top-0 w-full md:w-1/2 h-full z-10 overflow-hidden origin-center"
        >
          <img
            ref={card1ImgRef}
            src={image23Asset}
            alt="Finest Yarns"
            onLoad={() => setImg1Loaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              img1Loaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute inset-0 bg-black/45" />
          <div
            ref={card1TextRef}
            className="absolute bottom-0 left-0 right-0 px-6 md:px-8 lg:px-12 pb-8 md:pb-12 lg:pb-16 text-white z-10 flex flex-col items-start gap-2 md:gap-3 lg:gap-4"
          >
            <div className="font-serif text-6xl md:text-8xl lg:text-[130px] text-white/30 font-normal leading-none select-none">
              01
            </div>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-[44px] text-white font-normal leading-none">
              Finest Yarns
            </h3>
            <p className="text-white/90 font-normal text-base md:text-lg lg:text-xl max-w-sm lg:max-w-md leading-relaxed font-satoshi">
              Carefully selected for exceptional quality and comfort.
            </p>
          </div>
        </div>

        {/* Card 2: 02 Handloom Weaving */}
        <div
          ref={card2Ref}
          className="absolute left-0 md:left-1/2 top-0 w-full md:w-1/2 h-full z-20 overflow-hidden origin-center"
        >
          <img
            ref={card2ImgRef}
            src={image24Asset}
            alt="Handloom Weaving"
            onLoad={() => setImg2Loaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              img2Loaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute inset-0 bg-black/45" />
          <div
            ref={card2TextRef}
            className="absolute bottom-0 left-0 right-0 px-6 md:px-8 lg:px-12 pb-8 md:pb-12 lg:pb-16 text-white z-10 flex flex-col items-start gap-2 md:gap-3 lg:gap-4"
          >
            <div className="font-serif text-6xl md:text-8xl lg:text-[130px] text-white/30 font-normal leading-none select-none">
              02
            </div>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-[44px] text-white font-normal leading-none">
              Handloom Weaving
            </h3>
            <p className="text-white/90 font-normal text-base md:text-lg lg:text-xl max-w-sm lg:max-w-md leading-relaxed font-satoshi">
              Expertly woven by skilled artisans with generations of craftsmanship.
            </p>
          </div>
        </div>

        {/* Card 3: 03 Perfect Finishing */}
        <div
          ref={card3Ref}
          className="absolute left-0 top-0 w-full md:w-1/2 h-full z-30 overflow-hidden origin-center"
        >
          <img
            ref={card3ImgRef}
            src={image25Asset}
            alt="Perfect Finishing"
            onLoad={() => setImg3Loaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              img3Loaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute inset-0 bg-black/45" />
          <div
            ref={card3TextRef}
            className="absolute bottom-0 left-0 right-0 px-6 md:px-8 lg:px-12 pb-8 md:pb-12 lg:pb-16 text-white z-10 flex flex-col items-start gap-2 md:gap-3 lg:gap-4"
          >
            <div className="font-serif text-6xl md:text-8xl lg:text-[130px] text-white/30 font-normal leading-none select-none">
              03
            </div>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-[44px] text-white font-normal leading-none">
              Perfect Finishing
            </h3>
            <p className="text-white/90 font-normal text-base md:text-lg lg:text-xl max-w-sm lg:max-w-md leading-relaxed font-satoshi">
              Every detail thoughtfully refined for timeless elegance.
            </p>
          </div>
        </div>

        {/* Card 4: 04 Made for Moments */}
        <div
          ref={card4Ref}
          className="absolute left-0 md:left-1/2 top-0 w-full md:w-1/2 h-full z-40 overflow-hidden origin-center"
        >
          <img
            ref={card4ImgRef}
            src={image26Asset}
            alt="Made for Moments"
            onLoad={() => setImg4Loaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              img4Loaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute inset-0 bg-black/45" />
          <div
            ref={card4TextRef}
            className="absolute bottom-0 left-0 right-0 px-6 md:px-8 lg:px-12 pb-8 md:pb-12 lg:pb-16 text-white z-10 flex flex-col items-start gap-2 md:gap-3 lg:gap-4"
          >
            <div className="font-serif text-6xl md:text-8xl lg:text-[130px] text-white/30 font-normal leading-none select-none">
              04
            </div>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-[44px] text-white font-normal leading-none">
              Made for Moments
            </h3>
            <p className="text-white/90 font-normal text-base md:text-lg lg:text-xl max-w-sm lg:max-w-md leading-relaxed font-satoshi">
              Designed to celebrate life's most meaningful occasions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
