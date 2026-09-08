import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import ScrollAnimation from "./ScrollAnimation";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${profileImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Content */}
      <ScrollAnimation>
        <div className="container mx-auto px-6 text-center relative z-10 fade-in">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-inter font-black text-white mb-6 md:mb-8 tracking-tight">
            Osama Orabi
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 font-sans font-light tracking-wider">
            Entrepreneur & Content Creator
          </p>

          <Button
            asChild
            variant="outline"
            className="mt-8 border-white/60 bg-black/10 text-white backdrop-blur-sm hover:bg-white hover:text-foreground"
          >
            <Link to="/business-representation">
              Business Representation
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </ScrollAnimation>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer fade-in-delay-2 animate-bounce"
        onClick={() => scrollToSection("about")}
        role="button"
        tabIndex={0}
        aria-label="Scroll to introduction"
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") scrollToSection("about");
        }}
      >
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
