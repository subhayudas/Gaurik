"use client";

import { useRef, useEffect, useState } from "react";
import { animate, inView, stagger } from "motion";
import { animateScale } from "@/utils/animations";

// Data from the provided information
const stateData = [
  { state: "Delhi", stores: 21, employees: 161 },
  { state: "Karnataka", stores: 16, employees: 102 }, // Including Bangalore
  { state: "Haryana", stores: 3, employees: 15 },
  { state: "Rajasthan", stores: 4, employees: 25 },
  { state: "Madhya Pradesh", stores: 4, employees: 26 },
  { state: "Telangana", stores: 2, employees: 8 },
  { state: "Maharashtra", stores: 6, employees: 24 },
  { state: "Chandigarh", stores: 3, employees: 6 },
  { state: "Uttarakhand", stores: 2, employees: 5 },
  { state: "Tamil Nadu", stores: 2, employees: 5 },
  { state: "Gujarat", stores: 3, employees: 6 },
  { state: "West Bengal", stores: 2, employees: 6 },
];

// Calculate totals
const totalStores = stateData.reduce((sum, state) => sum + state.stores, 0);
const totalEmployees = stateData.reduce((sum, state) => sum + state.employees, 0);

export default function IndiaPresence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [activeState, setActiveState] = useState<string | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [showStores, setShowStores] = useState(true);

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        // Animate title and description
        const titleElements = sectionRef.current?.querySelectorAll('.section-title');
        if (titleElements) {
          titleElements.forEach((el, i) => {
            animate(el, {
              opacity: [0, 1],
              y: [20, 0]
            }, { duration: 0.8, delay: 0.2 + (i * 0.1) });
          });
        }

        // Animate map container
        const mapContainer = sectionRef.current?.querySelector('.map-container');
        if (mapContainer) {
          animate(mapContainer, {
            opacity: [0, 1],
            scale: [0.95, 1]
          }, { duration: 0.8, delay: 0.4 });
        }

        // Animate state markers with stagger
        const stateMarkers = sectionRef.current?.querySelectorAll('.state-marker');
        if (stateMarkers) {
          stateMarkers.forEach((el, i) => {
            animate(el, {
              opacity: [0, 1],
              scale: [0.5, 1]
            }, { duration: 0.5, delay: 0.6 + (i * 0.03) });
          });
        }

        // Animate stats cards
        const statsCards = sectionRef.current?.querySelectorAll('.stats-card');
        if (statsCards) {
          statsCards.forEach((el, i) => {
            animate(el, {
              opacity: [0, 1],
              y: [20, 0]
            }, { duration: 0.8, delay: 0.4 + (i * 0.2) });
          });
        }
      });

      // No need to return a cleanup function as inView handles this internally
      return () => {};
    }
  }, []);

  useEffect(() => {
    if (activeState) {
      // Animate the active state marker
      const stateMarker = document.querySelector(`[data-state="${activeState}"]`) as HTMLElement;
      if (stateMarker) {
        // Use the animateScale utility function which handles scale animations properly
        animateScale(
          stateMarker,
          [1, 1.2, 1],
          0.5
        );
      }
    }
  }, [activeState]);

  // Get state data by name
  const getStateData = (stateName: string) => {
    return stateData.find(state => state.state === stateName);
  };

  // Handle state marker click
  const handleStateClick = (stateName: string) => {
    setActiveState(prevState => prevState === stateName ? null : stateName);

    if (mapRef.current) {
      const stateEl = document.querySelector(`[data-state="${stateName}"]`);
      if (stateEl) {
        // Use the animateScale utility function which handles scale animations properly
        animateScale(
          stateEl,
          [1, 1.2, 1],
          0.4,
          "ease-in-out"
        );
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-[#2a3530] to-[#2e493c] text-[#c9d1be] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#b77e47]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#c9d1be]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c9d1be] to-[#b77e47]">
            Our Presence Across India
          </span>
        </h2>
        <p className="section-title text-center text-[#c9d1be]/80 mb-16 max-w-3xl mx-auto">
          Gaurik Group has established a strong presence across India with {totalStores} retail stores and {totalEmployees} employees spanning multiple states.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-2/3">
            <div className="map-container relative bg-[#2e493c]/20 backdrop-blur-sm rounded-3xl p-6 border border-[#b77e47]/20 opacity-0">
              <div className="flex justify-end mb-4 space-x-4">
                <button
                  onClick={() => setShowStores(true)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300
                    ${showStores
                      ? "bg-gradient-to-r from-[#2e493c] to-[#b77e47] text-[#c9d1be]"
                      : "bg-[#2a3530] text-[#c9d1be]/80 hover:bg-[#2a3530]/70"
                    }`}
                >
                  Retail Stores
                </button>
                <button
                  onClick={() => setShowStores(false)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300
                    ${!showStores
                      ? "bg-gradient-to-r from-[#2e493c] to-[#b77e47] text-[#c9d1be]"
                      : "bg-[#2a3530] text-[#c9d1be]/80 hover:bg-[#2a3530]/70"
                    }`}
                >
                  Employees
                </button>
              </div>

              <div ref={mapRef} className="relative w-full aspect-[4/5] md:aspect-[16/9]">
                {/* India Map SVG Container - This would be replaced with an actual SVG map of India */}
                <div className="absolute inset-0 bg-[url('/images/india-map-outline.svg')] bg-contain bg-center bg-no-repeat opacity-30"></div>

                {/* State Markers */}
                {stateData.map((state) => {
                  // These positions would be adjusted to match actual geographic locations
                  const positions: Record<string, { top: string, left: string }> = {
                    "Delhi": { top: "30%", left: "40%" },
                    "Karnataka": { top: "70%", left: "35%" },
                    "Haryana": { top: "28%", left: "38%" },
                    "Rajasthan": { top: "40%", left: "30%" },
                    "Madhya Pradesh": { top: "50%", left: "45%" },
                    "Telangana": { top: "60%", left: "50%" },
                    "Maharashtra": { top: "55%", left: "40%" },
                    "Chandigarh": { top: "25%", left: "40%" },
                    "Uttarakhand": { top: "22%", left: "45%" },
                    "Tamil Nadu": { top: "80%", left: "45%" },
                    "Gujarat": { top: "45%", left: "25%" },
                    "West Bengal": { top: "50%", left: "70%" },
                  };

                  const position = positions[state.state] || { top: "50%", left: "50%" };
                  const value = showStores ? state.stores : state.employees;
                  const isActive = activeState === state.state;
                  const isHovered = hoveredState === state.state;

                  // Calculate size based on value (normalized)
                  const maxValue = showStores ? 21 : 161; // Max stores in Delhi, max employees in Delhi
                  const minSize = 20; // Minimum size in pixels
                  const maxSize = 60; // Maximum size in pixels
                  const size = minSize + (value / maxValue) * (maxSize - minSize);

                  return (
                    <div
                      key={state.state}
                      data-state={state.state}
                      className={`state-marker absolute rounded-full cursor-pointer transition-all duration-300 opacity-0
                        ${showStores ? 'bg-[#b77e47]' : 'bg-[#c9d1be]'}
                        ${isActive || isHovered ? 'z-10' : 'z-0'}
                      `}
                      style={{
                        top: position.top,
                        left: position.left,
                        width: `${size}px`,
                        height: `${size}px`,
                        transform: 'translate(-50%, -50%)',
                        boxShadow: isActive || isHovered
                          ? `0 0 20px ${showStores ? 'rgba(183, 126, 71, 0.6)' : 'rgba(201, 209, 190, 0.6)'}`
                          : 'none'
                      }}
                      onClick={() => handleStateClick(state.state)}
                      onMouseEnter={() => setHoveredState(state.state)}
                      onMouseLeave={() => setHoveredState(null)}
                    >
                      <div className="absolute inset-0 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        {value}
                      </div>

                      {(isActive || isHovered) && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full bg-[#2e493c] text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                          {state.state}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 space-y-6">
            <div className="stats-card bg-[#2a3530]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#2e493c]/50 mb-6">
                <h3 className="text-xl font-bold mb-3 text-[#b77e47]">Retail Presence</h3>
                <p className="text-[#c9d1be]">
                Gaurik Group operates {totalStores} retail stores (COCO & FOFO) of brands like Skechers, GUESS, CK, Bugatti shoes & Luxottica eyewear across India.
              </p>
              <div className="text-4xl font-bold text-[#b77e47]">
                125,000<span className="text-sm font-normal text-[#c9d1be]/70 ml-2">sq. ft of retail space</span>
              </div>
            </div>

            <div className="stats-card bg-[#2a3530]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#2e493c]/50 mb-6">
              <h3 className="text-xl font-bold mb-3 text-[#b77e47]">Employee Base</h3>
              <p className="text-[#c9d1be]">
                With a workforce of {totalEmployees} employees across 12 states, Gaurik Group has shown significant growth in its team.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-[#b77e47] rounded-full mr-2"></div>
                  <span className="text-[#c9d1be]">Retail Stores</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#c9d1be] rounded-full mr-2"></div>
                  <span className="text-[#c9d1be]">Employee Distribution</span>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#b77e47]">389</div>
                  <div className="text-xs text-[#c9d1be]/70">2023-24</div>
                </div>
              </div>
            </div>

            <div className="stats-card bg-gradient-to-r from-[#2e493c]/30 to-[#b77e47]/20 backdrop-blur-sm rounded-2xl p-6 border border-[#b77e47]/30 opacity-0">
              <h3 className="text-xl font-bold mb-3 text-[#b77e47]">Distribution Network</h3>
              <p className="text-[#c9d1be]">
                Gaurik Group is a distributor of NB, Seven, Shrey, and Reebok Fitness across India with a network of 285 dealers and works through key accounts like Central.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
