import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Search, Package, MapPin, Clock, CheckCircle2, Truck } from "lucide-react";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Mock tracking data
  const trackingData = {
    trackingNumber: "ENV123456789",
    status: "In Transit",
    progress: 65,
    currentLocation: "Distribution Center - Los Angeles, CA",
    destination: "New York, NY",
    eta: "2024-10-30, 2:00 PM",
    events: [
      {
        timestamp: "2024-10-28, 10:30 AM",
        status: "Package Picked Up",
        location: "San Francisco, CA",
        icon: Package,
      },
      {
        timestamp: "2024-10-28, 3:45 PM",
        status: "Departed Facility",
        location: "San Francisco Distribution Center",
        icon: Truck,
      },
      {
        timestamp: "2024-10-29, 8:15 AM",
        status: "In Transit",
        location: "Phoenix, AZ",
        icon: Truck,
      },
      {
        timestamp: "2024-10-29, 6:30 PM",
        status: "Arrived at Facility",
        location: "Los Angeles Distribution Center",
        icon: MapPin,
      },
    ],
  };

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      setShowResults(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Section */}
            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Track Your Shipment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Enter your tracking number to see real-time updates on your shipment
                </p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter tracking number (e.g., ENV123456789)" 
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleTrack}
                    className="bg-accent hover:opacity-90 text-accent-foreground"
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Track
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            {showResults && (
              <>
                {/* Status Overview */}
                <Card className="shadow-medium mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Tracking Number</p>
                        <p className="text-xl font-semibold">{trackingData.trackingNumber}</p>
                      </div>
                      <div className="px-4 py-2 bg-status/20 text-status-foreground rounded-lg">
                        <p className="text-sm font-semibold">{trackingData.status}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Delivery Progress</span>
                        <span className="font-semibold">{trackingData.progress}%</span>
                      </div>
                      <Progress value={trackingData.progress} className="h-3" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Current Location</p>
                          <p className="font-semibold">{trackingData.currentLocation}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Package className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Destination</p>
                          <p className="font-semibold">{trackingData.destination}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                          <p className="font-semibold">{trackingData.eta}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map Placeholder */}
                <Card className="shadow-medium mb-6">
                  <CardContent className="p-6">
                    <div className="bg-secondary rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-border">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Interactive map showing shipment route</p>
                        <p className="text-sm text-muted-foreground mt-1">From San Francisco to New York</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Event Timeline */}
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">Shipment History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {trackingData.events.map((event, index) => {
                        const Icon = event.icon;
                        return (
                          <div key={index} className="flex items-start space-x-4 relative">
                            {index !== trackingData.events.length - 1 && (
                              <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-border" />
                            )}
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center relative z-10">
                              <Icon className="h-5 w-5 text-accent" />
                            </div>
                            <div className="flex-1 pb-8">
                              <p className="font-semibold mb-1">{event.status}</p>
                              <p className="text-sm text-muted-foreground mb-1">{event.location}</p>
                              <p className="text-xs text-muted-foreground">{event.timestamp}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {!showResults && (
              <Card className="shadow-soft">
                <CardContent className="p-12 text-center">
                  <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Enter a tracking number above to view shipment details
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tracking;
