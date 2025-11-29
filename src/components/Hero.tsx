import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import ScrollAnimation from "./ScrollAnimation";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${profileImage})`,
        backgroundSize: 'cover',
        backgroundPosition: `center ${offsetY * 0.5}px`,
      }}
    >
      {/* Content */}
      <ScrollAnimation>
        <div className="container mx-auto px-6 text-center relative z-10 fade-in">
          <h1 className="text-7xl md:text-9xl font-inter font-black text-white mb-8 tracking-tight">
            Osama Orabi
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 font-sans font-light tracking-wider">
            Entrepreneur & Content Creator
          </p>
        </div>
      </ScrollAnimation>

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
