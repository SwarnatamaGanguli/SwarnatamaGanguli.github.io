
export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8 px-6">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            © 2024 Swarnatama Ganguli. All rights reserved.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/swarnatama-ganguli/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:s.ganguly1984@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
