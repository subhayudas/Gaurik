import { Fragment } from "react";
import ResponsiveMaskTextVariant from "@/components/Client/ResponsiveMaskTextVariant";
import ResponsiveMarquee from "@/components/Client/ResponsiveMarquee";
import RetailExcellenceClient from "@/components/Client/RetailExcellenceClient";

export default function RetailExcellence() {
  return (
    <div className="bg-[#30493D] py-36 text-[#D1CCBF] md:py-60">
      <ResponsiveMarquee
        animationConfig={{
          mobile: {
            max: "-887px",
            speed: 50,
          },
          desktop: {
            max: "-88.7%",
            speed: 5,
          },
        }}
      >
        {"Retail Excellence • Premium Brands • Quality Products • Retail Excellence • "}
      </ResponsiveMarquee>

      <div className="mt-18 flex flex-col gap-y-14 px-8-25 md:mt-26 md:grid md:grid-cols-3 md:grid-rows-[auto_auto] md:gap-y-24 md:px-16">
        <div className="flex flex-col gap-14 md:col-span-2 md:col-start-2 md:flex-row">
          <ResponsiveMaskTextVariant
            desktop={[
              <Fragment key="d-0">
                At Gaurik Group, we believe in providing
              </Fragment>,
              <Fragment key="d-1">
                exceptional retail experiences through our
              </Fragment>,
              <Fragment key="d-2">
                premium brand stores, offering quality
              </Fragment>,
              <Fragment key="d-3">
                products, excellent customer service, and
              </Fragment>,
              <Fragment key="d-4">
                strategic locations across India. Our retail
              </Fragment>,
              <Fragment key="d-5">
                excellence drives our continued growth.
              </Fragment>,
            ]}
            mobile={[
              <Fragment key="m-0">
                At Gaurik Group, we believe in providing
              </Fragment>,
              <Fragment key="m-1">
                exceptional retail experiences through
              </Fragment>,
              <Fragment key="m-2">
                our premium brand stores, offering
              </Fragment>,
              <Fragment key="m-3">
                quality products, excellent customer
              </Fragment>,
              <Fragment key="m-4">
                service, and strategic locations across
              </Fragment>,
              <Fragment key="m-5">India. Our retail excellence drives</Fragment>,
              <Fragment key="m-6">our continued growth.</Fragment>,
            ]}
            className="text-base [line-height:1.33] md:text-lg"
          />

          <ResponsiveMaskTextVariant
            desktop={[
              <Fragment key="d2-0">
                We envision becoming the leading retail
              </Fragment>,
              <Fragment key="d2-1">
                group in India, bringing global fashion and
              </Fragment>,
              <Fragment key="d2-2">
                sportswear brands to customers nationwide,
              </Fragment>,
              <Fragment key="d2-3">
                creating memorable shopping experiences
              </Fragment>,
              <Fragment key="d2-4">and building lasting brand loyalty.</Fragment>,
            ]}
            mobile={[
              <Fragment key="m2-0">
                We envision becoming the leading
              </Fragment>,
              <Fragment key="m2-1">
                retail group in India, bringing global
              </Fragment>,
              <Fragment key="m2-2">
                fashion and sportswear brands to
              </Fragment>,
              <Fragment key="m2-3">
                customers nationwide, creating memorable
              </Fragment>,
              <Fragment key="m2-4">shopping experiences and building</Fragment>,
              <Fragment key="m2-5">lasting brand loyalty.</Fragment>,
            ]}
            className="text-base [line-height:1.33] md:text-lg"
          />
        </div>
        <RetailExcellenceClient />
      </div>
    </div>
  );
}
