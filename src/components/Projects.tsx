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
      tags: ["Leadership", "L&D", "Global Partnerships"],
      image: null
    },
    {
      title: "Bank Customer Churn Analysis",
      description: "Developed comprehensive churn analysis dashboard for banking sector, analyzing customer behavior patterns, demographics, and risk factors to predict and prevent customer churn.",
      achievements: [
        "Analyzed 10K+ customer records",
        "Identified 20.37% churn rate with key insights",
        "Enhanced customer retention strategies by 40%"
      ],
      tags: ["Churn Analysis", "Banking Analytics", "Customer Intelligence"],
      image: "/lovable-uploads/7c852793-1e81-44ed-b7b7-738024cfa563.png"
    },
    {
      title: "Insurance Churn Data Analysis",
      description: "Created comprehensive Power BI dashboard analyzing insurance customer churn patterns across 10,000 customers, identifying key demographic and behavioral drivers to optimize retention strategies.",
      achievements: [
        "Analyzed 10K+ insurance customer records",
        "Identified 20.37% churn rate with detailed segmentation",
        "Developed key influencer analysis for targeted retention strategies",
        "Created multi-dimensional analysis across age, income, product, and customer score segments"
      ],
      tags: ["Insurance Analytics", "Churn Analysis", "Power BI", "Customer Segmentation"],
      image: "/lovable-uploads/b148a160-9baa-494a-87be-a230df2cb337.png"
    },
    {
      title: "Advanced Analytics Dashboards", 
      description: "Created comprehensive business intelligence solutions using Power BI, transforming complex datasets into actionable insights for executive decision-making.",
      achievements: [
        "Built 50+ interactive dashboards",
        "Reduced reporting time by 80%",
        "Improved data-driven decisions across teams"
      ],
      tags: ["Power BI", "Data Analytics", "Business Intelligence"],
      image: "/lovable-uploads/de63c089-cbd7-480c-a71a-58ba864c4aa7.png"
    },
    {
      title: "Project Management Analytics",
      description: "Developed sophisticated project tracking and performance analytics systems, enabling real-time monitoring of project health, budget utilization, and milestone achievements.",
      achievements: [
        "Tracked 100+ projects simultaneously",
        "Implemented predictive analytics models",
        "Enhanced project success rate by 35%"
      ],
      tags: ["Project Analytics", "Performance Tracking", "Predictive Modeling"],
      image: "/lovable-uploads/b9973312-e6bd-470a-b091-1aa7786ca456.png"
    },
    {
      title: "Healthcare Data Visualization",
      description: "Designed comprehensive healthcare analytics dashboards focusing on patient satisfaction, operational efficiency, and clinical outcomes for hospital management systems.",
      achievements: [
        "Improved patient satisfaction tracking",
        "Optimized resource allocation",
        "Enhanced clinical decision support"
      ],
      tags: ["Healthcare Analytics", "Patient Data", "Clinical Intelligence"],
      image: "/lovable-uploads/7d65cdc0-8c18-4ce7-8e84-624639d8335c.png"
    },
    {
      title: "Crime Analysis & Public Safety",
      description: "Developed public safety analytics platform for crime pattern analysis, resource optimization, and predictive policing strategies using advanced data visualization techniques.",
      achievements: [
        "Identified crime hotspots effectively",
        "Optimized patrol resource allocation",
        "Reduced response time by 25%"
      ],
      tags: ["Crime Analytics", "Public Safety", "Predictive Analysis"],
      image: "/lovable-uploads/87d6ff55-606d-4daa-acc8-dffacd1ef9e8.png"
    },
    {
      title: "Financial Services Analytics",
      description: "Built comprehensive financial analytics solutions including credit risk assessment, customer segmentation, and revenue optimization dashboards for banking and financial institutions.",
      achievements: [
        "Enhanced credit risk assessment accuracy",
        "Improved customer retention by 30%",
        "Optimized revenue streams analysis"
      ],
      tags: ["Financial Analytics", "Risk Assessment", "Customer Intelligence"],
      image: "/lovable-uploads/935a517a-bffc-44e7-bb70-6f2d21aca8e3.png"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground hover:text-primary transition-colors duration-300">
          Key Projects & Achievements
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-500 group hover:-translate-y-4 transform hover:rotate-1 hover:border-primary/50"
            >
              {project.image && (
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              
              <div className="p-6">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
