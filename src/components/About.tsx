
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

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground hover:text-primary transition-colors duration-300">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
        </div>
      </div>
    </section>
  );
}
