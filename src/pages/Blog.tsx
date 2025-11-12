import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "AI for Education: Transforming How Students Learn",
      excerpt: "Exploring how artificial intelligence is revolutionizing educational platforms and creating personalized learning experiences for students worldwide.",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "AI & Education",
    },
    {
      title: "Designing for Accessibility: Building Inclusive Digital Products",
      excerpt: "Best practices and guidelines for creating web applications that are accessible to all users, regardless of their abilities or circumstances.",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "Design & UX",
    },
    {
      title: "Building with Students at Scale: The EduMate Journey",
      excerpt: "A deep dive into how we built and scaled a platform serving thousands of students, from initial concept to successful deployment.",
      date: "March 5, 2025",
      readTime: "10 min read",
      category: "Product Development",
    },
    {
      title: "The Future of Chatbots: Context-Aware AI Assistants",
      excerpt: "Understanding the evolution of chatbot technology and how context-aware AI is creating more natural and helpful conversational experiences.",
      date: "February 28, 2025",
      readTime: "6 min read",
      category: "AI Technology",
    },
    {
      title: "Modern Web Development: Tools and Technologies We Love",
      excerpt: "An overview of the cutting-edge tools, frameworks, and practices that power our development workflow at Ranovex Labs.",
      date: "February 20, 2025",
      readTime: "8 min read",
      category: "Development",
    },
    {
      title: "From Idea to Product: Our Development Philosophy",
      excerpt: "How we approach product development at Ranovex, from initial research and design through to launch and continuous improvement.",
      date: "February 15, 2025",
      readTime: "9 min read",
      category: "Product Strategy",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Insights & Ideas</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Thoughts on technology, design, and innovation from the Ranovex Labs team
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="link" className="p-0 h-auto font-semibold group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter to get the latest insights, product updates, and tech trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-input bg-background text-foreground flex-1 max-w-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="hero" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
