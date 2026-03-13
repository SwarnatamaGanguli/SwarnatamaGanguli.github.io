import { useState } from 'react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().trim().max(20, 'Phone must be less than 20 characters').regex(/^[+\d\s()-]*$/, 'Invalid phone number format').optional().or(z.literal('')),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setValidationErrors({});

    const formData = new FormData(e.currentTarget);
    const rawData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    const result = contactSchema.safeParse(rawData);
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) errors[err.path[0] as string] = err.message;
      });
      setValidationErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      await fetch('https://querycrm.com/f/3cwk5ehbfx', {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
      
      setSubmitStatus('success');
      e.currentTarget.reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 hover:text-primary transition-colors duration-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary/50 transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 hover:text-primary transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2 hover:text-primary transition-colors duration-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary/50 transition-all duration-300"
                    placeholder="Your Phone"
                  />
                </div>

                <input type="hidden" name="source" value="Portfolio Website" />
                <input type="hidden" name="form_type" value="Contact Form" />
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 hover:text-primary transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary/50 transition-all duration-300"
                    placeholder="Your message..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-green-600 text-center font-medium">
                    Message sent successfully!
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-red-600 text-center font-medium">
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
