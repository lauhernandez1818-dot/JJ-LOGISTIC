import Hero from "@/components/Hero";
import PresentationSection from "@/components/PresentationSection";
import RIFSection from "@/components/RIFSection";
import ObjectiveSection from "@/components/ObjectiveSection";
import DualHubStrategy from "@/components/DualHubStrategy";
import ServiceGrid from "@/components/ServiceGrid";
import GlobalMap from "@/components/GlobalMap";
import BrandingSection from "@/components/BrandingSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <PresentationSection />
      <ObjectiveSection />
      <DualHubStrategy />
      <ServiceGrid />
      <RIFSection />
      <GlobalMap />
      <BrandingSection />
      <ContactForm />
    </>
  );
}
