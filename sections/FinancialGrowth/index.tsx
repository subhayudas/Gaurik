"use client";

import { useRef, useEffect, useState } from "react";
import { animate, inView, stagger } from "motion";

// Financial data from the provided information
const financialData = {
  revenue: [
    { year: "2021-22", value: 99, projected: false },
    { year: "2022-23", value: 179, projected: false },
    { year: "2023-24", value: 202, projected: false },
    { year: "2024-25", value: 287, projected: true },
    { year: "2025-26", value: 359, projected: true },
    { year: "2026-27", value: 449, projected: true },
    { year: "2027-28", value: 561, projected: true },
  ],
  gross: [
    { year: "2021-22", value: 38, projected: false },
    { year: "2022-23", value: 75, projected: false },
    { year: "2023-24", value: 90, projected: false },
    { year: "2024-25", value: 154, projected: true },
    { year: "2025-26", value: 172, projected: true },
    { year: "2026-27", value: 219, projected: true },
    { year: "2027-28", value: 274, projected: true },
  ],
  ebitda: [
    { year: "2021-22", value: 9.65, projected: false },
    { year: "2022-23", value: 25, projected: false },
    { year: "2023-24", value: 29, projected: false },
    { year: "2024-25", value: 49, projected: true },
    { year: "2025-26", value: 55, projected: true },
    { year: "2026-27", value: 81, projected: true },
    { year: "2027-28", value: 110, projected: true },
  ],
  employees: [
    { year: "2021-22", value: 187, projected: false },
    { year: "2022-23", value: 294, projected: false },
    { year: "2023-24", value: 389, projected: false },
  ]
};

// Calculate the maximum value for scaling the charts
const maxRevenue = Math.max(...financialData.revenue.map(item => item.value));
const maxGross = Math.max(...financialData.gross.map(item => item.value));
const maxEbitda = Math.max(...financialData.ebitda.map(item => item.value));
const maxEmployees = Math.max(...financialData.employees.map(item => item.value));

type ChartType = "revenue" | "gross" | "ebitda" | "employees";

export default function FinancialGrowth() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeChart, setActiveChart] = useState<ChartType>("revenue");
  const chartRefs = {
    revenue: useRef<HTMLDivElement>(null),
    gross: useRef<HTMLDivElement>(null),
    ebitda: useRef<HTMLDivElement>(null),
    employees: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        const titleElements = sectionRef.current?.querySelectorAll('.section-title');
        if (titleElements) {
          titleElements.forEach((el, i) => {
            animate(el, 
              { opacity: [0, 1], y: [20, 0] },
              { duration: 0.8, delay: 0.1 * i }
            );
          });
        }
        
        const revenueTitle = sectionRef.current?.querySelector('.revenue-title');
        if (revenueTitle) {
          animate(revenueTitle, 
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.6, delay: 0.3 }
          );
        }
        
        const revenueBars = sectionRef.current?.querySelectorAll('.revenue-bar');
        if (revenueBars) {
          revenueBars.forEach((el, i) => {
            animate(el, 
              { height: ['0px', el.getAttribute('data-height') || '100%'] },
              { duration: 0.8, delay: 0.5 + (i * 0.2) }
            );
          });
        }
        
        const revenueValues = sectionRef.current?.querySelectorAll('.revenue-value');
        if (revenueValues) {
          revenueValues.forEach((el, i) => {
            animate(el, 
              { opacity: [0, 1] },
              { duration: 0.5, delay: 1.3 + (i * 0.2) }
            );
          });
        }
        
        const ebitdaTitle = sectionRef.current?.querySelector('.ebitda-title');
        if (ebitdaTitle) {
          animate(ebitdaTitle, 
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.6, delay: 1.5 }
          );
        }
        
        const ebitdaBars = sectionRef.current?.querySelectorAll('.ebitda-bar');
        if (ebitdaBars) {
          ebitdaBars.forEach((el, i) => {
            animate(el, 
              { height: ['0px', el.getAttribute('data-height') || '100%'] },
              { duration: 0.8, delay: 1.7 + (i * 0.2) }
            );
          });
        }
        
        const ebitdaValues = sectionRef.current?.querySelectorAll('.ebitda-value');
        if (ebitdaValues) {
          ebitdaValues.forEach((el, i) => {
            animate(el, 
              { opacity: [0, 1] },
              { duration: 0.5, delay: 2.5 + (i * 0.2) }
            );
          });
        }
      });
      
      return () => {};
    }
  }, []);

  useEffect(() => {
    animateChart(activeChart);
  }, [activeChart]);

  const animateChart = (chartType: ChartType) => {
    // Hide inactive charts
    Object.keys(chartRefs).forEach(key => {
      if (key !== chartType && chartRefs[key as ChartType].current) {
        animate(
          chartRefs[key as ChartType].current!,
          { opacity: 0 },
          { duration: 0.3 }
        );
        // Set height manually after animation
        setTimeout(() => {
          if (chartRefs[key as ChartType].current) {
            chartRefs[key as ChartType].current!.style.height = '0px';
          }
        }, 300);
      }
    });

    setTimeout(() => {
      // Show and animate the active chart
      if (chartRefs[chartType].current) {
        // First make it visible
        animate(
          chartRefs[chartType].current!,
          { opacity: 1 },
          { duration: 0.3 }
        );
        
        // Set height manually
        chartRefs[chartType].current!.style.height = 'auto';
        
        // Then animate the bars
        const bars = chartRefs[chartType].current!.querySelectorAll(`.${chartType}-bar`);
        bars.forEach((bar, i) => {
          animate(
            bar,
            { height: ['0px', bar.getAttribute('data-height') || '100%'] },
            { duration: 0.8, delay: 0.1 * i }
          );
        });

        // And the values
        const values = chartRefs[chartType].current!.querySelectorAll(`.${chartType}-value`);
        values.forEach((value, i) => {
          animate(
            value,
            { opacity: [0, 1] },
            { duration: 0.5, delay: 0.8 + (0.1 * i) }
          );
        });
      }
    }, 300);
  };

  const getChartData = () => {
    switch (activeChart) {
      case "revenue":
        return { data: financialData.revenue, max: maxRevenue, title: "Revenue (₹ Crore)", color: "from-[#2e493c] to-[#b77e47]" };
      case "gross":
        return { data: financialData.gross, max: maxGross, title: "Gross (₹ Crore)", color: "from-[#b77e47] to-[#2e493c]" };
      case "ebitda":
        return { data: financialData.ebitda, max: maxEbitda, title: "EBITDA (₹ Crore)", color: "from-[#2a3530] to-[#2e493c]" };
      case "employees":
        return { data: financialData.employees, max: maxEmployees, title: "Number of Employees", color: "from-[#c9d1be]/80 to-[#b77e47]" };
    }
  };

  const chartData = getChartData();

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-[#2a3530] via-[#2e493c] to-[#2a3530] text-[#c9d1be] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#b77e47]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#c9d1be]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-4 text-center opacity-0">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c9d1be] to-[#b77e47]">
            Financial Performance & Growth
          </span>
        </h2>
        <p className="section-title text-center text-[#c9d1be]/80 mb-16 max-w-3xl mx-auto opacity-0">
          Gaurik Group has shown significant financial growth with a projected CAGR of ~22% and expected EBITDA margin of 20% by FY 2027-28.
        </p>

        <div className="chart-tabs flex flex-wrap justify-center gap-4 mb-16">
          <button 
            onClick={() => setActiveChart("revenue")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 opacity-0
              ${activeChart === "revenue" 
                ? "bg-gradient-to-r from-[#2e493c] to-[#b77e47] text-[#c9d1be] shadow-lg shadow-[#b77e47]/25" 
                : "bg-[#2a3530] text-[#c9d1be]/80 hover:bg-[#2a3530]/80"
              }`}
          >
            Revenue
          </button>
          <button 
            onClick={() => setActiveChart("gross")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 opacity-0
              ${activeChart === "gross" 
                ? "bg-gradient-to-r from-[#b77e47] to-[#2e493c] text-[#c9d1be] shadow-lg shadow-[#b77e47]/25" 
                : "bg-[#2a3530] text-[#c9d1be]/80 hover:bg-[#2a3530]/80"
              }`}
          >
            Gross
          </button>
          <button 
            onClick={() => setActiveChart("ebitda")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 opacity-0
              ${activeChart === "ebitda" 
                ? "bg-gradient-to-r from-[#2a3530] to-[#2e493c] text-[#c9d1be] shadow-lg shadow-[#2e493c]/25" 
                : "bg-[#2a3530] text-[#c9d1be]/80 hover:bg-[#2a3530]/80"
              }`}
          >
            EBITDA
          </button>
          <button 
            onClick={() => setActiveChart("employees")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 opacity-0
              ${activeChart === "employees" 
                ? "bg-gradient-to-r from-[#c9d1be]/80 to-[#b77e47] text-[#2a3530] shadow-lg shadow-[#b77e47]/25" 
                : "bg-[#2a3530] text-[#c9d1be]/80 hover:bg-[#2a3530]/80"
              }`}
          >
            Employees
          </button>
        </div>

        <div className="chart-container">
          <h3 className="text-xl font-semibold mb-8 text-center text-[#c9d1be]">{chartData.title}</h3>
          
          <div ref={chartRefs[activeChart]} className="relative h-80 max-w-5xl mx-auto">
            <div className="absolute inset-0 flex items-end justify-between gap-2 md:gap-4 pb-10">
              {chartData.data.map((item, index) => {
                const heightPercentage = (item.value / chartData.max) * 100;
                return (
                  <div key={item.year} className="flex flex-col items-center w-full">
                    <div className="relative w-full h-full flex justify-center items-end">
                      <div 
                        className={`${activeChart}-bar w-full max-w-[40px] md:max-w-[60px] rounded-t-lg bg-gradient-to-t ${chartData.color} opacity-0`}
                        style={{ 
                          '--bar-height': `${heightPercentage}%`,
                          height: '0%'
                        } as React.CSSProperties}
                      >
                        <div className={`${activeChart}-value absolute -top-8 left-1/2 -translate-x-1/2 text-sm md:text-base font-bold opacity-0`}>
                          {item.value}
                        </div>
                      </div>
                      
                      {item.projected && (
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white/0 rounded-t-lg opacity-50"></div>
                      )}
                    </div>
                    <div className={`${activeChart}-label mt-2 text-xs md:text-sm text-gray-400 opacity-0`}>
                      {item.year}
                      {item.projected && <span className="text-xs text-gray-500 block">(Projected)</span>}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Horizontal grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[0, 1, 2, 3, 4].map((_, i) => (
                <div key={i} className="w-full h-px bg-gray-800"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-[#2a3530]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2e493c]/50">
          <h3 className="text-2xl font-bold mb-6 text-center text-[#b77e47]">Market Context</h3>
          <div className="space-y-4 text-[#c9d1be]">
            <p>
              In the fiscal year 2022-23, India's Apparel and Sports footwear industry amounted to $103.08 billion, 
              while Gaurik attained ₹179 Cr.
            </p>
            <p>
              By 2027, India's Apparel and Sports Footwear industry is projected to reach $118.77 billion, 
              with Gaurik expected to reach ₹561 Cr.
            </p>
            <p>
              The apparel and footwear segment accounts for 9% of the total retail market in India. 
              Out of the total Indian retail market (US $727 billion in 2022), the brands handled by Gaurik 
              had a total market share of US $1.78 billion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
