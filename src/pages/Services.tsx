import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Zap, Package, Ship, Box, Building2, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      name: "EnvoyRoute Express",
      description: "Premium overnight and same-day delivery service",
      features: [
        "Next-day delivery guaranteed",
        "Real-time tracking updates",
        "Priority handling",
        "Up to 50kg per shipment",
        "Door-to-door service",
      ],
      transitTime: "1-2 business days",
    },
    {
      icon: Package,
      name: "EnvoyRoute Standard",
      description: "Reliable and cost-effective shipping solution",
      features: ["3-5 business days delivery", "Full tracking visibility", "Secure packaging", "Up to 100kg per shipment", "Signature on delivery"],
      transitTime: "3-5 business days",
    },
    {
      icon: Ship,
      name: "Global Freight",
      description: "International shipping for large cargo",
      features: [
        "Air and sea freight options",
        "Customs clearance support",
        "Bulk shipment discounts",
        "No weight restrictions",
        "Dedicated account manager",
      ],
      transitTime: "7-21 business days",
    },
    {
      icon: Box,
      name: "Special Cargo",
      description: "Specialized handling for sensitive items",
      features: [
        "Temperature-controlled transport",
        "Fragile item protection",
        "Hazmat certified",
        "White-glove service",
        "Enhanced insurance coverage",
      ],
      transitTime: "Variable based on requirements",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Services & Solutions</h1>
              <p className="text-xl text-white/90">
                Comprehensive logistics solutions tailored to your business needs. From express delivery to specialized freight, we've got you
                covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-heading">{service.name}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-secondary rounded-lg p-3">
                          <p className="text-sm text-muted-foreground mb-1">Transit Time</p>
                          <p className="font-semibold">{service.transitTime}</p>
                        </div>

                        <div>
                          <p className="font-semibold mb-3">Key Features:</p>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button className="w-full bg-accent hover:opacity-90 text-accent-foreground" asChild>
                          <Link to="/quote">Get a Quote</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Business Solutions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Building2 className="h-16 w-16 text-accent mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Business Solutions</h2>
                <p className="text-lg text-muted-foreground">Specialized services for SMBs and e-commerce businesses</p>
              </div>

              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-4">Enterprise Features</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Dedicated account management</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>API integration for seamless workflows</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Volume-based discounts</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Customized reporting and analytics</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-4">Support Benefits</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>24/7 priority customer support</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Flexible pickup scheduling</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Consolidated invoicing</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Returns management</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-4">Interested in our business solutions?</p>
                      <Button size="lg" className="bg-accent hover:opacity-90 text-accent-foreground" asChild>
                        <Link to="/contact">Contact Sales Team</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
