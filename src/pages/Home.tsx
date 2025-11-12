import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Bot, Workflow, Palette, CheckCircle2, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import edumateImage from "@/assets/edumate.jpg";
import chatbotImage from "@/assets/chatbot.jpg";
import resumeImage from "@/assets/resume.jpg";

const Home = () => {
  const services = [
    {
      icon: Code2,
      title: "Website & Platform Development",
      description: "End-to-end site and product builds for individuals and businesses",
    },
    {
      icon: Bot,
      title: "AI Chatbot Solutions",
      description: "Conversational chatbots trained on your website or document data",
    },

    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Interface design, wireframing, and digital product strategy",
    },
  ];

  const products = [
    {
      image: edumateImage,
      title: "EduMate",
      description: "Web platform for students to access verified notes, question papers, and assignments",
      link: "/products",
    },
    {
      image: chatbotImage,
      title: "Site Chatbot Builder",
      description: "Create intelligent chatbots that learn from website or document data",
      link: "/products",
    },
    {
      image: resumeImage,
      title: "AI Resume Assistant",
      description: "Smart resume analyzer and generator powered by AI",
      link: "/products",
    },
  ];

  const reasons = [
    "Innovation-driven approach",
    "Reliable and scalable solutions",
    "High-quality, user-centric design",
    "Rapid development and deployment",
    "Continuous support and iteration",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Running Beyond <span className="text-gradient">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Designing intelligent digital products and AI-driven solutions for the modern era
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/products">
                Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Work With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg text-muted-foreground">
            Ranovex is a technology studio that develops web-based and AI-driven products. We blend technology, design, and data to create solutions that simplify knowledge access, improve engagement, and deliver meaningful impact.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground">Comprehensive solutions for your digital needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-muted-foreground">Innovative solutions powering the future</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <Button asChild variant="link" className="p-0">
                    <Link to={product.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Ranovex</h2>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center space-x-3 animate-fade-in">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="text-lg">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's Build Together</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with us today.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
