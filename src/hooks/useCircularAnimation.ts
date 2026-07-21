import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseCircularAnimationProps {
  imagesCount: number;
  centerRef?: React.RefObject<HTMLElement | null>;
}

export const useCircularAnimation = ({ imagesCount, centerRef }: UseCircularAnimationProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || imagesCount === 0) return;

    const proxy = { progress: 0 };
    
    let radius = 292.5; 
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 768) radius = 150; // mobile
      else if (width < 1024) radius = 220; // tablet
      else radius = 292.5; // desktop
    };
    
    updateRadius();
    window.addEventListener('resize', updateRadius);

    const updatePositions = () => {
      const { progress } = proxy;
      
      imagesRef.current.forEach((img, i) => {
        if (!img) return;
        
        // Delta represents how far along this specific image is
        const delta = progress - i;
        
        // E goes from 0 to 1 as delta goes from -1 to 0.
        // It controls the entrance animation (opacity, scale, radius offset)
        const E = Math.min(1, Math.max(0, delta + 1));
        
        // Angle starts at 90deg (3 o'clock) and decreases (negative) for opposite direction
        const angleDelta = Math.max(0, delta);
        const currentAngleDeg = 90 - (angleDelta * 360 / imagesCount);
        
        // Radius starts larger (R + 60) and shrinks to R as it enters
        const currentRadius = radius + 60 * (1 - E);
        
        const opacity = E;
        const scale = 0.4 + 0.6 * E;
        
        // Using transform for optimal performance
        // First center the image, then rotate it to point outward, then translate it outward
        img.style.transform = `translate(-50%, -50%) rotate(${currentAngleDeg}deg) translateY(-${currentRadius}px) scale(${scale})`;
        img.style.opacity = opacity.toString();
        
        // ensure visibility (pointer events only when visible)
        img.style.pointerEvents = E > 0.5 ? 'auto' : 'none';
      });
    };

    // Initial positioning
    updatePositions();

    const tl = gsap.to(proxy, {
      progress: imagesCount + 6, // Extended progress for the center reveal
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * Math.max(2, (imagesCount + 6) * 0.3)}`, 
        scrub: true,
        pin: true,
      },
      onUpdate: () => {
        updatePositions();
        
        // Handle the center reveal using clip-path
        if (centerRef && centerRef.current) {
          const revealStart = imagesCount - 1;
          const revealProgress = Math.max(0, Math.min(1, (proxy.progress - revealStart) / 7));
          
          if (revealProgress > 0) {
            centerRef.current.style.opacity = '1';
            // Start at a small circle (0%) and grow to cover the screen (150%)
            const radius = revealProgress * 150;
            centerRef.current.style.clipPath = `circle(${radius}% at 50% 50%)`;
          } else {
            centerRef.current.style.opacity = '0';
            centerRef.current.style.clipPath = `circle(0% at 50% 50%)`;
          }
        }
      }
    });

    return () => {
      window.removeEventListener('resize', updateRadius);
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [imagesCount]);

  return { containerRef, imagesRef };
};
