
export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto text-center animate-fade-in">
        <div className="mb-6">
          <img
            src="/lovable-uploads/8c22d14b-28e6-48ed-a4b9-dbc9a9801e39.png"
            alt="Swarnatama Ganguli"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Swarnatama Ganguli
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Seasoned leader with 16+ years of experience in B2B learning solutions, 
          driving digital transformation and thought leadership in L&D consulting.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium"
          >
            Learn More
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-accent transition-all duration-300 font-medium"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
