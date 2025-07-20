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
      title: "The Premium Chocolate Factory – Sales Highlights 2023",
      description: "Comprehensive sales analysis dashboard for premium chocolate manufacturing, tracking performance across products, regions, and sales teams. World's most delivered chocolate with consistent monthly performance.",
      achievements: [
        "Achieved $5.37M total sales with 516K boxes sold",
        "Maintained consistent $0.4M-$0.6M monthly sales performance",
        "Analyzed top 5 international markets and sales team performance",
        "Identified top 10 product performers led by Peanut Butter Delight ($0.63M)"
      ],
      tags: ["Sales Analytics", "Product Performance", "International Markets", "Team Performance"],
      image: "/lovable-uploads/df2c9e1f-020a-4cf8-932b-b861056c1c9b.png"
    },
    {
      title: "Motor Insurance Data Analysis – Summary Report",
      description: "Comprehensive Power BI dashboard analyzing motor insurance performance metrics across regions, time periods, and product categories. Features AI-driven insights for policy management and customer retention strategies.",
      achievements: [
        "Analyzed ₹38.59M total premium with 2,000 policies tracked",
        "Achieved 51.6% conversion rate with 418.12 days average policy tenure",
        "Identified regional performance patterns across East, Southern, Northern, and West regions",
        "Implemented AI insights showing 47% reduction in lapses (Jan-Apr 2024: 19→9)"
      ],
      tags: ["Motor Insurance", "Policy Analytics", "Regional Analysis", "AI Insights"],
      image: "/lovable-uploads/002463ec-6805-4483-bf91-7bbad37933fe.png"
    },
    {
      title: "Cat Bite Trends in Kashmir and Treatment Dashboard",
      description: "Comprehensive healthcare analytics dashboard tracking cat bite incidents in Kashmir region, analyzing severity patterns, victim demographics, and treatment effectiveness across different age groups and locations.",
      achievements: [
        "Analyzed 500+ cat bite incidents with severity distribution tracking",
        "Identified peak incident trends with 24.60% most affected in Teen (13-19) age group",
        "Mapped geographical distribution across Srinagar and surrounding areas",
        "Developed treatment cost analysis and estimated recovery metrics"
      ],
      tags: ["Healthcare Analytics", "Public Health", "Injury Prevention", "Treatment Analysis"],
      image: "/lovable-uploads/e3684537-791c-4dca-ac45-d40b166ae5d8.png"
    },
    {
      title: "Hospital Management Analytics Dashboard",
      description: "Advanced Power BI dashboard providing comprehensive hospital operations analysis including patient flow, billing optimization, treatment costs, and departmental performance metrics for enhanced healthcare management.",
      achievements: [
        "Tracked $4.3M total billing with $2.7M treatment costs across departments",
        "Analyzed 484 total patients with detailed weekday admission patterns",
        "Optimized department performance tracking (Internal Medicine: $1.17M, Orthopedics: $1.07M)",
        "Implemented patient satisfaction scoring system with 5.44 average satisfaction rate"
      ],
      tags: ["Hospital Management", "Healthcare Analytics", "Patient Flow", "Billing Analytics"],
      image: "/lovable-uploads/3f943837-5c7a-48c6-9216-2e9e818061b3.png"
    },
    {
      title: "Educational Admission Analytics Dashboard",
      description: "Comprehensive Power BI dashboard analyzing student admission patterns across multiple courses (MBA, RANU, SUMAN) for May-July period, tracking conversion rates, payment status, and enrollment trends.",
      achievements: [
        "Analyzed 178 total candidates with 71 successful admissions (39.89% success rate)",
        "Tracked payment patterns across weekdays vs weekends with detailed course-wise breakdown",
        "Monitored pending registrations (42) and payment received (71) for operational efficiency",
        "Implemented multi-dimensional analysis across BPT, Pharmacy, Biotech, and Radiology programs"
      ],
      tags: ["Educational Analytics", "Admission Management", "Student Enrollment", "Course Performance"],
      image: "/lovable-uploads/3fc2f062-83e4-41f9-99bb-aae6dcf63a02.png"
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
