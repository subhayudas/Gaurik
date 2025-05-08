"use client";
import { Fragment } from "react";
import SectionTitle from "@/components/Server/SectionTitle";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import MaskText from "@/components/Server/MaskText";
import { useIsMobile } from "@/app/providers";

export default function FinancialPerformance() {
  const isMobile = useIsMobile();
  
  const textLines = {
    mobile: [
      <Fragment key="m-1">Strong financial growth</Fragment>,
      <Fragment key="m-2">
        with <span>sales increasing</span> from
      </Fragment>,
      <Fragment key="m-3">
        <span>99 Cr in 2021-22</span> to 202 Cr
      </Fragment>,
      <Fragment key="m-4">in 2023-24, with projected</Fragment>,
      <Fragment key="m-5">CAGR of ~22%.</Fragment>,
    ],
    desktop: [
      <Fragment key="d-1">Strong financial growth with</Fragment>,
      <Fragment key="d-2">
        <span>sales increasing</span> from 99 Cr in
      </Fragment>,
      <Fragment key="d-3">
        2021-22 to <span>202 Cr in 2023-24</span>,
      </Fragment>,
      <Fragment key="d-4">with projected CAGR of ~22%.</Fragment>,
    ],
  };

  return (
    <div className="bg-[#2B3530] px-3-75 py-40 text-[#D1CCBF] md:px-16 md:py-50">
      <div className="flex flex-col gap-12 md:gap-20">
        <SectionTitle>Financial Performance</SectionTitle>
        
        <ResponsiveMaskText
          {...textLines}
          className="text-24 [line-height:1] md:text-40 [&>:first-child]:indent-23"
        />
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <p className="text-40 font-medium md:text-144">202</p>
            <p className="text-xl">Cr Sales (2023-24)</p>
          </div>
          
          <div className="flex flex-col gap-2">
            <p className="text-40 font-medium md:text-144">29</p>
            <p className="text-xl">Cr EBITDA (2023-24)</p>
          </div>
          
          <div className="flex flex-col gap-2">
            <p className="text-40 font-medium md:text-144">389</p>
            <p className="text-xl">Employees (2023-24)</p>
          </div>
        </div>
        
        <MaskText
          lines={[
            <>With a current EBITDA margin of 14% and</>,
            <>projected to reach 20% by 2027-28, Gaurik</>,
            <>Group is on track to achieve approximately</>,
            <>Rs. 561 crores in revenue by 2027-28.</>,
          ]}
          className="text-lg [line-height:1.3] font-normal"
        />
      </div>
    </div>
  );
}
