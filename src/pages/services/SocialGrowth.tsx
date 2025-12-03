import { Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

const SocialGrowth = () => {
  const features = [
    {
      title: "Audience Research & Targeting",
      description: "Deep dive into your ideal customer avatar, their pain points, and where they spend time online.",
    },
    {
      title: "Content Strategy & Calendar",
      description: "A tailored content plan with themes, hooks, and posting schedules optimized for maximum reach.",
    },
    {
      title: "Organic Growth Tactics",
      description: "Proven engagement strategies including hashtag optimization, collaborations, and trend-jacking.",
    },
    {
      title: "Community Management",
      description: "Daily engagement, DM responses, and relationship building to turn followers into fans.",
    },
    {
      title: "Profile Optimization",
      description: "Bio, highlights, link-in-bio, and visual branding that converts visitors into followers.",
    },
    {
      title: "Analytics & Reporting",
      description: "Weekly insights on growth metrics, engagement rates, and content performance.",
    },
  ];

  const deliverables = [
    { title: "Custom content calendar (30 days)", included: true },
    { title: "Weekly engagement sessions", included: true },
    { title: "Profile audit & optimization", included: true },
    { title: "Hashtag strategy document", included: true },
    { title: "Monthly growth report", included: true },
    { title: "Community management (5 hrs/week)", included: true },
    { title: "Competitor analysis", included: true },
    { title: "Content templates & scripts", included: true },
  ];

  const caseStudy = {
    company: "Verde Wellness",
    industry: "Health & Wellness",
    result: "Grew from 3K to 47K followers in just 4 months with our organic growth strategy",
    metric: "+47K Followers",
    quote: "Follow + completely transformed our Instagram presence. Their content strategy and engagement tactics brought us followers who actually buy our products. Our DMs are now our biggest sales channel!",
    author: "Maria Santos, Founder of Verde Wellness",
  };

  const whoItsFor = [
    "Creators building a personal brand",
    "E-commerce brands",
    "Local businesses",
    "Coaches & consultants",
    "Startups seeking visibility",
  ];

  return (
    <>
      <Navbar />
      <ServicePageLayout
        icon={Users}
        title="Social Growth"
        tagline="Organic & Paid Growth"
        description="Build an engaged, loyal community that converts into paying customers. We combine organic strategies with smart paid amplification to grow your following authentically."
        color="primary"
        features={features}
        deliverables={deliverables}
        caseStudy={caseStudy}
        whoItsFor={whoItsFor}
      />
      <Footer />
    </>
  );
};

export default SocialGrowth;
