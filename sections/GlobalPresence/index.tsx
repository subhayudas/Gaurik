"use client";

import { useRef, useState } from "react";
import SplineViewerClient from "@/components/Client/SplineViewerClient";

// Contact information
const contactInfo = {
  corporate: {
    title: "Corporate Office",
    address: "AB-1, First Floor, Community Centre, Safdarjung Enclave, New Delhi-110029",
    phone: "011-40113227",
    email: "customercare@gaurikgroup.com"
  },
  bangalore: {
    title: "Bangalore Office",
    address: "20/1, Edan Park, Mezzanine Floor, Vittal Malya Road, Bangalore, Karnataka-560001",
    phone: "",
    email: "customercare@gaurikgroup.com"
  }
};

// Social media links
const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/gaurikgroup", icon: "instagram" },
  { name: "LinkedIn", url: "https://linkedin.com/company/gaurikgroup", icon: "linkedin" },
  { name: "Website", url: "https://gaurikgroup.com", icon: "globe" }
];



export default function GlobalPresence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeContact, setActiveContact] = useState<"corporate" | "bangalore">("corporate");

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-[#2a3530] to-[#2e493c] text-[#c9d1be] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/world-map-dots.svg')] bg-no-repeat bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#b77e47]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#c9d1be]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c9d1be] to-[#b77e47]">
            Global Presence
          </span>
        </h2>
        <p className="text-center text-[#c9d1be]/80 mb-16 max-w-3xl mx-auto">
          Gaurik Group has established a strong presence across India and continues to expand globally with premium international brands.
        </p>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="space-y-8">
              {/* Contact cards */}
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div
                  className={`cursor-pointer transition-all duration-300 p-6 rounded-xl backdrop-blur-sm border border-[#2e493c]/50 flex-1
                    ${activeContact === "corporate"
                      ? 'bg-gradient-to-r from-[#2e493c]/30 to-[#b77e47]/20 border-[#b77e47]/30 shadow-lg shadow-[#b77e47]/10'
                      : 'bg-[#2a3530]/50 hover:bg-[#2a3530]/70'
                    }`}
                  onClick={() => setActiveContact("corporate")}
                >
                  <h3 className="text-xl font-bold mb-2 text-[#b77e47]">Corporate Office</h3>
                  <p className="text-[#c9d1be]/70 text-sm">New Delhi</p>
                </div>

                <div
                  className={`cursor-pointer transition-all duration-300 p-6 rounded-xl backdrop-blur-sm border border-[#2e493c]/50 flex-1
                    ${activeContact === "bangalore"
                      ? 'bg-gradient-to-r from-[#2e493c]/30 to-[#b77e47]/20 border-[#b77e47]/30 shadow-lg shadow-[#b77e47]/10'
                      : 'bg-[#2a3530]/50 hover:bg-[#2a3530]/70'
                    }`}
                  onClick={() => setActiveContact("bangalore")}
                >
                  <h3 className="text-xl font-bold mb-2 text-[#b77e47]">Bangalore Office</h3>
                  <p className="text-[#c9d1be]/70 text-sm">Karnataka</p>
                </div>
              </div>

              {/* Active contact details */}
              <div className="bg-[#2a3530]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2e493c]/50">
                <h3 className="text-2xl font-bold mb-6 text-[#b77e47]">{contactInfo[activeContact].title}</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#b77e47]/20 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#b77e47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-[#c9d1be]/70 mb-1">Address</div>
                      <div className="text-[#c9d1be]">{contactInfo[activeContact].address}</div>
                    </div>
                  </div>

                  {contactInfo[activeContact].phone && (
                    <div className="flex items-start gap-4">
                      <div className="bg-[#b77e47]/20 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#b77e47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-[#c9d1be]/70 mb-1">Phone</div>
                        <div className="text-[#c9d1be]">{contactInfo[activeContact].phone}</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="bg-[#b77e47]/20 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#b77e47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-[#c9d1be]/70 mb-1">Email</div>
                      <div className="text-[#c9d1be]">{contactInfo[activeContact].email}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-4 mt-8">
                {socialLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2a3530]/70 hover:bg-[#b77e47]/20 transition-all duration-300 p-3 rounded-full"
                  >
                    {link.icon === "instagram" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#b77e47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                      </svg>
                    )}
                    {link.icon === "linkedin" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#b77e47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    )}
                    {link.icon === "globe" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#b77e47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[400px] order-1 lg:order-2">
            <div className="h-full w-full bg-[#2e493c]/20 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#b77e47]/20 flex items-center justify-center relative">
              <SplineViewerClient
                url="https://prod.spline.design/O1lTuWTJyuNPerPm/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
