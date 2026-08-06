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
      if (!containerRef.current) return;
      const width = window.innerWidth;
      if (width >= 1024) {
        radius = 292.5; // desktop preserved exactly as it is
        containerRef.current.style.minHeight = ''; // reset on desktop
      } else {
        const cardWidth = width < 768 ? 50 : 64;
        const cardHeight = width < 768 ? 60 : 80;
        const targetGap = 24; // visual gap of approx 20-30px
        
        radius = (imagesCount * (cardWidth + targetGap)) / (2 * Math.PI);
        
        // Ensure the circle is never clipped top/bottom
        const minHeightNeeded = 2 * radius + cardHeight + 80; // 80px buffer (40px top, 40px bottom)
        containerRef.current.style.minHeight = `${minHeightNeeded}px`;
      }
    };
    
    updateRadius();
    let resizeTimeout: number;
    const handleResize = () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        updateRadius();
        updatePositions();
      }, 100);
    };
    window.addEventListener('resize', handleResize);

    // We define these parameters dynamically based on window width
    const holdDuration = window.innerWidth < 768 ? 2.5 : 4;
    const revealDuration = 5;
    const textDuration = 4;
    const totalProgress = imagesCount + holdDuration + revealDuration + textDuration;

    const updatePositions = () => {
      const { progress } = proxy;
      // Cap the positioning progress during the hold phase so the circle remains static once fully formed
      const posProgress = Math.min(imagesCount, progress);
      
      imagesRef.current.forEach((img, i) => {
        if (!img) return;
        
        // Delta represents how far along this specific image is.
        // With E = clamp(delta, 0, 1), image i enters during progress i → i+1.
        const delta = posProgress - i;
        
        // E goes from 0 to 1 as delta goes from 0 to 1.
        // It controls the entrance animation (opacity, scale, radius offset)
        const E = Math.min(1, Math.max(0, delta));
        
        const opacity = E;
        const scale = 0.4 + 0.6 * E;
        
        if (i === 0) {
          // First image starts from a fixed off-circle point (bottom-left)
          // and animates into its circular slot at 90° on the ring.
          const finalAngleDeg = 90;

          if (E < 1) {
            // During entrance: interpolate from a fixed start position
            // to the final circular position.
            let startX = -150;
            let startY = 150;
            if (window.innerWidth < 768) {
              startX = -70;
              startY = 90;
            } else if (window.innerWidth < 1024) {
              startX = -110;
              startY = 120;
            }

            // Final position in cartesian (rotate 90° then translateY(-R)):
            // x = R * sin(90°) = R, y = -R * cos(90°) = 0
            const endX = radius;
            const endY = 0;

            // Ease the interpolation for a smoother arc feel
            const eased = E * E * (3 - 2 * E); // smoothstep
            const currentX = startX + (endX - startX) * eased;
            const currentY = startY + (endY - startY) * eased;
            const currentRot = finalAngleDeg * eased;

            img.style.transform = `translate(-50%, -50%) translate(${currentX}px, ${currentY}px) rotate(${currentRot}deg) scale(${scale})`;
          } else {
            // Once fully placed, use the exact same transform chain as other images
            // so there's no visual discrepancy in the completed circle.
            img.style.transform = `translate(-50%, -50%) rotate(${finalAngleDeg}deg) translateY(-${radius}px) scale(${scale})`;
          }
        } else {
          // Other images enter along the circular trajectory
          const angleDelta = Math.max(0, delta);
          const currentAngleDeg = 90 - (angleDelta * 360 / imagesCount);
          const currentRadius = radius + 60 * (1 - E);

          img.style.transform = `translate(-50%, -50%) rotate(${currentAngleDeg}deg) translateY(-${currentRadius}px) scale(${scale})`;
        }
        
        img.style.opacity = opacity.toString();
        
        // ensure visibility (pointer events only when visible)
        img.style.pointerEvents = E > 0.5 ? 'auto' : 'none';
      });
    };

    // Initial positioning
    updatePositions();

    // Scale scroll distance per breakpoint so each phase has enough scroll room.
    // Mobile gets a shorter distance since hold is shorter (2.5 vs 4).
    const scrollDistance = window.innerWidth < 768
      ? window.innerHeight * 4.5
      : window.innerHeight * 5;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    tl.to(proxy, {
      progress: totalProgress,
      duration: scrollDistance,
      ease: "none",
      onUpdate: () => {
        updatePositions();
        
        // Handle the center reveal and text animations
        if (centerRef && centerRef.current) {
          const { progress } = proxy;
          const revealStart = imagesCount + holdDuration;
          
          // Phase 3: Center Reveal (clip-path circle)
          const revealProgress = Math.max(0, Math.min(1, (progress - revealStart) / revealDuration));
          
          if (revealProgress > 0) {
            centerRef.current.style.opacity = '1';
            // Start at a small circle (0%) and grow to cover the screen (150%)
            const currentRadius = revealProgress * 150;
            centerRef.current.style.clipPath = `circle(${currentRadius}% at 50% 50%)`;
          } else {
            centerRef.current.style.opacity = '0';
            centerRef.current.style.clipPath = `circle(0% at 50% 50%)`;
          }

          // Phase 4: Text Animation inside centerRef children (only after reveal is complete)
          const textStart = revealStart + revealDuration;
          const textProgress = Math.max(0, Math.min(1, (progress - textStart) / textDuration));
          
          const titleEl = centerRef.current.querySelector('.banner-title') as HTMLElement | null;
          const contentEl = centerRef.current.querySelector('.banner-content') as HTMLElement | null;

          if (titleEl && contentEl) {
            if (textProgress > 0) {
              // Staggered title and content fade in
              // Title animates from textProgress 0 to 0.6
              const titleProg = Math.max(0, Math.min(1, textProgress / 0.6));
              const titleOpacity = titleProg;
              const titleY = 20 * (1 - titleProg);
              titleEl.style.opacity = titleOpacity.toString();
              titleEl.style.transform = `translateY(${titleY}px)`;

              // Content animates from textProgress 0.4 to 1.0
              const contentProg = Math.max(0, Math.min(1, (textProgress - 0.4) / 0.6));
              const contentOpacity = contentProg;
              const contentY = 20 * (1 - contentProg);
              contentEl.style.opacity = contentOpacity.toString();
              contentEl.style.transform = `translateY(${contentY}px)`;
            } else {
              // Reset before animation
              titleEl.style.opacity = '0';
              titleEl.style.transform = 'translateY(20px)';
              contentEl.style.opacity = '0';
              contentEl.style.transform = 'translateY(20px)';
            }
          }
        }
      }
    });

    // Refresh ScrollTrigger after all images in this container are loaded
    const imgElements = containerRef.current.querySelectorAll('img');
    let loadedCount = 0;
    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === imgElements.length) {
        ScrollTrigger.refresh();
      }
    };
    imgElements.forEach((img) => {
      if (img.complete) {
        checkAllLoaded();
      } else {
        img.addEventListener('load', checkAllLoaded);
        img.addEventListener('error', checkAllLoaded);
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.clearTimeout(resizeTimeout);
      imgElements.forEach((img) => {
        img.removeEventListener('load', checkAllLoaded);
        img.removeEventListener('error', checkAllLoaded);
      });
      if (containerRef.current) {
        containerRef.current.style.minHeight = '';
      }
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [imagesCount]);

  return { containerRef, imagesRef };
};
