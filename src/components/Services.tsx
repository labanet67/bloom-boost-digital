import { Link } from "react-router-dom";
import { Users, Target, Video, Handshake, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Social Growth",
    description: "Organic & paid strategies to build an engaged, loyal community that converts.",
    color: "primary",
    href: "/services/social-growth",
  },
  {
    icon: Target,
    title: "Paid Ads",
    description: "High-ROI campaigns on Meta, TikTok & Google that turn clicks into customers.",
    color: "accent",
    href: "/services/paid-ads",
  },
  {
    icon: Video,
    title: "Content Studio",
    description: "Scroll-stopping Reels, UGC, and product content that drives engagement.",
    color: "secondary",
    href: "/services/content-studio",
  },
  {
    icon: Handshake,
    title: "Influencer Partnerships",
    description: "Strategic creator collaborations that amplify your brand authentically.",
    color: "success",
    href: "/services/influencer-marketing",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/20",
    hover: "hover:border-primary/40 hover:shadow-glow",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/20",
    hover: "hover:border-accent/40 hover:shadow-accent-glow",
  },
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    border: "border-secondary/20",
    hover: "hover:border-secondary/40",
  },
  success: {
    bg: "bg-success/10",
    text: "text-success",
    border: "border-success/20",
    hover: "hover:border-success/40",
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Grow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From building your audience to converting them into loyal customers, 
            we handle every step of your digital growth journey.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <Link
                key={index}
                to={service.href}
                className={`group p-6 rounded-2xl bg-card border ${colors.border} ${colors.hover} transition-all duration-300 hover-lift block`}
              >
                <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <span className={`inline-flex items-center gap-1 text-sm font-semibold ${colors.text} group-hover:gap-2 transition-all`}>
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
