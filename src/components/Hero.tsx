import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Osama Orabi
              </h1>
              <div className="h-1 w-24 bg-gold"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Osama Orabi is an entrepreneur and creative mind who builds simple ideas into real projects. He works across content creation, digital identity, and creative ventures, with experience in brand building, media projects, and commercial appearances.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("work")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all hover-lift"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground font-semibold transition-all hover-lift"
              >
                Contact Me
              </Button>
            </div>
          </div>

          <div className="relative fade-in-delay-1">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl transform rotate-6"></div>
              <img
                src={profileImage}
                alt="Osama Orabi - Entrepreneur & Content Creator"
                className="relative rounded-2xl w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce fade-in-delay-3">
          <ArrowDown className="w-6 h-6 text-gold" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
