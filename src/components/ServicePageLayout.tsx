import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface ServiceFeature {
  title: string;
  description: string;
}

interface Deliverable {
  title: string;
  included: boolean;
}

interface CaseStudySnippet {
  company: string;
  industry: string;
  result: string;
  metric: string;
  quote: string;
  author: string;
}

interface ServicePageLayoutProps {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  color: "primary" | "accent" | "secondary" | "success";
  features: ServiceFeature[];
  deliverables: Deliverable[];
  caseStudy: CaseStudySnippet;
  whoItsFor: string[];
  children?: ReactNode;
}

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/20",
    gradient: "from-primary to-accent",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/20",
    gradient: "from-accent to-secondary",
  },
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    border: "border-secondary/20",
    gradient: "from-secondary to-primary",
  },
  success: {
    bg: "bg-success/10",
    text: "text-success",
    border: "border-success/20",
    gradient: "from-success to-primary",
  },
};

const ServicePageLayout = ({
  icon: Icon,
  title,
  tagline,
  description,
  color,
  features,
  deliverables,
  caseStudy,
  whoItsFor,
}: ServicePageLayoutProps) => {
  const colors = colorClasses[color];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden gradient-hero-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-20 left-10 w-72 h-72 ${colors.bg} rounded-full blur-3xl animate-float`} />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="max-w-4xl">
            <div className={`w-20 h-20 rounded-2xl ${colors.bg} flex items-center justify-center mb-6`}>
              <Icon className={`w-10 h-10 ${colors.text}`} />
            </div>

            <span className={`inline-block px-4 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-semibold mb-4`}>
              {tagline}
            </span>

            <h1 className="font-heading text-5xl md:text-6xl font-extrabold mb-6">
              {title}
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              {description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                Start Your Growth Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-ghost" size="xl">
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold mb-6 text-center">Who This Is For</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {whoItsFor.map((item, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-card border border-border/50 text-foreground font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-semibold mb-4`}>
              What You Get
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Features & <span className="gradient-text">Benefits</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-card border ${colors.border} hover:border-primary/40 transition-all duration-300 hover-lift`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} opacity-20 flex items-center justify-center mb-4`}>
                  <span className="text-2xl font-bold text-foreground">{index + 1}</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className={`inline-block px-4 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-semibold mb-4`}>
                Deliverables
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                What We <span className="gradient-text">Deliver</span>
              </h2>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-4">
                {deliverables.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-background/50"
                  >
                    <div className={`w-6 h-6 rounded-full ${item.included ? "bg-success/20" : "bg-muted"} flex items-center justify-center`}>
                      <Check className={`w-4 h-4 ${item.included ? "text-success" : "text-muted-foreground"}`} />
                    </div>
                    <span className={item.included ? "text-foreground" : "text-muted-foreground"}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Snippet */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-semibold mb-4`}>
              Success Story
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Real <span className="gradient-text">Results</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className={`p-1 rounded-3xl bg-gradient-to-r ${colors.gradient}`}>
              <div className="bg-card rounded-[calc(1.5rem-4px)] p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <span className={`font-heading font-bold text-lg ${colors.text}`}>
                      {caseStudy.company.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">{caseStudy.company}</h3>
                    <span className="text-sm text-muted-foreground">{caseStudy.industry}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">
                    {caseStudy.metric}
                  </div>
                  <p className="text-lg text-muted-foreground">{caseStudy.result}</p>
                </div>

                <blockquote className="border-l-4 border-primary pl-6 mb-6">
                  <p className="text-lg italic text-foreground/80 mb-4">
                    "{caseStudy.quote}"
                  </p>
                  <cite className="text-muted-foreground not-italic">— {caseStudy.author}</cite>
                </blockquote>

                <Button variant="gradient">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Get Started</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a free strategy call and discover how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="xl">
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-ghost" size="xl">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;
