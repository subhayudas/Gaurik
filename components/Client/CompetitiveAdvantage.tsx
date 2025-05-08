"use client";
import { Fragment } from "react";
import Image from "next/image";
import SectionTitle from "@/components/Server/SectionTitle";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import ParallaxContainer from "@/components/Client/ParallaxContainer";

export default function CompetitiveAdvantage() {

  const textLines = {
    mobile: [
      <Fragment key="m-1">Our competitive edge</Fragment>,
      <Fragment key="m-2">
        comes from <span>operational</span>
      </Fragment>,
      <Fragment key="m-3">
        <span>efficiency</span>, experienced team,
      </Fragment>,
      <Fragment key="m-4">and premium locations</Fragment>,
      <Fragment key="m-5">across India.</Fragment>,
    ],
    desktop: [
      <Fragment key="d-1">Our competitive edge comes</Fragment>,
      <Fragment key="d-2">
        from <span>operational efficiency</span>,
      </Fragment>,
      <Fragment key="d-3">
        experienced team, and premium
      </Fragment>,
      <Fragment key="d-4">locations across India.</Fragment>,
    ],
  };

  const advantages = [
    "Rapid growth capability despite testing times",
    "Operational Efficiency & Profitability",
    "Well-established distribution Network",
    "Experienced Team",
    "Located at premium Locations across India"
  ];

  return (
    <div className="flex flex-col bg-[#CED1BF] text-[#2B3530] md:grid md:grid-cols-2">
      <div className="flex flex-col justify-center px-3-75 py-40 md:py-0">
        <div className="flex flex-col gap-12 md:ml-36 md:w-fit md:gap-16">
          <SectionTitle>Our Advantage</SectionTitle>
          <ResponsiveMaskText
            {...textLines}
            className="text-24 [line-height:1] md:text-40"
          />

          <div className="flex flex-col gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-[#2B3530]"></div>
                <p className="text-lg font-normal">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ParallaxContainer parallaxAmount={25}>
        <div className="h-full w-full bg-[#30493D]">
          <div className="grid h-full grid-cols-2 grid-rows-2 gap-4 p-8">
            <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
              <div className="relative h-full w-full">
                <Image
                  src="/ImageContainer/Skechers.jpg"
                  alt="Skechers"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <p className="text-center text-xl font-semibold text-white">Skechers</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
              <div className="relative h-full w-full">
                <Image
                  src="/ImageContainer/Guess.jpg"
                  alt="GUESS"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <p className="text-center text-xl font-semibold text-white">GUESS</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
              <div className="relative h-full w-full">
                <Image
                  src="/ImageContainer/CalvinKlein.jpeg"
                  alt="Calvin Klein"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <p className="text-center text-xl font-semibold text-white">Calvin Klein</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
              <div className="relative h-full w-full">
                <Image
                  src="/ImageContainer/Bugatti.jpg"
                  alt="Bugatti"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <p className="text-center text-xl font-semibold text-white">Bugatti</p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxContainer>
    </div>
  );
}
