import Image from "next/image";
import { Fragment } from "react";
import WellnessSanctuaryImage from "@/public/ImageContainer/Bugatti.jpg";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import SectionTitle from "@/components/Server/SectionTitle";
import MaskText from "@/components/Server/MaskText";
import StyledLink from "@/components/Server/StyledLink";
import ResponsiveImage from "@/components/Client/ResponsiveImage";
export default function WellnessSanctuary() {
  const textLines = {
    desktop: [
      <Fragment key="desktop-1">
        <span>Retail, Distribution,</span> and
      </Fragment>,
      <Fragment key="desktop-2">Institutional channels</Fragment>,
      <Fragment key="desktop-3">across India</Fragment>,
    ],
    mobile: [
      <Fragment key="mobile-1">
        <span>Retail, Distribution,</span> and
      </Fragment>,
      <Fragment key="mobile-2">Institutional channels across</Fragment>,
      <Fragment key="mobile-3">India</Fragment>,
    ],
  };

  return (
    <div className="flex flex-col bg-[#30493D] text-[#D1CCBF] md:grid md:grid-cols-2">
      <ResponsiveImage parallaxAmount={20}>
        <Image
          src={WellnessSanctuaryImage}
          alt="wellness-sanctuary-image"
          className="h-auto w-full"
        />
      </ResponsiveImage>
      <div className="flex flex-col justify-center px-3-75 py-40 md:py-0">
        <div className="flex flex-col gap-12 md:ml-36 md:w-fit md:gap-16">
          <SectionTitle>Business Channels</SectionTitle>
          <ResponsiveMaskText
            {...textLines}
            className="text-24 [line-height:1] md:text-40"
          />
          <MaskText
            lines={[
              <>With 55+ stores across India, around 1.25 lakh</>,
              <>sq. ft retail space, and a distribution network</>,
              <>of 285 dealers, we bring premium brands like</>,
              <>Skechers, GUESS, CK, Bugatti shoes & Luxottica</>,
              <>eyewear to customers nationwide.</>,
            ]}
            className="text-lg [line-height:1.3] font-normal"
          />
          <StyledLink href="#">
            Explore Our Channels
          </StyledLink>
        </div>
      </div>
    </div>
  );
}
