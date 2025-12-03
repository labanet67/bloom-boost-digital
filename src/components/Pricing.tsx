import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for creators just getting started",
    price: "$997",
    period: "/month",
    features: [
      "Social media audit",
      "Content calendar (4 posts/week)",
      "Basic engagement strategy",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Start Growing",
    popular: false,
  },
  {
    name: "Growth",
    description: "For brands ready to scale rapidly",
    price: "$2,497",
    period: "/month",
    features: [
      "Everything in Starter",
      "Paid ads management ($5K/mo budget)",
      "Content production (Reels + Stories)",
      "Community management",
      "Bi-weekly strategy calls",
      "Priority support",
    ],
    cta: "Accelerate Growth",
    popular: true,
  },
  {
    name: "Accelerator",
    description: "Full-service growth partnership",
    price: "$4,997",
    period: "/month",
    features: [
      "Everything in Growth",
      "Unlimited ad budget management",
      "Influencer partnerships",
      "Conversion funnel optimization",
      "Dedicated account manager",
      "Weekly strategy sessions",
      "White-label reports",
    ],
    cta: "Go Unlimited",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Pricing Plans
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="gradient-text">Growth Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible plans designed to match your stage of growth. 
            All plans include our proven growth methodology.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover-lift ${
                plan.popular
                  ? "gradient-bg p-[2px]"
                  : "bg-card border border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className={plan.popular ? "bg-card rounded-[calc(1.5rem-2px)] p-8 h-full" : ""}>
                <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="font-heading text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-primary" : "text-success"}`} />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom plan CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution for your enterprise?
          </p>
          <Button variant="ghost" className="text-primary">
            Contact us for Enterprise pricing →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
