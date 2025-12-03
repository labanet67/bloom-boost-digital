import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CaseStudy from "@/components/CaseStudy";
import LeadMagnet from "@/components/LeadMagnet";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <HowItWorks />
        <CaseStudy />
        <LeadMagnet />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
