
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, MessageSquare } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="w-44">
                <img 
                  src="/logo-company.svg" 
                  alt="Company Logo" 
                  className="h-8 w-auto" 
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-foreground/80 hover:text-[#6269D2] transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-foreground/80 hover:text-[#6269D2] transition-colors font-medium"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-foreground/80 hover:text-[#6269D2] transition-colors font-medium"
            >
              Pricing
            </a>
            <a
              href="https://docs.aci.dev"
              className="text-foreground/80 hover:text-[#6269D2] transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
            <div className="flex items-center space-x-3">
              <a 
                href="https://github.com/aci-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-[#6269D2] transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://discord.gg/aci-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-[#6269D2] transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
            <Button variant="outline" className="mr-2 border-[#8D94E1]/30 text-[#646CD2] hover:bg-[#B7BFFE]/10">
              Sign In
            </Button>
            <Button className="bg-[#6269D2] hover:bg-[#646CD2]">
              Get Started
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
            <div className="container py-4 space-y-4">
              <a
                href="#features"
                className="block px-4 py-2 text-foreground/80 hover:text-[#6269D2] hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block px-4 py-2 text-foreground/80 hover:text-[#6269D2] hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </a>
              <a
                href="#pricing"
                className="block px-4 py-2 text-foreground/80 hover:text-[#6269D2] hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="https://docs.aci.dev"
                className="block px-4 py-2 text-foreground/80 hover:text-[#6269D2] hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Docs
              </a>
              <div className="flex items-center space-x-4 px-4 py-2">
                <a 
                  href="https://github.com/aci-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-[#6269D2] transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://discord.gg/aci-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-[#6269D2] transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                </a>
              </div>
              <div className="pt-2 px-4 flex flex-col space-y-3">
                <Button variant="outline" className="w-full border-[#8D94E1]/30 text-[#646CD2] hover:bg-[#B7BFFE]/10">
                  Sign In
                </Button>
                <Button className="w-full bg-[#6269D2] hover:bg-[#646CD2]">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
