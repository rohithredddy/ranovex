import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, Palette, FileText, Mail } from "lucide-react";

const Careers = () => {
  const openings = [
    {
      icon: Code,
      title: "Frontend Developer Intern",
      duration: "6 months",
      description: "Work on modern web applications using React, TypeScript, and Tailwind CSS. Build responsive user interfaces and collaborate with our design team.",
      requirements: ["React.js knowledge", "HTML/CSS proficiency", "Problem-solving skills", "Portfolio of projects"],
    },
    {
      icon: Code,
      title: "Backend Developer Intern",
      duration: "6 months",
      description: "Develop server-side applications and APIs. Work with databases, authentication systems, and cloud infrastructure.",
      requirements: ["Node.js or Python", "Database knowledge", "API development", "Version control (Git)"],
    },
    
    {
      icon: FileText,
      title: "Content & Research Intern",
      duration: "6 months",
      description: "Research industry trends, create content for our products and blog, and help shape our brand voice.",
      requirements: ["Excellent writing skills", "Research abilities", "Tech enthusiasm", "Attention to detail"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Join the Innovation</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Be part of a team that's building the future of technology, one solution at a time
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Ranovex ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-3">Learn & Grow</h3>
              <p className="text-muted-foreground">Work on real projects with modern technologies and gain hands-on experience</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Flexible Environment</h3>
              <p className="text-muted-foreground">Remote-friendly culture with flexible working hours and collaborative atmosphere</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-muted-foreground">Contribute to products that make a real difference for users across the globe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
            <p className="text-muted-foreground">Internship and collaboration opportunities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {openings.map((opening, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <opening.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{opening.title}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{opening.duration}</p>
                  <p className="text-muted-foreground mb-6">{opening.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm">What we're looking for:</h4>
                    <ul className="space-y-2">
                      {opening.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full" variant="hero" asChild>
                    <a href="mailto:info@ranovex.com">Apply Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {["Apply", "Review", "Interview", "Onboard"].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary/20 mb-3">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="font-semibold text-lg">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See the Right Role?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're always interested in meeting talented individuals. Send us your resume and let us know how you'd like to contribute.
          </p>
          <Button asChild variant="hero" size="lg">
            <a href="mailto:info@ranovex.com">Send Your Resume</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
