import React from 'react';
import { useCircularAnimation } from '../hooks/useCircularAnimation';
import logoImg from '../assets/logo.webp';

interface CircularImageRevealProps {
  images: string[];
  children?: React.ReactNode;
}

export const CircularImageReveal: React.FC<CircularImageRevealProps> = ({ images, children }) => {
  const centerRef = React.useRef<HTMLDivElement>(null);
  const { containerRef, imagesRef } = useCircularAnimation({
    imagesCount: images.length,
    centerRef
  });

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative w-full h-dvh overflow-hidden flex items-center justify-center"
      style={{ background: 'radial-gradient(circle at center, #FFFEFA 0%, #F5F1E1 100%)' }}
    >
      {/* Corner Accents */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 w-12 h-12 md:w-16 md:h-16 border-t border-l border-[#735C00]/15 pointer-events-none" />
      <div className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 border-t border-r border-[#735C00]/15 pointer-events-none" />
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-12 h-12 md:w-16 md:h-16 border-b border-l border-[#735C00]/15 pointer-events-none" />
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-12 h-12 md:w-16 md:h-16 border-b border-r border-[#735C00]/15 pointer-events-none" />

      {/* Background Rotating Watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img
          src={logoImg}
          alt=""
          className="w-[260px] h-[260px] md:w-[480px] md:h-[480px] opacity-[0.035] object-contain"
          style={{ animation: 'spin 120s linear infinite' }}
        />
      </div>

      {/* Center Text */}
      <div className="absolute z-10 flex flex-col items-center justify-center text-center select-none pointer-events-none">
        <h2
          className="text-[#43252F] text-[32px] md:text-[44px] lg:text-[54px] font-medium leading-[120%] text-center mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          A Collection for <br/><span className="italic">Everyone</span>
        </h2>
        {/* Decorative Gold Accent */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-[1px] bg-[#735C00]/25" />
          <div className="w-1.5 h-1.5 bg-[#735C00]/35 rotate-45" />
          <div className="w-8 h-[1px] bg-[#735C00]/25" />
        </div>
      </div>

      {/* Images */}
      {images.map((src, index) => (
        <img
          key={index}
          ref={(el) => {
            if (imagesRef.current) {
              imagesRef.current[index] = el;
            }
          }}
          src={src}
          alt={`Collection item ${index + 1}`}
          loading="lazy"
          decoding="async"
          className={`
            absolute top-1/2 left-1/2 
            object-cover 
            rounded-[12px] md:rounded-[16px]
            shadow-md
            w-[50px] h-[60px] 
            md:w-[64px] md:h-[80px] 
            lg:w-[80px] lg:h-[100px]
            bg-white
            will-change-transform
          `}
          style={{
            opacity: 0,
            transform: 'translate(-50%, -50%) scale(0.7)'
          }}
        />
      ))}

      {/* The expanding center section */}
      {children && (
        <div
          ref={centerRef}
          className="absolute inset-0 w-full h-full z-30 flex items-center justify-center overflow-hidden will-change-transform"
          style={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)' }}
        >
          {children}
        </div>
      )}
    </section>
  );
};
