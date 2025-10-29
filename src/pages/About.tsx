import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Globe, Shield, TrendingUp, Users, Award, Leaf } from "lucide-react";
import networkImage from "@/assets/global-network.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every package is treated as vital cargo with comprehensive insurance and secure handling protocols",
    },
    {
      icon: TrendingUp,
      title: "Technological Excellence",
      description: "Cutting-edge tracking systems and automated logistics for maximum efficiency",
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "24/7 dedicated support and personalized service for every client",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Carbon-neutral shipping options and eco-friendly packaging solutions",
    },
  ];

  const milestones = [
    { year: "2010", event: "Founded in San Francisco with a vision to revolutionize logistics" },
    { year: "2013", event: "Expanded to 50 countries, establishing global distribution network" },
    { year: "2016", event: "Launched real-time tracking technology and mobile app" },
    { year: "2019", event: "Reached 1 million successful deliveries milestone" },
    { year: "2022", event: "Introduced carbon-neutral shipping program" },
    { year: "2024", event: "Operating in 190+ countries with 500+ distribution centers" },
  ];

  const stats = [
    { value: "190+", label: "Countries Served" },
    { value: "500+", label: "Distribution Centers" },
    { value: "10M+", label: "Annual Deliveries" },
    { value: "99.8%", label: "On-Time Rate" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Our Assurance to You</h1>
              <p className="text-xl text-white/90">Building trust through precision, reliability, and exceptional service since 2010</p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-medium">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center justify-center mb-6">
                    <Globe className="h-16 w-16 text-accent" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-center mb-6">Our Mission</h2>
                  <p className="text-lg text-center text-muted-foreground leading-relaxed">
                    EnvoyRoute is committed to revolutionizing global logistics through innovative technology, unwavering reliability, and exceptional
                    customer service. We believe every package tells a story, and we're honored to be part of that journey—connecting businesses,
                    families, and communities across the globe with precision and care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">The principles that guide every decision we make</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Network */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Global Reach, Local Expertise</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our extensive network spans 190+ countries with over 500 strategically located distribution centers. This global infrastructure,
                    combined with local market knowledge, ensures your shipments are handled with expertise at every stage of their journey.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Award className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">ISO 9001 Certified</p>
                        <p className="text-sm text-muted-foreground">International quality management standards</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Comprehensive Insurance</p>
                        <p className="text-sm text-muted-foreground">Full coverage on all shipments</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Leaf className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Carbon Neutral Options</p>
                        <p className="text-sm text-muted-foreground">Environmentally responsible shipping</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={networkImage} alt="Global logistics network" className="rounded-lg shadow-medium w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Journey</h2>
                <p className="text-lg text-muted-foreground">Milestones that shaped EnvoyRoute</p>
              </div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="text-2xl font-heading font-bold text-accent">{milestone.year}</span>
                    </div>
                    <div className="flex-1 pb-8 border-l-2 border-accent pl-6 relative">
                      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-accent -translate-x-[9px]" />
                      <p className="text-lg">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground">Trusted by businesses around the world</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  quote:
                    "EnvoyRoute has been instrumental in our international expansion. Their reliability and tracking capabilities give us complete confidence.",
                  author: "Sarah Chen",
                  company: "Tech Innovations Inc.",
                },
                {
                  quote:
                    "The dedicated support and flexible solutions have streamlined our entire logistics operation. Couldn't ask for a better partner.",
                  author: "Michael Rodriguez",
                  company: "Global Retail Co.",
                },
                {
                  quote: "From SMB to enterprise, EnvoyRoute scaled with us. Their API integration made everything seamless.",
                  author: "Emily Thompson",
                  company: "E-Commerce Solutions",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
