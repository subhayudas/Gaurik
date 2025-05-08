"use client";
import { Fragment } from "react";
import SectionTitle from "@/components/Server/SectionTitle";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import MaskText from "@/components/Server/MaskText";
import StyledLink from "@/components/Server/StyledLink";

export default function LocationsSection() {

  const textLines = {
    mobile: [
      <Fragment key="m-1">Nationwide presence with</Fragment>,
      <Fragment key="m-2">
        <span>55+ retail stores</span> across
      </Fragment>,
      <Fragment key="m-3">
        <span>12 states</span> and corporate
      </Fragment>,
      <Fragment key="m-4">offices in New Delhi and</Fragment>,
      <Fragment key="m-5">Bangalore.</Fragment>,
    ],
    desktop: [
      <Fragment key="d-1">Nationwide presence with</Fragment>,
      <Fragment key="d-2">
        <span>55+ retail stores across 12</span>
      </Fragment>,
      <Fragment key="d-3">
        <span>states</span> and corporate offices in
      </Fragment>,
      <Fragment key="d-4">New Delhi and Bangalore.</Fragment>,
    ],
  };

  const locations = [
    { state: "Delhi", count: 161 },
    { state: "Karnataka", count: 102 },
    { state: "Rajasthan", count: 25 },
    { state: "Madhya Pradesh", count: 26 },
    { state: "Haryana", count: 15 },
    { state: "Maharashtra", count: 24 },
    { state: "Telangana", count: 8 },
    { state: "Chandigarh", count: 6 },
    { state: "Uttarakhand", count: 5 },
    { state: "Tamil Nadu", count: 5 },
    { state: "Gujarat", count: 6 },
    { state: "West Bengal", count: 6 },
  ];

  return (
    <div className="bg-[#CED1BF] px-3-75 py-40 text-[#2B3530] md:px-16 md:py-50">
      <div className="flex flex-col gap-12 md:gap-20">
        <SectionTitle>Our Presence</SectionTitle>

        <ResponsiveMaskText
          {...textLines}
          className="text-24 [line-height:1] md:text-40 [&>:first-child]:indent-23"
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {locations.map((location, index) => (
            <div key={index} className="flex flex-col gap-1">
              <p className="text-xl font-medium md:text-26">{location.state}</p>
              <p className="text-base">{location.count} employees</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-xl font-medium">Corporate Offices:</p>

          <MaskText
            lines={[
              <>New Delhi: AB-1, First Floor, Community</>,
              <>Centre, Safdarjung Enclave, New Delhi-110029.</>,
              <>Office No:- 011-40113227.</>,
            ]}
            className="text-lg [line-height:1.3] font-normal"
          />

          <MaskText
            lines={[
              <>Bangalore: 20/1, Edan Park, Mezzanine Floor,</>,
              <>Vittal Malya Road, Bangalore, Karnataka-560001.</>,
            ]}
            className="text-lg [line-height:1.3] font-normal"
          />
        </div>

        <StyledLink href="#">
          Find Our Stores
        </StyledLink>
      </div>
    </div>
  );
}
