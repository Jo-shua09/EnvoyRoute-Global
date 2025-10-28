import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calculator, Loader2, Package, Clock, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Quote = () => {
  const { toast } = useToast();
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  const [quoteData, setQuoteData] = useState({
    from: "",
    to: "",
    weight: "",
    serviceType: "express",
  });

  const [quoteResults] = useState({
    express: { price: 45.99, time: "1-2 business days" },
    standard: { price: 24.99, time: "3-5 business days" },
    freight: { price: 89.99, time: "7-14 business days" },
  });

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    
    // Simulate calculation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setShowResults(true);
    setIsCalculating(false);
    
    toast({
      title: "Quote Calculated!",
      description: "Your shipping options are ready below.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Calculator className="h-16 w-16 text-white mx-auto mb-6 animate-fade-in" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 animate-fade-in">
                Get an Instant Quote
              </h1>
              <p className="text-xl text-white/90 animate-fade-in">
                Calculate shipping costs in seconds with our transparent pricing
              </p>
            </div>
          </div>
        </section>

        {/* Quote Calculator */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-medium animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Calculate Your Shipping Cost</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCalculate} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">From (Origin) *</label>
                        <Input
                          required
                          value={quoteData.from}
                          onChange={(e) => setQuoteData({...quoteData, from: e.target.value})}
                          placeholder="Country or City"
                          disabled={isCalculating}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">To (Destination) *</label>
                        <Input
                          required
                          value={quoteData.to}
                          onChange={(e) => setQuoteData({...quoteData, to: e.target.value})}
                          placeholder="Country or City"
                          disabled={isCalculating}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Weight (kg) *</label>
                        <Input
                          type="number"
                          step="0.1"
                          min="0.1"
                          required
                          value={quoteData.weight}
                          onChange={(e) => setQuoteData({...quoteData, weight: e.target.value})}
                          placeholder="0.0"
                          disabled={isCalculating}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Service Type *</label>
                        <select
                          className="w-full h-10 px-3 rounded-md border border-input bg-background"
                          value={quoteData.serviceType}
                          onChange={(e) => setQuoteData({...quoteData, serviceType: e.target.value})}
                          disabled={isCalculating}
                        >
                          <option value="express">EnvoyRoute Express</option>
                          <option value="standard">EnvoyRoute Standard</option>
                          <option value="freight">Global Freight</option>
                        </select>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:opacity-90 text-accent-foreground"
                      disabled={isCalculating}
                    >
                      {isCalculating ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Calculating...
                        </>
                      ) : (
                        <>
                          <Calculator className="mr-2 h-4 w-4" />
                          Calculate Quote
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Results Section */}
        {showResults && (
          <section className="py-16 animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-heading font-bold text-center mb-12">
                  Your Shipping Options
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="shadow-medium hover:shadow-strong transition-smooth border-2 border-transparent hover:border-accent">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <Package className="h-12 w-12 text-accent mx-auto mb-4" />
                        <h3 className="text-xl font-heading font-bold mb-2">Express</h3>
                        <p className="text-3xl font-bold text-accent mb-1">${quoteResults.express.price}</p>
                        <p className="text-sm text-muted-foreground flex items-center justify-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {quoteResults.express.time}
                        </p>
                      </div>
                      <ul className="space-y-2 text-sm mb-6">
                        <li className="flex items-center">
                          <Shield className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          Next-day delivery
                        </li>
                        <li className="flex items-center">
                          <Shield className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          Priority handling
                        </li>
                        <li className="flex items-center">
                          <Shield className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          Real-time tracking
                        </li>
                      </ul>
                      <Button className="w-full bg-accent hover:opacity-90 text-accent-foreground">
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium hover:shadow-strong transition-smooth border-2 border-transparent hover:border-accent">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <Package className="h-12 w-12 text-accent mx-auto mb-4" />
                        <h3 className="text-xl font-heading font-bold mb-2">Standard</h3>
                        <p className="text-3xl font-bold text-accent mb-1">${quoteResults.standard.price}</p>
                        <p className="text-sm text-muted-foreground flex items-center justify-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {quoteResults.standard.time}
                        </p>
                      </div>
                      <ul className="space-y-2 text-sm mb-6">
                        <li className="flex items-center">
                          <Shield className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          Reliable delivery
                        </li>
                        <li className="flex items-center">
                          <Shield className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          Secure packaging
                        </li>
                        <li className="flex items-center">
                          <Shield className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          Full tracking
                        </li>
                      </ul>
                      <Button className="w-full bg-accent hover:opacity-90 text-accent-foreground">
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium hover:shadow-strong transition-smooth border-2 border-transparent hover:border-accent">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <Package className="h-12 w-12 text-accent mx-auto mb-4" />
                        <h3 className="text-xl font-heading font-bold mb-2">Freight</h3>
                        <p className="text-3xl font-bold text-accent mb-1">${quoteResults.freight.price}</p>
                        <p className="text-sm text-muted-foreground flex items-center justify-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {quoteResults.freight.time}
                        </p>
                      </div>
                      <ul className="space-y-2 text-sm mb-6">
                        <li className="flex items-center">
                          <Shield className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          Large cargo
                        </li>
                        <li className="flex items-center">
                          <Shield className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          Customs support
                        </li>
                        <li className="flex items-center">
                          <Shield className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          Bulk discounts
                        </li>
                      </ul>
                      <Button className="w-full bg-accent hover:opacity-90 text-accent-foreground">
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-12">
                  <p className="text-muted-foreground mb-4">
                    Need help choosing the right service?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Link to="/contact">Contact Support</Link>
                    </Button>
                    <Button asChild className="bg-accent hover:opacity-90 text-accent-foreground">
                      <Link to="/services">View All Services</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Quote;
