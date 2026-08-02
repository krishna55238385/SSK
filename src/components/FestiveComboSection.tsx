import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image27Asset from "../assets/image27.webp";

gsap.registerPlugin(ScrollTrigger);

export const FestiveComboSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [bgLoaded, setBgLoaded] = React.useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. ENTRY TIMELINE: Starts when the section enters the screen from the bottom and completes when it hits the top.
      // This overlaps with the exit of the previous section, creating a continuous motion story.
      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",   // Starts when the top of the section enters the bottom of the viewport
          end: "top top",        // Ends when the top of the section reaches the top of the viewport
          scrub: 1.2,            // Smooth catch-up momentum
          invalidateOnRefresh: true,
        }
      });

      entryTl.fromTo(bgRef.current,
        { scale: 1.15, opacity: 0.4 },
        { scale: 1.08, opacity: 0.7, ease: "none" }
      )
      .fromTo(overlayRef.current,
        { opacity: 0.8 },
        { opacity: 0.5, ease: "none" },
        0
      )
      .fromTo(eyebrowRef.current,
        { opacity: 0, y: 50 },
        { opacity: 0.3, y: 20, ease: "power2.out" },
        0.2
      )
      .fromTo(headingRef.current,
        { opacity: 0, y: 50 },
        { opacity: 0.3, y: 20, ease: "power2.out" },
        0.3
      )
      .fromTo(descRef.current,
        { opacity: 0, y: 50 },
        { opacity: 0.3, y: 20, ease: "power2.out" },
        0.4
      )
      .fromTo(buttonRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 0.3, scale: 0.9, y: 20, ease: "power2.out" },
        0.5
      );

      // 2. PIN TIMELINE: Pins the section at the top of the viewport and performs the final premium reveals.
      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",      // Pins when the top of the section reaches the top of the viewport
          end: "+=1500",         // Pins for 1500px of scroll height
          scrub: 1.2,            // Smooth catch-up momentum
          pin: true,             // Enable pinning to fill the screen while animating
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Background Image zoom and fade reveal
      pinTl.fromTo(
        bgRef.current,
        { scale: 1.08, opacity: 0.7 },
        { scale: 1.0, opacity: 1.0, ease: "power3.out", duration: 2.0 },
        0
      );

      // Dark Overlay fade to make the image fully visible and vibrant
      pinTl.fromTo(
        overlayRef.current,
        { opacity: 0.5 },
        { opacity: 0.35, ease: "power3.out", duration: 2.0 },
        0
      );

      // Animate text elements sequential reveal using fromTo with premium easings
      pinTl.fromTo(
        eyebrowRef.current,
        { opacity: 0.3, y: 20 },
        { opacity: 1.0, y: 0, ease: "power3.out", duration: 1.2 },
        0.6
      )
        .fromTo(
          headingRef.current,
          { opacity: 0.3, y: 20 },
          { opacity: 1.0, y: 0, ease: "power3.out", duration: 1.2 },
          1.0
        )
        .fromTo(
          descRef.current,
          { opacity: 0.3, y: 20 },
          { opacity: 1.0, y: 0, ease: "power3.out", duration: 1.2 },
          1.4
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0.3, scale: 0.9, y: 20 },
          { opacity: 1.0, scale: 1.0, y: 0, ease: "back.out(1.4)", duration: 1.2 },
          1.8
        )
        // Exit phase to transition into Founder section seamlessly
        .to([eyebrowRef.current, headingRef.current, descRef.current, buttonRef.current], {
          opacity: 0,
          y: -40,
          ease: "power3.in",
          duration: 1.0
        }, 3.2)
        .to(bgRef.current, {
          opacity: 0,
          y: -80,
          scale: 0.95,
          ease: "power3.inOut",
          duration: 1.2
        }, 3.2)
        .to(overlayRef.current, {
          opacity: 0,
          ease: "power3.inOut",
          duration: 1.2
        }, 3.2)
        .to(section, {
          backgroundColor: "#fdfcf7", // Dissolve into Founder section background
          ease: "none",
          duration: 1.2
        }, 3.2);
    }, sectionRef);

    // Refresh ScrollTrigger after background image loads to prevent pin-spacing offset bugs
    const bgImg = section.querySelector("img");
    const handleImageLoad = () => {
      ScrollTrigger.refresh();
    };

    if (bgImg) {
      if (bgImg.complete) {
        handleImageLoad();
      } else {
        bgImg.addEventListener("load", handleImageLoad);
        bgImg.addEventListener("error", handleImageLoad);
      }
    }

    return () => {
      ctx.revert();
      if (bgImg) {
        bgImg.removeEventListener("load", handleImageLoad);
        bgImg.removeEventListener("error", handleImageLoad);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#1a1410]"
    >
      {/* Background Image Wrapper for Parallax & Zoom */}
      <div className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none">
        <img
          ref={bgRef}
          src={image27Asset}
          alt="Festive Family Combo Sets"
          onLoad={() => setBgLoaded(true)}
          className={`w-full h-full object-cover object-center will-change-transform transition-opacity duration-1000 ${
            bgLoaded ? "opacity-40" : "opacity-0"
          }`}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Dark Overlay controlled by GSAP */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none z-10 bg-black"
        style={{ opacity: 0.7 }}
      />

      {/* Content Container */}
      <div className="relative z-20 max-w-[960px] mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Eyebrow Label */}
        <div
          ref={eyebrowRef}
          className="text-white text-[14px] font-normal tracking-[4.8px] uppercase font-satoshi mb-[16px] select-none"
        >
          FESTIVE SEASONS
        </div>

        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-white text-[38px] md:text-[64px] font-medium leading-[120%] max-w-[700px] mb-[24px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          “The Joy of Dressing Together”
        </h2>

        {/* Description */}
        <p
          ref={descRef}
          className="text-white text-[16px] md:text-[24px] leading-[150%] max-w-[900px] mb-[40px] font-normal font-satoshi text-white/95"
        >
          Our Family Combo Collections are more than just matching outfits; they are the threads that bind your most precious memories during Onam, Vishu, and weddings.
        </p>

        {/* CTA Button */}
        <button
          ref={buttonRef}
          className="group box-border flex justify-center items-center h-[58px] px-[40px] border border-white bg-transparent text-white text-[14px] font-normal tracking-[1.6px] uppercase hover:bg-white hover:text-black transition-all duration-300 cursor-pointer font-satoshi"
        >
          EXPLORE FAMILY SETS
        </button>
      </div>
    </section>
  );
};
