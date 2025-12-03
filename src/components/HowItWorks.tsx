import { ClipboardCheck, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Audit",
    description: "We analyze your current presence, audience, and competitors to identify growth opportunities.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategy",
    description: "Custom growth plan tailored to your brand, including content, ads, and engagement tactics.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Growth & Scale",
    description: "Execute, optimize, and scale. Watch your followers and revenue grow month over month.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            From Zero to <span className="gradient-text">Growth Hero</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven 3-step process has helped hundreds of brands achieve 
            explosive growth. Here's how we do it.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-accent/30" />
              )}

              <div className="relative bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift text-center">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-primary-foreground text-sm font-bold">
                  Step {step.step}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
