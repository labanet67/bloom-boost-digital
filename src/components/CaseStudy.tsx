import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";

const CaseStudy = () => {
  return (
    <section id="case-studies" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-success/10 text-success text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Real Results, <span className="gradient-text">Real Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped brands like yours achieve extraordinary results.
          </p>
        </div>

        {/* Featured case study */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <span className="font-heading font-bold text-secondary">BL</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold">Bloom Skincare</h4>
                    <span className="text-sm text-muted-foreground">Beauty & Wellness</span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  From 2K to 50K followers in 90 days with a 4.2× ROAS
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Follow + completely transformed our social presence. Their content strategy 
                  and paid ads brought us customers we never thought possible. Our DMs are 
                  flooded with orders now!"
                </p>

                <p className="font-medium text-foreground mb-6">
                  — Sarah Chen, Founder of Bloom Skincare
                </p>

                <Button variant="gradient">
                  Explore Case Study
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: "Followers", before: "2K", after: "50K", color: "primary" },
                  { icon: TrendingUp, label: "ROAS", before: "1.2×", after: "4.2×", color: "accent" },
                  { icon: DollarSign, label: "Revenue", before: "$8K/mo", after: "$42K/mo", color: "success" },
                  { icon: TrendingUp, label: "Engagement", before: "1.2%", after: "6.8%", color: "secondary" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-5 border border-border/50 hover:border-primary/30 transition-all hover-lift"
                  >
                    <stat.icon className={`w-6 h-6 text-${stat.color} mb-3`} />
                    <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground line-through text-sm">{stat.before}</span>
                      <ArrowRight className="w-3 h-3 text-muted-foreground" />
                      <span className="font-heading font-bold text-xl gradient-text">{stat.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
