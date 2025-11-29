import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-display font-bold text-foreground hover:opacity-70 transition-opacity"
          >
            o3rabi
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:bg-transparent hover:opacity-70 transition-opacity"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("work")}
              className="text-foreground hover:bg-transparent hover:opacity-70 transition-opacity"
            >
              Work
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:bg-transparent hover:opacity-70 transition-opacity"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:opacity-70 transition-opacity"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-2 fade-in">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("hero")}
              className="w-full justify-start text-base h-12 hover:bg-secondary"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("work")}
              className="w-full justify-start text-base h-12 hover:bg-secondary"
            >
              Work
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="w-full justify-start text-base h-12 hover:bg-secondary"
            >
              Contact
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
