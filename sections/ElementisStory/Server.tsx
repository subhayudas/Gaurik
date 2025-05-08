import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import SectionTitle from "@/components/Server/SectionTitle";
import StyledLink from "@/components/Server/StyledLink";
import { Fragment } from "react";

export default function ElementisStoryServer() {
  const textLines = {
    mobile: [
      <Fragment key="m-1">From our founding in 2015</Fragment>,
      <Fragment key="m-2">
        to achieving <span>100+ Crores</span>
      </Fragment>,
      <Fragment key="m-3">
        <span>turnover</span> in 2021 and expanding
      </Fragment>,
      <Fragment key="m-4">to 55+ stores across India with</Fragment>,
      <Fragment key="m-5">premium brands like Skechers & GUESS.</Fragment>,
    ],
    desktop: [
      <Fragment key="d-1">From our founding in 2015 to</Fragment>,
      <Fragment key="d-2">
        achieving <span>100+ Crores turnover</span> in
      </Fragment>,
      <Fragment key="d-3">2021 and expanding to 55+ stores</Fragment>,
      <Fragment key="d-4">across India with premium brands</Fragment>,
      <Fragment key="d-5">like Skechers & GUESS.</Fragment>,
    ],
  };
  return (
    <>
      <SectionTitle className="md:col-span-3">Our Milestones</SectionTitle>
      <div className="max-md:mt-12 md:col-span-6 md:col-start-6">
        <ResponsiveMaskText
          {...textLines}
          className="text-24 [line-height:1] md:text-40 [&>:first-child]:indent-23"
        />
        <div className="mt-12 flex flex-col gap-1 max-md:mb-16 md:gap-4">
          <StyledLink href="#">
            View Our Journey
          </StyledLink>
          <StyledLink href="#">
            Meet Our Founders
          </StyledLink>
        </div>
      </div>
    </>
  );
}
