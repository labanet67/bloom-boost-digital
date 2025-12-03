import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, TrendingUp, Sparkles } from "lucide-react";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden gradient-hero-bg">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Trusted by 500+ brands worldwide
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-slide-up">
            Grow Your Following.
            <br />
            <span className="gradient-text">Convert Them Into Customers.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Follow + turns content into loyal followers and followers into paying customers 
            with targeted ads, viral content, and conversion funnels.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {[
              { icon: Users, text: "Gain real followers" },
              { icon: TrendingUp, text: "Ads that convert" },
              { icon: Sparkles, text: "Content that sells" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft border border-border/50"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Book Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-ghost" size="xl">
              <Play className="w-5 h-5" />
              See Case Studies
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: 42, suffix: "K+", label: "Followers Generated" },
              { value: 3.2, suffix: "×", label: "Avg. ROAS" },
              { value: 500, suffix: "+", label: "Happy Clients" },
              { value: 98, suffix: "%", label: "Client Retention" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift">
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating 3D-style elements */}
        <div className="absolute top-40 left-8 hidden lg:block animate-float">
          <div className="w-16 h-16 rounded-2xl gradient-bg shadow-glow rotate-12 flex items-center justify-center">
            <span className="text-2xl">📈</span>
          </div>
        </div>
        <div className="absolute top-60 right-12 hidden lg:block animate-float-delayed">
          <div className="w-14 h-14 rounded-2xl bg-accent shadow-accent-glow -rotate-12 flex items-center justify-center">
            <span className="text-2xl">❤️</span>
          </div>
        </div>
        <div className="absolute bottom-40 left-20 hidden lg:block animate-float">
          <div className="w-12 h-12 rounded-2xl bg-secondary shadow-medium rotate-6 flex items-center justify-center">
            <span className="text-xl">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
