import React from 'react';
import { useCircularAnimation } from '../hooks/useCircularAnimation';

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
      className="relative w-full h-screen bg-[#fdfcf7] overflow-hidden flex items-center justify-center"
    >
      {/* Center Text */}
      <div className="absolute z-10 flex flex-col items-center justify-center text-center select-none pointer-events-none">
        <h2
          className="text-[#43252F] text-[32px] md:text-[44px] lg:text-[54px] font-medium leading-[120%] text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          A Collection for <br/><span className="italic">Everyone</span>
        </h2>
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
