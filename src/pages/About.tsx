import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Newspaper, Users, Zap, TrendingUp } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Maya Chen",
      role: "Founder & CEO",
      bio: "Former Meta ads strategist with 10+ years scaling DTC brands. Built Follow+ to democratize growth marketing.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Jordan Rivera",
      role: "Head of Paid Media",
      bio: "Ex-TikTok performance lead. Managed $50M+ in ad spend across Meta, TikTok, and Google.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Aisha Thompson",
      role: "Creative Director",
      bio: "Award-winning content creator. Her work has generated 500M+ organic views across platforms.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Marcus Kim",
      role: "Head of Influencer Partnerships",
      bio: "Built influencer networks for Fortune 500 brands. Specializes in authentic creator relationships.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Elena Santos",
      role: "Growth Strategist",
      bio: "Data-driven marketer who's helped 200+ ecommerce brands achieve 3x+ ROAS.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "David Park",
      role: "Tech & Analytics Lead",
      bio: "Full-stack engineer and analytics expert. Builds the tools that power our data-driven approach.",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const awards = [
    { title: "Best Growth Agency 2024", org: "Marketing Excellence Awards" },
    { title: "Top 50 Agencies to Watch", org: "AdAge" },
    { title: "Innovation in Digital Marketing", org: "Webby Awards" },
    { title: "Best ROI Performance", org: "Clutch Top Agencies" },
  ];

  const pressLogos = [
    "Forbes", "TechCrunch", "Marketing Week", "AdWeek", "Business Insider", "Entrepreneur"
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-First Always",
      description: "Your success is our success. We treat every brand like our own.",
    },
    {
      icon: Zap,
      title: "Data-Driven Creativity",
      description: "We blend analytics with artistry for campaigns that perform and inspire.",
    },
    {
      icon: Users,
      title: "Radical Transparency",
      description: "No hidden fees, no vanity metrics. Just honest reporting and real results.",
    },
    {
      icon: TrendingUp,
      title: "Relentless Growth",
      description: "We're never satisfied. There's always another level to reach together.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-fade-in">
              Our Story
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              We Help Brands Become{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-supporting">
                Unmissable
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Follow+ was born from a simple belief: every brand deserves access to 
              world-class growth marketing, not just the ones with massive budgets.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                From Startup Struggle to Growth Engine
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 2019, our founder Maya Chen was running paid ads for a small DTC skincare brand. 
                  Despite having an amazing product, they couldn't compete with bigger brands' marketing budgets.
                </p>
                <p>
                  That's when she realized: the gap wasn't talent or strategy—it was access. 
                  Enterprise-level growth tactics were locked behind expensive agency retainers 
                  and complex tech stacks.
                </p>
                <p>
                  <strong className="text-foreground">Follow+ was created to change that.</strong> We've built 
                  a team of former Meta, TikTok, and agency veterans who bring Fortune 500 
                  strategies to growing brands at accessible price points.
                </p>
                <p>
                  Today, we've helped 500+ brands grow their following, increase their ROAS, 
                  and build sustainable marketing engines that scale with their business.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-supporting/20 p-8">
                <div className="w-full h-full rounded-2xl bg-card border border-border/50 shadow-large flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      500+
                    </div>
                    <p className="text-muted-foreground">Brands Scaled</p>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div>
                        <div className="text-3xl font-bold text-foreground">$120M+</div>
                        <p className="text-sm text-muted-foreground">Ad Spend Managed</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-foreground">3.2×</div>
                        <p className="text-sm text-muted-foreground">Avg. Follower Growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-large">
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg">
                To democratize growth marketing by giving every ambitious brand access to 
                enterprise-level strategies, creative talent, and data-driven optimization—
                regardless of their size or budget.
              </p>
            </div>
            <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-large">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-supporting flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg">
                A world where every brand can build a loyal community, where followers 
                become customers, and where authentic growth trumps vanity metrics. 
                We're building the future of performance marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide every campaign we run, every strategy we build, 
              and every relationship we nurture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-large transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              Meet the Team
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Humans Behind Your Growth
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A team of platform veterans, creative powerhouses, and data nerds 
              united by one goal: making your brand unmissable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-card rounded-3xl overflow-hidden border border-border/50 shadow-large hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Press */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Awards */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">Awards & Recognition</h2>
              </div>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <h3 className="font-heading font-bold text-foreground">{award.title}</h3>
                    <p className="text-muted-foreground text-sm">{award.org}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Press */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-supporting flex items-center justify-center">
                  <Newspaper className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">As Seen In</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {pressLogos.map((logo, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-xl p-6 border border-border/50 flex items-center justify-center hover:border-primary/30 transition-colors"
                  >
                    <span className="font-heading font-bold text-muted-foreground text-lg">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-primary via-primary to-accent rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
                Let's chat about your growth goals and see if we're the right fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Book Free Strategy Call
                </Button>
                <Link to="/#case-studies">
                  <Button variant="hero-ghost" size="lg">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
