import { Fragment } from "react";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import MaskText from "@/components/Server/MaskText";
import SectionTitle from "@/components/Server/SectionTitle";
import * as motion from "motion/react-client";
import ResponsiveImage from "@/components/Client/ResponsiveImage";
import SplineViewerClient from "@/components/Client/SplineViewerClient";

export default function IntroductionServer() {
  return (
    <div className="grid grid-rows-[auto_auto_auto] gap-y-12 bg-[#2B3530] px-3-75 pt-42-5 pb-35 text-[#D1CCBF] md:grid-cols-[1fr_1.9fr] md:grid-rows-[auto_auto] md:gap-y-32 md:px-15 md:pt-56-25 md:pb-50">
      <motion.div className="mb-2 md:col-span-2 md:col-start-2 md:mb-0">
        <ResponsiveImage parallaxAmount={8}>
          <div className="relative w-full overflow-hidden" style={{ minHeight: '650px', clipPath: 'inset(0 0 0 0)' }}>
            <SplineViewerClient
              url="https://prod.spline.design/s22MrxoubLSMgjq0/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </ResponsiveImage>
      </motion.div>

      <SectionTitle className="md:col-start-1 md:row-start-2">
        Introduction
      </SectionTitle>

      <div className="flex flex-col gap-12 md:col-span-2 md:col-start-2 md:gap-20">
        <ResponsiveMaskText
          mobile={[
            <Fragment key="m-1">Welcome to Gaurik Group</Fragment>,
            <Fragment key="m-2">
              <span>of Companies</span>, a leading
            </Fragment>,
            <Fragment key="m-3">franchise-based business</Fragment>,
            <Fragment key="m-4">specializing in apparel and</Fragment>,
            <Fragment key="m-5">sportswear with exclusive</Fragment>,
            <Fragment key="m-6">rights to distribute well-known</Fragment>,
            <Fragment key="m-7">fashion and sporting brands</Fragment>,
            <Fragment key="m-8">across India.</Fragment>,
          ]}
          desktop={[
            <Fragment key="d-1">
              Welcome to Gaurik Group <span>of Companies</span>,
            </Fragment>,
            <Fragment key="d-2">
              <span>a leading</span> franchise-based business
            </Fragment>,
            <Fragment key="d-3">
              specializing in apparel and sportswear with
            </Fragment>,
            <Fragment key="d-4">
              exclusive rights to distribute well-known
            </Fragment>,
            <Fragment key="d-5">
              fashion and sporting brands across
            </Fragment>,
            <Fragment key="d-6">India.</Fragment>,
          ]}
          className="text-24 [line-height:1] md:text-40 [&>:first-child]:indent-23"
        />

        <MaskText
          lines={[
            <Fragment key="l-1">Founded in 2015, Gaurik Group has established</Fragment>,
            <Fragment key="l-2">a reputation through planned expansion into</Fragment>,
            <Fragment key="l-3">
              multiple regions and cities, a customer-focused
            </Fragment>,
            <Fragment key="l-4">
              strategy, and a dedication to quality and
            </Fragment>,
            <Fragment key="l-5">innovation in the apparel industry.</Fragment>,
          ]}
          className="text-base [line-height:1.3] font-normal md:text-lg"
        />
      </div>
    </div>
  );
}
