import { Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

const PaidAds = () => {
  const features = [
    {
      title: "Multi-Platform Campaigns",
      description: "Expert management across Meta (Facebook & Instagram), TikTok, Google, and YouTube ads.",
    },
    {
      title: "Creative Testing Framework",
      description: "Data-driven A/B testing of headlines, visuals, and CTAs to find winning combinations.",
    },
    {
      title: "Audience Segmentation",
      description: "Precise targeting using custom audiences, lookalikes, and interest-based segments.",
    },
    {
      title: "Conversion Tracking Setup",
      description: "Pixel implementation, event tracking, and attribution to measure true ROI.",
    },
    {
      title: "Landing Page Optimization",
      description: "High-converting landing pages designed to turn clicks into customers.",
    },
    {
      title: "Retargeting Sequences",
      description: "Strategic remarketing funnels to recapture warm leads and abandoned carts.",
    },
  ];

  const deliverables = [
    { title: "Campaign strategy & media plan", included: true },
    { title: "Ad creative production (10 ads/month)", included: true },
    { title: "Pixel & conversion tracking setup", included: true },
    { title: "Weekly performance reports", included: true },
    { title: "Bi-weekly optimization calls", included: true },
    { title: "A/B testing roadmap", included: true },
    { title: "Audience research document", included: true },
    { title: "Landing page templates", included: true },
  ];

  const caseStudy = {
    company: "FitGear Pro",
    industry: "Fitness E-commerce",
    result: "Achieved 4.8× ROAS with our Meta & TikTok ad campaigns in Q4",
    metric: "4.8× ROAS",
    quote: "We were burning money on ads before Follow +. Now every dollar we spend brings back nearly $5. Their creative testing process found winning ads we never would have tried ourselves.",
    author: "Jake Morrison, CEO of FitGear Pro",
  };

  const whoItsFor = [
    "E-commerce brands scaling revenue",
    "SaaS companies seeking leads",
    "App developers driving installs",
    "Service businesses booking clients",
    "Brands with $3K+ monthly ad budget",
  ];

  return (
    <>
      <Navbar />
      <ServicePageLayout
        icon={Target}
        title="Paid Ads"
        tagline="High-ROI Advertising"
        description="Turn your ad budget into predictable revenue with data-driven campaigns that deliver measurable results across Meta, TikTok, Google, and more."
        color="accent"
        features={features}
        deliverables={deliverables}
        caseStudy={caseStudy}
        whoItsFor={whoItsFor}
      />
      <Footer />
    </>
  );
};

export default PaidAds;
