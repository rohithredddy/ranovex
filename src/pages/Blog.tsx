import { BookOpen } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Insights & Ideas
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Thoughts on technology, design, and innovation from the Ranovex Labs team
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">🚀 Coming Soon</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Our blogs are currently under preparation. Stay tuned for insightful articles, updates, and stories from our team.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
