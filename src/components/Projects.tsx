import { Github } from "lucide-react";
import ragChatbotImage from "@/assets/rag-chatbot-ui.png.asset.json";

export function Projects() {
  const projects = [
    {
      title: "RAG Chatbot with LangChain & Ollama",
      description: "Conversational AI application built with LangChain and Ollama, enabling retrieval-augmented generation over indexed documents. Features knowledge-base ingestion, source attribution, and an interactive chat UI.",
      achievements: [
        "Ingested and indexed document chunks for grounded question answering",
        "Implemented retrieval-augmented generation with cited source documents",
        "Built an interactive chat interface for document-based Q&A"
      ],
      tags: ["LangChain", "Ollama", "RAG", "Python", "GenAI"],
      image: "/lovable-uploads/rag-chatbot-ui.png",
      github: "https://github.com/SwarnatamaGanguli/rag_chatbot"
    },
    {
      title: "Pharma Conversational Analytics",
      description: "End-to-end conversational analytics solution for pharmaceutical data, enabling stakeholders to explore datasets and uncover insights through natural language interaction.",
      achievements: [
        "Designed a chat-driven interface for querying pharmaceutical datasets",
        "Applied LLM-powered reasoning for business-facing insights",
        "Streamlined access to complex analytics for non-technical users"
      ],
      tags: ["LangChain", "Conversational Analytics", "Python", "GenAI", "Pharma"],
      image: null,
      github: "https://github.com/SwarnatamaGanguli/pharma_conversational_analytics"
    },
    {
      title: "Python App with Gradio",
      description: "Generative AI application prototype built with Gradio, showcasing rapid UI development for interactive machine learning and LLM-powered demos.",
      achievements: [
        "Created a responsive web UI for Python-based ML workflows",
        "Integrated LLM capabilities into an accessible Gradio interface",
        "Demonstrated fast prototyping of AI-powered applications"
      ],
      tags: ["Gradio", "Python", "LLM", "GenAI", "UI"],
      image: null,
      github: "https://github.com/SwarnatamaGanguli/python_app_with_gradio"
    },
    {
      title: "EDA: From Messy Data to Insights",
      description: "Comprehensive exploratory data analysis project demonstrating end-to-end data cleaning, transformation, visualization, and insight extraction from unstructured, real-world datasets.",
      achievements: [
        "Performed data cleaning and transformation on messy datasets",
        "Generated visualizations that reveal actionable patterns",
        "Delivered end-to-end analytical insights from raw data"
      ],
      tags: ["EDA", "Python", "Data Cleaning", "Visualization"],
      image: null,
      github: "https://github.com/SwarnatamaGanguli/eda-from-messy-data-to-insights"
    },
    {
      title: "KPI Ladder Consulting Enterprise",
      description: "Founded and scaled a high-impact Learning & Development consulting enterprise, delivering strategic training interventions across IT and non-IT companies in India and the Middle East.",
      achievements: [
        "Successfully delivered 500+ workshops",
        "Built partnerships with 1000+ consultants globally", 
        "Achieved 4.8+ Google ranking with 100+ reviews"
      ],
      tags: ["Leadership", "L&D", "Global Partnerships"],
      image: null,
      github: null
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
      image: "/lovable-uploads/df2c9e1f-020a-4cf8-932b-b861056c1c9b.png",
      github: null
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
      image: "/lovable-uploads/002463ec-6805-4483-bf91-7bbad37933fe.png",
      github: null
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
      image: "/lovable-uploads/e3684537-791c-4dca-ac45-d40b166ae5d8.png",
      github: "https://github.com/SwarnatamaGanguli/Admission-report"
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
      image: "/lovable-uploads/3f943837-5c7a-48c6-9216-2e9e818061b3.png",
      github: null
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
      image: "/lovable-uploads/3fc2f062-83e4-41f9-99bb-aae6dcf63a02.png",
      github: null
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
      image: "/lovable-uploads/7c852793-1e81-44ed-b7b7-738024cfa563.png",
      github: null
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
      image: "/lovable-uploads/8d2171d3-f6e4-441e-a468-565269864c24.png",
      github: "https://github.com/SwarnatamaGanguli/Insurance_churn_dataanalysis"
    },
    {
      title: "Electric Vehicle Population Data Analysis",
      description: "Comprehensive analysis of Electric Vehicle (EV) population data primarily in Washington State and other states, offering insights into adoption trends, vehicle types, manufacturers, and city-level distribution patterns.",
      achievements: [
        "Analyzed 258K+ electric vehicle registrations in Washington State",
        "Tracked 79.61% Battery Electric Vehicle (BEV) adoption rate",
        "Mapped geographic distribution across cities and regions",
        "Analyzed EV manufacturers and model year trends for market insights"
      ],
      tags: ["EV Analytics", "Transportation Data", "Geographic Analysis", "Market Trends"],
      image: "/lovable-uploads/17094a4f-8384-4909-a4d2-6a4d44ab2b44.png",
      github: "https://github.com/SwarnatamaGanguli/EV-data"
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
      image: "/lovable-uploads/de63c089-cbd7-480c-a71a-58ba864c4aa7.png",
      github: null
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
      image: "/lovable-uploads/b9973312-e6bd-470a-b091-1aa7786ca456.png",
      github: null
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
      image: "/lovable-uploads/7d65cdc0-8c18-4ce7-8e84-624639d8335c.png",
      github: null
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
      image: "/lovable-uploads/87d6ff55-606d-4daa-acc8-dffacd1ef9e8.png",
      github: null
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
      image: "/lovable-uploads/935a517a-bffc-44e7-bb70-6f2d21aca8e3.png",
      github: null
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
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 transform"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {project.github && (
                  <div className="pt-4 border-t border-border">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 text-sm font-medium"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
