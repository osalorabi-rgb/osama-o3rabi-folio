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
      <main className="flex flex-1 items-center px-6 pb-20 pt-28 md:pb-28 md:pt-44">
        <div className="container mx-auto max-w-5xl">
          <ScrollAnimation direction="left">
            <p className="mb-6 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Business Representation
            </p>
            <h1 className="max-w-4xl font-inter text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl md:leading-[1.05]">
              For businesses that operate more strongly than they appear.
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.15} direction="right">
            <div className="mt-10 max-w-2xl border-l-2 border-foreground pl-6 md:mt-12 md:pl-8">
              <p className="font-sans text-xl leading-relaxed text-muted-foreground md:text-2xl">
                I help align your positioning, trust, and digital presence with the strength of your actual business.
              </p>
              <p className="mt-7 font-sans text-base font-semibold tracking-wide md:text-lg">
                Diagnosis · Priorities · 30-Day Roadmap
              </p>
            </div>

            <Button asChild size="lg" className="mt-10 h-12 bg-foreground px-6 text-background hover:bg-foreground/90">
              <a
                href="https://wa.me/967772744377?text=Hi%20Osama%2C%20I%27d%20like%20to%20request%20a%20Business%20Review."
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a Business Review
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
