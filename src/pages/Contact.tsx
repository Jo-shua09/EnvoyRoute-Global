import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, MessageSquare, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const faqs = [
    {
      question: "How do I track my shipment?",
      answer: "You can track your shipment using the tracking number provided in your confirmation email. Simply enter it on our tracking page or use the search bar in the header.",
    },
    {
      question: "What are your shipping rates?",
      answer: "Our rates vary based on destination, weight, and service type. Use our instant quote calculator on the homepage or contact our sales team for custom business pricing.",
    },
    {
      question: "Do you offer insurance for shipments?",
      answer: "Yes, all shipments include basic insurance coverage. Additional insurance options are available for high-value items through our Special Cargo service.",
    },
    {
      question: "What items cannot be shipped?",
      answer: "We cannot ship hazardous materials, illegal items, or perishable goods through standard services. Contact us for specialized handling of sensitive cargo.",
    },
    {
      question: "How do I schedule a pickup?",
      answer: "Business account holders can schedule pickups through their dashboard. For one-time pickups, contact our customer service team at least 24 hours in advance.",
    },
    {
      question: "What is your refund policy?",
      answer: "We offer refunds for undelivered shipments or service failures. Claims must be submitted within 30 days of the scheduled delivery date.",
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
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Contact & Support
              </h1>
              <p className="text-xl text-white/90">
                We're here to help 24/7. Get in touch with our team for any questions or support needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground text-sm mb-3">Mon-Sun, 24/7</p>
                  <a href="tel:+18001234567" className="text-accent hover:underline font-semibold">
                    +1 (800) 123-4567
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground text-sm mb-3">24-hour response time</p>
                  <a href="mailto:support@envoyroute.com" className="text-accent hover:underline font-semibold">
                    support@envoyroute.com
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    <MessageSquare className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">Live Chat</h3>
                  <p className="text-muted-foreground text-sm mb-3">Instant support</p>
                  <Button variant="link" className="text-accent font-semibold p-0 h-auto">
                    Start Chat →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form & Address */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your full name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input 
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="How can we help?"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:opacity-90 text-accent-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Address & Info */}
              <div className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading">Visit Our Office</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Headquarters</p>
                        <p className="text-muted-foreground">
                          123 Logistics Avenue<br />
                          Commerce District<br />
                          Global City, 10001
                        </p>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <p className="font-semibold mb-2">Business Hours</p>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed (24/7 support available online)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-medium bg-accent/5 border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-heading font-semibold mb-3">Business Inquiries</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      For partnership opportunities, bulk shipping solutions, or enterprise services, 
                      contact our business development team.
                    </p>
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                      <Link to="/contact">Contact Sales Team</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Quick answers to common questions about our services
                </p>
              </div>

              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left font-semibold">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
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

export default Contact;
