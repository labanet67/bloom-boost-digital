import { Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

const InfluencerMarketing = () => {
  const features = [
    {
      title: "Influencer Discovery & Vetting",
      description: "Access our network of 10,000+ vetted creators across niches, with real engagement metrics.",
    },
    {
      title: "Campaign Strategy & Briefing",
      description: "Creative briefs, messaging guidelines, and campaign concepts that align with your brand.",
    },
    {
      title: "Contract & Negotiation",
      description: "Full contract management, rate negotiation, and usage rights handled for you.",
    },
    {
      title: "Content Approval Workflow",
      description: "Streamlined review process ensuring all content meets brand standards before posting.",
    },
    {
      title: "Performance Tracking",
      description: "Real-time dashboards tracking reach, engagement, clicks, and conversions per creator.",
    },
    {
      title: "Affiliate & Ambassador Programs",
      description: "Build long-term creator relationships with commission structures and exclusive partnerships.",
    },
  ];

  const deliverables = [
    { title: "Influencer shortlist (20+ creators)", included: true },
    { title: "Campaign brief & creative direction", included: true },
    { title: "Full contract management", included: true },
    { title: "Content approval & feedback", included: true },
    { title: "Performance tracking dashboard", included: true },
    { title: "Post-campaign analysis report", included: true },
    { title: "Usage rights documentation", included: true },
    { title: "Ongoing relationship management", included: true },
  ];

  const caseStudy = {
    company: "TechFlow App",
    industry: "Productivity Software",
    result: "Our micro-influencer campaign drove 12,000 app downloads at $1.20 CPA",
    metric: "12K Downloads",
    quote: "Follow + found creators we never would have discovered on our own. The authenticity of their recommendations drove way more installs than our paid ads at a fraction of the cost.",
    author: "Ryan Chen, Growth Lead at TechFlow",
  };

  const whoItsFor = [
    "Brands launching new products",
    "Apps seeking user acquisition",
    "E-commerce scaling word-of-mouth",
    "B2B companies building authority",
    "Startups with limited brand awareness",
  ];

  return (
    <>
      <Navbar />
      <ServicePageLayout
        icon={Handshake}
        title="Influencer Partnerships"
        tagline="Creator Collaborations"
        description="Strategic influencer campaigns that amplify your brand through authentic creator partnerships. From micro-influencers to macro creators, we handle everything."
        color="success"
        features={features}
        deliverables={deliverables}
        caseStudy={caseStudy}
        whoItsFor={whoItsFor}
      />
      <Footer />
    </>
  );
};

export default InfluencerMarketing;
