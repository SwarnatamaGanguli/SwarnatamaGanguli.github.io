
export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto text-center animate-fade-in">
        <div className="mb-6">
          <img
            src="/lovable-uploads/8c22d14b-28e6-48ed-a4b9-dbc9a9801e39.png"
            alt="Swarnatama Ganguli"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20 hover:border-primary/40 hover:scale-110 transition-all duration-500 hover:rotate-6"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight hover:text-primary transition-colors duration-300">
          Swarnatama Ganguli
        </h1>
        
        <div className="space-y-4 mb-8">
          <p className="text-xl md:text-2xl font-semibold text-primary">
            Data Analytics & Generative AI Practitioner
          </p>
          <p className="text-lg md:text-xl text-muted-foreground">
            Microsoft Certified Power BI Data Analyst
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming complex data into actionable insights across healthcare, insurance & educational sectors
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-6 mb-8">
          <a 
            href="https://github.com/SwarnatamaGanguli" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:border-primary text-foreground"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub Portfolio
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg transform"
          >
            Learn More
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-accent transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg transform hover:border-primary"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
