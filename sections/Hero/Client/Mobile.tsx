"use client";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import Cursor from "@/components/Client/Cursor";
import PlaySVG from "@/components/SVGComponents/PlaySVG";
import { animate as motionAnimate, inView, stagger } from "motion";

// Type-safe animation function
function animate(elements: Element | Element[] | NodeListOf<Element> | string, keyframes: Record<string, any>, options?: any) {
  // If string selector is provided, query the DOM
  const targetElements = typeof elements === 'string' 
    ? document.querySelectorAll(elements)
    : elements;
  
  return motionAnimate(targetElements, keyframes, options);
}

export default function HeroMobileClient({
  playIntro,
  setPlayIntro,
}: {
  setPlayIntro: Dispatch<SetStateAction<boolean>>;
  playIntro: boolean;
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      // Initial animation when the component mounts
      animate(
        overlayRef.current!,
        { opacity: [1, 0.6] },
        { duration: 1.5, easing: "ease-out" }
      );

      // Animate in the hero elements
      setTimeout(() => {
        // Get the elements directly instead of using string selectors
        const titleElements = document.querySelectorAll(".hero-title");
        const subtitleElements = document.querySelectorAll(".hero-subtitle");
        const ctaElements = document.querySelectorAll(".hero-cta");
        const playButtonElements = document.querySelectorAll(".play-button");
        
        // Animate title
        animate(
          titleElements,
          { opacity: [0, 1], y: [50, 0] },
          { duration: 0.8, easing: "ease-out" }
        );

        // Animate subtitle
        animate(
          subtitleElements,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.8, delay: 0.2, easing: "ease-out" }
        );

        // Animate CTA
        animate(
          ctaElements,
          { opacity: [0, 1], scale: [0.9, 1] },
          { duration: 0.6, delay: 0.4, easing: "ease-out" }
        );

        // Floating animation for the play button
        const floatAnimation = animate(
          playButtonElements,
          { y: [0, -10, 0] },
          { duration: 2, repeat: Infinity, easing: "ease-in-out" }
        );

        return () => {
          if (floatAnimation && typeof floatAnimation.cancel === 'function') {
            floatAnimation.cancel();
          }
        };
      }, 100); // Small delay to ensure DOM is ready
    }
  }, []);

  // Toggle play state with animation
  const handlePlayToggle = () => {
    const playButtonElements = document.querySelectorAll(".play-button");
    
    animate(
      playButtonElements,
      { scale: [1, 1.2, 1] },
      { duration: 0.4, easing: "ease-in-out" }
    );
    
    setPlayIntro((prev) => !prev);
  };

  return (
    <div
      ref={heroRef}
      className="absolute inset-0 grid place-items-center"
      onClick={handlePlayToggle}
    >
      <div className="relative size-full md:hidden">
        <video className="size-full object-cover" autoPlay muted loop>
          <source src="/Hero/elementismp4.mp4" type="video/mp4"></source>
        </video>
        
        {/* Overlay with gradient */}
        <div 
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"
        ></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
          <h1 className="hero-title text-4xl font-bold mb-4 text-center opacity-0">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2e493c] to-[#b77e47]">
              Gaurik Group
            </span>
          </h1>
          <p className="hero-subtitle text-lg text-center mb-8 max-w-xs opacity-0">
            Pioneering retail excellence across India with premium global brands
          </p>
          <div className="hero-cta opacity-0">
            <div className="px-6 py-3 rounded-full bg-[#2e493c]/20 backdrop-blur-sm border border-[#b77e47]/30 text-sm font-medium text-[#c9d1be]">
              Discover Our Journey
            </div>
          </div>
        </div>
      </div>
      
      <div className="play-button">
        <Cursor
          renderCursor={!playIntro}
          isMobile={true}
          className="absolute grid aspect-square h-14 place-items-center rounded-full bg-gradient-to-r from-[#2e493c] to-[#b77e47] shadow-lg shadow-[#b77e47]/30"
        >
          <PlaySVG />
        </Cursor>
      </div>
    </div>
  );
}
