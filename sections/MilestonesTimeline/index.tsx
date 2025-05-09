"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { animate, stagger, fadeIn, animateScale } from "@/utils/animations";
import { inView } from "motion";

const milestones = [
  { year: "2015", description: "Founded the company with Distribution & Key Accounts" },
  { year: "2016", description: "Started E-commerce with Key Partners" },
  { year: "2017", description: "Expanded portfolio with Retail brands and Fitness equipment" },
  { year: "2019", description: "Opened 10+ stores of Skechers" },
  { year: "2020", description: "Obtained Licensing rights for Guess India" },
  { year: "2021", description: "Opened 20+ stores of Skechers & Guess. Achieved first milestone of 100 Crores turnover as a group" },
  { year: "2023", description: "Acquired the Master Franchisee of Bugatti Shoes" },
  { year: "2024", description: "Will open 10+ new stores and is estimated to achieve a turnover of Rs. 200 Crore" },
];

export default function MilestonesTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Create a stable callback function for the ref that doesn't return anything
  const setMilestoneRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    milestonesRef.current[index] = el;
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      inView(timelineRef.current, () => {
        // Animate timeline line
        const timelineLine = timelineRef.current?.querySelector('.timeline-line');
        if (timelineLine) {
          animate(
            timelineLine,
            { transform: ['scaleY(0)', 'scaleY(1)'] },
            { duration: 1.5 }
          );
        }

        // Animate milestone nodes with stagger
        const milestoneNodes = timelineRef.current?.querySelectorAll('.milestone-node');
        if (milestoneNodes) {
          milestoneNodes.forEach((node, index) => {
            animate(
              node,
              {
                opacity: [0, 1],
                transform: ['scale(0.5)', 'scale(1)']
              },
              { duration: 0.5, delay: 0.15 * index }
            );
          });
        }

        return () => {};
      });
    }

    milestonesRef.current = milestonesRef.current.slice(0, milestones.length);
  }, []);

  const handleMilestoneClick = (index: number) => {
    setActiveIndex(index);

    if (milestonesRef.current[index]) {
      // Use animate directly with transform for the scale effect
      animate(
        milestonesRef.current[index]!,
        { transform: ['scale(1)', 'scale(1.1)', 'scale(1)'] },
        { duration: 0.4 }
      );
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#2a3530] to-[#2e493c] text-[#c9d1be] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#b77e47]/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-[#c9d1be]/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c9d1be] to-[#b77e47]">
            Our Journey Through Time
          </span>
        </h2>

        <div
          ref={timelineRef}
          className="relative flex flex-col items-center"
        >
          {/* Vertical Timeline Line */}
          <div className="absolute h-full w-1 bg-[#b77e47]/50 timeline-line origin-top" style={{ transformOrigin: 'top', transform: 'scaleY(0)' }}></div>

          {/* Milestones */}
          <div className="relative w-full max-w-4xl">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                ref={setMilestoneRef(index)}
                className={`milestone-node flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} opacity-0`}
                onClick={() => handleMilestoneClick(index)}
              >
                <div className={`w-1/2 px-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div
                      className={`
                        transition-all duration-300 p-6 rounded-xl backdrop-blur-sm
                        ${activeIndex === index
                          ? 'bg-gradient-to-r from-[#2e493c]/70 to-[#b77e47]/40 shadow-lg shadow-[#b77e47]/20'
                          : 'bg-[#2a3530]/70 hover:bg-[#2a3530]/90'
                        }
                      `}
                    >
                    <h3 className="text-3xl font-bold mb-2 text-[#b77e47]">{milestone.year}</h3>
                    <p className="text-[#c9d1be]">{milestone.description}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center z-10">
                  <div
                    className={`
                      size-6 rounded-full transition-all duration-300 cursor-pointer
                      ${activeIndex === index
                        ? 'bg-[#b77e47] ring-4 ring-[#b77e47]/30'
                        : 'bg-[#2e493c] hover:bg-[#b77e47]'
                      }
                    `}
                  ></div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
