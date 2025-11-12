import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Bot, Workflow, Palette, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Website & Web-App Development",
      description: "End-to-end development of websites and web applications tailored to your needs",
      features: [
        "Custom website design and development",
        "Responsive and mobile-first approach",
        "E-commerce platforms",
        "Content management systems",
        "Progressive web applications",
        "Performance optimization and SEO",
      ],
    },
    {
      icon: Bot,
      title: "AI Chatbot Development",
      description: "Building conversational chatbots trained on your specific data for enhanced customer support",
      features: [
        "Website-specific chatbot training",
        "PDF and document-based knowledge bases",
        "Natural language processing",
        "Multi-language support",
        "Custom integration with existing systems",
        "Analytics and performance tracking",
      ],
    },
   
    {
      icon: Palette,
      title: "UI/UX & Product Consulting",
      description: "Interface design, wireframing, and digital product strategy for exceptional user experiences",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing",
        "Design system creation",
        "Product strategy and roadmapping",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">What We Offer</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive technology solutions designed to help your business thrive in the digital age
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <service.icon className="h-16 w-16 text-primary mb-6" />
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Approach</h2>
          <p className="text-lg text-muted-foreground mb-12">
            We follow a proven methodology to ensure your project's success from concept to deployment
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {["Discovery", "Planning", "Development", "Launch"].map((phase, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-primary mb-3">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="font-semibold text-lg">{phase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can help bring your vision to life
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">
              Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
