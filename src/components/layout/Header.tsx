import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-soft">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2 transition-base hover:opacity-80">
          <Package className="h-8 w-8 text-accent" />
          <span className="font-heading text-xl font-bold text-primary">EnvoyRoutesss</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-base hover:text-accent ${isActive(item.path) ? "text-accent" : "text-foreground"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex md:items-center md:gap-3">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-base"
          >
            <Link to="/tracking">Track Shipment</Link>
          </Button>
          <Button size="sm" className="bg-accent text-accent-foreground hover:opacity-90 transition-base" asChild>
            <Link to="/auth">Login</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background shadow-medium">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 text-sm font-medium transition-base hover:text-accent ${
                  isActive(item.path) ? "text-accent" : "text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 space-y-2">
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                <Link to="/tracking" onClick={() => setMobileMenuOpen(false)}>
                  Track Shipment
                </Link>
              </Button>
              <Button className="w-full bg-accent text-accent-foreground hover:opacity-90" asChild>
                <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
