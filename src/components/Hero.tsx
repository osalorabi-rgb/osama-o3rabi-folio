import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${profileImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10 fade-in">
        <h1 className="text-7xl md:text-9xl font-display font-bold text-white mb-8 tracking-tight" style={{ fontStyle: 'italic' }}>
          Osama Orabi
        </h1>
        
        <p className="text-2xl md:text-3xl text-white/90 font-light tracking-wider">
          Entrepreneur & Content Creator
        </p>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer fade-in-delay-2 animate-bounce"
        onClick={() => scrollToSection("work")}
      >
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
