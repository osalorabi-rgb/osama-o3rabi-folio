import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollAnimation from "@/components/ScrollAnimation";

const BusinessRepresentation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Business Representation | Osama Orabi";

    return () => {
      document.title = "Osama Orabi | Founder & Business Builder";
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex flex-1 px-6 pb-20 pt-28 md:pb-28 md:pt-40">
        <div className="container mx-auto max-w-4xl">
          <ScrollAnimation direction="left">
            <h1 className="font-inter text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl md:leading-[1.05]">
              Business Representation System
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.15} direction="right">
            <div className="mt-10 max-w-3xl space-y-6 font-sans text-lg leading-relaxed text-muted-foreground md:mt-12 md:text-xl">
              <p className="font-semibold text-foreground md:text-2xl">
                Sometimes the business is better than the way it looks from the outside.
              </p>
              <p>
                A company can have strong operations, good clients, solid experience, and real value, yet still appear average online.
              </p>
              <p>
                That gap affects how customers, partners, and decision-makers perceive the business.
              </p>
              <p className="font-semibold text-foreground">
                Business Representation helps selected companies identify and close that gap by aligning their positioning, trust, and digital presence with the strength of the actual business.
              </p>
            </div>

            <div className="mt-12 border-l-2 border-foreground pl-6 md:mt-14 md:pl-8">
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                From diagnosis to action
              </p>
              <p className="mt-3 font-sans text-lg font-semibold tracking-wide md:text-xl">
                Diagnosis · Priorities · 30-Day Roadmap
              </p>
            </div>

            <div className="mt-14 border-t border-border pt-8">
              <p className="max-w-2xl font-sans text-lg font-semibold leading-relaxed">
                For more details about the process, or to discuss your business
              </p>
            </div>

            <Button asChild size="lg" className="mt-6 h-12 bg-foreground px-6 text-background hover:bg-foreground/90">
              <a
                href="https://wa.me/967772744377?text=Hi%20Osama%2C%20I%27d%20like%20to%20discuss%20Business%20Representation."
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in Touch
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </ScrollAnimation>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessRepresentation;
