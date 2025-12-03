const logos = [
  { name: "TechCorp", initial: "TC" },
  { name: "GrowthLab", initial: "GL" },
  { name: "Bloom", initial: "BL" },
  { name: "Spark", initial: "SP" },
  { name: "Elevate", initial: "EL" },
  { name: "Nexus", initial: "NX" },
];

const SocialProof = () => {
  return (
    <section className="py-16 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by leading brands and creators
          </p>
        </div>

        {/* Logo marquee */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="font-heading font-bold text-primary">{logo.initial}</span>
              </div>
              <span className="font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12">
          {[
            { stat: "+42K", label: "Followers gained this month" },
            { stat: "3× ROAS", label: "Average return on ad spend" },
            { stat: "$2.4M", label: "Revenue generated for clients" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <span className="text-2xl font-heading font-bold gradient-text">{item.stat}</span>
              <span className="text-sm text-muted-foreground block mt-1">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
