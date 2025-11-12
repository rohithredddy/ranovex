import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Shield, Sparkles, Users, Target } from "lucide-react";

const About = () => {
  const values = [
    { icon: Lightbulb, title: "Innovation", description: "Pushing boundaries with creative solutions" },
    { icon: Shield, title: "Integrity", description: "Transparent and honest in all we do" },
    { icon: Sparkles, title: "Simplicity", description: "Making complex technology accessible" },
    { icon: Users, title: "Collaboration", description: "Working together for better outcomes" },
    { icon: Target, title: "Excellence", description: "Committed to delivering quality" },
  ];

  const workProcess = [
    { step: "01", title: "Research", description: "Understanding your needs and market" },
    { step: "02", title: "Design", description: "Creating intuitive user experiences" },
    { step: "03", title: "Build", description: "Developing robust solutions" },
    { step: "04", title: "Iterate", description: "Continuous improvement and optimization" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">About Ranovex</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            An innovation-driven technology focused on creating value through smart products and scalable systems
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Who We Are</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="text-lg mb-4">
  Ranovex is a forward-driven technology company that builds intelligent digital products and scalable solutions. Founded in 2025, we specialize in developing smart platforms, AI-powered chatbots, and innovative tools that redefine how technology connects with people.
</p>

<p className="text-lg mb-4">
  Our mission is to blend technology, design, and data to create seamless digital experiences that inspire progress, simplify interaction, and deliver measurable impact. We believe in purposeful innovation that transforms ideas into practical, reliable systems.
</p>

<p className="text-lg">
  Every product we create is driven by precision, performance, and simplicity engineered to be intuitive, dependable, and built with excellence at every level.
</p>

          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl font-bold text-primary">2025</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Foundation Year</h3>
                    <p className="text-muted-foreground">
                      Ranovex was founded with a vision to create technology that matters. Started building cross-functional products with a focus on education and AI.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {workProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
          <p className="text-lg text-muted-foreground mb-8">
            A passionate group of innovators, designers, and developers committed to building the future of digital products. Our team brings together diverse expertise in technology, design, and product strategy.
          </p>
         
        </div>
      </section>
    </div>
  );
};

export default About;
