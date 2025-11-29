import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8 slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple/10 border border-purple/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple" />
              <span className="text-sm text-purple-light font-medium">Creative Entrepreneur</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight font-heading">
                <span className="gradient-text">Osama</span>
                <br />
                <span className="text-foreground">Orabi</span>
              </h1>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-1 bg-gradient-accent rounded-full"></div>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    An entrepreneur and creative mind who builds simple ideas into real projects.
                  </p>
                </div>
                <p className="text-lg text-muted-foreground/80 leading-relaxed pl-7">
                  Works across content creation, digital identity, and creative ventures, with experience in brand building, media projects, and commercial appearances.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                size="lg"
                onClick={() => scrollToSection("work")}
                className="bg-purple hover:bg-purple-dark text-primary-foreground font-semibold transition-all hover-lift pulse-glow group"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-cyan text-cyan hover:bg-cyan hover:text-secondary-foreground font-semibold transition-all hover-lift"
              >
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Profile image */}
          <div className="relative slide-in-right">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange rounded-3xl rotate-12 float"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-cyan/30 rounded-3xl -rotate-12 float" style={{ animationDelay: '1s' }}></div>
              
              {/* Main image container */}
              <div className="relative z-10 hover-tilt transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-xl opacity-50"></div>
                <div className="relative rounded-3xl overflow-hidden border-4 border-purple/30 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Osama Orabi - Entrepreneur & Content Creator"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 fade-in-delay-3">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <ArrowDown className="w-6 h-6 text-purple" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
