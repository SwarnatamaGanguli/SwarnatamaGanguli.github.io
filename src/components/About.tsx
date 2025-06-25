
export function About() {
  const skills = [
    "Training & Capability Development",
    "B2B Learning Solutions",
    "Digital Transformation", 
    "Leadership Development",
    "Content Strategy",
    "Stakeholder Management",
    "Cybersecurity",
    "Cloud Technologies",
    "Data Visualization",
    "Power BI Analytics",
    "Business Intelligence",
    "Dashboard Design"
  ];

  const partnerLogos = [
    { name: "ExceleCom", logo: "/lovable-uploads/excelecom-logo.png" },
    { name: "GPIC", logo: "/lovable-uploads/gpic-logo.png" },
    { name: "NEC", logo: "/lovable-uploads/nec-logo.png" },
    { name: "ExxonMobil", logo: "/lovable-uploads/exxonmobil-logo.png" },
    { name: "Hewlett Packard Enterprise", logo: "/lovable-uploads/hpe-logo.png" },
    { name: "Jagdale", logo: "/lovable-uploads/jagdale-logo.png" },
    { name: "Sonata Software", logo: "/lovable-uploads/sonata-logo.png" },
    { name: "Sony", logo: "/lovable-uploads/sony-logo.png" },
    { name: "EY", logo: "/lovable-uploads/ey-logo.png" },
    { name: "Zycus", logo: "/lovable-uploads/zycus-logo.png" },
    { name: "Loyalty Methods", logo: "/lovable-uploads/loyalty-methods-logo.png" },
    { name: "Harman", logo: "/lovable-uploads/harman-logo.png" }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground hover:text-primary transition-colors duration-300">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slide-in">
              <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 hover:translate-x-2 transform">
                I'm a seasoned leader with over 16 years of experience in B2B learning solutions sales, 
                specializing in curating content based on business needs and providing suitable solutions 
                to corporate sectors.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 hover:translate-x-2 transform">
                Currently serving as Founder Director of KPI Ladder, where I lead strategic initiatives 
                in generative AI, power platforms, cybersecurity, and digital transformation. I'm passionate 
                about forging global partnerships and delivering high-impact learning programs.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 hover:translate-x-2 transform">
                As a <span className="font-semibold text-primary">Microsoft Certified Power BI Data Analyst</span>, 
                I specialize in transforming complex data into actionable insights through compelling visualizations 
                and interactive dashboards. My expertise spans across training lifecycle management, vendor relationships, 
                and thought leadership in the L&D consulting domain.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 hover:text-primary transition-colors duration-300">Key Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-card rounded-lg border border-border text-sm text-card-foreground hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-md transform hover:-translate-y-1 hover:border-primary"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Corporate Partnerships Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground hover:text-primary transition-colors duration-300">
              Provided Competency Development Solutions To
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
              {partnerLogos.map((partner, index) => (
                <div 
                  key={index}
                  className="w-20 h-20 flex items-center justify-center bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:scale-110 transform hover:-translate-y-2 hover:border-primary/50 group"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6 hover:text-foreground transition-colors duration-300">
              Delivered competency development solutions to Fortune 500 companies and leading enterprises across IT, Energy, Consulting, and Technology sectors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
