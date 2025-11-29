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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-purple/5" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="relative group"
          >
            <div className="text-2xl font-bold font-heading gradient-text transition-all group-hover:scale-110">
              OA
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-purple transition-all hover:scale-105 font-semibold"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("work")}
              className="text-foreground hover:text-cyan transition-all hover:scale-105 font-semibold"
            >
              Work
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-orange transition-all hover:scale-105 font-semibold"
            >
              Contact
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="ml-4 bg-gradient-accent hover:opacity-90 text-background font-bold hover-lift"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-purple/10 rounded-xl transition-colors"
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
          <div className="md:hidden mt-6 pb-6 space-y-3 fade-in">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("hero")}
              className="w-full justify-start text-lg h-14 hover:bg-purple/10 hover:text-purple transition-all"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("work")}
              className="w-full justify-start text-lg h-14 hover:bg-cyan/10 hover:text-cyan transition-all"
            >
              Work
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="w-full justify-start text-lg h-14 hover:bg-orange/10 hover:text-orange transition-all"
            >
              Contact
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full h-14 bg-gradient-accent hover:opacity-90 text-background font-bold text-lg"
            >
              Let's Talk
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
