

export function About() {
  const skills = [
    "Data Analytics & Visualization",
    "Generative AI & Machine Learning",
    "Power BI & Business Intelligence",
    "Statistical Analysis & Modeling",
    "Healthcare Analytics",
    "Motor Insurance Analytics",
    "Educational Data Insights",
    "Dashboard Design & Development",
    "Python & R Programming",
    "SQL & Database Management",
    "PySpark & Big Data Processing",
    "PySql & Data Engineering",
    "Microsoft Fabric",
    "Azure AI & Cloud Technologies",
    "Prompt Engineering & AI Implementation"
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
                I'm a passionate Data Analytics & Generative AI practitioner with extensive experience in 
                transforming complex datasets into actionable business insights. I specialize in developing 
                comprehensive analytics solutions across healthcare, insurance, and educational sectors.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 hover:translate-x-2 transform">
                Currently serving as Founder Director of KPI Ladder, where I lead data-driven initiatives 
                in AI implementation, advanced analytics, and business intelligence solutions. I'm passionate 
                about leveraging generative AI to solve real-world business challenges and drive digital transformation.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 hover:translate-x-2 transform">
                As a <span className="font-semibold text-primary">Microsoft Certified Power BI Data Analyst</span>, 
                I excel in creating compelling visualizations, interactive dashboards, and predictive models. 
                My portfolio includes successful projects in motor insurance analytics, healthcare data insights, 
                and educational admission pattern analysis, delivering measurable business impact through data-driven solutions.
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

