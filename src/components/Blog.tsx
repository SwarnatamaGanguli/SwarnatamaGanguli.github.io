
export function Blog() {
  const blogPosts = [
    {
      title: "The Future of B2B Learning Solutions",
      excerpt: "Exploring how AI and digital transformation are reshaping corporate learning and development strategies.",
      date: "May 15, 2024",
      readTime: "5 min read",
      tags: ["AI", "L&D", "Digital Transformation"]
    },
    {
      title: "Building Global Partnerships in Consulting",
      excerpt: "Key strategies for scaling consulting enterprises through strategic partnerships and stakeholder management.",
      date: "May 10, 2024", 
      readTime: "7 min read",
      tags: ["Partnerships", "Consulting", "Growth"]
    },
    {
      title: "Cybersecurity Leadership in 2024",
      excerpt: "Insights from industry roundtables on emerging cybersecurity challenges and leadership best practices.",
      date: "May 5, 2024",
      readTime: "6 min read", 
      tags: ["Cybersecurity", "Leadership", "Trends"]
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Latest Insights
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="text-primary font-medium text-sm group-hover:underline">
                Read More →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
