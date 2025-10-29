import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Search, Package, Globe, Shield, Clock, TrendingUp, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 justify-center m-auto flex flex-col items-center text-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 animate-fade-in">Precision. Speed. Assurance.</h1>
              <p className="text-xl text-white/90 mb-8 animate-fade-in">
                Global courier and logistics service you can trust. Every package matters, every delivery counts.
              </p>

              {/* Track Shipment Widget */}
              <Card className="shadow-strong animate-fade-in">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Track Your Shipment</h2>
                  <div className="flex gap-2">
                    <Input placeholder="Enter tracking number" className="flex-1" />
                    <Button className="bg-accent hover:opacity-90 text-accent-foreground" asChild>
                      <Link to="/tracking">
                        <Search className="h-4 w-4 mr-2" />
                        Track
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Clock className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">On-Time Delivery</h3>
                  <p className="text-muted-foreground">99.8% on-time delivery rate with real-time tracking and updates</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Secure Handling</h3>
                  <p className="text-muted-foreground">Every package treated as vital with comprehensive insurance coverage</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Globe className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Global Reach</h3>
                  <p className="text-muted-foreground">Serving 190+ countries with local expertise and global standards</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Get Quote Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Get an Instant Quote</h2>
                <p className="text-lg text-muted-foreground">Calculate shipping costs in seconds with our transparent pricing</p>
              </div>

              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">From</label>
                      <Input placeholder="Origin country/city" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">To</label>
                      <Input placeholder="Destination country/city" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Weight (kg)</label>
                      <Input type="number" placeholder="0.0" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Type</label>
                      <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                        <option>Express</option>
                        <option>Standard</option>
                        <option>Freight</option>
                      </select>
                    </div>
                  </div>
                  <Button className="w-full bg-accent hover:opacity-90 text-accent-foreground" asChild>
                    <Link to="/quote">Calculate Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Choose EnvoyRoute</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine cutting-edge technology with human expertise to deliver exceptional service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: CheckCircle2, text: "Real-time tracking on all shipments" },
                { icon: CheckCircle2, text: "24/7 customer support" },
                { icon: CheckCircle2, text: "Flexible pickup and delivery options" },
                { icon: CheckCircle2, text: "Comprehensive insurance coverage" },
                { icon: CheckCircle2, text: "API integration for businesses" },
                { icon: CheckCircle2, text: "Carbon-neutral shipping options" },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <item.icon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild className="bg-accent hover:opacity-90 text-accent-foreground">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Ready to Ship with Confidence?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust EnvoyRoute for their logistics needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
              <Button size="lg" className="bg-accent hover:opacity-90 text-accent-foreground" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
