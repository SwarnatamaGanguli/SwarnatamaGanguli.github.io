
export function About() {
  const skills = [
    "Training & Capability Development",
    "B2B Learning Solutions",
    "Digital Transformation", 
    "Leadership Development",
    "Content Strategy",
    "Stakeholder Management",
    "Cybersecurity",
    "Cloud Technologies"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a seasoned leader with over 16 years of experience in B2B learning solutions sales, 
                specializing in curating content based on business needs and providing suitable solutions 
                to corporate sectors.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently serving as Founder Director of KPI Ladder, where I lead strategic initiatives 
                in generative AI, power platforms, cybersecurity, and digital transformation. I'm passionate 
                about forging global partnerships and delivering high-impact learning programs.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across training lifecycle management, vendor relationships, 
                and thought leadership in the L&D consulting domain.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-card rounded-lg border border-border text-sm text-card-foreground hover:bg-accent transition-colors duration-200"
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
