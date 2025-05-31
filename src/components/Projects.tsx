
export function Projects() {
  const projects = [
    {
      title: "KPI Ladder Consulting Enterprise",
      description: "Founded and scaled a high-impact Learning & Development consulting enterprise, delivering strategic training interventions across IT and non-IT companies in India and the Middle East.",
      achievements: [
        "Successfully delivered 500+ workshops",
        "Built partnerships with 1000+ consultants globally",
        "Achieved 4.8+ Google ranking with 100+ reviews"
      ],
      tags: ["Leadership", "L&D", "Global Partnerships"]
    },
    {
      title: "Digital Transformation Initiatives", 
      description: "Led comprehensive digital transformation projects focused on learning platforms, SEO optimization, and technology integration.",
      achievements: [
        "Developed SEO-friendly websites",
        "Implemented advanced analytics frameworks",
        "Boosted digital visibility by 300%"
      ],
      tags: ["Digital Strategy", "SEO", "Analytics"]
    },
    {
      title: "Cybersecurity Leadership Programs",
      description: "Organized exclusive cybersecurity events and roundtables in collaboration with Digital Security Foundation, fostering strategic dialogue among industry leaders.",
      achievements: [
        "Hosted CIO and CISO Roundtables",
        "Built strategic partnerships",
        "Enhanced brand visibility and credibility"
      ],
      tags: ["Cybersecurity", "Events", "Community"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground hover:text-primary transition-colors duration-300">
          Key Projects & Achievements
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover:shadow-xl transition-all duration-500 group hover:-translate-y-4 transform hover:rotate-1 hover:border-primary/50"
            >
              <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {project.description}
              </p>
              
              <div className="space-y-2 mb-4">
                {project.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-all duration-300 hover:translate-x-2 transform">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></div>
                    {achievement}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 transform"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
