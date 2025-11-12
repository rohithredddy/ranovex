import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, MessageSquare, FileText, Sparkles } from "lucide-react";
import edumateImage from "@/assets/edumate.jpg";
import chatbotImage from "@/assets/chatbot.jpg";
import resumeImage from "@/assets/resume.jpg";

const Products = () => {
  const products = [
    {
      image: edumateImage,
      icon: GraduationCap,
      title: "EduMate",
      tagline: "Your Academic Companion",
      description: "A comprehensive web platform designed specifically for college students to access verified notes, previous year question papers, and assignment resources. EduMate centralizes academic materials, making studying more efficient and organized.",
      features: [
        "Verified study materials and notes",
        "Previous year question papers",
        "Assignment resources and guides",
        "Subject-wise organization",
        "Search and filter functionality",
        "Community-driven content",
      ],
      status: "Live",
    },
    {
      image: chatbotImage,
      icon: MessageSquare,
      title: "Site Chatbot Builder",
      tagline: "Intelligent Conversational AI",
      description: "Create custom chatbots that learn from your website content or document data to provide real-time, intelligent support to your visitors. Perfect for customer service, FAQs, and user guidance.",
      features: [
        "Train on website content",
        "PDF and document integration",
        "Natural language understanding",
        "Customizable appearance",
        "Multi-language support",
        "Analytics dashboard",
      ],
      status: "In Development",
    },
    {
      image: resumeImage,
      icon: FileText,
      title: "AI Resume Assistant",
      tagline: "Smart Career Tools",
      description: "An intelligent resume analyzer and generator that helps job seekers create professional, ATS-friendly resumes. Get personalized suggestions and optimize your resume for specific job applications.",
      features: [
        "AI-powered resume analysis",
        "ATS compatibility checking",
        "Personalized suggestions",
        "Multiple template options",
        "Keyword optimization",
        "Export in various formats",
      ],
      status: "In Development",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Innovative solutions designed to solve real-world problems and enhance digital experiences
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {products.map((product, index) => (
              <div key={index} className="animate-fade-in">
                <Card className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                    </div>
                    <CardContent className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <product.icon className="h-10 w-10 text-primary" />
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                          {product.status}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
                      <p className="text-primary font-medium mb-4">{product.tagline}</p>
                      <p className="text-muted-foreground mb-6">{product.description}</p>
                      
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Key Features:</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button variant="hero">
                        Learn More
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Products */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">More Coming Soon</h2>
          <p className="text-lg text-muted-foreground">
            We're constantly innovating and developing new AI-powered tools and productivity solutions. Stay tuned for exciting announcements about our upcoming products in education technology, business automation, and intelligent systems.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;
