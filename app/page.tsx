import Hero from "@/components/Hero";
import DualHubStrategy from "@/components/DualHubStrategy";
import ServiceGrid from "@/components/ServiceGrid";
import GlobalMap from "@/components/GlobalMap";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <DualHubStrategy />
      <ServiceGrid />
      <GlobalMap />
      <ContactForm />
    </>
  );
}
