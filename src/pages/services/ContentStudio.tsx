import { Video } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

const ContentStudio = () => {
  const features = [
    {
      title: "Short-Form Video Production",
      description: "Scroll-stopping Reels, TikToks, and Shorts designed to go viral and drive engagement.",
    },
    {
      title: "UGC-Style Content",
      description: "Authentic, relatable content that performs better than polished brand ads.",
    },
    {
      title: "Product Photography",
      description: "Studio-quality product shots, lifestyle images, and flat lays for your feed and ads.",
    },
    {
      title: "Motion Graphics & Animation",
      description: "Eye-catching animated content for stories, ads, and promotional campaigns.",
    },
    {
      title: "Script Writing & Hooks",
      description: "Compelling scripts with proven hooks that grab attention in the first 3 seconds.",
    },
    {
      title: "Content Repurposing",
      description: "Transform one piece of content into 10+ assets for different platforms and formats.",
    },
  ];

  const deliverables = [
    { title: "8 short-form videos per month", included: true },
    { title: "12 static posts per month", included: true },
    { title: "Story templates & designs", included: true },
    { title: "Video scripts & hooks library", included: true },
    { title: "Raw footage & source files", included: true },
    { title: "Brand style guide", included: true },
    { title: "Content calendar integration", included: true },
    { title: "Platform-specific formatting", included: true },
  ];

  const caseStudy = {
    company: "Glow Cosmetics",
    industry: "Beauty & Skincare",
    result: "Our Reels strategy generated 2.3M organic views and 15K new followers in 60 days",
    metric: "2.3M Views",
    quote: "The content Follow + creates consistently outperforms anything we made in-house. They understand what makes people stop scrolling and actually watch.",
    author: "Emma Liu, Marketing Director at Glow Cosmetics",
  };

  const whoItsFor = [
    "Brands needing consistent content",
    "Founders too busy to create",
    "Teams lacking video expertise",
    "E-commerce product launches",
    "Personal brands seeking polish",
  ];

  return (
    <>
      <Navbar />
      <ServicePageLayout
        icon={Video}
        title="Content Studio"
        tagline="Scroll-Stopping Content"
        description="Professional content production that captures attention and drives engagement. From viral Reels to stunning product photography, we create content that converts."
        color="secondary"
        features={features}
        deliverables={deliverables}
        caseStudy={caseStudy}
        whoItsFor={whoItsFor}
      />
      <Footer />
    </>
  );
};

export default ContentStudio;
