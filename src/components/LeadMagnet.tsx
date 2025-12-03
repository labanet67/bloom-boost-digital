import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, CheckCircle2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Success! 🎉",
        description: "Check your inbox for your free growth checklist!",
      });
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-bg rounded-3xl p-1">
            <div className="bg-card rounded-[calc(1.5rem-4px)] p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Download className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      Free Resource
                    </span>
                  </div>

                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                    30-Day Follower Growth Checklist
                  </h2>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    The exact strategies we use with clients to grow their following. 
                    Includes content templates, posting schedules, and engagement hacks.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "15+ content ideas that go viral",
                      "Optimal posting times & frequency",
                      "Hashtag strategy guide",
                      "Engagement boost tactics",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Form */}
                <div className="bg-muted/50 rounded-2xl p-6">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Your Email
                        </label>
                        <Input
                          type="email"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="h-12 rounded-xl bg-card border-border/50 focus:border-primary"
                        />
                      </div>

                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        <Sparkles className="w-5 h-5" />
                        Get Free Checklist
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        No spam, ever. Unsubscribe anytime.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-success" />
                      </div>
                      <h3 className="font-heading text-xl font-bold mb-2">You're In!</h3>
                      <p className="text-muted-foreground">
                        Check your inbox for the download link.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
