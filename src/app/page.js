import About from "@/components/About";
import CTA from "@/components/CTA_with_team";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MapSection from "@/components/Map_with_contact";
import Portfolio from "@/components/Portfolio";
import PricingPage from "@/components/Pricing_with_FAq";
import HowWeWorkSection from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
  <main>
    <Hero/>
    <About/>
    <HowWeWorkSection/>
    <Portfolio/>
    <CTA/>
    <PricingPage/>
    <MapSection/>
    <Footer/>
  </main>
  );
}
