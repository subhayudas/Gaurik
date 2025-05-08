import NavBar from "@/components/Client/NavBar";
import CompetitiveAdvantage from "@/components/Client/CompetitiveAdvantage";
import FoundersSection from "@/components/Client/FoundersSection";
import FinancialPerformance from "@/components/Client/FinancialPerformance";
import LocationsSection from "@/components/Client/LocationsSection";
import BrandShowcase from "@/components/Client/BrandShowcase";
import RetailExcellence from "@/components/Client/RetailExcellence";

import MilestonesSection from "@/sections/ElementisStory";
import WellnessSanctuary from "@/sections/WellnessSanctuary";
import Footer from "@/sections/Footer/Server";

import Form from "@/sections/Form";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
export default function Home() {
  return (
    <div className="overflow-clip">
      <Hero />
      <Introduction />
      <WellnessSanctuary />
      <BrandShowcase />
      <MilestonesSection />
      <RetailExcellence />
      <FoundersSection />
      <CompetitiveAdvantage />
      <FinancialPerformance />
      <LocationsSection />
      <Form />
      <Footer />
      <NavBar />
    </div>
  );
}
