

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground hover:text-primary transition-colors duration-300">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 hover:text-primary transition-colors duration-300">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 hover:translate-x-2 transform">
                  I'm always interested in discussing new opportunities, partnerships, 
                  and innovative approaches to learning and development. Whether you're 
                  looking for strategic consulting or want to explore collaboration possibilities, 
                  I'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300 group">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <span className="text-primary text-sm">📧</span>
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors duration-300">s.ganguly1984@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300 group">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <span className="text-primary text-sm">📱</span>
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors duration-300">+91-8123000180</span>
                </div>
                
                <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300 group">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <span className="text-primary text-sm">📍</span>
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors duration-300">Bengaluru, India</span>
                </div>
                
                <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300 group">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <span className="text-primary text-sm">💼</span>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/swarnatama-ganguli/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline group-hover:text-primary/80 transition-colors duration-300"
                  >
                    LinkedIn Profile
                  </a>
                </div>

                <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300 group">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <span className="text-primary text-sm">🔗</span>
                  </div>
                  <a 
                    href="https://github.com/SwarnatamaGanguli" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline group-hover:text-primary/80 transition-colors duration-300"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 transform">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 hover:text-primary transition-colors duration-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary/50 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 hover:text-primary transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 hover:text-primary transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary/50 transition-all duration-300"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg transform"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

